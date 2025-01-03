import{d as nt,h as bt,r as at,o as st,u as mt,a as wt,c as kt,P as C,b as Tt,e as xt,f as Ot,g as m,n as Et,i as Q,j as _t,w as jt,k as Pt,p as St,l as Mt,_ as Rt}from"./index-DhLXV12e.js";import{d as It,l as $t}from"./MomPosMainPageDark-BsLCBqY-.js";/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function V(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Lt(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||V(t[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function P(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(V);if(V(t))return[t];if(Lt(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function X(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=w();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function At(t,e){for(var r=X(t),i=X(e),n=[],o=0;o<4;o++)for(var a=[r[o],r[o+4],r[o+8],r[o+12]],l=0;l<4;l++){var h=l*4,s=[i[h],i[h+1],i[h+2],i[h+3]],f=a[0]*s[0]+a[1]*s[1]+a[2]*s[2]+a[3]*s[3];n[o+h]=f}return n}function qt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return X(r)}}return w()}function Nt(t){var e=Math.PI/180*t,r=w();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function Ct(t){var e=Math.PI/180*t,r=w();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function zt(t){var e=Math.PI/180*t,r=w();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function tt(t,e){var r=w();return r[0]=t,r[5]=t,r}function Dt(t){var e=w();return e[12]=t,e}function Ft(t){var e=w();return e[13]=t,e}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var ct=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return ct(e)},0)}}(),Yt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ct;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var lt={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Wt(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Bt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var _={success:Bt,failure:Wt};function L(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function c(t,e){if(L(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,n){return e(i,n,t)});throw new TypeError("Expected either an array or object literal.")}function x(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(n){return i+=`
 — `+n}),console.log(i,"color: #ea654b;")}}function ut(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),n=e();try{c(P("[data-sr-id]"),function(o){var a=parseInt(o.getAttribute("data-sr-id"));r.active.push(a)})}catch(o){throw o}c(this.store.elements,function(o){r.active.indexOf(o.id)===-1&&r.stale.push(o.id)}),c(r.stale,function(o){return delete t.store.elements[o]}),c(this.store.elements,function(o){n.active.indexOf(o.containerId)===-1&&n.active.push(o.containerId),o.hasOwnProperty("sequence")&&i.active.indexOf(o.sequence.id)===-1&&i.active.push(o.sequence.id)}),c(this.store.containers,function(o){n.active.indexOf(o.id)===-1&&n.stale.push(o.id)}),c(n.stale,function(o){var a=t.store.containers[o].node;a.removeEventListener("scroll",t.delegate),a.removeEventListener("resize",t.delegate),delete t.store.containers[o]}),c(this.store.sequences,function(o){i.active.indexOf(o.id)===-1&&i.stale.push(o.id)}),c(i.stale,function(o){return delete t.store.sequences[o]})}var et=function(){var t={},e=document.documentElement.style;function r(i,n){if(n===void 0&&(n=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof n[i]=="string")return t[i]=i;if(typeof n["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function Ht(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,n={},o=t.node.getAttribute("style")||"",a=o.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=a?a.map(function(g){return g.trim()}).join("; ")+";":"",n.generated=a.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?n.computed:a.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var l=parseFloat(e.opacity),h=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),s={computed:l!==h?"opacity: "+l+";":"",generated:l!==h?"opacity: "+h+";":""},f=[];if(parseFloat(i.distance)){var u=i.origin==="top"||i.origin==="bottom"?"Y":"X",p=i.distance;(i.origin==="top"||i.origin==="left")&&(p=/^-/.test(p)?p.substr(1):"-"+p);var k=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=k[0],T=k[1];switch(T){case"em":p=parseInt(e.fontSize)*y;break;case"px":p=y;break;case"%":p=u==="Y"?t.node.getBoundingClientRect().height*y/100:t.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}u==="Y"?f.push(Ft(p)):f.push(Dt(p))}i.rotate.x&&f.push(Nt(i.rotate.x)),i.rotate.y&&f.push(Ct(i.rotate.y)),i.rotate.z&&f.push(zt(i.rotate.z)),i.scale!==1&&(i.scale===0?f.push(tt(2e-4)):f.push(tt(i.scale)));var v={};if(f.length){v.property=et("transform"),v.computed={raw:e[v.property],matrix:qt(e[v.property])},f.unshift(v.computed.matrix);var yt=f.reduce(At);v.generated={initial:v.property+": matrix3d("+yt.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var d={};if(s.generated||v.generated.initial){d.property=et("transition"),d.computed=e[d.property],d.fragments=[];var Z=i.delay,M=i.duration,R=i.easing;s.generated&&d.fragments.push({delayed:"opacity "+M/1e3+"s "+R+" "+Z/1e3+"s",instant:"opacity "+M/1e3+"s "+R+" 0s"}),v.generated.initial&&d.fragments.push({delayed:v.property+" "+M/1e3+"s "+R+" "+Z/1e3+"s",instant:v.property+" "+M/1e3+"s "+R+" 0s"});var gt=d.computed&&!d.computed.match(/all 0s|none 0s/);gt&&d.fragments.unshift({delayed:d.computed,instant:d.computed});var J=d.fragments.reduce(function(g,I,K){return g.delayed+=K===0?I.delayed:", "+I.delayed,g.instant+=K===0?I.instant:", "+I.instant,g},{delayed:"",instant:""});d.generated={delayed:d.property+": "+J.delayed+";",instant:d.property+": "+J.instant+";"}}else d.generated={delayed:"",instant:""};return{inline:n,opacity:s,position:r,transform:v,transition:d}}function E(t,e){e.split(";").forEach(function(r){var i=r.split(":"),n=i[0],o=i.slice(1);n&&o&&(t.style[n.trim()]=o.join(":"))})}function G(t){var e=this,r;try{c(P(t),function(i){var n=i.getAttribute("data-sr-id");if(n!==null){r=!0;var o=e.store.elements[n];o.callbackTimer&&window.clearTimeout(o.callbackTimer.clock),E(o.node,o.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[n]}})}catch(i){return x.call(this,"Clean failed.",i.message)}if(r)try{ut.call(this)}catch(i){return x.call(this,"Clean failed.",i.message)}}function Vt(){var t=this;c(this.store.elements,function(e){E(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),c(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function S(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(L(t))return c(e,function(i){c(i,function(n,o){L(n)?((!t[o]||!L(t[o]))&&(t[o]={}),S(t[o],n)):t[o]=n})}),t;throw new TypeError("Target must be an object literal.")}function q(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var U=function(){var t=0;return function(){return t++}}();function ft(){var t=this;ut.call(this),c(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),E(e.node,r.filter(function(i){return i!==""}).join(" "))}),c(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function j(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,n=t.visible&&!t.revealed,o=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||n)return Xt.call(this,t,i);if(e.reset||o)return Ut.call(this,t)}function Xt(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,E(t.node,r.filter(function(i){return i!==""}).join(" ")),dt.call(this,t,e)}function Ut(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,E(t.node,e.filter(function(r){return r!==""}).join(" ")),dt.call(this,t)}function dt(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,n=t.revealed?t.config.beforeReveal:t.config.beforeReset,o=t.revealed?t.config.afterReveal:t.config.afterReset,a=0;t.callbackTimer&&(a=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),n(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&G.call(r,t.node)},i-a)}}function ht(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return j.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var n=new rt(r,"visible",this.store),o=new rt(r,"revealed",this.store);if(r.models={visible:n,revealed:o},!o.body.length){var a=r.members[n.body[0]],l=this.store.elements[a];if(l)return $.call(this,r,n.body[0],-1,e),$.call(this,r,n.body[0],1,e),j.call(this,l,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(n.body).shift())return $.call(this,r,i,-1,e),j.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(n.body).pop())return $.call(this,r,i,1,e),j.call(this,t,{reveal:!0,pristine:e})}}function Gt(t){var e=Math.abs(t);if(!isNaN(e))this.id=U(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function rt(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],c(t.members,function(n,o){var a=r.elements[n];a&&a[e]&&i.body.push(o)}),this.body.length&&c(t.members,function(n,o){var a=r.elements[n];a&&!a[e]&&(o<i.body[0]?i.head.push(o):i.foot.push(o))})}function $(t,e,r,i){var n=this,o=["head",null,"foot"][1+r],a=t.members[e+r],l=this.store.elements[a];t.blocked[o]=!0,setTimeout(function(){t.blocked[o]=!1,l&&ht.call(n,l,i)},t.interval)}function vt(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var n=[],o,a=e.interval||lt.interval;try{a&&(o=new Gt(a));var l=P(t);if(!l.length)throw new Error("Invalid reveal target.");var h=l.reduce(function(s,f){var u={},p=f.getAttribute("data-sr-id");p?(S(u,i.store.elements[p]),E(u.node,u.styles.inline.computed)):(u.id=U(),u.node=f,u.seen=!1,u.revealed=!1,u.visible=!1);var k=S({},u.config||i.defaults,e);if(!k.mobile&&q()||!k.desktop&&!q())return p&&G.call(i,u),s;var y=P(k.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(f))return s;var T;return T=Zt(y,n,i.store.containers),T===null&&(T=U(),n.push({id:T,node:y})),u.config=k,u.containerId=T,u.styles=Ht(u),o&&(u.sequence={id:o.id,index:o.members.length},o.members.push(u.id)),s.push(u),s},[]);c(h,function(s){i.store.elements[s.id]=s,s.node.setAttribute("data-sr-id",s.id)})}catch(s){return x.call(this,"Reveal failed.",s.message)}c(n,function(s){i.store.containers[s.id]={id:s.id,node:s.node}}),o&&(this.store.sequences[o.id]=o),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ft.bind(this),0))}function Zt(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return c(e,function(n){c(n,function(o){i===null&&o.node===t&&(i=o.id)})}),i}function Jt(){var t=this;c(this.store.history,function(e){vt.call(t,e.target,e.options,!0)}),ft.call(this)}var Kt=function(t){return(t>0)-(t<0)||+t},it=Math.sign||Kt;function ot(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,n=0,o=0,a=t.node;do isNaN(a.offsetTop)||(n+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:n,right:o+i,bottom:n+r,left:o},height:r,width:i}}function Qt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function te(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,n={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},o={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return n.top<o.bottom&&n.right>o.left&&n.bottom>o.top&&n.left<o.right||t.styles.position==="fixed"}}function ee(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),Yt(function(){var i=t.type==="init"||t.type==="resize";c(r.store.containers,function(n){i&&(n.geometry=ot.call(r,n,!0));var o=Qt.call(r,n);n.scroll&&(n.direction={x:it(o.left-n.scroll.left),y:it(o.top-n.scroll.top)}),n.scroll=o}),c(e,function(n){(i||n.geometry===void 0)&&(n.geometry=ot.call(r,n)),n.visible=te.call(r,n)}),c(e,function(n){n.sequence?ht.call(r,n):j.call(r,n)}),r.pristine=!1})}function re(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function ie(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var oe="4.0.9",z,D,F,Y,W,b,B,H;function O(t){t===void 0&&(t={});var e=typeof this>"u"||Object.getPrototypeOf(this)!==O.prototype;if(e)return new O(t);if(!O.isSupported())return x.call(this,"Instantiation failed.","This browser is not supported."),_.failure();var r;try{r=b?S({},b,t):S({},lt,t)}catch(n){return x.call(this,"Invalid configuration.",n.message),_.failure()}try{var i=P(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(n){return x.call(this,n.message),_.failure()}return b=r,!b.mobile&&q()||!b.desktop&&!q()?(x.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),_.failure()):(_.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,z=z||ee.bind(this),D=D||Vt.bind(this),F=F||vt.bind(this),Y=Y||G.bind(this),W=W||Jt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return z}}),Object.defineProperty(this,"destroy",{get:function(){return D}}),Object.defineProperty(this,"reveal",{get:function(){return F}}),Object.defineProperty(this,"clean",{get:function(){return Y}}),Object.defineProperty(this,"sync",{get:function(){return W}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return oe}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),H||(H=this))}O.isSupported=function(){return re()&&ie()};Object.defineProperty(O,"debug",{get:function(){return B||!1},set:function(t){return B=typeof t=="boolean"?t:B}});O();async function A(t,...e){for(const r of e)switch(typeof r){case"string":await ne(t,r);break;case"number":await pt(r);break;case"function":await r(t,...e);break;default:await r}}async function ne(t,e){const r=function(i,[...n]){return[...i,NaN].findIndex((o,a)=>n[a]!==o)}(t.textContent,e);await async function(i,n,o=60){for(const a of function*(l){for(const h of l)yield s=>requestAnimationFrame(()=>s.textContent=h)}(n))a(i),await pt(o+o*(Math.random()-.5))}(t,[...se(t.textContent,r),...ae(e,r)])}async function pt(t){await new Promise(e=>setTimeout(e,t))}function*ae([...t],e=0,r=t.length){for(;e<r;)yield t.slice(0,++e).join("")}function*se([...t],e=0,r=t.length){for(;r>e;)yield t.slice(0,--r).join("")}const ce=A;var le=nt({name:"Typical",props:{steps:{type:Array,required:!0},wrapper:{type:String,default:"div"},loop:{type:Number,default:1}},render(){return bt(this.wrapper,{ref:"myRef"})},setup:({steps:t,loop:e})=>{const r=at(null);return st(()=>{const i=r.value;e===1/0?A(i,...t,ce):typeof e=="number"&&e>0?A(i,...Array(e).fill(t).flat()):A(i,...t)}),{myRef:r}}});const N=t=>(St("data-v-49ce8e98"),t=t(),Mt(),t),ue={class:"home container mx-auto px-4 py-8"},fe={class:"flex flex-col items-center"},de={class:"logo-container mb-8 scroll-reveal"},he=["src"],ve=N(()=>m("h1",{class:"text-3xl font-bold text-center mb-3 scroll-reveal"},"歡迎使用 MomPos",-1)),pe={class:"text-center max-w-2xl mx-auto mb-8 scroll-reveal"},ye=N(()=>m("h2",{class:"text-xl font-semibold mb-2 scroll-reveal primary-color"},"最貼心的點餐 Pos 神器",-1)),ge=N(()=>m("p",{class:"mb-4"}," MOM POS 是一款專為餐廳設計的銷售點系統（POS），旨在幫助餐廳提高營運效率，方便餐廳店主快速上手。 ",-1)),be=N(()=>m("p",{class:"mb-4"}," MOM POS 就像媽媽一樣的精打細算、細心周到，幫你省下時間，及精確的掌握店內營銷。包含了線上點餐、顧客追蹤、訂單管理。 ",-1)),me=nt({__name:"Home",setup(t){const e=mt(),r=wt(),i=kt(()=>r.isDarkMode?It:$t),n=at(!1),o=()=>{n.value=!0},a=C.get("token");console.log("Token from cookie:",a);const l=async()=>{console.log("Waiting for token to be available..."),await new Promise(s=>setTimeout(s,2e3));const h=C.get("token")?C.get("token"):"";console.log("Token from cookie (after delay):",h)};return st(async()=>{O().reveal(".scroll-reveal",{delay:200,distance:"15px",origin:"bottom",duration:1e3,easing:"ease-in-out",interval:100,opacity:0,scale:1}),await e.fetchAllMenus(),await l()}),(h,s)=>{const f=Tt("router-link");return xt(),Ot("div",ue,[m("div",fe,[m("div",de,[m("img",{src:i.value,alt:"MOM POS Logo",class:Et(["logo max-w-full h-auto",{"fade-in":n.value}]),loading:"lazy",onLoad:o},null,42,he)]),ve,m("section",pe,[ye,ge,Q(_t(le),{class:"blink text-lg font-semibold mb-2",steps:[" 媽媽都說",1e3," 媽媽都說好用的",500," 媽媽都說好用的 Pos 系統",1e3," 媽媽都說好用的 Pos 系統👍",500],loop:2,wrapper:"h2"}),be,Q(f,{to:"/menu",class:"cta-button"},{default:jt(()=>[Pt("👉點餐去")]),_:1})])])])}}}),Te=Rt(me,[["__scopeId","data-v-49ce8e98"]]);export{Te as default};