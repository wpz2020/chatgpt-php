import{b as i,T as d,a as u}from"./index-7753bebf.js";import{l as b,ac as m,Y as f}from"./index-714877db.js";import{_}from"./popupForm.vue_vue_type_script_setup_true_lang-67ad58b3.js";import{h as c,L as h,A as k,p as n,l as g,k as t,C as q,S as x,q as o,t as y,ap as E}from"./vue-8b21a996.js";import"./controllerUrls-941681c3.js";import"./index-4328e043.js";import"./index-90c66895.js";import"./validate-11156ce9.js";const N={class:"default-main ba-table-box"},S=c({name:"product"}),z=c({...S,setup(T){const{t:e}=b(),l=h(),s=m(["edit","delete"]),a=new i(new f("/admin/Product/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("product.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("product.name"),prop:"name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("product.price"),prop:"price",align:"center",operator:"RANGE",sortable:!1},{label:e("product.expire"),prop:"expire",align:"center",operator:"RANGE",sortable:!1},{label:e("product.color"),prop:"color",align:"center",render:"color",operator:!1},{label:e("product.num"),prop:"num",align:"center",operator:"RANGE",sortable:!1},{label:e("operate"),align:"center",width:100,render:"buttons",buttons:s,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{price:0,expire:0,num:0}});return E("baTable",a),k(()=>{var r;a.table.ref=l.value,a.mount(),(r=a.getIndex())==null||r.then(()=>{a.initSort(),a.dragSort()})}),(r,A)=>{const p=y("el-alert");return n(),g("div",N,[t(a).table.remark?(n(),q(p,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):x("",!0),o(d,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("product.quick Search Fields")})},null,8,["quick-search-placeholder"]),o(u,{ref_key:"tableRef",ref:l},null,512),o(_)])}}});export{z as default};
