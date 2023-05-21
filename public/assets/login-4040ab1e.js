var Z=Object.defineProperty;var $=(o,i,h)=>i in o?Z(o,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[i]=h;var f=(o,i,h)=>($(o,typeof i!="symbol"?i+"":i,h),h);import{h as W,r as k,L as b,A as J,n as ee,a5 as te,l as S,o as r,q as a,D as s,a6 as ae,$ as oe,t as c,V as ne,W as se,p as A,P as le,O as ie,k as p,C as M,S as ce,U as P,M as U,E as re}from"./vue-8b21a996.js";import{b as de,k as ue,l as pe,n as L,o as he,r as me,p as fe,_ as ge}from"./index-fb3df3be.js";import{l as N}from"./index-01f6754c.js";import{b as _}from"./validate-322d0259.js";const _e="/assets/login-header-2b702f97.png",we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAD1BMVEXBy9eGlqeTorG9yNSptcPYN5ilAAABVElEQVR42u3Y3Y2DMBAEYBNfAR6gANIBdHDpv6m7h9OtorAWMp6IjeYrgGHX/NibRERERERERETEs+HXlFjwLzHcALOk7gY8KZT7Z9YAQ1mHB17MhAXgLQN2EQpglQBwS/iC45vQIUqP4CK9xGYhdIjQI1SECLihYuEsgSkRAlClgDcEZFStnIfIFAUoQAERAjKq1ut/7BRwgZ9+PSDCxiv+3rS6fY9xAElwRTkE+sfYKAdxd5QQZxjijHMiDaT2mhRtKLg71ow1mPVHy4GG4yIi0kP++/VPa+ov3/Fk7BuyYceUernDMfa7PC9iAKjjFhzAOiKb5XR7SG164LC5w9NTN5Lu38yk/pvScH1iQoaj1wASTQgNam0SGjUUwCkBzQ4XwC0BJ1wiYAC4PdpwwkTqkLlAQMYpK2eNTVGAAhSgAAUoQAEKUIACFKAABShAAZ8c8AO1HXS7nTcqUQAAAABJRU5ErkJggg==",e={width:0,height:0,bubbleEl:null,canvas:null,ctx:{},circles:[],animate:!0,requestId:null},be=function(){e.width=window.innerWidth,e.height=window.innerHeight,e.bubbleEl=document.getElementById("bubble"),e.bubbleEl.style.height=e.height+"px",e.canvas=document.getElementById("bubble-canvas"),e.canvas.width=e.width,e.canvas.height=e.height,e.ctx=e.canvas.getContext("2d"),e.circles=[];for(let o=0;o<e.width*.5;o++){const i=new Ae;e.circles.push(i)}z(),ve()};function Q(){e.animate=!(document.body.scrollTop>e.height)}function T(){e.width=window.innerWidth,e.height=window.innerHeight,e.bubbleEl.style.height=e.height+"px",e.canvas.width=e.width,e.canvas.height=e.height}function z(){if(e.animate){e.ctx.clearRect(0,0,e.width,e.height);for(const o in e.circles)e.circles[o].draw()}e.requestId=requestAnimationFrame(z)}class Ae{constructor(){f(this,"pos");f(this,"alpha");f(this,"scale");f(this,"velocity");f(this,"draw");this.pos={x:Math.random()*e.width,y:e.height+Math.random()*100},this.alpha=.1+Math.random()*.3,this.scale=.1+Math.random()*.3,this.velocity=Math.random(),this.draw=function(){this.pos.y-=this.velocity,this.alpha-=5e-4,e.ctx.beginPath(),e.ctx.arc(this.pos.x,this.pos.y,this.scale*10,0,2*Math.PI,!1),e.ctx.fillStyle="rgba(255,255,255,"+this.alpha+")",e.ctx.fill()}}}function ve(){window.addEventListener("scroll",Q),window.addEventListener("resize",T)}function ye(){window.removeEventListener("scroll",Q),window.removeEventListener("resize",T),cancelAnimationFrame(e.requestId)}const E=o=>(ne("data-v-eeeeee16"),o=o(),se(),o),xe={class:"switch-language"},ke=E(()=>r("canvas",{id:"bubble-canvas",class:"bubble-canvas"},null,-1)),Ee=[ke],Ce={class:"login"},Ie={class:"login-box"},Ve=E(()=>r("div",{class:"head"},[r("img",{src:_e,alt:""})],-1)),Re={class:"form"},Be=E(()=>r("img",{class:"profile-avatar",src:we,alt:""},null,-1)),Se={class:"content"},Me=["src"],Pe=W({__name:"login",setup(o){var i;const h=de(),Y=ue(),g=k({showCaptcha:!1,captchaId:L()}),v=()=>{t.captcha="",g.captchaId=L()},y=b(),C=b(),I=b(),V=b(),t=k({username:"",password:"",captcha:"",keep:!1,loading:!1,captcha_id:""}),{t:d}=pe(),q=k({username:[_({name:"required",message:d("login.Please enter an account")}),_({name:"account"})],password:[_({name:"required",message:d("login.Please input a password")}),_({name:"password"})],captcha:[_({name:"required",title:d("login.Please enter the verification code")}),{min:4,max:6,message:d("login.The verification code length must be between 4 and 6 bits"),trigger:"blur"}]}),K=()=>{t.username===""?C.value.focus():t.password===""?I.value.focus():t.captcha===""&&V.value.focus()};J(()=>{i=setTimeout(()=>{be()},1e3),N("get").then(m=>{g.showCaptcha=m.data.captcha,ee(()=>{K()})}).catch(m=>{console.log(m)})}),te(()=>{clearTimeout(i),ye()});const R=m=>{m&&m.validate(n=>{if(n)t.loading=!0,t.captcha_id=g.captchaId,N("post",t).then(u=>{t.loading=!1,Y.dataFill(u.data.userInfo),re({message:u.msg,type:"success"}),me.push({path:u.data.routePath})}).catch(()=>{v(),t.loading=!1});else return v(),!1})};return(m,n)=>{const u=c("Icon"),D=c("el-dropdown-item"),H=c("el-dropdown-menu"),j=c("el-dropdown"),x=c("el-input"),w=c("el-form-item"),B=c("el-col"),F=c("el-row"),G=c("el-checkbox"),X=c("el-button"),O=c("el-form");return A(),S("div",null,[r("div",xe,[a(j,{size:"large","hide-timeout":50,placement:"bottom-end","hide-on-click":!0},{dropdown:s(()=>[a(H,{class:"chang-lang"},{default:s(()=>[(A(!0),S(le,null,ie(p(h).lang.langArray,l=>(A(),M(D,{key:l.name,onClick:Ue=>p(fe)(l.name)},{default:s(()=>[P(U(l.value),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:s(()=>[a(u,{name:"fa fa-globe",color:"var(--el-text-color-secondary)",size:"28"})]),_:1})]),r("div",{onContextmenu:n[0]||(n[0]=ae(()=>{},["stop"])),id:"bubble",class:"bubble"},Ee,32),r("div",Ce,[r("div",Ie,[Ve,r("div",Re,[Be,r("div",Se,[a(O,{onKeyup:n[6]||(n[6]=oe(l=>R(y.value),["enter"])),ref_key:"formRef",ref:y,rules:q,size:"large",model:t},{default:s(()=>[a(w,{prop:"username"},{default:s(()=>[a(x,{ref_key:"usernameRef",ref:C,type:"text",clearable:"",modelValue:t.username,"onUpdate:modelValue":n[1]||(n[1]=l=>t.username=l),placeholder:p(d)("login.Please enter an account")},{prefix:s(()=>[a(u,{name:"fa fa-user",class:"form-item-icon",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(w,{prop:"password"},{default:s(()=>[a(x,{ref_key:"passwordRef",ref:I,modelValue:t.password,"onUpdate:modelValue":n[2]||(n[2]=l=>t.password=l),type:"password",placeholder:p(d)("login.Please input a password"),"show-password":""},{prefix:s(()=>[a(u,{name:"fa fa-unlock-alt",class:"form-item-icon",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),g.showCaptcha?(A(),M(w,{key:0,prop:"captcha"},{default:s(()=>[a(F,{class:"w100",gutter:15},{default:s(()=>[a(B,{span:16},{default:s(()=>[a(x,{ref_key:"captchaRef",ref:V,type:"text",placeholder:p(d)("login.Please enter the verification code"),modelValue:t.captcha,"onUpdate:modelValue":n[3]||(n[3]=l=>t.captcha=l),clearable:"",autocomplete:"off"},{prefix:s(()=>[a(u,{name:"fa fa-ellipsis-h",class:"form-item-icon",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["placeholder","modelValue"])]),_:1}),a(B,{span:8},{default:s(()=>[r("img",{onClick:v,class:"captcha-img",src:p(he)()+"&id="+g.captchaId,alt:""},null,8,Me)]),_:1})]),_:1})]),_:1})):ce("",!0),a(G,{modelValue:t.keep,"onUpdate:modelValue":n[4]||(n[4]=l=>t.keep=l),label:p(d)("login.Hold session"),size:"default"},null,8,["modelValue","label"]),a(w,null,{default:s(()=>[a(X,{loading:t.loading,class:"submit-button",round:"",type:"primary",size:"large",onClick:n[5]||(n[5]=l=>R(y.value))},{default:s(()=>[P(U(p(d)("login.Sign in")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["rules","model"])])])])])])}}});const Ye=ge(Pe,[["__scopeId","data-v-eeeeee16"]]);export{Ye as default};
