import{s as o}from"./store-c9ae792e.js";import f from"./installConflict-2844ab03.js";import g from"./commonDone-35c525cb.js";import C from"./uploadInstall-91a19b21.js";import k from"./confirmFileConflict-ee31964c.js";import{h as y,p as t,l as a,q as i,D as c,k as e,N as v,S as l,C as m,t as s,R as D}from"./vue-8b21a996.js";import{_ as x}from"./index-93f0d686.js";import"./index-b3a13072.js";import"./index-7e8a2f1f.js";import"./index-1c48db7b.js";import"./controllerUrls-941681c3.js";import"./index-d1eaf09c.js";const h=["element-loading-text"],I=y({__name:"commonDialog",setup(V){return(r,n)=>{const d=s("el-scrollbar"),p=s("el-dialog"),_=D("loading");return t(),a("div",null,[i(p,{"close-on-press-escape":e(o).common.quickClose,title:e(o).common.dialogTitle,"close-on-click-modal":e(o).common.quickClose,modelValue:e(o).dialog.common,"onUpdate:modelValue":n[0]||(n[0]=u=>e(o).dialog.common=u),class:"common-dialog"},{default:c(()=>[i(d,{height:500},{default:c(()=>[e(o).common.type=="loading"?v((t(),a("div",{"element-loading-text":e(o).common.loadingTitle?r.$t("module.stateTitle "+e(o).common.loadingTitle):"",key:e(o).common.loadingComponentKey,class:"common-loading"},null,8,h)),[[_,!0]]):l("",!0),e(o).common.type=="InstallConflict"?(t(),m(f,{key:1})):l("",!0),e(o).common.type=="disableConfirmConflict"?(t(),m(k,{key:2})):l("",!0),e(o).common.type=="done"?(t(),m(g,{key:3})):l("",!0),e(o).common.type=="uploadInstall"?(t(),m(C,{key:4})):l("",!0)]),_:1})]),_:1},8,["close-on-press-escape","title","close-on-click-modal","modelValue"])])}}});const $=x(I,[["__scopeId","data-v-e271020e"]]);export{$ as default};
