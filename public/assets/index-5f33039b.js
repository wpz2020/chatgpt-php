import{defineComponent as x,reactive as C,onMounted as b,watch as g,toRefs as k,resolveComponent as d,openBlock as z,createElementBlock as I,createVNode as o,withCtx as _,createElementVNode as t,createTextVNode as l,toDisplayString as i,unref as s}from"vue";import{useRouter as N}from"vue-router";import{H as R}from"./header-55e7bca2.js";import{u as V,_ as w}from"./index-89e26330.js";import{storeToRefs as B}from"pinia";import"./logo-dbed91f4.js";import"./memberCenter-893be883.js";import"./menu-c85258cb.js";import"vue-i18n";import"vue-demi";import"element-plus";const E={class:"common-layout"},H={class:"content-dec"},S={class:"dec-list"},T={class:"dec-title"},j={class:"dec-ico"},A={class:"dec-body"},D={class:"dec-list"},M={class:"dec-title"},$={class:"dec-ico"},q={class:"dec-body"},F={class:"dec-list"},G={class:"dec-title"},J={class:"dec-ico"},K={class:"dec-body"},L={class:"index-footer"},O=x({__name:"index",setup(P){const u=N();let n=C({syfrom:{}}),v=V();const{indexContent:m}=B(v);function f(){let e=m.value.split("#*#");n.syfrom.title1=e[0],n.syfrom.title2=e[2],n.syfrom.title3=e[4],n.syfrom.content1=e[1],n.syfrom.content2=e[3],n.syfrom.content3=e[5]}b(()=>{f()}),g(m,(e,a)=>{f()},{deep:!0});let{syfrom:c}=k(n);return(e,a)=>{const h=d("el-header"),r=d("Icon"),y=d("el-button"),p=d("el-container");return z(),I("div",E,[o(p,null,{default:_(()=>[o(h,null,{default:_(()=>[o(R)]),_:1}),o(p,{class:"index-content"},{default:_(()=>[t("div",H,[t("div",S,[t("div",T,[t("div",j,[o(r,{name:"iconfont icon-jiaoxuekeyan",size:"20"})]),l(" "+i(s(c).title1),1)]),t("div",A,i(s(c).content1),1)]),t("div",D,[t("div",M,[t("div",$,[o(r,{name:"iconfont icon-xinxiguanli",size:"20"})]),l(i(s(c).title2),1)]),t("div",q,i(s(c).content2),1)]),t("div",F,[t("div",G,[t("div",J,[o(r,{name:"iconfont icon-renliziyuan",size:"20"})]),l(i(s(c).title3),1)]),t("div",K,i(s(c).content3),1)])]),t("div",L,[o(y,{type:"primary",onClick:a[0]||(a[0]=Q=>s(u).push({name:"chat"}))},{default:_(()=>[l("进入AI聊天")]),_:1})])]),_:1})]),_:1})])}}});const it=w(O,[["__scopeId","data-v-99cf9064"]]);export{it as default};
