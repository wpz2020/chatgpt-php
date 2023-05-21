import{defineComponent as m,provide as k,onMounted as D,resolveComponent as l,resolveDirective as z,openBlock as c,createElementBlock as x,unref as o,createBlock as d,createCommentVNode as I,createVNode as r,withCtx as n,createElementVNode as f,withDirectives as B,toDisplayString as w}from"vue";import{b as T,T as q,a as C}from"./index-0a827c2c.js";import{g as E}from"./controllerUrls-941681c3.js";import{r as K,i as P,I as A}from"./info-7a8bb118.js";import{aB as F,an as R,_ as S}from"./index-89e26330.js";import{useI18n as N}from"vue-i18n";import"element-plus";import"vue-router";import"./index-d3b20950.js";import"vue-demi";import"pinia";const M={class:"default-main ba-table-box"},V={class:"mlr-12"},H={class:"table-header-operate-text"},O=m({name:"security/sensitiveDataLog"}),G=m({...O,setup($){const{t:e}=N();let i=[{render:"tipButton",name:"info",title:"info",text:"",type:"primary",icon:"fa fa-search-plus",class:"table-row-info",disabledTip:!1,click:a=>{p(a[t.table.pk])}},{render:"confirmButton",name:"rollback",title:"security.sensitiveDataLog.RollBACK",text:"",type:"success",icon:"fa fa-sign-in",class:"table-row-edit",popconfirm:{confirmButtonText:e("security.sensitiveDataLog.RollBACK"),cancelButtonText:e("Cancel"),confirmButtonType:"success",title:e("security.sensitiveDataLog.Are you sure you want to rollback the record?")},disabledTip:!1,click:a=>{s([a[t.table.pk]])}}];i=i.concat(F(["delete"]));const t=new T(new R(E),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("security.sensitiveDataLog.Operation administrator"),prop:"admin.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Rule name"),prop:"sensitive.name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.controller"),prop:"sensitive.controller_as",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Modify line"),prop:"id_value",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Modification"),prop:"data_comment",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Before modification"),prop:"before",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:e("security.sensitiveDataLog.After modification"),prop:"after",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:"IP",prop:"ip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveDataLog.Modification time"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:120,render:"buttons",buttons:i,operator:!1}],dblClickNotEditColumn:[void 0]},{},{onTableDblclick:({row:a})=>(p(a[t.table.pk]),!1)}),s=a=>{K(a).then(()=>{t.onTableHeaderAction("refresh",{})})},b=()=>{s(t.getSelectionIds())},p=a=>{t.form.extend.info={},t.form.operate="info",t.form.loading=!0,P(a).then(u=>{t.form.extend.info=u.data.row,t.form.loading=!1})};return k("baTable",t),D(()=>{t.mount(),t.getIndex()}),(a,u)=>{const y=l("el-alert"),_=l("Icon"),g=l("el-button"),h=l("el-tooltip"),v=l("el-popconfirm"),L=z("blur");return c(),x("div",M,[o(t).table.remark?(c(),d(y,{key:0,class:"ba-table-alert",title:o(t).table.remark,type:"info","show-icon":""},null,8,["title"])):I("",!0),r(q,{buttons:["refresh","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("quick Search Placeholder",{fields:o(e)("security.sensitiveDataLog.Rule name")})},{default:n(()=>[r(v,{onConfirm:b,"confirm-button-text":o(e)("security.sensitiveDataLog.RollBACK"),"cancel-button-text":o(e)("Cancel"),confirmButtonType:"success",title:o(e)("security.sensitiveDataLog.Are you sure you want to rollback the record?"),disabled:!(o(t).table.selection.length>0)},{reference:n(()=>[f("div",V,[r(h,{content:o(e)("security.sensitiveDataLog.Rollback the selected record to the original data table"),placement:"top"},{default:n(()=>[B((c(),d(g,{disabled:!(o(t).table.selection.length>0),class:"table-header-operate",type:"success"},{default:n(()=>[r(_,{size:"16",color:"#ffffff",name:"fa fa-sign-in"}),f("span",H,w(o(e)("security.sensitiveDataLog.RollBACK")),1)]),_:1},8,["disabled"])),[[L]])]),_:1},8,["content"])])]),_:1},8,["confirm-button-text","cancel-button-text","title","disabled"])]),_:1},8,["quick-search-placeholder"]),r(C),r(A)])}}});const ae=S(G,[["__scopeId","data-v-22d3d28a"]]);export{ae as default};
