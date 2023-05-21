import{defineComponent as x,inject as w,resolveComponent as d,resolveDirective as s,openBlock as _,createBlock as c,unref as e,withCtx as o,withDirectives as m,createElementBlock as C,createTextVNode as n,toDisplayString as r,createElementVNode as L,normalizeClass as I,createVNode as a}from"vue";import{useI18n as k}from"vue-i18n";import{ai as y,_ as z}from"./index-89e26330.js";import"vue-router";import"pinia";import"vue-demi";import"element-plus";const B={class:"title"},D=x({__name:"info",setup(N){const t=w("baTable"),{t:i}=k();return(T,V)=>{const l=d("el-descriptions-item"),f=d("el-tree"),p=d("el-descriptions"),b=d("el-scrollbar"),u=d("el-dialog"),g=s("drag"),h=s("zoom"),v=s("loading");return _(),c(u,{class:"ba-operate-dialog","model-value":!!e(t).form.operate,onClose:e(t).toggleForm},{header:o(()=>[m((_(),C("div",B,[n(r(e(i)("info")),1)])),[[g,[".ba-operate-dialog",".el-dialog__header"]],[h,".ba-operate-dialog"]])]),default:o(()=>[m((_(),c(b,{class:"ba-table-form-scrollbar"},{default:o(()=>[L("div",{class:I(["ba-operate-form","ba-"+e(t).form.operate+"-form"])},[a(p,{column:2,border:""},{default:o(()=>[a(l,{label:e(i)("id")},{default:o(()=>[n(r(e(t).form.extend.info.id),1)]),_:1},8,["label"]),a(l,{label:e(i)("auth.adminLog.Operation administrator")},{default:o(()=>[n(r(e(t).form.extend.info.username),1)]),_:1},8,["label"]),a(l,{label:e(i)("auth.adminLog.title")},{default:o(()=>[n(r(e(t).form.extend.info.title),1)]),_:1},8,["label"]),a(l,{label:e(i)("auth.adminLog.Operator IP")},{default:o(()=>[n(r(e(t).form.extend.info.ip),1)]),_:1},8,["label"]),a(l,{width:120,span:2,label:"URL"},{default:o(()=>[n(r(e(t).form.extend.info.url),1)]),_:1}),a(l,{width:120,span:2,label:"User Agent"},{default:o(()=>[n(r(e(t).form.extend.info.useragent),1)]),_:1}),a(l,{width:120,span:2,label:e(i)("createtime")},{default:o(()=>[n(r(e(y)(e(t).form.extend.info.createtime)),1)]),_:1},8,["label"]),a(l,{width:120,span:2,label:e(i)("auth.adminLog.Request data")},{default:o(()=>[a(f,{class:"table-el-tree",data:e(t).form.extend.info.data,props:{label:"label",children:"children"}},null,8,["data"])]),_:1},8,["label"])]),_:1})],2)]),_:1})),[[v,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}});const A=z(D,[["__scopeId","data-v-d3223563"]]);export{A as default};