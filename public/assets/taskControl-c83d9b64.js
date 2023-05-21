import{defineComponent as g,reactive as I,resolveComponent as l,openBlock as c,createElementBlock as q,createVNode as n,withCtx as o,createElementVNode as f,toDisplayString as u,createBlock as _,createTextVNode as i,createCommentVNode as N}from"vue";import{useRoute as S}from"vue-router";import{c as V,_ as B}from"./index-89e26330.js";import{e as P,f as Z,h as D}from"./dataexport-8c4f458b.js";import"vue-i18n";import"pinia";import"vue-demi";import"element-plus";const E={class:"default-main"},A={style:{display:"flex","align-items":"center"}},R=g({name:"routine/dataexport/taskControl"}),U=g({...R,setup(j){const x=S(),t=I({task:{},subTask:[],requestIdx:0}),p=()=>{let s=[];for(const e in t.subTask[t.requestIdx])m(t.subTask[t.requestIdx][e].id,1),s.push(V({url:Z(t.task.id,t.subTask[t.requestIdx][e].id),method:"get"}).then(r=>{m(r.data.subId,2),t.task.lastprogress+=t.task.subtask_progress}));s.length?Promise.all(s).then(e=>{s=[],t.requestIdx++,p()}):t.task.lastprogress=100},m=(s,e)=>{for(const r in t.task.subtask)if(t.task.subtask[r].id==s){t.task.subtask[r].status=e,t.task.subtask[r].status_text=b(e);break}};P(x.params.id).then(s=>{t.task=s.data.task,t.subTask=s.data.subtaskPage;for(const e in t.task.subtask)t.task.subtask[e].status_text=b(t.task.subtask[e].status);p()});const y=()=>{D(t.task.id).then(s=>{window.location.href=s.data.url})},w=[{color:"#909399",percentage:20},{color:"#a0cfff",percentage:40},{color:"#409eff",percentage:60},{color:"#95d475",percentage:80},{color:"#67c23a",percentage:100}],b=s=>{let e="";switch(s){case 0:e="准备好";break;case 1:e="进行中";break;case 2:e="完成";break;case 3:e="失败";break}return e};return(s,e)=>{const r=l("el-alert"),d=l("el-table-column"),k=l("el-tag"),h=l("el-table"),T=l("el-progress"),C=l("el-button"),v=l("el-result");return c(),q("div",E,[n(r,{title:"《"+(t.task.name??"")+"》正在执行中，请勿刷新浏览器或关闭标签页...",type:"error",closable:!1,effect:"dark",class:"mb20"},null,8,["title"]),n(h,{data:t.task.subtask,border:"",style:{width:"100%"}},{default:o(()=>[n(d,{prop:"id",label:"序号",align:"center",width:"60"}),n(d,{label:"任务标题"},{default:o(a=>[f("div",A,"第 "+u(a.row.min)+" 到 "+u(a.row.min+a.row.max)+" 行数据",1)]),_:1}),n(d,{prop:"status_text",align:"center",label:"状态",width:"100"},{default:o(a=>[f("div",null,[a.row.status==0?(c(),_(k,{key:0,type:"info"},{default:o(()=>[i(u(a.row.status_text),1)]),_:2},1024)):a.row.status==1?(c(),_(k,{key:1},{default:o(()=>[i(u(a.row.status_text),1)]),_:2},1024)):a.row.status==2?(c(),_(k,{key:2,type:"success"},{default:o(()=>[i(u(a.row.status_text),1)]),_:2},1024)):(c(),_(k,{key:3,type:"danger"},{default:o(()=>[i(u(a.row.status_text),1)]),_:2},1024))])]),_:1})]),_:1},8,["data"]),n(T,{class:"task-progress",color:w,"stroke-width":16,percentage:t.task.lastprogress,"text-inside":!0},null,8,["percentage"]),Number(t.task.lastprogress)>=100?(c(),_(v,{key:0,icon:"success",title:"数据已备好","sub-title":"点击下载导出的数据包文件"},{extra:o(()=>[n(C,{onClick:y,type:"primary"},{default:o(()=>[i("下载ZIP")]),_:1})]),_:1})):N("",!0)])}}});const O=B(U,[["__scopeId","data-v-8e3787cd"]]);export{O as default};
