parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=0,n=1,r=2,l="http://www.w3.org/1999/xlink",t="http://www.w3.org/2000/svg",o={},u=[],i=u.map,a=Array.isArray,c=function(e,n){var r={};for(var l in e)r[l]=e[l];for(var l in n)r[l]=n[l];return r},f=function(e){return e.currentTarget.events[e.type](e)},s=function(e,n,r,t,o){if("key"===n);else if("style"===n)for(var u in c(r,t)){var i=null==t||null==t[u]?"":t[u];"-"===u[0]?e[n].setProperty(u,i):e[n][u]=i}else if("o"===n[0]&&"n"===n[1])e.events||(e.events={}),e.events[n=n.slice(2)]=t,null==t?e.removeEventListener(n,f):null==r&&e.addEventListener(n,f);else{var a=null==t||!1===t;if(n in e&&"list"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o)e[n]=null==t?"":t,a&&e.removeAttribute(n);else o&&n!==(n=n.replace(/^xlink:?/,""))?a?e.removeAttributeNS(l,n):e.setAttributeNS(l,n,t):a?e.removeAttribute(n):e.setAttribute(n,t)}},p=function(e,n,l){var o=e.type===r?document.createTextNode(e.name):(l=l||"svg"===e.name)?document.createElementNS(t,e.name):document.createElement(e.name),u=e.props;u.oncreate&&n.push(function(){u.oncreate(o)});for(var i=0,a=e.children.length;i<a;i++)o.appendChild(p(e.children[i],n,l));for(var c in u)s(o,c,null,u[c],l);return e.element=o},v=function(e,n,r,l,t,o){for(var u in c(n,r))("value"===u||"checked"===u?e[u]:n[u])!==r[u]&&s(e,u,n[u],r[u],t);var i=o?r.oncreate:r.onupdate;null!=i&&l.push(function(){i(e,n)})},m=function(e){for(var n=0,r=e.children.length;n<r;n++)m(e.children[n]);var l=e.props.ondestroy;return null!=l&&l(e.element),e.element},h=function(e,n){var r=function(){e.removeChild(m(n))},l=n.props&&n.props.onremove;null!=l?l(n.element,r):r()},d=function(e){return null==e?null:e.key},y=function(e,n,r){for(var l,t,o={};n<=r;n++)null!=(l=(t=e[n]).key)&&(o[l]=t);return o},g=function(e,l,t,o,u,i){if(o===t);else if(null!=t&&t.type===r&&o.type===r)t.name!==o.name&&(l.nodeValue=o.name);else if(null==t||t.name!==o.name){var a=e.insertBefore(p(o,u,i),l);null!=t&&h(e,t),l=a}else{var c,f,s;v(l,t.props,o.props,u,i=i||"svg"===o.name,t.type===n);for(var m,k=t.children,w=0,b=k.length-1,x=o.children,A=0,N=x.length-1;A<=N&&w<=b&&(s=d(k[w]),m=d(x[A]),null!=s&&s===m);)g(l,k[w].element,k[w],x[A],u,i),w++,A++;for(;A<=N&&w<=b&&(s=d(k[b]),m=d(x[N]),null!=s&&s===m);)g(l,k[b].element,k[b],x[N],u,i),b--,N--;if(w>b)for(;A<=N;)l.insertBefore(p(x[A++],u,i),(f=k[w])&&f.element);else if(A>N)for(;w<=b;)h(l,k[w++]);else{for(var E=y(k,w,b),B={};A<=N;)s=d(f=k[w]),m=d(x[A]),B[s]||null!=m&&m===d(k[w+1])?(null==s&&h(l,f),w++):null==m||t.type===n?(null==s&&(g(l,f&&f.element,f,x[A],u,i),A++),w++):(s===m?(g(l,f.element,f,x[A],u,i),B[m]=!0,w++):null!=(c=E[m])?(g(l,l.insertBefore(c.element,f&&f.element),c,x[A],u,i),B[m]=!0):g(l,f&&f.element,null,x[A],u,i),A++);for(;w<=b;)null==d(f=k[w++])&&h(l,f);for(var C in E)null==B[C]&&h(l,E[C])}}return o.element=l},k=function(e,n,r,l,t,o){return{name:e,props:n,children:r,element:l,key:t,type:o}},w=function(e,n){return k(e,o,u,n,null,r)},b=function(e){return 3===e.nodeType?w(e.nodeValue,e):x(e)},x=function(e){return k(e.nodeName.toLowerCase(),o,i.call(e.childNodes,b),e,null,n)},A=exports.recycle=function(e){return x(e.children[0])},N=exports.patch=function(e,n,r){var l=[];for(g(r,r.children[0],e,n,l);l.length>0;)l.pop()();return n},E=exports.h=function(n,r){for(var l,t=[],o=[],u=arguments.length;u-- >2;)t.push(arguments[u]);for(null!=(r=null==r?{}:r).children&&(t.length<=0&&t.push(r.children),delete r.children);t.length>0;)if(a(l=t.pop()))for(u=l.length;u-- >0;)t.push(l[u]);else!1===l||!0===l||null==l||o.push("object"==typeof l?l:w(l));return"function"==typeof n?n(r,r.children=o):k(n,r,o,null,r.key,e)};
},{}],4:[function(require,module,exports) {
var t=function(t){var n={},e={target:null,subs:{},depend:function(t,n){t.includes(this.target)||t.push(this.target),e.subs[this.target].includes(n)||e.subs[this.target].push(n)},getValidDeps:function(t,n){var e=this;return t.filter(function(t){return e.subs[t].includes(n)})},notifyDeps:function(t){t.map(function(t){return i(t)})}},r=function(t,e){n[t]||(n[t]=[]),n[t].push(e)},u=function(t,n,r){var u=t[n],s=[];Object.defineProperty(t,n,{get:function(){return e.target&&e.depend(s,n),u},set:function(t){u=t,s=e.getValidDeps(s,n),e.notifyDeps(s,n),i(n)}})},i=function(t){!n[t]||n[t].lenght<1||n[t].forEach(function(t){return t()})},s=function(t,n,u){var i=null,s=[];r(n,function(){i=null,s=e.getValidDeps(s,n),e.notifyDeps(s,n)}),Object.defineProperty(t,n,{get:function(){return e.target&&e.depend(s,n),e.target=n,i||(e.subs[n]=[],i=u.call(t)),e.target=null,i},set:function(){}})};return function(t){for(var n in t)t.hasOwnProperty(n)&&("function"==typeof t[n]?s(t,n,t[n]):u(t,n))}(t.data),function(t,n){for(var e in t)t.hasOwnProperty(e)&&r(e,t[e].bind(n))}(t.watch,t.data),{state:t.data,observe:r,notify:i}};module.exports={Observable:t};
},{}],13:[function(require,module,exports) {
module.exports=function(r,e){if("function"!=typeof r)throw new Error("URL Mapper - function to compile a route expected as first argument");e=e||{};var t={};function n(n){return t[n]||(t[n]=r(n,e)),t[n]}return{parse:function(r,e){if(arguments.length<2)throw new Error("URL Mapper - parse method expects 2 arguments");return n(r).parse(e)},stringify:function(r,e){if(arguments.length<2)throw new Error("URL Mapper - stringify method expects 2 arguments");return n(r).stringify(e)},map:function(r,e){if(arguments.length<2)throw new Error("URL Mapper - map method expects 2 arguments");for(var t in e){var o=n(t).parse(r);if(o)return{route:t,match:e[t],values:o}}}}};
},{}],17:[function(require,module,exports) {
"use strict";var r=/([=:@$/])/g,e=/([&;/])/g,t=/[=:@$]/,n=/[&;]/;function i(r,e){return encodeURI(r.replace(e,"/$1"))}function a(r){return"string"==typeof r?r.replace(/;+$/g,""):r}function f(t,n){if(!n)return a(f(t,!0));if("number"==typeof t||!0===t||!1===t||null===t)return":"+t;var u=[];if(t instanceof Array){for(var o=0;o<t.length;++o)void 0===t[o]?u.push(":null"):u.push(f(t[o],!0));return"@"+u.join("&")+";"}if("object"==typeof t){for(var c in t){var h=f(t[c],!0);h&&u.push(i(c,r)+h)}return"$"+u.join("&")+";"}return void 0!==t?"="+i(t.toString(),e):void 0}function u(r){var e=0;function i(t){for(var n="";e!==r.length;++e){if("/"===r.charAt(e)){if((e+=1)===r.length){n+=";";break}}else if(r.charAt(e).match(t))break;n+=r.charAt(e)}return n}return r=decodeURI(r),function a(){var f,u=r.charAt(e++);if("="===u)return i(n);if(":"===u){var o=i(n);return"true"===o||"false"!==o&&(o=parseFloat(o),isNaN(o)?null:o)}if("@"===u){f=[];r:if(!(e>=r.length||";"===r.charAt(e)))for(;;){if(f.push(a()),e>=r.length||";"===r.charAt(e))break r;e+=1}return e+=1,f}if("$"===u){f={};r:if(!(e>=r.length||";"===r.charAt(e)))for(;;){if(f[i(t)]=a(),e>=r.length||";"===r.charAt(e))break r;e+=1}return e+=1,f}throw new Error("Unexpected char "+u)}()}module.exports={stringify:f,parse:u};
},{}],18:[function(require,module,exports) {
module.exports=g,module.exports.parse=n,module.exports.compile=o,module.exports.tokensToFunction=i,module.exports.tokensToRegExp=c;var e="/",t="./",r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function n(n,o){for(var i,l=[],f=0,u=0,s="",c=o&&o.delimiter||e,g=o&&o.delimiters||t,h=!1;null!==(i=r.exec(n));){var m=i[0],x=i[1],d=i.index;if(s+=n.slice(u,d),u=d+m.length,x)s+=x[1],h=!0;else{var v="",y=n[u],w=i[2],E=i[3],b=i[4],$=i[5];if(!h&&s.length){var R=s.length-1;g.indexOf(s[R])>-1&&(v=s[R],s=s.slice(0,R))}s&&(l.push(s),s="",h=!1);var T=""!==v&&void 0!==y&&y!==v,A="+"===$||"*"===$,j="?"===$||"*"===$,k=v||c,O=E||b;l.push({name:w||f++,prefix:v,delimiter:k,optional:j,repeat:A,partial:T,pattern:O?p(O):"[^"+a(k)+"]+?"})}}return(s||u<n.length)&&l.push(s+n.substr(u)),l}function o(e,t){return i(n(e,t))}function i(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",i=n&&n.encode||encodeURIComponent,a=0;a<e.length;a++){var p=e[a];if("string"!=typeof p){var l,f=r?r[p.name]:void 0;if(Array.isArray(f)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but got array');if(0===f.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var u=0;u<f.length;u++){if(l=i(f[u],p),!t[a].test(l))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'"');o+=(0===u?p.prefix:p.delimiter)+l}}else if("string"!=typeof f&&"number"!=typeof f&&"boolean"!=typeof f){if(!p.optional)throw new TypeError('Expected "'+p.name+'" to be '+(p.repeat?"an array":"a string"));p.partial&&(o+=p.prefix)}else{if(l=i(String(f),p),!t[a].test(l))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but got "'+l+'"');o+=p.prefix+l}}else o+=p}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(e){return e.replace(/([=!:$/()])/g,"\\$1")}function l(e){return e&&e.sensitive?"":"i"}function f(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function u(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(g(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",l(r))}function s(e,t,r){return c(n(e,r),t,r)}function c(r,n,o){for(var i=(o=o||{}).strict,p=!1!==o.start,f=!1!==o.end,u=a(o.delimiter||e),s=o.delimiters||t,c=[].concat(o.endsWith||[]).map(a).concat("$").join("|"),g=p?"^":"",h=0===r.length,m=0;m<r.length;m++){var x=r[m];if("string"==typeof x)g+=a(x),h=m===r.length-1&&s.indexOf(x[x.length-1])>-1;else{var d=x.repeat?"(?:"+x.pattern+")(?:"+a(x.delimiter)+"(?:"+x.pattern+"))*":x.pattern;n&&n.push(x),x.optional?x.partial?g+=a(x.prefix)+"("+d+")?":g+="(?:"+a(x.prefix)+"("+d+"))?":g+=a(x.prefix)+"("+d+")"}}return f?(i||(g+="(?:"+u+")?"),g+="$"===c?"$":"(?="+c+")"):(i||(g+="(?:"+u+"(?="+c+"))?"),h||(g+="(?="+u+"|"+c+")")),new RegExp(g,l(o))}function g(e,t,r){return e instanceof RegExp?f(e,t):Array.isArray(e)?u(e,t,r):s(e,t,r)}
},{}],14:[function(require,module,exports) {
"use strict";var e=require("urlon"),r=require("path-to-regexp");function t(e){return e.name.toString()}function n(e){return encodeURI(e).replace(/[/?#'"]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(i,o){var a,f,c=[],s=o.querySeparator||"?";return a=r(i,c),c=c.map(t),f=r.compile(i),{parse:function(r){var t=r,n={};if(~t.indexOf("#")&&!~s.indexOf("#")&&(t=t.split("#")[0]),~t.indexOf(s)){if(o.query){var i="$"+t.slice(t.indexOf(s)+s.length);n=e.parse(i)}t=t.split(s)[0]}var f=a.exec(t);if(!f)return null;for(var u=1;u<f.length;++u){var p=c[u-1],l=f[u]&&decodeURIComponent(f[u]);n[p]=l&&":"===l[0]?e.parse(l):l}return n},stringify:function(r){var t={},i={};Object.keys(r).forEach(function(n){if(~c.indexOf(n))switch(typeof r[n]){case"boolean":case"number":t[n]=e.stringify(r[n]);break;case"object":if(r[n])throw new Error("URL Mapper - objects are not allowed to be stringified as part of path");t[n]=e.stringify(r[n]);break;default:t[n]=r[n]}else i[n]=r[n]});var a=f(t,{encode:n}),u="";return o.query&&Object.keys(i).length&&(u=e.stringify(i).slice(1)),a+(u?s+u:"")}}}module.exports=i;
},{"urlon":17,"path-to-regexp":18}],11:[function(require,module,exports) {
"use strict";var e=require("./mapper"),r=require("./compileRoute");module.exports=function(u){return e(r,u)};
},{"./mapper":13,"./compileRoute":14}],5:[function(require,module,exports) {
"use strict";var e=require("./model"),r=require("url-mapper"),t=a(r);function a(e){return e&&e.__esModule?e:{default:e}}var u=(0,t.default)(),n=function(e){return function(r){return u.map(r,e)}},o=function(e){var r=e.state.router(e.state.location);if(r){var t=r.match;r.values;e.state.render(t)}else{var a=e.state.routes["*"];e.state.render(a)}};module.exports={router:n,Navigate:o};
},{"./model":4,"url-mapper":11}],3:[function(require,module,exports) {
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(o){var e=document.querySelectorAll("a");for(var n in e)"object"===t(e[n])&&"/"===e[n].attributes.href.value.charAt(0)&&function(){var t=e[n].attributes.href.value;e[n].addEventListener("click",function(e){e.preventDefault(),o.state.location=t,history.pushState({},null,t)})}()};module.exports={transLink:o};
},{}],1:[function(require,module,exports) {
"use strict";var e=require("superfine"),r=require("./libs/model"),t=require("./libs/router"),u=require("./utils"),i=a(u);function a(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}var l=function(r,t,u){return function(i){u=(0,e.patch)(u,r(i),t)}};module.exports={h:e.h,patch:e.patch,Observable:r.Observable,Render:l,Router:t.router,Navigate:t.Navigate,Utils:i};
},{"superfine":9,"./libs/model":4,"./libs/router":5,"./utils":3}]},{},[1], null)
//# sourceMappingURL=/index.map