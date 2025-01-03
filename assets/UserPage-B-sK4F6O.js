import{a8 as X,r as v,a9 as ee,d as S,a as B,c as j,i as V,y as x,w as r,f as a,G as _,e,aa as C,B as U,ab as T,E as I,ac as te,V as w,p as R,k as Q,_ as q,ad as oe,ae as f,o as se,g as z,D,A,R as Z,af as $,j as p}from"./index-D6pCDPq7.js";import{Q as ae}from"./QPage-csHJ0YPv.js";import{d as E,l as O}from"./MomPosMainPageDark-BsLCBqY-.js";const le=X("user",()=>{const i=v(null);return{user:i,fetchUserInfo:async u=>{try{const m=await ee(u);i.value=m}catch(m){console.error("Error fetching user info:",m)}},logout:()=>{i.value=null}}}),ne=i=>(R("data-v-4777f04c"),i=i(),Q(),i),re=ne(()=>e("div",{class:"text-h6 text-center"},"Register",-1)),ie={class:"flex-center"},ue=["src"],de=S({__name:"RegisterComponent",setup(i){const o=v(""),s=v(""),u=v(""),m=B(),h=j(()=>m.isDarkMode?E:O),b=async()=>{const t=(()=>{let n="";return(o.value.length<6||o.value.length>20)&&(n+="Account must be 6-20 characters long. "),/^[a-zA-Z0-9._]+$/.test(o.value)||(n+='Account must not include special characters other than "." and "_". '),/[_\.]{2,}/.test(o.value)&&(n+="Account must not include consecutive special characters. "),(!/^[a-zA-Z0-9]/.test(o.value)||!/[a-zA-Z0-9]$/.test(o.value))&&(n+="Account must start and end with a letter or number. "),/\b(admin|root)\b/.test(o.value)&&(n+='Account must not include reserved words like "admin" or "root". '),(s.value.length<8||s.value.length>20)&&(n+="Password must be 8-20 characters long. "),(!/[a-zA-Z]/.test(s.value)||!/\d/.test(s.value))&&(n+="Password must include both letters and numbers. "),n})();if(t){w.create({type:"negative",message:t.trim()});return}try{await te({account:o.value,password:s.value,name:u.value}),w.create({type:"positive",message:"Registration successful! Please login now"}),setTimeout(()=>{window.location.reload()},2e3)}catch(n){w.create({type:"negative",message:n.message||"Registration failed. Please try again."})}};return(d,t)=>(V(),x(I,{class:"rounded-borders"},{default:r(()=>[a(_,null,{default:r(()=>[re]),_:1}),a(_,null,{default:r(()=>[e("div",ie,[e("img",{src:h.value,"spinner-color":"white",class:"login-image"},null,8,ue)]),a(C,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=n=>u.value=n),label:"User Name",outlined:"",dense:""},null,8,["modelValue"]),a(C,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=n=>o.value=n),label:"Account",outlined:"",dense:""},null,8,["modelValue"]),a(C,{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=n=>s.value=n),label:"Password",type:"password",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),a(T,{align:"center",class:"card-margin"},{default:r(()=>[a(U,{label:"Register",color:"primary",onClick:b,disable:!o.value||!s.value||!u.value},null,8,["disable"]),a(U,{label:"Back to Login",color:"secondary",onClick:t[3]||(t[3]=n=>d.$emit("open-login"))})]),_:1})]),_:1}))}}),ce=q(de,[["__scopeId","data-v-4777f04c"]]),Y=i=>(R("data-v-1f7302fd"),i=i(),Q(),i),me=Y(()=>e("div",{class:"text-h6 text-center"},"Welcome!",-1)),ve={class:"flex-center"},pe=["src"],fe={style:{"font-size":"1rem","text-align":"center","margin-bottom":"1rem"}},ge=Y(()=>e("div",null,"Do not have account?",-1)),he=S({__name:"LoginComponent",setup(i){const o=v(""),s=v(""),u=B(),m=async()=>{const d=(()=>{let t="";return(o.value.length<6||o.value.length>20)&&(t+="Account must be 6-20 characters long. "),/^[a-zA-Z0-9._]+$/.test(o.value)||(t+='Account must not include special characters other than "." and "_". '),/[_\.]{2,}/.test(o.value)&&(t+="Account must not include consecutive special characters. "),(!/^[a-zA-Z0-9]/.test(o.value)||!/[a-zA-Z0-9]$/.test(o.value))&&(t+="Account must start and end with a letter or number. "),/\b(admin|root)\b/.test(o.value)&&(t+='Account must not include reserved words like "admin" or "root". '),(s.value.length<8||s.value.length>20)&&(t+="Password must be 8-20 characters long. "),(!/[a-zA-Z]/.test(s.value)||!/\d/.test(s.value))&&(t+="Password must include both letters and numbers. "),t})();if(d){w.create({type:"negative",message:d.trim()});return}try{await oe({account:o.value,password:s.value}),w.create({type:"positive",message:"Login successful!"})}catch(t){w.create({type:"negative",message:t.message||"Login failed. Please try again."})}},h=j(()=>u.isDarkMode?E:O);return(b,d)=>(V(),x(I,{class:"rounded-borders"},{default:r(()=>[a(_,null,{default:r(()=>[me]),_:1}),a(_,null,{default:r(()=>[e("div",ve,[e("img",{src:h.value,"spinner-color":"white",class:"login-image"},null,8,pe)]),e("div",fe,[ge,e("div",{style:{color:"#FDA300",cursor:"pointer","font-weight":"bold"},onClick:d[0]||(d[0]=t=>b.$emit("open-register"))}," Click For Register! ")]),a(C,{modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=t=>o.value=t),label:"Account",outlined:"",dense:""},null,8,["modelValue"]),a(C,{modelValue:s.value,"onUpdate:modelValue":d[2]||(d[2]=t=>s.value=t),label:"Password",type:"password",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),a(T,{align:"center"},{default:r(()=>[a(U,{label:"Login",color:"primary",disable:!o.value||!s.value,onClick:m,class:"login-button"},null,8,["disable"])]),_:1})]),_:1}))}}),_e=q(he,[["__scopeId","data-v-1f7302fd"]]),g=i=>(R("data-v-9b543969"),i=i(),Q(),i),be={class:"user-page-container"},we={class:"q-ml-md"},ye={class:"text-h6",style:{"font-weight":"700"}},ke=g(()=>e("div",{class:"text-h6",style:{"font-weight":"700"}},"Logout",-1)),Ve=g(()=>e("div",{class:"text-h6",style:{"font-weight":"700"}},"Login",-1)),xe={class:"qa-container beautiful-shadow"},Ce=g(()=>e("div",{class:"text-h6 flex flex-center qa-title"},"Q & A",-1)),Ie={class:"qa-list"},Ae=g(()=>e("div",{class:"qa-item"},[e("div",{class:"q-text"},[e("strong",null,"Q:"),p(" Will you reveal my password? ")]),e("div",{class:"a-text"},[e("strong",null,"A:"),p(" No. I use PasswordHasher in .NET Core, so your password is securely hashed and never actually stored in the database. Don't worry. You can also just use a fake password to register. ")])],-1)),$e={class:"qa-item"},Ue=g(()=>e("div",{class:"q-text"},[e("strong",null,"Q:"),p(" Did you build this on your own? ")],-1)),Le={class:"a-text"},Pe=g(()=>e("strong",null,"A:",-1)),Se=g(()=>e("div",{class:"q-text"},[e("strong",null,"Q:"),p(" Can I become a shopper to build my own menu? ")],-1)),Re=g(()=>e("strong",null,"A:",-1)),Qe=S({__name:"UserPage",setup(i){const o=le(),s=v(!1),u=v(!1),m=v(!1),h=v(!1),b=v(null),d=()=>{u.value=!1,s.value=!0},t=()=>{s.value=!1,u.value=!0},n=()=>{s.value=!1},M=()=>{u.value=!1},F=()=>{confirm("Are you sure you want to logout?")&&(o.logout(),f.remove("token"),f.remove("permission"),f.remove("userId"),L=!1,window.location.href="/user")},G=()=>{s.value=!0};let L=!1;const N=f.get("token"),P=f.get("userId"),y=f.get("permission"),W=y==null?void 0:y.toUpperCase(),H=()=>{f.remove("permission"),f.set("permission","admin",{path:"/",expires:1}),window.location.href=`${window.location.origin}/#/menu-editor`,setTimeout(()=>{window.location.reload()},2e3)};return se(async()=>{var k;if(console.log(N),console.log(P),!N||!P){s.value=!0;return}if(!L)try{await o.fetchUserInfo(parseInt(P)),L=!0}catch(l){((k=l.response)==null?void 0:k.status)===401?s.value=!0:console.error("Unexpected error:",l)}}),(k,l)=>{const J=z("user-profile-component"),K=z("user-history-order-component");return V(),x(ae,{class:"q-pa-md flex flex-center"},{default:r(()=>[e("div",be,[a(I,{class:"user-profile-bar"},{default:r(()=>[a(_,{class:"row items-center"},{default:r(()=>{var c;return[a(U,{flat:"",round:"",onClick:l[0]||(l[0]=()=>{}),icon:"fas fa-user"}),e("div",we,[e("div",ye,D(((c=A(o).user)==null?void 0:c.userName)||"Guest"),1),e("div",null,D(A(W)||"Not logged in"),1)])]}),_:1})]),_:1}),A(y)?(V(),x(I,{key:0,class:"logout-bar",onClick:F},{default:r(()=>[a(_,{class:"logout-text"},{default:r(()=>[ke]),_:1})]),_:1})):Z("",!0),A(y)?Z("",!0):(V(),x(I,{key:1,class:"logout-bar",onClick:G},{default:r(()=>[a(_,{class:"logout-text"},{default:r(()=>[Ve]),_:1})]),_:1})),a($,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=c=>s.value=c)},{default:r(()=>[a(_e,{onOpenRegister:t,onClose:n})]),_:1},8,["modelValue"]),a($,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=c=>u.value=c)},{default:r(()=>[a(ce,{onOpenLogin:d,onClose:M})]),_:1},8,["modelValue"]),a($,{modelValue:m.value,"onUpdate:modelValue":l[4]||(l[4]=c=>m.value=c)},{default:r(()=>[a(J,{onClose:l[3]||(l[3]=c=>m.value=!1)})]),_:1},8,["modelValue"]),a($,{modelValue:h.value,"onUpdate:modelValue":l[6]||(l[6]=c=>h.value=c)},{default:r(()=>[a(K,{order:b.value,onClose:l[5]||(l[5]=c=>h.value=!1)},null,8,["order"])]),_:1},8,["modelValue"])]),e("div",xe,[Ce,e("div",Ie,[Ae,e("div",$e,[Ue,e("div",Le,[Pe,p(" Yes, I built both the frontend and backend by myself. Click "),e("a",{href:"javascript:void(0)",class:"clickable-link",onClick:l[7]||(l[7]=c=>k.$router.push("/project-details"))},"here"),p(" to see the details of how I built this. I initially thought it would be a simple website, but it became much more complicated and cost me a lot of time. 🫠 If you'd like to give me some advice, just click "),e("a",{href:"javascript:void(0)",class:"clickable-link",onClick:l[8]||(l[8]=c=>k.$router.push("/feedback"))},"here"),p(". Thank you! ")])]),e("div",{class:"qa-item"},[Se,e("div",{class:"a-text"},[Re,p(" Yes, but not yet. It's still in the beta phase. You can click "),e("span",{class:"clickable-text",onClick:H},"here"),p(" to explore the menu editor, but you can't save changes to the backend yet. ")])])])])]),_:1})}}}),De=q(Qe,[["__scopeId","data-v-9b543969"]]);export{De as default};
