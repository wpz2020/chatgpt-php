import{ref as m,onMounted as f,resolveComponent as o,openBlock as u,createElementBlock as h,createVNode as e,withCtx as t,normalizeStyle as g,unref as x}from"vue";import{H as y}from"./header-55e7bca2.js";import v from"./chat-6fb126cb.js";import H from"./chat_footer-edace96f.js";import{_ as C}from"./index-89e26330.js";import"./logo-dbed91f4.js";import"vue-router";import"./memberCenter-893be883.js";import"pinia";import"./menu-c85258cb.js";import"./chat-5c60e301.js";import"./chat-57a81274.js";import"./chat-9567bdf0.js";import"./timeToDate-4f013b84.js";import"element-plus";import"./sendMsg-a3a0181a.js";import"./chat-3c5e52ec.js";import"./footer-4ed993c7.js";import"vue-i18n";import"vue-demi";const w={class:"common-layout"},B={__name:"index",setup(b){let n=m("800px"),c=m(72),r="";function _(i){document.body.offsetWidth<850&&(i=50);let l=String(document.body.offsetHeight-i)+"px";n.value=l}return f(()=>{_(c.value),window.onresize=()=>(()=>{r=document.getElementById("chat-header"),n.value=r.offsetHeight,_(r.offsetHeight)})()}),(i,l)=>{const p=o("el-header"),s=o("el-main"),d=o("el-footer"),a=o("el-container");return u(),h("div",w,[e(a,null,{default:t(()=>[e(p,null,{default:t(()=>[e(y)]),_:1}),e(a,{class:"chat-content",style:g({height:x(n)})},{default:t(()=>[e(a,null,{default:t(()=>[e(s,{class:"chat-main"},{default:t(()=>[e(v)]),_:1}),e(d,{class:"chat-footer"},{default:t(()=>[e(H)]),_:1})]),_:1})]),_:1},8,["style"])]),_:1})])}}},Q=C(B,[["__scopeId","data-v-0429afe9"]]);export{Q as default};
