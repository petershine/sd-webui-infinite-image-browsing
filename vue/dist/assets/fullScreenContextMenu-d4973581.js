import{d as Oe,be as Pe,$ as xe,bU as Ce,a4 as ke,am as Z,bV as Me,bW as le,e as oe,c as o,_ as De,h as T,a as se,bp as ze,P as ue,a5 as H,as as Te,av as Ae,s as Le,r as Ne,v as U,ae as X,bK as je,y as ce,bX as Ie,bY as de,a7 as j,o as v,k as h,l as g,C as u,z as G,A as d,Q as fe,bZ as We,p as E,n as I,m as b,t as m,G as pe,H as Q,R as ve,I as Be,E as Fe,B as Ue,Y as me,Z as He,b_ as Ve,M as Ye,b$ as Xe,c0 as Ge,ak as qe,al as Qe,q as Ze}from"./index-594b377e.js";import{D as Je}from"./index-04d9d05b.js";import"./index-4b259bab.js";import{i as Ke,j as Re,_ as et}from"./FileItem-da781493.js";var tt=["class","style"],nt=function(){return{prefixCls:String,spinning:{type:Boolean,default:void 0},size:String,wrapperClassName:String,tip:ue.any,delay:Number,indicator:ue.any}},q=null;function it(e,t){return!!e&&!!t&&!isNaN(Number(t))}function an(e){var t=e.indicator;q=typeof t=="function"?t:function(){return o(t,null,null)}}const rn=Oe({compatConfig:{MODE:3},name:"ASpin",inheritAttrs:!1,props:Pe(nt(),{size:"default",spinning:!0,wrapperClassName:""}),setup:function(){return{originalUpdateSpinning:null,configProvider:xe("configProvider",Ce)}},data:function(){var t=this.spinning,i=this.delay,n=it(t,i);return{sSpinning:t&&!n}},created:function(){this.originalUpdateSpinning=this.updateSpinning,this.debouncifyUpdateSpinning(this.$props)},mounted:function(){this.updateSpinning()},updated:function(){var t=this;ke(function(){t.debouncifyUpdateSpinning(),t.updateSpinning()})},beforeUnmount:function(){this.cancelExistingSpin()},methods:{debouncifyUpdateSpinning:function(t){var i=t||this.$props,n=i.delay;n&&(this.cancelExistingSpin(),this.updateSpinning=Z(this.originalUpdateSpinning,n))},updateSpinning:function(){var t=this.spinning,i=this.sSpinning;i!==t&&(this.sSpinning=t)},cancelExistingSpin:function(){var t=this.updateSpinning;t&&t.cancel&&t.cancel()},renderIndicator:function(t){var i="".concat(t,"-dot"),n=Me(this,"indicator");return n===null?null:(Array.isArray(n)&&(n=n.length===1?n[0]:n),le(n)?oe(n,{class:i}):q&&le(q())?oe(q(),{class:i}):o("span",{class:"".concat(i," ").concat(t,"-dot-spin")},[o("i",{class:"".concat(t,"-dot-item")},null),o("i",{class:"".concat(t,"-dot-item")},null),o("i",{class:"".concat(t,"-dot-item")},null),o("i",{class:"".concat(t,"-dot-item")},null)]))}},render:function(){var t,i,n,l=this.$props,x=l.size,N=l.prefixCls,M=l.tip,D=M===void 0?(t=(i=this.$slots).tip)===null||t===void 0?void 0:t.call(i):M,O=l.wrapperClassName,L=this.$attrs,A=L.class,w=L.style,$=De(L,tt),C=this.configProvider,S=C.getPrefixCls,P=C.direction,y=S("spin",N),a=this.sSpinning,f=(n={},T(n,y,!0),T(n,"".concat(y,"-sm"),x==="small"),T(n,"".concat(y,"-lg"),x==="large"),T(n,"".concat(y,"-spinning"),a),T(n,"".concat(y,"-show-text"),!!D),T(n,"".concat(y,"-rtl"),P==="rtl"),T(n,A,!!A),n),p=o("div",se(se({},$),{},{style:w,class:f}),[this.renderIndicator(y),D?o("div",{class:"".concat(y,"-text")},[D]):null]),k=ze(this);if(k&&k.length){var W,r=(W={},T(W,"".concat(y,"-container"),!0),T(W,"".concat(y,"-blur"),a),W);return o("div",{class:["".concat(y,"-nested-loading"),O]},[a&&o("div",{key:"loading"},[p]),o("div",{class:r,key:"container"},[k])])}return p}});var at={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 000 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0013.5-4.7L863.9 169a7.9 7.9 0 00-8.9-8.9zM416.6 562.3a8.03 8.03 0 00-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 00-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z"}}]},name:"arrows-alt",theme:"outlined"};const rt=at;function ge(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),n.forEach(function(l){lt(e,l,i[l])})}return e}function lt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var J=function(t,i){var n=ge({},t,i.attrs);return o(H,ge({},n,{icon:rt}),null)};J.displayName="ArrowsAltOutlined";J.inheritAttrs=!1;const ot=J;var st={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z"}}]},name:"drag",theme:"outlined"};const ut=st;function he(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),n.forEach(function(l){ct(e,l,i[l])})}return e}function ct(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var K=function(t,i){var n=he({},t,i.attrs);return o(H,he({},n,{icon:ut}),null)};K.displayName="DragOutlined";K.inheritAttrs=!1;const dt=K;var ft={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"};const pt=ft;function ye(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),n.forEach(function(l){vt(e,l,i[l])})}return e}function vt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var R=function(t,i){var n=ye({},t,i.attrs);return o(H,ye({},n,{icon:pt}),null)};R.displayName="FullscreenExitOutlined";R.inheritAttrs=!1;const mt=R;var gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"};const ht=gt;function _e(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),n.forEach(function(l){yt(e,l,i[l])})}return e}function yt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var ee=function(t,i){var n=_e({},t,i.attrs);return o(H,_e({},n,{icon:ht}),null)};ee.displayName="FullscreenOutlined";ee.inheritAttrs=!1;const _t=ee;var bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"left-circle",theme:"outlined"};const wt=bt;function be(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),n.forEach(function(l){Ot(e,l,i[l])})}return e}function Ot(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var te=function(t,i){var n=be({},t,i.attrs);return o(H,be({},n,{icon:wt}),null)};te.displayName="LeftCircleOutlined";te.inheritAttrs=!1;const ln=te;var Lt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"};const Et=Lt;function we(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable}))),n.forEach(function(l){$t(e,l,i[l])})}return e}function $t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var ne=function(t,i){var n=we({},t,i.attrs);return o(H,we({},n,{icon:Et}),null)};ne.displayName="RightCircleOutlined";ne.inheritAttrs=!1;const on=ne;function St(e,t,i,n){let l=0,x=0,N=typeof(n==null?void 0:n.width)=="number"?n.width:0,M=typeof(n==null?void 0:n.height)=="number"?n.height:0,D=typeof(n==null?void 0:n.left)=="number"?n.left:0,O=typeof(n==null?void 0:n.top)=="number"?n.top:0,L=!1;const A=a=>{a.stopPropagation(),a.preventDefault(),!(!e.value||!t.value)&&(l=a instanceof MouseEvent?a.clientX:a.touches[0].clientX,x=a instanceof MouseEvent?a.clientY:a.touches[0].clientY,N=e.value.offsetWidth,M=e.value.offsetHeight,t.value.offsetLeft,t.value.offsetTop,document.documentElement.addEventListener("mousemove",w),document.documentElement.addEventListener("touchmove",w),document.documentElement.addEventListener("mouseup",$),document.documentElement.addEventListener("touchend",$))},w=a=>{if(!e.value||!t.value)return;let f=N+((a instanceof MouseEvent?a.clientX:a.touches[0].clientX)-l),p=M+((a instanceof MouseEvent?a.clientY:a.touches[0].clientY)-x);e.value.offsetLeft+f>window.innerWidth&&(f=window.innerWidth-e.value.offsetLeft),e.value.offsetTop+p>window.innerHeight&&(p=window.innerHeight-e.value.offsetTop),e.value.style.width=`${f}px`,e.value.style.height=`${p}px`,n!=null&&n.onResize&&n.onResize(f,p)},$=()=>{document.documentElement.removeEventListener("mousemove",w),document.documentElement.removeEventListener("touchmove",w),document.documentElement.removeEventListener("mouseup",$),document.documentElement.removeEventListener("touchend",$)},C=a=>{a.stopPropagation(),a.preventDefault(),!(!e.value||!i.value)&&(L=!0,D=e.value.offsetLeft,O=e.value.offsetTop,l=a instanceof MouseEvent?a.clientX:a.touches[0].clientX,x=a instanceof MouseEvent?a.clientY:a.touches[0].clientY,document.documentElement.addEventListener("mousemove",S),document.documentElement.addEventListener("touchmove",S),document.documentElement.addEventListener("mouseup",P),document.documentElement.addEventListener("touchend",P))},S=a=>{if(!e.value||!i.value||!L)return;const f=D+((a instanceof MouseEvent?a.clientX:a.touches[0].clientX)-l),p=O+((a instanceof MouseEvent?a.clientY:a.touches[0].clientY)-x);f<0?e.value.style.left="0px":f+e.value.offsetWidth>window.innerWidth?e.value.style.left=`${window.innerWidth-e.value.offsetWidth}px`:e.value.style.left=`${f}px`,p<0?e.value.style.top="0px":p+e.value.offsetHeight>window.innerHeight?e.value.style.top=`${window.innerHeight-e.value.offsetHeight}px`:e.value.style.top=`${p}px`,n!=null&&n.onDrag&&n.onDrag(f,p)},P=()=>{L=!1,document.documentElement.removeEventListener("mousemove",S),document.documentElement.removeEventListener("touchmove",S),document.documentElement.removeEventListener("mouseup",P),document.documentElement.removeEventListener("touchend",P)},y=()=>{if(!e.value||!t.value)return;let a=e.value.offsetLeft,f=e.value.offsetTop,p=e.value.offsetWidth,k=e.value.offsetHeight;a+p>window.innerWidth&&(a=window.innerWidth-p,a<0&&(a=0,p=window.innerWidth)),f+k>window.innerHeight&&(f=window.innerHeight-k,f<0&&(f=0,k=window.innerHeight)),e.value.style.left=`${a}px`,e.value.style.top=`${f}px`,e.value.style.width=`${p}px`,e.value.style.height=`${k}px`};return Te(()=>{!e.value||!n||(typeof n.width=="number"&&(e.value.style.width=`${n.width}px`),typeof n.height=="number"&&(e.value.style.height=`${n.height}px`),typeof n.left=="number"&&(e.value.style.left=`${n.left}px`),typeof n.top=="number"&&(e.value.style.top=`${n.top}px`),y(),window.addEventListener("resize",y))}),Ae(()=>{document.documentElement.removeEventListener("mousemove",w),document.documentElement.removeEventListener("touchmove",w),document.documentElement.removeEventListener("mouseup",$),document.documentElement.removeEventListener("touchend",$),document.documentElement.removeEventListener("mousemove",S),document.documentElement.removeEventListener("touchmove",S),document.documentElement.removeEventListener("mouseup",P),document.documentElement.removeEventListener("touchend",P),window.removeEventListener("resize",y)}),Le(()=>[e.value,t.value,i.value],([a,f,p])=>{a&&f&&(f.addEventListener("mousedown",A),f.addEventListener("touchstart",A)),a&&p&&(p.addEventListener("mousedown",C),p.addEventListener("touchstart",C))}),{handleResizeMouseDown:A,handleDragMouseDown:C}}const V=e=>(qe("data-v-1404c4c6"),e=e(),Qe(),e),Pt={class:"container"},xt={class:"action-bar"},Ct=["title"],kt=["title"],Mt={key:0,class:"icon",style:{cursor:"pointer"}},Dt={key:0,"flex-placeholder":""},zt={key:1,class:"action-bar"},Tt={key:0,class:"gen-info"},At={class:"info-tags"},Nt={class:"name"},jt={class:"value"},It={key:0,class:"tags-container"},Wt=["onClick"],Bt=V(()=>g("br",null,null,-1)),Ft=V(()=>g("h3",null,"Prompt",-1)),Ut=["innerHTML"],Ht=V(()=>g("br",null,null,-1)),Vt=V(()=>g("h3",null,"Negative Prompt",-1)),Yt=["innerHTML"],Xt=V(()=>g("br",null,null,-1)),Gt=V(()=>g("h3",null,"Params",-1)),qt={style:{"font-weight":"600","text-transform":"capitalize"}},Qt={key:0},Zt={key:1},Jt=["title"],Kt=Oe({__name:"fullScreenContextMenu",props:{file:{},idx:{}},emits:["contextMenuClick"],setup(e,{emit:t}){const i=e,n=Ne(),l=Ke(),x=U(),N=X(()=>l.tagMap.get(i.file.fullpath)??[]),M=U(""),D=je(),O=U(""),L=U(""),A=X(()=>L.value.split(`
`)),w=X(()=>ce(L.value)),$=X(()=>{let r=ce(L.value);return delete r.prompt,delete r.negativePrompt,r});Le(()=>{var r;return(r=i==null?void 0:i.file)==null?void 0:r.fullpath},async r=>{r&&(D.tasks.forEach(s=>s.cancel()),D.pushAction(()=>Ie(r)).res.then(s=>{O.value=s,L.value=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}))},{immediate:!0});const C=de("iib@fullScreenContextMenu.prompt-tab","structedData"),S=U(),P=U(),y={left:100,top:100,width:512,height:384,expanded:!0},a=de("fullScreenContextMenu.vue-drag",y);a.value&&(a.value.left<0||a.value.top<0)&&(a.value={...y}),St(x,S,P,{...a.value,onDrag:Z(function(r,s){a.value={...a.value,left:r,top:s}},300),onResize:Z(function(r,s){a.value={...a.value,width:r,height:s}},300)});function f(r){return r.parentNode}function p(r){if(!r)return"";let s="";const B=r.split(/[\n,]+/);let z=!1;for(let _=0;_<B.length;_++){const Y=B[_].trim();z||(z=Y.includes("(")),s+=`<span class="${z?"has-parentheses":""}">${Y}</span>`,_<B.length-1&&(s+=","),z&&(z=!Y.includes(")"))}return s}Re("load",r=>{const s=r.target;s.className==="ant-image-preview-img"&&(M.value=`${s.naturalWidth} x ${s.naturalHeight}`)},{capture:!0});const k=X(()=>{const r=[{name:j("fileName"),val:i.file.name},{name:j("fileSize"),val:i.file.size}];return M.value&&r.push({name:j("resolution"),val:M.value}),r}),W=()=>{const r="Negative prompt:",s=O.value.includes(r)?O.value.split(r)[0]:A.value[0]??"";pe(s.trim())};return(r,s)=>{var re;const B=Je,z=me,_=He,Y=Ve,ie=Ye,Ee=me,ae=Xe,$e=Ge;return v(),h("div",{ref_key:"el",ref:x,class:ve(["full-screen-menu",{"unset-size":!u(a).expanded}]),onWheelCapture:s[6]||(s[6]=Ue(()=>{},["stop"]))},[g("div",Pt,[g("div",xt,[g("div",{ref_key:"dragHandle",ref:P,class:"icon",style:{cursor:"grab"},title:u(j)("dragToMovePanel")},[o(u(dt))],8,Ct),g("div",{class:"icon",style:{cursor:"pointer"},onClick:s[0]||(s[0]=c=>u(a).expanded=!u(a).expanded),title:u(j)("clickToToggleMaximizeMinimize")},[u(a).expanded?(v(),G(u(mt),{key:0})):(v(),G(u(_t),{key:1}))],8,kt),o(B,{"get-popup-container":f},{overlay:d(()=>[o(et,{file:r.file,idx:r.idx,"selected-tag":N.value,"disable-delete":u(fe)(r.file)===u(n).fullscreenPreviewInitialUrl,onContextMenuClick:s[1]||(s[1]=(c,F,Se)=>t("contextMenuClick",c,F,Se))},null,8,["file","idx","selected-tag","disable-delete"])]),default:d(()=>[u(a).expanded?E("",!0):(v(),h("div",Mt,[o(u(We))]))]),_:1}),u(a).expanded?(v(),h("div",Dt)):E("",!0),u(a).expanded?(v(),h("div",zt,[o(B,{trigger:["hover"],"get-popup-container":f},{overlay:d(()=>[o(ie,{onClick:s[2]||(s[2]=c=>t("contextMenuClick",c,r.file,r.idx))},{default:d(()=>{var c;return[((c=u(n).conf)==null?void 0:c.launch_mode)!=="server"?(v(),h(I,{key:0},[o(_,{key:"send2txt2img"},{default:d(()=>[b(m(r.$t("sendToTxt2img")),1)]),_:1}),o(_,{key:"send2img2img"},{default:d(()=>[b(m(r.$t("sendToImg2img")),1)]),_:1}),o(_,{key:"send2inpaint"},{default:d(()=>[b(m(r.$t("sendToInpaint")),1)]),_:1}),o(_,{key:"send2extras"},{default:d(()=>[b(m(r.$t("sendToExtraFeatures")),1)]),_:1}),o(Y,{key:"sendToThirdPartyExtension",title:r.$t("sendToThirdPartyExtension")},{default:d(()=>[o(_,{key:"send2controlnet-txt2img"},{default:d(()=>[b("ControlNet - "+m(r.$t("t2i")),1)]),_:1}),o(_,{key:"send2controlnet-img2img"},{default:d(()=>[b("ControlNet - "+m(r.$t("i2i")),1)]),_:1}),o(_,{key:"send2outpaint"},{default:d(()=>[b("openOutpaint")]),_:1})]),_:1},8,["title"])],64)):E("",!0),o(_,{key:"send2BatchDownload"},{default:d(()=>[b(m(r.$t("sendToBatchDownload")),1)]),_:1}),o(_,{key:"send2savedDir"},{default:d(()=>[b(m(r.$t("send2savedDir")),1)]),_:1}),o(_,{key:"deleteFiles",disabled:u(fe)(r.file)===u(n).fullscreenPreviewInitialUrl},{default:d(()=>[b(m(r.$t("deleteSelected")),1)]),_:1},8,["disabled"]),o(_,{key:"previewInNewWindow"},{default:d(()=>[b(m(r.$t("previewInNewWindow")),1)]),_:1}),o(_,{key:"copyPreviewUrl"},{default:d(()=>[b(m(r.$t("copySourceFilePreviewLink")),1)]),_:1})]}),_:1})]),default:d(()=>[o(z,null,{default:d(()=>[b(m(u(j)("openContextMenu")),1)]),_:1})]),_:1}),o(Ee,{onClick:s[3]||(s[3]=c=>t("contextMenuClick",{key:"download"},i.file,i.idx))},{default:d(()=>[b(m(r.$t("download")),1)]),_:1}),O.value?(v(),G(z,{key:0,onClick:s[4]||(s[4]=c=>u(pe)(O.value))},{default:d(()=>[b(m(r.$t("copyPrompt")),1)]),_:1})):E("",!0),O.value?(v(),G(z,{key:1,onClick:W},{default:d(()=>[b(m(r.$t("copyPositivePrompt")),1)]),_:1})):E("",!0)])):E("",!0)]),u(a).expanded?(v(),h("div",Tt,[g("div",At,[(v(!0),h(I,null,Q(k.value,c=>(v(),h("span",{class:"info-tag",key:c.name},[g("span",Nt,m(c.name),1),g("span",jt,m(c.val),1)]))),128))]),(re=u(n).conf)!=null&&re.all_custom_tags?(v(),h("div",It,[(v(!0),h(I,null,Q(u(n).conf.all_custom_tags,c=>(v(),h("div",{class:ve(["tag",{selected:N.value.some(F=>F.id===c.id)}]),onClick:F=>t("contextMenuClick",{key:`toggle-tag-${c.id}`},r.file,r.idx),key:c.id,style:Be({"--tag-color":u(l).getColor(c.name)})},m(c.name),15,Wt))),128))])):E("",!0),o($e,{activeKey:u(C),"onUpdate:activeKey":s[5]||(s[5]=c=>Fe(C)?C.value=c:null)},{default:d(()=>[o(ae,{key:"structedData",tab:r.$t("structuredData")},{default:d(()=>[g("div",null,[w.value.prompt?(v(),h(I,{key:0},[Bt,Ft,g("code",{innerHTML:p(w.value.prompt??"")},null,8,Ut)],64)):E("",!0),w.value.negativePrompt?(v(),h(I,{key:1},[Ht,Vt,g("code",{innerHTML:p(w.value.negativePrompt??"")},null,8,Yt)],64)):E("",!0)]),Object.keys($.value).length?(v(),h(I,{key:0},[Xt,Gt,g("table",null,[(v(!0),h(I,null,Q($.value,(c,F)=>(v(),h("tr",{key:c,class:"gen-info-frag"},[g("td",qt,m(F),1),typeof c=="object"?(v(),h("td",Qt,[g("code",null,m(c),1)])):(v(),h("td",Zt,m(c),1))]))),128))])],64)):E("",!0)]),_:1},8,["tab"]),o(ae,{key:"sourceText",tab:r.$t("sourceText")},{default:d(()=>[g("code",null,m(O.value),1)]),_:1},8,["tab"])]),_:1},8,["activeKey"])])):E("",!0)]),u(a).expanded?(v(),h("div",{key:0,class:"mouse-sensor",ref_key:"resizeHandle",ref:S,title:u(j)("dragToResizePanel")},[o(u(ot))],8,Jt)):E("",!0)],34)}}});const sn=Ze(Kt,[["__scopeId","data-v-1404c4c6"]]);export{ln as L,on as R,rn as S,sn as f,an as s};
