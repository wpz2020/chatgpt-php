import{b as p,T as d,a as m}from"./index-b2d35f6a.js";import{l as u,ac as b,Y as h}from"./index-36779712.js";import{_ as f}from"./popupForm.vue_vue_type_script_setup_true_lang-bab923a9.js";import{h as n,L as _,A as k,p as s,l as y,k as t,C as g,S as q,q as o,t as E,ap as z}from"./vue-8b21a996.js";import"./controllerUrls-941681c3.js";import"./index-0d1dfc75.js";import"./index-ebfda3ce.js";import"./validate-fd871b41.js";const C={class:"default-main ba-table-box"},I=n({name:"chat"}),P=n({...I,setup(N){const{t:e}=u(),l=_(),c=b(["edit","delete"]),a=new p(new h("/admin/Chat/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("chat.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("chat.uid"),prop:"uid",align:"center",operator:"RANGE",sortable:!1},{label:e("chat.username"),prop:"username",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("chat.num"),prop:"num",align:"center",operator:"RANGE",sortable:!1},{label:e("chat.messages"),prop:"messages",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("chat.token"),prop:"token",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("chat.model"),prop:"model",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("chat.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("operate"),align:"center",width:100,render:"buttons",buttons:c,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{uid:0,num:0}});return z("baTable",a),k(()=>{var r;a.table.ref=l.value,a.mount(),(r=a.getIndex())==null||r.then(()=>{a.initSort(),a.dragSort()})}),(r,S)=>{const i=E("el-alert");return s(),y("div",C,[t(a).table.remark?(s(),g(i,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):q("",!0),o(d,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("chat.quick Search Fields")})},null,8,["quick-search-placeholder"]),o(m,{ref_key:"tableRef",ref:l},null,512),o(f)])}}});export{P as default};
