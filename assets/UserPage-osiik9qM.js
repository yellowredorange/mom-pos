import{a9 as oe,r as g,aa as se,d as q,a as O,c as Y,e as I,z as x,w as n,i as o,C as b,g as e,ab as A,D as P,ac as M,E as $,ad as ae,W as k,p as Q,l as z,_ as N,R as le,v as ne,ae as re,U as ue,P as y,af as ie,o as ce,b as B,B as T,j as U,S as j,ag as L,k as p,ah as E}from"./index-CvfIfbHK.js";import{Q as de}from"./QPage-ClMvKES6.js";import{d as W,l as F}from"./MomPosMainPageDark-BsLCBqY-.js";const me=oe("user",()=>{const r=g(null);return{user:r,fetchUserInfo:async u=>{try{const m=await se(u);r.value=m}catch(m){console.error("Error fetching user info:",m)}},logout:()=>{r.value=null}}}),ve=r=>(Q("data-v-4777f04c"),r=r(),z(),r),ge=ve(()=>e("div",{class:"text-h6 text-center"},"Register",-1)),pe={class:"flex-center"},fe=["src"],he=q({__name:"RegisterComponent",setup(r){const t=g(""),s=g(""),u=g(""),m=O(),h=Y(()=>m.isDarkMode?W:F),_=async()=>{const c=(()=>{let a="";return(t.value.length<6||t.value.length>20)&&(a+="Account must be 6-20 characters long. "),/^[a-zA-Z0-9._]+$/.test(t.value)||(a+='Account must not include special characters other than "." and "_". '),/[_\.]{2,}/.test(t.value)&&(a+="Account must not include consecutive special characters. "),(!/^[a-zA-Z0-9]/.test(t.value)||!/[a-zA-Z0-9]$/.test(t.value))&&(a+="Account must start and end with a letter or number. "),/\b(admin|root)\b/.test(t.value)&&(a+='Account must not include reserved words like "admin" or "root". '),(s.value.length<8||s.value.length>20)&&(a+="Password must be 8-20 characters long. "),(!/[a-zA-Z]/.test(s.value)||!/\d/.test(s.value))&&(a+="Password must include both letters and numbers. "),a})();if(c){k.create({type:"negative",message:c.trim()});return}try{await ae({account:t.value,password:s.value,name:u.value}),k.create({type:"positive",message:"Registration successful! Please login now"}),setTimeout(()=>{window.location.reload()},2e3)}catch(a){k.create({type:"negative",message:a.message||"Registration failed. Please try again."})}};return(w,c)=>(I(),x($,{class:"rounded-borders"},{default:n(()=>[o(b,null,{default:n(()=>[ge]),_:1}),o(b,null,{default:n(()=>[e("div",pe,[e("img",{src:h.value,"spinner-color":"white",class:"login-image"},null,8,fe)]),o(A,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=a=>u.value=a),label:"User Name",outlined:"",dense:""},null,8,["modelValue"]),o(A,{modelValue:t.value,"onUpdate:modelValue":c[1]||(c[1]=a=>t.value=a),label:"Account",outlined:"",dense:""},null,8,["modelValue"]),o(A,{modelValue:s.value,"onUpdate:modelValue":c[2]||(c[2]=a=>s.value=a),label:"Password",type:"password",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),o(M,{align:"center",class:"card-margin"},{default:n(()=>[o(P,{label:"Register",color:"primary",onClick:_,disable:!t.value||!s.value||!u.value},null,8,["disable"]),o(P,{label:"Back to Login",color:"secondary",onClick:c[3]||(c[3]=a=>w.$emit("open-login"))})]),_:1})]),_:1}))}}),_e=N(he,[["__scopeId","data-v-4777f04c"]]),G=r=>(Q("data-v-2fd64e32"),r=r(),z(),r),ye=G(()=>e("div",{class:"text-h6 text-center"},"Welcome!",-1)),be={class:"flex-center"},we=["src"],ke={style:{"font-size":"1rem","text-align":"center","margin-bottom":"1rem"}},Ce=G(()=>e("div",null,"Do not have account?",-1)),Ve=q({__name:"LoginComponent",setup(r){const t=g(""),s=g(""),u=le(),m=ne(),h=typeof u.query.from=="string"?u.query.from:"/",_=O(),w=async()=>{const v=(()=>{let i="";return(t.value.length<6||t.value.length>20)&&(i+="Account must be 6-20 characters long. "),/^[a-zA-Z0-9._]+$/.test(t.value)||(i+='Account must not include special characters other than "." and "_". '),/[_\.]{2,}/.test(t.value)&&(i+="Account must not include consecutive special characters. "),(!/^[a-zA-Z0-9]/.test(t.value)||!/[a-zA-Z0-9]$/.test(t.value))&&(i+="Account must start and end with a letter or number. "),/\b(admin|root)\b/.test(t.value)&&(i+='Account must not include reserved words like "admin" or "root". '),(s.value.length<8||s.value.length>20)&&(i+="Password must be 8-20 characters long. "),(!/[a-zA-Z]/.test(s.value)||!/\d/.test(s.value))&&(i+="Password must include both letters and numbers. "),i})();if(v){k.create({type:"negative",message:v.trim()});return}try{await re({account:t.value,password:s.value}),k.create({type:"positive",message:"Login successful!"}),m.push(h),setTimeout(()=>{window.location.reload()},0)}catch(i){k.create({type:"negative",message:i.message||"Login failed. Please try again."})}},c=Y(()=>_.isDarkMode?W:F);return(a,v)=>(I(),x($,{class:"rounded-borders"},{default:n(()=>[o(b,null,{default:n(()=>[ye]),_:1}),o(b,null,{default:n(()=>[e("div",be,[e("img",{src:c.value,"spinner-color":"white",class:"login-image"},null,8,we)]),e("div",ke,[Ce,e("div",{style:{color:"#FDA300",cursor:"pointer","font-weight":"bold"},onClick:v[0]||(v[0]=i=>a.$emit("open-register"))}," Click For Register! ")]),o(A,{modelValue:t.value,"onUpdate:modelValue":v[1]||(v[1]=i=>t.value=i),label:"Account",outlined:"",dense:""},null,8,["modelValue"]),o(A,{modelValue:s.value,"onUpdate:modelValue":v[2]||(v[2]=i=>s.value=i),label:"Password",type:"password",outlined:"",dense:""},null,8,["modelValue"])]),_:1}),o(M,{align:"center"},{default:n(()=>[o(P,{label:"Login",color:"primary",disable:!t.value||!s.value,onClick:w,class:"login-button"},null,8,["disable"])]),_:1})]),_:1}))}}),Ie=N(Ve,[["__scopeId","data-v-2fd64e32"]]),f=r=>(Q("data-v-8e394b06"),r=r(),z(),r),xe={class:"user-page-container"},Ae={class:"q-ml-md"},$e={class:"text-h6",style:{"font-weight":"700"}},Ue=f(()=>e("div",{class:"text-h6",style:{"font-weight":"700"}},"Logout",-1)),Le=f(()=>e("div",{class:"text-h6",style:{"font-weight":"700"}},"Login",-1)),Pe={class:"qa-container beautiful-shadow"},Se=f(()=>e("div",{class:"text-h6 flex flex-center qa-title"},"Q & A",-1)),Re={class:"qa-list"},qe=f(()=>e("div",{class:"qa-item"},[e("div",{class:"q-text"},[e("strong",null,"Q:"),p(" Will you reveal my password? ")]),e("div",{class:"a-text"},[e("strong",null,"A:"),p(" No. I use PasswordHasher in .NET Core, so your password is securely hashed and never actually stored in the database. Don't worry. You can also just use a fake password to register. ")])],-1)),Qe={class:"qa-item"},ze=f(()=>e("div",{class:"q-text"},[e("strong",null,"Q:"),p(" Did you build this on your own? ")],-1)),Ne={class:"a-text"},De=f(()=>e("strong",null,"A:",-1)),Ze=f(()=>e("div",{class:"q-text"},[e("strong",null,"Q:"),p(" Can I become a shopper to build my own menu? ")],-1)),Be=f(()=>e("strong",null,"A:",-1)),Te=q({__name:"UserPage",setup(r){const t=ue(),s=me(),u=g(!1),m=g(!1),h=g(!1),_=g(!1),w=g(null),c=()=>{m.value=!1,u.value=!0},a=()=>{u.value=!1,m.value=!0},v=()=>{u.value=!1},i=()=>{m.value=!1},H=()=>{t.dialog({title:"Confirm Logout",message:"Are you sure you want to logout?",ok:{label:"Logout",color:"primary"},cancel:{label:"Cancel",color:"primary",outline:!0},persistent:!0}).onOk(()=>{s.logout(),y.remove("token"),y.remove("permission"),y.remove("userId"),Z.clearPermission(),S=!1,E.push("/"),t.notify({color:"secondary",message:"You have logged out successfully."})}).onCancel(()=>{t.notify({color:"primary",message:"Logout canceled."})})},J=()=>{u.value=!0};let S=!1;const D=y.get("token"),R=y.get("userId"),C=y.get("permission"),K=C==null?void 0:C.toUpperCase(),Z=ie(),X=()=>{y.remove("permission"),Z.setPermission("admin"),E.push("/menu-editor")};return ce(async()=>{var V;if(console.log(D),console.log(R),!D||!R){u.value=!0;return}if(!S)try{await s.fetchUserInfo(parseInt(R)),S=!0}catch(l){((V=l.response)==null?void 0:V.status)===401?u.value=!0:console.error("Unexpected error:",l)}}),(V,l)=>{const ee=B("user-profile-component"),te=B("user-history-order-component");return I(),x(de,{class:"q-pa-md flex flex-center"},{default:n(()=>[e("div",xe,[o($,{class:"user-profile-bar"},{default:n(()=>[o(b,{class:"row items-center"},{default:n(()=>{var d;return[o(P,{flat:"",round:"",onClick:l[0]||(l[0]=()=>{}),icon:"fas fa-user"}),e("div",Ae,[e("div",$e,T(((d=U(s).user)==null?void 0:d.userName)||"Guest"),1),e("div",null,T(U(K)||"Not logged in"),1)])]}),_:1})]),_:1}),U(C)?(I(),x($,{key:0,class:"logout-bar",onClick:H},{default:n(()=>[o(b,{class:"logout-text"},{default:n(()=>[Ue]),_:1})]),_:1})):j("",!0),U(C)?j("",!0):(I(),x($,{key:1,class:"logout-bar",onClick:J},{default:n(()=>[o(b,{class:"logout-text"},{default:n(()=>[Le]),_:1})]),_:1})),o(L,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=d=>u.value=d)},{default:n(()=>[o(Ie,{onOpenRegister:a,onClose:v})]),_:1},8,["modelValue"]),o(L,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=d=>m.value=d)},{default:n(()=>[o(_e,{onOpenLogin:c,onClose:i})]),_:1},8,["modelValue"]),o(L,{modelValue:h.value,"onUpdate:modelValue":l[4]||(l[4]=d=>h.value=d)},{default:n(()=>[o(ee,{onClose:l[3]||(l[3]=d=>h.value=!1)})]),_:1},8,["modelValue"]),o(L,{modelValue:_.value,"onUpdate:modelValue":l[6]||(l[6]=d=>_.value=d)},{default:n(()=>[o(te,{order:w.value,onClose:l[5]||(l[5]=d=>_.value=!1)},null,8,["order"])]),_:1},8,["modelValue"])]),e("div",Pe,[Se,e("div",Re,[qe,e("div",Qe,[ze,e("div",Ne,[De,p(" Yes, I built both the frontend and backend by myself. Click "),e("a",{href:"javascript:void(0)",class:"clickable-link",onClick:l[7]||(l[7]=d=>V.$router.push("/project-details"))},"here"),p(" to see the details of how I built this. I initially thought it would be a simple website, but it became much more complicated and cost me a lot of time. 🫠 If you'd like to give me some advice, just click "),e("a",{href:"javascript:void(0)",class:"clickable-link",onClick:l[8]||(l[8]=d=>V.$router.push("/feedback"))},"here"),p(". Thank you! ")])]),e("div",{class:"qa-item"},[Ze,e("div",{class:"a-text"},[Be,p(" Yes, but not yet. It's still in the beta phase. You can click "),e("span",{class:"clickable-text",onClick:X},"here"),p(" to explore the menu editor, but you can't save changes to the backend yet. ")])])])])]),_:1})}}}),Ye=N(Te,[["__scopeId","data-v-8e394b06"]]);export{Ye as default};
