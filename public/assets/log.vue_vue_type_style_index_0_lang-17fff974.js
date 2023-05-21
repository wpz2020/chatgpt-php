import{b as f,T as b,a as g}from"./index-b2d35f6a.js";import{l as h,U as y,Y as _}from"./index-36779712.js";import{s as T,e as k,j as x}from"./crud-e5994b51.js";import{h as w,r as B,L as C,A as v,B as D,p as V,l as q,q as r,D as R,k as o,t as A,ap as I,n as E}from"./vue-8b21a996.js";const M=w({__name:"log",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:s}){const u=l,c=B({ready:!1}),{t:e}=h(),n=C(),i=[{render:"confirmButton",name:"copy",title:"crud.crud.copy",text:"",type:"primary",icon:"fa fa-copy",class:"table-row-copy",popconfirm:{confirmButtonText:e("Confirm"),cancelButtonText:e("Cancel"),confirmButtonType:"primary",title:e("crud.crud.Start CRUD design with this record?"),width:"220px"},disabledTip:!1,click:t=>{T.startData.logId=t[a.table.pk],k("log"),s("update:modelValue",!1)}},{render:"confirmButton",name:"del",title:"delete",text:"",type:"danger",icon:"fa fa-trash",class:"table-row-delete",popconfirm:{confirmButtonText:e("crud.crud.Delete Code"),cancelButtonText:e("Cancel"),confirmButtonType:"danger",title:e("crud.crud.Are you sure to delete the generated CRUD code?"),width:"248px"},disabledTip:!1,click:t=>{x(t[a.table.pk]).then(()=>{a.onTableHeaderAction("refresh",{})})},display:t=>t.status!="delete"&&y("delete")}],a=new f(new _("/admin/crud.Log/"),{pk:"id",column:[{type:"selection",align:"center",operator:!1},{label:e("crud.log.id"),prop:"id",align:"center",width:70,operator:"RANGE",sortable:"custom"},{label:e("crud.log.table_name"),prop:"table_name",align:"center",operatorPlaceholder:e("Fuzzy query"),operator:"LIKE",sortable:!1},{label:e("crud.log.status"),prop:"status",align:"center",render:"tag",operator:"=",sortable:!1,replaceValue:{delete:e("crud.log.status delete"),success:e("crud.log.status success"),error:e("crud.log.status error"),start:e("crud.log.status start")},custom:{delete:"danger",success:"success",error:"warning",start:""}},{label:e("crud.log.create_time"),prop:"create_time",align:"center",render:"datetime",operator:"RANGE",sortable:"custom",width:160,timeFormat:"yyyy-mm-dd hh:MM:ss"},{label:e("operate"),align:"center",width:100,render:"buttons",buttons:i,operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"start"}});I("baTable",a);const p=()=>{var t;(t=a.getIndex())==null||t.then(()=>{c.ready=!0})};return v(()=>{a.table.ref=n.value,a.mount()}),D(()=>u.modelValue,t=>{t&&!c.ready&&E(()=>{p()})}),(t,d)=>{const m=A("el-dialog");return V(),q("div",null,[r(m,{onClose:d[0]||(d[0]=S=>s("update:modelValue",!1)),width:"60%","model-value":l.modelValue,class:"ba-crud-log-dialog",title:o(e)("crud.crud.CRUD record"),"append-to-body":!0,"destroy-on-close":!0},{default:R(()=>[r(b,{buttons:["refresh","quickSearch","columnDisplay"],"quick-search-placeholder":o(e)("quick Search Placeholder",{fields:o(e)("crud.log.quick Search Fields")})},null,8,["quick-search-placeholder"]),r(g,{ref_key:"tableRef",ref:n},null,512)]),_:1},8,["model-value","title"])])}}});export{M as _};
