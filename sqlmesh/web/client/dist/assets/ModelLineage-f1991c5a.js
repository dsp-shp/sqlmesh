import{r as l,R as o,j as e,c as H,B as K,az as ie,g as Q,h as W,d as ce,s as A,i as R,q as F,P as de,V as me,aA as ue,p as he,L as ee,S as te,z as q,D as pe}from"./index-b4cc7002.js";import{d as fe,e as se,s as ne,f as G,P as ae,h as O,b as _,i as ge,j as U,R as we,k as xe,l as ve,m as be,n as X,o as Z,p as Y,q as Ne,r as ye,t as je,v as Ee}from"./context-6feb9e3e.js";import{a as Ce}from"./editor-6e8e6249.js";import{X as ze,L as Me}from"./ListboxShow-47d2a8d7.js";import{S as Se}from"./SearchList-77abdd1b.js";import{z as ke}from"./Input-33434eba.js";import{w as T}from"./transition-81d2b6e1.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./file-de7948b6.js";import"./project-97eed5a7.js";import"./SourceList-991f2648.js";import"./index-084e29c2.js";function Le({title:t,titleId:s,...n},m){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:m,"aria-labelledby":s},n),t?l.createElement("title",{id:s},t):null,l.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z",clipRule:"evenodd"}))}const Ie=l.forwardRef(Le),Ae=Ie;function Be(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},o.createElement("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"}))}function He(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5"},o.createElement("path",{d:"M0 0h32v4.2H0z"}))}function De(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30"},o.createElement("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"}))}function Re(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},o.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"}))}function _e(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32"},o.createElement("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"}))}const D=({children:t,className:s,...n})=>o.createElement("button",{type:"button",className:O(["react-flow__controls-button",s]),...n},t);D.displayName="ControlButton";const Fe=t=>({isInteractive:t.nodesDraggable||t.nodesConnectable||t.elementsSelectable,minZoomReached:t.transform[2]<=t.minZoom,maxZoomReached:t.transform[2]>=t.maxZoom}),oe=({style:t,showZoom:s=!0,showFitView:n=!0,showInteractive:m=!0,fitViewOptions:u,onZoomIn:a,onZoomOut:f,onFitView:h,onInteractiveChange:v,className:p,children:r,position:b="bottom-left"})=>{const g=fe(),[C,N]=l.useState(!1),{isInteractive:y,minZoomReached:w,maxZoomReached:i}=se(Fe,ne),{zoomIn:j,zoomOut:E,fitView:c}=G();if(l.useEffect(()=>{N(!0)},[]),!C)return null;const I=()=>{j(),a==null||a()},z=()=>{E(),f==null||f()},M=()=>{c(u),h==null||h()},x=()=>{g.setState({nodesDraggable:!y,nodesConnectable:!y,elementsSelectable:!y}),v==null||v(!y)};return o.createElement(ae,{className:O(["react-flow__controls",p]),position:b,style:t,"data-testid":"rf__controls"},s&&o.createElement(o.Fragment,null,o.createElement(D,{onClick:I,className:"react-flow__controls-zoomin",title:"zoom in","aria-label":"zoom in",disabled:i},o.createElement(Be,null)),o.createElement(D,{onClick:z,className:"react-flow__controls-zoomout",title:"zoom out","aria-label":"zoom out",disabled:w},o.createElement(He,null))),n&&o.createElement(D,{className:"react-flow__controls-fitview",onClick:M,title:"fit view","aria-label":"fit view"},o.createElement(De,null)),m&&o.createElement(D,{className:"react-flow__controls-interactive",onClick:x,title:"toggle interactivity","aria-label":"toggle interactivity"},y?o.createElement(_e,null):o.createElement(Re,null)),r)};oe.displayName="Controls";var Ve=l.memo(oe),S;(function(t){t.Lines="lines",t.Dots="dots",t.Cross="cross"})(S||(S={}));function $e({color:t,dimensions:s,lineWidth:n}){return o.createElement("path",{stroke:t,strokeWidth:n,d:`M${s[0]/2} 0 V${s[1]} M0 ${s[1]/2} H${s[0]}`})}function Ue({color:t,radius:s}){return o.createElement("circle",{cx:s,cy:s,r:s,fill:t})}const Te={[S.Dots]:"#91919a",[S.Lines]:"#eee",[S.Cross]:"#e2e2e2"},We={[S.Dots]:1,[S.Lines]:1,[S.Cross]:6},Ge=t=>({transform:t.transform,patternId:`pattern-${t.rfId}`});function le({id:t,variant:s=S.Dots,gap:n=20,size:m,lineWidth:u=1,offset:a=2,color:f,style:h,className:v}){const p=l.useRef(null),{transform:r,patternId:b}=se(Ge,ne),g=f||Te[s],C=m||We[s],N=s===S.Dots,y=s===S.Cross,w=Array.isArray(n)?n:[n,n],i=[w[0]*r[2]||1,w[1]*r[2]||1],j=C*r[2],E=y?[j,j]:i,c=N?[j/a,j/a]:[E[0]/a,E[1]/a];return o.createElement("svg",{className:O(["react-flow__background",v]),style:{...h,position:"absolute",width:"100%",height:"100%",top:0,left:0},ref:p,"data-testid":"rf__background"},o.createElement("pattern",{id:b+t,x:r[0]%i[0],y:r[1]%i[1],width:i[0],height:i[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${c[0]},-${c[1]})`},N?o.createElement(Ue,{color:g,radius:j/a}):o.createElement($e,{dimensions:E,color:g,lineWidth:u})),o.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${b+t})`}))}le.displayName="Background";var Oe=l.memo(le);function Pe({handleSelect:t}){const{models:s,lineage:n,mainNode:m,connectedNodes:u}=_(),[a,f]=l.useState(!1),[h,v]=l.useState([]),[p,r]=l.useState(!1);l.useEffect(()=>{v([])},[m,s,n]);function b(){f(!0)}function g(){f(!1)}function C(N){N.length<1||ce(h)||A(m)||A(n)||(r(!0),setTimeout(()=>{const y=Array.from(ge(n,m));v(Object.keys(n).map(w=>{var i;return{name:w,displayName:((i=s.get(w))==null?void 0:i.displayName)??decodeURI(w),description:`${y.includes(w)?"Upstream":"Downstream"} | ${u.has(w)?"Directly":"Indirectly"} Connected`}})),r(!1)},300))}return e.jsxs("div",{className:H("w-full",a?"block absolute top-0 left-0 right-0 z-10 pr-10 bg-light dark:bg-dark @[40rem]:items-end @[40rem]:justify-end @[40rem]:flex @[40rem]:static @[40rem]:pr-0":"items-end justify-end flex"),children:[e.jsx(K,{shape:ie.Circle,className:H("flex @[40rem]:hidden !py-1 border-transparent",a?"hidden":"flex"),variant:Q.Alternative,size:W.sm,"aria-label":"Show search",onClick:b,children:e.jsx(Ae,{className:"w-3 h-3 text-primary-500"})}),e.jsx(Se,{list:h,placeholder:"Find",searchBy:"displayName",displayBy:"displayName",direction:"top",descriptionBy:"description",showIndex:!1,size:W.sm,onSelect:t,isLoading:p,className:H("w-full @sm:min-w-[12rem] @[40rem]:flex",a?"flex max-w-none":"hidden max-w-[20rem]"),isFullWidth:!0,onInput:C}),e.jsx("button",{className:H("flex @[40rem]:hidden bg-none border-none px-2 py-1 absolute right-0 top-0",a?"flex":"hidden"),"aria-label":"Hide search",onClick:g,children:e.jsx(ze,{className:"w-6 h-6 text-primary-500"})})]})}function J({nodes:t=[]}){const{setCenter:s}=G(),{activeNodes:n,models:m,mainNode:u,nodesMap:a,selectedNodes:f,setSelectedNodes:h,withImpacted:v,connectedNodes:p,lineageCache:r,setActiveEdges:b,setConnections:g,setLineage:C,setLineageCache:N}=_(),y=A(u)?void 0:m.get(u),w=n.size>0?n.size:p.size,i=f.size,j=p.size-1,E=t.filter(x=>x.hidden).length,c=t.filter(x=>R(x.hidden)&&(x.data.type===U.external||x.data.type===U.seed)).length,I=t.filter(x=>R(x.hidden)&&x.data.type===U.cte).length,z=w>0&&w!==j+1;function M(){if(A(u))return;const x=a[u];A(x)||setTimeout(()=>{s(x.position.x,x.position.y,{zoom:.5,duration:0})},200)}return e.jsxs(e.Fragment,{children:[F(y)&&e.jsx("a",{className:"mr-2 w-full whitespace-nowrap text-ellipsis overflow-hidden @lg:block font-bold text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline",onClick:M,children:de(y.displayName,50,25)}),e.jsxs("span",{className:"bg-neutral-5 px-2 py-0.5 flex rounded-full mr-2",children:[e.jsxs("span",{className:"mr-2 whitespace-nowrap block",children:[e.jsx("b",{children:"All:"})," ",t.length]}),E>0&&e.jsxs("span",{className:"whitespace-nowrap block mr-2",children:[e.jsx("b",{children:"Hidden:"})," ",E]}),i>0&&e.jsxs("span",{className:"mr-2 whitespace-nowrap block",children:[e.jsx("b",{children:"Selected:"})," ",i]}),z&&e.jsxs("span",{className:"mr-2 whitespace-nowrap block",children:[e.jsx("b",{children:"Active:"})," ",w]}),(z||i>0||F(r))&&e.jsx(K,{size:W.xs,variant:Q.Neutral,format:me.Ghost,className:"!m-0 px-1",onClick:()=>{b(new Map),g(new Map),h(new Set),F(r)&&(C(r),N(void 0))},children:"Reset"})]}),c>0&&e.jsxs("span",{className:"mr-2 whitespace-nowrap block",children:[e.jsx("b",{children:"Sources"}),": ",c]}),R(z)&&v&&i===0&&j>0&&e.jsxs("span",{className:"mr-2 whitespace-nowrap block",children:[e.jsx("b",{children:"Upstream/Downstream:"})," ",j]}),I>0&&e.jsxs("span",{className:"mr-2 whitespace-nowrap block",children:[e.jsx("b",{children:"CTEs:"})," ",I]})]})}const qe=30;function it({model:t,highlightedNodes:s}){const{setActiveEdges:n,setConnections:m,setLineage:u,handleError:a,setSelectedNodes:f,setMainNode:h,setWithColumns:v,setHighlightedNodes:p,setNodeConnections:r,setLineageCache:b,setUnknownModels:g,models:C,unknownModels:N}=_(),{refetch:y,isFetching:w,cancel:i}=ue(t.name),{isFetching:j}=he(),[E,c]=l.useState(!1),[I,z]=l.useState(void 0);l.useEffect(()=>{const d=Ce();return d.addEventListener("message",M),y().then(({data:k})=>{z(k),!A(k)&&(c(!0),d.postMessage({topic:"lineage",payload:{currentLineage:{},newLineage:k,mainNode:t.fqn}}))}).catch(k=>{a==null||a(k)}).finally(()=>{n(new Map),m(new Map),f(new Set),b(void 0),h(t.fqn)}),()=>{i==null||i(),d.removeEventListener("message",M),d.terminate(),u({}),r({}),h(void 0),p({})}},[t.name,t.hash]),l.useEffect(()=>{Object.keys(I??{}).forEach(d=>{d=encodeURI(d),R(C.has(d))&&R(N.has(d))&&N.add(d)}),g(new Set(N))},[I,C]),l.useEffect(()=>{p(s??{})},[s]);function M(d){var k;d.data.topic==="lineage"&&(c(!1),r(d.data.payload.nodesConnections),u(d.data.payload.lineage),Object.values(((k=d.data.payload)==null?void 0:k.lineage)??{}).length>qe&&v(!1)),d.data.topic==="error"&&(a==null||a(d.data.error),c(!1))}const x=w||j||E;return e.jsxs("div",{className:"relative h-full w-full overflow-hidden",children:[x&&e.jsxs("div",{className:"absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full",children:[e.jsx("span",{className:"absolute w-full h-full z-10 bg-transparent-20 backdrop-blur-lg"}),e.jsxs(ee,{className:"inline-block z-10",children:[e.jsx(te,{className:"w-3 h-3 border border-neutral-10 mr-4"}),e.jsx("h3",{className:"text-md whitespace-nowrap",children:x?"Loading Model's Lineage...":"Merging Model's..."})]})]}),e.jsx(we,{children:e.jsx(Xe,{})})]})}function Xe(){const{withColumns:t,lineage:s,mainNode:n,selectedEdges:m,selectedNodes:u,withConnected:a,withImpacted:f,withSecondary:h,hasBackground:v,activeEdges:p,connectedNodes:r,connections:b,nodesMap:g,showControls:C,handleError:N,setActiveNodes:y}=_(),{setCenter:w}=G(),[i,j]=l.useState(!1),E=l.useMemo(()=>({model:xe}),[]),c=l.useMemo(()=>ve(s),[s]),I=l.useMemo(()=>be(s),[s]),[z,M]=l.useState([]),[x,d]=l.useState([]);l.useEffect(()=>{if(q(c)||A(n))return;j(!0);const L=X(c,p,m,g),V=Z(Object.values(g),L,n,r,u,b,a,f,h),$=Y(c,b,p,L,m,u,r,a,f,h),P=Ne({nodesMap:g,nodes:V,edges:$});return P.create().then(B=>{d(B.edges),M(B.nodes)}).catch(B=>{N==null||N(B),d([]),M([])}).finally(()=>{const B=A(n)?void 0:g[n];F(B)&&w(B.position.x,B.position.y,{zoom:.5,duration:0}),setTimeout(()=>{j(!1)},100)}),()=>{P.terminate(),d([]),M([])}},[p,g,I]),l.useEffect(()=>{if(A(n)||q(z))return;const L=X(c,p,m,g),V=Z(z,L,n,r,u,b,a,f,h),$=Y(c,b,p,L,m,u,r,a,f,h);d($),M(V),y(L)},[b,g,c,p,u,m,r,a,f,h,t,n]);function k(L){M(je(L,z))}function re(L){d(Ee(L,x))}return e.jsxs(e.Fragment,{children:[i&&e.jsxs("div",{className:"absolute top-0 left-0 z-10 flex justify-center items-center w-full h-full",children:[e.jsx("span",{className:"absolute w-full h-full z-10 bg-transparent-20 backdrop-blur-lg"}),e.jsxs(ee,{className:"inline-block z-10",children:[e.jsx(te,{className:"w-3 h-3 border border-neutral-10 mr-4"}),e.jsx("h3",{className:"text-md whitespace-nowrap",children:"Building Lineage..."})]})]}),e.jsxs(ye,{nodes:z,edges:x,nodeTypes:E,onNodesChange:k,onEdgesChange:re,nodeOrigin:[.5,.5],minZoom:.05,maxZoom:1.5,snapGrid:[16,16],snapToGrid:!0,children:[C&&e.jsxs(ae,{position:"top-right",className:"bg-theme !m-0 w-full !z-10",children:[e.jsx(Ze,{nodes:z}),e.jsx(pe,{})]}),e.jsx(Ve,{className:"bg-light p-1 rounded-md !border-none !shadow-lg"}),e.jsx(Oe,{variant:S.Cross,gap:32,size:4,className:H(v?"opacity-100 stroke-neutral-200 dark:stroke-neutral-800":"opacity-0")})]})]})}function Ze({nodes:t=[]}){const{withColumns:s,mainNode:n,selectedNodes:m,withConnected:u,withImpacted:a,withSecondary:f,hasBackground:h,activeNodes:v,highlightedNodes:p,setSelectedNodes:r,setWithColumns:b,setWithConnected:g,setWithImpacted:C,setWithSecondary:N,setHasBackground:y}=_(),w=l.useRef(null),i=l.useMemo(()=>Object.values(p??{}).flat(),[p]);function j(E){i.includes(E.name)||n===E.name||r(c=>(c.has(E.name)?c.delete(E.name):c.add(E.name),new Set(c)))}return e.jsxs("div",{className:"px-2 flex items-center text-xs text-neutral-400 @container",children:[e.jsxs("div",{className:"contents",children:[e.jsxs(T,{className:"flex @lg:hidden bg-none border-none","aria-label":"Show lineage node details",children:[e.jsxs(T.Button,{ref:w,className:"flex items-center relative w-full cursor-pointer bg-primary-10 text-xs rounded-full text-primary-500 py-1 px-3 text-center focus:outline-none focus-visible:border-accent-500 focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-300 border-1 border-transparent",children:["Details",e.jsx(ke,{className:"ml-2 h-4 w-4","aria-hidden":"true"})]}),e.jsx(T.Panel,{className:"absolute left-2 right-2 flex-col z-50 mt-8 transform flex px-4 py-3 bg-theme-lighter shadow-xl focus:ring-2 ring-opacity-5 rounded-lg",children:e.jsx(J,{nodes:t})})]}),e.jsx("div",{className:"hidden @lg:contents w-full",children:e.jsx(J,{nodes:t})})]}),e.jsxs("div",{className:"flex w-full justify-end items-center",children:[e.jsx(Pe,{handleSelect:j}),e.jsx(Me,{options:{Background:y,Columns:v.size>0&&m.size===0?void 0:b,Connected:v.size>0?void 0:g,"Upstream/Downstream":v.size>0?void 0:C,All:v.size>0?void 0:N},value:[s&&"Columns",h&&"Background",u&&"Connected",a&&"Upstream/Downstream",f&&"All"].filter(Boolean)})]})]})}export{it as default};
