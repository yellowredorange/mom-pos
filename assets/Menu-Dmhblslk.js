import{j as T,k as q,l as x,m as S,d as B,n as $,u as M,s as U,q as p,o as V,t as D,f as c,v as m,w as s,a as o,b as r,c as _,x as v,y as F,F as y,Q as N,z as C,A as P,g as A,B as i,C as E,D as b,_ as R}from"./index-_obB6ZCr.js";import{Q as h}from"./QImg-BQNFhN0k.js";import{Q as j}from"./QPageSticky-BdByVksN.js";import{Q as z}from"./QPage-DxPdVBgp.js";import{_ as L}from"./DefaultItemImage-BqXqOfJ2.js";const G=T({name:"QTab",props:q,emits:x,setup(f,{slots:d,emit:a}){const{renderTab:n}=S(f,d,a);return()=>n("div")}}),H={class:"q-mb-md category-tabs-container"},J={class:"row items-center"},K={class:"row q-col-gutter-md"},O={class:"item-font ellipsis-2-lines"},W={class:"text-subtitle2 ellipsis-2-lines"},X={class:"row items-center no-wrap q-mt-sm q-mb-xs"},Y={class:"price-font col"},Z={class:"col-auto"},ee=B({__name:"Menu",setup(f){const d=$(),a=M(),{categories:n}=U(a),l=p({get:()=>{var e;return((e=a.currentCategory)==null?void 0:e.categoryId)||null},set:e=>a.setCurrentCategory(e)}),k=p(()=>{var e;return l.value?(e=n.value.find(u=>u.categoryId===l.value))==null?void 0:e.menuItems:[]}),I=p(()=>a.cartItemCount);V(async()=>{await a.checkMenuUpdate(),a.lastSelectedCategory!==null?l.value=a.lastSelectedCategory:n.value.length>0&&(l.value=n.value[0].categoryId)});const g=e=>{d.push(`/item/${e.menuItemId}`)},Q=()=>{d.push("/cart")};return D(l,e=>{e!==null&&(a.lastSelectedCategory=e)}),(e,u)=>(c(),m(z,{class:"q-pa-md"},{default:s(()=>[o("div",H,[r(N,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=t=>l.value=t),dense:"",class:"text-primary category-tabs","active-color":"primary","indicator-color":"primary","inline-label":"","outside-arrows":"","mobile-arrows":""},{default:s(()=>[(c(!0),_(y,null,v(F(n),t=>(c(),m(G,{key:t.categoryId,name:t.categoryId},{default:s(()=>[o("div",J,i(t.name),1)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),o("div",K,[(c(!0),_(y,null,v(k.value,t=>(c(),_("div",{key:t.menuItemId,class:"col-12 col-sm-6 col-md-4"},[r(E,{class:"all-card",onClick:w=>g(t)},{default:s(()=>[t.photoUrl&&t.photoUrl!==""?(c(),m(h,{key:0,src:t.photoUrl,ratio:e.$q.screen.lt.sm?16/9:4/3,class:"card-image"},null,8,["src","ratio"])):(c(),m(h,{key:1,src:L,ratio:e.$q.screen.lt.sm?16/9:4/3,class:"card-image"},null,8,["ratio"])),r(b,{class:"card-content"},{default:s(()=>[o("div",O,i(t.name),1),o("div",W,i(t.description),1)]),_:2},1024),r(b,{class:"q-pt-none card-footer"},{default:s(()=>[o("div",X,[o("div",Y," $"+i(t.price.toFixed(2)),1),o("div",Z,[r(C,{color:"primary",label:"Add to Cart",onClick:w=>g(t)},null,8,["onClick"])])])]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),r(j,{position:"bottom-right",offset:[18,18]},{default:s(()=>[r(C,{fab:"",icon:"shopping_cart",color:"primary",onClick:Q},{default:s(()=>[r(P,{color:"red",floating:""},{default:s(()=>[A(i(I.value),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),le=R(ee,[["__scopeId","data-v-cdd9e702"]]);export{le as default};
