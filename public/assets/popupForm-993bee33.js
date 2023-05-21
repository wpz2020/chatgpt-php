import{defineComponent as B,ref as C,inject as G,reactive as x,watch as L,resolveComponent as d,resolveDirective as c,openBlock as u,createBlock as f,unref as e,withCtx as i,withDirectives as h,createElementBlock as W,createTextVNode as b,toDisplayString as y,createElementVNode as V,normalizeStyle as K,createVNode as m,normalizeClass as $,withKeys as q,createCommentVNode as A}from"vue";import{useI18n as M}from"vue-i18n";import{F as w}from"./index-39d73c69.js";import{c as H,i as R,_ as J}from"./index-89e26330.js";import{d as O}from"./controllerUrls-941681c3.js";import{b as Q}from"./validate-e09b6b50.js";import"./index-0a827c2c.js";import"element-plus";import"vue-router";import"./index-d3b20950.js";import"pinia";import"vue-demi";function X(){return H({url:O+"index",method:"get"})}const Y={class:"title"},Z=B({__name:"popupForm",setup(ee,{expose:S}){const _=C(),g=C(),t=G("baTable"),{t:r}=M(),a=x({treeKey:R(),defaultCheckedKeys:[],menuRules:[]}),F=x({name:[Q({name:"required",title:r("auth.group.Group name")})],auth:[{required:!0,validator:(n,o,l)=>v().length<=0?l(new Error(r("Please select field",{field:r("auth.group.jurisdiction")}))):l()}],pid:[{validator:(n,o,l)=>o&&parseInt(o)==parseInt(t.form.items.id)?l(new Error(r("auth.group.The parent group cannot be the group itself"))):l(),trigger:"blur"}]});X().then(n=>{a.menuRules=n.data.list});const v=()=>_.value.getCheckedKeys().concat(_.value.getHalfCheckedKeys()),I=(n,o)=>{if(o.isLeaf)return"";let l=!0;for(const p in o.childNodes)o.childNodes[p].isLeaf||(l=!1);return l?"penultimate-node":""};return S({getCheckeds:v}),L(()=>t.form.items.rules,()=>{if(t.form.items.rules&&t.form.items.rules.length)if(t.form.items.rules.includes("*")){let n=[];for(const o in a.menuRules)n.push(a.menuRules[o].id);a.defaultCheckedKeys=n}else a.defaultCheckedKeys=t.form.items.rules;else a.defaultCheckedKeys=[];a.treeKey=R()}),(n,o)=>{const l=d("el-input"),p=d("el-form-item"),N=d("el-tree"),D=d("el-form"),E=d("el-scrollbar"),k=d("el-button"),T=d("el-dialog"),z=c("drag"),P=c("zoom"),U=c("loading"),j=c("blur");return u(),f(T,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(t).form.operate,onClose:e(t).toggleForm,"destroy-on-close":!0},{header:i(()=>[h((u(),W("div",Y,[b(y(e(t).form.operate?e(r)(e(t).form.operate):""),1)])),[[z,[".ba-operate-dialog",".el-dialog__header"]],[P,".ba-operate-dialog"]])]),footer:i(()=>[V("div",{style:K("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[m(k,{onClick:o[4]||(o[4]=s=>e(t).toggleForm(""))},{default:i(()=>[b(y(e(r)("Cancel")),1)]),_:1}),h((u(),f(k,{loading:e(t).form.submitLoading,onClick:o[5]||(o[5]=s=>e(t).onSubmit(g.value)),type:"primary"},{default:i(()=>[b(y(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(r)("Save and edit next item"):e(r)("Save")),1)]),_:1},8,["loading"])),[[j]])],4)]),default:i(()=>[h((u(),f(E,{class:"ba-table-form-scrollbar"},{default:i(()=>[V("div",{class:$(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:K("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?A("",!0):(u(),f(D,{key:0,ref_key:"formRef",ref:g,onKeyup:o[3]||(o[3]=q(s=>e(t).onSubmit(g.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:F},{default:i(()=>[m(w,{label:e(r)("auth.group.Parent group"),modelValue:e(t).form.items.pid,"onUpdate:modelValue":o[0]||(o[0]=s=>e(t).form.items.pid=s),type:"remoteSelect",prop:"pid","input-attr":{params:{isTree:!0},field:"name","remote-url":e(t).api.actionUrl.get("index"),placeholder:e(r)("Click Select")}},null,8,["label","modelValue","input-attr"]),m(p,{prop:"name",label:e(r)("auth.group.Group name")},{default:i(()=>[m(l,{modelValue:e(t).form.items.name,"onUpdate:modelValue":o[1]||(o[1]=s=>e(t).form.items.name=s),type:"string",placeholder:e(r)("Please input field",{field:e(r)("auth.group.Group name")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),m(p,{prop:"auth",label:e(r)("auth.group.jurisdiction")},{default:i(()=>[(u(),f(N,{ref_key:"treeRef",ref:_,key:a.treeKey,"default-checked-keys":a.defaultCheckedKeys,"default-expand-all":!0,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title",class:I},data:a.menuRules},null,8,["default-checked-keys","props","data"]))]),_:1},8,["label"]),m(w,{label:e(r)("state"),modelValue:e(t).form.items.status,"onUpdate:modelValue":o[2]||(o[2]=s=>e(t).form.items.status=s),type:"radio",data:{content:{0:e(r)("Disable"),1:e(r)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[U,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const fe=J(Z,[["__scopeId","data-v-85f14534"]]);export{fe as default};
