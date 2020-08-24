/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var t,n,r="-"+Math.random().toFixed(6)+"%",a=!1;try{t=document.createElement("template"),n="tabindex","content"in t&&(t.innerHTML='<p tabindex="'+r+'"></p>',t.content.childNodes[0].getAttribute(n)==r)||(r="_dt: "+r.slice(1,-1)+";",a=!0)}catch(e){}var o="\x3c!--"+r+"--\x3e",i=/^(?:style|textarea)$/i,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function c(e){return e.join(o).replace(v,b).replace(h,m)}/*! (c) Andrea Giammarchi - ISC */var l=" \\f\\n\\r\\t",u="[^ \\f\\n\\r\\t\\/>\"'=]+",f="[ \\f\\n\\r\\t]+"+u,d="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",p="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+u.replace("\\/","")+"))?)",h=new RegExp(d+f+p+"+)(["+l+"]*/?>)","g"),v=new RegExp(d+f+p+"*)(["+l+"]*/>)","g"),g=new RegExp("("+f+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function m(e,t,n,r){return"<"+t+n.replace(g,y)+r}function y(e,t,n){return t+(n||'"')+r+(n||'"')}function b(e,t,n){return s.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:w}=Array,{indexOf:N,slice:x}=[];var E=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const C=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,k=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return n?t[0]:e;const r=x.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}};
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi - ISC */var S=function(e){var t="fragment",n=function(e){var t=r("template");return t.innerHTML=e,t.content};return function(e,t){return("svg"===t?a:n)(e)};function r(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}function a(e){var n=r(t),a=r("div");return a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(n,a.firstChild.childNodes),n}}(document),A=(e,t,n,r,a)=>{const o=n.length;let i=t.length,s=o,c=0,l=0,u=null;for(;c<i||l<s;)if(i===c){const t=s<o?l?r(n[l-1],-0).nextSibling:r(n[s-l],0):a;for(;l<s;)e.insertBefore(r(n[l++],1),t)}else if(s===l)for(;c<i;)u&&u.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[l])c++,l++;else if(t[i-1]===n[s-1])i--,s--;else if(t[c]===n[s-1]&&n[l]===t[i-1]){const a=r(t[--i],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--s],1),a),t[i]=n[s]}else{if(!u){u=new Map;let e=l;for(;e<s;)u.set(n[e],e++)}if(u.has(t[c])){const a=u.get(t[c]);if(l<a&&a<s){let o=c,f=1;for(;++o<i&&o<s&&u.get(t[o])===a+f;)f++;if(f>a-l){const o=r(t[c],0);for(;l<a;)e.insertBefore(r(n[l++],1),o)}else e.replaceChild(r(n[l++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n},O=String.prototype.trim,M=a?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function T(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function L(e,t,n,i){for(var s=e.attributes,c=[],l=[],u=M(s,n),f=u.length,d=0;d<f;){var p,h=u[d++],v=h.value===r;if(v||1<(p=h.value.split(o)).length){var g=h.name;if(c.indexOf(g)<0){c.push(g);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=s[m]||s[m.toLowerCase()];if(v)t.push(D(y,i,m,null));else{for(var b=p.length-2;b--;)n.shift();t.push(D(y,i,m,p))}}l.push(h)}}d=0;for(var w=(0<(f=l.length)&&a&&!("ownerSVGElement"in e));d<f;){var N=l[d++];w&&(N.value=""),e.removeAttribute(N.name)}var x=e.nodeName;if(/^script$/i.test(x)){var E=document.createElement(x);for(f=s.length,d=0;d<f;)E.setAttributeNode(s[d++].cloneNode(!0));E.textContent=e.textContent,e.parentNode.replaceChild(E,e)}}function j(e,t){return{type:"any",node:e,path:t}}function D(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function W(e,t){return{type:"text",node:e,path:t}}var $=document.importNode,V=String.prototype.trim,R=E(new WeakMap);function z(e,t){var n=(e.convert||c)(t),a=e.transform;a&&(n=a(n));var s=S(n,e.type);H(s);var l=[];return function e(t,n,a,s){for(var c=t.childNodes,l=c.length,u=0;u<l;){var f=c[u];switch(f.nodeType){case 1:var d=s.concat(u);L(f,n,a,d),e(f,n,a,d);break;case 8:var p=f.textContent;if(p===r)a.shift(),n.push(i.test(t.nodeName)?W(t,s):j(f,s.concat(u)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":t.removeChild(f),u--,l--}break;case 3:i.test(t.nodeName)&&O.call(f.textContent)===o&&(a.shift(),n.push(W(t,s)))}u++}}(s,l,t.slice(0),[]),{content:s,updates:function(n){for(var r=[],a=l.length,o=0,i=0;o<a;){var s=l[o++],c=T(n,s.path);switch(s.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var u=s.sparse,f=e.attribute(c,s.name,s.node);null===u?r.push({fn:f,sparse:!1}):(i+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return a+=i,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var s=r[o-i];if(s.sparse){var c=s.values,l=c[0],u=1,f=c.length;for(i+=f-2;u<f;)l+=arguments[o++]+c[u++];s.fn(l)}else s.fn(arguments[o++])}return n}}}}function B(e,t){var n=R.get(t)||R.set(t,z(e,t));return n.updates($.call(document,n.content,!0))}var F=[];function H(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===V.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var Z=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(s){var c,l,u,f;switch(typeof s){case"object":if(s){if("object"===o){if(!a&&i!==s)for(l in i)l in s||(r[l]="")}else a?r.value="":r.cssText="";for(l in c=a?{}:r,s)u="number"!=typeof(f=s[l])||e.test(l)?f:f+"px",!a&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=c):i=s;break}default:i!=s&&(o="string",i=s,a?r.value=s||"":r.cssText=s||"")}}}}();const _=(e,t)=>{let n,r=!0;const a=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(a),r=!0):(a.value=t,r&&(e.setAttributeNodeNS(a),r=!1)))}},G=(e,t)=>n=>{e[t]=n},I="connected",P={Event:CustomEvent,WeakSet:"function"==typeof WeakSet?WeakSet:function(){const e=new WeakMap;return e.add=K,e}},q=
/*! (c) Andrea Giammarchi */
function(e){/*! (c) Andrea Giammarchi - ISC */var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,o=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var i=0,s=[],c=function(e){s.push(e),clearTimeout(i),i=setTimeout((function(){l(s.splice(i=0,s.length))}),0)};e.addEventListener("DOMNodeRemoved",(function(e){c({addedNodes:[],removedNodes:[e.target]})}),!0),e.addEventListener("DOMNodeInserted",(function(e){c({addedNodes:[e.target],removedNodes:[]})}),!0)}function l(e){for(var t,n=e.length,a=0;a<n;a++)u((t=e[a]).removedNodes,"disconnected",o,r),u(t.addedNodes,"connected",r,o)}function u(e,n,r,a){for(var o,i=new t(n),s=e.length,c=0;c<s;1===(o=e[c++]).nodeType&&f(o,i,n,r,a));}function f(e,t,n,r,o){a.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var i=e.children||[],s=i.length,c=0;c<s;f(i[c++],t,n,r,o));}}(e.ownerDocument)),a.add(e),e}}(P),J=
/*! (c) Andrea Giammarchi */
function(e){/*! (c) Andrea Giammarchi - ISC */var t=e.Event;return function(e,t){var r={attributes:!0,attributeOldValue:!0},i=t instanceof Array&&t.length;i&&(r.attributeFilter=t.slice(0));try{new MutationObserver(a).observe(e,r)}catch(t){r.handleEvent=i?o:n,e.addEventListener("DOMAttrModified",r,!0)}return e};function n(e){r(e.target,e.attrName,e.prevValue)}function r(e,n,r){var a=new t("attributechanged");a.attributeName=n,a.oldValue=r,a.newValue=e.getAttribute(n),e.dispatchEvent(a)}function a(e){for(var t,n=0,a=e.length;n<a;n++)r((t=e[n]).target,t.attributeName,t.oldValue)}function o(e){-1<this.attributeFilter.indexOf(e.attrName)&&n(e)}}(P);function K(e){return this.set(e,!0)}const Q=/^(?:form|list)$/i,U=(e,t)=>e.ownerDocument.createTextNode(t);function X(e){return this.type=e,t=this,n=F,r=H,function(e){return n!==e&&(r=B(t,n=e)),r.apply(null,arguments)};var t,n,r}function Y(e){return e(this)}X.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return _(e,t);t="className";case"props":return G(e,t);case"aria":return(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e);case"style":return Z(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case".dataset":return(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e);default:return"."===t.slice(0,1)?G(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return r===I||"disconnected"===r?q(e):"attributechanged"===r?J(e):!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const a=w(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}})(e,t):!(t in e)||r||Q.test(t)?_(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const{type:n}=this;let r,a=!1;const o=i=>{switch(typeof i){case"string":case"number":case"boolean":a?r!==i&&(r=i,t[0].textContent=i):(a=!0,r=i,t=A(e.parentNode,t,[U(e,i)],C,e));break;case"function":o(i(e));break;case"object":case"undefined":if(null==i){a=!1,t=A(e.parentNode,t,[],C,e);break}default:if(a=!1,r=i,w(i))if(0===i.length)t.length&&(t=A(e.parentNode,t,[],C,e));else switch(typeof i[0]){case"string":case"number":case"boolean":o(String(i));break;case"function":o(i.map(Y,e));break;case"object":w(i[0])&&(i=i.concat.apply([],i));default:t=A(e.parentNode,t,i,C,e)}else"ELEMENT_NODE"in i?t=A(e.parentNode,t,11===i.nodeType?x.call(i.childNodes):[i],C,e):"text"in i?o(String(i.text)):"any"in i?o(i.any):"html"in i?t=A(e.parentNode,t,x.call(S([].concat(i.html).join(""),n).childNodes),C,e):"length"in i&&o(x.call(i))}};return o},text(e){let t;const n=r=>{if(t!==r){t=r;const a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(x.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:ee,freeze:te,keys:ne}=Object,re=X.prototype,ae=E(new WeakMap),oe=e=>({html:se("html",e),svg:se("svg",e),render(t,n){const r="function"==typeof n?n():n,a=ae.get(t)||ae.set(t,ie()),o=r instanceof ue?ce(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}),ie=()=>({stack:[],entry:null,wire:null}),se=(e,t)=>{const n=E(new WeakMap);return r.for=(e,a)=>{const o=n.get(e)||n.set(e,ee(null));return o[a]||(o[a]=(i=ie(),function(){return ce(t,i,r.apply(null,arguments))}));var i},r.node=function(){return ce(t,ie(),r.apply(null,arguments)).valueOf()},r;function r(){return new ue(e,ve.apply(null,arguments))}},ce=(e,t,{type:n,template:r,values:a})=>{const{length:o}=a;le(e,t,a,o);let{entry:i}=t;if(i&&i.template===r&&i.type===n)i.tag(r,...a);else{const o=new e(n);t.entry=i={type:n,template:r,tag:o,wire:k(o(r,...a))}}return i.wire},le=(e,{stack:t},n,r)=>{for(let a=0;a<r;a++){const r=n[a];r instanceof fe?n[a]=ce(e,t[a]||(t[a]=ie()),r):w(r)?le(e,t[a]||(t[a]=ie()),r,r.length):t[a]=null}r<t.length&&t.splice(r)};function ue(e,t){this.type=e,this.template=t.shift(),this.values=t}te(ue);const fe=ue,{render:de,html:pe,svg:he}=oe(X);function ve(){let e=[],t=0,{length:n}=arguments;for(;t<n;)e.push(arguments[t++]);return e}return e.Hole=fe,e.custom=e=>{const t=ee(re);return ne(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?c:String))}),n.prototype=t,oe(n);function n(){return X.apply(this,arguments)}},e.html=pe,e.render=de,e.svg=he,e}({});
