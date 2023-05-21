import{defineComponent as S,ref as z,reactive as R,onMounted as j,resolveComponent as m,resolveDirective as O,openBlock as a,createElementBlock as _,withDirectives as Q,createBlock as u,withCtx as c,createVNode as g,unref as p,withKeys as v,Fragment as h,renderList as U,withModifiers as C,createElementVNode as F,toDisplayString as T,createCommentVNode as y,createTextVNode as A}from"vue";import{F as $}from"./index-39d73c69.js";import{_ as H,i as J,p as W,d as X,a as Y}from"./add.vue_vue_type_script_setup_true_lang-a8af4230.js";import{ElForm as Z,ElNotification as ee,ElMessageBox as te}from"element-plus";import{r as oe}from"./router-fdf560e7.js";import{b as ne}from"./validate-e09b6b50.js";import{u as ae,h as re,i as I,_ as le}from"./index-89e26330.js";import{useI18n as ie}from"vue-i18n";import"./index-0a827c2c.js";import"vue-router";import"./controllerUrls-941681c3.js";import"./index-d3b20950.js";import"./memberCenter-893be883.js";import"pinia";import"vue-demi";const se={class:"default-main"},de={class:"config-form-item"},ue={class:"config-form-item-name"},ce={class:"del-config-form-item"},fe={key:0,class:"send-test-mail"},pe=["onClick"],me=S({name:"routine/config"}),_e=S({...me,setup(ge){const{t:s}=ie(),B=ae(),D=re(),b=z(),e=R({loading:!0,config:[],remark:"",configGroup:{},activeTab:"",showAddForm:!1,rules:{},form:{},quickEntrance:{},formKey:I()}),K=()=>{J().then(i=>{e.config=i.data.list,e.remark=i.data.remark,e.configGroup=i.data.configGroup,e.quickEntrance=i.data.quickEntrance,e.loading=!1;for(const n in e.configGroup){e.activeTab=n;break}let o={},r={};for(const n in e.config)for(const l in e.config[n].list){if(e.config[n].list[l].rule){let x=e.config[n].list[l].rule.split(","),V=[];x.forEach(w=>{V.push(ne({name:w,title:e.config[n].list[l].title}))}),r=Object.assign(r,{[e.config[n].list[l].name]:V})}o[e.config[n].list[l].name]=e.config[n].list[l].type=="number"?parseFloat(e.config[n].list[l].value):e.config[n].list[l].value}e.form=o,e.rules=r,e.formKey=I()}).catch(()=>{e.loading=!1})},M=i=>{if(i=="add_config")return e.showAddForm=!0,!1},k=i=>{i&&i.validate(o=>{if(o){const r={};for(const n in e.config)if(n==e.activeTab)for(const l in e.config[n].list)r[e.config[n].list[l].name]=e.form[e.config[n].list[l].name]??"";W("edit",r).then(()=>{for(const n in B.$state)r[n]&&B.$state[n]!=r[n]&&(B.$state[n]=r[n])})}})},N=i=>{X([i.id]).then(()=>{K()})},q=()=>{if(!e.form.smtp_server||!e.form.smtp_port||!e.form.smtp_user||!e.form.smtp_pass||!e.form.smtp_sender_mail)return ee({type:"error",message:s("routine.config.Please enter the correct mail configuration")}),!1;te.prompt(s("routine.config.Please enter the recipient email address"),s("routine.config.Test mail sending"),{confirmButtonText:s("routine.config.send out"),cancelButtonText:s("Cancel"),inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:s("routine.config.Please enter the correct email address"),beforeClose:(i,o,r)=>{i==="confirm"?(o.confirmButtonLoading=!0,o.confirmButtonText=s("routine.config.Sending"),Y(e.form,o.inputValue).then(n=>{r()}).catch(n=>{r()})):r()}})};return j(()=>{K()}),(i,o)=>{const r=m("Icon"),n=m("el-popconfirm"),l=m("el-button"),x=m("el-tab-pane"),V=m("el-tabs"),w=m("el-col"),G=m("el-card"),P=m("el-row"),L=O("loading");return a(),_("div",se,[Q((a(),u(P,{gutter:20},{default:c(()=>[g(w,{class:"xs-mb-20",xs:24,sm:16},{default:c(()=>[e.loading?y("",!0):(a(),u(p(Z),{ref_key:"formRef",ref:b,onKeyup:o[7]||(o[7]=v(d=>k(b.value),["enter"])),model:e.form,rules:e.rules,"label-position":"top",key:e.formKey},{default:c(()=>[g(V,{modelValue:e.activeTab,"onUpdate:modelValue":o[6]||(o[6]=d=>e.activeTab=d),type:"border-card","before-leave":M},{default:c(()=>[(a(!0),_(h,null,U(e.config,(d,E)=>(a(),u(x,{class:"config-tab-pane",key:E,name:E,label:d.title},{default:c(()=>[(a(!0),_(h,null,U(d.list,(t,ye)=>(a(),_("div",de,[t.group==e.activeTab?(a(),_(h,{key:0},[t.type=="number"?(a(),u($,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":f=>e.form[t.name]=f,modelModifiers:{number:!0},attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,...t.input_extend},data:{tip:t.tip},key:"number-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):t.type=="editor"?(a(),u($,{label:t.title,type:t.type,onKeyup:[o[0]||(o[0]=v(C(()=>{},["stop"]),["enter"])),o[1]||(o[1]=v(C(f=>k(b.value),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":f=>e.form[t.name]=f,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,style:{zIndex:99},...t.input_extend},data:{tip:t.tip},key:"editor-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):t.type=="textarea"?(a(),u($,{label:t.title,type:t.type,onKeyup:[o[2]||(o[2]=v(C(()=>{},["stop"]),["enter"])),o[3]||(o[3]=v(C(f=>k(b.value),["ctrl"]),["enter"]))],modelValue:e.form[t.name],"onUpdate:modelValue":f=>e.form[t.name]=f,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,rows:3,...t.input_extend},data:{tip:t.tip},key:"textarea-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])):(a(),u($,{label:t.title,type:t.type,modelValue:e.form[t.name],"onUpdate:modelValue":f=>e.form[t.name]=f,attr:{prop:t.name,...t.extend},"input-attr":{placeholder:t.tip,...t.input_extend},data:{tip:t.tip,content:t.content?t.content:{}},key:"other-"+t.id},null,8,["label","type","modelValue","onUpdate:modelValue","attr","input-attr","data"])),F("div",ue,"$"+T(t.name),1),F("div",ce,[t.allow_del?(a(),u(n,{key:0,onConfirm:f=>N(t),confirmButtonText:p(s)("delete"),title:p(s)("routine.config.Are you sure to delete the configuration item?")},{reference:c(()=>[g(r,{class:"close-icon",size:"15",name:"el-icon-Close"})]),_:2},1032,["onConfirm","confirmButtonText","title"])):y("",!0)])],64)):y("",!0)]))),256)),d.name=="mail"?(a(),_("div",fe,[g(l,{onClick:o[4]||(o[4]=t=>q())},{default:c(()=>[A(T(p(s)("routine.config.Test mail sending")),1)]),_:1})])):y("",!0),p(D).username=="admin"?(a(),u(l,{key:1,type:"primary",onClick:o[5]||(o[5]=t=>k(b.value))},{default:c(()=>[A(T(p(s)("Save")),1)]),_:1})):y("",!0)]),_:2},1032,["name","label"]))),128)),g(x,{name:"add_config",class:"config-tab-pane config-tab-pane-add",label:p(s)("routine.config.Add configuration item")},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model","rules"]))]),_:1}),g(w,{xs:24,sm:8},{default:c(()=>[g(G,{header:p(s)("routine.config.Quick configuration entry")},{default:c(()=>[(a(!0),_(h,null,U(e.quickEntrance,d=>(a(),u(l,{class:"config_quick_entrance"},{default:c(()=>[F("div",{onClick:E=>p(oe)(d.value)},T(d.key),9,pe)]),_:2},1024))),256))]),_:1},8,["header"])]),_:1})]),_:1})),[[L,e.loading]]),e.loading?y("",!0):(a(),u(H,{key:0,modelValue:e.showAddForm,"onUpdate:modelValue":o[8]||(o[8]=d=>e.showAddForm=d),"config-group":e.configGroup},null,8,["modelValue","config-group"]))])}}});const Ae=le(_e,[["__scopeId","data-v-b264e3c2"]]);export{Ae as default};
