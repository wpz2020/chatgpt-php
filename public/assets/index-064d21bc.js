import{b as u,T as b,a as f}from"./index-47490f62.js";import{d as m,$ as h,H as _,bi as g,aA as k,af as x,b1 as B,o as E,f as p,c as T,j as l,Y as w,x as S,a as n,e as v,S as C}from"./index-9250cf41.js";import{_ as y}from"./popupForm.vue_vue_type_script_setup_true_lang-9becfc0d.js";import"./controllerUrls-941681c3.js";import"./index-bb9265a5.js";import"./index-5cf5ba2e.js";import"./validate-d30190a1.js";const I={class:"default-main ba-table-box"},N=m({name:"sms/template"}),G=m({...N,setup(q){const{t:e}=h(),i=_(),c=g(["edit","delete"]);c.push({render:"tipButton",name:"test_send",title:"sms.template.test_send",text:"",type:"success",icon:"el-icon-MagicStick",class:"table-row-test",disabledTip:!1,click:(a,d)=>{k.prompt(e("sms.template.Please enter the receiver mobile"),e("sms.template.test_send"),{confirmButtonText:e("routine.config.send out"),cancelButtonText:e("Cancel"),inputPattern:/^1\d{10}$/,inputErrorMessage:e("sms.template.Please enter the correct mobile number"),beforeClose:(r,o,s)=>{r==="confirm"?(o.confirmButtonLoading=!0,o.confirmButtonText=e("routine.config.Sending"),x(o.inputValue,a.code).then(()=>{s()}).catch(()=>{s()})):s()}})}});const t=new u(new B("/admin/sms.template/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("sms.template.id"),prop:"id",align:"center",width:70,sortable:"custom",operator:"RANGE"},{label:e("sms.template.title"),prop:"title",align:"center",operator:"LIKE"},{label:e("sms.template.code"),prop:"code",align:"center",operator:"LIKE"},{label:e("sms.template.template"),prop:"template",align:"center"},{label:e("sms.template.content"),prop:"content",align:"center","show-overflow-tooltip":!0,operator:"LIKE"},{label:e("sms.template.variables"),prop:"variable_text",render:"tags",operator:!1,align:"center"},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("Enable")}},{label:e("sms.template.updatetime"),prop:"updatetime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("sms.template.createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:140,render:"buttons",buttons:c,operator:!1}],dblClickNotEditColumn:[void 0],defaultOrder:{prop:"id",order:"desc"}},{defaultItems:{status:"1"}});return C("baTable",t),E(()=>{var a;t.table.ref=i.value,t.mount(),(a=t.getIndex())==null||a.then(()=>{t.initSort(),t.dragSort()})}),(a,d)=>{const r=v("el-alert");return p(),T("div",I,[l(t).table.remark?(p(),w(r,{key:0,class:"ba-table-alert",title:l(t).table.remark,type:"info","show-icon":""},null,8,["title"])):S("",!0),n(b,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":l(e)("quick Search Placeholder",{fields:l(e)("sms.template.quick Search Fields")})},null,8,["quick-search-placeholder"]),n(f,{ref_key:"tableRef",ref:i},null,512),n(y)])}}});export{G as default};