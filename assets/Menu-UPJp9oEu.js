import{p as T,q,v as x,x as S,d as B,y as $,a as M,s as U,c as p,o as V,z as A,f as n,j as m,w as a,i as r,l,g as _,A as g,t as d,k as D,F as y,Q as E,B as C,C as b,D as h,E as F,G as N,m as P,_ as z}from"./index-Cxya-pB3.js";import{Q as O}from"./QPageSticky-hYacLEIH.js";import{Q as R}from"./QPage-DQWCz8DX.js";import{_ as j}from"./DefaultItemImage-BIn4Nqv8.js";const G=T({name:"QTab",props:q,emits:x,setup(f,{slots:u,emit:s}){const{renderTab:i}=S(f,u,s);return()=>i("div")}}),L={class:"q-mb-md category-tabs-container"},H={class:"row items-center"},J={class:"row q-col-gutter-md"},K={class:"item-font ellipsis-2-lines"},W={class:"text-subtitle2 ellipsis-2-lines"},X={class:"row items-center no-wrap q-mt-sm q-mb-xs"},Y={class:"price-font col"},Z={class:"col-auto"},ee=B({__name:"Menu",setup(f){const u=$(),s=M(),{categories:i}=U(s),c=p({get:()=>{var t;return((t=s.currentCategory)==null?void 0:t.categoryId)||null},set:t=>s.setCurrentCategory(t)}),k=p(()=>{if(c.value){const t=i.value.find(o=>o.categoryId===c.value);return(t==null?void 0:t.menuItems.filter(o=>o.isActive).slice().sort((o,e)=>o.sortOrder-e.sortOrder))||[]}return[]}),I=p(()=>s.cartItemCount);V(async()=>{await s.checkMenuUpdate(),s.lastSelectedCategory!==null?c.value=s.lastSelectedCategory:i.value.length>0&&(c.value=i.value[0].categoryId)});const v=t=>{u.push(`/item/${t.menuItemId}`)},Q=()=>{u.push("/cart")};return A(c,t=>{t!==null&&(s.lastSelectedCategory=t)}),(t,o)=>(n(),m(R,{class:"q-pa-md"},{default:a(()=>[r("div",L,[l(E,{modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e),dense:"",class:"text-primary category-tabs","active-color":"primary","indicator-color":"primary","inline-label":"","outside-arrows":"","mobile-arrows":""},{default:a(()=>[(n(!0),_(y,null,g(D(i).filter(e=>e.isActive),e=>(n(),m(G,{key:e.categoryId,name:e.categoryId},{default:a(()=>[r("div",H,d(e.name),1)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),r("div",J,[(n(!0),_(y,null,g(k.value,e=>(n(),_("div",{key:e.menuItemId,class:"col-12 col-sm-6 col-md-4"},[l(F,{class:"all-card",onClick:w=>v(e)},{default:a(()=>[e.photoUrl&&e.photoUrl!==""?(n(),m(C,{key:0,src:e.photoUrl,ratio:t.$q.screen.lt.sm?16/9:4/3,"spinner-color":"primary",class:"card-image"},null,8,["src","ratio"])):(n(),m(C,{key:1,src:j,"spinner-color":"primary",ratio:t.$q.screen.lt.sm?16/9:4/3,class:"card-image"},null,8,["ratio"])),l(b,{class:"card-content"},{default:a(()=>[r("div",K,d(e.name),1),r("div",W,d(e.description),1)]),_:2},1024),l(b,{class:"q-pt-none card-footer"},{default:a(()=>[r("div",X,[r("div",Y," $"+d(e.price.toFixed(2)),1),r("div",Z,[l(h,{color:"primary",label:t.$t("add-to-cart-0"),onClick:w=>v(e)},null,8,["label","onClick"])])])]),_:2},1024)]),_:2},1032,["onClick"])]))),128))]),l(O,{position:"bottom-right",offset:[18,40]},{default:a(()=>[l(h,{size:"50px",fab:"",icon:"shopping_cart",color:"primary",onClick:Q},{default:a(()=>[l(N,{color:"red",floating:""},{default:a(()=>[P(d(I.value),1)]),_:1})]),_:1})]),_:1})]),_:1}))}}),re=z(ee,[["__scopeId","data-v-ecdcdb3e"]]);export{re as default};
