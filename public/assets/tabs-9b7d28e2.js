import{s as t}from"./store-55046527.js";import{i as D,h as I,m as S,c as v}from"./index-9c7f2a4c.js";import{f as B,_ as L}from"./index-714877db.js";import{h as U,p as s,l as o,N as $,k as a,C as r,D as i,P as p,O as u,t as n,R as z,o as l,q as g,U as m,M as c,S as E}from"./vue-8b21a996.js";const q=["onClick"],A={class:"goods-footer"},F={key:0,class:"goods-tag"},M={class:"goods-title"},O={class:"goods-data"},P={class:"download-count"},R={key:0,class:"goods-price"},j={class:"original-price"},G={class:"current-price"},H={key:1,class:"goods-price"},J=U({__name:"tabs",setup(K){const h=()=>{D()};return(b,f)=>{const k=n("el-image"),y=n("el-tag"),T=n("Icon"),C=n("el-empty"),N=n("el-tab-pane"),w=n("el-tabs"),x=z("loading");return s(),o("div",null,[$((s(),r(w,{"element-loading-text":b.$t("module.Loading"),modelValue:a(t).table.params.activeTab,"onUpdate:modelValue":f[0]||(f[0]=d=>a(t).table.params.activeTab=d),type:"border-card",class:"store-tabs",onTabChange:h},{default:i(()=>[(s(!0),o(p,null,u(a(t).table.category,d=>(s(),r(N,{name:d.id.toString(),key:d.id,label:d.name,class:"store-tab-pane"},{default:i(()=>[a(t).table.modules[a(t).table.params.activeTab]&&a(t).table.modules[a(t).table.params.activeTab].length>0?(s(!0),o(p,{key:0},u(a(t).table.modules[a(t).table.params.activeTab],e=>(s(),o("div",{class:"goods",key:e.uid},[l("div",{onClick:_=>a(I)(e.uid),class:"goods-item suspension"},[g(k,{loading:"lazy",fit:"contain",class:"goods-img",src:e.logo?e.logo:a(B)("/static/images/local-module-logo.png")},null,8,["src"]),l("div",A,[e.tags&&e.tags.length>0?(s(),o("div",F,[(s(!0),o(p,null,u(e.tags,(_,V)=>(s(),r(y,{type:_.type,key:V},{default:i(()=>[m(c(_.name),1)]),_:2},1032,["type"]))),128))])):E("",!0),l("div",M,c(e.title),1),l("div",O,[l("span",P,[g(T,{name:"fa fa-download",color:"#c0c4cc",size:"13"}),m(" "+c(e.downloads?e.downloads:"-"),1)]),e.state===a(S).UNINSTALLED?(s(),o("span",R,[l("span",j,c(a(v)(e.original_price,e.currency_select)),1),l("span",G,c(a(v)(e.present_price,e.currency_select)),1)])):(s(),o("div",H,[g(y,{effect:"dark",type:e.stateTag.type},{default:i(()=>[m(c(e.stateTag.text),1)]),_:2},1032,["type"])]))])])],8,q)]))),128)):(s(),r(C,{key:1,class:"modules-empty",description:b.$t("module.No more")},null,8,["description"]))]),_:2},1032,["name","label"]))),128))]),_:1},8,["element-loading-text","modelValue"])),[[x,a(t).loading.table]])])}}});const Z=L(J,[["__scopeId","data-v-3f1791bf"]]);export{Z as default};