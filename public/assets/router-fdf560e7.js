import{n as T,r as d,l as c,y as E,z as b,A as D,d as I,B as l,a as e}from"./index-89e26330.js";import{isNavigationFailure as R,NavigationFailureType as w}from"vue-router";import{ElNotification as u}from"element-plus";import{u as L}from"./memberCenter-893be883.js";const y=function(i="shade",t){const r=document.querySelector(".layout-container"),o=document.createElement("div");o.setAttribute("class","ba-layout-shade "+i),r.appendChild(o),T(o,"click",()=>A(t))},A=function(i=()=>{}){const t=document.querySelector(".ba-layout-shade");t&&t.remove(),i()},O=async i=>{try{const t=await d.push(i);R(t,w.aborted)?u({message:c.global.t("utils.Navigation failed, navigation guard intercepted!"),type:"error"}):R(t,w.duplicated)&&u({message:c.global.t("utils.Navigation failed, it is at the navigation target position!"),type:"warning"})}catch(t){u({message:c.global.t("utils.Navigation failed, invalid route!"),type:"error"}),console.error(t)}},P=i=>{var s,n;const t=[];d.getRoutes().forEach(_=>{_.path&&t.push(_.path)});let o=!1;for(const _ in i){if(((s=i[_].meta)==null?void 0:s.type)!="menu_dir"&&t.indexOf(i[_].path)!==-1)return i[_];if(i[_].children&&((n=i[_].children)!=null&&n.length)&&(o=P(i[_].children),o))return o}return o},x=i=>{var r;switch((r=i.meta)==null?void 0:r.type){case"iframe":case"tab":O({path:i.path});break;case"link":window.open(i.path,"_blank");break;default:u({message:c.global.t("utils.Navigation failed, the menu type is unrecognized!"),type:"error"});break}const t=I();t.layout.shrink&&A(()=>{t.setLayout("menuCollapse",!0)})},F=i=>{v(Object.assign({"/src/views/frontend/chat/components/chat.vue":()=>e(()=>import("./chat-866cde52.js"),["assets/chat-866cde52.js","assets/chat-5c60e301.js","assets/chat-9567bdf0.js","assets/timeToDate-4f013b84.js","assets/index-89e26330.js","assets/sendMsg-ed7afb93.js","assets/chat-57a81274.js","assets/chat-3c5e52ec.js"]),"/src/views/frontend/chat/components/chat_footer.vue":()=>e(()=>import("./chat_footer-4c430df5.js"),["assets/chat_footer-4c430df5.js","assets/sendMsg-ed7afb93.js","assets/chat-9567bdf0.js","assets/chat-57a81274.js","assets/index-89e26330.js","assets/footer-4ed993c7.js"]),"/src/views/frontend/chat/components/chat_list.vue":()=>e(()=>import("./chat_list-8cf556a9.js"),["assets/chat_list-8cf556a9.js","assets/chat-9567bdf0.js","assets/index-89e26330.js","assets/menu-c85258cb.js"]),"/src/views/frontend/chat/index.vue":()=>e(()=>import("./index-a11d55fd.js"),["assets/index-a11d55fd.js","assets/header-55e7bca2.js","assets/index-89e26330.js","assets/logo-dbed91f4.js","assets/memberCenter-893be883.js","assets/menu-c85258cb.js","assets/chat-866cde52.js","assets/chat-5c60e301.js","assets/chat-9567bdf0.js","assets/timeToDate-4f013b84.js","assets/sendMsg-ed7afb93.js","assets/chat-57a81274.js","assets/chat-3c5e52ec.js","assets/chat_footer-4c430df5.js","assets/footer-4ed993c7.js","assets/chat_list-8cf556a9.js"]),"/src/views/frontend/fate/components/chat.vue":()=>e(()=>import("./chat-bf38729b.js"),["assets/chat-bf38729b.js","assets/chat-5c60e301.js","assets/chat-57a81274.js","assets/index-89e26330.js","assets/chat-9567bdf0.js","assets/timeToDate-4f013b84.js","assets/sendMsg-5cc92924.js","assets/chat-3c5e52ec.js"]),"/src/views/frontend/fate/components/chat_footer.vue":()=>e(()=>import("./chat_footer-c5137e25.js"),["assets/chat_footer-c5137e25.js","assets/chat-57a81274.js","assets/index-89e26330.js","assets/chat-9567bdf0.js","assets/footer-4ed993c7.js","assets/sendMsg-5cc92924.js"]),"/src/views/frontend/fate/index.vue":()=>e(()=>import("./index-b5de9baf.js"),["assets/index-b5de9baf.js","assets/header-55e7bca2.js","assets/index-89e26330.js","assets/logo-dbed91f4.js","assets/memberCenter-893be883.js","assets/menu-c85258cb.js","assets/chat-bf38729b.js","assets/chat-5c60e301.js","assets/chat-57a81274.js","assets/chat-9567bdf0.js","assets/timeToDate-4f013b84.js","assets/sendMsg-5cc92924.js","assets/chat-3c5e52ec.js","assets/chat_footer-c5137e25.js","assets/footer-4ed993c7.js"]),"/src/views/frontend/gpt4/components/chat.vue":()=>e(()=>import("./chat-15397544.js"),["assets/chat-15397544.js","assets/chat-5c60e301.js","assets/userGpt4-d36019d4.js","assets/timeToDate-4f013b84.js","assets/index-89e26330.js","assets/chat-3c5e52ec.js"]),"/src/views/frontend/gpt4/components/chat_footer.vue":()=>e(()=>import("./chat_footer-f4f053de.js"),["assets/chat_footer-f4f053de.js","assets/chat-9567bdf0.js","assets/index-89e26330.js","assets/gpt4-65d15dd9.js","assets/userGpt4-d36019d4.js"]),"/src/views/frontend/gpt4/components/chat_list.vue":()=>e(()=>import("./chat_list-084a7a5d.js"),["assets/chat_list-084a7a5d.js","assets/userGpt4-d36019d4.js","assets/gpt4-65d15dd9.js","assets/index-89e26330.js","assets/menu-c85258cb.js"]),"/src/views/frontend/gpt4/index.vue":()=>e(()=>import("./index-e2434071.js"),["assets/index-e2434071.js","assets/header-55e7bca2.js","assets/index-89e26330.js","assets/logo-dbed91f4.js","assets/memberCenter-893be883.js","assets/menu-c85258cb.js","assets/chat-15397544.js","assets/chat-5c60e301.js","assets/userGpt4-d36019d4.js","assets/timeToDate-4f013b84.js","assets/chat-3c5e52ec.js","assets/chat_footer-f4f053de.js","assets/chat-9567bdf0.js","assets/gpt4-65d15dd9.js","assets/chat_list-084a7a5d.js"]),"/src/views/frontend/index.vue":()=>e(()=>import("./index-5f33039b.js"),["assets/index-5f33039b.js","assets/header-55e7bca2.js","assets/index-89e26330.js","assets/logo-dbed91f4.js","assets/memberCenter-893be883.js","assets/menu-c85258cb.js"]),"/src/views/frontend/user/account/balance.vue":()=>e(()=>import("./balance-432ce63b.js"),["assets/balance-432ce63b.js","assets/index-89e26330.js","assets/memberCenter-893be883.js"]),"/src/views/frontend/user/account/carmi.vue":()=>e(()=>import("./carmi-535e1434.js"),["assets/carmi-535e1434.js","assets/index-89e26330.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js"]),"/src/views/frontend/user/account/changePassword.vue":()=>e(()=>import("./changePassword-06a4e218.js"),["assets/changePassword-06a4e218.js","assets/index-89e26330.js","assets/validate-e09b6b50.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js"]),"/src/views/frontend/user/account/integral.vue":()=>e(()=>import("./integral-433b05d5.js"),["assets/integral-433b05d5.js","assets/index-89e26330.js","assets/memberCenter-893be883.js"]),"/src/views/frontend/user/account/overview.vue":()=>e(()=>import("./overview-9f6f69fb.js"),["assets/overview-9f6f69fb.js","assets/index-89e26330.js","assets/timeToDate-4f013b84.js"]),"/src/views/frontend/user/account/paylog.vue":()=>e(()=>import("./paylog-977ed329.js"),["assets/paylog-977ed329.js","assets/index-89e26330.js","assets/memberCenter-893be883.js"]),"/src/views/frontend/user/account/profile.vue":()=>e(()=>import("./profile-31255ede.js"),["assets/profile-31255ede.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/frontend/user/login copy.vue":()=>e(()=>import("./login copy-2cafc5f5.js"),["assets/login copy-2cafc5f5.js","assets/header-55e7bca2.js","assets/index-89e26330.js","assets/logo-dbed91f4.js","assets/memberCenter-893be883.js","assets/menu-c85258cb.js","assets/footer-c2b5a3bf.js","assets/validate-e09b6b50.js","assets/loginFooter-088178d1.js"]),"/src/views/frontend/user/login.vue":()=>e(()=>import("./login-cc8ed988.js"),["assets/login-cc8ed988.js","assets/index-89e26330.js","assets/memberCenter-893be883.js","assets/validate-e09b6b50.js","assets/loginFooter-088178d1.js","assets/menu-c85258cb.js"]),"/src/views/frontend/writing/components/chat.vue":()=>e(()=>import("./chat-6fb126cb.js"),["assets/chat-6fb126cb.js","assets/chat-5c60e301.js","assets/chat-57a81274.js","assets/index-89e26330.js","assets/chat-9567bdf0.js","assets/timeToDate-4f013b84.js","assets/sendMsg-a3a0181a.js","assets/chat-3c5e52ec.js"]),"/src/views/frontend/writing/components/chat_footer.vue":()=>e(()=>import("./chat_footer-edace96f.js"),["assets/chat_footer-edace96f.js","assets/footer-4ed993c7.js","assets/sendMsg-a3a0181a.js","assets/chat-57a81274.js","assets/index-89e26330.js","assets/chat-9567bdf0.js"]),"/src/views/frontend/writing/index.vue":()=>e(()=>import("./index-2f1c8714.js"),["assets/index-2f1c8714.js","assets/header-55e7bca2.js","assets/index-89e26330.js","assets/logo-dbed91f4.js","assets/memberCenter-893be883.js","assets/menu-c85258cb.js","assets/chat-6fb126cb.js","assets/chat-5c60e301.js","assets/chat-57a81274.js","assets/chat-9567bdf0.js","assets/timeToDate-4f013b84.js","assets/sendMsg-a3a0181a.js","assets/chat-3c5e52ec.js","assets/chat_footer-edace96f.js","assets/footer-4ed993c7.js"])}),i,l.name);const r="/"+l.name+"/",o=a(i,r,r),s=L();s.setViewRoutes(o),s.setShowHeadline(i.length>1)},C=i=>{v(Object.assign({"/src/views/backend/apikey/index.vue":()=>e(()=>import("./index-cdec4632.js"),["assets/index-cdec4632.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-c2347a2c.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/apikey/popupForm.vue":()=>e(()=>import("./popupForm-d1e1db96.js"),["assets/popupForm-d1e1db96.js","assets/popupForm.vue_vue_type_script_setup_true_lang-c2347a2c.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/auth/admin/index.vue":()=>e(()=>import("./index-4b4a7dfa.js"),["assets/index-4b4a7dfa.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-860bebeb.js","assets/validate-e09b6b50.js","assets/index-39d73c69.js"]),"/src/views/backend/auth/admin/popupForm.vue":()=>e(()=>import("./popupForm-860bebeb.js"),["assets/popupForm-860bebeb.js","assets/validate-e09b6b50.js","assets/index-89e26330.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js"]),"/src/views/backend/auth/adminLog/index.vue":()=>e(()=>import("./index-4504fb2f.js"),["assets/index-4504fb2f.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/info-cbb2b841.js"]),"/src/views/backend/auth/adminLog/info.vue":()=>e(()=>import("./info-cbb2b841.js"),["assets/info-cbb2b841.js","assets/index-89e26330.js"]),"/src/views/backend/auth/group/index.vue":()=>e(()=>import("./index-e1c8d85f.js"),["assets/index-e1c8d85f.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-993bee33.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/auth/group/popupForm.vue":()=>e(()=>import("./popupForm-993bee33.js"),["assets/popupForm-993bee33.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/auth/menu/index.vue":()=>e(()=>import("./index-3c948a28.js"),["assets/index-3c948a28.js","assets/controllerUrls-941681c3.js","assets/popupForm.vue_vue_type_script_setup_true_lang-2f16bc32.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/auth/menu/popupForm.vue":()=>e(()=>import("./popupForm-02be3d32.js"),["assets/popupForm-02be3d32.js","assets/popupForm.vue_vue_type_script_setup_true_lang-2f16bc32.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/carmi/index.vue":()=>e(()=>import("./index-321060b7.js"),["assets/index-321060b7.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e439145e.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js","assets/pladd-43512f1a.js"]),"/src/views/backend/carmi/pladd.vue":()=>e(()=>import("./pladd-43512f1a.js"),["assets/pladd-43512f1a.js","assets/index-89e26330.js"]),"/src/views/backend/carmi/popupForm.vue":()=>e(()=>import("./popupForm-a21c7e9b.js"),["assets/popupForm-a21c7e9b.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e439145e.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/chat/idFieldRender.vue":()=>e(()=>import("./idFieldRender-55de5180.js"),["assets/idFieldRender-55de5180.js","assets/chat-3c5e52ec.js","assets/index-89e26330.js"]),"/src/views/backend/chat/index.vue":()=>e(()=>import("./index-50e24000.js"),["assets/index-50e24000.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e103de59.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js","assets/idFieldRender-55de5180.js","assets/chat-3c5e52ec.js"]),"/src/views/backend/chat/popupForm.vue":()=>e(()=>import("./popupForm-2b5c5d60.js"),["assets/popupForm-2b5c5d60.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e103de59.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/crud/design.vue":()=>e(()=>import("./design-57e03e6d.js"),["assets/design-57e03e6d.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/index-39d73c69.js","assets/crud-ccf00dde.js","assets/validate-e09b6b50.js","assets/isSymbol-5418c187.js"]),"/src/views/backend/crud/index.vue":()=>e(()=>import("./index-2e180a67.js"),["assets/index-2e180a67.js","assets/start-fb3d81b4.js","assets/crud-ccf00dde.js","assets/index-89e26330.js","assets/validate-e09b6b50.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/index-39d73c69.js","assets/log.vue_vue_type_style_index_0_lang-4af47868.js","assets/design-57e03e6d.js","assets/isSymbol-5418c187.js"]),"/src/views/backend/crud/log.vue":()=>e(()=>import("./log-69c7387f.js"),["assets/log-69c7387f.js","assets/log.vue_vue_type_style_index_0_lang-4af47868.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/crud-ccf00dde.js","assets/validate-e09b6b50.js"]),"/src/views/backend/crud/start.vue":()=>e(()=>import("./start-fb3d81b4.js"),["assets/start-fb3d81b4.js","assets/crud-ccf00dde.js","assets/index-89e26330.js","assets/validate-e09b6b50.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/index-39d73c69.js","assets/log.vue_vue_type_style_index_0_lang-4af47868.js"]),"/src/views/backend/dashboard.vue":()=>e(()=>import("./dashboard-e6458054.js"),["assets/dashboard-e6458054.js","assets/index-89e26330.js"]),"/src/views/backend/login.vue":()=>e(()=>import("./login-2cb929ef.js"),["assets/login-2cb929ef.js","assets/index-89e26330.js","assets/index-afb9c73e.js","assets/validate-e09b6b50.js"]),"/src/views/backend/module/components/baAccount.vue":()=>e(()=>import("./baAccount-08911558.js"),["assets/baAccount-08911558.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js","assets/store-fda3112c.js"]),"/src/views/backend/module/components/buy.vue":()=>e(()=>import("./buy-fd37dd8a.js"),["assets/buy-fd37dd8a.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js"]),"/src/views/backend/module/components/commonDialog.vue":()=>e(()=>import("./commonDialog-ebc23466.js"),["assets/commonDialog-ebc23466.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/installConflict-e4cf7e5b.js","assets/index-411a3130.js","assets/commonDone-304fd185.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/uploadInstall-eb2f273d.js","assets/confirmFileConflict-fd50c857.js"]),"/src/views/backend/module/components/commonDone.vue":()=>e(()=>import("./commonDone-304fd185.js"),["assets/commonDone-304fd185.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js"]),"/src/views/backend/module/components/confirmFileConflict.vue":()=>e(()=>import("./confirmFileConflict-fd50c857.js"),["assets/confirmFileConflict-fd50c857.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js"]),"/src/views/backend/module/components/goodsInfo.vue":()=>e(()=>import("./goodsInfo-ef5b79af.js"),["assets/goodsInfo-ef5b79af.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js","assets/buy-fd37dd8a.js","assets/pay-4f498a0e.js"]),"/src/views/backend/module/components/installConflict.vue":()=>e(()=>import("./installConflict-e4cf7e5b.js"),["assets/installConflict-e4cf7e5b.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js"]),"/src/views/backend/module/components/pay.vue":()=>e(()=>import("./pay-4f498a0e.js"),["assets/pay-4f498a0e.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js"]),"/src/views/backend/module/components/tableHeader.vue":()=>e(()=>import("./tableHeader-a393ccdf.js"),["assets/tableHeader-a393ccdf.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js"]),"/src/views/backend/module/components/tabs.vue":()=>e(()=>import("./tabs-56c4668d.js"),["assets/tabs-56c4668d.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js"]),"/src/views/backend/module/components/uploadInstall.vue":()=>e(()=>import("./uploadInstall-eb2f273d.js"),["assets/uploadInstall-eb2f273d.js","assets/index-89e26330.js","assets/store-fda3112c.js","assets/index-411a3130.js"]),"/src/views/backend/module/index.vue":()=>e(()=>import("./index-d94cfdce.js"),["assets/index-d94cfdce.js","assets/store-fda3112c.js","assets/index-89e26330.js","assets/index-411a3130.js","assets/tableHeader-a393ccdf.js","assets/baAccount-08911558.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js","assets/tabs-56c4668d.js","assets/goodsInfo-ef5b79af.js","assets/buy-fd37dd8a.js","assets/pay-4f498a0e.js","assets/commonDialog-ebc23466.js","assets/installConflict-e4cf7e5b.js","assets/commonDone-304fd185.js","assets/uploadInstall-eb2f273d.js","assets/confirmFileConflict-fd50c857.js"]),"/src/views/backend/pay/index.vue":()=>e(()=>import("./index-77468e70.js"),["assets/index-77468e70.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-cf892f72.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/pay/popupForm.vue":()=>e(()=>import("./popupForm-c5a36e3c.js"),["assets/popupForm-c5a36e3c.js","assets/popupForm.vue_vue_type_script_setup_true_lang-cf892f72.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/product/index.vue":()=>e(()=>import("./index-1b72a09d.js"),["assets/index-1b72a09d.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-34be18a2.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/product/popupForm.vue":()=>e(()=>import("./popupForm-a65c6555.js"),["assets/popupForm-a65c6555.js","assets/popupForm.vue_vue_type_script_setup_true_lang-34be18a2.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/questions/index.vue":()=>e(()=>import("./index-7325edfd.js"),["assets/index-7325edfd.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-9d30a2a3.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/questions/popupForm.vue":()=>e(()=>import("./popupForm-adce84bf.js"),["assets/popupForm-adce84bf.js","assets/popupForm.vue_vue_type_script_setup_true_lang-9d30a2a3.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/questionsType/index.vue":()=>e(()=>import("./index-5901a9ba.js"),["assets/index-5901a9ba.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-482044eb.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/questionsType/popupForm.vue":()=>e(()=>import("./popupForm-ce2ba583.js"),["assets/popupForm-ce2ba583.js","assets/popupForm.vue_vue_type_script_setup_true_lang-482044eb.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/routine/adminInfo.vue":()=>e(()=>import("./adminInfo-d4ed7bdc.js"),["assets/adminInfo-d4ed7bdc.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/validate-e09b6b50.js"]),"/src/views/backend/routine/attachment/index.vue":()=>e(()=>import("./index-36c3d9bf.js"),["assets/index-36c3d9bf.js","assets/popupForm-95e74977.js","assets/index-d3b20950.js","assets/index-89e26330.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/routine/attachment/popupForm.vue":()=>e(()=>import("./popupForm-95e74977.js"),["assets/popupForm-95e74977.js","assets/index-d3b20950.js","assets/index-89e26330.js"]),"/src/views/backend/routine/config/add.vue":()=>e(()=>import("./add-39b1eb7e.js"),["assets/add-39b1eb7e.js","assets/add.vue_vue_type_script_setup_true_lang-a8af4230.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/routine/config/index copy.vue":()=>e(()=>import("./index copy-dde1a4a0.js"),["assets/index copy-dde1a4a0.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/add.vue_vue_type_script_setup_true_lang-a8af4230.js","assets/validate-e09b6b50.js","assets/memberCenter-893be883.js"]),"/src/views/backend/routine/config/index.vue":()=>e(()=>import("./index-3299e658.js"),["assets/index-3299e658.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/add.vue_vue_type_script_setup_true_lang-a8af4230.js","assets/validate-e09b6b50.js","assets/memberCenter-893be883.js"]),"/src/views/backend/routine/dataexport/index.vue":()=>e(()=>import("./index-d5de0e7a.js"),["assets/index-d5de0e7a.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-1893afef.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js","assets/dataexport-8c4f458b.js"]),"/src/views/backend/routine/dataexport/popupForm.vue":()=>e(()=>import("./popupForm-1893afef.js"),["assets/popupForm-1893afef.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js","assets/dataexport-8c4f458b.js"]),"/src/views/backend/routine/dataexport/taskControl.vue":()=>e(()=>import("./taskControl-c83d9b64.js"),["assets/taskControl-c83d9b64.js","assets/index-89e26330.js","assets/dataexport-8c4f458b.js"]),"/src/views/backend/routine/settingIndex.vue":()=>e(()=>import("./settingIndex-e93addf4.js"),["assets/settingIndex-e93addf4.js","assets/index-89e26330.js"]),"/src/views/backend/security/dataRecycle/index.vue":()=>e(()=>import("./index-d318ef03.js"),["assets/index-d318ef03.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-e93547bf.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/security/dataRecycle/popupForm.vue":()=>e(()=>import("./popupForm-e93547bf.js"),["assets/popupForm-e93547bf.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/security/dataRecycleLog/index.vue":()=>e(()=>import("./index-0616c65a.js"),["assets/index-0616c65a.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/info-8a024c51.js"]),"/src/views/backend/security/dataRecycleLog/info.vue":()=>e(()=>import("./info-8a024c51.js").then(n=>n.a),["assets/info-8a024c51.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/security/sensitiveData/index.vue":()=>e(()=>import("./index-6dd1ea98.js"),["assets/index-6dd1ea98.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-41630086.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/security/sensitiveData/popupForm.vue":()=>e(()=>import("./popupForm-41630086.js"),["assets/popupForm-41630086.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/security/sensitiveDataLog/index.vue":()=>e(()=>import("./index-47956ef4.js"),["assets/index-47956ef4.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/info-7a8bb118.js"]),"/src/views/backend/security/sensitiveDataLog/info.vue":()=>e(()=>import("./info-7a8bb118.js").then(n=>n.a),["assets/info-7a8bb118.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js"]),"/src/views/backend/sms/config.vue":()=>e(()=>import("./config-d7722aaa.js"),["assets/config-d7722aaa.js","assets/index-89e26330.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js"]),"/src/views/backend/sms/template/index.vue":()=>e(()=>import("./index-3fcecc75.js"),["assets/index-3fcecc75.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e4b4385d.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/sms/template/popupForm.vue":()=>e(()=>import("./popupForm-899233a4.js"),["assets/popupForm-899233a4.js","assets/popupForm.vue_vue_type_script_setup_true_lang-e4b4385d.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/sms/variable/index.vue":()=>e(()=>import("./index-847aef8c.js"),["assets/index-847aef8c.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm.vue_vue_type_script_setup_true_lang-720e74d6.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/sms/variable/popupForm.vue":()=>e(()=>import("./popupForm-e63c338b.js"),["assets/popupForm-e63c338b.js","assets/popupForm.vue_vue_type_script_setup_true_lang-720e74d6.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/group/index.vue":()=>e(()=>import("./index-a9d6eb94.js"),["assets/index-a9d6eb94.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-ae9ee213.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/group/popupForm.vue":()=>e(()=>import("./popupForm-ae9ee213.js"),["assets/popupForm-ae9ee213.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/moneyLog/index.vue":()=>e(()=>import("./index-f0b8da1a.js"),["assets/index-f0b8da1a.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-29bcd487.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js","assets/parseInt-2b359481.js","assets/isSymbol-5418c187.js"]),"/src/views/backend/user/moneyLog/popupForm.vue":()=>e(()=>import("./popupForm-29bcd487.js").then(n=>n.p),["assets/popupForm-29bcd487.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/rule/index.vue":()=>e(()=>import("./index-f3276bd5.js"),["assets/index-f3276bd5.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-b2117632.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/rule/popupForm.vue":()=>e(()=>import("./popupForm-b2117632.js"),["assets/popupForm-b2117632.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/scoreLog/index.vue":()=>e(()=>import("./index-946a3f0b.js"),["assets/index-946a3f0b.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-496b88a9.js","assets/index-39d73c69.js","assets/validate-e09b6b50.js","assets/parseInt-2b359481.js","assets/isSymbol-5418c187.js"]),"/src/views/backend/user/scoreLog/popupForm.vue":()=>e(()=>import("./popupForm-496b88a9.js").then(n=>n.p),["assets/popupForm-496b88a9.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/index-d3b20950.js","assets/validate-e09b6b50.js"]),"/src/views/backend/user/user/index.vue":()=>e(()=>import("./index-134e5add.js"),["assets/index-134e5add.js","assets/index-0a827c2c.js","assets/index-89e26330.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js","assets/popupForm-9d772436.js","assets/validate-e09b6b50.js","assets/index-39d73c69.js"]),"/src/views/backend/user/user/popupForm.vue":()=>e(()=>import("./popupForm-9d772436.js"),["assets/popupForm-9d772436.js","assets/validate-e09b6b50.js","assets/index-89e26330.js","assets/index-39d73c69.js","assets/index-0a827c2c.js","assets/controllerUrls-941681c3.js","assets/index-d3b20950.js"])}),i,E.name);const r="/"+E.name+"/",o=a(i,r,r);b().setTabsViewRoutes(o)},a=(i,t="/",r="/",o="admin")=>{const s=[],n=[];for(const _ in i)if(i[_].extend!="add_rules_only")if(i[_].type=="menu"||i[_].type=="menu_dir"){if(i[_].type=="menu_dir"&&i[_].children&&!i[_].children.length)continue;const p=i[_].menu_type=="link"||i[_].menu_type=="iframe"?i[_].url:t+i[_].path;let m=[];i[_].children&&i[_].children.length>0&&(m=a(i[_].children,t,p)),s.push({path:p,name:i[_].name,component:i[_].component,meta:{title:i[_].title,icon:i[_].icon,keepalive:i[_].keepalive,type:i[_].menu_type},children:m})}else n.push(t+i[_].name);return n.length&&(o=="admin"?b().setAuthNode(r,n):o=="user"&&L().setAuthNode(r,n)),s},v=(i,t,r)=>{for(const o in t)t[o].extend!="add_menu_only"&&(t[o].type=="menu"&&(t[o].menu_type=="tab"&&i[t[o].component]||t[o].menu_type=="iframe")&&V(i,t[o],r),t[o].children&&t[o].children.length>0&&v(i,t[o].children,r))},V=(i,t,r)=>{let o="",s;t.menu_type=="iframe"?(o=(D()?"/admin":"/user")+"/iframe/"+encodeURIComponent(t.url),s=()=>e(()=>import("./iframe-58373ff0.js"),["assets/iframe-58373ff0.js","assets/layout-790be4ff.js","assets/index-89e26330.js"])):(o=r?t.path:"/"+t.path,s=i[t.component]);const n={path:o,name:t.name,component:s,meta:{title:t.title,extend:t.extend,icon:t.icon,keepalive:t.keepalive,menu_type:t.menu_type,type:t.type,url:t.url,addtab:!0}};r?d.addRoute(r,n):d.addRoute(n)};export{C as a,A as c,P as g,F as h,x as o,O as r,y as s};