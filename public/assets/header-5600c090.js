import{u as M,l as H,m as q,_ as K,n as v,r as Y,p as G,q as J,k as Q,v as W,o as X,s as Z,e as u,f as k,c as y,a as s,b as c,g as o,j as e,i as E,x as S,y as V,z as h,h as ee,A as f,B as $,F as te,C as se,D as oe,E as g}from"./index-9250cf41.js";import{_ as ae}from"./logo-dbed91f4.js";import{u as x}from"./memberCenter-56f43a26.js";import{u as ne}from"./menu-83125494.js";const re="/api/index/";function ie(){const l=M(),_=x();if(!l.siteName)return H({url:re+"index",method:"get"}).then(d=>{q(d.data.site.siteName),l.dataFill(d.data.site),_.setStatus(d.data.openMemberCenter),d.data.openMemberCenter||_.setLayoutMode("Disable")})}const le=l=>(se("data-v-91d4e399"),l=l(),oe(),l),ue=le(()=>o("img",{src:ae},null,-1)),ce={class:"site-name"},de={class:"chat-menu-right-phone2"},me={class:"chat-menu"},_e={class:"chat-menu-right-pc user-right"},pe={class:"chat-menu-right-phone"},ve={key:0,class:"system-chat"},he={__name:"header",setup(l){const _=v(()=>g(()=>import("./chat_list-6f62bf85.js"),["assets/chat_list-6f62bf85.js","assets/index-9250cf41.js","assets/chat-608f0192.js","assets/menu-83125494.js"])),d=v(()=>g(()=>import("./menu-fb272111.js"),["assets/menu-fb272111.js","assets/index-9250cf41.js","assets/menu-83125494.js"])),U=v(()=>g(()=>import("./aside-a0f5d033.js"),["assets/aside-a0f5d033.js","assets/index-9250cf41.js","assets/memberCenter-56f43a26.js","assets/router-c56b232f.js"])),z=v(()=>g(()=>import("./login-6599b8ec.js"),["assets/login-6599b8ec.js","assets/index-9250cf41.js","assets/memberCenter-56f43a26.js","assets/validate-d30190a1.js","assets/loginFooter-2e60c17c.js","assets/menu-83125494.js","assets/router-c56b232f.js"])),I=Y({activeMenu:""}),D=G(),n=J(),m=Q();W();const L=M();let N=n.getUserInfo(),r=ne();const T=()=>{r.chatAside=!r.chatAside},R=()=>{r.menuShow=!r.menuShow},p=x(),P=()=>{n.isLogin()&&p.toggleMenuExpand(!p.state.menuExpand)},b=i=>{r.userLogin=!r.userLogin};switch(D.name){case"/":I.activeMenu="";break;case"userLogin":I.activeMenu="user";break}return X(()=>{let{youkeNum:i}=Z(L);n.initYouKe(i)}),ie(),(i,t)=>{const C=u("Icon"),B=u("el-button"),A=u("el-avatar"),O=u("el-col"),F=u("el-row"),j=u("el-header"),w=u("el-drawer");return k(),y(te,null,[s(j,{class:"header",id:"chat-header"},{default:c(()=>[s(F,{justify:"center"},{default:c(()=>[s(O,{class:"header-row",span:24,xs:24},{default:c(()=>[o("div",{onClick:t[0]||(t[0]=a=>e(m).push({name:"/"})),class:"header-logo chat-menu-left-pc"},[ue,o("span",ce,E(e(L).siteName),1)]),o("div",de,[o("div",{class:"menu-show",onClick:R},[s(C,{name:"fa fa-bars"})]),i.$route.meta.key=="chat"?(k(),y("div",{key:0,class:"chat-show",onClick:T},[s(C,{name:"local-comments"})])):S("",!0)]),o("ul",me,[o("li",{class:V(i.$route.meta.key=="home"?"current_nav":""),onClick:t[1]||(t[1]=a=>e(m).push({name:"/"}))},"首页",2),o("li",{class:V(i.$route.meta.key=="chat"||i.$route.meta.key=="gpt4"?"current_nav":""),onClick:t[2]||(t[2]=a=>e(m).push({name:"chat"}))},"AI聊天",2),o("li",{class:V(i.$route.meta.key=="fate"?"current_nav":""),onClick:t[3]||(t[3]=a=>e(m).push({name:"fate"}))},"AI预测",2)]),o("div",_e,[h(o("div",{onClick:t[4]||(t[4]=a=>b("pc"))},[s(B,{class:"user-login",type:"info"},{default:c(()=>[ee("登录")]),_:1})],512),[[f,!e(n).isLogin()]]),h(o("div",{class:"chat-user-avatar",onClick:t[5]||(t[5]=a=>e(m).push({name:"user"}))},[s(A,{size:40,src:e($)(e(n).avatar?e(n).avatar:"/static/images/avatar.png")},null,8,["src"])],512),[[f,e(n).isLogin()]])]),o("div",pe,[h(o("div",{class:"user-show",onClick:t[6]||(t[6]=a=>b("moblie"))},[s(C,{name:"fa fa-user-circle"})],512),[[f,!e(n).isLogin()]]),h(o("div",{class:"user-show",onClick:t[7]||(t[7]=a=>P())},[s(A,{size:24,src:e($)(e(n).avatar?e(n).avatar:"/static/images/avatar.png")},null,8,["src"])],512),[[f,e(n).isLogin()]])])]),_:1})]),_:1})]),_:1}),s(w,{class:"aside-drawer","append-to-body":!0,modelValue:e(p).state.menuExpand,"onUpdate:modelValue":t[8]||(t[8]=a=>e(p).state.menuExpand=a),"with-header":!1,direction:"ltr",size:"70%"},{default:c(()=>[s(e(U))]),_:1},8,["modelValue"]),s(w,{modelValue:e(r).menuShow,"onUpdate:modelValue":t[9]||(t[9]=a=>e(r).menuShow=a),class:"menu-tc",title:"",size:"70%",direction:"ltr"},{default:c(()=>[s(e(d))]),_:1},8,["modelValue"]),s(w,{size:"70%",class:"tc-chat-list",modelValue:e(r).chatAside,"onUpdate:modelValue":t[10]||(t[10]=a=>e(r).chatAside=a),direction:"ltr"},{default:c(()=>[s(e(_))]),_:1},8,["modelValue"]),s(e(z)),e(N).username=="zhonghuabao"?(k(),y("div",ve,E(i.$t("user.account.overview.systemInfo")),1)):S("",!0)],64)}}},ke=K(he,[["__scopeId","data-v-91d4e399"]]);export{ke as H};