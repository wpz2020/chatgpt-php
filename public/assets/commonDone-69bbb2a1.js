import{s as n,j as E}from"./store-15f27c2f.js";import{m as d,b as A}from"./index-9457d08a.js";import{l as C,A as L,E as N,_ as w}from"./index-36779712.js";import{F as B}from"./index-ebfda3ce.js";import{h as V,r as M,p as s,l,o as a,k as e,M as o,N as f,S as c,U as i,q as y,D as S,C as j,ae as P,t as g,R as D}from"./vue-8b21a996.js";import"./index-b2d35f6a.js";import"./controllerUrls-941681c3.js";import"./index-0d1dfc75.js";const R={class:"install-done"},U={class:"install-done-title"},W={key:0},F={key:1},q={key:2},z={key:3},O={class:"install-tis-box"},G={key:0,class:"depend-box"},H={key:0,class:"depend-loading"},J={class:"depend-tis"},K={key:0},Q={class:"color-red"},X={key:0},Y={key:1},Z={key:1,class:"color-green"},$={key:2,class:"exec-fail color-red"},ee={key:1,class:"depend-tis"},te={key:2},oe={key:0,class:"install-tis-box"},ne={class:"install-tis"},se={class:"install-tis-box"},le={class:"install-tis"},ae={class:"install-tis-box"},de={class:"install-form"},ie=V({__name:"commonDone",setup(ce){const{t}=C(),m=L(),u=M({rebuild:0}),r=()=>{m.toggle(!0)},b=()=>{n.dialog.common=!1,u.rebuild==1&&(m.toggle(!0),m.addTaskPM("web-build",!1,"",_=>{_==N.Success&&m.toggle(!1)}))},k=()=>{P.confirm(t("module.Is the command that failed on the WEB terminal executed manually or in other ways successfully?"),t("Reminder"),{confirmButtonText:t("module.yes"),cancelButtonText:t("Cancel"),type:"warning"}).then(()=>{n.loading.common=!0,E(n.common.uid).then(()=>{A(),n.loading.common=!1})})};return(_,p)=>{const v=g("el-link"),I=g("el-button"),h=D("loading"),x=D("blur");return s(),l("div",R,[a("div",U,[e(n).common.moduleState==e(d).INSTALLED?(s(),l("span",W,o(e(t)("module.Congratulations, module installation is complete")),1)):e(n).common.moduleState==e(d).DISABLE?(s(),l("span",F,o(e(t)("module.Module is disabled")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(s(),l("span",q,o(e(t)("module.Congratulations, the code of the module is ready")),1)):(s(),l("span",z,o(e(t)("module.Unknown state")),1))]),a("div",O,[e(n).common.dependInstallState!="none"?(s(),l("div",G,[e(n).common.dependInstallState=="executing"?f((s(),l("div",H,null,512)),[[h,!0]]):c("",!0),a("div",J,[e(n).common.dependInstallState=="executing"?(s(),l("div",K,[a("span",Q,o(e(t)("module.Do not refresh the page!")),1),e(n).common.moduleState==e(d).DISABLE?(s(),l("span",X,o(e(t)("module.New adjustment of dependency detected")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(s(),l("span",Y,o(e(t)("module.This module adds new dependencies")),1)):c("",!0),i("， "),a("span",null,o(e(t)("module.The built-in terminal of the system is automatically installing these dependencies, please wait~")),1),a("span",{class:"span-a",onClick:r},o(e(t)("module.View progress")),1)])):c("",!0),e(n).common.dependInstallState=="success"?(s(),l("div",Z,o(e(t)("module.Dependency installation completed~")),1)):c("",!0),e(n).common.dependInstallState=="fail"?(s(),l("div",$,[i(o(e(t)("module.Dependency installation fail 1"))+" ",1),a("span",{class:"span-a",onClick:r},o(e(t)("module.Dependency installation fail 2")),1),i(" "+o(e(t)("module.Dependency installation fail 3"))+" ",1),y(v,{target:"_blank",type:"primary",href:"https://wonderful-code.gitee.io/guide/install/manualOperation.html"},{default:S(()=>[i(o(e(t)("module.Dependency installation fail 4")),1)]),_:1})])):c("",!0)])])):e(n).common.moduleState==e(d).INSTALLED?(s(),l("div",ee,o(e(t)("module.This module does not add new dependencies")),1)):(s(),l("div",te,o(e(t)("module.There is no adjustment for system dependency")),1))]),e(n).common.dependInstallState=="fail"?(s(),l("div",oe,[a("div",ne,[i(o(e(t)("module.Dependency installation fail 5"))+" ",1),a("span",{class:"span-a",onClick:k},o(e(t)("module.Dependency installation fail 6")),1),i(" "+o(e(t)("module.Dependency installation fail 7")),1)])])):c("",!0),a("div",se,[a("div",le,o(e(t)("module.please"))+o(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 1"))+" "+o(e(t)("module.Manually clean up the system and browser cache, and refresh the page")),1)]),a("div",ae,[a("div",de,[y(B,{label:(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 2"))+e(t)("module.Automatically execute reissue command?"),modelValue:u.rebuild,"onUpdate:modelValue":p[0]||(p[0]=T=>u.rebuild=T),type:"radio",data:{content:{0:e(t)("module.no"),1:e(t)("module.yes")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])])]),f((s(),j(I,{class:"install-done-button",disabled:!(e(n).common.dependInstallState!="executing"||e(n).common.moduleState==e(d).INSTALLED),size:"large",type:"primary",onClick:b},{default:S(()=>[i(o(e(n).common.moduleState==e(d).DISABLE?e(t)("complete"):e(t)("module.End of installation")),1)]),_:1},8,["disabled"])),[[x],[h,e(n).loading.common]])])}}});const Se=w(ie,[["__scopeId","data-v-d14368ec"]]);export{Se as default};
