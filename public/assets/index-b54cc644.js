import{b,T as m,a as f}from"./index-7753bebf.js";import{l as k,ac as y,Y as p}from"./index-714877db.js";import{_ as h}from"./popupForm.vue_vue_type_script_setup_true_lang-267aa468.js";import{h as d,L as _,A as g,p as c,l as w,k as l,C as A,S as E,q as n,t as N,ap as R}from"./vue-8b21a996.js";import"./controllerUrls-941681c3.js";import"./index-4328e043.js";import"./index-90c66895.js";import"./validate-11156ce9.js";const B={class:"default-main ba-table-box"},T=d({name:"apikey"}),F=d({...T,setup(q){const{t:e}=k(),s=_();let r=y(["edit","delete"]);r=[{render:"tipButton",name:"info",title:"更新余额",text:"更新余额",type:"primary",icon:"fa fa-refresh",class:"table-row-info",disabledTip:!1,click:(t,o)=>{new p("/admin/Apikey/").postData("chaxun",{id:t.id,key:t.apikey}).then(u=>{u.code==1&&location.reload()})},display:(t,o)=>!0,disabled:(t,o)=>!1,attr:{}}].concat(r);const a=new b(new p("/admin/Apikey/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("apikey.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("apikey.apikey"),prop:"apikey",width:500,align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("apikey.total"),prop:"total",align:"center",operator:"RANGE",sortable:!1},{label:e("apikey.usage"),prop:"usage",align:"center",operator:"RANGE",sortable:!1},{label:e("apikey.balance"),prop:"balance",align:"center",operator:"RANGE",sortable:!1},{label:e("apikey.num"),prop:"num",align:"center",operator:"RANGE",sortable:!1},{label:e("apikey.cost_num"),prop:"cost_num",align:"center",operator:"RANGE",sortable:!1},{label:e("apikey.status"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},operator:"RANGE",sortable:!1,replaceValue:{0:"关闭",1:"开启"}},{label:e("apikey.end"),prop:"end",align:"center",operator:"=",sortable:"custom",width:160},{label:e("operate"),align:"center",width:220,render:"buttons",buttons:r,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{total:0,usage:0,balance:0,num:0,start:null,end:null,add_time:null}});return R("baTable",a),g(()=>{var t;a.table.ref=s.value,a.mount(),(t=a.getIndex())==null||t.then(()=>{a.initSort(),a.dragSort()})}),(t,o)=>{const i=N("el-alert");return c(),w("div",B,[l(a).table.remark?(c(),A(i,{key:0,class:"ba-table-alert",title:l(a).table.remark,type:"info","show-icon":""},null,8,["title"])):E("",!0),n(m,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":l(e)("quick Search Placeholder",{fields:l(e)("apikey.quick Search Fields")})},null,8,["quick-search-placeholder"]),n(f,{ref_key:"tableRef",ref:s},null,512),n(h)])}}});export{F as default};
