import logging
import typing as t
import re

from functools import reduce
from sqlglot import exp
from sqlglot.errors import ErrorLevel
from sqlglot.expressions import Properties
from sqlglot.helper import ensure_list
from sqlglot.optimizer.qualify_columns import quote_identifiers as quote_identifiers_
from sqlmesh.core.dialect import to_schema, parse_one
from sqlmesh.core.engine_adapter import EngineAdapter
from sqlmesh.core.engine_adapter.shared import DataObject, DataObjectType

if True: # t.TYPE_CHECKING:
    TableName = t.Union[str, exp.Table]
    SchemaName = t.Union[str, exp.Table]

logger = logging.getLogger(__name__)


class ClickHouseEngineAdapter(
    EngineAdapter
):
    TABLES_TABLE = "information_schema.tables"
    COLUMNS_TABLE = "information_schema.columns"
    DEFAULT_BATCH_SIZE = 1000
    dialect: str = "clickhouse"
    ESCAPE_JSON = True
    SUPPORTS_INDEXES = True

    # def fetchall(
    #     self,
    #     query: t.Union[exp.Expression, str],
    #     ignore_unsupported_errors: bool = False,
    #     quote_identifiers: bool = False,
    # ) -> t.List[t.Tuple]:
    #     with self.transaction():
    #         self.execute(
    #             query,
    #             ignore_unsupported_errors=ignore_unsupported_errors,
    #             quote_identifiers=quote_identifiers,
    #         )
    #         if isinstance(query, exp.Select) and query.expressions:
    #             cols = [x.find_all(exp.Column).__next__().this.this for x in query.expressions]
    #             if 'snapshot' in cols and query.args.get('from', False) and '%(db)s.%(this)s' % query.args['from'].this.args:

    #         data = self.cursor.fetchall()
            
    def get_current_catalog(self) -> t.Optional[str]:
        """Returns the catalog name of the current connection."""
        return None

    def get_data_objects(
        self, schema_name: SchemaName, object_names: t.Optional[t.Set[str]] = None
    ) -> t.List[DataObject]:
        """
        Returns all the data objects that exist in the given schema and optionally catalog.
        """
        catalog = self.get_current_catalog()
        table_query = exp.select(
            exp.column("table_schema").as_("database"),
            exp.column("table_name").as_("name"),
            exp.Literal.string("TABLE").as_("type"),
        ).from_("information_schema.tables")
        view_query = exp.select(
            exp.column("table_schema").as_("database"),
            exp.column("table_name").as_("name"),
            exp.Literal.string("VIEW").as_("type"),
        ).from_("information_schema.views")
        # materialized_view_query = exp.select(
        #     exp.column("database").as_("schema_name"),
        #     exp.column("name").as_("name"),
        #     exp.Literal.string("MATERIALIZED_VIEW").as_("type"),
        # ).from_("pg_matviews")
        subquery = exp.union(
            table_query,
            view_query,
            distinct=False,
        )
        query = (
            exp.select(
                '*'
            ).from_(
                subquery.subquery(alias="objs")
            ).where(exp.column("database").eq(to_schema(schema_name).db))
        )
        if object_names:
            query = query.where(exp.column("name").isin(*object_names))
        logger.debug('query: \'%s\'' % query)
        df = self.fetchdf(query)
        return [
            DataObject(
                catalog=catalog, schema=row.database, name=row.name, type=DataObjectType.from_str(row.type)  # type: ignore
            )
            for row in df.itertuples()
        ]

    def _fetch_native_df(
        self, query: t.Union[exp.Expression, str], quote_identifiers: bool = False
    ):
        """Fetches a Pandas DataFrame from a SQL query."""
        from pandas.io.sql import read_sql_query

        sql = (
            self._to_sql(query, quote=quote_identifiers)
            if isinstance(query, exp.Expression)
            else query
        )
        logger.debug(f"Executing SQL:\n{sql}")
        return read_sql_query(sql, self._connection_pool.get())
    
    def _fetch_columns(
        self, table_name: str, table_schema: str | None = None
    ) -> dict[str, dict]:
        if not table_schema:
            table_schema, table_name = table_name.split('.')

        table_schema = table_schema.strip("'")
        table_name = table_name.strip("'")
        
        self.cursor.execute(f"""
            select column_name, is_nullable, data_type
            from information_schema.columns
            where True
                and table_schema = '{table_schema}'
                and table_name = '{table_name}'
            order by ordinal_position
        """)
        fetched = self.cursor.fetchall()

        return {x[0]: {'is_null': x[1], 'type': x[2]} for x in fetched}

    def _to_sql(self, expression: exp.Expression, quote: bool = True, **kwargs: t.Any) -> str:
        """
        Converts an expression to a SQL string. Has a set of default kwargs to apply, and then default
        kwargs defined for the given dialect, and then kwargs provided by the user when defining the engine
        adapter, and then finally kwargs provided by the user when calling this method.
        """
        sql_gen_kwargs = {
            "dialect": "clickhouse",
            "pretty": False,
            "comments": False,
            # **self.sql_gen_kwargs,
            **kwargs,
        }

        expression = expression.copy()

        if quote:
            quote_identifiers_(expression)

        return expression.sql(**sql_gen_kwargs, copy=False)  # type: ignore

    def execute(
        self,
        expressions: t.Union[str, exp.Expression, t.Sequence[exp.Expression]],
        ignore_unsupported_errors: bool = False,
        quote_identifiers: bool = True,
        **kwargs: t.Any,
    ) -> None:
        # to_sql_kwargs = (
        #     {"unsupported_level": ErrorLevel.IGNORE} if ignore_unsupported_errors else {}
        # )

        with self.transaction():
            for expression in ensure_list(expressions):
                e: exp.Expression = parse_one(expression) if isinstance(expression, str) else expression # type: ignore
                    
                # sql: str = quote_identifiers_(e).sql()
                sql: str = self._to_sql(e, quote=quote_identifiers)
                logger.error('DEBUG SQL: %s' % sql)
                
                ### Correcting ALTER: for preventing Clickhouse' Nullable() types conflicts
                if isinstance(e, exp.AlterTable):
                    if not e.args['actions'] or not isinstance(e.args['actions'][0], exp.ColumnDef):
                        continue
                    sql = sql.replace(
                        self._to_sql(e.args['actions'][0]),
                        '%s Nullable(%s)' % (*self._to_sql(e.args['actions'][0]).split(' '),),
                    )

                # ### Correcting SELECT
                # if isinstance(e, exp.Select):
                #     if e.expressions and 'snap' [x.this.this for x in e.expressions]

                ### Correcting INSERT
                if isinstance(e, exp.Insert):
                    if not isinstance(e.expression, exp.Select):
                        continue

                    for x in e.expression.expressions: ### for every cast(...)
                        try:
                            logger.error('INSERT CAST: %s' % x.to_s())
                            ### preventing Clickhouse' Nullable() types conflicts
                            sql = sql.replace(
                                # self._to_sql(x),
                                # self._to_sql(x).replace(x.this.to.sql('clickhouse'), 'Nullable(%s)' % x.this.to.sql('clickhouse'))
                                self._to_sql(x).replace(self._to_sql(x.this.to), self._to_sql(x.this.to)), 
                                self._to_sql(x).replace(self._to_sql(x.this.to), 'Nullable(%s)' % self._to_sql(x.this.to))
                            )

                            ### TODO: preventing bad JSON-like data write
                        except:
                            pass

                ### Correcting CAST(NULL as TYPE): -> CAST(NULL as Nullable(TYPE))
                for x in e.find_all(exp.Cast):
                    if not isinstance(x.this, exp.Null):
                        continue
                    sql = sql.replace(
                        self._to_sql(x),
                        self._to_sql(
                            exp.cast(self._to_sql(x.this), 'Nullable(%s)' % self._to_sql(x.to)
                        ))
                    )
                
                ### Correcting VALUES: -> SELECT subquery
                for subque in [x for x in e.find_all(exp.Values)]:
                    aliases: list[str] = subque.alias_column_names
                    subque_selects = []
                    for unions in subque.expressions:
                        subque_selects.append(exp.select(*[x.as_(aliases[i]) for i, x in enumerate(unions)]))

                    subque_select = exp.subquery(
                        reduce(lambda a, b: exp.union(a, b, distinct=False), subque_selects), 
                        subque.alias
                    )#.select(*[exp.column(a) for a in aliases])

                    sql = sql.replace(
                        self._to_sql(subque),
                        self._to_sql(subque_select).replace('SELECT FROM ', '')
                    )

                ### Correcting CREATE TABLE 
                # logger.debug(f"Debugging SQL:\n{e}")
                engines = re.findall(r'\'MergeTree ORDER BY tuple\([^\)]*\)\'', sql)
                primaries: list[str] = []
                if isinstance(e, exp.Create):
                    ### fixing ENGINE: striping quotes
                    if engines:
                        sql = sql.replace(engines[0], engines[0].strip("'"))
                    
                    ### fixing CASTS: make all not primary nullable by default
                    if [x for x in e.find_all(exp.PrimaryKey)]:
                        primaries = [x for x in e.find_all(exp.PrimaryKey)][0].expressions
                        primaries = [x.this.this.strip('"') for x in primaries] # type: ignore
                        # logger.debug('primaries: %s' % primaries)
                    
                    logger.error('CREATECREATECREATE: %s' % e.this)
                    
                    for x in e.this.expressions:
                        if not isinstance(x, exp.ColumnDef):
                            continue
                        if x.this.this.strip('"') in primaries:
                            continue
                        ### TODO: refactor with builtin SQLMesh
                        sql = sql.replace(
                            self._to_sql(x),
                            '%s Nullable(%s)' % (*self._to_sql(x).split(' '),),
                        )

                # if isinstance(e, exp.Insert):
                #     if not isinstance(e.expression, exp.Select):
                #         continue
                sql = sql.replace('\\"', '\\\\"')

                logger.error('DEBUG FINAL SQL: %s' % sql)
                self.cursor.execute(sql, **kwargs)

    # @set_catalog
    def create_schema(
        self,
        schema_name: SchemaName,
        ignore_if_exists: bool = True,
        warn_on_error: bool = True,
    ) -> None:
        try:
            self.cursor.execute(
                exp.Create(
                    this=to_schema(schema_name),
                    kind="DATABASE",
                    exists=ignore_if_exists,
                ).sql('clickhouse')
            )
        except Exception as e:
            if not warn_on_error:
                raise
            logger.warning("Failed to create schema '%s': %s", schema_name, e)   

    # @set_catalog()
    def drop_schema(
        self,
        schema_name: SchemaName,
        ignore_if_not_exists: bool = True,
        cascade: bool = False,
    ) -> None:
        self.execute(
            exp.Drop(
                this=to_schema(schema_name),
                kind="DATABASE",
                exists=ignore_if_not_exists,
                cascade=cascade,
            )
        )

    def _create_table(
        self,
        table_name_or_schema: t.Union[exp.Schema, TableName],
        expression: t.Optional[exp.Expression],
        exists: bool = True,
        replace: bool = False,
        columns_to_types: t.Optional[t.Dict[str, exp.DataType]] = None,
        **kwargs: t.Any,
    ) -> None:
        exists = False if replace else exists
        
        if not isinstance(table_name_or_schema, exp.Schema):
            table_name_or_schema = exp.to_table(table_name_or_schema)
        
        properties = {'ENGINE': "MergeTree ORDER BY tuple(%s)"}
        ### Clickhouse' mandatory properties for "create" queries
        if table_name_or_schema:
            try:
                primaries = [x for x in table_name_or_schema.find_all(exp.PrimaryKey)]
                properties['ENGINE'] = properties['ENGINE'] % (
                    ", ".join([y.this.this for y in primaries[0].expressions]) if primaries else ""
                )
            except:
                logger.debug(primaries)
            
        create = exp.Create(
            this=table_name_or_schema,
            kind="TABLE",
            replace=replace,
            exists=exists,
            expression=expression,
            properties=Properties.from_dict(properties),
        )
        
        ### Replacing single-quoted properties' strings to dialect expressions
        # for p in properties.values():
        #     query = query.replace('\'%s\'' % p, p)
        ### Changing "order by tuple()" expression if found primary key statement
        # primary_key = found_key[0][13:-1] \
        #     if (found_key := re.findall(r'PRIMARY KEY [^\)]+\)', query)) \
        #     else ''
        # query = query % {'primary_key': primary_key}
        # logger.debug(f"Executing CREATE SQL:\n{create._to_sql()}")

        self.execute(create)

    def create_table(self, *args, **kwargs) -> None:
        super().create_table(*args, **kwargs)

    def drop_table(
        self, 
        table_name: TableName,
        exists: bool = True
    ) -> None:
        self.execute(
            exp.Drop(
                this=exp.to_table(table_name), 
                kind="TABLE", 
                exists=exists
            )
        )

    def update_table(
        self,
        table_name: t.Any,
        properties: t.Dict[str, t.Any],
        where: t.Optional[str | exp.Condition] = None,
        contains_json: bool = False,
    ) -> None:
        if contains_json and properties:
            properties = {
                k: self._escape_json(v)
                if isinstance(v, (str, exp.Subqueryable, exp.DerivedTable))
                else v
                for k, v in properties.items()
            }

        update = self._to_sql(exp.update(table_name, properties, where=where))

        query = update.replace('UPDATE ', 'ALTER TABLE ').replace('SET ', 'UPDATE ')

        self.execute(query)

    def _insert_append_query(
        self,
        table_name: TableName,
        query: t.Any,
        columns_to_types: t.Dict[str, exp.DataType],
        contains_json: bool = False,
        order_projections: bool = True,
    ) -> None:
        logger.debug(str(locals()))
        if contains_json:
            query = self._escape_json(query)
        if order_projections and query.named_selects != list(columns_to_types):
            if isinstance(query, exp.Subqueryable):
                query = query.subquery(alias="_ordered_projections")
            query = exp.select(*columns_to_types).from_(query)
        
        insert = exp.insert(query, table_name, columns=list(columns_to_types))

        self.execute(insert)

    def create_index(
        self,
        table_name: t.Any,
        index_name: str,
        columns: t.Tuple[str, ...],
        exists: bool = True,
    ) -> None:
        if not self.SUPPORTS_INDEXES:
            return

        fields = '(%s)' % ', '.join(columns) \
            if len(columns) > 1 \
            else columns[0]
        
        query = "ALTER TABLE %s ADD INDEX %s %s TYPE bloom_filter;" % (
            table_name, index_name, fields
        )
        
        self.execute(query)