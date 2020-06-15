/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={};try{a.WeakMap=WeakMap}catch(e){a.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var i,o=a.WeakMap,u="-"+Math.random().toFixed(6)+"%",c=!1;try{"content"in(i=e.createElement("template"))&&(i.innerHTML='<p tabindex="'+u+'"></p>',i.content.childNodes[0].getAttribute("tabindex")==u)||(u="_dt: "+u.slice(1,-1)+";",c=!0)}catch(e){}var s="\x3c!--"+u+"--\x3e",l=8,f=1,d=3,h=/^(?:style|textarea)$/i,v=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function p(e){return e.join(s).replace(x,k).replace(N,C)}var g=" \\f\\n\\r\\t",m="[^"+g+"\\/>\"'=]+",y="["+g+"]+"+m,b="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",w="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+m.replace("\\/","")+"))?)",N=new RegExp(b+y+w+"+)(["+g+"]*/?>)","g"),x=new RegExp(b+y+w+"*)(["+g+"]*/>)","g"),E=new RegExp("("+y+"\\s*=\\s*)(['\"]?)"+s+"\\2","gi");function C(e,t,n,r){return"<"+t+n.replace(E,S)+r}function S(e,t,n){return t+(n||'"')+u+(n||'"')}function k(e,t,n){return v.test(t)?e:"<"+t+n+"></"+t+">"}var A=Array.isArray,M=[].slice,O=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},T=function(t,n){return 111===t.nodeType?1/n<0?n?(a=(r=t).firstChild,i=r.lastChild,(o=e.createRange()).setStartAfter(a),o.setEndAfter(i),o.deleteContents(),a):t.lastChild:n?t.valueOf():t.firstChild:t;var r,a,i,o},j={};j.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(t){return n.prototype=new n("").constructor.prototype,n;function n(t,n){n||(n={});var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!!n.bubbles,!!n.cancelable,n.detail),r}}();var L=j.CustomEvent;var _=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),i=a("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;i.innerHTML="<table>"+e+"</table>",o=i.querySelectorAll(u)}else i.innerHTML=e,o=i.childNodes;return r(n,o),n};return function(e,i){return("svg"===i?function(e){var n=a(t),i=a("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),W=function(e,t,n,r,a){for(var i=n.length,o=t.length,u=i,c=0,s=0,l=null;c<o||s<u;)if(o===c)for(var f=u<i?s?r(n[s-1],-0).nextSibling:r(n[u-s],0):a;s<u;)e.insertBefore(r(n[s++],1),f);else if(u===s)for(;c<o;)l&&l.has(t[c])||e.removeChild(r(t[c],-1)),c++;else if(t[c]===n[s])c++,s++;else if(t[o-1]===n[u-1])o--,u--;else if(t[c]===n[u-1]&&n[s]===t[o-1]){var d=r(t[--o],-1).nextSibling;e.insertBefore(r(n[s++],1),r(t[c++],-1).nextSibling),e.insertBefore(r(n[--u],1),d),t[o]=n[u]}else{if(!l){l=new Map;for(var h=s;h<u;)l.set(n[h],h++)}if(l.has(t[c])){var v=l.get(t[c]);if(s<v&&v<u){for(var p=c,g=1;++p<o&&p<u&&l.get(t[p])===v+g;)g++;if(g>v-s)for(var m=r(t[c],0);s<v;)e.insertBefore(r(n[s++],1),m);else e.replaceChild(r(n[s++],1),r(t[c++],-1))}else c++}else e.removeChild(r(t[c++],-1))}return n},$={};try{$.WeakMap=WeakMap}catch(e){$.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var D=$.WeakMap,H=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),i=a("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;i.innerHTML="<table>"+e+"</table>",o=i.querySelectorAll(u)}else i.innerHTML=e,o=i.childNodes;return r(n,o),n};return function(e,i){return("svg"===i?function(e){var n=a(t),i=a("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),R=function(e,t,n,r,a){var i="importNode"in e,o=e.createDocumentFragment();return o.appendChild(e.createTextNode("g")),o.appendChild(e.createTextNode("")),(i?e.importNode(o,!0):o.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],i=a.length,o=0;n&&o<i;o++)r.appendChild(e(a[o],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),V="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},F=c?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function P(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function z(t,n,r,a){for(var i=t.attributes,o=[],l=[],f=F(i,r),d=f.length,h=0;h<d;){var v,p=f[h++],g=p.value===u;if(g||1<(v=p.value.split(s)).length){var m=p.name;if(o.indexOf(m)<0){o.push(m);var y=r.shift().replace(g?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+m+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),b=i[y]||i[y.toLowerCase()];if(g)n.push(I(b,a,y,null));else{for(var w=v.length-2;w--;)r.shift();n.push(I(b,a,y,v))}}l.push(p)}}h=0;for(var N=(0<(d=l.length)&&c&&!("ownerSVGElement"in t));h<d;){var x=l[h++];N&&(x.value=""),t.removeAttribute(x.name)}var E=t.nodeName;if(/^script$/i.test(E)){var C=e.createElement(E);for(d=i.length,h=0;h<d;)C.setAttributeNode(i[h++].cloneNode(!0));C.textContent=t.textContent,t.parentNode.replaceChild(C,t)}}function B(e,t){return{type:"any",node:e,path:t}}function I(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Z(e,t){return{type:"text",node:e,path:t}}var q=O(new D);function G(e,t){var n=(e.convert||p)(t),r=e.transform;r&&(n=r(n));var a=H(n,e.type);K(a);var i=[];return function e(t,n,r,a){for(var i=t.childNodes,o=i.length,c=0;c<o;){var v=i[c];switch(v.nodeType){case f:var p=a.concat(c);z(v,n,r,p),e(v,n,r,p);break;case l:var g=v.textContent;if(g===u)r.shift(),n.push(h.test(t.nodeName)?Z(t,a):B(v,a.concat(c)));else switch(g.slice(0,2)){case"/*":if("*/"!==g.slice(-2))break;case"👻":t.removeChild(v),c--,o--}break;case d:h.test(t.nodeName)&&V.call(v.textContent)===s&&(r.shift(),n.push(Z(t,a)))}c++}}(a,i,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],a=i.length,o=0,u=0;o<a;){var c=i[o++],s=P(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var l=c.sparse,f=e.attribute(s,c.name,c.node);null===l?r.push({fn:f,sparse:!1}):(u+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var i=1,o=1;i<e;){var u=r[i-o];if(u.sparse){var c=u.values,s=c[0],l=1,f=c.length;for(o+=f-2;l<f;)s+=arguments[i++]+c[l++];u.fn(s)}else u.fn(arguments[i++])}return n}}}}var U=[];function J(t){var n=U,r=K;return function(a){return n!==a&&(r=function(t,n){var r=q.get(n)||q.set(n,G(t,n));return r.updates(R.call(e,r.content,!0))}(t,n=a)),r.apply(null,arguments)}}function K(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===V.call(r.textContent).length&&e.removeChild(r)}}var Q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var i,o;return function(u){var c,s,l,f;switch(typeof u){case"object":if(u){if("object"===i){if(!a&&o!==u)for(s in o)s in u||(r[s]="")}else a?r.value="":r.cssText="";for(s in c=a?{}:r,u)l="number"!=typeof(f=u[s])||e.test(s)?f:f+"px",!a&&/^--/.test(s)?c.setProperty(s,l):c[s]=l;i="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(o=c):o=u;break}default:o!=u&&(i="string",o=u,a?r.value=u||"":r.cssText=u||"")}}}}(),X=function(t,n){var r,a=!0,i=e.createAttributeNS(null,n);return function(e){r!==e&&(null==(r=e)?a||(t.removeAttributeNode(i),a=!0):(i.value=e,a&&(t.setAttributeNodeNS(i),a=!1)))}},Y=function(e,t){return function(n){e[t]=n}},ee={Event:L,WeakSet:"function"==("undefined"==typeof WeakSet?"undefined":typeof WeakSet)?WeakSet:function(){var e=new o;return e.add=re,e}},te=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,i=new n;try{new MutationObserver(s).observe(e,{subtree:!0,childList:!0})}catch(t){var o=0,u=[],c=function(e){u.push(e),clearTimeout(o),o=setTimeout(function(){s(u.splice(o=0,u.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function s(e){for(var t,n=e.length,a=0;a<n;a++)l((t=e[a]).removedNodes,"disconnected",i,r),l(t.addedNodes,"connected",r,i)}function l(e,n,r,a){for(var i,o=new t(n),u=e.length,c=0;c<u;1===(i=e[c++]).nodeType&&f(i,o,n,r,a));}function f(e,t,n,r,i){a.has(e)&&!r.has(e)&&(i.delete(e),r.add(e),e.dispatchEvent(t));for(var o=e.children||[],u=o.length,c=0;c<u;f(o[c++],t,n,r,i));}}(e.ownerDocument)),a.add(e),e}}(ee),ne=function(e){var t=e.Event;return function(e,t){var r={attributes:!0,attributeOldValue:!0},o=t instanceof Array&&t.length;o&&(r.attributeFilter=t.slice(0));try{new MutationObserver(a).observe(e,r)}catch(t){r.handleEvent=o?i:n,e.addEventListener("DOMAttrModified",r,!0)}return e};function n(e){r(e.target,e.attrName,e.prevValue)}function r(e,n,r){var a=new t("attributechanged");a.attributeName=n,a.oldValue=r,a.newValue=e.getAttribute(n),e.dispatchEvent(a)}function a(e){for(var t,n=0,a=e.length;n<a;n++)r((t=e[n]).target,t.attributeName,t.oldValue)}function i(e){-1<this.attributeFilter.indexOf(e.attrName)&&n(e)}}(ee);function re(e){return this.set(e,!0)}var ae=/^(?:form|list)$/i;function ie(e){return this.type=e,J(this)}function oe(e){return e(this)}ie.prototype={attribute:function(e,t,n){var r,a="svg"===this.type;switch(t){case"class":if(a)return X(e,t);t="className";case"props":return Y(e,t);case"aria":return function(e){return function(t){for(var n in t)e.setAttribute("role"===n?n:"aria-".concat(n),t[n])}}(e);case"style":return Q(e,n,a);case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);case".dataset":return r=e.dataset,function(e){for(var t in e)r[t]=e[t]};default:return"."===t.slice(0,1)?Y(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return"connected"===r||"disconnected"===r?te(e):"attributechanged"===r?ne(e):!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var a=A(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}}(e,t):t in e&&!a&&!ae.test(t)?function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}}(e,t):X(e,t)}},any:function(e,t){var n,r=this.type,a=!1;return function i(o){switch(typeof o){case"string":case"number":case"boolean":a?n!==o&&(n=o,t[0].textContent=o):(a=!0,n=o,t=W(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,o)],T,e));break;case"function":i(o(e));break;case"object":case"undefined":if(null==o){a=!1,t=W(e.parentNode,t,[],T,e);break}default:if(a=!1,n=o,A(o))if(0===o.length)t.length&&(t=W(e.parentNode,t,[],T,e));else switch(typeof o[0]){case"string":case"number":case"boolean":i(String(o));break;case"function":i(o.map(oe,e));break;case"object":A(o[0])&&(o=o.concat.apply([],o));default:t=W(e.parentNode,t,o,T,e)}else"ELEMENT_NODE"in o?t=W(e.parentNode,t,11===o.nodeType?M.call(o.childNodes):[o],T,e):"text"in o?i(String(o.text)):"any"in o?i(o.any):"html"in o?t=W(e.parentNode,t,M.call(_([].concat(o.html).join(""),r).childNodes),T,e):"length"in o&&i(M.call(o))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(M.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var ue=Object.create,ce=Object.freeze,se=Object.keys,le=ie.prototype,fe=O(new o),de=function(e){return{html:ve("html",e),svg:ve("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=fe.get(t)||fe.set(t,he()),i=r instanceof me?pe(e,a,r):r;return i!==a.wire&&(a.wire=i,t.textContent="",t.appendChild(i.valueOf())),t}}},he=function(){return{stack:[],entry:null,wire:null}},ve=function(e,t){var n=O(new o);return r.for=function(e,a){var i,o=n.get(e)||n.set(e,ue(null));return o[a]||(o[a]=(i=he(),function(){return pe(t,i,r.apply(null,arguments))}))},r.node=function(){return pe(t,he(),r.apply(null,arguments)).valueOf()},r;function r(){return new me(e,function(){var e=[],t=0,n=arguments.length;for(;t<n;)e.push(arguments[t++]);return e}.apply(null,arguments))}},pe=function(e,t,r){var a,i=r.type,o=r.template,u=r.values,c=u.length;ge(e,t,u,c);var s=t.entry;if(s&&s.template===o&&s.type===i)(a=s).tag.apply(a,[o].concat(n(u)));else{var l=new e(i);t.entry=s={type:i,template:o,tag:l,wire:function(e){var t=e.childNodes,n=t.length;if(n<2)return t[0];var r=M.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var a=0;a<n;)e.appendChild(r[a++]);return e}}}(l.apply(void 0,[o].concat(n(u))))}}return s.wire},ge=function e(t,n,r,a){for(var i=n.stack,o=0;o<a;o++){var u=r[o];u instanceof ye?r[o]=pe(t,i[o]||(i[o]=he()),u):A(u)?e(t,i[o]||(i[o]=he()),u,u.length):i[o]=null}a<i.length&&i.splice(a)};function me(e,t){this.type=e,this.template=t.shift(),this.values=t}ce(me);var ye=me,be=de(ie),we=be.render,Ne=be.html,xe=be.svg;return t.Hole=ye,t.custom=function(e){var t=ue(le);return se(e).forEach(function(n){t[n]=e[n](t[n]||("convert"===n?p:String))}),n.prototype=t,de(n);function n(){return ie.apply(this,arguments)}},t.html=Ne,t.render=we,t.svg=xe,t}(document,{});
