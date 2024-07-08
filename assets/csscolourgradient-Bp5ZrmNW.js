import{e as m,r as h,j as l}from"./index-Cx9n1fWL.js";function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){if(e==null)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function M(e){var t=h.useRef(e),r=h.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var E=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},S=function(e){return"touches"in e},D=function(e){return e&&e.ownerDocument.defaultView||self},N=function(e,t,r){var n=e.getBoundingClientRect(),o=S(t)?function(a,s){for(var c=0;c<a.length;c++)if(a[c].identifier===s)return a[c];return a[0]}(t.touches,r):t;return{left:E((o.pageX-(n.left+D(e).pageXOffset))/n.width),top:E((o.pageY-(n.top+D(e).pageYOffset))/n.height)}},W=function(e){!S(e)&&e.preventDefault()},Z=m.memo(function(e){var t=e.onMove,r=e.onKey,n=Q(e,["onMove","onKey"]),o=h.useRef(null),a=M(t),s=M(r),c=h.useRef(null),i=h.useRef(!1),u=h.useMemo(function(){var ie=function(w){W(w),(S(w)?w.touches.length>0:w.buttons>0)&&o.current?a(N(o.current,w,c.current)):_(!1)},le=function(){return _(!1)};function _(w){var g=i.current,y=D(o.current),C=w?y.addEventListener:y.removeEventListener;C(g?"touchmove":"mousemove",ie),C(g?"touchend":"mouseup",le)}return[function(w){var g=w.nativeEvent,y=o.current;if(y&&(W(g),!function(ue,fe){return fe&&!S(ue)}(g,i.current)&&y)){if(S(g)){i.current=!0;var C=g.changedTouches||[];C.length&&(c.current=C[0].identifier)}y.focus(),a(N(y,g,c.current)),_(!0)}},function(w){var g=w.which||w.keyCode;g<37||g>40||(w.preventDefault(),s({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},_]},[s,a]),f=u[0],v=u[1],R=u[2];return h.useEffect(function(){return R},[R]),m.createElement("div",P({},n,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:o,onKeyDown:v,tabIndex:0,role:"slider"}))}),O=function(e){return e.filter(Boolean).join(" ")},ee=function(e){var t=e.color,r=e.left,n=e.top,o=n===void 0?.5:n,a=O(["react-colorful__pointer",e.className]);return m.createElement("div",{className:a,style:{top:100*o+"%",left:100*r+"%"}},m.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},d=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},he=function(e){return we(A(e))},A=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?d(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?d(parseInt(e.substring(6,8),16)/255,2):1}},de=function(e){return pe(ge(e))},me=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:d(e.h),s:d(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:d(o/2),a:d(n,2)}},F=function(e){var t=me(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},ge=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),s=n*(1-r),c=n*(1-(t-a)*r),i=n*(1-(1-t+a)*r),u=a%6;return{r:d(255*[n,c,s,s,i,n][u]),g:d(255*[i,n,n,c,s,s][u]),b:d(255*[s,s,i,n,n,c][u]),a:d(o,2)}},j=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},pe=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?j(d(255*o)):"";return"#"+j(t)+j(r)+j(n)+a},we=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),s=a-Math.min(t,r,n),c=s?a===t?(r-n)/s:a===r?2+(n-t)/s:4+(t-r)/s:0;return{h:d(60*(c<0?c+6:c)),s:d(a?s/a*100:0),v:d(a/255*100),a:o}},xe=m.memo(function(e){var t=e.hue,r=e.onChange,n=O(["react-colorful__hue",e.className]);return m.createElement("div",{className:n},m.createElement(Z,{onMove:function(o){r({h:360*o.left})},onKey:function(o){r({h:E(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":d(t),"aria-valuemax":"360","aria-valuemin":"0"},m.createElement(ee,{className:"react-colorful__hue-pointer",left:t/360,color:F({h:t,s:100,v:100,a:1})})))}),be=m.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:F({h:t.h,s:100,v:100,a:1})};return m.createElement("div",{className:"react-colorful__saturation",style:n},m.createElement(Z,{onMove:function(o){r({s:100*o.left,v:100-100*o.top})},onKey:function(o){r({s:E(t.s+100*o.left,0,100),v:E(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+d(t.s)+"%, Brightness "+d(t.v)+"%"},m.createElement(ee,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:F(t)})))}),te=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},ve=function(e,t){return e.toLowerCase()===t.toLowerCase()||te(A(e),A(t))};function ye(e,t,r){var n=M(r),o=h.useState(function(){return e.toHsva(t)}),a=o[0],s=o[1],c=h.useRef({color:t,hsva:a});h.useEffect(function(){if(!e.equal(t,c.current.color)){var u=e.toHsva(t);c.current={hsva:u,color:t},s(u)}},[t,e]),h.useEffect(function(){var u;te(a,c.current.hsva)||e.equal(u=e.fromHsva(a),c.current.color)||(c.current={hsva:a,color:u},n(u))},[a,e,n]);var i=h.useCallback(function(u){s(function(f){return Object.assign({},f,u)})},[]);return[a,i]}var Ce=typeof window<"u"?h.useLayoutEffect:h.useEffect,Se=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},z=new Map,Ee=function(e){Ce(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!z.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,z.set(t,r);var n=Se();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Re=function(e){var t=e.className,r=e.colorModel,n=e.color,o=n===void 0?r.defaultColor:n,a=e.onChange,s=Q(e,["className","colorModel","color","onChange"]),c=h.useRef(null);Ee(c);var i=ye(r,o,a),u=i[0],f=i[1],v=O(["react-colorful",t]);return m.createElement("div",P({},s,{ref:c,className:v}),m.createElement(be,{hsva:u,onChange:f}),m.createElement(xe,{hue:u.h,onChange:f,className:"react-colorful__last-control"}))},_e={defaultColor:"000",toHsva:he,fromHsva:function(e){return de({h:e.h,s:e.s,v:e.v,a:1})},equal:ve},je=function(e){return m.createElement(Re,P({},e,{colorModel:_e}))};function $e({colors:e,onColorChange:t,onAlphaChange:r,addColor:n,removeColor:o}){return l.jsxs("div",{className:"my-4",children:[l.jsx("h2",{className:"mb-2 text-xl font-semibold",children:"Colors"}),l.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3",children:e.map((a,s)=>l.jsxs("div",{className:"flex flex-col items-center justify-center p-4 bg-white border rounded shadow-md",children:[l.jsx(je,{color:a.color,onChange:c=>t(s,c)}),l.jsx("input",{type:"text",value:a.color,onChange:c=>t(s,c.target.value),className:"w-full p-2 mt-2 border rounded"}),l.jsxs("div",{className:"mt-4",children:[l.jsxs("label",{className:"block",children:["Opacity:",l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:a.alpha,onChange:c=>r(s,parseFloat(c.target.value)),className:"w-full"})]}),l.jsxs("span",{children:[Math.round(a.alpha*100),"%"]})]}),e.length>2&&l.jsx("button",{onClick:()=>o(s),className:"w-full px-4 py-2 mt-4 text-white bg-red-500 rounded",children:"Remove"})]},s))}),l.jsx("button",{onClick:n,className:"px-4 py-2 mt-4 text-white bg-blue-500 rounded",children:"Add Color"})]})}function Te({colors:e,direction:t}){const r=e.map(s=>`${s.color}${Math.round(s.alpha*255).toString(16).padStart(2,"0")}`),n=`background: linear-gradient(${t}, ${r.join(", ")});`;`${e[0].color.replace("#","")}${e[e.length-1].color.replace("#","")}`;const o=h.useRef();h.useRef();const a=s=>{navigator.clipboard.writeText(s.current.innerText),alert("Code copied to clipboard")};return l.jsxs("div",{className:"my-4",children:[l.jsx("h2",{className:"mb-2 text-xl font-semibold",children:"Generated Code"}),l.jsx("h3",{className:"text-lg font-semibold",children:"CSS"}),l.jsxs("div",{className:"relative overflow-x-auto",children:[l.jsx("pre",{ref:o,className:"p-4 whitespace-pre-wrap bg-gray-100 border rounded",children:n}),l.jsx("button",{onClick:()=>a(o),className:"absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-white bg-blue-500 rounded",children:"Copy"})]})]})}function Le(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),o=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(o),t&&(n.href=t),o.href=e,o.href}const Pe=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function b(e){const t=[];for(let r=0,n=e.length;r<n;r++)t.push(e[r]);return t}function T(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function ke(e){const t=T(e,"border-left-width"),r=T(e,"border-right-width");return e.clientWidth+t+r}function Ie(e){const t=T(e,"border-top-width"),r=T(e,"border-bottom-width");return e.clientHeight+t+r}function re(e,t={}){const r=t.width||ke(e),n=t.height||Ie(e);return{width:r,height:n}}function Me(){let e,t;try{t=process}catch{}const r=t&&t.env?t.env.devicePixelRatio:null;return r&&(e=parseInt(r,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const x=16384;function De(e){(e.width>x||e.height>x)&&(e.width>x&&e.height>x?e.width>e.height?(e.height*=x/e.width,e.width=x):(e.width*=x/e.height,e.height=x):e.width>x?(e.height*=x/e.width,e.width=x):(e.width*=x/e.height,e.height=x))}function L(e){return new Promise((t,r)=>{const n=new Image;n.decode=()=>t(n),n.onload=()=>t(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function Ae(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Fe(e,t,r){const n="http://www.w3.org/2000/svg",o=document.createElementNS(n,"svg"),a=document.createElementNS(n,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${r}`),o.setAttribute("viewBox",`0 0 ${t} ${r}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),o.appendChild(a),a.appendChild(e),Ae(o)}const p=(e,t)=>{if(e instanceof t)return!0;const r=Object.getPrototypeOf(e);return r===null?!1:r.constructor.name===t.name||p(r,t)};function He(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function Oe(e){return b(e).map(t=>{const r=e.getPropertyValue(t),n=e.getPropertyPriority(t);return`${t}: ${r}${n?" !important":""};`}).join(" ")}function Ue(e,t,r){const n=`.${e}:${t}`,o=r.cssText?He(r):Oe(r);return document.createTextNode(`${n}{${o}}`)}function B(e,t,r){const n=window.getComputedStyle(e,r),o=n.getPropertyValue("content");if(o===""||o==="none")return;const a=Pe();try{t.className=`${t.className} ${a}`}catch{return}const s=document.createElement("style");s.appendChild(Ue(a,r,n)),t.appendChild(s)}function Ve(e,t){B(e,t,":before"),B(e,t,":after")}const q="application/font-woff",G="image/jpeg",Ne={woff:q,woff2:q,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:G,jpeg:G,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function We(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function U(e){const t=We(e).toLowerCase();return Ne[t]||""}function ze(e){return e.split(/,/)[1]}function H(e){return e.search(/^(data:)/)!==-1}function Be(e,t){return`data:${t};base64,${e}`}async function ne(e,t,r){const n=await fetch(e,t);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const o=await n.blob();return new Promise((a,s)=>{const c=new FileReader;c.onerror=s,c.onloadend=()=>{try{a(r({res:n,result:c.result}))}catch(i){s(i)}},c.readAsDataURL(o)})}const I={};function qe(e,t,r){let n=e.replace(/\?.*/,"");return r&&(n=e),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),t?`[${t}]${n}`:n}async function V(e,t,r){const n=qe(e,t,r.includeQueryParams);if(I[n]!=null)return I[n];r.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{const a=await ne(e,r.fetchRequestInit,({res:s,result:c})=>(t||(t=s.headers.get("Content-Type")||""),ze(c)));o=Be(a,t)}catch(a){o=r.imagePlaceholder||"";let s=`Failed to fetch resource: ${e}`;a&&(s=typeof a=="string"?a:a.message),s&&console.warn(s)}return I[n]=o,o}async function Ge(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):L(t)}async function Ke(e,t){if(e.currentSrc){const a=document.createElement("canvas"),s=a.getContext("2d");a.width=e.clientWidth,a.height=e.clientHeight,s==null||s.drawImage(e,0,0,a.width,a.height);const c=a.toDataURL();return L(c)}const r=e.poster,n=U(r),o=await V(r,n,t);return L(o)}async function Xe(e){var t;try{if(!((t=e==null?void 0:e.contentDocument)===null||t===void 0)&&t.body)return await k(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function Ye(e,t){return p(e,HTMLCanvasElement)?Ge(e):p(e,HTMLVideoElement)?Ke(e,t):p(e,HTMLIFrameElement)?Xe(e):e.cloneNode(!1)}const Je=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function Qe(e,t,r){var n,o;let a=[];return Je(e)&&e.assignedNodes?a=b(e.assignedNodes()):p(e,HTMLIFrameElement)&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?a=b(e.contentDocument.body.childNodes):a=b(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),a.length===0||p(e,HTMLVideoElement)||await a.reduce((s,c)=>s.then(()=>k(c,r)).then(i=>{i&&t.appendChild(i)}),Promise.resolve()),t}function Ze(e,t){const r=t.style;if(!r)return;const n=window.getComputedStyle(e);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):b(n).forEach(o=>{let a=n.getPropertyValue(o);o==="font-size"&&a.endsWith("px")&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),p(e,HTMLIFrameElement)&&o==="display"&&a==="inline"&&(a="block"),o==="d"&&t.getAttribute("d")&&(a=`path(${t.getAttribute("d")})`),r.setProperty(o,a,n.getPropertyPriority(o))})}function et(e,t){p(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),p(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function tt(e,t){if(p(e,HTMLSelectElement)){const r=t,n=Array.from(r.children).find(o=>e.value===o.getAttribute("value"));n&&n.setAttribute("selected","")}}function rt(e,t){return p(t,Element)&&(Ze(e,t),Ve(e,t),et(e,t),tt(e,t)),t}async function nt(e,t){const r=e.querySelectorAll?e.querySelectorAll("use"):[];if(r.length===0)return e;const n={};for(let a=0;a<r.length;a++){const c=r[a].getAttribute("xlink:href");if(c){const i=e.querySelector(c),u=document.querySelector(c);!i&&u&&!n[c]&&(n[c]=await k(u,t,!0))}}const o=Object.values(n);if(o.length){const a="http://www.w3.org/1999/xhtml",s=document.createElementNS(a,"svg");s.setAttribute("xmlns",a),s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.overflow="hidden",s.style.display="none";const c=document.createElementNS(a,"defs");s.appendChild(c);for(let i=0;i<o.length;i++)c.appendChild(o[i]);e.appendChild(s)}return e}async function k(e,t,r){return!r&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(n=>Ye(n,t)).then(n=>Qe(e,n,t)).then(n=>rt(e,n)).then(n=>nt(n,t))}const oe=/url\((['"]?)([^'"]+?)\1\)/g,ot=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,at=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function st(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function ct(e){const t=[];return e.replace(oe,(r,n,o)=>(t.push(o),r)),t.filter(r=>!H(r))}async function it(e,t,r,n,o){try{const a=r?Le(t,r):t,s=U(t);let c;return o||(c=await V(a,s,n)),e.replace(st(t),`$1${c}$3`)}catch{}return e}function lt(e,{preferredFontFormat:t}){return t?e.replace(at,r=>{for(;;){const[n,,o]=ot.exec(r)||[];if(!o)return"";if(o===t)return`src: ${n};`}}):e}function ae(e){return e.search(oe)!==-1}async function se(e,t,r){if(!ae(e))return e;const n=lt(e,r);return ct(n).reduce((a,s)=>a.then(c=>it(c,s,t,r)),Promise.resolve(n))}async function $(e,t,r){var n;const o=(n=t.style)===null||n===void 0?void 0:n.getPropertyValue(e);if(o){const a=await se(o,null,r);return t.style.setProperty(e,a,t.style.getPropertyPriority(e)),!0}return!1}async function ut(e,t){await $("background",e,t)||await $("background-image",e,t),await $("mask",e,t)||await $("mask-image",e,t)}async function ft(e,t){const r=p(e,HTMLImageElement);if(!(r&&!H(e.src))&&!(p(e,SVGImageElement)&&!H(e.href.baseVal)))return;const n=r?e.src:e.href.baseVal,o=await V(n,U(n),t);await new Promise((a,s)=>{e.onload=a,e.onerror=s;const c=e;c.decode&&(c.decode=a),c.loading==="lazy"&&(c.loading="eager"),r?(e.srcset="",e.src=o):e.href.baseVal=o})}async function ht(e,t){const n=b(e.childNodes).map(o=>ce(o,t));await Promise.all(n).then(()=>e)}async function ce(e,t){p(e,Element)&&(await ut(e,t),await ft(e,t),await ht(e,t))}function dt(e,t){const{style:r}=e;t.backgroundColor&&(r.backgroundColor=t.backgroundColor),t.width&&(r.width=`${t.width}px`),t.height&&(r.height=`${t.height}px`);const n=t.style;return n!=null&&Object.keys(n).forEach(o=>{r[o]=n[o]}),e}const K={};async function X(e){let t=K[e];if(t!=null)return t;const n=await(await fetch(e)).text();return t={url:e,cssText:n},K[e]=t,t}async function Y(e,t){let r=e.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,a=(r.match(/url\([^)]+\)/g)||[]).map(async s=>{let c=s.replace(n,"$1");return c.startsWith("https://")||(c=new URL(c,e.url).href),ne(c,t.fetchRequestInit,({result:i})=>(r=r.replace(s,`url(${i})`),[s,i]))});return Promise.all(a).then(()=>r)}function J(e){if(e==null)return[];const t=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=e.replace(r,"");const o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const i=o.exec(n);if(i===null)break;t.push(i[0])}n=n.replace(o,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,s="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(s,"gi");for(;;){let i=a.exec(n);if(i===null){if(i=c.exec(n),i===null)break;a.lastIndex=c.lastIndex}else c.lastIndex=a.lastIndex;t.push(i[0])}return t}async function mt(e,t){const r=[],n=[];return e.forEach(o=>{if("cssRules"in o)try{b(o.cssRules||[]).forEach((a,s)=>{if(a.type===CSSRule.IMPORT_RULE){let c=s+1;const i=a.href,u=X(i).then(f=>Y(f,t)).then(f=>J(f).forEach(v=>{try{o.insertRule(v,v.startsWith("@import")?c+=1:o.cssRules.length)}catch(R){console.error("Error inserting rule from remote css",{rule:v,error:R})}})).catch(f=>{console.error("Error loading remote css",f.toString())});n.push(u)}})}catch(a){const s=e.find(c=>c.href==null)||document.styleSheets[0];o.href!=null&&n.push(X(o.href).then(c=>Y(c,t)).then(c=>J(c).forEach(i=>{s.insertRule(i,o.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",a)}}),Promise.all(n).then(()=>(e.forEach(o=>{if("cssRules"in o)try{b(o.cssRules||[]).forEach(a=>{r.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${o.href}`,a)}}),r))}function gt(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>ae(t.style.getPropertyValue("src")))}async function pt(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=b(e.ownerDocument.styleSheets),n=await mt(r,t);return gt(n)}async function wt(e,t){const r=await pt(e,t);return(await Promise.all(r.map(o=>{const a=o.parentStyleSheet?o.parentStyleSheet.href:null;return se(o.cssText,a,t)}))).join(`
`)}async function xt(e,t){const r=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await wt(e,t);if(r){const n=document.createElement("style"),o=document.createTextNode(r);n.appendChild(o),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function bt(e,t={}){const{width:r,height:n}=re(e,t),o=await k(e,t,!0);return await xt(o,t),await ce(o,t),dt(o,t),await Fe(o,r,n)}async function vt(e,t={}){const{width:r,height:n}=re(e,t),o=await bt(e,t),a=await L(o),s=document.createElement("canvas"),c=s.getContext("2d"),i=t.pixelRatio||Me(),u=t.canvasWidth||r,f=t.canvasHeight||n;return s.width=u*i,s.height=f*i,t.skipAutoScale||De(s),s.style.width=`${u}`,s.style.height=`${f}`,t.backgroundColor&&(c.fillStyle=t.backgroundColor,c.fillRect(0,0,s.width,s.height)),c.drawImage(a,0,0,s.width,s.height),s}async function yt(e,t={}){return(await vt(e,t)).toDataURL()}function Ct({colors:e,direction:t}){const r=h.useRef(),n=()=>{r.current&&yt(r.current).then(s=>{const c=document.createElement("a");c.download="gradient.png",c.href=s,c.click()}).catch(s=>{console.error("Oops, something went wrong!",s)})},o=e.map(s=>`${s.color}${Math.round(s.alpha*255).toString(16).padStart(2,"0")}`),a=`linear-gradient(${t}, ${o.join(", ")})`;return l.jsxs("div",{className:"my-4",children:[l.jsx("h2",{className:"mb-2 text-xl font-semibold",children:"Download as Image"}),l.jsx("div",{ref:r,className:"w-full h-48 mb-4 border rounded",style:{background:a}}),l.jsx("button",{onClick:n,className:"px-4 py-2 text-white bg-green-500 rounded",children:"Download"})]})}function Et(){const[e,t]=h.useState([{color:"#ff0000",alpha:1},{color:"#00ff00",alpha:1},{color:"#0000ff",alpha:1}]),[r,n]=h.useState("to right"),o=(i,u)=>{const f=[...e];f[i].color=u,t(f)},a=(i,u)=>{const f=[...e];f[i].alpha=u,t(f)},s=()=>t([...e,{color:"#ffffff",alpha:1}]),c=i=>t(e.filter((u,f)=>f!==i));return l.jsxs("div",{className:"flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-4xl font-bold",children:"CSS Colour Gradient"}),l.jsx("p",{className:"m-2 text-lg text-gray-500",children:"Creates Colour gradient from the choice of your colours."})]}),l.jsx("div",{className:"flex flex-col justify-center w-full p-5 ",children:l.jsxs("div",{className:"container p-4 mx-auto",children:[l.jsx("div",{className:"lg:flex lg:space-x-8",children:l.jsxs("div",{className:"w-full",children:[l.jsx($e,{colors:e,onColorChange:o,onAlphaChange:a,addColor:s,removeColor:c}),l.jsx("div",{className:"my-4",children:l.jsxs("label",{className:"block mb-2 text-left",children:["Direction:",l.jsxs("select",{value:r,onChange:i=>n(i.target.value),className:"p-2 ml-2 border rounded",children:[l.jsx("option",{value:"to right",children:"Right"}),l.jsx("option",{value:"to left",children:"Left"}),l.jsx("option",{value:"to top",children:"Up"}),l.jsx("option",{value:"to bottom",children:"Down"}),l.jsx("option",{value:"to top right",children:"Top Right"}),l.jsx("option",{value:"to bottom right",children:"Bottom Right"}),l.jsx("option",{value:"to top left",children:"Top Left"}),l.jsx("option",{value:"to bottom left",children:"Bottom Left"})]})]})})]})}),l.jsx(Te,{colors:e,direction:r}),l.jsx(Ct,{colors:e,direction:r})]})})]})}export{Et as default};
