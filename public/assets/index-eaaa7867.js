import{b,T as f,a as y}from"./index-7753bebf.js";import{s as d}from"./controllerUrls-941681c3.js";import{c as h,l as g,Y as _,ac as k}from"./index-714877db.js";import R from"./popupForm-b8aa2984.js";import{h as u,L as s,r as q,A as z,p as i,l as L,k as t,C as E,S as I,q as c,t as w,ap as F}from"./vue-8b21a996.js";import"./index-4328e043.js";import"./index-90c66895.js";import"./validate-11156ce9.js";function D(){return h({url:d+"add",method:"get"})}const P={class:"default-main ba-table-box"},T=u({name:"security/dataRecycle"}),G=u({...T,setup(v){const{t:e}=g(),n=s(),p=s(),a=new b(new _(d),{column:[{type:"selection",align:"center",operator:!1},{label:"ID",prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("security.dataRecycle.Rule name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.controller"),prop:"controller",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.dataRecycle.Data table primary key"),prop:"primary_key",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:100},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("security.dataRecycle.Deleting monitoring")}},{label:e("updatetime"),prop:"updatetime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:"130",render:"buttons",buttons:k(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0,"status"]},{defaultItems:{status:"1"}},{toggleForm:({operate:l})=>{(l=="add"||l=="edit")&&(a.form.loading=!0,D().then(o=>{r.tableList=o.data.tables,r.controllerList=o.data.controllers,a.form.loading=!1}))}}),r=q({tableList:{},controllerList:{}});return F("baTable",a),z(()=>{a.table.ref=n.value,a.mount(),a.getIndex()}),(l,o)=>{const m=w("el-alert");return i(),L("div",P,[t(a).table.remark?(i(),E(m,{key:0,class:"ba-table-alert",title:t(a).table.remark,type:"info","show-icon":""},null,8,["title"])):I("",!0),c(f,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("security.dataRecycle.Rule name")})},null,8,["quick-search-placeholder"]),c(y,{ref_key:"tableRef",ref:n},null,512),c(R,{ref_key:"formRef",ref:p,"form-data":r},null,8,["form-data"])])}}});export{G as default};