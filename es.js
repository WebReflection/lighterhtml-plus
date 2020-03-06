/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var t,n="-"+Math.random().toFixed(6)+"%",r=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+n+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==n)||(n="_dt: "+n.slice(1,-1)+";",r=!0)}catch(e){}var o="\x3c!--"+n+"--\x3e",a=/^(?:style|textarea)$/i,i=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function s(e){return e.join(o).replace(p,b).replace(h,g)}/*! (c) Andrea Giammarchi - ISC */var c=" \\f\\n\\r\\t",l="[^"+c+"\\/>\"'=]+",u="["+c+"]+"+l,f="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",d="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+l.replace("\\/","")+"))?)",h=new RegExp(f+u+d+"+)(["+c+"]*/?>)","g"),p=new RegExp(f+u+d+"*)(["+c+"]*/>)","g"),v=new RegExp("("+u+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function g(e,t,n,r){return"<"+t+n.replace(v,m)+r}function m(e,t,r){return t+(r||'"')+n+(r||'"')}function b(e,t,n){return i.test(t)?e:"<"+t+n+"></"+t+">"}
/*! (c) Andrea Giammarchi */
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi - ISC */var y=function(e){var t=function(e){var t=n("template");return t.innerHTML=e,t.content};return function(e,n){return("svg"===n?r:t)(e)};function n(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function r(e){var t=n("fragment"),r=n("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(t,r.firstChild.childNodes),t}}(document);const{indexOf:w}=[],N=(e,t,n,r,o,a)=>{const i="selectedIndex"in t;let s=i;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,a),i&&s&&o.selected){s=!s;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:w.call(t.querySelectorAll("option"),o)}r++}},x=(e,t)=>e==t,k=e=>e,E=(e,t,n,r,o,a,i)=>{const s=a-o;if(s<1)return-1;for(;n-t>=s;){let s=t,c=o;for(;s<n&&c<a&&i(e[s],r[c]);)s++,c++;if(c===a)return t;t=s+1}return-1},C=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,A=(e,t,n,r)=>{for(;n<r;)S(e(t[n++],-1))},L=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},O=(e,t,n,r,o,a,i,s,c,l,u,f,d)=>{((e,t,n,r,o,a,i,s,c)=>{const l=[],u=e.length;let f=i,d=0;for(;d<u;)switch(e[d++]){case 0:o++,f++;break;case 1:l.push(r[o]),N(t,n,r,o++,o,f<s?t(a[f],0):c);break;case-1:f++}for(d=0;d<u;)switch(e[d++]){case 0:i++;break;case-1:-1<l.indexOf(a[i])?i++:A(t,a,i++,i)}})(((e,t,n,r,o,a,i)=>{const s=n+a,c=[];let l,u,f,d,h,p,v;e:for(l=0;l<=s;l++){if(l>50)return null;for(v=l-1,h=l?c[l-1]:[0,0],p=c[l]=[],u=-l;u<=l;u+=2){for(d=u===-l||u!==l&&h[v+u-1]<h[v+u+1]?h[v+u+1]:h[v+u-1]+1,f=d-u;d<a&&f<n&&i(r[o+d],e[t+f]);)d++,f++;if(d===a&&f===n)break e;p[l+u]=d}}const g=Array(l/2+s/2);let m=g.length-1;for(l=c.length-1;l>=0;l--){for(;d>0&&f>0&&i(r[o+d-1],e[t+f-1]);)g[m--]=0,d--,f--;if(!l)break;v=l-1,h=l?c[l-1]:[0,0],u=d-f,u===-l||u!==l&&h[v+u-1]<h[v+u+1]?(f--,g[m--]=1):(d--,g[m--]=-1)}return g})(n,r,a,i,s,l,f)||((e,t,n,r,o,a,i,s)=>{let c=0,l=r<s?r:s;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=i;const d=o.slice(a,i);for(let r=t;r<n;r++){const t=d.indexOf(e[r]);if(-1<t){const e=t+a;c=L(f,l,e),-1<c&&(f[c]=e,u[c]={newi:r,oldi:e,prev:u[c-1]})}}for(c=--l,--i;f[c]>i;)--c;l=s+r-c;const h=Array(l);let p=u[c];for(--n;p;){const{newi:e,oldi:t}=p;for(;n>e;)h[--l]=1,--n;for(;i>t;)h[--l]=-1,--i;h[--l]=0,--n,--i,p=p.prev}for(;n>=t;)h[--l]=1,--n;for(;i>=a;)h[--l]=-1,--i;return h})(n,r,o,a,i,s,c,l),e,t,n,r,i,s,u,d)},S=e=>(e.remove||T).call(e);function T(){const{parentNode:e}=this;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */const j=(e,t,n,r)=>{r||(r={});const o=r.compare||x,a=r.node||k,i=null==r.before?null:a(r.before,0),s=t.length;let c=s,l=0,u=n.length,f=0;for(;l<c&&f<u&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<u&&o(t[c-1],n[u-1]);)c--,u--;const d=l===c,h=f===u;if(d&&h)return n;if(d&&f<u)return N(a,e,n,f,u,C(a,t,l,s,i)),n;if(h&&l<c)return A(a,t,l,c),n;const p=c-l,v=u-f;let g=-1;if(p<v){if(g=E(n,f,u,t,l,c,o),-1<g)return N(a,e,n,f,g,a(t[l],0)),N(a,e,n,g+p,u,C(a,t,c,s,i)),n}else if(v<p&&(g=E(t,l,c,n,f,u,o),-1<g))return A(a,t,l,g),A(a,t,g+v,c),n;return p<2||v<2?(N(a,e,n,f,u,a(t[l],0)),A(a,t,l,c),n):p===v&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,l,c,o)?(N(a,e,n,f,u,C(a,t,c,s,i)),n):(O(a,e,n,f,u,v,t,l,c,p,s,o,i),n)};/*! (c) Andrea Giammarchi - ISC */var M=String.prototype.trim,D=r?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function W(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function $(e,t,a,i){for(var s=e.attributes,c=[],l=[],u=D(s,a),f=u.length,d=0;d<f;){var h,p=u[d++],v=p.value===n;if(v||1<(h=p.value.split(o)).length){var g=p.name;if(c.indexOf(g)<0){c.push(g);var m=a.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+g+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),b=s[m]||s[m.toLowerCase()];if(v)t.push(V(b,i,m,null));else{for(var y=h.length-2;y--;)a.shift();t.push(V(b,i,m,h))}}l.push(p)}}d=0;for(var w=(0<(f=l.length)&&r&&!("ownerSVGElement"in e));d<f;){var N=l[d++];w&&(N.value=""),e.removeAttribute(N.name)}var x=e.nodeName;if(/^script$/i.test(x)){var k=document.createElement(x);for(f=s.length,d=0;d<f;)k.setAttributeNode(s[d++].cloneNode(!0));k.textContent=e.textContent,e.parentNode.replaceChild(k,e)}}function _(e,t){return{type:"any",node:e,path:t}}function V(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function R(e,t){return{type:"text",node:e,path:t}}var F=document.importNode,z=String.prototype.trim,H=new WeakMap;function I(e,t){var r=(e.convert||s)(t),i=e.transform;i&&(r=i(r));var c=y(r,e.type);G(c);var l=[];!function e(t,r,i,s){for(var c=t.childNodes,l=c.length,u=0;u<l;){var f=c[u];switch(f.nodeType){case 1:var d=s.concat(u);$(f,r,i,d),e(f,r,i,d);break;case 8:var h=f.textContent;if(h===n)i.shift(),r.push(a.test(t.nodeName)?R(t,s):_(f,s.concat(u)));else switch(h.slice(0,2)){case"/*":if("*/"!==h.slice(-2))break;case"👻":t.removeChild(f),u--,l--}break;case 3:a.test(t.nodeName)&&M.call(f.textContent)===o&&(i.shift(),r.push(R(t,s)))}u++}}(c,l,t.slice(0),[]);var u={content:c,updates:function(n){for(var r=[],o=l.length,a=0,i=0;a<o;){var s=l[a++],c=W(n,s.path);switch(s.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var u=s.sparse,f=e.attribute(c,s.name,s.node);null===u?r.push({fn:f,sparse:!1}):(i+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return o+=i,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var a=1,i=1;a<e;){var s=r[a-i];if(s.sparse){var c=s.values,l=c[0],u=1,f=c.length;for(i+=f-2;u<f;)l+=arguments[a++]+c[u++];s.fn(l)}else s.fn(arguments[a++])}return n}}};return H.set(t,u),u}function Z(e,t){var n=H.get(t)||I(e,t);return n.updates(F.call(document,n.content,!0))}var B=[];function G(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===z.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(s){var c,l,u,f;switch(typeof s){case"object":if(s){if("object"===a){if(!o&&i!==s)for(l in i)l in s||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,s)u="number"!=typeof(f=s[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=s;break}default:i!=s&&(a="string",i=s,o?r.value=s||"":r.cssText=s||"")}}}}(),P=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);
/*! (c) Andrea Giammarchi - ISC */const{isArray:J}=Array,{create:K,freeze:Q,keys:U}=Object,X=P.prototype.nodeType,Y="function"==typeof WeakSet?WeakSet:function(){const e=new WeakMap;return e.add=re,e},ee={Event:CustomEvent,WeakSet:Y},te=
/*! (c) Andrea Giammarchi */
function(e){/*! (c) Andrea Giammarchi - ISC */var t=e.Event,n=e.WeakSet,r=!0,o=null;return function(e){return r&&(r=!r,o=new n,function(e){var r=new n,a=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var i=0,s=[],c=function(e){s.push(e),clearTimeout(i),i=setTimeout((function(){l(s.splice(i=0,s.length))}),0)};e.addEventListener("DOMNodeRemoved",(function(e){c({addedNodes:[],removedNodes:[e.target]})}),!0),e.addEventListener("DOMNodeInserted",(function(e){c({addedNodes:[e.target],removedNodes:[]})}),!0)}function l(e){for(var t,n=e.length,o=0;o<n;o++)u((t=e[o]).removedNodes,"disconnected",a,r),u(t.addedNodes,"connected",r,a)}function u(e,n,r,o){for(var a,i=new t(n),s=e.length,c=0;c<s;1===(a=e[c++]).nodeType&&f(a,i,n,r,o));}function f(e,t,n,r,a){o.has(e)&&!r.has(e)&&(a.delete(e),r.add(e),e.dispatchEvent(t));for(var i=e.children||[],s=i.length,c=0;c<s;f(i[c++],t,n,r,a));}}(e.ownerDocument)),o.add(e),e}}(ee),ne=function(e){var t=e.Event;return function(e,t){var r={attributes:!0,attributeOldValue:!0},i=t instanceof Array&&t.length;i&&(r.attributeFilter=t.slice(0));try{new MutationObserver(o).observe(e,r)}catch(t){r.handleEvent=i?a:n,e.addEventListener("DOMAttrModified",r,!0)}return e};function n(e){r(e.target,e.attrName,e.prevValue)}function r(e,n,r){var o=new t("attributechanged");o.attributeName=n,o.oldValue=r,o.newValue=e.getAttribute(n),e.dispatchEvent(o)}function o(e){for(var t,n=0,o=e.length;n<o;n++)r((t=e[n]).target,t.attributeName,t.oldValue)}function a(e){-1<this.attributeFilter.indexOf(e.attrName)&&n(e)}}(ee);function re(e){return this.set(e,!0)}const oe=(e,t)=>e.nodeType===X?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,ae=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},ie=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},se=/^(?:form|list)$/i,ce=[].slice,le=(e,t)=>e.ownerDocument.createTextNode(t);function ue(e){return this.type=e,t=this,n=B,r=G,function(e){return n!==e&&(r=Z(t,n=e)),r.apply(null,arguments)};var t,n,r}function fe(e){return e(this)}ue.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return ae(e,n);t="className";case"data":case"props":return ie(e,t);case"style":return q(e,n,r);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),r):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return"connected"===r||"disconnected"===r?te(e):"attributechanged"===r?ne(e):t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!r&&!se.test(t)?ie(e,t):ae(e,n)}},any(e,t){const n={node:oe,before:e},{type:r}=this;let o,a=!1;const i=s=>{switch(typeof s){case"string":case"number":case"boolean":a?o!==s&&(o=s,t[0].textContent=s):(a=!0,o=s,t=j(e.parentNode,t,[le(e,s)],n));break;case"function":i(s(e));break;case"object":case"undefined":if(null==s){a=!1,t=j(e.parentNode,t,[],n);break}default:if(a=!1,o=s,J(s))if(0===s.length)t.length&&(t=j(e.parentNode,t,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":i(String(s));break;case"function":i(s.map(fe,e));break;case"object":J(s[0])&&(s=s.concat.apply([],s));default:t=j(e.parentNode,t,s,n)}else(e=>"ELEMENT_NODE"in e)(s)?t=j(e.parentNode,t,11===s.nodeType?ce.call(s.childNodes):[s],n):"text"in s?i(String(s.text)):"any"in s?i(s.any):"html"in s?t=j(e.parentNode,t,ce.call(y([].concat(s.html).join(""),r).childNodes),n):"length"in s&&i(ce.call(s))}};return i},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(ce.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const de=ue.prototype,he=new WeakMap,pe=e=>({html:ve("html",e),svg:ve("svg",e),render(t,n){const r="function"==typeof n?n():n,o=he.get(t)||me(t),a=r instanceof Ne?ge(e,o,r):r;return a!==o.wire&&(o.wire=a,t.textContent="",t.appendChild(a.valueOf(!0))),t}}),ve=(e,t)=>{const n=new WeakMap;return r.for=(e,o)=>{const a=n.get(e)||(e=>{const t=K(null);return n.set(e,t),t})(e);return a[o]||(a[o]=(i={sub:[],stack:[],wire:null},function(){return ge(t,i,r.apply(null,arguments))}));var i},r.node=function(){return ge(t,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new Ne(e,arguments)}},ge=(e,t,n)=>{const{sub:r,stack:o}=t,a={a:0,aLength:r.length,i:0,iLength:o.length},i=be(e,t,n,a),{a:s,i:c,aLength:l,iLength:u}=a;return s<l&&r.splice(s),c<u&&o.splice(c),i},me=e=>{const t={sub:[],stack:[],wire:null};return he.set(e,t),t},be=(e,t,n,r)=>{const{stack:o}=t,{i:a,iLength:i}=r,{type:s,args:c}=n,l=a===i;l&&(r.iLength=o.push({type:s,id:c[0],tag:null,wire:null})),r.i++,ye(e,t,c,r);const u=o[a];return l||u.id!==c[0]||u.type!==s?(u.type=s,u.id=c[0],u.tag=new e(s),u.wire=we(u.tag.apply(null,c))):u.tag.apply(null,c),u.wire},ye=(e,t,n,r)=>{for(let o=1,{length:a}=n;o<a;o++){const a=n[o];if("object"==typeof a&&a)if(a instanceof Ne)n[o]=be(e,t,a,r);else if(J(a))for(let n=0,{length:o}=a;n<o;n++){const o=a[n];if("object"==typeof o&&o&&o instanceof Ne){const{sub:i}=t,{a:s,aLength:c}=r;s===c&&(r.aLength=i.push({sub:[],stack:[],wire:null})),r.a++,a[n]=ge(e,i[s],o)}}}},we=e=>{const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new P(t):e};function Ne(e,t){this.type=e,this.args=t}Q(Ne);const xe=Ne,{render:ke,html:Ee,svg:Ce}=pe(ue);return e.Hole=xe,e.custom=e=>{const t=K(de);return U(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?s:String))}),n.prototype=t,pe(n);function n(){return ue.apply(this,arguments)}},e.html=Ee,e.render=ke,e.svg=Ce,e}({});
