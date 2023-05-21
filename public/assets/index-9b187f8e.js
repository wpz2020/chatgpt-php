var b=Object.defineProperty;var g=(o,e,a)=>e in o?b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var l=(o,e,a)=>(g(o,typeof e!="symbol"?e+"":e,a),a);import{b as y,T as _,a as k}from"./index-7753bebf.js";import{c as x,n as f,ae as L,l as v,Y as D,ac as F}from"./index-714877db.js";import{f as u}from"./controllerUrls-941681c3.js";import q from"./popupForm-7ffeb067.js";import{h as p,L as c,A as R,p as m,l as w,k as n,C as E,S as z,q as d,t as S,ap as T}from"./vue-8b21a996.js";import"./index-4328e043.js";import"./index-90c66895.js";import"./validate-11156ce9.js";function C(){return x({url:u+"add",method:"get"})}class I extends y{constructor(a,t,r={},i={},s={}){super(a,t,r,i,s);l(this,"requestEdit",a=>(this.runBefore("requestEdit",{id:a}),this.form.loading=!0,this.form.items={},this.api.edit({id:a}).then(t=>{const r=[],i=[];for(const s in t.data.row.data_fields)r.push(s),i.push({name:s,value:t.data.row.data_fields[s]??""});this.form.extend=Object.assign(this.form.extend,{tableList:t.data.tables,controllerList:t.data.controllers}),t.data.row.data_table&&(this.onTableChange(t.data.row.data_table),this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields(i)),t.data.row.data_fields=r,this.form.loading=!1,this.form.items=t.data.row,this.runAfter("requestEdit",{res:t})})));l(this,"onTableChange",a=>{this.form.extend=Object.assign(this.form.extend,{fieldLoading:!0,fieldList:{},fieldSelect:{},fieldSelectKey:f()}),this.form.items.data_fields=[],this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields([]),L(a).then(t=>{this.form.items.primary_key=t.data.pk,this.form.defaultItems.primary_key=t.data.pk;const r={};for(const i in t.data.fieldList)r[i]=(i?i+" - ":"")+t.data.fieldList[i];this.form.extend=Object.assign(this.form.extend,{fieldLoading:!1,fieldList:t.data.fieldList,fieldSelect:r,fieldSelectKey:f()})})});l(this,"toggleForm",(a="",t=[])=>{if(this.runBefore("toggleForm",{operate:a,operateIds:t}),this.form.ref&&this.form.ref.resetFields(),this.form.extend.parentRef&&this.form.extend.parentRef.setDataFields([]),a=="edit"){if(!t.length)return!1;this.requestEdit(t[0])}else a=="add"&&(this.form.loading=!0,C().then(r=>{this.form.extend=Object.assign(this.form.extend,{tableList:r.data.tables,controllerList:r.data.controllers}),this.form.items=Object.assign({},this.form.defaultItems),this.form.loading=!1}));this.form.operate=a,this.form.operateIds=t,this.runAfter("toggleForm",{operate:a,operateIds:t})})}}const K={class:"default-main ba-table-box"},P=p({name:"security/dataRecycle"}),Y=p({...P,setup(o){const{t:e}=v(),a=c(),t=c(),r=new I(new D(u),{column:[{type:"selection",align:"center",operator:!1},{label:"ID",prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("security.sensitiveData.Rule name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveData.controller"),prop:"controller",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveData.data sheet"),prop:"data_table",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("security.sensitiveData.Data table primary key"),prop:"primary_key",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:100},{label:e("security.sensitiveData.Sensitive fields"),prop:"data_fields",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tags"},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:e("Disable"),1:e("security.sensitiveData.Modifying monitoring")}},{label:e("updatetime"),prop:"updatetime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("operate"),align:"center",width:"130",render:"buttons",buttons:F(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"1"}},{onSubmit:()=>{r.form.items.fields=t.value.getDataFields()}});return T("baTable",r),R(()=>{r.form.extend=Object.assign({},r.form.extend,{parentRef:t.value}),r.table.ref=a.value,r.mount(),r.getIndex()}),(i,s)=>{const h=S("el-alert");return m(),w("div",K,[n(r).table.remark?(m(),E(h,{key:0,class:"ba-table-alert",title:n(r).table.remark,type:"info","show-icon":""},null,8,["title"])):z("",!0),d(_,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":n(e)("quick Search Placeholder",{fields:n(e)("security.sensitiveData.controller")})},null,8,["quick-search-placeholder"]),d(k,{ref_key:"tableRef",ref:a},null,512),d(q,{ref_key:"formRef",ref:t},null,512)])}}});export{Y as default};
