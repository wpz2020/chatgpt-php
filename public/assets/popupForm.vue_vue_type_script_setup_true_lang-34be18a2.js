import{defineComponent as z,ref as D,inject as I,reactive as M,resolveComponent as p,resolveDirective as u,openBlock as m,createBlock as s,unref as e,withCtx as a,withDirectives as f,createElementBlock as N,createTextVNode as c,toDisplayString as b,createElementVNode as x,normalizeStyle as _,createVNode as d,normalizeClass as $,withModifiers as v,withKeys as g,createCommentVNode as B}from"vue";import{useI18n as K}from"vue-i18n";import{F as i}from"./index-39d73c69.js";import{b as V}from"./validate-e09b6b50.js";const T={class:"title"},A=z({__name:"popupForm",setup(W){const n=D(),o=I("baTable"),{t:l}=K(),w=M({price:[V({name:"number",title:l("product.price")})],expire:[V({name:"number",title:l("product.expire")})],num:[V({name:"number",title:l("product.num")})]});return(E,t)=>{const C=p("el-form"),k=p("el-scrollbar"),y=p("el-button"),S=p("el-dialog"),h=u("drag"),P=u("zoom"),U=u("loading"),F=u("blur");return m(),s(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["add","edit"].includes(e(o).form.operate),onClose:e(o).toggleForm,width:"50%"},{header:a(()=>[f((m(),N("div",T,[c(b(e(o).form.operate?e(l)(e(o).form.operate):""),1)])),[[h,[".ba-operate-dialog",".el-dialog__header"]],[P,".ba-operate-dialog"]])]),footer:a(()=>[x("div",{style:_("width: calc(100% - "+e(o).form.labelWidth/1.8+"px)")},[d(y,{onClick:t[10]||(t[10]=r=>e(o).toggleForm(""))},{default:a(()=>[c(b(e(l)("Cancel")),1)]),_:1}),f((m(),s(y,{loading:e(o).form.submitLoading,onClick:t[11]||(t[11]=r=>e(o).onSubmit(n.value)),type:"primary"},{default:a(()=>[c(b(e(o).form.operateIds&&e(o).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[F]])],4)]),default:a(()=>[f((m(),s(k,{class:"ba-table-form-scrollbar"},{default:a(()=>[x("div",{class:$(["ba-operate-form","ba-"+e(o).form.operate+"-form"]),style:_("width: calc(100% - "+e(o).form.labelWidth/2+"px)")},[e(o).form.loading?B("",!0):(m(),s(C,{key:0,ref_key:"formRef",ref:n,onSubmit:t[8]||(t[8]=v(()=>{},["prevent"])),onKeyup:t[9]||(t[9]=g(r=>e(o).onSubmit(n.value),["enter"])),model:e(o).form.items,"label-position":"right","label-width":e(o).form.labelWidth+"px",rules:w},{default:a(()=>[d(i,{label:e(l)("product.name"),type:"string",modelValue:e(o).form.items.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(o).form.items.name=r),prop:"name",placeholder:e(l)("Please input field",{field:e(l)("product.name")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(l)("product.price"),type:"number",prop:"price","input-attr":{step:1},modelValue:e(o).form.items.price,"onUpdate:modelValue":t[1]||(t[1]=r=>e(o).form.items.price=r),modelModifiers:{number:!0},placeholder:e(l)("Please input field",{field:e(l)("product.price")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(l)("product.expire"),type:"number",prop:"expire","input-attr":{step:1},modelValue:e(o).form.items.expire,"onUpdate:modelValue":t[2]||(t[2]=r=>e(o).form.items.expire=r),modelModifiers:{number:!0},placeholder:e(l)("Please input field",{field:e(l)("product.expire")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(l)("product.color"),type:"color",modelValue:e(o).form.items.color,"onUpdate:modelValue":t[3]||(t[3]=r=>e(o).form.items.color=r),prop:"color",placeholder:e(l)("Please input field",{field:e(l)("product.color")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(l)("product.num"),type:"number",prop:"num","input-attr":{step:1},modelValue:e(o).form.items.num,"onUpdate:modelValue":t[4]||(t[4]=r=>e(o).form.items.num=r),modelModifiers:{number:!0},placeholder:e(l)("Please input field",{field:e(l)("product.num")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(l)("product.dec"),type:"textarea",modelValue:e(o).form.items.dec,"onUpdate:modelValue":t[5]||(t[5]=r=>e(o).form.items.dec=r),prop:"dec","input-attr":{rows:3},onKeyup:[t[6]||(t[6]=g(v(()=>{},["stop"]),["enter"])),t[7]||(t[7]=g(v(r=>e(o).onSubmit(n.value),["ctrl"]),["enter"]))],placeholder:e(l)("Please input field",{field:e(l)("product.dec")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[U,e(o).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{A as _};