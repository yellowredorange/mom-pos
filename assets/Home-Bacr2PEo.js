import{d as m,h as _,r as D,o as f,u as E,S as y,_ as C,c as h,a as s,b as p,w as x,e as d,f as b,g as w,p as v,i as g}from"./index-_obB6ZCr.js";async function l(u,...e){for(const t of e)switch(typeof t){case"string":await M(u,t);break;case"number":await A(t);break;case"function":await t(u,...e);break;default:await t}}async function M(u,e){const t=function(o,[...r]){return[...o,NaN].findIndex((a,n)=>r[n]!==a)}(u.textContent,e);await async function(o,r,a=60){for(const n of function*(i){for(const F of i)yield B=>requestAnimationFrame(()=>B.textContent=F)}(r))n(o),await A(a+a*(Math.random()-.5))}(u,[...P(u.textContent,t),...S(e,t)])}async function A(u){await new Promise(e=>setTimeout(e,u))}function*S([...u],e=0,t=u.length){for(;e<t;)yield u.slice(0,++e).join("")}function*P([...u],e=0,t=u.length){for(;t>e;)yield u.slice(0,--t).join("")}const k=l;var O=m({name:"Typical",props:{steps:{type:Array,required:!0},wrapper:{type:String,default:"div"},loop:{type:Number,default:1}},render(){return _(this.wrapper,{ref:"myRef"})},setup:({steps:u,loop:e})=>{const t=D(null);return f(()=>{const o=t.value;e===1/0?l(o,...u,k):typeof e=="number"&&e>0?l(o,...Array(e).fill(u).flat()):l(o,...u)}),{myRef:t}}});const N=O,I=E(),R=m({name:"Home",setup(){f(async()=>{y().reveal(".scroll-reveal",{delay:200,distance:"15px",origin:"bottom",duration:1e3,easing:"ease-in-out",interval:100,opacity:0,scale:1}),await I.fetchAllMenus()})},components:{VTypical:N}}),T=""+new URL("MomPosMainPage-CqOzbrKy.webp",import.meta.url).href,c=u=>(v("data-v-c287c9ad"),u=u(),g(),u),V={class:"home container mx-auto px-4 py-8"},$={class:"flex flex-col items-center"},q=c(()=>s("div",{class:"logo-container mb-8 scroll-reveal"},[s("img",{src:T,alt:"MOM POS Logo",class:"logo max-w-full h-auto",loading:"lazy"})],-1)),j=c(()=>s("h1",{class:"text-3xl font-bold text-center mb-3 scroll-reveal"},"歡迎使用 MomPos",-1)),z={class:"text-center max-w-2xl mx-auto mb-8 scroll-reveal"},H=c(()=>s("h2",{class:"text-xl font-semibold mb-2 scroll-reveal primary-color"},"最貼心的點餐 Pos 神器",-1)),L=c(()=>s("p",{class:"mb-4"}," MOM POS 是一款專為餐廳設計的銷售點系統（POS），旨在幫助餐廳提高營運效率，方便餐廳店主快速上手。 ",-1)),K=c(()=>s("p",{class:"mb-4"}," MOM POS 就像媽媽一樣的精打細算、細心周到，幫你省下時間，及精確的掌握店內營銷。包含了線上點餐、顧客追蹤、訂單管理。 ",-1));function U(u,e,t,o,r,a){const n=d("v-typical"),i=d("router-link");return b(),h("div",V,[s("div",$,[q,j,s("section",z,[H,L,p(n,{class:"blink text-lg font-semibold mb-2",steps:[" 媽媽都說",1e3," 媽媽都說好用的",500," 媽媽都說好用的 Pos 系統",1e3," 媽媽都說好用的 Pos 系統👍",500],loop:2,wrapper:"h2"}),K,p(i,{to:"/menu",class:"cta-button"},{default:x(()=>[w("👉點餐去")]),_:1})])])])}const J=C(R,[["render",U],["__scopeId","data-v-c287c9ad"]]);export{J as default};
