import{h as S,L as q,r as D,p as i,C as s,D as a,N as p,l as F,U as f,M as u,k as e,o as b,q as c,m as g,a6 as N,$ as z,S as B,T as I,al as $,t as d,R as m}from"./vue-8b21a996.js";import{l as R}from"./index-714877db.js";import{F as v}from"./index-90c66895.js";import{b as U}from"./validate-11156ce9.js";const W={class:"title"},A=S({__name:"popupForm",setup(K){const n=q(),o=$("baTable"),{t:l}=R(),y=D({add_time:[U({name:"date",title:l("questionsType.add_time")})]});return(L,t)=>{const h=d("el-form"),C=d("el-scrollbar"),_=d("el-button"),V=d("el-dialog"),k=m("drag"),w=m("zoom"),T=m("loading"),x=m("blur");return i(),s(V,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["add","edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:a(()=>[p((i(),F("div",W,[f(u(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[k,[".ba-operate-dialog",".el-dialog__header"]],[w,".ba-operate-dialog"]])]),footer:a(()=>[b("div",{style:g("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[c(_,{onClick:t[4]||(t[4]=r=>e(o).toggleForm(""))},{default:a(()=>[f(u(e(l)("Cancel")),1)]),_:1}),p((i(),s(_,{loading:e(o).form.submitLoading,onClick:t[5]||(t[5]=r=>e(o).onSubmit(n.value)),type:"primary"},{default:a(()=>[f(u(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[x]])],4)]),default:a(()=>[p((i(),s(C,{class:"ba-table-form-scrollbar"},{default:a(()=>[b("div",{class:I(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:g("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?B("",!0):(i(),s(h,{key:0,ref_key:"formRef",ref:n,onSubmit:t[2]||(t[2]=N(()=>{},["prevent"])),onKeyup:t[3]||(t[3]=z(r=>e(o).onSubmit(n.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:y},{default:a(()=>[c(v,{label:e(l)("questionsType.title"),type:"string",modelValue:e(o).form.items.title,"onUpdate:modelValue":t[0]||(t[0]=r=>e(o).form.items.title=r),prop:"title",placeholder:e(l)("Please input field",{field:e(l)("questionsType.title")})},null,8,["label","modelValue","placeholder"]),c(v,{label:e(l)("questionsType.add_time"),type:"datetime",modelValue:e(o).form.items.add_time,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).form.items.add_time=r),prop:"add_time",placeholder:e(l)("Please select field",{field:e(l)("questionsType.add_time")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[T,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{A as _};