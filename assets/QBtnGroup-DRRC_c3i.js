import{j as r,q as s,h as l,E as u}from"./index-BQzI9_lJ.js";const d=r({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:t}){const a=s(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(e=>o[e]===!0).map(e=>`q-btn-group--${e}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>l("div",{class:a.value},u(t.default))}});export{d as Q};
