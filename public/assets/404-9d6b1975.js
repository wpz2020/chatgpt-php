import{h as v,L as h,A as f,a5 as g,l as k,o as e,M as t,U as c,q as l,D as p,t as b,V as $,W as w,p as B,Q as C}from"./vue-8b21a996.js";import{_ as I}from"./index-36779712.js";const M="/assets/qr-de3b60c2.png",_=o=>($("data-v-8be15c25"),o=o(),w(),o),y={class:"page"},S={class:"container"},V=_(()=>e("div",{class:"font-h1"},":(",-1)),q={class:"tip"},N={class:"complete"},R={class:"percentage"},T={class:"details"},x=_(()=>e("div",{class:"qr-image"},[e("img",{src:M,alt:"QR Code"})],-1)),D={class:"stopcode"},Q={class:"stopcode-text"},U={class:"stopcode-text"},W=v({__name:"404",setup(o){const u=C(),a=h(0);var n=null;function m(){a.value+=Math.floor(Math.random()*50),a.value>=100?(a.value=100,u.back()):i()}function i(){n=setTimeout(m,Math.random()*(1e3-500)+500)}return f(()=>{i()}),g(()=>{clearTimeout(n)}),(s,r)=>{const d=b("router-link");return B(),k("div",y,[e("div",S,[V,e("div",q,t(s.$t("404.problems tip")),1),e("div",N,[c(t(s.$t("complete"))+" ",1),e("span",R,t(a.value),1),c("% ")]),e("div",T,[x,e("div",D,[e("div",Q,t(s.$t("404.We will automatically return to the previous page when we are finished")),1),e("div",U,[l(d,{class:"stopcode-a",to:""},{default:p(()=>[e("span",{onClick:r[0]||(r[0]=A=>s.$router.back())},t(s.$t("404.Back to previous page")),1)]),_:1}),l(d,{class:"stopcode-a",to:"/"},{default:p(()=>[c(t(s.$t("404.Return to home page")),1)]),_:1})])])])])])}}});const j=I(W,[["__scopeId","data-v-8be15c25"]]);export{j as default};
