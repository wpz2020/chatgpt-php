import{c as B,l as E,a as L,a5 as P,a6 as R,a7 as q,_ as F}from"./index-714877db.js";import{h as G,Q as O,L as S,r as T,A as Q,ag as W,at as H,t as p,p as d,l as h,q as t,D as e,o as n,M as r,k as a,U as _,C as y,S as J,P as N,O as V,T as K,m as w,V as X,W as Y}from"./vue-8b21a996.js";import{a as $}from"./timeToDate-4f013b84.js";const Z="/api/product/";function ee(){return B({url:Z+"index",method:"get"})}const te="/api/hu_pi_jiao_pay/";function se(u){return B({url:te+"index",method:"post",data:u})}const ae=u=>(X("data-v-70b39381"),u=u(),Y(),u),oe={class:"user-views"},ne={class:"card-header"},le={class:"overview-userinfo"},ce={class:"user-data"},re={class:"welcome-words"},de={class:"card-header"},ie=ae(()=>n("span",null,"开通VIP，尊享会员特权",-1)),_e=["onClick"],ue={class:"chat-vip-dec"},pe={class:"to-pay-01"},me=G({__name:"overview",setup(u){E(),O();const l=L();S();const m=T({days:[],score:[],money:[],charts:[]});let x=S(0),U=o=>{x.value=o},f=T({products:{},product_name:""}),z=async()=>{let o={};o.product=f.products[x.value],o.userinfo=l.getUserInfo();let c=await se(o);c.data.errmsg=="success!"&&window.open(c.data.url)},D=o=>o.split(`
`);Q(async()=>{let o=new Date().getTime();l.id!=0&&l.end_time!=0&&o>l.end_time*1e3&&(l.setNum(0),P({id:l.id,num:0}));let c=await ee();c.code==1&&(f.products=c.data,c.data.forEach(s=>{s.id==l.product_id&&(f.product_name=s.name)})),R().then(s=>{m.days=s.data.days,m.score=s.data.score,m.money=s.data.money})}),W(()=>{for(const o in m.charts)m.charts[o].dispose()});let{products:A,product_name:M}=H(f);return(o,c)=>{const s=p("el-col"),g=p("el-link"),v=p("el-row"),k=p("el-card"),I=p("el-button"),j=p("Icon");return d(),h("div",oe,[t(k,{class:"user-views-card",shadow:"hover"},{header:e(()=>[n("div",ne,[n("span",null,r(o.$t("user.account.overview.Account information")),1)])]),default:e(()=>[n("div",le,[n("div",ce,[n("div",re,r(a(l).nickname+o.$t("utils.comma")+a(q)()),1),t(v,{class:"data-item chat-isvip"},{default:e(()=>[t(s,{xs:10,sm:10,md:8,lg:6,xl:2},{default:e(()=>[_("会员")]),_:1}),t(s,{xs:14,sm:14,md:16,lg:16,xl:16},{default:e(()=>[a(l).product_id!=0?(d(),y(g,{key:0,type:"primary"},{default:e(()=>[_(" 已开通 [ "+r(a(M))+" ] ",1)]),_:1})):(d(),y(g,{key:1,type:"primary"},{default:e(()=>[_(" 未开通 ")]),_:1}))]),_:1})]),_:1}),a(l).product_id!=0?(d(),y(v,{key:0,class:"data-item chat-isvip"},{default:e(()=>[t(s,{xs:10,sm:10,md:8,lg:6,xl:2},{default:e(()=>[_("有效期")]),_:1}),t(s,{xs:14,sm:14,md:16,lg:16,xl:16},{default:e(()=>[n("span",null,r(a($).setTime(a(l).start_time))+" 至 "+r(a($).setTime(a(l).end_time)),1)]),_:1})]),_:1})):J("",!0),t(v,{class:"data-item chat-isvip"},{default:e(()=>[t(s,{xs:10,sm:10,md:8,lg:6,xl:2},{default:e(()=>[_("剩余对话次数")]),_:1}),t(s,{xs:14,sm:14,md:16,lg:16,xl:16},{default:e(()=>[n("span",null,r(a(l).num)+" 次",1)]),_:1})]),_:1})])])]),_:1}),t(k,{class:"box-card"},{header:e(()=>[n("div",de,[ie,t(I,{class:"button",text:""})])]),default:e(()=>[t(v,null,{default:e(()=>[(d(!0),h(N,null,V(a(A),(i,C)=>(d(),y(s,{span:8,xs:24,sm:12,lg:8},{default:e(()=>[n("div",{class:K(["chat-vip",a(x)===C?"current-vip":""]),onClick:b=>a(U)(C)},[n("div",{class:"chat-vip-title",style:w({color:i.color})},[t(j,{name:"iconfont icon-vip1",style:w({color:i.color}),size:"22"},null,8,["style"]),_(" "+r(i.name),1)],4),n("div",{class:"chat-vip-price",style:w({color:i.color})},"￥ "+r(i.price),5),n("div",ue,[(d(!0),h(N,null,V(a(D)(i.dec),b=>(d(),h("p",null,r(b),1))),256))])],10,_e)]),_:2},1024))),256))]),_:1}),t(v,null,{default:e(()=>[t(s,{span:8,class:"to-pay"}),t(s,{span:8,class:"to-pay"}),t(s,{span:8,class:"to-pay"},{default:e(()=>[n("div",pe,[t(I,{type:"primary",onClick:c[0]||(c[0]=i=>a(z)())},{default:e(()=>[_("立即开通")]),_:1})])]),_:1})]),_:1})]),_:1})])}}});const ye=F(me,[["__scopeId","data-v-70b39381"]]);export{ye as default};