import{s as n,j as E}from"./store-53b9bb5c.js";import{m as d,b as A}from"./index-cfdbc62c.js";import{d as C,$ as L,ax as w,r as N,f as s,c as l,g as a,j as e,i as o,z as f,x as c,h as i,a as y,b as g,Y as B,aD as V,aA as j,e as S,aC as D,_ as M}from"./index-9250cf41.js";import{F as P}from"./index-5cf5ba2e.js";import"./index-47490f62.js";import"./controllerUrls-941681c3.js";import"./index-bb9265a5.js";const W={class:"install-done"},z={class:"install-done-title"},F={key:0},R={key:1},U={key:2},O={key:3},Y={class:"install-tis-box"},$={key:0,class:"depend-box"},q={key:0,class:"depend-loading"},G={class:"depend-tis"},H={key:0},J={class:"color-red"},K={key:0},Q={key:1},X={key:1,class:"color-green"},Z={key:2,class:"exec-fail color-red"},ee={key:1,class:"depend-tis"},te={key:2},oe={key:0,class:"install-tis-box"},ne={class:"install-tis"},se={class:"install-tis-box"},le={class:"install-tis"},ae={class:"install-tis-box"},de={class:"install-form"},ie=C({__name:"commonDone",setup(ce){const{t}=L(),m=w(),u=N({rebuild:0}),r=()=>{m.toggle(!0)},b=()=>{n.dialog.common=!1,u.rebuild==1&&(m.toggle(!0),m.addTaskPM("web-build",!1,"",_=>{_==V.Success&&m.toggle(!1)}))},k=()=>{j.confirm(t("module.Is the command that failed on the WEB terminal executed manually or in other ways successfully?"),t("Reminder"),{confirmButtonText:t("module.yes"),cancelButtonText:t("Cancel"),type:"warning"}).then(()=>{n.loading.common=!0,E(n.common.uid).then(()=>{A(),n.loading.common=!1})})};return(_,p)=>{const v=S("el-link"),I=S("el-button"),h=D("loading"),x=D("blur");return s(),l("div",W,[a("div",z,[e(n).common.moduleState==e(d).INSTALLED?(s(),l("span",F,o(e(t)("module.Congratulations, module installation is complete")),1)):e(n).common.moduleState==e(d).DISABLE?(s(),l("span",R,o(e(t)("module.Module is disabled")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(s(),l("span",U,o(e(t)("module.Congratulations, the code of the module is ready")),1)):(s(),l("span",O,o(e(t)("module.Unknown state")),1))]),a("div",Y,[e(n).common.dependInstallState!="none"?(s(),l("div",$,[e(n).common.dependInstallState=="executing"?f((s(),l("div",q,null,512)),[[h,!0]]):c("",!0),a("div",G,[e(n).common.dependInstallState=="executing"?(s(),l("div",H,[a("span",J,o(e(t)("module.Do not refresh the page!")),1),e(n).common.moduleState==e(d).DISABLE?(s(),l("span",K,o(e(t)("module.New adjustment of dependency detected")),1)):e(n).common.moduleState==e(d).DEPENDENT_WAIT_INSTALL?(s(),l("span",Q,o(e(t)("module.This module adds new dependencies")),1)):c("",!0),i("， "),a("span",null,o(e(t)("module.The built-in terminal of the system is automatically installing these dependencies, please wait~")),1),a("span",{class:"span-a",onClick:r},o(e(t)("module.View progress")),1)])):c("",!0),e(n).common.dependInstallState=="success"?(s(),l("div",X,o(e(t)("module.Dependency installation completed~")),1)):c("",!0),e(n).common.dependInstallState=="fail"?(s(),l("div",Z,[i(o(e(t)("module.Dependency installation fail 1"))+" ",1),a("span",{class:"span-a",onClick:r},o(e(t)("module.Dependency installation fail 2")),1),i(" "+o(e(t)("module.Dependency installation fail 3"))+" ",1),y(v,{target:"_blank",type:"primary",href:"https://wonderful-code.gitee.io/guide/install/manualOperation.html"},{default:g(()=>[i(o(e(t)("module.Dependency installation fail 4")),1)]),_:1})])):c("",!0)])])):e(n).common.moduleState==e(d).INSTALLED?(s(),l("div",ee,o(e(t)("module.This module does not add new dependencies")),1)):(s(),l("div",te,o(e(t)("module.There is no adjustment for system dependency")),1))]),e(n).common.dependInstallState=="fail"?(s(),l("div",oe,[a("div",ne,[i(o(e(t)("module.Dependency installation fail 5"))+" ",1),a("span",{class:"span-a",onClick:k},o(e(t)("module.Dependency installation fail 6")),1),i(" "+o(e(t)("module.Dependency installation fail 7")),1)])])):c("",!0),a("div",se,[a("div",le,o(e(t)("module.please"))+o(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 1"))+" "+o(e(t)("module.Manually clean up the system and browser cache, and refresh the page")),1)]),a("div",ae,[a("div",de,[y(P,{label:(e(n).common.moduleState==e(d).DISABLE?"":e(t)("module.After installation 2"))+e(t)("module.Automatically execute reissue command?"),modelValue:u.rebuild,"onUpdate:modelValue":p[0]||(p[0]=T=>u.rebuild=T),type:"radio",data:{content:{0:e(t)("module.no"),1:e(t)("module.yes")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])])]),f((s(),B(I,{class:"install-done-button",disabled:!(e(n).common.dependInstallState!="executing"||e(n).common.moduleState==e(d).INSTALLED),size:"large",type:"primary",onClick:b},{default:g(()=>[i(o(e(n).common.moduleState==e(d).DISABLE?e(t)("complete"):e(t)("module.End of installation")),1)]),_:1},8,["disabled"])),[[x],[h,e(n).loading.common]])])}}});const ye=M(ie,[["__scopeId","data-v-d14368ec"]]);export{ye as default};