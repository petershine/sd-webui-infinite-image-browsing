import{al as le,a2 as ae,d as R,j as oe,am as ue,w as E,Y as K,ad as z,l as Y,u as de,an as ie,a3 as se,h as I,c as l,a as D,$ as ce,ao as re,g as G,ap as he,P as c,aq as W,k as J,ar as fe,o as w,y as x,n as i,r as e,a6 as _,m as B,C as M,p as v,z as U,v as g,x as T,S as j,as as me,I as ve,A as L,q as O,E as ge,at as pe,au as _e,av as be,aw as Ce,V as H,U as ke,X as we}from"./index-82b3b198.js";import{N as q,_ as Q,F as ye}from"./numInput-af2327d5.js";import"./index-84ab7341.js";/* empty css              *//* empty css              */import{o as Se,g as $e,C as Ie}from"./functionalCallableComp-42f2615a.js";import"./db-b7b6b4ea.js";var Te=ae("small","default"),xe=function(){return{id:String,prefixCls:String,size:c.oneOf(Te),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},Ve=R({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:xe(),slots:["checkedChildren","unCheckedChildren"],setup:function(n,d){var p=d.attrs,S=d.slots,r=d.expose,h=d.emit,a=oe();ue(function(){E(!("defaultChecked"in p),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),E(!("value"in p),"Switch","`value` is not validate prop, do you mean `checked`?")});var t=K(n.checked!==void 0?n.checked:p.defaultChecked),b=z(function(){return t.value===n.checkedValue});Y(function(){return n.checked},function(){t.value=n.checked});var f=de("switch",n),m=f.prefixCls,$=f.direction,A=f.size,C=K(),V=function(){var u;(u=C.value)===null||u===void 0||u.focus()},F=function(){var u;(u=C.value)===null||u===void 0||u.blur()};r({focus:V,blur:F}),ie(function(){se(function(){n.autofocus&&!n.disabled&&C.value.focus()})});var o=function(u,y){n.disabled||(h("update:checked",u),h("change",u,y),a.onFieldChange())},k=function(u){h("blur",u)},P=function(u){V();var y=b.value?n.unCheckedValue:n.checkedValue;o(y,u),h("click",y,u)},ee=function(u){u.keyCode===W.LEFT?o(n.unCheckedValue,u):u.keyCode===W.RIGHT&&o(n.checkedValue,u),h("keydown",u)},ne=function(u){var y;(y=C.value)===null||y===void 0||y.blur(),h("mouseup",u)},te=z(function(){var s;return s={},I(s,"".concat(m.value,"-small"),A.value==="small"),I(s,"".concat(m.value,"-loading"),n.loading),I(s,"".concat(m.value,"-checked"),b.value),I(s,"".concat(m.value,"-disabled"),n.disabled),I(s,m.value,!0),I(s,"".concat(m.value,"-rtl"),$.value==="rtl"),s});return function(){var s;return l(he,{insertExtraNode:!0},{default:function(){return[l("button",D(D(D({},ce(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),p),{},{id:(s=n.id)!==null&&s!==void 0?s:a.id.value,onKeydown:ee,onClick:P,onBlur:k,onMouseup:ne,type:"button",role:"switch","aria-checked":t.value,disabled:n.disabled||n.loading,class:[p.class,te.value],ref:C}),[l("div",{class:"".concat(m.value,"-handle")},[n.loading?l(re,{class:"".concat(m.value,"-loading-icon")},null):null]),l("span",{class:"".concat(m.value,"-inner")},[b.value?G(S,n,"checkedChildren"):G(S,n,"unCheckedChildren")])])]}})}}});const Z=le(Ve);const X="/infinite_image_browsing/fe-static/assets/sample-55dcafc6.webp",Fe=["width","height","src"],Be=R({__name:"ImageSetting",setup(N){function n(S,r){return new Promise(h=>{const a=new Image;a.onload=()=>{const t=document.createElement("canvas");t.width=a.width*r,t.height=a.height*r,t.getContext("2d").drawImage(a,0,0,t.width,t.height),h(t.toDataURL())},a.src=S})}const d=J(),p=K("");return Y(()=>[d.enableThumbnail,d.gridThumbnailResolution],fe(async()=>{d.enableThumbnail&&(p.value=await n(X,d.gridThumbnailResolution/1024))},300),{immediate:!0,deep:!0}),(S,r)=>{const h=Q,a=Z;return w(),x(U,null,[l(h,{label:e(_)("defaultGridCellWidth")},{default:i(()=>[l(q,{min:64,max:1024,step:32,modelValue:e(d).defaultGridCellWidth,"onUpdate:modelValue":r[0]||(r[0]=t=>e(d).defaultGridCellWidth=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(h,{label:e(_)("useThumbnailPreview")},{default:i(()=>[l(a,{checked:e(d).enableThumbnail,"onUpdate:checked":r[1]||(r[1]=t=>e(d).enableThumbnail=t)},null,8,["checked"])]),_:1},8,["label"]),e(d).enableThumbnail?(w(),B(h,{key:0,label:e(_)("thumbnailResolution")},{default:i(()=>[l(q,{modelValue:e(d).gridThumbnailResolution,"onUpdate:modelValue":r[2]||(r[2]=t=>e(d).gridThumbnailResolution=t),min:256,max:1024,step:64},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),l(h,{label:e(_)("livePreview")},{default:i(()=>[v("div",null,[v("img",{width:e(d).defaultGridCellWidth,height:e(d).defaultGridCellWidth,src:e(d).enableThumbnail?p.value:e(X)},null,8,Fe)])]),_:1},8,["label"])],64)}}}),Me={class:"panel"},Ue={style:{"margin-top":"0"}},Ke={class:"lang-select-wrap"},Ne={class:"col"},Ae={class:"col"},Pe={class:"col"},De={class:"col"},Oe=R({__name:"globalSetting",setup(N){const n=J(),d=K(!1),p=async()=>{window.location.reload()},S=[{value:"en",text:"English"},{value:"zhHans",text:"简体中文"},{value:"zhHant",text:"繁體中文"},{value:"de",text:"Deutsch"}],r=(a,t)=>{const b=$e(a);b&&(n.shortcut[t]=b)},h=async()=>{await pe("shutdown_api_server_command"),await _e.removeFile(be),await Ce()};return(a,t)=>{const b=H,f=Q,m=Z,$=H,A=Ie,C=ke,V=ye;return w(),x("div",Me,[M("",!0),l(V,null,{default:i(()=>{var F;return[v("h2",Ue,g(e(_)("ImageBrowsingSettings")),1),l(Be),v("h2",null,g(e(_)("imgSearch")),1),l(f,{label:a.$t("rebuildImageIndex")},{default:i(()=>[l(b,{onClick:e(Se)},{default:i(()=>[T(g(a.$t("start")),1)]),_:1},8,["onClick"])]),_:1},8,["label"]),v("h2",null,g(e(_)("other")),1),l(f,{label:a.$t("onlyFoldersAndImages")},{default:i(()=>[l(m,{checked:e(n).onlyFoldersAndImages,"onUpdate:checked":t[0]||(t[0]=o=>e(n).onlyFoldersAndImages=o)},null,8,["checked"])]),_:1},8,["label"]),l(f,{label:a.$t("defaultSortingMethod")},{default:i(()=>[l(e(j),{value:e(n).defaultSortingMethod,"onUpdate:value":t[1]||(t[1]=o=>e(n).defaultSortingMethod=o),conv:e(me),options:e(ve)},null,8,["value","conv","options"])]),_:1},8,["label"]),l(f,{label:a.$t("longPressOpenContextMenu")},{default:i(()=>[l(m,{checked:e(n).longPressOpenContextMenu,"onUpdate:checked":t[2]||(t[2]=o=>e(n).longPressOpenContextMenu=o)},null,8,["checked"])]),_:1},8,["label"]),l(f,{label:a.$t("lang")},{default:i(()=>[v("div",Ke,[l(e(j),{options:S,value:e(n).lang,"onUpdate:value":t[3]||(t[3]=o=>e(n).lang=o),onChange:t[4]||(t[4]=o=>d.value=!0)},null,8,["value"])]),d.value?(w(),B($,{key:0,type:"primary",onClick:p,ghost:""},{default:i(()=>[T(g(e(_)("langChangeReload")),1)]),_:1})):M("",!0)]),_:1},8,["label"]),(w(!0),x(U,null,L(e(n).ignoredConfirmActions,(o,k)=>(w(),B(f,{label:a.$t(k+"SkipConfirm"),key:k},{default:i(()=>[l(A,{checked:e(n).ignoredConfirmActions[k],"onUpdate:checked":P=>e(n).ignoredConfirmActions[k]=P},null,8,["checked","onUpdate:checked"])]),_:2},1032,["label"]))),128)),v("h2",null,g(e(_)("shortcutKey")),1),l(f,{label:a.$t("download")},{default:i(()=>[v("div",Ne,[l(C,{value:e(n).shortcut.download,onKeydown:t[5]||(t[5]=O(o=>r(o,"download"),["stop","prevent"])),placeholder:a.$t("shortcutKeyDescription")},null,8,["value","placeholder"]),l($,{onClick:t[6]||(t[6]=o=>e(n).shortcut.download=""),class:"clear-btn"},{default:i(()=>[T(g(a.$t("clear")),1)]),_:1})])]),_:1},8,["label"]),l(f,{label:a.$t("deleteSelected")},{default:i(()=>[v("div",Ae,[l(C,{value:e(n).shortcut.delete,onKeydown:t[7]||(t[7]=O(o=>r(o,"delete"),["stop","prevent"])),placeholder:a.$t("shortcutKeyDescription")},null,8,["value","placeholder"]),l($,{onClick:t[8]||(t[8]=o=>e(n).shortcut.delete=""),class:"clear-btn"},{default:i(()=>[T(g(a.$t("clear")),1)]),_:1})])]),_:1},8,["label"]),(w(!0),x(U,null,L(((F=e(n).conf)==null?void 0:F.all_custom_tags)??[],o=>(w(),B(f,{label:a.$t("toggleTagSelection",{tag:o.name}),key:o.id},{default:i(()=>[v("div",Pe,[l(C,{value:e(n).shortcut[`toggle_tag_${o.name}`],onKeydown:O(k=>r(k,`toggle_tag_${o.name}`),["stop","prevent"]),placeholder:a.$t("shortcutKeyDescription")},null,8,["value","onKeydown","placeholder"]),l($,{onClick:k=>e(n).shortcut[`toggle_tag_${o.name}`]="",class:"clear-btn"},{default:i(()=>[T(g(a.$t("clear")),1)]),_:2},1032,["onClick"])])]),_:2},1032,["label"]))),128)),e(ge)?(w(),x(U,{key:0},[v("h2",null,g(e(_)("clientSpecificSettings")),1),l(f,null,{default:i(()=>[v("div",De,[l($,{onClick:h,class:"clear-btn"},{default:i(()=>[T(g(a.$t("initiateSoftwareStartupConfig")),1)]),_:1})])]),_:1})],64)):M("",!0)]}),_:1})])}}});const He=we(Oe,[["__scopeId","data-v-e5d3d829"]]);export{He as default};
