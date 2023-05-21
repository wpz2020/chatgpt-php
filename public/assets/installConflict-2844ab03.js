import{s as l}from"./store-c9ae792e.js";import{e as y}from"./index-b3a13072.js";import{h as $,p as s,l as r,o as f,k as i,P as C,M as u,q as n,D as a,S as _,N as V,C as k,U as D,t as c,R as N}from"./vue-8b21a996.js";import{_ as B}from"./index-93f0d686.js";const F={class:"install-conflict"},U={class:"install-title"},E={class:"install-title"},I={key:0},S=$({__name:"installConflict",setup(T){const w=()=>{l.loading.common=!0;let e={},d={};for(const o in l.common.fileConflict)e[l.common.fileConflict[o].oldFile]=l.common.fileConflict[o].solution;for(const o in l.common.dependConflict)typeof d[l.common.dependConflict[o].env]>"u"&&(d[l.common.dependConflict[o].env]={}),d[l.common.dependConflict[o].env][l.common.dependConflict[o].depend]=l.common.dependConflict[o].solution;y(l.common.uid,0,{dependConflict:d,fileConflict:e})};return(e,d)=>{const o=c("el-table-column"),m=c("el-option"),b=c("el-select"),v=c("el-table"),g=c("el-button"),h=N("blur");return s(),r("div",null,[f("div",F,[i(l).common.fileConflict.length>0?(s(),r(C,{key:0},[f("div",U,u(e.$t("module.File conflict")),1),n(v,{data:i(l).common.fileConflict,stripe:"",border:"",style:{width:"100%"}},{default:a(()=>[n(o,{prop:"newFile",label:e.$t("module.new file")},null,8,["label"]),n(o,{prop:"oldFile",label:e.$t("module.Existing files")},null,8,["label"]),n(o,{prop:"solution",width:"200",label:e.$t("module.Treatment scheme"),align:"center"},{default:a(t=>[n(b,{modelValue:t.row.solution,"onUpdate:modelValue":p=>t.row.solution=p},{default:a(()=>[n(m,{label:e.$t("module.Backup and overwrite existing files"),value:"cover"},null,8,["label"]),n(m,{label:e.$t("module.Discard new file"),value:"discard"},null,8,["label"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"])],64)):_("",!0),i(l).common.dependConflict.length>0?(s(),r(C,{key:1},[f("div",E,u(e.$t("module.Dependency conflict")),1),n(v,{data:i(l).common.dependConflict,stripe:"",border:"",style:{width:"100%"}},{default:a(()=>[n(o,{prop:"env",label:e.$t("module.environment")},{default:a(t=>[t.row.env?(s(),r("span",I,u(e.$t("module.env "+t.row.env)),1)):_("",!0)]),_:1},8,["label"]),n(o,{prop:"newDepend",label:e.$t("module.New dependency")},null,8,["label"]),n(o,{prop:"oldDepend",label:e.$t("module.Existing dependencies")},null,8,["label"]),n(o,{prop:"solution",width:"200",label:e.$t("module.Treatment scheme"),align:"center"},{default:a(t=>[n(b,{modelValue:t.row.solution,"onUpdate:modelValue":p=>t.row.solution=p},{default:a(()=>[n(m,{label:e.$t("module.Overwrite existing dependencies"),value:"cover"},null,8,["label"]),n(m,{label:e.$t("module.Do not use new dependencies"),value:"discard"},null,8,["label"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"])],64)):_("",!0)]),V((s(),k(g,{class:"install-done-button",loading:i(l).loading.common,disabled:i(l).loading.common,size:"large",type:"primary",onClick:w},{default:a(()=>[D(u(e.$t("Confirm")),1)]),_:1},8,["loading","disabled"])),[[h]])])}}});const O=B(S,[["__scopeId","data-v-91d7b712"]]);export{O as default};
