import{h as k,p as s,C as f,D as i,N as c,l as F,U as b,M as u,k as e,o as h,q as r,m as g,$ as z,T as B,al as T,t as d,R as p}from"./vue-8b21a996.js";import{l as W,_ as D}from"./index-dda703f5.js";import{p as I}from"./index-f5c1ef38.js";const M={class:"title"},N={class:"block-help"},R=k({__name:"popupForm",setup($){const l=T("baTable"),{t:o}=W();return(q,t)=>{const V=d("el-image"),m=d("el-form-item"),n=d("el-input"),y=d("el-form"),v=d("el-scrollbar"),_=d("el-button"),w=d("el-dialog"),U=p("drag"),x=p("zoom"),C=p("loading"),S=p("blur");return s(),f(w,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(l).form.operate,onClose:e(l).toggleForm},{header:i(()=>[c((s(),F("div",M,[b(u(e(l).form.operate?e(o)(e(l).form.operate):""),1)])),[[U,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:i(()=>[h("div",{style:g("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[r(_,{onClick:t[12]||(t[12]=a=>e(l).toggleForm(""))},{default:i(()=>[b(u(e(o)("Cancel")),1)]),_:1}),c((s(),f(_,{loading:e(l).form.submitLoading,onClick:t[13]||(t[13]=a=>e(l).onSubmit()),type:"primary"},{default:i(()=>[b(u(e(l).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[S]])],4)]),default:i(()=>[c((s(),f(v,{class:"ba-table-form-scrollbar"},{default:i(()=>[h("div",{class:B(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:g("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[r(y,{onKeyup:t[10]||(t[10]=z(a=>e(l).onSubmit(),["enter"])),modelValue:e(l).form.items,"onUpdate:modelValue":t[11]||(t[11]=a=>e(l).form.items=a),"label-position":"right","label-width":e(l).form.labelWidth+"px"},{default:i(()=>[r(m,{label:e(o)("utils.preview")},{default:i(()=>[r(V,{class:"preview-img","preview-src-list":[e(l).form.items.full_url],src:e(I)(e(l).form.items,{},e(l).form.items.suffix)},null,8,["preview-src-list","src"])]),_:1},8,["label"]),r(m,{label:e(o)("utils.Breakdown")},{default:i(()=>[r(n,{modelValue:e(l).form.items.topic,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).form.items.topic=a),type:"string",placeholder:e(o)("routine.attachment.The file is saved in the directory, and the file will not be automatically transferred if the record is modified"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.Physical path")},{default:i(()=>[r(n,{modelValue:e(l).form.items.url,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).form.items.url=a),type:"string",placeholder:e(o)("routine.attachment.File saving path Modifying records will not automatically transfer files"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.image width")},{default:i(()=>[r(n,{modelValue:e(l).form.items.width,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).form.items.width=a),type:"number",placeholder:e(o)("routine.attachment.Width of picture file")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.Picture height")},{default:i(()=>[r(n,{modelValue:e(l).form.items.height,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).form.items.height=a),type:"number",placeholder:e(o)("routine.attachment.Height of picture file")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("utils.Original name")},{default:i(()=>[r(n,{modelValue:e(l).form.items.name,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).form.items.name=a),type:"string",placeholder:e(o)("routine.attachment.Original file name")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.file size")},{default:i(()=>[r(n,{modelValue:e(l).form.items.size,"onUpdate:modelValue":t[5]||(t[5]=a=>e(l).form.items.size=a),type:"number",placeholder:e(o)("routine.attachment.File size (bytes)")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.mime type")},{default:i(()=>[r(n,{modelValue:e(l).form.items.mimetype,"onUpdate:modelValue":t[6]||(t[6]=a=>e(l).form.items.mimetype=a),type:"string",placeholder:e(o)("routine.attachment.File MIME type")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("utils.Upload (Reference) times")},{default:i(()=>[r(n,{modelValue:e(l).form.items.quote,"onUpdate:modelValue":t[7]||(t[7]=a=>e(l).form.items.quote=a),type:"number",placeholder:e(o)("routine.attachment.Upload (Reference) times of this file")},null,8,["modelValue","placeholder"]),h("span",N,u(e(o)("routine.attachment.When the same file is uploaded multiple times, only one attachment record will be saved and added")),1)]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.Storage mode")},{default:i(()=>[r(n,{modelValue:e(l).form.items.storage,"onUpdate:modelValue":t[8]||(t[8]=a=>e(l).form.items.storage=a),type:"string",placeholder:e(o)("routine.attachment.Storage mode"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:e(o)("routine.attachment.SHA1 code")},{default:i(()=>[r(n,{modelValue:e(l).form.items.sha1,"onUpdate:modelValue":t[9]||(t[9]=a=>e(l).form.items.sha1=a),type:"string",placeholder:e(o)("routine.attachment.SHA1 encoding of file"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["modelValue","label-width"])],6)]),_:1})),[[C,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});const E=D(R,[["__scopeId","data-v-ee322e60"]]);export{E as default};
