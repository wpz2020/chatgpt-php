import{b as u,T as d,a as m}from"./index-7398acdb.js";import{j as b}from"./controllerUrls-941681c3.js";import f from"./popupForm-1216b600.js";import{l as g,Y as h,ac as _,N as k,ah as y}from"./index-fb3df3be.js";import{h as n,r as E,L as I,at as L,p as s,l as q,k as a,C as T,S as w,q as t,t as z,ap as C}from"./vue-8b21a996.js";import"./index-e2268c88.js";import"./validate-322d0259.js";import"./index-5ee44d7a.js";const K={class:"default-main ba-table-box"},P=n({name:"user/user"}),j=n({...P,setup(v){let l=E({product:{}});const{t:e}=g(),c=I(),r=new u(new h(b),{column:[{type:"selection",align:"center",operator:!1},{label:e("id"),prop:"id",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),width:70},{label:e("user.user.User name"),prop:"username",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query")},{label:"会员套餐",prop:"product_name",render:"tags",align:"center",operator:!1},{label:"剩余聊天次数",prop:"num",align:"center",operator:"LIKE"},{label:"会员起始时间",prop:"start_time",align:"center",render:"datetime",operator:"LIKE"},{label:"会员结束时间",prop:"end_time",align:"center",render:"datetime",operator:"LIKE"},{label:e("user.user.Last login IP"),prop:"lastloginip",align:"center",operator:"LIKE",operatorPlaceholder:e("Fuzzy query"),render:"tag"},{label:e("user.user.Last login"),prop:"lastlogintime",align:"center",render:"datetime",sortable:"custom",operator:"RANGE",width:160},{label:e("state"),prop:"status",align:"center",render:"tag",custom:{disable:"danger",enable:"success"},replaceValue:{disable:e("Disable"),enable:e("Enable")}},{label:e("operate"),align:"center",width:"100",render:"buttons",buttons:_(["edit","delete"]),operator:!1}],dblClickNotEditColumn:[void 0]},{defaultItems:{gender:0,money:"0",score:"0",status:"enable"}});let o=k(y,"",{});o.code==1&&(l.product=o.data),r.mount(),r.getIndex(),C("baTable",r);let{product:p}=L(l);return(N,S)=>{const i=z("el-alert");return s(),q("div",K,[a(r).table.remark?(s(),T(i,{key:0,class:"ba-table-alert",title:a(r).table.remark,type:"info","show-icon":""},null,8,["title"])):w("",!0),t(d,{buttons:["refresh","add","edit","delete","comSearch","quickSearch","columnDisplay"],"quick-search-placeholder":a(e)("quick Search Placeholder",{fields:a(e)("user.user.User name")+"/"+a(e)("user.user.nickname")})},null,8,["quick-search-placeholder"]),t(m,{ref_key:"tableRef",ref:c},null,512),t(f,{product:a(p)},null,8,["product"])])}}});export{j as default};
