import{r as l,R as g,$ as De,a8 as rt}from"./index-b4cc7002.js";var ot=Object.defineProperty,lt=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t,n)=>(lt(e,typeof t!="symbol"?t+"":t,n),n);let ut=class{constructor(){Se(this,"current",this.detect()),Se(this,"handoffState","pending"),Se(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},W=new ut,H=(e,t)=>{W.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function D(e){let t=l.useRef(e);return H(()=>{t.current=e},[e]),t}function Ue(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ue(){let e=[],t={addEventListener(n,r,u,a){return n.addEventListener(r,u,a),t.add(()=>n.removeEventListener(r,u,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ue(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,u){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:u}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=ue();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let u of e.splice(r,1))u()}},dispose(){for(let n of e.splice(0))n()}};return t}function Ge(){let[e]=l.useState(ue);return l.useEffect(()=>()=>e.dispose(),[e]),e}let P=function(e){let t=D(e);return g.useCallback((...n)=>t.current(...n),[t])};function at(){let e=typeof document>"u";return"useSyncExternalStore"in De?(t=>t.useSyncExternalStore)(De)(()=>()=>{},()=>!1,()=>!e):!1}function ve(){let e=at(),[t,n]=l.useState(W.isHandoffComplete);return t&&W.isHandoffComplete===!1&&n(!1),l.useEffect(()=>{t!==!0&&n(!0)},[t]),l.useEffect(()=>W.handoff(),[]),e?!1:t}var He;let re=(He=g.useId)!=null?He:function(){let e=ve(),[t,n]=g.useState(e?()=>W.nextId():null);return H(()=>{t===null&&n(W.nextId())},[t]),t!=null?""+t:void 0};function I(e,t,...n){if(e in t){let u=t[e];return typeof u=="function"?u(...n):u}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(u=>`"${u}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,I),r}function me(e){return W.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(q||{}),fe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(fe||{}),it=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(it||{});function se(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Fe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Ce=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Ce||{});function Oe(e,t=0){var n;return e===((n=me(e))==null?void 0:n.body)?!1:I(t,{0(){return e.matches(Fe)},1(){let r=e;for(;r!==null;){if(r.matches(Fe))return!0;r=r.parentElement}return!1}})}function yn(e){let t=me(e);ue().nextFrame(()=>{t&&!Oe(t.activeElement,0)&&ct(e)})}var st=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(st||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ct(e){e==null||e.focus({preventScroll:!0})}let dt=["textarea","input"].join(",");function ft(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,dt))!=null?n:!1}function pt(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),a=t(r);if(u===null||a===null)return 0;let o=u.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Pn(e,t){return J(se(),t,{relativeTo:e})}function J(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?pt(e):e:se(e);u.length>0&&o.length>1&&(o=o.filter(b=>!u.includes(b))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},d=0,v=o.length,p;do{if(d>=v||d+v<=0)return 0;let b=c+d;if(t&16)b=(b+v)%v;else{if(b<0)return 3;if(b>=v)return 1}p=o[b],p==null||p.focus(s),d+=i}while(p!==a.activeElement);return t&6&&ft(p)&&p.select(),2}function ce(e,t,n){let r=D(t);l.useEffect(()=>{function u(a){r.current(a)}return document.addEventListener(e,u,n),()=>document.removeEventListener(e,u,n)},[e,n])}function qe(e,t,n){let r=D(t);l.useEffect(()=>{function u(a){r.current(a)}return window.addEventListener(e,u,n),()=>window.removeEventListener(e,u,n)},[e,n])}function vt(e,t,n=!0){let r=l.useRef(!1);l.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function u(o,i){if(!r.current||o.defaultPrevented)return;let c=i(o);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let s=function d(v){return typeof v=="function"?d(v()):Array.isArray(v)||v instanceof Set?v:[v]}(e);for(let d of s){if(d===null)continue;let v=d instanceof HTMLElement?d:d.current;if(v!=null&&v.contains(c)||o.composed&&o.composedPath().includes(v))return}return!Oe(c,Ce.Loose)&&c.tabIndex!==-1&&o.preventDefault(),t(o,c)}let a=l.useRef(null);ce("pointerdown",o=>{var i,c;r.current&&(a.current=((c=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:c[0])||o.target)},!0),ce("mousedown",o=>{var i,c;r.current&&(a.current=((c=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:c[0])||o.target)},!0),ce("click",o=>{a.current&&(u(o,()=>a.current),a.current=null)},!0),ce("touchend",o=>u(o,()=>o.target instanceof HTMLElement?o.target:null),!0),qe("blur",o=>u(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function je(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function mt(e,t){let[n,r]=l.useState(()=>je(e));return H(()=>{r(je(e))},[e.type,e.as]),H(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let Ke=Symbol();function We(e,t=!0){return Object.assign(e,{[Ke]:t})}function _(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=P(r=>{for(let u of t.current)u!=null&&(typeof u=="function"?u(r):u.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Ke]))?void 0:n}function pe(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var oe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(oe||{}),Q=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Q||{});function U({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:a=!0,name:o}){let i=Ve(t,e);if(a)return de(i,n,r,o);let c=u??0;if(c&2){let{static:s=!1,...d}=i;if(s)return de(d,n,r,o)}if(c&1){let{unmount:s=!0,...d}=i;return I(s?0:1,{0(){return null},1(){return de({...d,hidden:!0,style:{display:"none"}},n,r,o)}})}return de(i,n,r,o)}function de(e,t={},n,r){let{as:u=n,children:a,refName:o="ref",...i}=we(e,["unmount","static"]),c=e.ref!==void 0?{[o]:e.ref}:{},s=typeof a=="function"?a(t):a;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let d={};if(t){let v=!1,p=[];for(let[b,m]of Object.entries(t))typeof m=="boolean"&&(v=!0),m===!0&&p.push(b);v&&(d["data-headlessui-state"]=p.join(" "))}if(u===l.Fragment&&Object.keys(Be(i)).length>0){if(!l.isValidElement(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let v=s.props,p=typeof(v==null?void 0:v.className)=="function"?(...m)=>pe(v==null?void 0:v.className(...m),i.className):pe(v==null?void 0:v.className,i.className),b=p?{className:p}:{};return l.cloneElement(s,Object.assign({},Ve(s.props,Be(we(i,["ref"]))),d,c,ht(s.ref,c.ref),b))}return l.createElement(u,Object.assign({},we(i,["ref"]),u!==l.Fragment&&c,u!==l.Fragment&&d),s)}function ht(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function Ve(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let u in r)u.startsWith("on")&&typeof r[u]=="function"?(n[u]!=null||(n[u]=[]),n[u].push(r[u])):t[u]=r[u];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](u,...a){let o=n[r];for(let i of o){if((u instanceof Event||(u==null?void 0:u.nativeEvent)instanceof Event)&&u.defaultPrevented)return;i(u,...a)}}});return t}function j(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Be(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function we(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function ze(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&bt(n)?!1:r}function bt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let Et="div";var le=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(le||{});function gt(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return U({ourProps:u,theirProps:r,slot:{},defaultTag:Et,name:"Hidden"})}let ie=j(gt),Ie=l.createContext(null);Ie.displayName="OpenClosedContext";var k=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(k||{});function he(){return l.useContext(Ie)}function Xe({value:e,children:t}){return g.createElement(Ie.Provider,{value:e},t)}var Y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Y||{});function ae(...e){return l.useMemo(()=>me(...e),[...e])}var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function Ye(){let e=l.useRef(0);return qe("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Re(){let e=l.useRef(!1);return H(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function yt(e,t,n,r){let u=D(n);l.useEffect(()=>{e=e??window;function a(o){u.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Pt(e){let t=P(e),n=l.useRef(!1);l.useEffect(()=>(n.current=!1,()=>{n.current=!0,Ue(()=>{n.current&&t()})}),[t])}let Je=l.createContext(!1);function St(){return l.useContext(Je)}function Sn(e){return g.createElement(Je.Provider,{value:e.force},e.children)}function wt(e){let t=St(),n=l.useContext(Qe),r=ae(e),[u,a]=l.useState(()=>{if(!t&&n!==null||W.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return l.useEffect(()=>{u!==null&&(r!=null&&r.body.contains(u)||r==null||r.body.appendChild(u))},[u,r]),l.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),u}let Tt=l.Fragment;function $t(e,t){let n=e,r=l.useRef(null),u=_(We(d=>{r.current=d}),t),a=ae(r),o=wt(r),[i]=l.useState(()=>{var d;return W.isServer?null:(d=a==null?void 0:a.createElement("div"))!=null?d:null}),c=l.useContext(xe),s=ve();return H(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),H(()=>{if(i&&c)return c.register(i)},[c,i]),Pt(()=>{var d;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((d=o.parentElement)==null||d.removeChild(o)))}),s?!o||!i?null:rt.createPortal(U({ourProps:{ref:u},theirProps:n,defaultTag:Tt,name:"Portal"}),i):null}let Ft=l.Fragment,Qe=l.createContext(null);function xt(e,t){let{target:n,...r}=e,u={ref:_(t)};return g.createElement(Qe.Provider,{value:n},U({ourProps:u,theirProps:r,defaultTag:Ft,name:"Popover.Group"}))}let xe=l.createContext(null);function Nt(){let e=l.useContext(xe),t=l.useRef([]),n=P(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=P(a=>{let o=t.current.indexOf(a);o!==-1&&t.current.splice(o,1),e&&e.unregister(a)}),u=l.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,l.useMemo(()=>function({children:a}){return g.createElement(xe.Provider,{value:u},a)},[u])]}let Ct=j($t),Ot=j(xt),wn=Object.assign(Ct,{Group:Ot});function It({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let u=l.useRef((r=n==null?void 0:n.current)!=null?r:null),a=ae(u),o=P(()=>{var i;let c=[];for(let s of e)s!==null&&(s instanceof HTMLElement?c.push(s):"current"in s&&s.current instanceof HTMLElement&&c.push(s.current));if(t!=null&&t.current)for(let s of t.current)c.push(s);for(let s of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])s!==document.body&&s!==document.head&&s instanceof HTMLElement&&s.id!=="headlessui-portal-root"&&(s.contains(u.current)||c.some(d=>s.contains(d))||c.push(s));return c});return{resolveContainers:o,contains:P(i=>o().some(c=>c.contains(i))),mainTreeNodeRef:u,MainTreeNode:l.useMemo(()=>function(){return n!=null?null:g.createElement(ie,{features:le.Hidden,ref:u})},[u,n])}}function Rt(){let e=l.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:l.useMemo(()=>function(){return g.createElement(ie,{features:le.Hidden,ref:e})},[e])}}var Lt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Lt||{}),Mt=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Mt||{});let kt={0:e=>{let t={...e,popoverState:I(e.popoverState,{0:1,1:0})};return t.popoverState===0&&(t.__demoMode=!1),t},1(e){return e.popoverState===1?e:{...e,popoverState:1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Le=l.createContext(null);Le.displayName="PopoverContext";function be(e){let t=l.useContext(Le);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,be),n}return t}let Me=l.createContext(null);Me.displayName="PopoverAPIContext";function ke(e){let t=l.useContext(Me);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ke),n}return t}let Ae=l.createContext(null);Ae.displayName="PopoverGroupContext";function Ze(){return l.useContext(Ae)}let Ee=l.createContext(null);Ee.displayName="PopoverPanelContext";function At(){return l.useContext(Ee)}function Dt(e,t){return I(t.type,kt,e,t)}let Ht="div";function jt(e,t){var n;let{__demoMode:r=!1,...u}=e,a=l.useRef(null),o=_(t,We(S=>{a.current=S})),i=l.useRef([]),c=l.useReducer(Dt,{__demoMode:r,popoverState:r?0:1,buttons:i,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:l.createRef(),afterPanelSentinel:l.createRef()}),[{popoverState:s,button:d,buttonId:v,panel:p,panelId:b,beforePanelSentinel:m,afterPanelSentinel:E},f]=c,w=ae((n=a.current)!=null?n:d),N=l.useMemo(()=>{if(!d||!p)return!1;for(let ne of document.querySelectorAll("body > *"))if(Number(ne==null?void 0:ne.contains(d))^Number(ne==null?void 0:ne.contains(p)))return!0;let S=se(),R=S.indexOf(d),te=(R+S.length-1)%S.length,ee=(R+1)%S.length,G=S[te],V=S[ee];return!p.contains(G)&&!p.contains(V)},[d,p]),T=D(v),C=D(b),A=l.useMemo(()=>({buttonId:T,panelId:C,close:()=>f({type:1})}),[T,C,f]),O=Ze(),y=O==null?void 0:O.registerPopover,L=P(()=>{var S;return(S=O==null?void 0:O.isFocusWithinPopoverGroup())!=null?S:(w==null?void 0:w.activeElement)&&((d==null?void 0:d.contains(w.activeElement))||(p==null?void 0:p.contains(w.activeElement)))});l.useEffect(()=>y==null?void 0:y(A),[y,A]);let[$,M]=Nt(),h=It({mainTreeNodeRef:O==null?void 0:O.mainTreeNodeRef,portals:$,defaultContainers:[d,p]});yt(w==null?void 0:w.defaultView,"focus",S=>{var R,te,ee,G;S.target!==window&&S.target instanceof HTMLElement&&s===0&&(L()||d&&p&&(h.contains(S.target)||(te=(R=m.current)==null?void 0:R.contains)!=null&&te.call(R,S.target)||(G=(ee=E.current)==null?void 0:ee.contains)!=null&&G.call(ee,S.target)||f({type:1})))},!0),vt(h.resolveContainers,(S,R)=>{f({type:1}),Oe(R,Ce.Loose)||(S.preventDefault(),d==null||d.focus())},s===0);let F=P(S=>{f({type:1});let R=(()=>S?S instanceof HTMLElement?S:"current"in S&&S.current instanceof HTMLElement?S.current:d:d)();R==null||R.focus()}),x=l.useMemo(()=>({close:F,isPortalled:N}),[F,N]),B=l.useMemo(()=>({open:s===0,close:F}),[s,F]),Z={ref:o};return g.createElement(Ee.Provider,{value:null},g.createElement(Le.Provider,{value:c},g.createElement(Me.Provider,{value:x},g.createElement(Xe,{value:I(s,{0:k.Open,1:k.Closed})},g.createElement(M,null,U({ourProps:Z,theirProps:u,slot:B,defaultTag:Ht,name:"Popover"}),g.createElement(h.MainTreeNode,null))))))}let Bt="button";function _t(e,t){let n=re(),{id:r=`headlessui-popover-button-${n}`,...u}=e,[a,o]=be("Popover.Button"),{isPortalled:i}=ke("Popover.Button"),c=l.useRef(null),s=`headlessui-focus-sentinel-${re()}`,d=Ze(),v=d==null?void 0:d.closeOthers,p=At()!==null;l.useEffect(()=>{if(!p)return o({type:3,buttonId:r}),()=>{o({type:3,buttonId:null})}},[p,r,o]);let[b]=l.useState(()=>Symbol()),m=_(c,t,p?null:h=>{if(h)a.buttons.current.push(b);else{let F=a.buttons.current.indexOf(b);F!==-1&&a.buttons.current.splice(F,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),h&&o({type:2,button:h})}),E=_(c,t),f=ae(c),w=P(h=>{var F,x,B;if(p){if(a.popoverState===1)return;switch(h.key){case Y.Space:case Y.Enter:h.preventDefault(),(x=(F=h.target).click)==null||x.call(F),o({type:1}),(B=a.button)==null||B.focus();break}}else switch(h.key){case Y.Space:case Y.Enter:h.preventDefault(),h.stopPropagation(),a.popoverState===1&&(v==null||v(a.buttonId)),o({type:0});break;case Y.Escape:if(a.popoverState!==0)return v==null?void 0:v(a.buttonId);if(!c.current||f!=null&&f.activeElement&&!c.current.contains(f.activeElement))return;h.preventDefault(),h.stopPropagation(),o({type:1});break}}),N=P(h=>{p||h.key===Y.Space&&h.preventDefault()}),T=P(h=>{var F,x;ze(h.currentTarget)||e.disabled||(p?(o({type:1}),(F=a.button)==null||F.focus()):(h.preventDefault(),h.stopPropagation(),a.popoverState===1&&(v==null||v(a.buttonId)),o({type:0}),(x=a.button)==null||x.focus()))}),C=P(h=>{h.preventDefault(),h.stopPropagation()}),A=a.popoverState===0,O=l.useMemo(()=>({open:A}),[A]),y=mt(e,c),L=p?{ref:E,type:y,onKeyDown:w,onClick:T}:{ref:m,id:a.buttonId,type:y,"aria-expanded":a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,onKeyDown:w,onKeyUp:N,onClick:T,onMouseDown:C},$=Ye(),M=P(()=>{let h=a.panel;if(!h)return;function F(){I($.current,{[K.Forwards]:()=>J(h,q.First),[K.Backwards]:()=>J(h,q.Last)})===fe.Error&&J(se().filter(x=>x.dataset.headlessuiFocusGuard!=="true"),I($.current,{[K.Forwards]:q.Next,[K.Backwards]:q.Previous}),{relativeTo:a.button})}F()});return g.createElement(g.Fragment,null,U({ourProps:L,theirProps:u,slot:O,defaultTag:Bt,name:"Popover.Button"}),A&&!p&&i&&g.createElement(ie,{id:s,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:M}))}let Ut="div",Gt=oe.RenderStrategy|oe.Static;function qt(e,t){let n=re(),{id:r=`headlessui-popover-overlay-${n}`,...u}=e,[{popoverState:a},o]=be("Popover.Overlay"),i=_(t),c=he(),s=(()=>c!==null?(c&k.Open)===k.Open:a===0)(),d=P(p=>{if(ze(p.currentTarget))return p.preventDefault();o({type:1})}),v=l.useMemo(()=>({open:a===0}),[a]);return U({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:d},theirProps:u,slot:v,defaultTag:Ut,features:Gt,visible:s,name:"Popover.Overlay"})}let Kt="div",Wt=oe.RenderStrategy|oe.Static;function Vt(e,t){let n=re(),{id:r=`headlessui-popover-panel-${n}`,focus:u=!1,...a}=e,[o,i]=be("Popover.Panel"),{close:c,isPortalled:s}=ke("Popover.Panel"),d=`headlessui-focus-sentinel-before-${re()}`,v=`headlessui-focus-sentinel-after-${re()}`,p=l.useRef(null),b=_(p,t,y=>{i({type:4,panel:y})}),m=ae(p);H(()=>(i({type:5,panelId:r}),()=>{i({type:5,panelId:null})}),[r,i]);let E=he(),f=(()=>E!==null?(E&k.Open)===k.Open:o.popoverState===0)(),w=P(y=>{var L;switch(y.key){case Y.Escape:if(o.popoverState!==0||!p.current||m!=null&&m.activeElement&&!p.current.contains(m.activeElement))return;y.preventDefault(),y.stopPropagation(),i({type:1}),(L=o.button)==null||L.focus();break}});l.useEffect(()=>{var y;e.static||o.popoverState===1&&((y=e.unmount)==null||y)&&i({type:4,panel:null})},[o.popoverState,e.unmount,e.static,i]),l.useEffect(()=>{if(o.__demoMode||!u||o.popoverState!==0||!p.current)return;let y=m==null?void 0:m.activeElement;p.current.contains(y)||J(p.current,q.First)},[o.__demoMode,u,p,o.popoverState]);let N=l.useMemo(()=>({open:o.popoverState===0,close:c}),[o,c]),T={ref:b,id:r,onKeyDown:w,onBlur:u&&o.popoverState===0?y=>{var L,$,M,h,F;let x=y.relatedTarget;x&&p.current&&((L=p.current)!=null&&L.contains(x)||(i({type:1}),((M=($=o.beforePanelSentinel.current)==null?void 0:$.contains)!=null&&M.call($,x)||(F=(h=o.afterPanelSentinel.current)==null?void 0:h.contains)!=null&&F.call(h,x))&&x.focus({preventScroll:!0})))}:void 0,tabIndex:-1},C=Ye(),A=P(()=>{let y=p.current;if(!y)return;function L(){I(C.current,{[K.Forwards]:()=>{var $;J(y,q.First)===fe.Error&&(($=o.afterPanelSentinel.current)==null||$.focus())},[K.Backwards]:()=>{var $;($=o.button)==null||$.focus({preventScroll:!0})}})}L()}),O=P(()=>{let y=p.current;if(!y)return;function L(){I(C.current,{[K.Forwards]:()=>{var $;if(!o.button)return;let M=se(),h=M.indexOf(o.button),F=M.slice(0,h+1),x=[...M.slice(h+1),...F];for(let B of x.slice())if(B.dataset.headlessuiFocusGuard==="true"||($=o.panel)!=null&&$.contains(B)){let Z=x.indexOf(B);Z!==-1&&x.splice(Z,1)}J(x,q.First,{sorted:!1})},[K.Backwards]:()=>{var $;J(y,q.Previous)===fe.Error&&(($=o.button)==null||$.focus())}})}L()});return g.createElement(Ee.Provider,{value:r},f&&s&&g.createElement(ie,{id:d,ref:o.beforePanelSentinel,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:A}),U({ourProps:T,theirProps:a,slot:N,defaultTag:Kt,features:Wt,visible:f,name:"Popover.Panel"}),f&&s&&g.createElement(ie,{id:v,ref:o.afterPanelSentinel,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:O}))}let zt="div";function Xt(e,t){let n=l.useRef(null),r=_(n,t),[u,a]=l.useState([]),o=Rt(),i=P(E=>{a(f=>{let w=f.indexOf(E);if(w!==-1){let N=f.slice();return N.splice(w,1),N}return f})}),c=P(E=>(a(f=>[...f,E]),()=>i(E))),s=P(()=>{var E;let f=me(n);if(!f)return!1;let w=f.activeElement;return(E=n.current)!=null&&E.contains(w)?!0:u.some(N=>{var T,C;return((T=f.getElementById(N.buttonId.current))==null?void 0:T.contains(w))||((C=f.getElementById(N.panelId.current))==null?void 0:C.contains(w))})}),d=P(E=>{for(let f of u)f.buttonId.current!==E&&f.close()}),v=l.useMemo(()=>({registerPopover:c,unregisterPopover:i,isFocusWithinPopoverGroup:s,closeOthers:d,mainTreeNodeRef:o.mainTreeNodeRef}),[c,i,s,d,o.mainTreeNodeRef]),p=l.useMemo(()=>({}),[]),b=e,m={ref:r};return g.createElement(Ae.Provider,{value:v},U({ourProps:m,theirProps:b,slot:p,defaultTag:zt,name:"Popover.Group"}),g.createElement(o.MainTreeNode,null))}let Yt=j(jt),Jt=j(_t),Qt=j(qt),Zt=j(Vt),en=j(Xt),Tn=Object.assign(Yt,{Button:Jt,Overlay:Qt,Panel:Zt,Group:en});function tn(e=0){let[t,n]=l.useState(e),r=Re(),u=l.useCallback(c=>{r.current&&n(s=>s|c)},[t,r]),a=l.useCallback(c=>!!(t&c),[t]),o=l.useCallback(c=>{r.current&&n(s=>s&~c)},[n,r]),i=l.useCallback(c=>{r.current&&n(s=>s^c)},[n]);return{flags:t,addFlag:u,hasFlag:a,removeFlag:o,toggleFlag:i}}function nn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Te(e,...t){e&&t.length>0&&e.classList.add(...t)}function $e(e,...t){e&&t.length>0&&e.classList.remove(...t)}function rn(e,t){let n=ue();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[a,o]=[r,u].map(c=>{let[s=0]=c.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,v)=>v-d);return s}),i=a+o;if(i!==0){n.group(s=>{s.setTimeout(()=>{t(),s.dispose()},i),s.addEventListener(e,"transitionrun",d=>{d.target===d.currentTarget&&s.dispose()})});let c=n.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(t(),c())})}else t();return n.add(()=>t()),n.dispose}function on(e,t,n,r){let u=n?"enter":"leave",a=ue(),o=r!==void 0?nn(r):()=>{};u==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let i=I(u,{enter:()=>t.enter,leave:()=>t.leave}),c=I(u,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),s=I(u,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return $e(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Te(e,...t.base,...i,...s),a.nextFrame(()=>{$e(e,...t.base,...i,...s),Te(e,...t.base,...i,...c),rn(e,()=>($e(e,...t.base,...i),Te(e,...t.base,...t.entered),o()))}),a.dispose}function ln({immediate:e,container:t,direction:n,classes:r,onStart:u,onStop:a}){let o=Re(),i=Ge(),c=D(n);H(()=>{e&&(c.current="enter")},[e]),H(()=>{let s=ue();i.add(s.dispose);let d=t.current;if(d&&c.current!=="idle"&&o.current)return s.dispose(),u.current(c.current),s.add(on(d,r.current,c.current==="enter",()=>{s.dispose(),a.current(c.current)})),s.dispose},[n])}function X(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let ge=l.createContext(null);ge.displayName="TransitionContext";var un=(e=>(e.Visible="visible",e.Hidden="hidden",e))(un||{});function an(){let e=l.useContext(ge);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function sn(){let e=l.useContext(ye);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let ye=l.createContext(null);ye.displayName="NestingContext";function Pe(e){return"children"in e?Pe(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function et(e,t){let n=D(e),r=l.useRef([]),u=Re(),a=Ge(),o=P((b,m=Q.Hidden)=>{let E=r.current.findIndex(({el:f})=>f===b);E!==-1&&(I(m,{[Q.Unmount](){r.current.splice(E,1)},[Q.Hidden](){r.current[E].state="hidden"}}),a.microTask(()=>{var f;!Pe(r)&&u.current&&((f=n.current)==null||f.call(n))}))}),i=P(b=>{let m=r.current.find(({el:E})=>E===b);return m?m.state!=="visible"&&(m.state="visible"):r.current.push({el:b,state:"visible"}),()=>o(b,Q.Unmount)}),c=l.useRef([]),s=l.useRef(Promise.resolve()),d=l.useRef({enter:[],leave:[],idle:[]}),v=P((b,m,E)=>{c.current.splice(0),t&&(t.chains.current[m]=t.chains.current[m].filter(([f])=>f!==b)),t==null||t.chains.current[m].push([b,new Promise(f=>{c.current.push(f)})]),t==null||t.chains.current[m].push([b,new Promise(f=>{Promise.all(d.current[m].map(([w,N])=>N)).then(()=>f())})]),m==="enter"?s.current=s.current.then(()=>t==null?void 0:t.wait.current).then(()=>E(m)):E(m)}),p=P((b,m,E)=>{Promise.all(d.current[m].splice(0).map(([f,w])=>w)).then(()=>{var f;(f=c.current.shift())==null||f()}).then(()=>E(m))});return l.useMemo(()=>({children:r,register:i,unregister:o,onStart:v,onStop:p,wait:s,chains:d}),[i,o,r,v,p,d,s])}function cn(){}let dn=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function _e(e){var t;let n={};for(let r of dn)n[r]=(t=e[r])!=null?t:cn;return n}function fn(e){let t=l.useRef(_e(e));return l.useEffect(()=>{t.current=_e(e)},[e]),t}let pn="div",tt=oe.RenderStrategy;function vn(e,t){var n,r;let{beforeEnter:u,afterEnter:a,beforeLeave:o,afterLeave:i,enter:c,enterFrom:s,enterTo:d,entered:v,leave:p,leaveFrom:b,leaveTo:m,...E}=e,f=l.useRef(null),w=_(f,t),N=(n=E.unmount)==null||n?Q.Unmount:Q.Hidden,{show:T,appear:C,initial:A}=an(),[O,y]=l.useState(T?"visible":"hidden"),L=sn(),{register:$,unregister:M}=L;l.useEffect(()=>$(f),[$,f]),l.useEffect(()=>{if(N===Q.Hidden&&f.current){if(T&&O!=="visible"){y("visible");return}return I(O,{hidden:()=>M(f),visible:()=>$(f)})}},[O,f,$,M,T,N]);let h=D({base:X(E.className),enter:X(c),enterFrom:X(s),enterTo:X(d),entered:X(v),leave:X(p),leaveFrom:X(b),leaveTo:X(m)}),F=fn({beforeEnter:u,afterEnter:a,beforeLeave:o,afterLeave:i}),x=ve();l.useEffect(()=>{if(x&&O==="visible"&&f.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[f,O,x]);let B=A&&!C,Z=C&&T&&A,S=(()=>!x||B?"idle":T?"enter":"leave")(),R=tn(0),te=P(z=>I(z,{enter:()=>{R.addFlag(k.Opening),F.current.beforeEnter()},leave:()=>{R.addFlag(k.Closing),F.current.beforeLeave()},idle:()=>{}})),ee=P(z=>I(z,{enter:()=>{R.removeFlag(k.Opening),F.current.afterEnter()},leave:()=>{R.removeFlag(k.Closing),F.current.afterLeave()},idle:()=>{}})),G=et(()=>{y("hidden"),M(f)},L);ln({immediate:Z,container:f,classes:h,direction:S,onStart:D(z=>{G.onStart(f,z,te)}),onStop:D(z=>{G.onStop(f,z,ee),z==="leave"&&!Pe(G)&&(y("hidden"),M(f))})});let V=E,ne={ref:w};return Z?V={...V,className:pe(E.className,...h.current.enter,...h.current.enterFrom)}:(V.className=pe(E.className,(r=f.current)==null?void 0:r.className),V.className===""&&delete V.className),g.createElement(ye.Provider,{value:G},g.createElement(Xe,{value:I(O,{visible:k.Open,hidden:k.Closed})|R.flags},U({ourProps:ne,theirProps:V,defaultTag:pn,features:tt,visible:O==="visible",name:"Transition.Child"})))}function mn(e,t){let{show:n,appear:r=!1,unmount:u=!0,...a}=e,o=l.useRef(null),i=_(o,t);ve();let c=he();if(n===void 0&&c!==null&&(n=(c&k.Open)===k.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[s,d]=l.useState(n?"visible":"hidden"),v=et(()=>{d("hidden")}),[p,b]=l.useState(!0),m=l.useRef([n]);H(()=>{p!==!1&&m.current[m.current.length-1]!==n&&(m.current.push(n),b(!1))},[m,n]);let E=l.useMemo(()=>({show:n,appear:r,initial:p}),[n,r,p]);l.useEffect(()=>{if(n)d("visible");else if(!Pe(v))d("hidden");else{let T=o.current;if(!T)return;let C=T.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&d("hidden")}},[n,v]);let f={unmount:u},w=P(()=>{var T;p&&b(!1),(T=e.beforeEnter)==null||T.call(e)}),N=P(()=>{var T;p&&b(!1),(T=e.beforeLeave)==null||T.call(e)});return g.createElement(ye.Provider,{value:v},g.createElement(ge.Provider,{value:E},U({ourProps:{...f,as:l.Fragment,children:g.createElement(nt,{ref:i,...f,...a,beforeEnter:w,beforeLeave:N})},theirProps:{},defaultTag:l.Fragment,features:tt,visible:s==="visible",name:"Transition"})))}function hn(e,t){let n=l.useContext(ge)!==null,r=he()!==null;return g.createElement(g.Fragment,null,!n&&r?g.createElement(Ne,{ref:t,...e}):g.createElement(nt,{ref:t,...e}))}let Ne=j(mn),nt=j(vn),bn=j(hn),$n=Object.assign(Ne,{Child:bn,Root:Ne});export{me as A,Xe as B,he as C,j as D,yt as E,Oe as F,yn as G,pt as H,re as I,tn as J,D as K,We as L,q as M,fe as N,J as O,Sn as P,Be as R,oe as S,Ce as T,U as X,Pn as _,Ye as a,le as b,ie as c,Pt as d,ct as e,Re as f,H as g,ue as h,k as i,Nt as j,It as k,ve as l,vt as m,ae as n,P as o,Ge as p,wn as q,Y as r,K as s,Ue as t,I as u,ze as v,Tn as w,$n as x,_ as y,mt as z};
