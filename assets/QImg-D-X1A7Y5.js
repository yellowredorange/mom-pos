import{c as r,l as $,r as s,L as M,cs as q,cH as O,o as E,h as a,T as F,W as P,O as W,x,cI as h}from"./index-CPEq9adi.js";const A={ratio:[String,Number]};function G(e,o){return r(()=>{const u=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const J=1.7778,U=$({name:"QImg",props:{...A,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:J},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:u}){const y=s(e.initialRatio),_=G(e,y),m=M(),{registerTimeout:C,removeTimeout:v}=q(),{registerTimeout:L,removeTimeout:b}=q(),f=r(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),z=r(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[s(null),s(f.value)],n=s(0),c=s(!1),g=s(!1),I=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),N=r(()=>({width:e.width,height:e.height})),k=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),R=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function B(){if(b(),e.loadingShowDelay===0){c.value=!0;return}L(()=>{c.value=!0},e.loadingShowDelay)}function S(){b(),c.value=!1}function j({target:t}){h(m)===!1&&(v(),y.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,l){l===1e3||h(m)===!0||(t.complete===!0?D(t):C(()=>{w(t,l+1)},50))}function D(t){h(m)!==!0&&(n.value=n.value^1,i[n.value].value=null,S(),t.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",t.currentSrc||t.src))}function H(t){v(),S(),g.value=!0,i[n.value].value=z.value,i[n.value^1].value=f.value,u("error",t)}function T(t){const l=i[t].value,d={key:"img_"+t,class:k.value,style:R.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return n.value===t?Object.assign(d,{class:d.class+"current",onLoad:j,onError:H}):d.class+="loaded",a("div",{class:"q-img__container absolute-full",key:"img"+t},a("img",d))}function Q(){return c.value===!1?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},P(o[g.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[a(W,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){x(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{v(),g.value=!1,l===null?(S(),i[n.value^1].value=f.value):B(),i[n.value].value=l},{immediate:!0})};O.value===!0?E(t):t()}return()=>{const t=[];return _.value!==null&&t.push(a("div",{key:"filler",style:_.value})),i[0].value!==null&&t.push(T(0)),i[1].value!==null&&t.push(T(1)),t.push(a(F,{name:"q-transition--fade"},Q)),a("div",{key:"main",class:I.value,style:N.value,role:"img","aria-label":e.alt},t)}}});export{U as Q};