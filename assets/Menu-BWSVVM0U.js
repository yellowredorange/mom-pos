import{j as T,k as q,l as x,m as S,d as B,n as $,u as M,s as U,q as p,o as V,t as A,f as c,v as m,w as a,a as r,b as l,c as _,x as g,y as D,F as y,Q as F,z as C,A as N,g as P,B as d,C as z,D as b,_ as E}from"./index-Ba_CxyyA.js";import{Q as h}from"./QImg-B59rC6X5.js";import{Q as O}from"./QPageSticky-oG1zGUVY.js";import{Q as R}from"./QPage-3eVBQiDJ.js";import{_ as j}from"./DefaultItemImage-BIn4Nqv8.js";const L=T({name:"QTab",props:q,emits:x,setup(f,{slots:u,emit:s}){const{renderTab:i}=S(f,u,s);return()=>i("div")}}),G={class:"q-mb-md category-tabs-container"},H={class:"row items-center"},J={class:"row q-col-gutter-md"},K={class:"item-font ellipsis-2-lines"},W={class:"text-subtitle2 ellipsis-2-lines"},X={class:"row items-center no-wrap q-mt-sm q-mb-xs"},Y={class:"price-font col"},Z={class:"col-auto"},ee=B({__name:"Menu",setup(f){const u=$(),s=M(),{categories:i}=U(s),n=p({get:()=>{var t;return((t=s.currentCategory)==null?void 0:t.categoryId)||null},set:t=>s.setCurrentCategory(t)}),k=p(()=>{if(n.value){const t=i.value.find(o=>o.categoryId===n.value);return(t==null?void 0:t.menuItems.filter(o=>o.isActive).slice().sort((o,e)=>o.sortOrder-e.sortOrder))||[]}return[]}),I=p(()=>s.cartItemCount);V(async()=>{await s.checkMenuUpdate(),s.lastSelectedCategory!==null?n.value=s.lastSelectedCategory:i.value.length>0&&(n.value=i.value[0].categoryId)});const v=t=>{u.push(`/item/${t.menuItemId}`)},Q=()=>{u.push("/cart")};return A(n,t=>{t!==null&&(s.lastSelectedCategory=t)}),(t,o)=>(c(),m(R,{class:"q-pa-md"},{default:a(()=>[r("div",G,[l(F,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e),dense:"",class:"text-primary category-tabs","active-color":"primary","indicator-color":"primary","inline-label":"","outside-arrows":"","mobile-arrows":""},{default:a(()=>[(c(!0),_(y,null,g(D(i).filter(e=>e.isActive),e=>(c(),m(L,{key:e.categoryId,name:e.categoryId},{default:a(()=>[r("div",H,d(e.name),1)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),r("div",J,[(c(!0),_(y,null,g(k.value,e=>(c(),_("div",{key:e.menuItemId,class:"col-12 col-sm-6 col-md-4"},[l(z,{class:"all-card",onClick:w=>v(e)},{default:a(()=>[e.photoUrl&&e.photoUrl!==""?(c(),m(h,{key:0,src:e.photoUrl,ratio:t.$q.screen.lt.sm?16/9:4/3,"spinner-color":"primary",class:"card-image"},null,8,["src","ratio"])):(c(),m(h,{key:1,src:j,"spinner-color":"primary",ratio:t.$q.screen.lt.sm?16/9:4/3,class:"card-image"},null,8,["ratio"])),l(b,{class:"card-content"},{default:a(()=>[r("div",K,d(e.name),1),r("div",W,d(e.description),1)]),_:2},1024),l(b,{class:"q-pt-none card-footer"},{default:a(()=>[r("div",X,[r("div",Y," $"+d(e.price.toFixed(2)),1),r("div",Z,[l(C,{color:"primary",label:"Add to Cart",onClick:w=>v(e)},null,8,["onClick"])])])]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),l(O,{position:"bottom-right",offset:[18,40]},{default:a(()=>[l(C,{size:"50px",fab:"",icon:"shopping_cart",color:"primary",onClick:Q},{default:a(()=>[l(N,{color:"red",floating:""},{default:a(()=>[P(d(I.value),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),le=E(ee,[["__scopeId","data-v-d6957e05"]]);export{le as default};
