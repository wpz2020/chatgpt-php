import v from"./popupForm-a38334a1.js";import{b as z,T as k,a as x}from"./index-b2d35f6a.js";import{r as F}from"./controllerUrls-941681c3.js";import{l as q,ac as B,Y as I,U as E,_ as P}from"./index-36779712.js";import{p as T}from"./index-0d1dfc75.js";import{h,L as A,A as L,p as i,l as K,o as u,k as t,C as m,S as _,q as r,D as c,N as R,M as C,t as l,ap as M,R as N}from"./vue-8b21a996.js";const S={class:"default-main"},D={class:"ba-table-box"},G={class:"mlr-12"},O={class:"table-header-operate-text"},U=h({name:"routine/attachment"}),V=h({...U,setup(H){const{t:e}=q(),b=A(),f=B(["edit","delete"]);f[1].popconfirm.title=e("routine.attachment.Files and records will be deleted at the same time Are you sure?");const o=new z(new I(F),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("utils.Breakdown"),prop:"topic",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("routine.attachment.Upload administrator"),prop:"admin.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("routine.attachment.Upload user"),prop:"user.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("utils.size"),prop:"size",align:"center",formatter:(n,p,d)=>{const s=parseFloat(d),a=Math.floor(Math.log(s)/Math.log(1024));return(s/Math.pow(1024,a)).toFixed(a<1?0:2)+" "+["B","KB","MB","GB","TB"][a]},operator:"RANGE",sortable:"custom",operatorPlaceholder:"bytes"},{label:e("utils.type"),prop:"mimetype",align:"center",operator:"LIKE","show-overflow-tooltip":!0,operatorPlaceholder:e("Fuzzy query")},{label:e("utils.preview"),prop:"suffix",align:"center",renderFormatter:T,render:"image",operator:!1},{label:e("utils.Upload (Reference) times"),prop:"quote",align:"center",width:150,operator:"RANGE",sortable:"custom"},{label:e("utils.Original name"),prop:"name",align:"center","show-overflow-tooltip":!0,operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("routine.attachment.Storage mode"),prop:"storage",align:"center",width:100,operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("utils.Last upload time"),prop:"lastuploadtime",align:"center",render:"datetime",operator:"RANGE",width:160,sortable:"custom"},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:f,operator:!1}],defaultOrder:{prop:"lastuploadtime",order:"desc"}});return M("baTable",o),L(()=>{var n;o.table.ref=b.value,o.mount(),(n=o.getIndex())==null||n.then(()=>{o.initSort()})}),(n,p)=>{const d=l("el-alert"),s=l("Icon"),a=l("el-button"),y=l("el-tooltip"),g=l("el-popconfirm"),w=N("blur");return i(),K("div",S,[u("div",D,[t(o).table.remark?(i(),m(d,{key:0,class:"ba-table-alert",title:t(o).table.remark,type:"info","show-icon":""},null,8,["title"])):_("",!0),r(k,{buttons:["refresh","edit","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":t(e)("quick Search Placeholder",{fields:t(e)("utils.Original name")})},{default:c(()=>[t(E)("del")?(i(),m(g,{key:0,onConfirm:p[0]||(p[0]=$=>t(o).onTableHeaderAction("delete",{})),"confirm-button-text":t(e)("delete"),"cancel-button-text":t(e)("Cancel"),confirmButtonType:"danger",title:t(e)("routine.attachment.Files and records will be deleted at the same time Are you sure?"),disabled:!(t(o).table.selection.length>0)},{reference:c(()=>[u("div",G,[r(y,{content:t(e)("Delete selected row"),placement:"top"},{default:c(()=>[R((i(),m(a,{disabled:!(t(o).table.selection.length>0),class:"table-header-operate",type:"danger"},{default:c(()=>[r(s,{color:"#ffffff",name:"fa fa-trash"}),u("span",O,C(t(e)("delete")),1)]),_:1},8,["disabled"])),[[w]])]),_:1},8,["content"])])]),_:1},8,["confirm-button-text","cancel-button-text","title","disabled"])):_("",!0)]),_:1},8,["quick-search-placeholder"]),r(x,{ref_key:"tableRef",ref:b},null,512),r(v)])])}}});const Z=P(V,[["__scopeId","data-v-c1228a22"]]);export{Z as default};
