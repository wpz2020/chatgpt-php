import{b as k,T as D,a as z}from"./index-7398acdb.js";import{g as x}from"./controllerUrls-941681c3.js";import{r as I,i as B,I as w}from"./info-c106d341.js";import{l as q,ac as C,Y as T,_ as K}from"./index-fb3df3be.js";import{h as b,A as E,p as s,l as A,k as o,C as d,S as P,q as r,D as n,o as f,N as R,M as F,t as l,ap as S,R as N}from"./vue-8b21a996.js";import"./index-e2268c88.js";const M={class:"default-main ba-table-box"},V={class:"mlr-12"},H={class:"table-header-operate-text"},O=b({name:"security/sensitiveDataLog"}),G=b({...O,setup(Y){const{t:e}=q();let i=[{render:"tipButton",name:"info",title:"info",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-info",disabledTip:!1,click:a=>{p(a[t.table.pk])}},{render:"confirmButton",name:"rollback",title:"security.sensitiveDataLog.RollBACK",text:"",type:"success",icon:"fa fa-sign-in",class:"table-row-edit",popconfirm:{confirmButtonText:e("security.sensitiveDataLog.RollBACK"),cancelButtonText:e("Cancel"),confirmButtonType:"success",title:e("security.sensitiveDataLog.Are you sure you want to rollback the record?")},disabledTip:!1,click:a=>{c([a[t.table.pk]])}}];i=i.concat(C(["delete"]));const t=new k(new T(x),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("security.sensitiveDataLog.Operation administrator"),prop:"admin.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Rule name"),prop:"sensitive.name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.controller"),prop:"sensitive.controller_as",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Modify line"),prop:"id_value",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Modification"),prop:"data_comment",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Before modification"),prop:"before",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:e("security.sensitiveDataLog.After modification"),prop:"after",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:"IP",prop:"ip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Modification time"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:120,render:"buttons",buttons:i,operator:!1}],dblClickNotEditColumn:[void 0]},{},{onTableDblclick:({row:a})=>(p(a[t.table.pk]),!1)}),c=a=>{I(a).then(()=>{t.onTableHeaderAction("refresh",{})})},m=()=>{c(t.getSelectionIds())},p=a=>{t.form.extend.info={},t.form.operate="info",t.form.loading=!0,B(a).then(u=>{t.form.extend.info=u.data.row,t.form.loading=!1})};return S("baTable",t),E(()=>{t.mount(),t.getIndex()}),(a,u)=>{const y=l("el-alert"),_=l("Icon"),g=l("el-button"),h=l("el-tooltip"),v=l("el-popconfirm"),L=N("blur");return s(),A("div",M,[o(t).table.remark?(s(),d(y,{key:0,class:"ba-table-alert",title:o(t).table.remark,type:"info","show-icon":""},null,8,["title"])):P("",!0),r(D,{buttons:["refresh","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("quick Search Placeholder",{fields:o(e)("security.sensitiveDataLog.Rule name")})},{default:n(()=>[r(v,{onConfirm:m,"confirm-button-text":o(e)("security.sensitiveDataLog.RollBACK"),"cancel-button-text":o(e)("Cancel"),confirmButtonType:"success",title:o(e)("security.sensitiveDataLog.Are you sure you want to rollback the record?"),disabled:!(o(t).table.selection.length>0)},{reference:n(()=>[f("div",V,[r(h,{content:o(e)("security.sensitiveDataLog.Rollback the selected record to the original data table"),placement:"top"},{default:n(()=>[R((s(),d(g,{disabled:!(o(t).table.selection.length>0),class:"table-header-operate",type:"success"},{default:n(()=>[r(_,{size:"16",color:"#ffffff",name:"fa fa-sign-in"}),f("span",H,F(o(e)("security.sensitiveDataLog.RollBACK")),1)]),_:1},8,["disabled"])),[[L]])]),_:1},8,["content"])])]),_:1},8,["confirm-button-text","cancel-button-text","title","disabled"])]),_:1},8,["quick-search-placeholder"]),r(z),r(w)])}}});const X=K(G,[["__scopeId","data-v-22d3d28a"]]);export{X as default};