import{d as I,$ as P,u as z,Z as L,H as j,r as R,a1 as K,o as H,f as a,c as m,z as J,Y as c,b as f,a as _,j as g,bu as O,N as y,F as h,J as F,x as b,e as p,aC as Q,a0 as w,g as U,i as A,h as Y,a3 as Z,aA as W,_ as X}from"./index-9250cf41.js";import{F as C}from"./index-5cf5ba2e.js";import{_ as ee,i as te,p as oe,d as ne,a as ae}from"./add.vue_vue_type_script_setup_true_lang-6fa5f942.js";import{r as re}from"./router-c56b232f.js";import{b as le}from"./validate-d30190a1.js";import"./index-47490f62.js";import"./controllerUrls-941681c3.js";import"./index-bb9265a5.js";import"./memberCenter-56f43a26.js";const ie={class:"default-main"},se={class:"config-form-item"},de={class:"config-form-item-name"},ue={class:"del-config-form-item"},ce={key:0,class:"send-test-mail"},fe=["onClick"],pe=I({name:"routine/config"}),me=I({...pe,setup(_e){const{t:s}=P(),T=z();L();const v=j(),e=R({loading:!0,config:[],remark:"",configGroup:{},activeTab:"",showAddForm:!1,rules:{},form:{},quickEntrance:{},formKey:K()}),E=()=>{te().then(l=>{e.config=l.data.list,e.remark=l.data.remark,e.configGroup=l.data.configGroup,e.quickEntrance=l.data.quickEntrance,e.loading=!1;for(const o in e.configGroup){e.activeTab=o;break}let n={},r={};for(const o in e.config)for(const i in e.config[o].list){if(e.config[o].list[i].rule){let x=e.config[o].list[i].rule.split(","),k=[];x.forEach(V=>{k.push(le({name:V,title:e.config[o].list[i].title}))}),r=Object.assign(r,{[e.config[o].list[i].name]:k})}n[e.config[o].list[i].name]=e.config[o].list[i].type=="number"?parseFloat(e.config[o].list[i].value):e.config[o].list[i].value}e.form=n,e.rules=r,e.formKey=K()}).catch(()=>{e.loading=!1})},D=l=>{if(l=="add_config")return e.showAddForm=!0,!1},$=l=>{l&&l.validate(n=>{if(n){const r={};for(const o in e.config)if(o==e.activeTab)for(const i in e.config[o].list)r[e.config[o].list[i].name]=e.form[e.config[o].list[i].name]??"";oe("edit",r).then(()=>{for(const o in T.$state)r[o]&&T.$state[o]!=r[o]&&(T.$state[o]=r[o])})}})},M=l=>{ne([l.id]).then(()=>{E()})},N=()=>{if(!e.form.smtp_server||!e.form.smtp_port||!e.form.smtp_user||!e.form.smtp_pass||!e.form.smtp_sender_mail)return Z({type:"error",message:s("routine.config.Please enter the correct mail configuration")}),!1;W.prompt(s("routine.config.Please enter the recipient email address"),s("routine.config.Test mail sending"),{confirmButtonText:s("routine.config.send out"),cancelButtonText:s("Cancel"),inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:s("routine.config.Please enter the correct email address"),beforeClose:(l,n,r)=>{l==="confirm"?(n.confirmButtonLoading=!0,n.confirmButtonText=s("routine.config.Sending"),ae(e.form,n.inputValue).then(o=>{r()}).catch(o=>{r()})):r()}})};return H(()=>{E()}),(l,n)=>{const r=p("Icon"),o=p("el-popconfirm"),i=p("el-button"),x=p("el-tab-pane"),k=p("el-tabs"),V=p("el-col"),S=p("el-card"),q=p("el-row"),G=Q("loading");return a(),m("div",ie,[J((a(),c(q,{gutter:20},{default:f(()=>[_(V,{class:"xs-mb-20",xs:24,sm:16},{default:f(()=>[e.loading?b("",!0):(a(),c(g(O),{ref_key:"formRef",ref:v,onKeyup:n[6]||(n[6]=y(d=>$(v.value),["enter"])),model:e.form,rules:e.rules,"label-position":"top",key:e.formKey},{default:f(()=>[_(k,{modelValue:e.activeTab,"onUpdate:modelValue":n[5]||(n[5]=d=>e.activeTab=d),type:"border-card","before-leave":D},{default:f(()=>[(a(!0),m(h,null,F(e.config,(d,B)=>(a(),c(x,{class:"config-tab-pane",key:B,name:B,label:d.title},{default:f(()=>[(a(!0),m(h,null,F(d.list,(t,ge)=>(a(),m("div",se,[t.group==e.activeTab?(a(),m(h,{key:0},[t.type=="number"?(a(),c(C,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":u=>e.form[t.name]=u,modelModifiers:{number:!0},attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,...t.input_extend},data:{tip:t.tip},key:"number-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):t.type=="editor"?(a(),c(C,{label:t.title,type:t.type,onKeyup:[n[0]||(n[0]=y(w(()=>{},["stop"]),["enter"])),n[1]||(n[1]=y(w(u=>$(v.value),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":u=>e.form[t.name]=u,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,style:{zIndex:99},...t.input_extend},data:{tip:t.tip},key:"editor-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):t.type=="textarea"?(a(),c(C,{label:t.title,type:t.type,onKeyup:[n[2]||(n[2]=y(w(()=>{},["stop"]),["enter"])),n[3]||(n[3]=y(w(u=>$(v.value),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":u=>e.form[t.name]=u,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,rows:3,...t.input_extend},data:{tip:t.tip},key:"textarea-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):(a(),c(C,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":u=>e.form[t.name]=u,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,...t.input_extend},data:{tip:t.tip,content:t.content?t.content:{}},key:"other-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])),U("div",de,"$"+A(t.name),1),U("div",ue,[t.allow_del?(a(),c(o,{key:0,onConfirm:u=>M(t),confirmButtonText:g(s)("delete"),title:g(s)("routine.config.Are you sure to delete the configuration item?")},{reference:f(()=>[_(r,{class:"close-icon",size:"15",name:"el-icon-Close"})]),_:2},1032,["onConfirm","confirmButtonText","title"])):b("",!0)])],64)):b("",!0)]))),256)),d.name=="mail"?(a(),m("div",ce,[_(i,{onClick:n[4]||(n[4]=t=>N())},{default:f(()=>[Y(A(g(s)("routine.config.Test mail sending")),1)]),_:1})])):b("",!0)]),_:2},1032,["name","label"]))),128)),_(x,{name:"add_config",class:"config-tab-pane config-tab-pane-add",label:g(s)("routine.config.Add configuration item")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model","rules"]))]),_:1}),_(V,{xs:24,sm:8},{default:f(()=>[_(S,{header:g(s)("routine.config.Quick configuration entry")},{default:f(()=>[(a(!0),m(h,null,F(e.quickEntrance,d=>(a(),c(i,{class:"config_quick_entrance"},{default:f(()=>[U("div",{onClick:B=>g(re)(d.value)},A(d.key),9,fe)]),_:2},1024))),256))]),_:1},8,["header"])]),_:1})]),_:1})),[[G,e.loading]]),e.loading?b("",!0):(a(),c(ee,{key:0,modelValue:e.showAddForm,"onUpdate:modelValue":n[7]||(n[7]=d=>e.showAddForm=d),"config-group":e.configGroup},null,8,["modelValue","config-group"]))])}}});const Te=X(me,[["__scopeId","data-v-336f39b4"]]);export{Te as default};