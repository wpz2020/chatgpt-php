import{d as F,H as I,$ as N,r as $,f as m,Y as p,b as a,z as f,c as B,h as c,i as b,j as e,g as x,a as d,I as _,a0 as g,N as v,x as D,y as M,R as K,e as s,aC as u}from"./index-9250cf41.js";import{F as i}from"./index-5cf5ba2e.js";import{b as V}from"./validate-d30190a1.js";const R={class:"title"},L=F({__name:"popupForm",setup(T){const n=I(),l=K("baTable"),{t:o}=N(),C=$({price:[V({name:"number",title:o("product.price")})],expire:[V({name:"number",title:o("product.expire")})],num:[V({name:"number",title:o("product.num")})]});return(W,t)=>{const w=s("el-form"),k=s("el-scrollbar"),y=s("el-button"),S=s("el-dialog"),h=u("drag"),P=u("zoom"),U=u("loading"),z=u("blur");return m(),p(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["add","edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,width:"50%"},{header:a(()=>[f((m(),B("div",R,[c(b(e(l).form.operate?e(o)(e(l).form.operate):""),1)])),[[h,[".ba-operate-dialog",".el-dialog__header"]],[P,".ba-operate-dialog"]])]),footer:a(()=>[x("div",{style:_("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[d(y,{onClick:t[10]||(t[10]=r=>e(l).toggleForm(""))},{default:a(()=>[c(b(e(o)("Cancel")),1)]),_:1}),f((m(),p(y,{loading:e(l).form.submitLoading,onClick:t[11]||(t[11]=r=>e(l).onSubmit(n.value)),type:"primary"},{default:a(()=>[c(b(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(o)("Save and edit next item"):e(o)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:a(()=>[f((m(),p(k,{class:"ba-table-form-scrollbar"},{default:a(()=>[x("div",{class:M(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:_("width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?D("",!0):(m(),p(w,{key:0,ref_key:"formRef",ref:n,onSubmit:t[8]||(t[8]=g(()=>{},["prevent"])),onKeyup:t[9]||(t[9]=v(r=>e(l).onSubmit(n.value),["enter"])),model:e(l).form.items,"label-position":"right","label-width":e(l).form.labelWidth+"px",rules:C},{default:a(()=>[d(i,{label:e(o)("product.name"),type:"string",modelValue:e(l).form.items.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e(l).form.items.name=r),prop:"name",placeholder:e(o)("Please input field",{field:e(o)("product.name")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(o)("product.price"),type:"number",prop:"price","input-attr":{step:1},modelValue:e(l).form.items.price,"onUpdate:modelValue":t[1]||(t[1]=r=>e(l).form.items.price=r),modelModifiers:{number:!0},placeholder:e(o)("Please input field",{field:e(o)("product.price")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(o)("product.expire"),type:"number",prop:"expire","input-attr":{step:1},modelValue:e(l).form.items.expire,"onUpdate:modelValue":t[2]||(t[2]=r=>e(l).form.items.expire=r),modelModifiers:{number:!0},placeholder:e(o)("Please input field",{field:e(o)("product.expire")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(o)("product.color"),type:"color",modelValue:e(l).form.items.color,"onUpdate:modelValue":t[3]||(t[3]=r=>e(l).form.items.color=r),prop:"color",placeholder:e(o)("Please input field",{field:e(o)("product.color")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(o)("product.num"),type:"number",prop:"num","input-attr":{step:1},modelValue:e(l).form.items.num,"onUpdate:modelValue":t[4]||(t[4]=r=>e(l).form.items.num=r),modelModifiers:{number:!0},placeholder:e(o)("Please input field",{field:e(o)("product.num")})},null,8,["label","modelValue","placeholder"]),d(i,{label:e(o)("product.dec"),type:"textarea",modelValue:e(l).form.items.dec,"onUpdate:modelValue":t[5]||(t[5]=r=>e(l).form.items.dec=r),prop:"dec","input-attr":{rows:3},onKeyup:[t[6]||(t[6]=v(g(()=>{},["stop"]),["enter"])),t[7]||(t[7]=v(g(r=>e(l).onSubmit(n.value),["ctrl"]),["enter"]))],placeholder:e(o)("Please input field",{field:e(o)("product.dec")})},null,8,["label","modelValue","placeholder"])]),_:1},8,["model","label-width","rules"]))],6)]),_:1})),[[U,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{L as _};
