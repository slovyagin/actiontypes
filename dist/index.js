!function(){var e="undefined"!=typeof window;e||(global.require=require);var t=e?window:global;if(!t.$fsx){var r=t.$fsx={};r.f={},r.m={},r.r=function(e){var t=r.m[e];if(t)return t.m.exports;var n=r.f[e];return n?((t=r.m[e]={}).exports={},t.m={exports:t.exports},n(t.m,t.exports),t.m.exports):void 0}}}(),function(e){e.f[0]=function(t,r){Object.defineProperty(r,"__esModule",{value:!0});const n=e.r(1),o={delimiter:"/",prefix:""},a={argsType:TypeError("Check the argument's types"),namespaceOnly:Error("It's not enough to provide a namespace only"),namespaceType:TypeError("Namespace must be a sting"),noargs:Error("Provide at least 2 strings as arguments")};r.default=function(e,t,...r){if(0===arguments.length)throw a.noargs;if("string"!=typeof e)throw a.namespaceType;if(1===arguments.length)throw a.namespaceOnly;let s=[t,...r],i=o;if("string"==typeof t){const e=r.slice(0,-1),a=r[r.length-1];n(a)&&(s=[t,...e],i=Object.assign({},o,a))}else{if(!Array.isArray(t))throw a.argsType;{s=t;const e=r[0];n(e)&&(i=Object.assign({},o,e))}}const{prefix:c,delimiter:f}=i;return s.reduce((t,r)=>{const n=r.toUpperCase();return t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,value:c+e+f+n}),t},{})}},e.f[1]=function(e,t){var r="[object Object]";var n,o,a=Function.prototype,s=Object.prototype,i=a.toString,c=s.hasOwnProperty,f=i.call(Object),p=s.toString,u=(n=Object.getPrototypeOf,o=Object,function(e){return n(o(e))});e.exports=function(e){if(!(t=e)||"object"!=typeof t||p.call(e)!=r||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t,n=u(e);if(null===n)return!0;var o=c.call(n,"constructor")&&n.constructor;return"function"==typeof o&&o instanceof o&&i.call(o)==f}},e.r(0)}($fsx);