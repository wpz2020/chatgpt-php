import{b as c,T as m,a as d}from"./index-7398acdb.js";import{a as u}from"./controllerUrls-941681c3.js";import b from"./popupForm-e9bd02cc.js";import{l as h,k as f,ac as g,Y as _}from"./index-fb3df3be.js";import{h as i,p as n,l as k,k as t,C as y,S as q,q as r,t as z,ap as E}from"./vue-8b21a996.js";import"./index-e2268c88.js";import"./validate-322d0259.js";import"./index-5ee44d7a.js";const I={class:"default-main ba-table-box"},w=i({name:"auth/admin"}),N=i({...w,setup(P){const{t:e}=h(),s=f(),o=g(["edit","delete"]);o[1].display=l=>l.id!=s.id;const a=new c(new _(u),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("auth.admin.username"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.nickname"),prop:"nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.grouping"),prop:"group_name_arr",align:"center",operator:!1,render:"tags"},{label:e("auth.admin.head portrait"),prop:"avatar",align:"center",render:"image",operator:!1},{label:e("auth.admin.mailbox"),prop:"email",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.mobile"),prop:"mobile",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("auth.admin.Last login"),prop:"lastlogintime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("Enable")}},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:o,operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}});return E("baTable",a),a.mount(),a.getIndex(),(l,T)=>{const p=z("el-alert");return n(),k("div",I,[t(a).table.remark?(n(),y(p,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):q("",!0),r(m,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("auth.admin.username")+"/"+t(e)("auth.admin.nickname")})},null,8,["quick-search-placeholder"]),r(d),r(b)])}}});export{N as default};
