import{b as g,T as k,a as I}from"./index-b2d35f6a.js";import{i as L}from"./controllerUrls-941681c3.js";import{a as E,P as q}from"./popupForm-eb94e28c.js";import{l as w,Y as v}from"./index-36779712.js";import{h as d,L as N,r as S,aA as z,B as C,p as l,l as R,k as a,C as u,S as i,q as n,D as m,i as A,N as D,o as P,M as T,F as U,t as p,ap as x,R as B}from"./vue-8b21a996.js";import"./index-0d1dfc75.js";import"./index-ebfda3ce.js";import"./validate-fd871b41.js";const F={class:"default-main ba-table-box"},G={class:"table-header-operate-text"},K=d({name:"user/moneyLog"}),X=d({...K,setup(M){const{t:e}=w(),b=N(),f=U().query.user_id??"",t=S({userInfo:{}}),r=new g(new v(L),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("user.moneyLog.User ID"),prop:"user_id",align:"center",operator:"=",width:70},{label:e("user.moneyLog.User name"),prop:"user.username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.User nickname"),prop:"user.nickname",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:e("user.moneyLog.Change balance"),prop:"money",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.Before change"),prop:"before",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.After change"),prop:"after",align:"center",operator:"RANGE",sortable:"custom"},{label:e("user.moneyLog.remarks"),prop:"memo",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),"show-overflow-tooltip":!0},{label:e("createtime"),prop:"createtime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160}],dblClickNotEditColumn:["all"]},{defaultItems:{user_id:f,memo:""}},{},{onSubmit:()=>{s(r.comSearch.form.user_id)}});r.mount(),r.getIndex(),x("baTable",r);const s=o=>{o&&z(o)>0?E(o).then(c=>{t.userInfo=c.data.user}):t.userInfo={}};return s(r.comSearch.form.user_id),C(()=>r.comSearch.form.user_id,o=>{r.form.defaultItems.user_id=o,s(o)}),(o,c)=>{const h=p("el-alert"),_=p("el-button"),y=B("blur");return l(),R("div",F,[a(r).table.remark?(l(),u(h,{key:0,class:"ba-table-alert",title:a(r).table.remark,type:"info","show-icon":""},null,8,["title"])):i("",!0),n(k,{buttons:["refresh","add","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("user.moneyLog.User name")+"/"+a(e)("user.moneyLog.User nickname")})},{default:m(()=>[a(A)(t.userInfo)?i("",!0):D((l(),u(_,{key:0,class:"table-header-operate"},{default:m(()=>[P("span",G,T(t.userInfo.username+"(ID:"+t.userInfo.id+") "+a(e)("user.moneyLog.balance")+":"+t.userInfo.money),1)]),_:1})),[[y]])]),_:1},8,["quick-search-placeholder"]),n(I,{ref_key:"tableRef",ref:b},null,512),n(q)])}}});export{X as default};
