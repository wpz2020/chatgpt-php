import{s as t}from"./store-53b9bb5c.js";import{i as I,h as B,m as D,c as v}from"./index-cfdbc62c.js";import{d as L,f as s,c as o,z as S,j as a,Y as r,b as i,F as p,J as u,e as n,aC as z,g as l,a as g,B as U,h as m,i as c,x as $,_ as E}from"./index-9250cf41.js";const F=["onClick"],j={class:"goods-footer"},A={key:0,class:"goods-tag"},J={class:"goods-title"},Y={class:"goods-data"},q={class:"download-count"},G={key:0,class:"goods-price"},H={class:"original-price"},K={class:"current-price"},M={key:1,class:"goods-price"},O=L({__name:"tabs",setup(P){const h=()=>{I()};return(b,y)=>{const k=n("el-image"),f=n("el-tag"),T=n("Icon"),x=n("el-empty"),C=n("el-tab-pane"),w=n("el-tabs"),N=z("loading");return s(),o("div",null,[S((s(),r(w,{"element-loading-text":b.$t("module.Loading"),modelValue:a(t).table.params.activeTab,"onUpdate:modelValue":y[0]||(y[0]=d=>a(t).table.params.activeTab=d),type:"border-card",class:"store-tabs",onTabChange:h},{default:i(()=>[(s(!0),o(p,null,u(a(t).table.category,d=>(s(),r(C,{name:d.id.toString(),key:d.id,label:d.name,class:"store-tab-pane"},{default:i(()=>[a(t).table.modules[a(t).table.params.activeTab]&&a(t).table.modules[a(t).table.params.activeTab].length>0?(s(!0),o(p,{key:0},u(a(t).table.modules[a(t).table.params.activeTab],e=>(s(),o("div",{class:"goods",key:e.uid},[l("div",{onClick:_=>a(B)(e.uid),class:"goods-item suspension"},[g(k,{loading:"lazy",fit:"contain",class:"goods-img",src:e.logo?e.logo:a(U)("/static/images/local-module-logo.png")},null,8,["src"]),l("div",j,[e.tags&&e.tags.length>0?(s(),o("div",A,[(s(!0),o(p,null,u(e.tags,(_,V)=>(s(),r(f,{type:_.type,key:V},{default:i(()=>[m(c(_.name),1)]),_:2},1032,["type"]))),128))])):$("",!0),l("div",J,c(e.title),1),l("div",Y,[l("span",q,[g(T,{name:"fa fa-download",color:"#c0c4cc",size:"13"}),m(" "+c(e.downloads?e.downloads:"-"),1)]),e.state===a(D).UNINSTALLED?(s(),o("span",G,[l("span",H,c(a(v)(e.original_price,e.currency_select)),1),l("span",K,c(a(v)(e.present_price,e.currency_select)),1)])):(s(),o("div",M,[g(f,{effect:"dark",type:e.stateTag.type},{default:i(()=>[m(c(e.stateTag.text),1)]),_:2},1032,["type"])]))])])],8,F)]))),128)):(s(),r(x,{key:1,class:"modules-empty",description:b.$t("module.No more")},null,8,["description"]))]),_:2},1032,["name","label"]))),128))]),_:1},8,["element-loading-text","modelValue"])),[[N,a(t).loading.table]])])}}});const X=E(O,[["__scopeId","data-v-3f1791bf"]]);export{X as default};