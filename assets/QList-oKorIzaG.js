import{l as d,c as l,h as o,W as v,J as k,Z as S,L as g,M as y,cF as E,r as q,cb as K,a7 as R,cG as $}from"./index-CtkdSceM.js";const j=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:a.value},v(n.default))}}),A=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=l(()=>parseInt(e.lines,10)),i=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),u=l(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>o("div",{style:u.value,class:i.value},v(n.default))}}),F=d({name:"QItem",props:{...k,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=g(),u=y(e,i),{hasLink:m,linkAttrs:_,linkClass:h,linkTag:B,navigateOnClick:L}=E(),r=q(null),c=q(null),b=l(()=>e.clickable===!0||m.value===!0||e.tag==="label"),s=l(()=>e.disable!==!0&&b.value===!0),x=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=l(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function Q(t){s.value===!0&&(c.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),L(t))}function w(t){if(s.value===!0&&K(t,[13,32])===!0){R(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,r.value.dispatchEvent(f)}a("keyup",t)}function I(){const t=$(n.default,[]);return s.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),t}return()=>{const t={ref:r,class:x.value,style:C.value,role:"listitem",onClick:Q,onKeyup:w};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,_.value)):b.value===!0&&(t["aria-disabled"]="true"),o(B.value,t,I())}}}),N=d({name:"QList",props:{...k,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const a=g(),i=y(e,a.proxy.$q),u=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:u.value},v(n.default))}});export{N as Q,F as a,j as b,A as c};