import{d as ot,h as bt,r as at,o as st,u as mt,a as wt,c as Et,_ as At,b as Ft,e as m,n as Dt,f as K,w as Bt,g as Q,i as Tt,j as Ct,p as Ot,k as xt}from"./index-C5q-uV_y.js";import{d as jt,l as kt}from"./MomPosMainPageDark-BsLCBqY-.js";/*! @license is-dom-node v1.0.4

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

*/function St(t){var e=Object.prototype.toString.call(t),r=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&r.test(e)&&(t.length===0||V(t[0]))}/*! @license Tealight v0.3.6

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

*/function O(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(V);if(V(t))return[t];if(St(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var r=e.querySelectorAll(t);return Array.prototype.slice.call(r)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function W(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=w();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function Mt(t,e){for(var r=W(t),i=W(e),o=[],n=0;n<4;n++)for(var a=[r[n],r[n+4],r[n+8],r[n+12]],c=0;c<4;c++){var h=c*4,s=[i[h],i[h+1],i[h+2],i[h+3]],d=a[0]*s[0]+a[1]*s[1]+a[2]*s[2]+a[3]*s[3];o[n+h]=d}return o}function Pt(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var r=e[2].split(", ").map(parseFloat);return W(r)}}return w()}function _t(t){var e=Math.PI/180*t,r=w();return r[5]=r[10]=Math.cos(e),r[6]=r[9]=Math.sin(e),r[9]*=-1,r}function $t(t){var e=Math.PI/180*t,r=w();return r[0]=r[10]=Math.cos(e),r[2]=r[8]=Math.sin(e),r[2]*=-1,r}function It(t){var e=Math.PI/180*t,r=w();return r[0]=r[5]=Math.cos(e),r[1]=r[4]=Math.sin(e),r[4]*=-1,r}function tt(t,e){var r=w();return r[0]=t,r[5]=t,r}function Rt(t){var e=w();return e[12]=t,e}function Lt(t){var e=w();return e[13]=t,e}/*! @license miniraf v1.0.0

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

*/var ut=function(){var t=Date.now();return function(e){var r=Date.now();r-t>16?(t=r,e(r)):setTimeout(function(){return ut(e)},0)}}(),qt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ut;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var ct={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Nt(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function zt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var T={success:zt,failure:Nt};function P(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function u(t,e){if(P(t)){var r=Object.keys(t);return r.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,o){return e(i,o,t)});throw new TypeError("Expected either an array or object literal.")}function F(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(o){return i+=`
 — `+o}),console.log(i,"color: #ea654b;")}}function lt(){var t=this,e=function(){return{active:[],stale:[]}},r=e(),i=e(),o=e();try{u(O("[data-sr-id]"),function(n){var a=parseInt(n.getAttribute("data-sr-id"));r.active.push(a)})}catch(n){throw n}u(this.store.elements,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),u(r.stale,function(n){return delete t.store.elements[n]}),u(this.store.elements,function(n){o.active.indexOf(n.containerId)===-1&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&i.active.indexOf(n.sequence.id)===-1&&i.active.push(n.sequence.id)}),u(this.store.containers,function(n){o.active.indexOf(n.id)===-1&&o.stale.push(n.id)}),u(o.stale,function(n){var a=t.store.containers[n].node;a.removeEventListener("scroll",t.delegate),a.removeEventListener("resize",t.delegate),delete t.store.containers[n]}),u(this.store.sequences,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),u(i.stale,function(n){return delete t.store.sequences[n]})}var et=function(){var t={},e=document.documentElement.style;function r(i,o){if(o===void 0&&(o=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof o[i]=="string")return t[i]=i;if(typeof o["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return t={}},r}();function Yt(t){var e=window.getComputedStyle(t.node),r=e.position,i=t.config,o={},n=t.node.getAttribute("style")||"",a=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=a?a.map(function(g){return g.trim()}).join("; ")+";":"",o.generated=a.some(function(g){return g.match(/visibility\s?:\s?visible/i)})?o.computed:a.concat(["visibility: visible"]).map(function(g){return g.trim()}).join("; ")+";";var c=parseFloat(e.opacity),h=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),s={computed:c!==h?"opacity: "+c+";":"",generated:c!==h?"opacity: "+h+";":""},d=[];if(parseFloat(i.distance)){var l=i.origin==="top"||i.origin==="bottom"?"Y":"X",v=i.distance;(i.origin==="top"||i.origin==="left")&&(v=/^-/.test(v)?v.substr(1):"-"+v);var E=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),y=E[0],A=E[1];switch(A){case"em":v=parseInt(e.fontSize)*y;break;case"px":v=y;break;case"%":v=l==="Y"?t.node.getBoundingClientRect().height*y/100:t.node.getBoundingClientRect().width*y/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?d.push(Lt(v)):d.push(Rt(v))}i.rotate.x&&d.push(_t(i.rotate.x)),i.rotate.y&&d.push($t(i.rotate.y)),i.rotate.z&&d.push(It(i.rotate.z)),i.scale!==1&&(i.scale===0?d.push(tt(2e-4)):d.push(tt(i.scale)));var p={};if(d.length){p.property=et("transform"),p.computed={raw:e[p.property],matrix:Pt(e[p.property])},d.unshift(p.computed.matrix);var yt=d.reduce(Mt);p.generated={initial:p.property+": matrix3d("+yt.join(", ")+");",final:p.property+": matrix3d("+p.computed.matrix.join(", ")+");"}}else p.generated={initial:"",final:""};var f={};if(s.generated||p.generated.initial){f.property=et("transition"),f.computed=e[f.property],f.fragments=[];var G=i.delay,j=i.duration,k=i.easing;s.generated&&f.fragments.push({delayed:"opacity "+j/1e3+"s "+k+" "+G/1e3+"s",instant:"opacity "+j/1e3+"s "+k+" 0s"}),p.generated.initial&&f.fragments.push({delayed:p.property+" "+j/1e3+"s "+k+" "+G/1e3+"s",instant:p.property+" "+j/1e3+"s "+k+" 0s"});var gt=f.computed&&!f.computed.match(/all 0s|none 0s/);gt&&f.fragments.unshift({delayed:f.computed,instant:f.computed});var Z=f.fragments.reduce(function(g,S,J){return g.delayed+=J===0?S.delayed:", "+S.delayed,g.instant+=J===0?S.instant:", "+S.instant,g},{delayed:"",instant:""});f.generated={delayed:f.property+": "+Z.delayed+";",instant:f.property+": "+Z.instant+";"}}else f.generated={delayed:"",instant:""};return{inline:o,opacity:s,position:r,transform:p,transition:f}}function B(t,e){e.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(t.style[o.trim()]=n.join(":"))})}function U(t){var e=this,r;try{u(O(t),function(i){var o=i.getAttribute("data-sr-id");if(o!==null){r=!0;var n=e.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),B(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[o]}})}catch(i){return F.call(this,"Clean failed.",i.message)}if(r)try{lt.call(this)}catch(i){return F.call(this,"Clean failed.",i.message)}}function Ht(){var t=this;u(this.store.elements,function(e){B(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),u(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.removeEventListener("scroll",t.delegate),r.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function x(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(P(t))return u(e,function(i){u(i,function(o,n){P(o)?((!t[n]||!P(t[n]))&&(t[n]={}),x(t[n],o)):t[n]=o})}),t;throw new TypeError("Target must be an object literal.")}function $(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var X=function(){var t=0;return function(){return t++}}();function ft(){var t=this;lt.call(this),u(this.store.elements,function(e){var r=[e.styles.inline.generated];e.visible?(r.push(e.styles.opacity.computed),r.push(e.styles.transform.generated.final),e.revealed=!0):(r.push(e.styles.opacity.generated),r.push(e.styles.transform.generated.initial),e.revealed=!1),B(e.node,r.filter(function(i){return i!==""}).join(" "))}),u(this.store.containers,function(e){var r=e.node===document.documentElement?window:e.node;r.addEventListener("scroll",t.delegate),r.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function C(t,e){e===void 0&&(e={});var r=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&r||t.config.useDelay==="once"&&!t.seen,o=t.visible&&!t.revealed,n=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||o)return Vt.call(this,t,i);if(e.reset||n)return Wt.call(this,t)}function Vt(t,e){var r=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?r.push(t.styles.transition.generated.delayed):r.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,B(t.node,r.filter(function(i){return i!==""}).join(" ")),dt.call(this,t,e)}function Wt(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,B(t.node,e.filter(function(r){return r!==""}).join(" ")),dt.call(this,t)}function dt(t,e){var r=this,i=e?t.config.duration+t.config.delay:t.config.duration,o=t.revealed?t.config.beforeReveal:t.config.beforeReset,n=t.revealed?t.config.afterReveal:t.config.afterReset,a=0;t.callbackTimer&&(a=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),o(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&U.call(r,t.node)},i-a)}}function ht(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return C.call(this,t,{reset:!0});var r=this.store.sequences[t.sequence.id],i=t.sequence.index;if(r){var o=new rt(r,"visible",this.store),n=new rt(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var a=r.members[o.body[0]],c=this.store.elements[a];if(c)return M.call(this,r,o.body[0],-1,e),M.call(this,r,o.body[0],1,e),C.call(this,c,{reveal:!0,pristine:e})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return M.call(this,r,i,-1,e),C.call(this,t,{reveal:!0,pristine:e});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return M.call(this,r,i,1,e),C.call(this,t,{reveal:!0,pristine:e})}}function Xt(t){var e=Math.abs(t);if(!isNaN(e))this.id=X(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function rt(t,e,r){var i=this;this.head=[],this.body=[],this.foot=[],u(t.members,function(o,n){var a=r.elements[o];a&&a[e]&&i.body.push(n)}),this.body.length&&u(t.members,function(o,n){var a=r.elements[o];a&&!a[e]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function M(t,e,r,i){var o=this,n=["head",null,"foot"][1+r],a=t.members[e+r],c=this.store.elements[a];t.blocked[n]=!0,setTimeout(function(){t.blocked[n]=!1,c&&ht.call(o,c,i)},t.interval)}function pt(t,e,r){var i=this;e===void 0&&(e={}),r===void 0&&(r=!1);var o=[],n,a=e.interval||ct.interval;try{a&&(n=new Xt(a));var c=O(t);if(!c.length)throw new Error("Invalid reveal target.");var h=c.reduce(function(s,d){var l={},v=d.getAttribute("data-sr-id");v?(x(l,i.store.elements[v]),B(l.node,l.styles.inline.computed)):(l.id=X(),l.node=d,l.seen=!1,l.revealed=!1,l.visible=!1);var E=x({},l.config||i.defaults,e);if(!E.mobile&&$()||!E.desktop&&!$())return v&&U.call(i,l),s;var y=O(E.container)[0];if(!y)throw new Error("Invalid container.");if(!y.contains(d))return s;var A;return A=Ut(y,o,i.store.containers),A===null&&(A=X(),o.push({id:A,node:y})),l.config=E,l.containerId=A,l.styles=Yt(l),n&&(l.sequence={id:n.id,index:n.members.length},n.members.push(l.id)),s.push(l),s},[]);u(h,function(s){i.store.elements[s.id]=s,s.node.setAttribute("data-sr-id",s.id)})}catch(s){return F.call(this,"Reveal failed.",s.message)}u(o,function(s){i.store.containers[s.id]={id:s.id,node:s.node}}),n&&(this.store.sequences[n.id]=n),r!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ft.bind(this),0))}function Ut(t){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=null;return u(e,function(o){u(o,function(n){i===null&&n.node===t&&(i=n.id)})}),i}function Gt(){var t=this;u(this.store.history,function(e){pt.call(t,e.target,e.options,!0)}),ft.call(this)}var Zt=function(t){return(t>0)-(t<0)||+t},it=Math.sign||Zt;function nt(t,e){var r=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,o=0,n=0,a=t.node;do isNaN(a.offsetTop)||(o+=a.offsetTop),isNaN(a.offsetLeft)||(n+=a.offsetLeft),a=a.offsetParent;while(a);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function Jt(t){var e,r;return t.node===document.documentElement?(e=window.pageYOffset,r=window.pageXOffset):(e=t.node.scrollTop,r=t.node.scrollLeft),{top:e,left:r}}function Kt(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(e){var r=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,o={top:t.geometry.bounds.top+t.geometry.height*r,right:t.geometry.bounds.right-t.geometry.width*r,bottom:t.geometry.bounds.bottom-t.geometry.height*r,left:t.geometry.bounds.left+t.geometry.width*r},n={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||t.styles.position==="fixed"}}function Qt(t,e){var r=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),qt(function(){var i=t.type==="init"||t.type==="resize";u(r.store.containers,function(o){i&&(o.geometry=nt.call(r,o,!0));var n=Jt.call(r,o);o.scroll&&(o.direction={x:it(n.left-o.scroll.left),y:it(n.top-o.scroll.top)}),o.scroll=n}),u(e,function(o){(i||o.geometry===void 0)&&(o.geometry=nt.call(r,o)),o.visible=Kt.call(r,o)}),u(e,function(o){o.sequence?ht.call(r,o):C.call(r,o)}),r.pristine=!1})}function te(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function ee(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var re="4.0.9",R,L,q,N,z,b,Y,H;function D(t){t===void 0&&(t={});var e=typeof this>"u"||Object.getPrototypeOf(this)!==D.prototype;if(e)return new D(t);if(!D.isSupported())return F.call(this,"Instantiation failed.","This browser is not supported."),T.failure();var r;try{r=b?x({},b,t):x({},ct,t)}catch(o){return F.call(this,"Invalid configuration.",o.message),T.failure()}try{var i=O(r.container)[0];if(!i)throw new Error("Invalid container.")}catch(o){return F.call(this,o.message),T.failure()}return b=r,!b.mobile&&$()||!b.desktop&&!$()?(F.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),T.failure()):(T.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,R=R||Qt.bind(this),L=L||Ht.bind(this),q=q||pt.bind(this),N=N||U.bind(this),z=z||Gt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return R}}),Object.defineProperty(this,"destroy",{get:function(){return L}}),Object.defineProperty(this,"reveal",{get:function(){return q}}),Object.defineProperty(this,"clean",{get:function(){return N}}),Object.defineProperty(this,"sync",{get:function(){return z}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return re}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),H||(H=this))}D.isSupported=function(){return te()&&ee()};Object.defineProperty(D,"debug",{get:function(){return Y||!1},set:function(t){return Y=typeof t=="boolean"?t:Y}});D();async function _(t,...e){for(const r of e)switch(typeof r){case"string":await ie(t,r);break;case"number":await vt(r);break;case"function":await r(t,...e);break;default:await r}}async function ie(t,e){const r=function(i,[...o]){return[...i,NaN].findIndex((n,a)=>o[a]!==n)}(t.textContent,e);await async function(i,o,n=60){for(const a of function*(c){for(const h of c)yield s=>requestAnimationFrame(()=>s.textContent=h)}(o))a(i),await vt(n+n*(Math.random()-.5))}(t,[...oe(t.textContent,r),...ne(e,r)])}async function vt(t){await new Promise(e=>setTimeout(e,t))}function*ne([...t],e=0,r=t.length){for(;e<r;)yield t.slice(0,++e).join("")}function*oe([...t],e=0,r=t.length){for(;r>e;)yield t.slice(0,--r).join("")}const ae=_;var se=ot({name:"Typical",props:{steps:{type:Array,required:!0},wrapper:{type:String,default:"div"},loop:{type:Number,default:1}},render(){return bt(this.wrapper,{ref:"myRef"})},setup:({steps:t,loop:e})=>{const r=at(null);return st(()=>{const i=r.value;e===1/0?_(i,...t,ae):typeof e=="number"&&e>0?_(i,...Array(e).fill(t).flat()):_(i,...t)}),{myRef:r}}});const ue=se,ce=ot({name:"Home",setup(){const t=mt(),e=wt(),r=Et(()=>e.isDarkMode?jt:kt),i=at(!1),o=()=>{i.value=!0};return st(async()=>{D().reveal(".scroll-reveal",{delay:200,distance:"15px",origin:"bottom",duration:1e3,easing:"ease-in-out",interval:100,opacity:0,scale:1}),await t.fetchAllMenus()}),{logoSrc:r,imageLoaded:i,onImageLoad:o}},components:{VTypical:ue}}),I=t=>(Ot("data-v-e631d1d9"),t=t(),xt(),t),le={class:"home container mx-auto px-4 py-8"},fe={class:"flex flex-col items-center"},de={class:"logo-container mb-8 scroll-reveal"},he=["src"],pe=I(()=>m("h1",{class:"text-3xl font-bold text-center mb-3 scroll-reveal"},"歡迎使用 MomPos",-1)),ve={class:"text-center max-w-2xl mx-auto mb-8 scroll-reveal"},ye=I(()=>m("h2",{class:"text-xl font-semibold mb-2 scroll-reveal primary-color"},"最貼心的點餐 Pos 神器",-1)),ge=I(()=>m("p",{class:"mb-4"}," MOM POS 是一款專為餐廳設計的銷售點系統（POS），旨在幫助餐廳提高營運效率，方便餐廳店主快速上手。 ",-1)),be=I(()=>m("p",{class:"mb-4"}," MOM POS 就像媽媽一樣的精打細算、細心周到，幫你省下時間，及精確的掌握店內營銷。包含了線上點餐、顧客追蹤、訂單管理。 ",-1));function me(t,e,r,i,o,n){const a=Q("v-typical"),c=Q("router-link");return Tt(),Ft("div",le,[m("div",fe,[m("div",de,[m("img",{src:t.logoSrc,alt:"MOM POS Logo",class:Dt(["logo max-w-full h-auto",{"fade-in":t.imageLoaded}]),loading:"lazy",onLoad:e[0]||(e[0]=(...h)=>t.onImageLoad&&t.onImageLoad(...h))},null,42,he)]),pe,m("section",ve,[ye,ge,K(a,{class:"blink text-lg font-semibold mb-2",steps:[" 媽媽都說",1e3," 媽媽都說好用的",500," 媽媽都說好用的 Pos 系統",1e3," 媽媽都說好用的 Pos 系統👍",500],loop:2,wrapper:"h2"}),be,K(c,{to:"/menu",class:"cta-button"},{default:Bt(()=>[Ct("👉點餐去")]),_:1})])])])}const Ae=At(ce,[["render",me],["__scopeId","data-v-e631d1d9"]]);export{Ae as default};