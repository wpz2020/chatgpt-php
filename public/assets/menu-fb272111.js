import{d as h,k,e as _,f as C,Y as I,b as s,a as n,g as o,y as r,h as d,C as w,D as y,_ as $}from"./index-9250cf41.js";import{u as S}from"./menu-83125494.js";const m=a=>(w("data-v-eb1870ad"),a=a(),y(),a),b=m(()=>o("span",null,"首页",-1)),x=m(()=>o("span",null,"AI聊天",-1)),B=m(()=>o("span",null,"AI预测",-1)),N=h({__name:"menu",setup(a){const f=k();let p=S();const u=t=>{p.menuShow=!p.menuShow,f.push({name:t})};return(t,e)=>{const c=_("Icon"),l=_("el-col"),v=_("el-row");return C(),I(v,null,{default:s(()=>[n(l,{span:24},{default:s(()=>[o("div",{class:r(["menu-list",t.$route.meta.key=="home"?"current_nav":""]),onClick:e[0]||(e[0]=i=>u("/"))},[n(c,{name:"fa fa-code"}),d(),b],2)]),_:1}),n(l,{span:24},{default:s(()=>[o("div",{class:r(["menu-list",t.$route.meta.key=="chat"?"current_nav":""]),onClick:e[1]||(e[1]=i=>u("chat"))},[n(c,{name:"fa fa-code"}),d(),x],2)]),_:1}),n(l,{span:24},{default:s(()=>[o("div",{class:r(["menu-list",t.$route.meta.key=="fate"?"current_nav":""]),onClick:e[2]||(e[2]=i=>u("fate"))},[n(c,{name:"fa fa-code"}),d(),B],2)]),_:1})]),_:1})}}});const A=$(N,[["__scopeId","data-v-eb1870ad"]]);export{A as default};
