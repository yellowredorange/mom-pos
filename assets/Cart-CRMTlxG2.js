import{d as L,y as N,a as P,s as T,c as M,U as O,V as U,f as a,j as i,w as o,i as m,t as s,k as y,g,A as q,l as r,B as Q,m as f,F as $,D as h,S as b,W as w,_ as j}from"./index-6v_cMgFu.js";import{Q as x,a as z,b as C,c as k}from"./QList-BILn4uh7.js";import{Q as A}from"./QBtnGroup-WTiyAqDy.js";import{Q as E}from"./QPage-o1k6HZV2.js";const R={class:"page-title"},G={style:{"font-size":"1rem","margin-bottom":"1rem","text-align":"center"}},W={class:"normal-font q-mb-sm"},H={key:1,class:"text-h6 q-pa-md text-center text-color text-color-primary"},J={class:"btn-container"},K={key:3,class:"row justify-between q-gutter-md items-center q-mt-md"},X={class:"row no-wrap items-center"},Y={class:"q-mr-sm text-base"},Z={class:"q-ml-sm text-base"},ee=L({__name:"Cart",setup(te){const _=N(),u=P(),{cart:d}=T(u),I=M(()=>u.cartTotal),c=O(),{t}=U(),B=e=>{const n=d.value[e];u.updateCartItemQuantity(e,n.quantity+1)},D=e=>{const n=d.value[e];n.quantity>1?u.updateCartItemQuantity(e,n.quantity-1):u.removeFromCart(e)},F=()=>{c.dialog({title:t("confirm"),message:t("clearCartMessage"),ok:{label:t("yes"),color:"primary"},cancel:{label:t("no"),color:"primary",outline:!0},persistent:!0}).onOk(()=>{u.clearCart(),c.notify({color:"secondary",message:t("cartCleared")})}).onCancel(()=>{})},S=async()=>{var e;try{await u.checkout(),c.notify({type:"positive",message:t("checkoutSuccess")}),_.push("/order-history")}catch(n){((e=n.response)==null?void 0:e.status)===401?(c.notify({type:"negative",color:"accent",message:t("unauthorized")}),_.push("/user")):c.notify({type:"negative",color:"accent",message:n.message||t("checkoutError")})}},V=async()=>{try{const e=await c.dialog({title:t("confirmation"),message:t("proceedCheckout"),ok:{label:t("yes"),color:"primary",outline:!1},cancel:{label:t("no"),color:"primary",outline:!0},persistent:!0});e.onOk(async()=>{if(!c.cookies.get("token")){c.notify({type:"negative",color:"accent",message:t("notLoggedIn")}),_.push({path:"/user",query:{from:"/cart"}});return}await S()}),e.onCancel(()=>{}),e.onDismiss(()=>{console.log("Dialog dismissed.")})}catch(e){console.error("Dialog error:",e),c.notify({type:"negative",color:"accent",message:"An error occurred while opening the confirmation dialog."})}};return(e,n)=>(a(),i(E,{class:"q-pa-md"},{default:o(()=>[m("h5",R,s(e.$t("shopping-cart")),1),m("div",G,s(e.$t("here-is-the-product-you-order")),1),y(d).length?(a(),i(x,{key:0,bordered:"",separator:"",class:"rounded-borders"},{default:o(()=>[(a(!0),g($,null,q(y(d),(l,v)=>(a(),i(z,{key:v,class:"q-py-md"},{default:o(()=>[r(C,{avatar:"",class:"responsive-img"},{default:o(()=>[l.photoUrl?(a(),i(Q,{key:0,src:l.photoUrl,style:{width:"100px",height:"100px"},ratio:1,class:"rounded-borders"},null,8,["src"])):(a(),i(Q,{key:1}))]),_:2},1024),r(C,null,{default:o(()=>[r(k,{class:"item-name"},{default:o(()=>[f(s(l.name),1)]),_:2},1024),r(k,{caption:""},{default:o(()=>[f(s(e.$t("priceDetails",{label:e.$t("unitPrice"),price:l.price.toFixed(2)})),1)]),_:2},1024),(a(!0),g($,null,q(l.selectedOptions,p=>(a(),i(k,{key:p.category,caption:""},{default:o(()=>[f(s(p.category)+": "+s(p.option)+" (+$"+s(p.additionalPrice.toFixed(2))+") ",1)]),_:2},1024))),128)),r(k,{caption:""},{default:o(()=>[f(s(e.$t("priceDetails",{label:e.$t("total"),price:l.totalPrice.toFixed(2)})),1)]),_:2},1024)]),_:2},1024),r(C,{side:""},{default:o(()=>[m("div",W,s(e.$t("quantity",{quantity:l.quantity})),1),r(A,{spread:""},{default:o(()=>[r(h,{flat:"",color:"secondary",icon:"remove",onClick:p=>D(v)},null,8,["onClick"]),r(h,{flat:"",color:"primary",icon:"add",onClick:p=>B(v)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):(a(),g("div",H,s(e.$t("your-cart-is-empty-now")),1)),m("div",J,[y(d).length?b("",!0):(a(),i(h,{key:0,color:"primary",label:y(t)("buy-now"),onClick:n[0]||(n[0]=l=>e.$router.push("/menu")),class:"cta-button"},null,8,["label"]))]),y(d).length?(a(),i(w,{key:2,class:"q-my-md"})):b("",!0),y(d).length?(a(),g("div",K,[r(h,{outline:"",class:"clear-cart",label:e.$t("clear-cart"),onClick:F},null,8,["label"]),r(h,{color:"primary",onClick:V,class:"cta-button"},{default:o(()=>[m("div",X,[m("div",Y,s(e.$t("checkout")),1),r(w,{vertical:"",inset:"",color:"white"}),m("div",Z,"$"+s(Math.ceil(I.value).toFixed(2)),1)])]),_:1})])):b("",!0)]),_:1}))}}),ne=j(ee,[["__scopeId","data-v-add749d0"]]);export{ne as default};
