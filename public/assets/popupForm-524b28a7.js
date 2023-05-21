import{h as B,L as W,r as x,p as s,C as u,D as d,N as _,l as C,U as D,M as F,k as e,o as h,q as p,m as S,$,O as K,P as E,S as j,T as M,al as O,t as g,R as v,V as A,W as G}from"./vue-8b21a996.js";import{l as H,_ as J}from"./index-93f0d686.js";import{F as n}from"./index-7e8a2f1f.js";import{b}from"./validate-d21fd8fa.js";import"./index-1c48db7b.js";import"./controllerUrls-941681c3.js";import"./index-d1eaf09c.js";const w=y=>(A("data-v-17dbd8e0"),y=y(),G(),y),Q={class:"title"},X=w(()=>h("hr",{class:"form-hr"},null,-1)),Y=w(()=>h("hr",{class:"form-hr"},null,-1)),Z=B({__name:"popupForm",setup(y,{expose:U}){const V=W(),t=O("baTable"),{t:a}=H(),r=x({dataFields:[]}),I=x({name:[b({name:"required",title:a("security.sensitiveData.Rule name")})],controller:[b({name:"required",trigger:"change",message:a("Please select field",{field:a("security.sensitiveData.controller")})})],data_table:[b({name:"required",trigger:"change",message:a("Please select field",{field:a("security.sensitiveData.data sheet")})})],primary_key:[b({name:"required",trigger:"change",title:a("security.sensitiveData.Data table primary key")})],data_fields:[b({name:"required",message:a("Please select field",{field:a("security.sensitiveData.Sensitive fields")})})]}),q=i=>{let l=[];for(const m in i){let f=!1;for(const c in r.dataFields)r.dataFields[c].name==i[m]&&(f=r.dataFields[c]);l[m]=f||{name:i[m],value:t.form.extend.fieldList[i[m]]??""}}r.dataFields=l};return U({getDataFields:()=>r.dataFields,setDataFields:i=>{r.dataFields=i}}),(i,l)=>{const m=g("el-form"),f=g("el-scrollbar"),c=g("el-button"),L=g("el-dialog"),T=v("drag"),N=v("zoom"),k=v("loading"),P=v("blur");return s(),u(L,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":!!e(t).form.operate,onClose:e(t).toggleForm},{header:d(()=>[_((s(),C("div",Q,[D(F(e(t).form.operate?e(a)(e(t).form.operate):""),1)])),[[T,[".ba-operate-dialog",".el-dialog__header"]],[N,".ba-operate-dialog"]])]),footer:d(()=>[h("div",{style:S("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[p(c,{onClick:l[7]||(l[7]=o=>e(t).toggleForm(""))},{default:d(()=>[D(F(e(a)("Cancel")),1)]),_:1}),_((s(),u(c,{loading:e(t).form.submitLoading,onClick:l[8]||(l[8]=o=>e(t).onSubmit(V.value)),type:"primary"},{default:d(()=>[D(F(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(a)("Save and edit next item"):e(a)("Save")),1)]),_:1},8,["loading"])),[[P]])],4)]),default:d(()=>[_((s(),u(f,{class:"ba-table-form-scrollbar"},{default:d(()=>[h("div",{class:M(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:S("width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[e(t).form.loading?j("",!0):(s(),u(m,{key:0,ref_key:"formRef",ref:V,onKeyup:l[6]||(l[6]=$(o=>e(t).onSubmit(V.value),["enter"])),model:e(t).form.items,"label-position":"right","label-width":e(t).form.labelWidth+"px",rules:I},{default:d(()=>[p(n,{label:e(a)("security.sensitiveData.Rule name"),type:"string",modelValue:e(t).form.items.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(t).form.items.name=o),prop:"name",placeholder:e(a)("security.sensitiveData.The rule name helps to identify the modified data later")},null,8,["label","modelValue","placeholder"]),p(n,{label:e(a)("security.sensitiveData.controller"),type:"select",modelValue:e(t).form.items.controller,"onUpdate:modelValue":l[1]||(l[1]=o=>e(t).form.items.controller=o),prop:"controller",data:{content:e(t).form.extend.controllerList},placeholder:e(a)("security.sensitiveData.The data listening mechanism will monitor the modification operations under this controller")},null,8,["label","modelValue","data","placeholder"]),p(n,{label:e(a)("security.sensitiveData.Corresponding data sheet"),type:"select",modelValue:e(t).form.items.data_table,"onUpdate:modelValue":l[2]||(l[2]=o=>e(t).form.items.data_table=o),prop:"data_table",data:{content:e(t).form.extend.tableList},"input-attr":{onChange:e(t).onTableChange}},null,8,["label","modelValue","data","input-attr"]),p(n,{label:e(a)("security.sensitiveData.Data table primary key"),type:"string",modelValue:e(t).form.items.primary_key,"onUpdate:modelValue":l[3]||(l[3]=o=>e(t).form.items.primary_key=o),prop:"primary_key"},null,8,["label","modelValue"]),X,_((s(),u(n,{label:e(a)("security.sensitiveData.Sensitive fields"),type:"selects",modelValue:e(t).form.items.data_fields,"onUpdate:modelValue":l[4]||(l[4]=o=>e(t).form.items.data_fields=o),key:e(t).form.extend.fieldSelectKey,prop:"data_fields",data:{content:e(t).form.extend.fieldSelect},"input-attr":{onChange:q}},null,8,["label","modelValue","data","input-attr"])),[[k,e(t).form.extend.fieldLoading]]),(s(!0),C(E,null,K(r.dataFields,(o,R)=>(s(),u(n,{key:R,label:o.name,type:"string",modelValue:o.value,"onUpdate:modelValue":z=>o.value=z,placeholder:e(a)("security.sensitiveData.Filling in field notes helps you quickly identify fields later")},null,8,["label","modelValue","onUpdate:modelValue","placeholder"]))),128)),Y,p(n,{label:e(a)("state"),type:"radio",modelValue:e(t).form.items.status,"onUpdate:modelValue":l[5]||(l[5]=o=>e(t).form.items.status=o),prop:"status",data:{content:{0:e(a)("Disable"),1:e(a)("Enable")}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[k,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const ne=J(Z,[["__scopeId","data-v-17dbd8e0"]]);export{ne as default};
