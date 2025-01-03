import{h as a,l as E,H as ue,I as de,Y as G,T as ce,Z as ge,$ as K,a0 as fe,J as me,a1 as ve,L as he,M as be,r as O,a2 as xe,a3 as ye,c as p,x as $,a4 as _e,V as j,a5 as Se,a6 as pe,X as Ie,a7 as F,a8 as we,d as Te,u as ke,o as Le,i as I,y as H,w as m,f as b,b as T,S as V,z as Y,F as z,j as q,e as A,B as Ce,E as qe,G as Oe,D as k,p as Ne,k as Qe,_ as Be}from"./index-CwxtfagM.js";import{a as U,c as N,b as L,Q as R}from"./QList-C90vgPc7.js";import{Q as $e}from"./QPage-BnXJ4UDH.js";const He=[a("circle",{cx:"15",cy:"15",r:"15"},[a("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),a("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[a("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),a("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),a("circle",{cx:"105",cy:"15",r:"15"},[a("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),a("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])],Ee=E({name:"QSpinnerDots",props:ue,setup(e){const{cSize:v,classes:c}=de(e);return()=>a("svg",{class:c.value,fill:"currentColor",width:v.value,height:v.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},He)}}),Ae=E({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:v,emit:c}){let s=!1,h,l,u=null,o=null,i,d;function r(){h&&h(),h=null,s=!1,u!==null&&(clearTimeout(u),u=null),o!==null&&(clearTimeout(o),o=null),l!==void 0&&l.removeEventListener("transitionend",i),i=null}function g(n,f,y){f!==void 0&&(n.style.height=`${f}px`),n.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,h=y}function x(n,f){n.style.overflowY=null,n.style.height=null,n.style.transition=null,r(),f!==d&&c(f)}function Q(n,f){let y=0;l=n,s===!0?(r(),y=n.offsetHeight===n.scrollHeight?0:void 0):(d="hide",n.style.overflowY="hidden"),g(n,y,f),u=setTimeout(()=>{u=null,n.style.height=`${n.scrollHeight}px`,i=_=>{o=null,(Object(_)!==_||_.target===n)&&x(n,"show")},n.addEventListener("transitionend",i),o=setTimeout(i,e.duration*1.1)},100)}function B(n,f){let y;l=n,s===!0?r():(d="show",n.style.overflowY="hidden",y=n.scrollHeight),g(n,y,f),u=setTimeout(()=>{u=null,n.style.height=0,i=_=>{o=null,(Object(_)!==_||_.target===n)&&x(n,"hide")},n.addEventListener("transitionend",i),o=setTimeout(i,e.duration*1.1)},100)}return G(()=>{s===!0&&r()}),()=>a(ce,{css:!1,appear:e.appear,onEnter:Q,onLeave:B},v.default)}}),w=ge({}),Me=Object.keys(K),Pe=E({name:"QExpansionItem",props:{...K,...fe,...me,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ve,"click","afterShow","afterHide"],setup(e,{slots:v,emit:c}){const{proxy:{$q:s}}=he(),h=be(e,s),l=O(e.modelValue!==null?e.modelValue:e.defaultOpened),u=O(null),o=xe(),{show:i,hide:d,toggle:r}=ye({showing:l});let g,x;const Q=p(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),B=p(()=>e.contentInsetLevel===void 0?null:{["padding"+(s.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),n=p(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),f=p(()=>{const t={};return Me.forEach(S=>{t[S]=e[S]}),t}),y=p(()=>n.value===!0||e.expandIconToggle!==!0),_=p(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),X=p(()=>e.disable!==!0&&(n.value===!0||e.expandIconToggle===!0)),Z=p(()=>({expanded:l.value===!0,detailsId:o.value,toggle:r,show:i,hide:d})),M=p(()=>{const t=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":o.value,"aria-label":t}});$(()=>e.group,t=>{x!==void 0&&x(),t!==void 0&&D()});function W(t){n.value!==!0&&r(t),c("click",t)}function ee(t){t.keyCode===13&&P(t,!0)}function P(t,S){S!==!0&&u.value!==null&&u.value.focus(),r(t),we(t)}function te(){c("afterShow")}function ne(){c("afterHide")}function D(){g===void 0&&(g=_e()),l.value===!0&&(w[e.group]=g);const t=$(l,C=>{C===!0?w[e.group]=g:w[e.group]===g&&delete w[e.group]}),S=$(()=>w[e.group],(C,se)=>{se===g&&C!==void 0&&C!==g&&d()});x=()=>{t(),S(),w[e.group]===g&&delete w[e.group],x=void 0}}function ae(){const t={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},S=[a(F,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:_.value})];return X.value===!0&&(Object.assign(t,{tabindex:0,...M.value,onClick:P,onKeyup:ee}),S.unshift(a("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(L,t,()=>S)}function oe(){let t;return v.header!==void 0?t=[].concat(v.header(Z.value)):(t=[a(L,()=>[a(N,{lines:e.labelLines},()=>e.label||""),e.caption?a(N,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&t[e.switchToggleSide===!0?"push":"unshift"](a(L,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(F,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&t[e.switchToggleSide===!0?"unshift":"push"](ae()),t}function ie(){const t={ref:"item",style:e.headerStyle,class:e.headerClass,dark:h.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return y.value===!0&&(t.clickable=!0,t.onClick=W,Object.assign(t,n.value===!0?f.value:M.value)),a(U,t,oe)}function le(){return Se(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:B.value,id:o.value},Ie(v.default)),[[pe,l.value]])}function re(){const t=[ie(),a(Ae,{duration:e.duration,onShow:te,onHide:ne},le)];return e.expandSeparator===!0&&t.push(a(j,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:h.value}),a(j,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:h.value})),t}return e.group!==void 0&&D(),G(()=>{x!==void 0&&x()}),()=>a("div",{class:Q.value},[a("div",{class:"q-expansion-item__container relative-position"},re())])}}),J=e=>(Ne("data-v-ab8246df"),e=e(),Qe(),e),De=J(()=>A("h5",{class:"page-title"},"🛍️Order History ",-1)),je=J(()=>A("div",{style:{"font-size":"1rem","margin-bottom":"1rem","text-align":"center"}},"Your order hisotry will be displayed in here. 🍳",-1)),Fe={key:0,class:"loading-overlay"},Ve={key:0,class:"text-grey-8"},Ye={key:2,class:"text-h6 q-pa-md text-center text-color text-color-primary"},ze={class:"btn-container"},Re=Te({__name:"OrderHistory",setup(e){const v=ke(),c=O([]),s=O(!0);Le(async()=>{try{c.value=await v.getAllOrders()}catch(o){console.error("Failed to fetch orders:",o)}finally{s.value=!1}});const h=o=>new Date(o).toLocaleString(),l=o=>o.some(i=>i.trim()!==""),u=o=>o.filter(i=>i.trim()!=="").join(", ");return(o,i)=>(I(),H($e,{padding:""},{default:m(()=>[De,je,b(R,{bordered:"",separator:""},{default:m(()=>[s.value?(I(),T("div",Fe,[b(Ee,{color:"white",size:"50px"})])):V("",!0),c.value&&c.value.length>0?(I(!0),T(z,{key:1},Y(c.value,d=>(I(),H(Pe,{key:d.orderId,label:`Order #${d.orderId} - ${h(d.orderDate)}`,caption:`Total: $${d.totalAmount.toFixed(2)}`,group:"orders","header-class":"order-header"},{default:m(()=>[b(qe,null,{default:m(()=>[b(Oe,null,{default:m(()=>[b(R,{dense:""},{default:m(()=>[(I(!0),T(z,null,Y(d.orderItems,r=>(I(),H(U,{key:r.orderItemId},{default:m(()=>[b(L,null,{default:m(()=>[b(N,null,{default:m(()=>[q(k(r.quantity)+"x "+k(r.menuItemName)+" ",1),l(r.options)?(I(),T("span",Ve," ("+k(u(r.options))+")",1)):V("",!0)]),_:2},1024),b(N,{caption:""},{default:m(()=>[q(" Unit Price: $"+k(r.unitPrice.toFixed(2)),1)]),_:2},1024)]),_:2},1024),b(L,{side:""},{default:m(()=>[q(" $"+k(r.totalPrice.toFixed(2)),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label","caption"]))),128)):(I(),T("div",Ye,[q(" You don't have any orders yet. "),A("div",ze,[b(Ce,{color:"primary",label:"Order Now 🤩",onClick:i[0]||(i[0]=d=>o.$router.push("/menu")),class:"cta-button"})])]))]),_:1})]),_:1}))}}),Je=Be(Re,[["__scopeId","data-v-ab8246df"]]);export{Je as default};
