import{defineComponent as d,ref as u,provide as f,onMounted as b,resolveComponent as h,openBlock as c,createElementBlock as g,unref as l,createBlock as _,createCommentVNode as k,createVNode as n}from"vue";import{b as y,e as v,T as I,a as T}from"./index-0a827c2c.js";import{u as w}from"./controllerUrls-941681c3.js";import C from"./popupForm-ae9ee213.js";import{an as q,aB as N}from"./index-89e26330.js";import{useI18n as R}from"vue-i18n";import"element-plus";import"vue-router";import"./index-d3b20950.js";import"./index-39d73c69.js";import"./validate-e09b6b50.js";import"pinia";import"vue-demi";const A={class:"default-main ba-table-box"},B=d({name:"user/group"}),j=d({...B,setup(E){const{t}=R(),s=u(),i=u(),e=new y(new q(w),{column:[{type:"selection",align:"center",operator:!1},{label:t("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:t("Fuzzy query"),width:70},{label:t("user.group.Group name"),prop:"name",align:"center",operator:"LIKE",operatorPlaceholder:t("Fuzzy query")},{label:t("state"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:t("Disable"),1:t("Enable")}},{label:t("updatetime"),prop:"updatetime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:t("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:t("operate"),align:"center",width:"130",render:"buttons",buttons:N(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{status:"1"}},{onSubmit:({formEl:o,items:r})=>{var r=v(r);r.rules=i.value.getCheckeds();for(const a in r)r[a]===null&&delete r[a];let m=()=>{e.form.submitLoading=!0,e.api.postData(e.form.operate,r).then(a=>{var p;e.onTableHeaderAction("refresh",{}),e.form.submitLoading=!1,(p=e.form.operateIds)==null||p.shift(),e.form.operateIds.length>0?e.toggleForm("edit",e.form.operateIds):e.toggleForm(),e.runAfter("onSubmit",{res:a})}).catch(()=>{e.form.submitLoading=!1})};return o?(e.form.ref=o,o.validate(a=>{a&&m()})):m(),!1}});return f("baTable",e),b(()=>{e.table.ref=s.value,e.mount(),e.getIndex()}),(o,F)=>{const r=h("el-alert");return c(),g("div",A,[l(e).table.remark?(c(),_(r,{key:0,class:"ba-table-alert",title:l(e).table.remark,type:"info","show-icon":""},null,8,["title"])):k("",!0),n(I,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":l(t)("quick Search Placeholder",{fields:l(t)("user.group.GroupName")})},null,8,["quick-search-placeholder"]),n(T,{ref_key:"tableRef",ref:s},null,512),n(C,{ref_key:"formRef",ref:i},null,512)])}}});export{j as default};
