import{h as M,L as P,r as D,p as m,C as n,D as i,N as b,l as F,U as y,M as c,k as e,o as g,q as r,m as V,a6 as N,$ as z,S as B,T as I,al as T,t as s,R as p}from"./vue-8b21a996.js";import{l as $}from"./index-dda703f5.js";import{F as d}from"./index-38d8351b.js";import{b as u}from"./validate-0d2c1515.js";const R={class:"title"},A=M({__name:"popupForm",setup(W){const f=P(),l=T("baTable"),{t:a}=$(),v=D({num:[u({name:"number",title:a("apikey.num")})],start:[u({name:"date",title:a("apikey.start")})],end:[u({name:"date",title:a("apikey.end")})],add_time:[u({name:"date",title:a("apikey.add_time")})]});return(K,o)=>{const _=s("el-form"),h=s("el-scrollbar"),k=s("el-button"),C=s("el-dialog"),w=p("drag"),x=p("zoom"),S=p("loading"),U=p("blur");return m(),n(C,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["add","edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,width:"50%"},{header:i(()=>[b((m(),F("div",R,[y(c(e(l).form.operate?e(a)(e(l).form.operate):""),1)])),[[w,[".ba-operate-dialog",".el-dialog__header"]],[x,".ba-operate-dialog"]])]),footer:i(()=>[g("div",{style:V("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[r(k,{onClick:o[9]||(o[9]=t=>e(l).toggleForm(""))},{default:i(()=>[y(c(e(a)("Cancel")),1)]),_:1}),b((m(),n(k,{loading:e(l).form.submitLoading,onClick:o[10]||(o[10]=t=>e(l).onSubmit(f.value)),type:"primary"},{default:i(()=>[y(c(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[U]])],4)]),default:i(()=>[b((m(),n(h,{class:"ba-table-form-scrollbar"},{default:i(()=>[g("div",{class:I(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:V("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?B("",!0):(m(),n(_,{key:0,ref_key:"formRef",ref:f,onSubmit:o[7]||(o[7]=N(()=>{},["prevent"])),onKeyup:o[8]||(o[8]=z(t=>e(l).onSubmit(f.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:v},{default:i(()=>[r(d,{label:e(a)("apikey.apikey"),type:"string",modelValue:e(l).form.items.apikey,"onUpdate:modelValue":o[0]||(o[0]=t=>e(l).form.items.apikey=t),prop:"apikey",placeholder:e(a)("Please input field",{field:e(a)("apikey.apikey")})},null,8,["label","modelValue","placeholder"]),r(d,{label:e(a)("apikey.total"),type:"number",prop:"total","input-attr":{step:1},modelValue:e(l).form.items.total,"onUpdate:modelValue":o[1]||(o[1]=t=>e(l).form.items.total=t),modelModifiers:{number:!0},placeholder:e(a)("Please input field",{field:e(a)("apikey.total")})},null,8,["label","modelValue","placeholder"]),r(d,{label:e(a)("apikey.usage"),type:"number",prop:"usage","input-attr":{step:1},modelValue:e(l).form.items.usage,"onUpdate:modelValue":o[2]||(o[2]=t=>e(l).form.items.usage=t),modelModifiers:{number:!0},placeholder:e(a)("Please input field",{field:e(a)("apikey.usage")})},null,8,["label","modelValue","placeholder"]),r(d,{label:e(a)("apikey.balance"),type:"number",prop:"balance","input-attr":{step:1},modelValue:e(l).form.items.balance,"onUpdate:modelValue":o[3]||(o[3]=t=>e(l).form.items.balance=t),modelModifiers:{number:!0},placeholder:e(a)("Please input field",{field:e(a)("apikey.balance")})},null,8,["label","modelValue","placeholder"]),r(d,{label:e(a)("apikey.num"),type:"number",prop:"num","input-attr":{step:1},modelValue:e(l).form.items.num,"onUpdate:modelValue":o[4]||(o[4]=t=>e(l).form.items.num=t),modelModifiers:{number:!0},placeholder:e(a)("Please input field",{field:e(a)("apikey.num")})},null,8,["label","modelValue","placeholder"]),r(d,{label:e(a)("apikey.end"),type:"datetime",modelValue:e(l).form.items.end,"onUpdate:modelValue":o[5]||(o[5]=t=>e(l).form.items.end=t),prop:"end",placeholder:e(a)("Please select field",{field:e(a)("apikey.end")})},null,8,["label","modelValue","placeholder"]),r(d,{label:e(a)("apikey.status"),type:"radio",prop:"status",modelValue:e(l).form.items.status,"onUpdate:modelValue":o[6]||(o[6]=t=>e(l).form.items.status=t),modelModifiers:{number:!0},data:{content:{0:"关闭",1:"开启"}},placeholder:e(a)("Please input field",{field:e(a)("apikey.status")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[S,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{A as _};
