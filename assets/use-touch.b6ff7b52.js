import{D as t}from"./vue-libs.bf80eadf.js";function X(e,a){return e>a?"horizontal":a>e?"vertical":""}function d(){const e=t(0),a=t(0),c=t(0),n=t(0),o=t(0),u=t(0),l=t(""),f=()=>l.value==="vertical",h=()=>l.value==="horizontal",r=()=>{c.value=0,n.value=0,o.value=0,u.value=0,l.value=""};return{move:s=>{const v=s.touches[0];c.value=(v.clientX<0?0:v.clientX)-e.value,n.value=v.clientY-a.value,o.value=Math.abs(c.value),u.value=Math.abs(n.value);const i=10;(!l.value||o.value<i&&u.value<i)&&(l.value=X(o.value,u.value))},start:s=>{r(),e.value=s.touches[0].clientX,a.value=s.touches[0].clientY},reset:r,startX:e,startY:a,deltaX:c,deltaY:n,offsetX:o,offsetY:u,direction:l,isVertical:f,isHorizontal:h}}export{d as u};
