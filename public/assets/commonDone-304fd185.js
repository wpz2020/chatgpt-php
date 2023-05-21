import{defineComponent as E,reactive as A,resolveComponent as f,resolveDirective as y,openBlock as l,createElementBlock as s,createElementVNode as a,unref as e,toDisplayString as o,withDirectives as S,createCommentVNode as m,createTextVNode as i,createVNode as g,withCtx as D,createBlock as L}from"vue";import{s as n,j as w}from"./store-fda3112c.js";import{m as d,b as C}from"./index-411a3130.js";import{G as N,H as B,_ as V}from"./index-89e26330.js";import{F as M}from"./index-39d73c69.js";import{ElMessageBox as j}from"element-plus";import{useI18n as P}from"vue-i18n";import"pinia";import"vue-router";import"vue-demi";import"./index-0a827c2c.js";import"./controllerUrls-941681c3.js";import"./index-d3b20950.js";const W={class:"install-done"},F={class:"install-done-title"},R={key:0},U={key:1},z={key:2},G={key:3},H={class:"install-tis-box"},O={key:0,class:"depend-box"},q={key:0,class:"depend-loading"},J={class:"depend-tis"},K={key:0},Q={class:"color-red"},X={key:0},Y={key:1},Z={key:1,class:"color-green"},$={key:2,class:"exec-fail color-red"},ee={key:1,class:"depend-tis"},te={key:2},oe={key:0,class:"install-tis-box"},ne={class:"install-tis"},le={class:"install-tis-box"},se={class:"install-tis"},ae={class:"install-tis-box"},de={class:"install-form"},ie=E({__name:"commonDone",setup(me){const{t}=P(),c=N(),r=A({rebuild:0}),u=()=>{c.toggle(!0)},b=()=>{n.dialog.common=!1,r.rebuild==1&&(c.toggle(!0),c.addTaskPM("web-build",!1,"",p=>{p==B.Success&&c.toggle(!1)}))},k=()=>{j.confirm(t("module.Is the command that failed on the WEB terminal executed manually or in other ways successfully?"),t("Reminder"),{confirmButtonText:t("module.yes"),cancelButtonText:t("Cancel"),type:"warning"}).then(()=>{n.loading.common=!0,w(n.common.uid).then(()=>{C(),n.loading.common=!1})})};return(p,_)=>{const v=f("el-link"),I=f("el-button"),h=y("loading"),x=y("blur");return l(),s("div",W,[a("div",F,[e(n).common.moduleState==e(d).INSTALLED?(l(),s("span",R,o(e(t)("module.Congratulations, module installation is complete")),1)):e(n).common.moduleState==e(d).DISABLE?(l(),s("span",U,o(e(t)("module.Module is disabled")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(l(),s("span",z,o(e(t)("module.Congratulations, the code of the module is ready")),1)):(l(),s("span",G,o(e(t)("module.Unknown state")),1))]),a("div",H,[e(n).common.dependInstallState!="none"?(l(),s("div",O,[e(n).common.dependInstallState=="executing"?S((l(),s("div",q,null,512)),[[h,!0]]):m("",!0),a("div",J,[e(n).common.dependInstallState=="executing"?(l(),s("div",K,[a("span",Q,o(e(t)("module.Do not refresh the page!")),1),e(n).common.moduleState==e(d).DISABLE?(l(),s("span",X,o(e(t)("module.New adjustment of dependency detected")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(l(),s("span",Y,o(e(t)("module.This module adds new dependencies")),1)):m("",!0),i("， "),a("span",null,o(e(t)("module.The built-in terminal of the system is automatically installing these dependencies, please wait~")),1),a("span",{class:"span-a",onClick:u},o(e(t)("module.View progress")),1)])):m("",!0),e(n).common.dependInstallState=="success"?(l(),s("div",Z,o(e(t)("module.Dependency installation completed~")),1)):m("",!0),e(n).common.dependInstallState=="fail"?(l(),s("div",$,[i(o(e(t)("module.Dependency installation fail 1"))+" ",1),a("span",{class:"span-a",onClick:u},o(e(t)("module.Dependency installation fail 2")),1),i(" "+o(e(t)("module.Dependency installation fail 3"))+" ",1),g(v,{target:"_blank",type:"primary",href:"https://wonderful-code.gitee.io/guide/install/manualOperation.html"},{default:D(()=>[i(o(e(t)("module.Dependency installation fail 4")),1)]),_:1})])):m("",!0)])])):e(n).common.moduleState==e(d).INSTALLED?(l(),s("div",ee,o(e(t)("module.This module does not add new dependencies")),1)):(l(),s("div",te,o(e(t)("module.There is no adjustment for system dependency")),1))]),e(n).common.dependInstallState=="fail"?(l(),s("div",oe,[a("div",ne,[i(o(e(t)("module.Dependency installation fail 5"))+" ",1),a("span",{class:"span-a",onClick:k},o(e(t)("module.Dependency installation fail 6")),1),i(" "+o(e(t)("module.Dependency installation fail 7")),1)])])):m("",!0),a("div",le,[a("div",se,o(e(t)("module.please"))+o(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 1"))+" "+o(e(t)("module.Manually clean up the system and browser cache, and refresh the page")),1)]),a("div",ae,[a("div",de,[g(M,{label:(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 2"))+e(t)("module.Automatically execute reissue command?"),modelValue:r.rebuild,"onUpdate:modelValue":_[0]||(_[0]=T=>r.rebuild=T),type:"radio",data:{content:{0:e(t)("module.no"),1:e(t)("module.yes")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])])]),S((l(),L(I,{class:"install-done-button",disabled:!(e(n).common.dependInstallState!="executing"||e(n).common.moduleState==e(d).INSTALLED),size:"large",type:"primary",onClick:b},{default:D(()=>[i(o(e(n).common.moduleState==e(d).DISABLE?e(t)("complete"):e(t)("module.End of installation")),1)]),_:1},8,["disabled"])),[[x],[h,e(n).loading.common]])])}}});const ve=V(ie,[["__scopeId","data-v-d14368ec"]]);export{ve as default};
