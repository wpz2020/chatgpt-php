import{e as m,g as _,r as p,_ as f}from"./index-93f0d686.js";import{u as g,g as i,r as n}from"./router-591d826c.js";import{h as v,r as b,a2 as h,l as r,N as R,o as w,q as x,D as C,S as y,t as N,p as l,U as V,M as k,R as T}from"./vue-8b21a996.js";const D=["element-loading-text"],B={key:0,class:"loading-footer"},A=v({__name:"loading",setup(M){let a;const o=m(),s=g(),t=b({maximumWait:1e3*6,showReload:!1}),d=()=>{p.go(0)};if(_()&&o.state.tabsViewRoutes){let e=i(o.state.tabsViewRoutes);e&&n(e.path)}else if(s.state.viewRoutes){let e=i(s.state.viewRoutes);e&&n(e.path)}return a=setTimeout(()=>{t.showReload=!0},t.maximumWait),h(()=>{clearTimeout(a)}),(e,S)=>{const c=N("el-button"),u=T("loading");return l(),r("div",null,[R(w("div",{"element-loading-background":"var(--ba-bg-color-overlay)","element-loading-text":e.$t("utils.Loading"),class:"default-main ba-main-loading"},null,8,D),[[u,!0]]),t.showReload?(l(),r("div",B,[x(c,{onClick:d,type:"warning"},{default:C(()=>[V(k(e.$t("utils.Reload")),1)]),_:1})])):y("",!0)])}}});const q=f(A,[["__scopeId","data-v-9d8bb0fc"]]);export{q as default};
