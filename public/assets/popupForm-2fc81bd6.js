import{h as N,L as T,r as $,B as z,p as d,C as p,D as m,N as c,l as A,U as _,M as h,k as e,o as w,q as r,m as P,$ as V,a6 as k,S as E,T as K,al as R,t as s,R as b}from"./vue-8b21a996.js";import{k as W,l as L,_ as M}from"./index-dda703f5.js";import{b as u,r as j}from"./validate-0d2c1515.js";import{F as i}from"./index-38d8351b.js";import{b as G}from"./controllerUrls-941681c3.js";import"./index-7f4811f3.js";import"./index-f5c1ef38.js";const H={class:"title"},J=N({__name:"popupForm",setup(O){const x=W(),f=T(),a=R("baTable"),{t:l}=L(),v=$({username:[u({name:"required",title:l("auth.admin.username")}),u({name:"account"})],nickname:[u({name:"required",title:l("auth.admin.nickname")})],group_arr:[u({name:"required",message:l("Please select field",{field:l("auth.admin.grouping")})})],email:[u({name:"email",message:l("Please enter the correct field",{field:l("auth.admin.mailbox")})})],mobile:[u({name:"mobile",message:l("Please enter the correct field",{field:l("auth.admin.mobile")})})],password:[{validator:(g,o,n)=>{if(a.form.operate=="add"){if(!o)return n(new Error(l("Please input field",{field:l("auth.admin.Password")})))}else if(!o)return n();return j(o)?n():n(new Error(l("validate.Please enter the correct password")))},trigger:"blur"}]});return z(()=>a.form.operate,g=>{v.password[0].required=g=="add"}),(g,o)=>{const n=s("el-input"),C=s("el-form-item"),S=s("el-form"),U=s("el-scrollbar"),y=s("el-button"),F=s("el-dialog"),I=b("drag"),D=b("zoom"),q=b("loading"),B=b("blur");return d(),p(F,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(a).form.operate,onClose:e(a).toggleForm,"destroy-on-close":!0},{header:m(()=>[c((d(),A("div",H,[_(h(e(a).form.operate?e(l)(e(a).form.operate):""),1)])),[[I,[".ba-operate-dialog",".el-dialog__header"]],[D,".ba-operate-dialog"]])]),footer:m(()=>[w("div",{style:P("width: calc(100% - "+e(a).form.labelWidth/1.8+"px)")},[r(y,{onClick:o[12]||(o[12]=t=>e(a).toggleForm(""))},{default:m(()=>[_(h(e(l)("Cancel")),1)]),_:1}),c((d(),p(y,{loading:e(a).form.submitLoading,onClick:o[13]||(o[13]=t=>e(a).onSubmit(f.value)),type:"primary"},{default:m(()=>[_(h(e(a).form.operateIds&&e(a).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[B]])],4)]),default:m(()=>[c((d(),p(U,{class:"ba-table-form-scrollbar"},{default:m(()=>[w("div",{class:K(["ba-operate-form","ba-"+e(a).form.operate+"-form"]),style:P("width: calc(100% - "+e(a).form.labelWidth/2+"px)")},[e(a).form.loading?E("",!0):(d(),p(S,{key:0,ref_key:"formRef",ref:f,onKeyup:o[11]||(o[11]=V(t=>e(a).onSubmit(f.value),["enter"])),model:e(a).form.items,"label-position":"right","label-width":e(a).form.labelWidth+"px",rules:v},{default:m(()=>[r(i,{label:e(l)("auth.admin.username"),modelValue:e(a).form.items.username,"onUpdate:modelValue":o[0]||(o[0]=t=>e(a).form.items.username=t),type:"string",prop:"username",placeholder:e(l)("auth.admin.Administrator login")},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.nickname"),modelValue:e(a).form.items.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).form.items.nickname=t),type:"string",prop:"nickname",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.nickname")})},null,8,["label","modelValue","placeholder"]),(d(),p(i,{label:e(l)("auth.admin.grouping"),modelValue:e(a).form.items.group_arr,"onUpdate:modelValue":o[2]||(o[2]=t=>e(a).form.items.group_arr=t),prop:"group_arr",type:"remoteSelect",key:"group-"+e(a).form.items.id,"input-attr":{multiple:!0,params:{isTree:!0,absoluteAuth:e(x).id==e(a).form.items.id?0:1},field:"name","remote-url":e(G)+"index",placeholder:e(l)("Click Select")}},null,8,["label","modelValue","input-attr"])),r(i,{label:e(l)("auth.admin.head portrait"),type:"image",modelValue:e(a).form.items.avatar,"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).form.items.avatar=t)},null,8,["label","modelValue"]),r(i,{label:e(l)("auth.admin.mailbox"),prop:"email",modelValue:e(a).form.items.email,"onUpdate:modelValue":o[4]||(o[4]=t=>e(a).form.items.email=t),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mailbox")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.mobile"),prop:"mobile",modelValue:e(a).form.items.mobile,"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).form.items.mobile=t),type:"string",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.mobile")})},null,8,["label","modelValue","placeholder"]),r(i,{label:e(l)("auth.admin.Password"),prop:"password",modelValue:e(a).form.items.password,"onUpdate:modelValue":o[6]||(o[6]=t=>e(a).form.items.password=t),type:"password",placeholder:e(a).form.operate=="add"?e(l)("Please input field",{field:e(l)("auth.admin.Password")}):e(l)("auth.admin.Please leave blank if not modified")},null,8,["label","modelValue","placeholder"]),r(C,{prop:"motto",label:e(l)("auth.admin.Personal signature")},{default:m(()=>[r(n,{onKeyup:[o[7]||(o[7]=V(k(()=>{},["stop"]),["enter"])),o[8]||(o[8]=V(k(t=>e(a).onSubmit(f.value),["ctrl"]),["enter"]))],modelValue:e(a).form.items.motto,"onUpdate:modelValue":o[9]||(o[9]=t=>e(a).form.items.motto=t),type:"textarea",placeholder:e(l)("Please input field",{field:e(l)("auth.admin.Personal signature")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(i,{label:e(l)("state"),modelValue:e(a).form.items.status,"onUpdate:modelValue":o[10]||(o[10]=t=>e(a).form.items.status=t),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[q,e(a).form.loading]])]),_:1},8,["model-value","onClose"])}}});const oe=M(J,[["__scopeId","data-v-4b9195d8"]]);export{oe as default};
