import{d as R,l as U,o as r,y as _,c as n,n as a,r as e,s as y,p as b,t as L,v as h,x as q,m as M,K as Q,H as u,L as S,O as H,Q as K,W}from"./index-837602c1.js";import{a as j,f as J,L as X,R as Y,b as Z,S as ee}from"./fullScreenContextMenu-f56d0b68.js";import"./hook-594118df.js";import{g as se}from"./db-90ebe1a2.js";import{u as te}from"./hook-0b66e22e.js";const ie={class:"hint"},ne={key:1,class:"preview-switch"},le=R({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(V){const m=V,{queue:p,images:t,onContextMenuClickU:g,stackViewEl:D,previewIdx:l,previewing:v,onPreviewVisibleChange:T,previewImgMove:f,canPreview:I,itemSize:k,gridItems:z,showGenInfo:o,imageGenInfo:w,q:F,multiSelectedIdxs:$,onFileItemClick:B,scroller:C,showMenuIdx:d,onFileDragStart:G,onFileDragEnd:A}=te();return U(()=>m.selectedTagIds,async()=>{var s;const{res:c}=p.pushAction(()=>se(m.selectedTagIds));t.value=await c,(s=C.value)==null||s.scrollToItem(0)},{immediate:!0}),(c,s)=>{const E=H,N=K,O=ee;return r(),_("div",{class:"container",ref_key:"stackViewEl",ref:D},[n(O,{size:"large",spinning:!e(p).isIdle},{default:a(()=>[n(N,{visible:e(o),"onUpdate:visible":s[1]||(s[1]=i=>y(o)?o.value=i:null),width:"70vw","mask-closable":"",onOk:s[2]||(s[2]=i=>o.value=!1)},{cancelText:a(()=>[]),default:a(()=>[n(E,{active:"",loading:!e(F).isIdle},{default:a(()=>[b("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[0]||(s[0]=i=>e(L)(e(w)))},[b("div",ie,h(c.$t("doubleClickToCopy")),1),q(" "+h(e(w)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(t)?(r(),M(e(j),{key:0,ref_key:"scroller",ref:C,class:"file-list",items:e(t),"item-size":e(k).first,"key-field":"fullpath","item-secondary-size":e(k).second,gridItems:e(z)},{default:a(({item:i,index:x})=>[n(J,{idx:x,file:i,"show-menu-idx":e(d),"onUpdate:showMenuIdx":s[3]||(s[3]=P=>y(d)?d.value=P:null),onDragstart:e(G),onDragend:e(A),onFileItemClick:e(B),"full-screen-preview-image-url":e(t)[e(l)]?e(Q)(e(t)[e(l)]):"",selected:e($).includes(x),onContextMenuClick:e(g),onPreviewVisibleChange:e(T)},null,8,["idx","file","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):u("",!0),e(v)?(r(),_("div",ne,[n(e(X),{onClick:s[4]||(s[4]=i=>e(f)("prev")),class:S({disable:!e(I)("prev")})},null,8,["class"]),n(e(Y),{onClick:s[5]||(s[5]=i=>e(f)("next")),class:S({disable:!e(I)("next")})},null,8,["class"])])):u("",!0)]),_:1},8,["spinning"]),e(v)&&e(t)&&e(t)[e(l)]?(r(),M(Z,{key:0,file:e(t)[e(l)],idx:e(l),onContextMenuClick:e(g)},null,8,["file","idx","onContextMenuClick"])):u("",!0)],512)}}});const ue=W(le,[["__scopeId","data-v-2cae0a95"]]);export{ue as default};
