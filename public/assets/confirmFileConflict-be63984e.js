import{s as t}from"./store-82ec2858.js";import{d as V}from"./index-dff9f9b3.js";import{h as F,p as i,l as m,o as u,k as n,P as g,M as d,q as l,D as a,S as p,N as C,C as h,U as $,t as s,R as B}from"./vue-8b21a996.js";import{_ as N}from"./index-dda703f5.js";const T={class:"confirm-file-conflict"},U={class:"conflict-title"},z={class:"conflict-title"},I={key:0},S={class:"center-buttons"},q=F({__name:"confirmFileConflict",setup(E){const w=()=>{t.dialog.common=!1,t.goodsInfo.enable=!0};return(e,r)=>{const y=s("el-alert"),c=s("el-table-column"),_=s("el-table"),f=s("el-option"),k=s("el-select"),b=s("el-button"),v=B("blur");return i(),m("div",null,[u("div",T,[n(t).common.disableConflictFile.length?(i(),m(g,{key:0},[u("div",U,d(e.$t("module.File conflict")),1),l(y,{closable:!1,center:!0,title:e.$t("module.Update warning"),class:"alert-warning",type:"warning"},null,8,["title"]),l(_,{data:n(t).common.disableConflictFile,stripe:"",border:"",style:{width:"100%",marginBottom:"20px"}},{default:a(()=>[l(c,{prop:"file",label:e.$t("module.Conflict file")},null,8,["label"])]),_:1},8,["data"])],64)):p("",!0),n(t).common.disableDependConflict.length>0?(i(),m(g,{key:1},[u("div",z,d(e.$t("module.The module declares the added dependencies")),1),l(_,{data:n(t).common.disableDependConflict,stripe:"",border:"",style:{width:"100%"}},{default:a(()=>[l(c,{prop:"env",label:e.$t("module.environment")},{default:a(o=>[o.row.env?(i(),m("span",I,d(e.$t("module.env "+o.row.env)),1)):p("",!0)]),_:1},8,["label"]),l(c,{prop:"dependTitle",label:e.$t("module.Dependencies")},null,8,["label"]),l(c,{prop:"solution",width:"200",label:e.$t("module.Treatment scheme"),align:"center"},{default:a(o=>[l(k,{modelValue:o.row.solution,"onUpdate:modelValue":D=>o.row.solution=D},{default:a(()=>[l(f,{label:e.$t("delete"),value:"delete"},null,8,["label"]),l(f,{label:e.$t("module.retain"),value:"retain"},null,8,["label"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"])],64)):p("",!0)]),u("div",S,[C((i(),h(b,{class:"center-button",loading:n(t).loading.common,disabled:n(t).loading.common,size:"large",type:"primary",onClick:r[0]||(r[0]=o=>n(V)(!0))},{default:a(()=>[$(d(e.$t("module.Confirm to disable the module")),1)]),_:1},8,["loading","disabled"])),[[v]]),C((i(),h(b,{class:"center-button",size:"large",onClick:r[1]||(r[1]=o=>w())},{default:a(()=>[$(d(e.$t("Cancel")),1)]),_:1})),[[v]])])])}}});const A=N(q,[["__scopeId","data-v-f0984403"]]);export{A as default};
