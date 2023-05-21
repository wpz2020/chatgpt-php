import{defineComponent as d,ref as i,reactive as b,provide as f,onMounted as y,resolveComponent as h,openBlock as s,createElementBlock as g,unref as a,createBlock as _,createCommentVNode as R,createVNode as c}from"vue";import{b as k,T as z,a as q}from"./index-0a827c2c.js";import{s as p}from"./controllerUrls-941681c3.js";import{c as E,an as I,aB as L}from"./index-89e26330.js";import w from"./popupForm-e93547bf.js";import{useI18n as F}from"vue-i18n";import"element-plus";import"vue-router";import"./index-d3b20950.js";import"pinia";import"vue-demi";import"./index-39d73c69.js";import"./validate-e09b6b50.js";function D(){return E({url:p+"add",method:"get"})}const P={class:"default-main ba-table-box"},T=d({name:"security/dataRecycle"}),j=d({...T,setup(v){const{t:e}=F(),n=i(),u=i(),t=new k(new I(p),{column:[{type:"selection",align:"center",operator:!1},{label:"ID",prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("security.dataRecycle.Rule name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.controller"),prop:"controller",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.Data table primary key"),prop:"primary_key",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:100},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("security.dataRecycle.Deleting monitoring")}},{label:e("updatetime"),prop:"updatetime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:"130",render:"buttons",buttons:L(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}},{toggleForm:({operate:o})=>{(o=="add"||o=="edit")&&(t.form.loading=!0,D().then(l=>{r.tableList=l.data.tables,r.controllerList=l.data.controllers,t.form.loading=!1}))}}),r=b({tableList:{},controllerList:{}});return f("baTable",t),y(()=>{t.table.ref=n.value,t.mount(),t.getIndex()}),(o,l)=>{const m=h("el-alert");return s(),g("div",P,[a(t).table.remark?(s(),_(m,{key:0,class:"ba-table-alert",title:a(t).table.remark,type:"info","show-icon":""},null,8,["title"])):R("",!0),c(z,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("security.dataRecycle.Rule name")})},null,8,["quick-search-placeholder"]),c(q,{ref_key:"tableRef",ref:n},null,512),c(w,{ref_key:"formRef",ref:u,"form-data":r},null,8,["form-data"])])}}});export{j as default};
