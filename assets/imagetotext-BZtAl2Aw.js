import{g as pe,r as X,j as O}from"./index-Cx9n1fWL.js";var he={exports:{}};(function(n){var a=function(i){var l=Object.prototype,v=l.hasOwnProperty,L=Object.defineProperty||function(r,e,o){r[e]=o.value},h,g=typeof Symbol=="function"?Symbol:{},w=g.iterator||"@@iterator",S=g.asyncIterator||"@@asyncIterator",T=g.toStringTag||"@@toStringTag";function d(r,e,o){return Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),r[e]}try{d({},"")}catch{d=function(e,o,c){return e[o]=c}}function E(r,e,o,c){var t=e&&e.prototype instanceof D?e:D,s=Object.create(t.prototype),u=new K(c||[]);return L(s,"_invoke",{value:Z(r,o,u)}),s}i.wrap=E;function j(r,e,o){try{return{type:"normal",arg:r.call(e,o)}}catch(c){return{type:"throw",arg:c}}}var _="suspendedStart",N="suspendedYield",$="executing",I="completed",y={};function D(){}function M(){}function b(){}var W={};d(W,w,function(){return this});var B=Object.getPrototypeOf,z=B&&B(B(H([])));z&&z!==l&&v.call(z,w)&&(W=z);var P=b.prototype=D.prototype=Object.create(W);M.prototype=b,L(P,"constructor",{value:b,configurable:!0}),L(b,"constructor",{value:M,configurable:!0}),M.displayName=d(b,T,"GeneratorFunction");function J(r){["next","throw","return"].forEach(function(e){d(r,e,function(o){return this._invoke(e,o)})})}i.isGeneratorFunction=function(r){var e=typeof r=="function"&&r.constructor;return e?e===M||(e.displayName||e.name)==="GeneratorFunction":!1},i.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,b):(r.__proto__=b,d(r,T,"GeneratorFunction")),r.prototype=Object.create(P),r},i.awrap=function(r){return{__await:r}};function U(r,e){function o(s,u,f,p){var m=j(r[s],r,u);if(m.type==="throw")p(m.arg);else{var C=m.arg,A=C.value;return A&&typeof A=="object"&&v.call(A,"__await")?e.resolve(A.__await).then(function(R){o("next",R,f,p)},function(R){o("throw",R,f,p)}):e.resolve(A).then(function(R){C.value=R,f(C)},function(R){return o("throw",R,f,p)})}}var c;function t(s,u){function f(){return new e(function(p,m){o(s,u,p,m)})}return c=c?c.then(f,f):f()}L(this,"_invoke",{value:t})}J(U.prototype),d(U.prototype,S,function(){return this}),i.AsyncIterator=U,i.async=function(r,e,o,c,t){t===void 0&&(t=Promise);var s=new U(E(r,e,o,c),t);return i.isGeneratorFunction(e)?s:s.next().then(function(u){return u.done?u.value:s.next()})};function Z(r,e,o){var c=_;return function(s,u){if(c===$)throw new Error("Generator is already running");if(c===I){if(s==="throw")throw u;return q()}for(o.method=s,o.arg=u;;){var f=o.delegate;if(f){var p=Y(f,o);if(p){if(p===y)continue;return p}}if(o.method==="next")o.sent=o._sent=o.arg;else if(o.method==="throw"){if(c===_)throw c=I,o.arg;o.dispatchException(o.arg)}else o.method==="return"&&o.abrupt("return",o.arg);c=$;var m=j(r,e,o);if(m.type==="normal"){if(c=o.done?I:N,m.arg===y)continue;return{value:m.arg,done:o.done}}else m.type==="throw"&&(c=I,o.method="throw",o.arg=m.arg)}}}function Y(r,e){var o=e.method,c=r.iterator[o];if(c===h)return e.delegate=null,o==="throw"&&r.iterator.return&&(e.method="return",e.arg=h,Y(r,e),e.method==="throw")||o!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var t=j(c,r.iterator,e.arg);if(t.type==="throw")return e.method="throw",e.arg=t.arg,e.delegate=null,y;var s=t.arg;if(!s)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y;if(s.done)e[r.resultName]=s.value,e.next=r.nextLoc,e.method!=="return"&&(e.method="next",e.arg=h);else return s;return e.delegate=null,y}J(P),d(P,T,"Generator"),d(P,w,function(){return this}),d(P,"toString",function(){return"[object Generator]"});function Q(r){var e={tryLoc:r[0]};1 in r&&(e.catchLoc=r[1]),2 in r&&(e.finallyLoc=r[2],e.afterLoc=r[3]),this.tryEntries.push(e)}function x(r){var e=r.completion||{};e.type="normal",delete e.arg,r.completion=e}function K(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(Q,this),this.reset(!0)}i.keys=function(r){var e=Object(r),o=[];for(var c in e)o.push(c);return o.reverse(),function t(){for(;o.length;){var s=o.pop();if(s in e)return t.value=s,t.done=!1,t}return t.done=!0,t}};function H(r){if(r){var e=r[w];if(e)return e.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var o=-1,c=function t(){for(;++o<r.length;)if(v.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=h,t.done=!0,t};return c.next=c}}return{next:q}}i.values=H;function q(){return{value:h,done:!0}}return K.prototype={constructor:K,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(x),!r)for(var e in this)e.charAt(0)==="t"&&v.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=h)},stop:function(){this.done=!0;var r=this.tryEntries[0],e=r.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(p,m){return s.type="throw",s.arg=r,e.next=p,m&&(e.method="next",e.arg=h),!!m}for(var c=this.tryEntries.length-1;c>=0;--c){var t=this.tryEntries[c],s=t.completion;if(t.tryLoc==="root")return o("end");if(t.tryLoc<=this.prev){var u=v.call(t,"catchLoc"),f=v.call(t,"finallyLoc");if(u&&f){if(this.prev<t.catchLoc)return o(t.catchLoc,!0);if(this.prev<t.finallyLoc)return o(t.finallyLoc)}else if(u){if(this.prev<t.catchLoc)return o(t.catchLoc,!0)}else if(f){if(this.prev<t.finallyLoc)return o(t.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(r,e){for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o];if(c.tryLoc<=this.prev&&v.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var t=c;break}}t&&(r==="break"||r==="continue")&&t.tryLoc<=e&&e<=t.finallyLoc&&(t=null);var s=t?t.completion:{};return s.type=r,s.arg=e,t?(this.method="next",this.next=t.finallyLoc,y):this.complete(s)},complete:function(r,e){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&e&&(this.next=e),y},finish:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===r)return this.complete(o.completion,o.afterLoc),x(o),y}},catch:function(r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===r){var c=o.completion;if(c.type==="throw"){var t=c.arg;x(o)}return t}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,o){return this.delegate={iterator:H(r),resultName:e,nextLoc:o},this.method==="next"&&(this.arg=h),y}},i}(n.exports);try{regeneratorRuntime=a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}})(he);var re=(n,a)=>`${n}-${a}-${Math.random().toString(16).slice(3,8)}`;const ge=re;let oe=0;var le=({id:n,action:a,payload:i={}})=>{let l=n;return typeof l>"u"&&(l=ge("Job",oe),oe+=1),{id:l,action:a,payload:i}},F={};let ne=!1;F.logging=ne;F.setLogging=n=>{ne=n};F.log=(...n)=>ne?console.log.apply(void 0,n):null;const me=le,{log:V}=F,ve=re;let se=0;var we=()=>{const n=ve("Scheduler",se),a={},i={};let l=[];se+=1;const v=()=>l.length,L=()=>Object.keys(a).length,h=()=>{if(l.length!==0){const d=Object.keys(a);for(let E=0;E<d.length;E+=1)if(typeof i[d[E]]>"u"){l[0](a[d[E]]);break}}},g=(d,E)=>new Promise((j,_)=>{const N=me({action:d,payload:E});l.push(async $=>{l.shift(),i[$.id]=N;try{j(await $[d].apply(void 0,[...E,N.id]))}catch(I){_(I)}finally{delete i[$.id],h()}}),V(`[${n}]: Add ${N.id} to JobQueue`),V(`[${n}]: JobQueue length=${l.length}`),h()});return{addWorker:d=>(a[d.id]=d,V(`[${n}]: Add ${d.id}`),V(`[${n}]: Number of workers=${L()}`),h(),d.id),addJob:async(d,...E)=>{if(L()===0)throw Error(`[${n}]: You need to have at least one worker before adding jobs`);return g(d,E)},terminate:async()=>{Object.keys(a).forEach(async d=>{await a[d].terminate()}),l=[]},getQueueLen:v,getNumWorkers:L}};function ye(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function be(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Le=be;const Ee=Le;var Se=n=>{const a={};return typeof WorkerGlobalScope<"u"?a.type="webworker":Ee()?a.type="electron":typeof document=="object"?a.type="browser":typeof process=="object"&&typeof ye=="function"&&(a.type="node"),typeof n>"u"?a:a[n]};const ke=Se("type")==="browser",Oe=ke?n=>new URL(n,window.location.href).href:n=>n;var Te=n=>{const a={...n};return["corePath","workerPath","langPath"].forEach(i=>{n[i]&&(a[i]=Oe(a[i]))}),a},je=n=>{const a=[],i=[],l=[],v=[],L=[];return n.blocks&&n.blocks.forEach(h=>{h.paragraphs.forEach(g=>{g.lines.forEach(w=>{w.words.forEach(S=>{S.symbols.forEach(T=>{L.push({...T,page:n,block:h,paragraph:g,line:w,word:S})}),v.push({...S,page:n,block:h,paragraph:g,line:w})}),l.push({...w,page:n,block:h,paragraph:g})}),i.push({...g,page:n,block:h})}),a.push({...h,page:n})}),{...n,blocks:a,paragraphs:i,lines:l,words:v,symbols:L}},ue={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Ae="tesseract.js",Re="5.1.0",_e="Pure Javascript Multilingual OCR",Ne="src/index.js",$e="src/index.d.ts",Ie="dist/tesseract.min.js",Pe="dist/tesseract.min.js",Ce={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},Me={"./src/worker/node/index.js":"./src/worker/browser/index.js"},xe="",Ge=["jeromewu"],De="Apache-2.0",ze={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},Ue={"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.1.0","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},Fe={"@rollup/pluginutils":"^5.0.2"},We={type:"git",url:"https://github.com/naptha/tesseract.js.git"},Be={url:"https://github.com/naptha/tesseract.js/issues"},Ye="https://github.com/naptha/tesseract.js",Ke={type:"opencollective",url:"https://opencollective.com/tesseractjs"},He={name:Ae,version:Re,description:_e,main:Ne,types:$e,unpkg:Ie,jsdelivr:Pe,scripts:Ce,browser:Me,author:xe,contributors:Ge,license:De,devDependencies:ze,dependencies:Ue,overrides:Fe,repository:We,bugs:Be,homepage:Ye,collective:Ke};var Je={workerBlobURL:!0,logger:()=>{}};const qe=He.version,Ve=Je;var Ze={...Ve,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${qe}/dist/worker.min.js`},Qe=({workerPath:n,workerBlobURL:a})=>{let i;if(Blob&&URL&&a){const l=new Blob([`importScripts("${n}");`],{type:"application/javascript"});i=new Worker(URL.createObjectURL(l))}else i=new Worker(n);return i},Xe=n=>{n.terminate()},et=(n,a)=>{n.onmessage=({data:i})=>{a(i)}},tt=async(n,a)=>{n.postMessage(a)};const ee=n=>new Promise((a,i)=>{const l=new FileReader;l.onload=()=>{a(l.result)},l.onerror=({target:{error:{code:v}}})=>{i(Error(`File could not be read! Code=${v}`))},l.readAsArrayBuffer(n)}),te=async n=>{let a=n;if(typeof n>"u")return"undefined";if(typeof n=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(n)?a=atob(n.split(",")[1]).split("").map(i=>i.charCodeAt(0)):a=await(await fetch(n)).arrayBuffer();else if(typeof HTMLElement<"u"&&n instanceof HTMLElement)n.tagName==="IMG"&&(a=await te(n.src)),n.tagName==="VIDEO"&&(a=await te(n.poster)),n.tagName==="CANVAS"&&await new Promise(i=>{n.toBlob(async l=>{a=await ee(l),i()})});else if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){const i=await n.convertToBlob();a=await ee(i)}else(n instanceof File||n instanceof Blob)&&(a=await ee(n));return new Uint8Array(a)};var rt=te;const nt=Ze,ot=Qe,st=Xe,at=et,it=tt,ct=rt;var lt={defaultOptions:nt,spawnWorker:ot,terminateWorker:st,onMessage:at,send:it,loadImage:ct};const ut=Te,dt=je,k=le,{log:ae}=F,ft=re,G=ue,{defaultOptions:pt,spawnWorker:ht,terminateWorker:gt,onMessage:mt,loadImage:ie,send:vt}=lt;let ce=0;var de=async(n="eng",a=G.LSTM_ONLY,i={},l={})=>{const v=ft("Worker",ce),{logger:L,errorHandler:h,...g}=ut({...pt,...i}),w={},S={},T=typeof n=="string"?n.split("+"):n;let d=a,E=l;const j=[G.DEFAULT,G.LSTM_ONLY].includes(a)&&!g.legacyCore;let _,N;const $=new Promise((t,s)=>{N=t,_=s}),I=t=>{_(t.message)};let y=ht(g);y.onerror=I,ce+=1;const D=(t,s)=>{w[t]=s},M=(t,s)=>{S[t]=s},b=({id:t,action:s,payload:u})=>new Promise((f,p)=>{ae(`[${v}]: Start ${t}, action=${s}`);const m=`${s}-${t}`;D(m,f),M(m,p),vt(y,{workerId:v,jobId:t,action:s,payload:u})}),W=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),B=t=>b(k({id:t,action:"load",payload:{options:{lstmOnly:j,corePath:g.corePath,logging:g.logging}}})),z=(t,s,u)=>b(k({id:u,action:"FS",payload:{method:"writeFile",args:[t,s]}})),P=(t,s)=>b(k({id:s,action:"FS",payload:{method:"readFile",args:[t,{encoding:"utf8"}]}})),J=(t,s)=>b(k({id:s,action:"FS",payload:{method:"unlink",args:[t]}})),U=(t,s,u)=>b(k({id:u,action:"FS",payload:{method:t,args:s}})),Z=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),Y=(t,s)=>b(k({id:s,action:"loadLanguage",payload:{langs:t,options:{langPath:g.langPath,dataPath:g.dataPath,cachePath:g.cachePath,cacheMethod:g.cacheMethod,gzip:g.gzip,lstmOnly:[G.LSTM_ONLY,G.TESSERACT_LSTM_COMBINED].includes(d)&&!g.legacyLang}}})),Q=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),x=(t,s,u,f)=>b(k({id:f,action:"initialize",payload:{langs:t,oem:s,config:u}})),K=(t="eng",s,u,f)=>{if(j&&[G.TESSERACT_ONLY,G.TESSERACT_LSTM_COMBINED].includes(s))throw Error("Legacy model requested but code missing.");const p=s||d;d=p;const m=u||E;E=m;const A=(typeof t=="string"?t.split("+"):t).filter(R=>!T.includes(R));return T.push(...A),A.length>0?Y(A,f).then(()=>x(t,p,m,f)):x(t,p,m,f)},H=(t={},s)=>b(k({id:s,action:"setParameters",payload:{params:t}})),q=async(t,s={},u={blocks:!0,text:!0,hocr:!0,tsv:!0},f)=>b(k({id:f,action:"recognize",payload:{image:await ie(t),options:s,output:u}})),r=(t="Tesseract OCR Result",s=!1,u)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),b(k({id:u,action:"getPDF",payload:{title:t,textonly:s}}))),e=async(t,s)=>{if(j)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return b(k({id:s,action:"detect",payload:{image:await ie(t)}}))},o=async()=>(y!==null&&(gt(y),y=null),Promise.resolve());mt(y,({workerId:t,jobId:s,status:u,action:f,data:p})=>{const m=`${f}-${s}`;if(u==="resolve"){ae(`[${t}]: Complete ${s}`);let C=p;f==="recognize"?C=dt(p):f==="getPDF"&&(C=Array.from({...p,length:Object.keys(p).length})),w[m]({jobId:s,data:C})}else if(u==="reject")if(S[m](p),f==="load"&&_(p),h)h(p);else throw Error(p);else u==="progress"&&L({...p,userJobId:s})});const c={id:v,worker:y,setResolve:D,setReject:M,load:W,writeText:z,readText:P,removeFile:J,FS:U,loadLanguage:Z,initialize:Q,reinitialize:K,setParameters:H,recognize:q,getPDF:r,detect:e,terminate:o};return B().then(()=>Y(n)).then(()=>x(n,a,l)).then(()=>N(c)).catch(()=>{}),$};const fe=de,wt=async(n,a,i)=>{const l=await fe(a,1,i);return l.recognize(n).finally(async()=>{await l.terminate()})},yt=async(n,a)=>{const i=await fe("osd",0,a);return i.detect(n).finally(async()=>{await i.terminate()})};var bt={recognize:wt,detect:yt},Lt={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Et={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const St=we,kt=de,Ot=bt,Tt=Lt,jt=ue,At=Et,{setLogging:Rt}=F;var _t={languages:Tt,OEM:jt,PSM:At,createScheduler:St,createWorker:kt,setLogging:Rt,...Ot};const Nt=pe(_t),It=()=>{const[n,a]=X.useState(null),[i,l]=X.useState(""),[v,L]=X.useState(!1),h=w=>{const S=w.target.files[0];a(URL.createObjectURL(S))},g=()=>{n&&(L(!0),Nt.recognize(n,"eng",{logger:w=>console.log(w)}).then(({data:{text:w}})=>{l(w),L(!1)}))};return O.jsxs("div",{className:"flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7",children:[O.jsxs("div",{children:[O.jsx("h1",{className:"text-4xl font-bold",children:"Image to Text"}),O.jsx("p",{className:"m-2 text-lg text-gray-500",children:"Scans Text from Images."})]}),O.jsxs("div",{className:"flex flex-col items-center p-4",children:[O.jsx("input",{type:"file",accept:"image/*",onChange:h,className:"mb-4"}),n&&O.jsx("img",{src:n,alt:"Selected",className:"w-1/2 mb-4"}),O.jsx("button",{onClick:g,className:"px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700",children:"Extract Text"}),v?O.jsx("p",{className:"mt-4",children:"Processing..."}):O.jsx("textarea",{value:i,readOnly:!0,className:"w-full h-64 p-2 mt-4 border border-gray-300 rounded lg:w-2/3"})]})]})};export{It as default};
