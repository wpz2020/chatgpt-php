import{H as p}from"./header-5600c090.js";import u from"./chat-c66f8d97.js";import h from"./chat_footer-f7c163bc.js";import{_ as g,H as c,o as x,c as y,a as e,b as t,e as o,f as v,I as H,j as C}from"./index-9250cf41.js";import"./logo-dbed91f4.js";import"./memberCenter-56f43a26.js";import"./menu-83125494.js";import"./chat-5c60e301.js";import"./chat-0b571d6e.js";import"./chat-608f0192.js";import"./timeToDate-4f013b84.js";import"./sendMsg-7b8c4cc8.js";import"./chat-b08578f0.js";import"./footer-4ed993c7.js";const b={class:"common-layout"},w={__name:"index",setup(B){let n=c("800px"),i=c(72),a="";function _(r){document.body.offsetWidth<850&&(r=50);let l=String(document.body.offsetHeight-r)+"px";n.value=l}return x(()=>{_(i.value),window.onresize=()=>(()=>{a=document.getElementById("chat-header"),n.value=a.offsetHeight,_(a.offsetHeight)})()}),(r,l)=>{const m=o("el-header"),d=o("el-main"),f=o("el-footer"),s=o("el-container");return v(),y("div",b,[e(s,null,{default:t(()=>[e(m,null,{default:t(()=>[e(p)]),_:1}),e(s,{class:"chat-content",style:H({height:C(n)})},{default:t(()=>[e(s,null,{default:t(()=>[e(d,{class:"chat-main"},{default:t(()=>[e(u)]),_:1}),e(f,{class:"chat-footer"},{default:t(()=>[e(h)]),_:1})]),_:1})]),_:1},8,["style"])]),_:1})])}}},G=g(w,[["__scopeId","data-v-0429afe9"]]);export{G as default};