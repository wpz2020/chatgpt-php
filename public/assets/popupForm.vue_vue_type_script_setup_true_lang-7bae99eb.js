import{d as S,H as q,$ as z,r as F,f as r,Y as s,b as a,z as p,c as I,h as f,i as u,j as e,g as _,a as c,I as g,a0 as N,N as B,x as D,y as $,R,e as d,aC as m}from"./index-9250cf41.js";import{F as v}from"./index-5cf5ba2e.js";import{b as W}from"./validate-d30190a1.js";const j={class:"title"},L=S({__name:"popupForm",setup(K){const n=q(),o=R("baTable"),{t:l}=z(),y=F({add_time:[W({name:"date",title:l("questionsType.add_time")})]});return(P,t)=>{const h=d("el-form"),C=d("el-scrollbar"),b=d("el-button"),V=d("el-dialog"),w=m("drag"),x=m("zoom"),k=m("loading"),T=m("blur");return r(),s(V,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["add","edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:a(()=>[p((r(),I("div",j,[f(u(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[w,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:a(()=>[_("div",{style:g("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[c(b,{onClick:t[4]||(t[4]=i=>e(o).toggleForm(""))},{default:a(()=>[f(u(e(l)("Cancel")),1)]),_:1}),p((r(),s(b,{loading:e(o).form.submitLoading,onClick:t[5]||(t[5]=i=>e(o).onSubmit(n.value)),type:"primary"},{default:a(()=>[f(u(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[T]])],4)]),default:a(()=>[p((r(),s(C,{class:"ba-table-form-scrollbar"},{default:a(()=>[_("div",{class:$(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:g("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?D("",!0):(r(),s(h,{key:0,ref_key:"formRef",ref:n,onSubmit:t[2]||(t[2]=N(()=>{},["prevent"])),onKeyup:t[3]||(t[3]=B(i=>e(o).onSubmit(n.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:y},{default:a(()=>[c(v,{label:e(l)("questionsType.title"),type:"string",modelValue:e(o).form.items.title,"onUpdate:modelValue":t[0]||(t[0]=i=>e(o).form.items.title=i),prop:"title",placeholder:e(l)("Please input field",{field:e(l)("questionsType.title")})},null,8,["label","modelValue","placeholder"]),c(v,{label:e(l)("questionsType.add_time"),type:"datetime",modelValue:e(o).form.items.add_time,"onUpdate:modelValue":t[1]||(t[1]=i=>e(o).form.items.add_time=i),prop:"add_time",placeholder:e(l)("Please select field",{field:e(l)("questionsType.add_time")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[k,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{L as _};
