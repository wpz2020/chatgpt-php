import{A as n,d as s,z as o}from"./index-89e26330.js";function r(t=0){let a=t;const e={Default:70,Classic:50,Streamline:60};if(n()){const i=s();o().state.tabFullScreen||(a+=e[i.layout.layoutMode])}else a+=60;return{height:"calc(100vh - "+a.toString()+"px)"}}export{r as m};
