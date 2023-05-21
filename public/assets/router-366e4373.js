import{r as d,i as a,d as l,e as w,g as D,h as R,j as e,b as I}from"./index-714877db.js";import{d as V,r as O,H as P,a3 as b,a4 as h,E as c}from"./vue-8b21a996.js";const L=V("memberCenter",()=>{const t=O({open:!1,layoutMode:"Default",activeRoute:null,viewRoutes:[],showHeadline:!1,authNode:new Map,shrink:!1,menuExpand:!1});return{state:t,setAuthNode:(s,k)=>{t.authNode.set(s,k)},setViewRoutes:s=>{t.viewRoutes=A(s)},setShowHeadline:s=>{t.showHeadline=s},setActiveRoute:s=>{t.activeRoute=s},setShrink:s=>{t.shrink=s},setStatus:s=>{t.open=s},setLayoutMode:s=>{t.layoutMode=s},toggleMenuExpand:(s=!t.menuExpand)=>{t.menuExpand=s}}});function A(t){return t.forEach(i=>{var _;((_=i.meta)==null?void 0:_.type)=="iframe"&&(i.path="/user/iframe/"+encodeURIComponent(i.path)),i.children&&i.children.length&&(i.children=A(i.children))}),t}const C=function(t="shade",i){const _=document.querySelector(".layout-container"),n=document.createElement("div");n.setAttribute("class","ba-layout-shade "+t),_.appendChild(n),P(n,"click",()=>T(i))},T=function(t=()=>{}){const i=document.querySelector(".ba-layout-shade");i&&i.remove(),t()},f=async t=>{try{const i=await d.push(t);b(i,h.aborted)?c({message:a.global.t("utils.Navigation failed, navigation guard intercepted!"),type:"error"}):b(i,h.duplicated)&&c({message:a.global.t("utils.Navigation failed, it is at the navigation target position!"),type:"warning"})}catch(i){c({message:a.global.t("utils.Navigation failed, invalid route!"),type:"error"}),console.error(i)}},y=t=>{var u,r;const i=[];d.getRoutes().forEach(o=>{o.path&&i.push(o.path)});let n=!1;for(const o in t){if(((u=t[o].meta)==null?void 0:u.type)!="menu_dir"&&i.indexOf(t[o].path)!==-1)return t[o];if(t[o].children&&((r=t[o].children)!=null&&r.length)&&(n=y(t[o].children),n))return n}return n},M=t=>{var _;switch((_=t.meta)==null?void 0:_.type){case"iframe":case"tab":f({path:t.path});break;case"link":window.open(t.path,"_blank");break;default:c({message:a.global.t("utils.Navigation failed, the menu type is unrecognized!"),type:"error"});break}const i=I();i.layout.shrink&&T(()=>{i.setLayout("menuCollapse",!0)})},N=t=>{E(Object.assign({"/src/views/frontend/balance.vue":()=>e(()=>import("./balance-e627d537.js"),["assets/balance-e627d537.js","assets/balance-31cb8db4.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/header-4e943e98.js","assets/useDark-c490e358.js","assets/chat_list-0aa30179.js","assets/userChat-b1a939a4.js","assets/chat-44476ac1.js","assets/footer-488793ab.js"]),"/src/views/frontend/chat.vue":()=>e(()=>import("./chat-6972dadc.js"),["assets/chat-6972dadc.js","assets/balance-31cb8db4.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/header-4e943e98.js","assets/useDark-c490e358.js","assets/chat_list-0aa30179.js","assets/userChat-b1a939a4.js","assets/chat-44476ac1.js","assets/footer-488793ab.js"]),"/src/views/frontend/index/components/chat.vue":()=>e(()=>import("./chat-f8722aa2.js"),["assets/chat-f8722aa2.js","assets/vue-8b21a996.js","assets/userChat-b1a939a4.js","assets/timeToDate-4f013b84.js","assets/index-714877db.js"]),"/src/views/frontend/index/components/chat_footer.vue":()=>e(()=>import("./chat_footer-9dac3e6c.js"),["assets/chat_footer-9dac3e6c.js","assets/vue-8b21a996.js","assets/chat-44476ac1.js","assets/userChat-b1a939a4.js","assets/index-714877db.js"]),"/src/views/frontend/index/components/chat_list.vue":()=>e(()=>import("./chat_list-0aa30179.js").then(r=>r.c),["assets/chat_list-0aa30179.js","assets/vue-8b21a996.js","assets/userChat-b1a939a4.js","assets/chat-44476ac1.js","assets/index-714877db.js"]),"/src/views/frontend/index/index.vue":()=>e(()=>import("./index-e7f9e3c7.js"),["assets/index-e7f9e3c7.js","assets/header-4e943e98.js","assets/vue-8b21a996.js","assets/useDark-c490e358.js","assets/index-714877db.js","assets/chat_list-0aa30179.js","assets/userChat-b1a939a4.js","assets/chat-44476ac1.js","assets/chat-f8722aa2.js","assets/timeToDate-4f013b84.js","assets/chat_footer-9dac3e6c.js"]),"/src/views/frontend/user/account/balance.vue":()=>e(()=>import("./balance-db844053.js"),["assets/balance-db844053.js","assets/index-714877db.js","assets/vue-8b21a996.js"]),"/src/views/frontend/user/account/changePassword.vue":()=>e(()=>import("./changePassword-5d976603.js"),["assets/changePassword-5d976603.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/validate-11156ce9.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js"]),"/src/views/frontend/user/account/integral.vue":()=>e(()=>import("./integral-750912b0.js"),["assets/integral-750912b0.js","assets/index-714877db.js","assets/vue-8b21a996.js"]),"/src/views/frontend/user/account/overview.vue":()=>e(()=>import("./overview-c3cf2cec.js"),["assets/overview-c3cf2cec.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/timeToDate-4f013b84.js"]),"/src/views/frontend/user/account/profile.vue":()=>e(()=>import("./profile-2633d459.js"),["assets/profile-2633d459.js","assets/vue-8b21a996.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/frontend/user/login.vue":()=>e(()=>import("./login-bf9c9928.js"),["assets/login-bf9c9928.js","assets/vue-8b21a996.js","assets/header-4e943e98.js","assets/useDark-c490e358.js","assets/index-714877db.js","assets/chat_list-0aa30179.js","assets/userChat-b1a939a4.js","assets/chat-44476ac1.js","assets/footer-488793ab.js","assets/validate-11156ce9.js"])}),t,R.name);const _="/"+R.name+"/",n=m(t,_,_),u=L();u.setViewRoutes(n),u.setShowHeadline(t.length>1)},S=t=>{E(Object.assign({"/src/views/backend/apiKey copy/index.vue":()=>e(()=>import("./index-6ecf2b69.js"),["assets/index-6ecf2b69.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_style_index_0_lang-1059d096.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/apiKey copy/popupForm.vue":()=>e(()=>import("./popupForm-9eb08a93.js"),["assets/popupForm-9eb08a93.js","assets/popupForm.vue_vue_type_style_index_0_lang-1059d096.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/apikey/index.vue":()=>e(()=>import("./index-b54cc644.js"),["assets/index-b54cc644.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_script_setup_true_lang-267aa468.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/apikey/popupForm.vue":()=>e(()=>import("./popupForm-c68a5206.js"),["assets/popupForm-c68a5206.js","assets/popupForm.vue_vue_type_script_setup_true_lang-267aa468.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/auth/admin/index.vue":()=>e(()=>import("./index-03e6e587.js"),["assets/index-03e6e587.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-efc3dedd.js","assets/validate-11156ce9.js","assets/index-90c66895.js"]),"/src/views/backend/auth/admin/popupForm.vue":()=>e(()=>import("./popupForm-efc3dedd.js"),["assets/popupForm-efc3dedd.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/validate-11156ce9.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js"]),"/src/views/backend/auth/adminLog/index.vue":()=>e(()=>import("./index-9da83180.js"),["assets/index-9da83180.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/info-d7be9ca7.js"]),"/src/views/backend/auth/adminLog/info.vue":()=>e(()=>import("./info-d7be9ca7.js"),["assets/info-d7be9ca7.js","assets/index-714877db.js","assets/vue-8b21a996.js"]),"/src/views/backend/auth/group/index.vue":()=>e(()=>import("./index-4be3268f.js"),["assets/index-4be3268f.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-e3242e2c.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/auth/group/popupForm.vue":()=>e(()=>import("./popupForm-e3242e2c.js"),["assets/popupForm-e3242e2c.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/auth/menu/index.vue":()=>e(()=>import("./index-d515e21f.js"),["assets/index-d515e21f.js","assets/controllerUrls-941681c3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-dce92828.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/auth/menu/popupForm.vue":()=>e(()=>import("./popupForm-ee85227e.js"),["assets/popupForm-ee85227e.js","assets/popupForm.vue_vue_type_script_setup_true_lang-dce92828.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/chat/index.vue":()=>e(()=>import("./index-002e22e3.js"),["assets/index-002e22e3.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_script_setup_true_lang-5fc35a61.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/chat/popupForm.vue":()=>e(()=>import("./popupForm-cd901971.js"),["assets/popupForm-cd901971.js","assets/popupForm.vue_vue_type_script_setup_true_lang-5fc35a61.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/crud/design.vue":()=>e(()=>import("./design-18717b6c.js"),["assets/design-18717b6c.js","assets/vue-8b21a996.js","assets/index-7753bebf.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/index-90c66895.js","assets/crud-73db0465.js","assets/validate-11156ce9.js"]),"/src/views/backend/crud/index.vue":()=>e(()=>import("./index-6c7a3ed8.js"),["assets/index-6c7a3ed8.js","assets/start-9bcb8901.js","assets/vue-8b21a996.js","assets/crud-73db0465.js","assets/index-714877db.js","assets/validate-11156ce9.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/index-90c66895.js","assets/log.vue_vue_type_style_index_0_lang-7671a134.js","assets/design-18717b6c.js"]),"/src/views/backend/crud/log.vue":()=>e(()=>import("./log-afd22ba1.js"),["assets/log-afd22ba1.js","assets/log.vue_vue_type_style_index_0_lang-7671a134.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/crud-73db0465.js","assets/validate-11156ce9.js"]),"/src/views/backend/crud/start.vue":()=>e(()=>import("./start-9bcb8901.js"),["assets/start-9bcb8901.js","assets/vue-8b21a996.js","assets/crud-73db0465.js","assets/index-714877db.js","assets/validate-11156ce9.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/index-90c66895.js","assets/log.vue_vue_type_style_index_0_lang-7671a134.js"]),"/src/views/backend/dashboard.vue":()=>e(()=>import("./dashboard-c73c8ddc.js"),["assets/dashboard-c73c8ddc.js","assets/echarts-e90ad19a.js","assets/index-714877db.js","assets/vue-8b21a996.js"]),"/src/views/backend/login.vue":()=>e(()=>import("./login-7476d978.js"),["assets/login-7476d978.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-98d4c667.js","assets/validate-11156ce9.js"]),"/src/views/backend/module/components/baAccount.vue":()=>e(()=>import("./baAccount-9ceb9fd9.js"),["assets/baAccount-9ceb9fd9.js","assets/vue-8b21a996.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js","assets/store-55046527.js"]),"/src/views/backend/module/components/buy.vue":()=>e(()=>import("./buy-19e4c4a5.js"),["assets/buy-19e4c4a5.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/components/commonDialog.vue":()=>e(()=>import("./commonDialog-7ea2d954.js"),["assets/commonDialog-7ea2d954.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/installConflict-f3dac1b8.js","assets/index-9c7f2a4c.js","assets/commonDone-bda39a2d.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/uploadInstall-7290e2a8.js","assets/confirmFileConflict-b01a6e97.js"]),"/src/views/backend/module/components/commonDone.vue":()=>e(()=>import("./commonDone-bda39a2d.js"),["assets/commonDone-bda39a2d.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js"]),"/src/views/backend/module/components/confirmFileConflict.vue":()=>e(()=>import("./confirmFileConflict-b01a6e97.js"),["assets/confirmFileConflict-b01a6e97.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/components/goodsInfo.vue":()=>e(()=>import("./goodsInfo-ddc3d653.js"),["assets/goodsInfo-ddc3d653.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js","assets/buy-19e4c4a5.js","assets/pay-a963c016.js"]),"/src/views/backend/module/components/installConflict.vue":()=>e(()=>import("./installConflict-f3dac1b8.js"),["assets/installConflict-f3dac1b8.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/components/pay.vue":()=>e(()=>import("./pay-a963c016.js"),["assets/pay-a963c016.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/components/tableHeader.vue":()=>e(()=>import("./tableHeader-497574e7.js"),["assets/tableHeader-497574e7.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/components/tabs.vue":()=>e(()=>import("./tabs-9b7d28e2.js"),["assets/tabs-9b7d28e2.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/components/uploadInstall.vue":()=>e(()=>import("./uploadInstall-7290e2a8.js"),["assets/uploadInstall-7290e2a8.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/store-55046527.js","assets/index-9c7f2a4c.js"]),"/src/views/backend/module/index.vue":()=>e(()=>import("./index-28b3cd0d.js"),["assets/index-28b3cd0d.js","assets/store-55046527.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/index-9c7f2a4c.js","assets/tableHeader-497574e7.js","assets/baAccount-9ceb9fd9.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js","assets/tabs-9b7d28e2.js","assets/goodsInfo-ddc3d653.js","assets/buy-19e4c4a5.js","assets/pay-a963c016.js","assets/commonDialog-7ea2d954.js","assets/installConflict-f3dac1b8.js","assets/commonDone-bda39a2d.js","assets/uploadInstall-7290e2a8.js","assets/confirmFileConflict-b01a6e97.js"]),"/src/views/backend/pay/index.vue":()=>e(()=>import("./index-3e8c5f07.js"),["assets/index-3e8c5f07.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_script_setup_true_lang-ec9c21c5.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/pay/popupForm.vue":()=>e(()=>import("./popupForm-e95b4651.js"),["assets/popupForm-e95b4651.js","assets/popupForm.vue_vue_type_script_setup_true_lang-ec9c21c5.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/product/index.vue":()=>e(()=>import("./index-fc474897.js"),["assets/index-fc474897.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_script_setup_true_lang-67ad58b3.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/product/popupForm.vue":()=>e(()=>import("./popupForm-ebdf3ad3.js"),["assets/popupForm-ebdf3ad3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-67ad58b3.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/questions/index.vue":()=>e(()=>import("./index-adb1e601.js"),["assets/index-adb1e601.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_script_setup_true_lang-cc5366db.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/questions/popupForm.vue":()=>e(()=>import("./popupForm-c2bd75b3.js"),["assets/popupForm-c2bd75b3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-cc5366db.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/questionsType/index.vue":()=>e(()=>import("./index-b4eb12a7.js"),["assets/index-b4eb12a7.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm.vue_vue_type_script_setup_true_lang-46ba2173.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/questionsType/popupForm.vue":()=>e(()=>import("./popupForm-21843cf7.js"),["assets/popupForm-21843cf7.js","assets/popupForm.vue_vue_type_script_setup_true_lang-46ba2173.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/routine/adminInfo.vue":()=>e(()=>import("./adminInfo-82fbb21d.js"),["assets/adminInfo-82fbb21d.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/validate-11156ce9.js"]),"/src/views/backend/routine/attachment/index.vue":()=>e(()=>import("./index-0837387c.js"),["assets/index-0837387c.js","assets/popupForm-4a0e4633.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-4328e043.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/routine/attachment/popupForm.vue":()=>e(()=>import("./popupForm-4a0e4633.js"),["assets/popupForm-4a0e4633.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-4328e043.js"]),"/src/views/backend/routine/config/add.vue":()=>e(()=>import("./add-b183969e.js"),["assets/add-b183969e.js","assets/add.vue_vue_type_script_setup_true_lang-14121061.js","assets/vue-8b21a996.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/routine/config/index.vue":()=>e(()=>import("./index-271edd93.js"),["assets/index-271edd93.js","assets/vue-8b21a996.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/add.vue_vue_type_script_setup_true_lang-14121061.js","assets/validate-11156ce9.js"]),"/src/views/backend/security/dataRecycle/index.vue":()=>e(()=>import("./index-eaaa7867.js"),["assets/index-eaaa7867.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-b8aa2984.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/security/dataRecycle/popupForm.vue":()=>e(()=>import("./popupForm-b8aa2984.js"),["assets/popupForm-b8aa2984.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/security/dataRecycleLog/index.vue":()=>e(()=>import("./index-7960f39b.js"),["assets/index-7960f39b.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/info-67b7de04.js"]),"/src/views/backend/security/dataRecycleLog/info.vue":()=>e(()=>import("./info-67b7de04.js").then(r=>r.a),["assets/info-67b7de04.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/security/sensitiveData/index.vue":()=>e(()=>import("./index-9b187f8e.js"),["assets/index-9b187f8e.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-7ffeb067.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/security/sensitiveData/popupForm.vue":()=>e(()=>import("./popupForm-7ffeb067.js"),["assets/popupForm-7ffeb067.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/security/sensitiveDataLog/index.vue":()=>e(()=>import("./index-6e49c6a7.js"),["assets/index-6e49c6a7.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/info-196ad17e.js"]),"/src/views/backend/security/sensitiveDataLog/info.vue":()=>e(()=>import("./info-196ad17e.js").then(r=>r.a),["assets/info-196ad17e.js","assets/index-714877db.js","assets/vue-8b21a996.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/user/group/index.vue":()=>e(()=>import("./index-135528ce.js"),["assets/index-135528ce.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-79d82069.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/group/popupForm.vue":()=>e(()=>import("./popupForm-79d82069.js"),["assets/popupForm-79d82069.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/moneyLog/index.vue":()=>e(()=>import("./index-c70ced2b.js"),["assets/index-c70ced2b.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-407228cc.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/moneyLog/popupForm.vue":()=>e(()=>import("./popupForm-407228cc.js").then(r=>r.p),["assets/popupForm-407228cc.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/rule/index.vue":()=>e(()=>import("./index-c0d69431.js"),["assets/index-c0d69431.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-1d191673.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/rule/popupForm.vue":()=>e(()=>import("./popupForm-1d191673.js"),["assets/popupForm-1d191673.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/scoreLog/index.vue":()=>e(()=>import("./index-395c7b8a.js"),["assets/index-395c7b8a.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-c7ac63cb.js","assets/index-90c66895.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/scoreLog/popupForm.vue":()=>e(()=>import("./popupForm-c7ac63cb.js").then(r=>r.p),["assets/popupForm-c7ac63cb.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/index-4328e043.js","assets/validate-11156ce9.js"]),"/src/views/backend/user/user - 副本/index.vue":()=>e(()=>import("./index-df265a60.js"),["assets/index-df265a60.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-5c4a67af.js","assets/validate-11156ce9.js","assets/index-90c66895.js"]),"/src/views/backend/user/user - 副本/popupForm.vue":()=>e(()=>import("./popupForm-5c4a67af.js"),["assets/popupForm-5c4a67af.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/validate-11156ce9.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js"]),"/src/views/backend/user/user/index.vue":()=>e(()=>import("./index-a9fd0641.js"),["assets/index-a9fd0641.js","assets/index-7753bebf.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js","assets/popupForm-9c943cf1.js","assets/validate-11156ce9.js","assets/index-90c66895.js"]),"/src/views/backend/user/user/popupForm.vue":()=>e(()=>import("./popupForm-9c943cf1.js"),["assets/popupForm-9c943cf1.js","assets/vue-8b21a996.js","assets/index-714877db.js","assets/validate-11156ce9.js","assets/index-90c66895.js","assets/index-7753bebf.js","assets/controllerUrls-941681c3.js","assets/index-4328e043.js"])}),t,l.name);const _="/"+l.name+"/",n=m(t,_,_);w().setTabsViewRoutes(n)},m=(t,i="/",_="/",n="admin")=>{const u=[],r=[];for(const o in t)if(t[o].extend!="add_rules_only")if(t[o].type=="menu"||t[o].type=="menu_dir"){if(t[o].type=="menu_dir"&&t[o].children&&!t[o].children.length)continue;const v=t[o].menu_type=="link"||t[o].menu_type=="iframe"?t[o].url:i+t[o].path;let p=[];t[o].children&&t[o].children.length>0&&(p=m(t[o].children,i,v)),u.push({path:v,name:t[o].name,component:t[o].component,meta:{title:t[o].title,icon:t[o].icon,keepalive:t[o].keepalive,type:t[o].menu_type},children:p})}else r.push(i+t[o].name);return r.length&&(n=="admin"?w().setAuthNode(_,r):n=="user"&&L().setAuthNode(_,r)),u},E=(t,i,_)=>{for(const n in i)i[n].extend!="add_menu_only"&&(i[n].type=="menu"&&(i[n].menu_type=="tab"&&t[i[n].component]||i[n].menu_type=="iframe")&&g(t,i[n],_),i[n].children&&i[n].children.length>0&&E(t,i[n].children,_))},g=(t,i,_)=>{let n="",u;i.menu_type=="iframe"?(n=(D()?"/admin":"/user")+"/iframe/"+encodeURIComponent(i.url),u=()=>e(()=>import("./iframe-d4572c67.js"),["assets/iframe-d4572c67.js","assets/layout-463f66a0.js","assets/index-714877db.js","assets/vue-8b21a996.js"])):(n=_?i.path:"/"+i.path,u=t[i.component]);const r={path:n,name:i.name,component:u,meta:{title:i.title,extend:i.extend,icon:i.icon,keepalive:i.keepalive,menu_type:i.menu_type,type:i.type,url:i.url,addtab:!0}};_?d.addRoute(_,r):d.addRoute(r)};export{N as a,T as c,y as g,S as h,M as o,f as r,C as s,L as u};