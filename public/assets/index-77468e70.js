import{defineComponent as p,ref as i,provide as d,onMounted as u,resolveComponent as m,openBlock as n,createElementBlock as b,unref as r,createBlock as f,createCommentVNode as y,createVNode as o}from"vue";import{b as _,T as h,a as g}from"./index-0a827c2c.js";import{aB as k,an as E}from"./index-89e26330.js";import{useI18n as q}from"vue-i18n";import{_ as N}from"./popupForm.vue_vue_type_script_setup_true_lang-cf892f72.js";import"element-plus";import"vue-router";import"./controllerUrls-941681c3.js";import"./index-d3b20950.js";import"pinia";import"vue-demi";import"./index-39d73c69.js";import"./validate-e09b6b50.js";const T={class:"default-main ba-table-box"},z=p({name:"pay"}),$=p({...z,setup(B){const{t:e}=q(),l=i(),s=k(["edit","delete"]),a=new _(new E("/admin/Pay/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("pay.orderid"),prop:"orderid",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("pay.product_name"),prop:"product_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("pay.username"),prop:"username",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("pay.money"),prop:"money",align:"center",operator:"RANGE",sortable:!1},{label:e("pay.day"),prop:"day",align:"center",operator:"RANGE",sortable:!1},{label:e("pay.num"),prop:"num",align:"center",operator:"RANGE",sortable:!1},{label:e("pay.status"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},operator:"=",sortable:!1,replaceValue:{0:e("pay.status 0"),1:e("pay.status 1")}},{label:e("pay.order_time"),prop:"order_time",render:"datetime",align:"center",operator:"RANGE",sortable:!1},{label:e("operate"),align:"center",width:100,render:"buttons",buttons:s,operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{product_id:0,uid:0,money:0,day:0,num:0,order_time:0}});return d("baTable",a),u(()=>{var t;a.table.ref=l.value,a.mount(),(t=a.getIndex())==null||t.then(()=>{a.initSort(),a.dragSort()})}),(t,I)=>{const c=m("el-alert");return n(),b("div",T,[r(a).table.remark?(n(),f(c,{key:0,class:"ba-table-alert",title:r(a).table.remark,type:"info","show-icon":""},null,8,["title"])):y("",!0),o(h,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":r(e)("quick Search Placeholder",{fields:r(e)("pay.quick Search Fields")})},null,8,["quick-search-placeholder"]),o(g,{ref_key:"tableRef",ref:l},null,512),o(N)])}}});export{$ as default};