import{b as i,T as d,a as u}from"./index-47490f62.js";import{d as n,$ as b,H as m,bi as f,b1 as y,o as _,f as s,c as h,j as t,Y as g,x as k,a as o,e as E,S as q}from"./index-9250cf41.js";import{_ as N}from"./popupForm.vue_vue_type_script_setup_true_lang-4144d811.js";import"./controllerUrls-941681c3.js";import"./index-bb9265a5.js";import"./index-5cf5ba2e.js";import"./validate-d30190a1.js";const S={class:"default-main ba-table-box"},T=n({name:"pay"}),w=n({...T,setup(z){const{t:e}=b(),l=m(),p=f(["edit","delete"]),a=new i(new y("/admin/Pay/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("pay.orderid"),prop:"orderid",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("pay.product_name"),prop:"product_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("pay.username"),prop:"username",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("pay.money"),prop:"money",align:"center",operator:"RANGE",sortable:!1},{label:e("pay.day"),prop:"day",align:"center",operator:"RANGE",sortable:!1},{label:e("pay.num"),prop:"num",align:"center",operator:"RANGE",sortable:!1},{label:e("pay.status"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},operator:"=",sortable:!1,replaceValue:{0:e("pay.status 0"),1:e("pay.status 1")}},{label:e("pay.order_time"),prop:"order_time",render:"datetime",align:"center",operator:"RANGE",sortable:!1},{label:e("operate"),align:"center",width:100,render:"buttons",buttons:p,operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{product_id:0,uid:0,money:0,day:0,num:0,order_time:0}});return q("baTable",a),_(()=>{var r;a.table.ref=l.value,a.mount(),(r=a.getIndex())==null||r.then(()=>{a.initSort(),a.dragSort()})}),(r,I)=>{const c=E("el-alert");return s(),h("div",S,[t(a).table.remark?(s(),g(c,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):k("",!0),o(d,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("pay.quick Search Fields")})},null,8,["quick-search-placeholder"]),o(u,{ref_key:"tableRef",ref:l},null,512),o(N)])}}});export{w as default};