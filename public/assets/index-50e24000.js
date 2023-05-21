import{defineComponent as i,ref as d,markRaw as u,provide as b,onMounted as f,resolveComponent as h,openBlock as s,createElementBlock as _,unref as a,createBlock as g,createCommentVNode as y,createVNode as l}from"vue";import{b as k,T as w,a as R}from"./index-0a827c2c.js";import{aB as q,an as E}from"./index-89e26330.js";import{useI18n as T}from"vue-i18n";import{_ as I}from"./popupForm.vue_vue_type_script_setup_true_lang-e103de59.js";import N from"./idFieldRender-55de5180.js";import"element-plus";import"vue-router";import"./controllerUrls-941681c3.js";import"./index-d3b20950.js";import"pinia";import"vue-demi";import"./index-39d73c69.js";import"./validate-e09b6b50.js";import"./chat-3c5e52ec.js";const x={class:"default-main ba-table-box"},z=i({name:"chat"}),Q=i({...z,setup(B){const{t:e}=T(),n=d(),c=q(["edit","delete"]),t=new k(new E("/admin/Chat/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("chat.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("chat.uid"),prop:"uid",align:"center",operator:"RANGE",sortable:!1,width:100},{label:e("chat.username"),prop:"username",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("chat.messages"),prop:"messages",render:"customTemplate",customTemplate:(r,m,o,C,F)=>p(o)},{type:"expand",label:"聊天内容详情",prop:"messages",align:"center",operator:!1,width:140,render:"customRender",customRender:u(N)},{label:e("chat.num"),prop:"num",align:"center",operator:"RANGE",sortable:!1},{label:e("chat.model"),prop:"model",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:"ip地址",prop:"ip",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("chat.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("operate"),align:"center",width:100,render:"buttons",buttons:c,operator:!1}],dblClickNotEditColumn:["messages"]},{defaultItems:{uid:0,num:0}});b("baTable",t);function p(r){return r.length>20?r.slice(0,20)+"...":r.slice(0,20)}return f(()=>{var r;t.table.ref=n.value,t.mount(),(r=t.getIndex())==null||r.then(()=>{t.initSort(),t.dragSort()})}),(r,m)=>{const o=h("el-alert");return s(),_("div",x,[a(t).table.remark?(s(),g(o,{key:0,class:"ba-table-alert",title:a(t).table.remark,type:"info","show-icon":""},null,8,["title"])):y("",!0),l(w,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("chat.quick Search Fields")})},null,8,["quick-search-placeholder"]),l(R,{ref_key:"tableRef",ref:n},null,512),l(I)])}}});export{Q as default};
