import{d as S,H as y,q as B,s as k,r as D,o as E,w as F,f as l,c as n,a as r,b as H,g as a,j as e,F as z,J as N,x as _,K as P,e as C,i as x,z as $,A as j,L as u,_ as q}from"./index-9250cf41.js";import{a as A}from"./chat-5c60e301.js";import{u as J}from"./chat-608f0192.js";import{t as w}from"./timeToDate-4f013b84.js";import{s as K}from"./sendMsg-325b82fb.js";import{x as b}from"./chat-b08578f0.js";import"./chat-0b571d6e.js";const U={class:"chat-content-body"},G={key:0},O=["index"],Q={key:0,class:"chat_left"},W={class:"user-avatr"},X={class:"user-avatr-time"},Y={class:"chat-speak"},Z={class:"chat-speak-01"},ee={class:"dh_action"},se={key:1,class:"chat_right"},te={class:"user-avatr"},ae={class:"user-avatr-time"},oe={class:"chat-speak"},ce=S({__name:"chat",setup(re){const m="preview-only",h=y(),p=y();let T=B(),I=J(),{chatMsgList:i,nowChatId:d}=k(I);const{avatar:V}=k(T);function v(){let t=h.value.clientHeight;p.value.setScrollTop(t+500)}const f=t=>`${t}`;let M=t=>{navigator.clipboard.writeText(t).then(()=>{u.success("复制成功")}).catch(o=>{var s=document.createElement("textarea");s.value=t,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),u.success("复制成功")})},R=()=>{u.success("重新发送中");let o=i.value[d.value].msglist;for(let s=0;s<o.length;s++)if(o[o.length-s-1].role=="user"){K(o[o.length-s-1].msg,"refresh");break}};return D({output:"",isEnd:!1,speed:80,singleBack:!1,sleep:0,type:"normal",backSpeed:40,sentencePause:!1}),E(()=>{v()}),F(i,(t,o)=>{setTimeout(()=>{v()},100)},{deep:!0}),(t,o)=>{const s=C("el-avatar"),g=C("Icon");return l(),n("div",U,[r(e(P),{ref_key:"scrollbarRef",ref:p,style:{overflow:"hidden"},class:"infinite-list chat-content-scroll",always:""},{default:H(()=>[a("div",{ref_key:"innerRef",ref:h},[e(i)[e(d)]?(l(),n("div",G,[(l(!0),n(z,null,N(e(i)[e(d)].msglist,(c,L)=>(l(),n("div",{index:L,class:"scrollbar-demo-item"},[c.role!="user"?(l(),n("div",Q,[a("div",W,[r(s,{src:e(A)},null,8,["src"]),a("span",X,x(e(w).setTime(c.time)),1)]),a("div",Y,[a("div",Z,[r(e(b),{previewTheme:"vuepress",formatCopiedText:f,editorId:m,modelValue:c.msg},null,8,["modelValue"]),$(a("div",ee,[r(g,{name:"el-icon-CopyDocument",onClick:le=>e(M)(c.msg),title:"复制",color:"#8595F4",size:"20"},null,8,["onClick"]),r(g,{name:"el-icon-Refresh",onClick:e(R),title:"重试",color:"#8595F4",size:"20"},null,8,["onClick"])],512),[[j,c.isfinish]])])])])):_("",!0),c.role=="user"?(l(),n("div",se,[a("div",te,[r(s,{src:e(V)},null,8,["src"]),a("span",ae,x(e(w).setTime(c.time)),1)]),a("div",oe,[r(e(b),{previewTheme:"vuepress",formatCopiedText:f,editorId:m,modelValue:c.msg},null,8,["modelValue"])])])):_("",!0)],8,O))),256))])):_("",!0)],512)]),_:1},512)])}}});const pe=q(ce,[["__scopeId","data-v-627d1303"]]);export{pe as default};