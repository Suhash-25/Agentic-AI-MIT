var px=Object.defineProperty;var Zf=t=>{throw TypeError(t)};var mx=(t,e,n)=>e in t?px(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var st=(t,e,n)=>mx(t,typeof e!="symbol"?e+"":e,n),gx=(t,e,n)=>e.has(t)||Zf("Cannot "+n);var Kf=(t,e,n)=>e.has(t)?Zf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var na=(t,e,n)=>(gx(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jm={exports:{}},Ol={},Xm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),xx=Symbol.for("react.portal"),_x=Symbol.for("react.fragment"),yx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),Ex=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),Ax=Symbol.for("react.memo"),bx=Symbol.for("react.lazy"),Qf=Symbol.iterator;function Cx(t){return t===null||typeof t!="object"?null:(t=Qf&&t[Qf]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Ym={};function Os(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||$m}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zm(){}Zm.prototype=Os.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||$m}var Cd=bd.prototype=new Zm;Cd.constructor=bd;qm(Cd,Os.prototype);Cd.isPureReactComponent=!0;var Jf=Array.isArray,Km=Object.prototype.hasOwnProperty,Rd={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Km.call(e,i)&&!Qm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ho,type:t,key:s,ref:o,props:r,_owner:Rd.current}}function Rx(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function Px(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eh=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Px(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case xx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uc(o,0):i,Jf(r)?(n="",t!=null&&(n=t.replace(eh,"$&/")+"/"),ja(r,e,n,"",function(c){return c})):r!=null&&(Pd(r)&&(r=Rx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uc(s,a);o+=ja(s,e,n,l,r)}else if(l=Cx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Xa={transition:null},Ix={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:Rd};function eg(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Os;We.Fragment=_x;We.Profiler=Sx;We.PureComponent=bd;We.StrictMode=yx;We.Suspense=Tx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;We.act=eg;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Km.call(e,l)&&!Qm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ho,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:Ex,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mx,_context:t},t.Consumer=t};We.createElement=Jm;We.createFactory=function(t){var e=Jm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:wx,render:t}};We.isValidElement=Pd;We.lazy=function(t){return{$$typeof:bx,_payload:{_status:-1,_result:t},_init:Lx}};We.memo=function(t,e){return{$$typeof:Ax,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};We.unstable_act=eg;We.useCallback=function(t,e){return tn.current.useCallback(t,e)};We.useContext=function(t){return tn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};We.useEffect=function(t,e){return tn.current.useEffect(t,e)};We.useId=function(){return tn.current.useId()};We.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return tn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};We.useRef=function(t){return tn.current.useRef(t)};We.useState=function(t){return tn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return tn.current.useTransition()};We.version="18.3.1";Xm.exports=We;var he=Xm.exports;const Nx=vx(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx=he,kx=Symbol.for("react.element"),Ux=Symbol.for("react.fragment"),Fx=Object.prototype.hasOwnProperty,Ox=Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Fx.call(e,i)&&!zx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kx,type:t,key:s,ref:o,props:r,_owner:Ox.current}}Ol.Fragment=Ux;Ol.jsx=tg;Ol.jsxs=tg;jm.exports=Ol;var p=jm.exports,xu={},ng={exports:{}},En={},ig={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,k){var z=L.length;L.push(k);e:for(;0<z;){var Y=z-1>>>1,te=L[Y];if(0<r(te,k))L[Y]=k,L[z]=te,z=Y;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],z=L.pop();if(z!==k){L[0]=z;e:for(var Y=0,te=L.length,xe=te>>>1;Y<xe;){var G=2*(Y+1)-1,J=L[G],ue=G+1,Ee=L[ue];if(0>r(J,z))ue<te&&0>r(Ee,J)?(L[Y]=Ee,L[ue]=z,Y=ue):(L[Y]=J,L[G]=z,Y=G);else if(ue<te&&0>r(Ee,z))L[Y]=Ee,L[ue]=z,Y=ue;else break e}}return k}function r(L,k){var z=L.sortIndex-k.sortIndex;return z!==0?z:L.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,_=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=L)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function S(L){if(M=!1,v(L),!_)if(n(l)!==null)_=!0,P(A);else{var k=n(c);k!==null&&B(S,k.startTime-L)}}function A(L,k){_=!1,M&&(M=!1,u(I),I=-1),g=!0;var z=h;try{for(v(k),f=n(l);f!==null&&(!(f.expirationTime>k)||L&&!C());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var te=Y(f.expirationTime<=k);k=t.unstable_now(),typeof te=="function"?f.callback=te:f===n(l)&&i(l),v(k)}else i(l);f=n(l)}if(f!==null)var xe=!0;else{var G=n(c);G!==null&&B(S,G.startTime-k),xe=!1}return xe}finally{f=null,h=z,g=!1}}var w=!1,T=null,I=-1,O=5,y=-1;function C(){return!(t.unstable_now()-y<O)}function Q(){if(T!==null){var L=t.unstable_now();y=L;var k=!0;try{k=T(!0,L)}finally{k?K():(w=!1,T=null)}}else w=!1}var K;if(typeof x=="function")K=function(){x(Q)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,q=N.port2;N.port1.onmessage=Q,K=function(){q.postMessage(null)}}else K=function(){m(Q,0)};function P(L){T=L,w||(w=!0,K())}function B(L,k){I=m(function(){L(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,P(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return L()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(L,k,z){var Y=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=z+te,L={id:d++,callback:k,priorityLevel:L,startTime:z,expirationTime:te,sortIndex:-1},z>Y?(L.sortIndex=z,e(c,L),n(l)===null&&L===n(c)&&(M?(u(I),I=-1):M=!0,B(S,z-Y))):(L.sortIndex=te,e(l,L),_||g||(_=!0,P(A))),L},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(L){var k=h;return function(){var z=h;h=k;try{return L.apply(this,arguments)}finally{h=z}}}})(rg);ig.exports=rg;var Bx=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx=he,Mn=Bx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,Eo={};function Fr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Eo[t]=e,t=0;t<e.length;t++)sg.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,Gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,th={},nh={};function Vx(t){return _u.call(nh,t)?!0:_u.call(th,t)?!1:Gx.test(t)?nh[t]=!0:(th[t]=!0,!1)}function Wx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jx(t,e,n,i){if(e===null||typeof e>"u"||Wx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,Id);Bt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,Id);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,Id);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jx(e,n,r,i)&&(n=null),i||r===null?Vx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ag=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),Ud=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),ih=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,dc;function oo(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function Xx(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case yu:return"Profiler";case Dd:return"StrictMode";case Su:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ag:return(t.displayName||"Context")+".Consumer";case og:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ud:return e=t.displayName||null,e!==null?e:Eu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Eu(t(e))}catch{}}return null}function $x(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qx(t){var e=cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=qx(t))}function ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dg(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function Tu(t,e){dg(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ao(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function fg(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,pg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yx=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){Yx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Zx=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(Zx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Iu=null,_s=null,ys=null;function lh(t){if(t=Wo(t)){if(typeof Iu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Vl(e),Iu(t.stateNode,t.type,e))}}function vg(t){_s?ys?ys.push(t):ys=[t]:_s=t}function xg(){if(_s){var t=_s,e=ys;if(ys=_s=null,lh(t),e)for(t=0;t<e.length;t++)lh(e[t])}}function _g(t,e){return t(e)}function yg(){}var pc=!1;function Sg(t,e,n){if(pc)return t(e,n);pc=!0;try{return _g(t,e,n)}finally{pc=!1,(_s!==null||ys!==null)&&(yg(),xg())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var i=Vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Nu=!1;if(Mi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Nu=!1}function Kx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var fo=!1,sl=null,ol=!1,Du=null,Qx={onError:function(t){fo=!0,sl=t}};function Jx(t,e,n,i,r,s,o,a,l){fo=!1,sl=null,Kx.apply(Qx,arguments)}function e_(t,e,n,i,r,s,o,a,l){if(Jx.apply(this,arguments),fo){if(fo){var c=sl;fo=!1,sl=null}else throw Error(ne(198));ol||(ol=!0,Du=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ch(t){if(Or(t)!==t)throw Error(ne(188))}function t_(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ch(r),t;if(s===i)return ch(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Eg(t){return t=t_(t),t!==null?wg(t):null}function wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=Mn.unstable_scheduleCallback,uh=Mn.unstable_cancelCallback,n_=Mn.unstable_shouldYield,i_=Mn.unstable_requestPaint,yt=Mn.unstable_now,r_=Mn.unstable_getCurrentPriorityLevel,Od=Mn.unstable_ImmediatePriority,Ag=Mn.unstable_UserBlockingPriority,al=Mn.unstable_NormalPriority,s_=Mn.unstable_LowPriority,bg=Mn.unstable_IdlePriority,zl=null,si=null;function o_(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:c_,a_=Math.log,l_=Math.LN2;function c_(t){return t>>>=0,t===0?32:31-(a_(t)/l_|0)|0}var aa=64,la=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=lo(a):(s&=o,s!==0&&(i=lo(s)))}else o=n&~r,o!==0?i=lo(o):s!==0&&(i=lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function u_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=u_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function f_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pg,Bd,Lg,Ig,Ng,Uu=!1,ca=[],Gi=null,Vi=null,Wi=null,Ao=new Map,bo=new Map,Ui=[],h_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function p_(t,e,n,i,r){switch(e){case"focusin":return Gi=$s(Gi,t,e,n,i,r),!0;case"dragenter":return Vi=$s(Vi,t,e,n,i,r),!0;case"mouseover":return Wi=$s(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ao.set(s,$s(Ao.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,$s(bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=Sr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Mg(n),e!==null){t.blockedOn=e,Ng(t.priority,function(){Lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lu=i,n.target.dispatchEvent(i),Lu=null}else return e=Wo(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function fh(t,e,n){$a(t)&&n.delete(e)}function m_(){Uu=!1,Gi!==null&&$a(Gi)&&(Gi=null),Vi!==null&&$a(Vi)&&(Vi=null),Wi!==null&&$a(Wi)&&(Wi=null),Ao.forEach(fh),bo.forEach(fh)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,m_)))}function Co(t){function e(r){return qs(r,t)}if(0<ca.length){qs(ca[0],t);for(var n=1;n<ca.length;n++){var i=ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&qs(Gi,t),Vi!==null&&qs(Vi,t),Wi!==null&&qs(Wi,t),Ao.forEach(e),bo.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&Ui.shift()}var Ss=Ai.ReactCurrentBatchConfig,cl=!0;function g_(t,e,n,i){var r=Qe,s=Ss.transition;Ss.transition=null;try{Qe=1,Hd(t,e,n,i)}finally{Qe=r,Ss.transition=s}}function v_(t,e,n,i){var r=Qe,s=Ss.transition;Ss.transition=null;try{Qe=4,Hd(t,e,n,i)}finally{Qe=r,Ss.transition=s}}function Hd(t,e,n,i){if(cl){var r=Fu(t,e,n,i);if(r===null)Tc(t,e,i,ul,n),dh(t,i);else if(p_(r,t,e,n,i))i.stopPropagation();else if(dh(t,i),e&4&&-1<h_.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&Pg(s),s=Fu(t,e,n,i),s===null&&Tc(t,e,i,ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tc(t,e,i,null,n)}}var ul=null;function Fu(t,e,n,i){if(ul=null,t=Fd(i),t=Sr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r_()){case Od:return 1;case Ag:return 4;case al:case s_:return 16;case bg:return 536870912;default:return 16}default:return 16}}var zi=null,Gd=null,qa=null;function Ug(){if(qa)return qa;var t,e=Gd,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return qa=r.slice(t,1<i?1-i:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function hh(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:hh,this.isPropagationStopped=hh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=wn(zs),Vo=gt({},zs,{view:0,detail:0}),x_=wn(Vo),gc,vc,Ys,Bl=gt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(gc=t.screenX-Ys.screenX,vc=t.screenY-Ys.screenY):vc=gc=0,Ys=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),ph=wn(Bl),__=gt({},Bl,{dataTransfer:0}),y_=wn(__),S_=gt({},Vo,{relatedTarget:0}),xc=wn(S_),M_=gt({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=wn(M_),w_=gt({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=wn(w_),A_=gt({},zs,{data:0}),mh=wn(A_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R_[t])?!!e[t]:!1}function Wd(){return P_}var L_=gt({},Vo,{key:function(t){if(t.key){var e=b_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=wn(L_),N_=gt({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=wn(N_),D_=gt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),k_=wn(D_),U_=gt({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),F_=wn(U_),O_=gt({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z_=wn(O_),B_=[9,13,27,32],jd=Mi&&"CompositionEvent"in window,ho=null;Mi&&"documentMode"in document&&(ho=document.documentMode);var H_=Mi&&"TextEvent"in window&&!ho,Fg=Mi&&(!jd||ho&&8<ho&&11>=ho),vh=" ",xh=!1;function Og(t,e){switch(t){case"keyup":return B_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function G_(t,e){switch(t){case"compositionend":return zg(e);case"keypress":return e.which!==32?null:(xh=!0,vh);case"textInput":return t=e.data,t===vh&&xh?null:t;default:return null}}function V_(t,e){if(ss)return t==="compositionend"||!jd&&Og(t,e)?(t=Ug(),qa=Gd=zi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fg&&e.locale!=="ko"?null:e.data;default:return null}}var W_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W_[t.type]:e==="textarea"}function Bg(t,e,n,i){vg(i),e=dl(e,"onChange"),0<e.length&&(n=new Vd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var po=null,Ro=null;function j_(t){Kg(t,0)}function Hl(t){var e=ls(t);if(ug(e))return t}function X_(t,e){if(t==="change")return e}var Hg=!1;if(Mi){var _c;if(Mi){var yc="oninput"in document;if(!yc){var yh=document.createElement("div");yh.setAttribute("oninput","return;"),yc=typeof yh.oninput=="function"}_c=yc}else _c=!1;Hg=_c&&(!document.documentMode||9<document.documentMode)}function Sh(){po&&(po.detachEvent("onpropertychange",Gg),Ro=po=null)}function Gg(t){if(t.propertyName==="value"&&Hl(Ro)){var e=[];Bg(e,Ro,t,Fd(t)),Sg(j_,e)}}function $_(t,e,n){t==="focusin"?(Sh(),po=e,Ro=n,po.attachEvent("onpropertychange",Gg)):t==="focusout"&&Sh()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ro)}function Y_(t,e){if(t==="click")return Hl(e)}function Z_(t,e){if(t==="input"||t==="change")return Hl(e)}function K_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:K_;function Po(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_u.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eh(t,e){var n=Mh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function Vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wg(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q_(t){var e=Wg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(i!==null&&Xd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Eh(n,s);var o=Eh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J_=Mi&&"documentMode"in document&&11>=document.documentMode,os=null,Ou=null,mo=null,zu=!1;function wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||os==null||os!==rl(i)||(i=os,"selectionStart"in i&&Xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mo&&Po(mo,i)||(mo=i,i=dl(Ou,"onSelect"),0<i.length&&(e=new Vd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Sc={},jg={};Mi&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Gl(t){if(Sc[t])return Sc[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return Sc[t]=e[n];return t}var Xg=Gl("animationend"),$g=Gl("animationiteration"),qg=Gl("animationstart"),Yg=Gl("transitionend"),Zg=new Map,Th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Zg.set(t,e),Fr(e,[t])}for(var Mc=0;Mc<Th.length;Mc++){var Ec=Th[Mc],ey=Ec.toLowerCase(),ty=Ec[0].toUpperCase()+Ec.slice(1);ir(ey,"on"+ty)}ir(Xg,"onAnimationEnd");ir($g,"onAnimationIteration");ir(qg,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Yg,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Ah(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,e_(i,e,void 0,t),t.currentTarget=null}function Kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ah(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ah(r,a,c),s=l}}}if(ol)throw t=Du,ol=!1,Du=null,t}function ot(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(Qg(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),Qg(n,t,i,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[fa]){t[fa]=!0,sg.forEach(function(n){n!=="selectionchange"&&(ny.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,wc("selectionchange",!1,e))}}function Qg(t,e,n,i){switch(kg(e)){case 1:var r=g_;break;case 4:r=v_;break;default:r=Hd}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Sg(function(){var c=s,d=Fd(n),f=[];e:{var h=Zg.get(t);if(h!==void 0){var g=Vd,_=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":g=I_;break;case"focusin":_="focus",g=xc;break;case"focusout":_="blur",g=xc;break;case"beforeblur":case"afterblur":g=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=k_;break;case Xg:case $g:case qg:g=E_;break;case Yg:g=F_;break;case"scroll":g=x_;break;case"wheel":g=z_;break;case"copy":case"cut":case"paste":g=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=gh}var M=(e&4)!==0,m=!M&&t==="scroll",u=M?h!==null?h+"Capture":null:h;M=[];for(var x=c,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=To(x,u),S!=null&&M.push(Io(x,S,v)))),m)break;x=x.return}0<M.length&&(h=new g(h,_,null,n,d),f.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Lu&&(_=n.relatedTarget||n.fromElement)&&(Sr(_)||_[Ei]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?Sr(_):null,_!==null&&(m=Or(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(M=ph,S="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=gh,S="onPointerLeave",u="onPointerEnter",x="pointer"),m=g==null?h:ls(g),v=_==null?h:ls(_),h=new M(S,x+"leave",g,n,d),h.target=m,h.relatedTarget=v,S=null,Sr(d)===c&&(M=new M(u,x+"enter",_,n,d),M.target=v,M.relatedTarget=m,S=M),m=S,g&&_)t:{for(M=g,u=_,x=0,v=M;v;v=Br(v))x++;for(v=0,S=u;S;S=Br(S))v++;for(;0<x-v;)M=Br(M),x--;for(;0<v-x;)u=Br(u),v--;for(;x--;){if(M===u||u!==null&&M===u.alternate)break t;M=Br(M),u=Br(u)}M=null}else M=null;g!==null&&bh(f,h,g,M,!1),_!==null&&m!==null&&bh(f,m,_,M,!0)}}e:{if(h=c?ls(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var A=X_;else if(_h(h))if(Hg)A=Z_;else{A=q_;var w=$_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=Y_);if(A&&(A=A(t,c))){Bg(f,A,n,d);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Au(h,"number",h.value)}switch(w=c?ls(c):window,t){case"focusin":(_h(w)||w.contentEditable==="true")&&(os=w,Ou=c,mo=null);break;case"focusout":mo=Ou=os=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,wh(f,n,d);break;case"selectionchange":if(J_)break;case"keydown":case"keyup":wh(f,n,d)}var T;if(jd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ss?Og(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Fg&&n.locale!=="ko"&&(ss||I!=="onCompositionStart"?I==="onCompositionEnd"&&ss&&(T=Ug()):(zi=d,Gd="value"in zi?zi.value:zi.textContent,ss=!0)),w=dl(c,I),0<w.length&&(I=new mh(I,t,null,n,d),f.push({event:I,listeners:w}),T?I.data=T:(T=zg(n),T!==null&&(I.data=T)))),(T=H_?G_(t,n):V_(t,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(d=new mh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}Kg(f,e)})}function Io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=To(t,n),s!=null&&i.unshift(Io(t,s,r)),s=To(t,e),s!=null&&i.push(Io(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=To(n,s),l!=null&&o.unshift(Io(n,l,a))):r||(l=To(n,s),l!=null&&o.push(Io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iy=/\r\n?/g,ry=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace(iy,`
`).replace(ry,"")}function ha(t,e,n){if(e=Ch(e),Ch(t)!==e&&n)throw Error(ne(425))}function fl(){}var Bu=null,Hu=null;function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,oy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(t){return Rh.resolve(null).then(t).catch(ay)}:Vu;function ay(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Co(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),ti="__reactFiber$"+Bs,No="__reactProps$"+Bs,Ei="__reactContainer$"+Bs,Wu="__reactEvents$"+Bs,ly="__reactListeners$"+Bs,cy="__reactHandles$"+Bs;function Sr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ph(t);t!==null;){if(n=t[ti])return n;t=Ph(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[ti]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Vl(t){return t[No]||null}var ju=[],cs=-1;function rr(t){return{current:t}}function lt(t){0>cs||(t.current=ju[cs],ju[cs]=null,cs--)}function it(t,e){cs++,ju[cs]=t.current,t.current=e}var er={},qt=rr(er),cn=rr(!1),Rr=er;function bs(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function hl(){lt(cn),lt(qt)}function Lh(t,e,n){if(qt.current!==er)throw Error(ne(168));it(qt,e),it(cn,n)}function Jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,$x(t)||"Unknown",r));return gt({},n,i)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Rr=qt.current,it(qt,t),it(cn,cn.current),!0}function Ih(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Jg(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,lt(cn),lt(qt),it(qt,t)):lt(cn),it(cn,n)}var gi=null,Wl=!1,bc=!1;function e0(t){gi===null?gi=[t]:gi.push(t)}function uy(t){Wl=!0,e0(t)}function sr(){if(!bc&&gi!==null){bc=!0;var t=0,e=Qe;try{var n=gi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Wl=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Tg(Od,sr),r}finally{Qe=e,bc=!1}}return null}var us=[],ds=0,ml=null,gl=0,Rn=[],Pn=0,Pr=null,xi=1,_i="";function mr(t,e){us[ds++]=gl,us[ds++]=ml,ml=t,gl=e}function t0(t,e,n){Rn[Pn++]=xi,Rn[Pn++]=_i,Rn[Pn++]=Pr,Pr=t;var i=xi;t=_i;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-$n(e)+r|n<<r|i,_i=s+t}else xi=1<<s|n<<r|i,_i=t}function $d(t){t.return!==null&&(mr(t,1),t0(t,1,0))}function qd(t){for(;t===ml;)ml=us[--ds],us[ds]=null,gl=us[--ds],us[ds]=null;for(;t===Pr;)Pr=Rn[--Pn],Rn[Pn]=null,_i=Rn[--Pn],Rn[Pn]=null,xi=Rn[--Pn],Rn[Pn]=null}var Sn=null,yn=null,dt=!1,Gn=null;function n0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:xi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $u(t){if(dt){var e=yn;if(e){var n=e;if(!Nh(t,e)){if(Xu(t))throw Error(ne(418));e=ji(n.nextSibling);var i=Sn;e&&Nh(t,e)?n0(i,n):(t.flags=t.flags&-4097|2,dt=!1,Sn=t)}}else{if(Xu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,Sn=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function pa(t){if(t!==Sn)return!1;if(!dt)return Dh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gu(t.type,t.memoizedProps)),e&&(e=yn)){if(Xu(t))throw i0(),Error(ne(418));for(;e;)n0(t,e),e=ji(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?ji(t.stateNode.nextSibling):null;return!0}function i0(){for(var t=yn;t;)t=ji(t.nextSibling)}function Cs(){yn=Sn=null,dt=!1}function Yd(t){Gn===null?Gn=[t]:Gn.push(t)}var dy=Ai.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kh(t){var e=t._init;return e(t._payload)}function r0(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Yi(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,x,v,S){return x===null||x.tag!==6?(x=Dc(v,u.mode,S),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,S){var A=v.type;return A===rs?d(u,x,v.props.children,S,v.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Di&&kh(A)===x.type)?(S=r(x,v.props),S.ref=Zs(u,x,v),S.return=u,S):(S=nl(v.type,v.key,v.props,null,u.mode,S),S.ref=Zs(u,x,v),S.return=u,S)}function c(u,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=kc(v,u.mode,S),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function d(u,x,v,S,A){return x===null||x.tag!==7?(x=Ar(v,u.mode,S,A),x.return=u,x):(x=r(x,v),x.return=u,x)}function f(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Dc(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ra:return v=nl(x.type,x.key,x.props,null,u.mode,v),v.ref=Zs(u,null,x),v.return=u,v;case is:return x=kc(x,u.mode,v),x.return=u,x;case Di:var S=x._init;return f(u,S(x._payload),v)}if(ao(x)||js(x))return x=Ar(x,u.mode,v,null),x.return=u,x;ma(u,x)}return null}function h(u,x,v,S){var A=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(u,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ra:return v.key===A?l(u,x,v,S):null;case is:return v.key===A?c(u,x,v,S):null;case Di:return A=v._init,h(u,x,A(v._payload),S)}if(ao(v)||js(v))return A!==null?null:d(u,x,v,S,null);ma(u,v)}return null}function g(u,x,v,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(x,u,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ra:return u=u.get(S.key===null?v:S.key)||null,l(x,u,S,A);case is:return u=u.get(S.key===null?v:S.key)||null,c(x,u,S,A);case Di:var w=S._init;return g(u,x,v,w(S._payload),A)}if(ao(S)||js(S))return u=u.get(v)||null,d(x,u,S,A,null);ma(x,S)}return null}function _(u,x,v,S){for(var A=null,w=null,T=x,I=x=0,O=null;T!==null&&I<v.length;I++){T.index>I?(O=T,T=null):O=T.sibling;var y=h(u,T,v[I],S);if(y===null){T===null&&(T=O);break}t&&T&&y.alternate===null&&e(u,T),x=s(y,x,I),w===null?A=y:w.sibling=y,w=y,T=O}if(I===v.length)return n(u,T),dt&&mr(u,I),A;if(T===null){for(;I<v.length;I++)T=f(u,v[I],S),T!==null&&(x=s(T,x,I),w===null?A=T:w.sibling=T,w=T);return dt&&mr(u,I),A}for(T=i(u,T);I<v.length;I++)O=g(T,u,I,v[I],S),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?I:O.key),x=s(O,x,I),w===null?A=O:w.sibling=O,w=O);return t&&T.forEach(function(C){return e(u,C)}),dt&&mr(u,I),A}function M(u,x,v,S){var A=js(v);if(typeof A!="function")throw Error(ne(150));if(v=A.call(v),v==null)throw Error(ne(151));for(var w=A=null,T=x,I=x=0,O=null,y=v.next();T!==null&&!y.done;I++,y=v.next()){T.index>I?(O=T,T=null):O=T.sibling;var C=h(u,T,y.value,S);if(C===null){T===null&&(T=O);break}t&&T&&C.alternate===null&&e(u,T),x=s(C,x,I),w===null?A=C:w.sibling=C,w=C,T=O}if(y.done)return n(u,T),dt&&mr(u,I),A;if(T===null){for(;!y.done;I++,y=v.next())y=f(u,y.value,S),y!==null&&(x=s(y,x,I),w===null?A=y:w.sibling=y,w=y);return dt&&mr(u,I),A}for(T=i(u,T);!y.done;I++,y=v.next())y=g(T,u,I,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?I:y.key),x=s(y,x,I),w===null?A=y:w.sibling=y,w=y);return t&&T.forEach(function(Q){return e(u,Q)}),dt&&mr(u,I),A}function m(u,x,v,S){if(typeof v=="object"&&v!==null&&v.type===rs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ra:e:{for(var A=v.key,w=x;w!==null;){if(w.key===A){if(A=v.type,A===rs){if(w.tag===7){n(u,w.sibling),x=r(w,v.props.children),x.return=u,u=x;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Di&&kh(A)===w.type){n(u,w.sibling),x=r(w,v.props),x.ref=Zs(u,w,v),x.return=u,u=x;break e}n(u,w);break}else e(u,w);w=w.sibling}v.type===rs?(x=Ar(v.props.children,u.mode,S,v.key),x.return=u,u=x):(S=nl(v.type,v.key,v.props,null,u.mode,S),S.ref=Zs(u,x,v),S.return=u,u=S)}return o(u);case is:e:{for(w=v.key;x!==null;){if(x.key===w)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=kc(v,u.mode,S),x.return=u,u=x}return o(u);case Di:return w=v._init,m(u,x,w(v._payload),S)}if(ao(v))return _(u,x,v,S);if(js(v))return M(u,x,v,S);ma(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=Dc(v,u.mode,S),x.return=u,u=x),o(u)):n(u,x)}return m}var Rs=r0(!0),s0=r0(!1),vl=rr(null),xl=null,fs=null,Zd=null;function Kd(){Zd=fs=xl=null}function Qd(t){var e=vl.current;lt(vl),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){xl=t,Zd=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(Zd!==t)if(t={context:t,memoizedValue:e,next:null},fs===null){if(xl===null)throw Error(ne(308));fs=t,xl.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return e}var Mr=null;function Jd(t){Mr===null?Mr=[t]:Mr.push(t)}function o0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jd(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Jd(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}function Uh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,M=a;switch(h=e,g=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=gt({},f,h);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=f}}function Fh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var jo={},oi=rr(jo),Do=rr(jo),ko=rr(jo);function Er(t){if(t===jo)throw Error(ne(174));return t}function tf(t,e){switch(it(ko,e),it(Do,t),it(oi,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}lt(oi),it(oi,e)}function Ps(){lt(oi),lt(Do),lt(ko)}function l0(t){Er(ko.current);var e=Er(oi.current),n=Cu(e,t.type);e!==n&&(it(Do,t),it(oi,n))}function nf(t){Do.current===t&&(lt(oi),lt(Do))}var ht=rr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function rf(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Ka=Ai.ReactCurrentDispatcher,Rc=Ai.ReactCurrentBatchConfig,Lr=0,pt=null,Tt=null,Lt=null,Sl=!1,go=!1,Uo=0,fy=0;function Gt(){throw Error(ne(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function of(t,e,n,i,r,s){if(Lr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?gy:vy,t=n(i,r),go){s=0;do{if(go=!1,Uo=0,25<=s)throw Error(ne(301));s+=1,Lt=Tt=null,e.updateQueue=null,Ka.current=xy,t=n(i,r)}while(go)}if(Ka.current=Ml,e=Tt!==null&&Tt.next!==null,Lr=0,Lt=Tt=pt=null,Sl=!1,e)throw Error(ne(300));return t}function af(){var t=Uo!==0;return Uo=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?pt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function kn(){if(Tt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?pt.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(ne(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?pt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Fo(t,e){return typeof e=="function"?e(t):e}function Pc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Lr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=d,Ir|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function c0(){}function u0(t,e){var n=pt,i=kn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,lf(h0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Oo(9,f0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ne(349));Lr&30||d0(n,e,r)}return r}function d0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f0(t,e,n,i){e.value=n,e.getSnapshot=i,p0(e)&&m0(t)}function h0(t,e,n){return n(function(){p0(e)&&m0(t)})}function p0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function m0(t){var e=wi(t,1);e!==null&&qn(e,t,1,-1)}function Oh(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=my.bind(null,pt,t),[e.memoizedState,t]}function Oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function g0(){return kn().memoizedState}function Qa(t,e,n,i){var r=Qn();pt.flags|=t,r.memoizedState=Oo(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&sf(i,o.deps)){r.memoizedState=Oo(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Oo(1|e,n,s,i)}function zh(t,e){return Qa(8390656,8,t,e)}function lf(t,e){return jl(2048,8,t,e)}function v0(t,e){return jl(4,2,t,e)}function x0(t,e){return jl(4,4,t,e)}function _0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,_0.bind(null,e,t),n)}function cf(){}function S0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return Lr&21?(Yn(n,e)||(n=Cg(),pt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function hy(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{Qe=n,Rc.transition=i}}function w0(){return kn().memoizedState}function py(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},T0(t))A0(e,n);else if(n=o0(t,e,n,i),n!==null){var r=en();qn(n,t,i,r),b0(n,e,i)}}function my(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(T0(t))A0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Jd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=o0(t,e,r,i),n!==null&&(r=en(),qn(n,t,i,r),b0(n,e,i))}}function T0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function A0(t,e){go=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function b0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,zd(t,n)}}var Ml={readContext:Dn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},gy={readContext:Dn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,_0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=py.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:cf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=hy.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Qn();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),kt===null)throw Error(ne(349));Lr&30||d0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zh(h0.bind(null,i,s,t),[t]),i.flags|=2048,Oo(9,f0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=kt.identifierPrefix;if(dt){var n=_i,i=xi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vy={readContext:Dn,useCallback:S0,useContext:Dn,useEffect:lf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:M0,useReducer:Pc,useRef:g0,useState:function(){return Pc(Fo)},useDebugValue:cf,useDeferredValue:function(t){var e=kn();return E0(e,Tt.memoizedState,t)},useTransition:function(){var t=Pc(Fo)[0],e=kn().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:w0,unstable_isNewReconciler:!1},xy={readContext:Dn,useCallback:S0,useContext:Dn,useEffect:lf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:x0,useMemo:M0,useReducer:Lc,useRef:g0,useState:function(){return Lc(Fo)},useDebugValue:cf,useDeferredValue:function(t){var e=kn();return Tt===null?e.memoizedState=t:E0(e,Tt.memoizedState,t)},useTransition:function(){var t=Lc(Fo)[0],e=kn().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:w0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=qi(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(qn(e,t,r,i),Za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=qi(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(qn(e,t,r,i),Za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=qi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(qn(e,t,i,n),Za(e,t,i))}};function Bh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,i)||!Po(r,s):!0}function C0(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=un(e)?Rr:qt.current,i=e.contextTypes,s=(i=i!=null)?bs(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ef(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=un(e)?Rr:qt.current,r.context=bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=Xx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function R0(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){wl||(wl=!0,ad=i),Ku(t,e)},n}function P0(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ny.bind(null,t,e,n),e.then(t,t))}function Vh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var yy=Ai.ReactCurrentOwner,ln=!1;function Kt(t,e,n,i){e.child=t===null?s0(e,null,n,i):Rs(e,t.child,n,i)}function jh(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=of(t,e,n,i,s,r),n=af(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&n&&$d(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Xh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L0(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function L0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Po(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return Qu(t,e,n,i,r)}function I0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ps,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ps,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ps,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ps,vn),vn|=i;return Kt(t,e,r,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qu(t,e,n,i,r){var s=un(n)?Rr:qt.current;return s=bs(e,s),Ms(e,r),n=of(t,e,n,i,s,r),i=af(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&i&&$d(e),e.flags|=1,Kt(t,e,n,r),e.child)}function $h(t,e,n,i,r){if(un(n)){var s=!0;pl(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Ja(t,e),C0(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=un(n)?Rr:qt.current,c=bs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Hh(e,o,i,c),ki=!1;var h=e.memoizedState;o.state=h,_l(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||ki?(typeof d=="function"&&(Yu(e,n,d,i),l=e.memoizedState),(a=ki||Bh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,a0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=un(n)?Rr:qt.current,l=bs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Hh(e,o,i,l),ki=!1,h=e.memoizedState,o.state=h,_l(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||cn.current||ki?(typeof g=="function"&&(Yu(e,n,g,i),_=e.memoizedState),(c=ki||Bh(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ju(t,e,n,i,s,r)}function Ju(t,e,n,i,r,s){N0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ih(e,n,!1),Ti(t,e,s);i=e.stateNode,yy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Ih(e,n,!0),e.child}function D0(t){var e=t.stateNode;e.pendingContext?Lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lh(t,e.context,!1),tf(t,e.containerInfo)}function qh(t,e,n,i,r){return Cs(),Yd(r),e.flags|=256,Kt(t,e,n,i),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ht,r&1),t===null)return $u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yl(o,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):uf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Sy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function uf(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,i){return i!==null&&Yd(i),Rs(e,t.child,null,n),t=uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ic(Error(ne(422))),ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Ic(s,i,void 0),ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(t,r),qn(i,t,r,-1))}return gf(),i=Ic(Error(ne(421))),ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Dy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=ji(r.nextSibling),Sn=e,dt=!0,Gn=null,t!==null&&(Rn[Pn++]=xi,Rn[Pn++]=_i,Rn[Pn++]=Pr,xi=t.id,_i=t.overflow,Pr=e),e=uf(e,i.children),e.flags|=4096,e)}function Yh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qu(t.return,e,n)}function Nc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function U0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,n,e);else if(t.tag===19)Yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nc(e,!0,n,null,s);break;case"together":Nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function My(t,e,n){switch(e.tag){case 3:D0(e),Cs();break;case 5:l0(e);break;case 1:un(e.type)&&pl(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(it(ht,ht.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);it(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return U0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,I0(t,e,n)}return Ti(t,e,n)}var F0,nd,O0,z0;F0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};O0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(oi.current);var s=null;switch(n){case"input":r=wu(t,r),i=wu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fl)}Ru(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};z0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ey(t,e,n){var i=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&hl(),Vt(e),null;case 3:return i=e.stateNode,Ps(),lt(cn),lt(qt),rf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(ud(Gn),Gn=null))),nd(t,e),Vt(e),null;case 5:nf(e);var r=Er(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)O0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Vt(e),null}if(t=Er(oi.current),pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[No]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)ot(co[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":rh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":oh(i,s),ot("invalid",i)}Ru(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ha(i.textContent,a,t),r=["children",""+a]):Eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":sa(i),sh(i,s,!0);break;case"textarea":sa(i),ah(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[No]=i,F0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)ot(co[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":rh(t,i),r=wu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":oh(t,i),r=bu(t,i),ot("invalid",t);break;default:r=i}Ru(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wo(t,l):typeof l=="number"&&wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Nd(t,s,l,o))}switch(n){case"input":sa(t),sh(t,i,!1);break;case"textarea":sa(t),ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Er(ko.current),Er(oi.current),pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Vt(e),null;case 13:if(lt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&yn!==null&&e.mode&1&&!(e.flags&128))i0(),Cs(),e.flags|=98560,s=!1;else if(s=pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ti]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Gn!==null&&(ud(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?At===0&&(At=3):gf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ps(),nd(t,e),t===null&&Lo(e.stateNode.containerInfo),Vt(e),null;case 10:return Qd(e.type._context),Vt(e),null;case 17:return un(e.type)&&hl(),Vt(e),null;case 19:if(lt(ht),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ks(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,Ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Is&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Vt(e),null}else 2*yt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,it(ht,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return mf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function wy(t,e){switch(qd(e),e.tag){case 1:return un(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ps(),lt(cn),lt(qt),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(lt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ht),null;case 4:return Ps(),null;case 10:return Qd(e.type._context),null;case 22:case 23:return mf(),null;case 24:return null;default:return null}}var va=!1,Xt=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,ge=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function id(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Zh=!1;function Ay(t,e){if(Bu=cl,t=Wg(),Xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},cl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,m=_.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Bn(e.type,M),m);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Zh,Zh=!1,_}function vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&id(e,n,s)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[No],delete e[Wu],delete e[ly],delete e[cy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H0(t){return t.tag===5||t.tag===3||t.tag===4}function Kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fl));else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var Ft=null,Hn=!1;function bi(t,e,n){for(n=n.child;n!==null;)G0(t,e,n),n=n.sibling}function G0(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Xt||hs(n,e);case 6:var i=Ft,r=Hn;Ft=null,bi(t,e,n),Ft=i,Hn=r,Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),Co(t)):Ac(Ft,n.stateNode));break;case 4:i=Ft,r=Hn,Ft=n.stateNode.containerInfo,Hn=!0,bi(t,e,n),Ft=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&id(n,e,o),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Xt&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,bi(t,e,n),Xt=i):bi(t,e,n);break;default:bi(t,e,n)}}function Qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ty),e.forEach(function(i){var r=ky.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Hn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ft===null)throw Error(ne(160));G0(s,o,r),Ft=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V0(e,t),e=e.sibling}function V0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Kn(t),i&4){try{vo(3,t,t.return),$l(3,t)}catch(M){vt(t,t.return,M)}try{vo(5,t,t.return)}catch(M){vt(t,t.return,M)}}break;case 1:Un(e,t),Kn(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Un(e,t),Kn(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{wo(r,"")}catch(M){vt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dg(r,s),Pu(a,o);var c=Pu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?gg(r,f):d==="dangerouslySetInnerHTML"?pg(r,f):d==="children"?wo(r,f):Nd(r,d,f,c)}switch(a){case"input":Tu(r,s);break;case"textarea":fg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?xs(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[No]=s}catch(M){vt(t,t.return,M)}}break;case 6:if(Un(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){vt(t,t.return,M)}}break;case 3:if(Un(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(M){vt(t,t.return,M)}break;case 4:Un(e,t),Kn(t);break;case 13:Un(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hf=yt())),i&4&&Qh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||d,Un(e,t),Xt=c):Un(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,g=h.child,h.tag){case 0:case 11:case 14:case 15:vo(4,h,h.return);break;case 1:hs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){vt(i,n,M)}}break;case 5:hs(h,h.return);break;case 22:if(h.memoizedState!==null){ep(f);continue}}g!==null?(g.return=h,ge=g):ep(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mg("display",o))}catch(M){vt(t,t.return,M)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){vt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Kn(t),i&4&&Qh(t);break;case 21:break;default:Un(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wo(r,""),i.flags&=-33);var s=Kh(t);od(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kh(t);sd(t,a,o);break;default:throw Error(ne(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function by(t,e,n){ge=t,W0(t)}function W0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=va;var c=Xt;if(va=o,(Xt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?tp(r):l!==null?(l.return=o,ge=l):tp(r);for(;s!==null;)ge=s,W0(s),s=s.sibling;ge=r,va=a,Xt=c}Jh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Jh(t)}}function Jh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Xt||e.flags&512&&rd(e)}catch(h){vt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ep(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function tp(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{rd(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{rd(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var Cy=Math.ceil,El=Ai.ReactCurrentDispatcher,df=Ai.ReactCurrentOwner,In=Ai.ReactCurrentBatchConfig,qe=0,kt=null,Et=null,Ot=0,vn=0,ps=rr(0),At=0,zo=null,Ir=0,ql=0,ff=0,xo=null,on=null,hf=0,Is=1/0,mi=null,wl=!1,ad=null,$i=null,xa=!1,Bi=null,Tl=0,_o=0,ld=null,el=-1,tl=0;function en(){return qe&6?yt():el!==-1?el:el=yt()}function qi(t){return t.mode&1?qe&2&&Ot!==0?Ot&-Ot:dy.transition!==null?(tl===0&&(tl=Cg()),tl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function qn(t,e,n,i){if(50<_o)throw _o=0,ld=null,Error(ne(185));Go(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(ql|=n),At===4&&Fi(t,Ot)),dn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Is=yt()+500,Wl&&sr()))}function dn(t,e){var n=t.callbackNode;d_(t,e);var i=ll(t,t===kt?Ot:0);if(i===0)n!==null&&uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&uh(n),e===1)t.tag===0?uy(np.bind(null,t)):e0(np.bind(null,t)),oy(function(){!(qe&6)&&sr()}),n=null;else{switch(Rg(i)){case 1:n=Od;break;case 4:n=Ag;break;case 16:n=al;break;case 536870912:n=bg;break;default:n=al}n=Q0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(el=-1,tl=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=ll(t,t===kt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=qe;qe|=2;var s=$0();(kt!==t||Ot!==e)&&(mi=null,Is=yt()+500,Tr(t,e));do try{Ly();break}catch(a){X0(t,a)}while(!0);Kd(),El.current=s,qe=r,Et!==null?e=0:(kt=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=cd(t,r))),e===1)throw n=zo,Tr(t,0),Fi(t,i),dn(t,yt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ry(r)&&(e=Al(t,i),e===2&&(s=ku(t),s!==0&&(i=s,e=cd(t,s))),e===1))throw n=zo,Tr(t,0),Fi(t,i),dn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:gr(t,on,mi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=hf+500-yt(),10<e)){if(ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vu(gr.bind(null,t,on,mi),e);break}gr(t,on,mi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cy(i/1960))-i,10<i){t.timeoutHandle=Vu(gr.bind(null,t,on,mi),i);break}gr(t,on,mi);break;case 5:gr(t,on,mi);break;default:throw Error(ne(329))}}}return dn(t,yt()),t.callbackNode===n?j0.bind(null,t):null}function cd(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=on,on=n,e!==null&&ud(e)),t}function ud(t){on===null?on=t:on.push.apply(on,t)}function Ry(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~ff,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function np(t){if(qe&6)throw Error(ne(327));Es();var e=ll(t,0);if(!(e&1))return dn(t,yt()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=cd(t,i))}if(n===1)throw n=zo,Tr(t,0),Fi(t,e),dn(t,yt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,on,mi),dn(t,yt()),null}function pf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Is=yt()+500,Wl&&sr())}}function Nr(t){Bi!==null&&Bi.tag===0&&!(qe&6)&&Es();var e=qe;qe|=1;var n=In.transition,i=Qe;try{if(In.transition=null,Qe=1,t)return t()}finally{Qe=i,In.transition=n,qe=e,!(qe&6)&&sr()}}function mf(){vn=ps.current,lt(ps)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sy(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hl();break;case 3:Ps(),lt(cn),lt(qt),rf();break;case 5:nf(i);break;case 4:Ps();break;case 13:lt(ht);break;case 19:lt(ht);break;case 10:Qd(i.type._context);break;case 22:case 23:mf()}n=n.return}if(kt=t,Et=t=Yi(t.current,null),Ot=vn=e,At=0,zo=null,ff=ql=Ir=0,on=xo=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function X0(t,e){do{var n=Et;try{if(Kd(),Ka.current=Ml,Sl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sl=!1}if(Lr=0,Lt=Tt=pt=null,go=!1,Uo=0,df.current=null,n===null||n.return===null){At=1,zo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Vh(o);if(g!==null){g.flags&=-257,Wh(g,o,a,s,e),g.mode&1&&Gh(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){Gh(s,c,e),gf();break e}l=Error(ne(426))}}else if(dt&&a.mode&1){var m=Vh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Wh(m,o,a,s,e),Yd(Ls(l,a));break e}}s=l=Ls(l,a),At!==4&&(At=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=R0(s,l,e);Uh(s,u);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($i===null||!$i.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=P0(s,a,e);Uh(s,S);break e}}s=s.return}while(s!==null)}Y0(n)}catch(A){e=A,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function $0(){var t=El.current;return El.current=Ml,t===null?Ml:t}function gf(){(At===0||At===3||At===2)&&(At=4),kt===null||!(Ir&268435455)&&!(ql&268435455)||Fi(kt,Ot)}function Al(t,e){var n=qe;qe|=2;var i=$0();(kt!==t||Ot!==e)&&(mi=null,Tr(t,e));do try{Py();break}catch(r){X0(t,r)}while(!0);if(Kd(),qe=n,El.current=i,Et!==null)throw Error(ne(261));return kt=null,Ot=0,At}function Py(){for(;Et!==null;)q0(Et)}function Ly(){for(;Et!==null&&!n_();)q0(Et)}function q0(t){var e=K0(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Y0(t):Et=e,df.current=null}function Y0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=Ey(n,e,vn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function gr(t,e,n){var i=Qe,r=In.transition;try{In.transition=null,Qe=1,Iy(t,e,n,i)}finally{In.transition=r,Qe=i}return null}function Iy(t,e,n,i){do Es();while(Bi!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f_(t,s),t===kt&&(Et=kt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,Q0(al,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=Qe;Qe=1;var a=qe;qe|=4,df.current=null,Ay(t,n),V0(n,t),Q_(Hu),cl=!!Bu,Hu=Bu=null,t.current=n,by(n),i_(),qe=a,Qe=o,In.transition=s}else t.current=n;if(xa&&(xa=!1,Bi=t,Tl=r),s=t.pendingLanes,s===0&&($i=null),o_(n.stateNode),dn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(wl)throw wl=!1,t=ad,ad=null,t;return Tl&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===ld?_o++:(_o=0,ld=t):_o=0,sr(),null}function Es(){if(Bi!==null){var t=Rg(Tl),e=In.transition,n=Qe;try{if(In.transition=null,Qe=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,Tl=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:vo(8,d,s)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,g=d.return;if(B0(d),d===c){ge=null;break}if(h!==null){h.return=g,ge=h;break}ge=g}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var x=t.current;for(ge=x;ge!==null;){o=ge;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ge=v;else e:for(o=x;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$l(9,a)}}catch(A){vt(a,a.return,A)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(qe=r,sr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{Qe=n,In.transition=e}}return!1}function ip(t,e,n){e=Ls(n,e),e=R0(t,e,1),t=Xi(t,e,1),e=en(),t!==null&&(Go(t,1,e),dn(t,e))}function vt(t,e,n){if(t.tag===3)ip(t,t,n);else for(;e!==null;){if(e.tag===3){ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=Ls(n,t),t=P0(e,t,1),e=Xi(e,t,1),t=en(),e!==null&&(Go(e,1,t),dn(e,t));break}}e=e.return}}function Ny(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>yt()-hf?Tr(t,0):ff|=n),dn(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=en();t=wi(t,e),t!==null&&(Go(t,e,n),dn(t,n))}function Dy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function ky(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Z0(t,n)}var K0;K0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,My(t,e,n);ln=!!(t.flags&131072)}else ln=!1,dt&&e.flags&1048576&&t0(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ja(t,e),t=e.pendingProps;var r=bs(e,qt.current);Ms(e,n),r=of(null,e,i,t,r,n);var s=af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ef(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=Ju(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&$d(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fy(i),t=Bn(i,t),r){case 0:e=Qu(null,e,i,t,n);break e;case 1:e=$h(null,e,i,t,n);break e;case 11:e=jh(null,e,i,t,n);break e;case 14:e=Xh(null,e,i,Bn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),$h(t,e,i,r,n);case 3:e:{if(D0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,a0(t,e),_l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(ne(423)),e),e=qh(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(ne(424)),e),e=qh(t,e,i,n,r);break e}else for(yn=ji(e.stateNode.containerInfo.firstChild),Sn=e,dt=!0,Gn=null,n=s0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Ti(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return l0(e),t===null&&$u(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Gu(i,r)?o=null:s!==null&&Gu(i,s)&&(e.flags|=32),N0(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&$u(e),null;case 13:return k0(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),jh(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(vl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!cn.current){e=Ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=Dn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Xh(t,e,i,r,n);case 15:return L0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Ja(t,e),e.tag=1,un(i)?(t=!0,pl(e)):t=!1,Ms(e,n),C0(e,i,r),Zu(e,i,r,n),Ju(null,e,i,!0,t,n);case 19:return U0(t,e,n);case 22:return I0(t,e,n)}throw Error(ne(156,e.tag))};function Q0(t,e){return Tg(t,e)}function Uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Uy(t,e,n,i)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fy(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Ud)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ar(n.children,r,s,e);case Dd:o=8,r|=8;break;case yu:return t=Ln(12,n,e,r|2),t.elementType=yu,t.lanes=s,t;case Su:return t=Ln(13,n,e,r),t.elementType=Su,t.lanes=s,t;case Mu:return t=Ln(19,n,e,r),t.elementType=Mu,t.lanes=s,t;case lg:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case og:o=10;break e;case ag:o=9;break e;case kd:o=11;break e;case Ud:o=14;break e;case Di:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=lg,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xf(t,e,n,i,r,s,o,a,l){return t=new Oy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),t}function zy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function J0(t){if(!t)return er;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(un(n))return Jg(t,n,e)}return e}function ev(t,e,n,i,r,s,o,a,l){return t=xf(n,i,!0,t,r,s,o,a,l),t.context=J0(null),n=t.current,i=en(),r=qi(n),s=Si(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,Go(t,r,i),dn(t,i),t}function Zl(t,e,n,i){var r=e.current,s=en(),o=qi(r);return n=J0(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,o),t!==null&&(qn(t,r,o,s),Za(t,r,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _f(t,e){rp(t,e),(t=t.alternate)&&rp(t,e)}function By(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function yf(t){this._internalRoot=t}Kl.prototype.render=yf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Zl(t,e,null,null)};Kl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Zl(null,t,null,null)}),e[Ei]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Dg(t)}};function Sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function Hy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bl(o);s.call(c)}}var o=ev(e,i,t,0,null,!1,!1,"",sp);return t._reactRootContainer=o,t[Ei]=o.current,Lo(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=bl(l);a.call(c)}}var l=xf(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=l,t[Ei]=l.current,Lo(t.nodeType===8?t.parentNode:t),Nr(function(){Zl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=bl(o);a.call(l)}}Zl(e,o,t,r)}else o=Hy(n,e,t,r,i);return bl(o)}Pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(zd(e,n|1),dn(e,yt()),!(qe&6)&&(Is=yt()+500,sr()))}break;case 13:Nr(function(){var i=wi(t,1);if(i!==null){var r=en();qn(i,t,1,r)}}),_f(t,1)}};Bd=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=en();qn(e,t,134217728,n)}_f(t,134217728)}};Lg=function(t){if(t.tag===13){var e=qi(t),n=wi(t,e);if(n!==null){var i=en();qn(n,t,e,i)}_f(t,e)}};Ig=function(){return Qe};Ng=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Iu=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vl(i);if(!r)throw Error(ne(90));ug(i),Tu(i,r)}}}break;case"textarea":fg(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};_g=pf;yg=Nr;var Gy={usingClientEntryPoint:!1,Events:[Wo,ls,Vl,vg,xg,pf]},Qs={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vy={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Eg(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{zl=_a.inject(Vy),si=_a}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sf(e))throw Error(ne(200));return zy(t,e,null,n)};En.createRoot=function(t,e){if(!Sf(t))throw Error(ne(299));var n=!1,i="",r=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xf(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Lo(t.nodeType===8?t.parentNode:t),new yf(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Eg(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Nr(t)};En.hydrate=function(t,e,n){if(!Ql(e))throw Error(ne(200));return Jl(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Sf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ev(e,null,t,1,n??null,r,!1,s,o),t[Ei]=e.current,Lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};En.render=function(t,e,n){if(!Ql(e))throw Error(ne(200));return Jl(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(ne(40));return t._reactRootContainer?(Nr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};En.unstable_batchedUpdates=pf;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Jl(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),ng.exports=En;var Wy=ng.exports,op=Wy;xu.createRoot=op.createRoot,xu.hydrateRoot=op.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ye=(t,e)=>{const n=he.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>he.createElement("svg",{ref:d,...jy,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Xy(t)}`,a].join(" "),...c},[...e.map(([f,h])=>he.createElement(f,h)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=Ye("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=Ye("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=Ye("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Ye("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=Ye("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=Ye("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=Ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=Ye("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=Ye("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=Ye("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Ye("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=Ye("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=Ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=Ye("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=Ye("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=Ye("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Ye("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Ye("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=Ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=Ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=Ye("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=Ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=Ye("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=Ye("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Ye("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=Ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=Ye("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function sS({activeTab:t,setActiveTab:e,user:n,onOpenAuth:i,onLogout:r}){const[s,o]=he.useState(!1),a=(l,c)=>{if(!n){i("login",`Sign in to access ${c}`);return}e(l)};return p.jsx("header",{style:{position:"sticky",top:0,zIndex:100,background:"rgba(255, 255, 255, 0.88)",backdropFilter:"blur(14px)",borderBottom:"1px solid var(--border-subtle)",transition:"all 0.2s ease"},children:p.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"4.25rem"},children:[p.jsxs("div",{onClick:()=>e("home"),style:{display:"flex",alignItems:"center",gap:"0.75rem",cursor:"pointer"},children:[p.jsx("div",{style:{width:"2.5rem",height:"2.5rem",borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-600) 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",boxShadow:"0 4px 10px rgba(14, 56, 43, 0.18)"},children:p.jsx(dd,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.125rem",color:"var(--emerald-950)",lineHeight:1.15,letterSpacing:"-0.02em"},children:"Clean Energy Insights"}),p.jsx("div",{style:{fontSize:"0.75rem",color:"var(--emerald-700)",fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:"Applied AI Intelligence"})]})]}),p.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[p.jsxs("button",{onClick:()=>e("home"),className:`btn btn-ghost ${t==="home"?"active-nav":""}`,style:{fontWeight:600,color:t==="home"?"var(--emerald-800)":"var(--text-body)",backgroundColor:t==="home"?"var(--emerald-50)":"transparent"},children:[p.jsx(dd,{size:16})," Overview"]}),p.jsxs("button",{onClick:()=>a("products","Equipment Catalog"),className:`btn btn-ghost ${t==="products"?"active-nav":""}`,style:{fontWeight:600,color:t==="products"?"var(--emerald-800)":"var(--text-body)",backgroundColor:t==="products"?"var(--emerald-50)":"transparent"},children:[p.jsx(dv,{size:16})," Products",!n&&p.jsx(Xn,{size:12,style:{opacity:.5,marginLeft:"0.15rem"}})]}),p.jsxs("button",{onClick:()=>a("incentives","Incentives Engine"),className:`btn btn-ghost ${t==="incentives"?"active-nav":""}`,style:{fontWeight:600,color:t==="incentives"?"var(--emerald-800)":"var(--text-body)",backgroundColor:t==="incentives"?"var(--emerald-50)":"transparent"},children:[p.jsx($o,{size:16})," Incentives",!n&&p.jsx(Xn,{size:12,style:{opacity:.5,marginLeft:"0.15rem"}})]}),p.jsxs("button",{onClick:()=>a("calculator","ROI Simulator"),className:`btn btn-ghost ${t==="calculator"?"active-nav":""}`,style:{fontWeight:600,color:t==="calculator"?"var(--emerald-800)":"var(--text-body)",backgroundColor:t==="calculator"?"var(--emerald-50)":"transparent"},children:[p.jsx(Ef,{size:16})," ROI Simulator",!n&&p.jsx(Xn,{size:12,style:{opacity:.5,marginLeft:"0.15rem"}})]}),p.jsxs("button",{onClick:()=>a("chat","Gemini 2.5 AI Energy Agent"),className:`btn ${t==="chat"?"btn-primary":"btn-outline-emerald"}`,style:{fontWeight:600,marginLeft:"0.5rem",position:"relative"},children:[p.jsx(cv,{size:16}),p.jsx("span",{children:"AI Energy Agent"}),n?p.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#4ec291",display:"inline-block",boxShadow:"0 0 6px #4ec291"}}):p.jsx(Xn,{size:13,style:{opacity:.7}})]})]}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",position:"relative"},children:n?p.jsxs("div",{style:{position:"relative"},children:[p.jsxs("button",{onClick:()=>o(!s),style:{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.375rem 0.75rem",borderRadius:"var(--radius-full)",background:"var(--emerald-50)",border:"1px solid var(--border-medium)",cursor:"pointer"},children:[p.jsx("img",{src:n.avatar_url||`https://api.dicebear.com/7.x/initials/svg?seed=${n.username||n.email}`,alt:n.username||"User",style:{width:"1.75rem",height:"1.75rem",borderRadius:"50%",objectFit:"cover",background:"var(--emerald-200)"}}),p.jsx("span",{style:{fontWeight:600,fontSize:"0.875rem",color:"var(--emerald-950)",maxWidth:"100px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.username||n.email.split("@")[0]}),n.zip_code&&n.zip_code!=="00000"&&p.jsx("span",{className:"badge badge-emerald",style:{fontSize:"0.6875rem",padding:"0.15rem 0.4rem"},children:n.zip_code}),p.jsx(Zy,{size:14,color:"var(--text-muted)"})]}),s&&p.jsxs("div",{className:"card animate-fade-in",style:{position:"absolute",right:0,top:"calc(100% + 8px)",width:"240px",padding:"0.75rem",zIndex:100,boxShadow:"var(--shadow-xl)"},children:[p.jsxs("div",{style:{padding:"0.5rem 0.75rem",borderBottom:"1px solid var(--border-subtle)",marginBottom:"0.5rem"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:"0.9375rem",color:"var(--emerald-950)"},children:n.full_name||n.username}),p.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",wordBreak:"break-all"},children:n.email}),p.jsx("div",{style:{marginTop:"0.35rem"},children:p.jsxs("span",{className:"badge badge-emerald",style:{fontSize:"0.6875rem"},children:[p.jsx(Xo,{size:12})," ",n.provider==="google"?"Google Connected":"Verified Account"]})})]}),p.jsxs("button",{onClick:()=>{o(!1),r()},className:"btn btn-ghost",style:{width:"100%",justifyContent:"flex-start",color:"var(--danger)",fontSize:"0.875rem",padding:"0.5rem 0.75rem"},children:[p.jsx(Qy,{size:16})," Sign Out"]})]})]}):p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("button",{onClick:()=>i("login","Sign in to access your dashboard"),className:"btn btn-ghost",style:{fontWeight:600},children:"Sign In"}),p.jsx("button",{onClick:()=>i("register","Create your clean energy account"),className:"btn btn-primary",style:{padding:"0.5rem 1rem"},children:"Register"})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="162",oS=0,ap=1,aS=2,hv=1,lS=2,pi=3,tr=0,fn=1,Jt=2,Zi=0,ws=1,lp=2,cp=3,up=4,cS=5,_r=100,uS=101,dS=102,dp=103,fp=104,fS=200,hS=201,pS=202,mS=203,fd=204,hd=205,gS=206,vS=207,xS=208,_S=209,yS=210,SS=211,MS=212,ES=213,wS=214,TS=0,AS=1,bS=2,Cl=3,CS=4,RS=5,PS=6,LS=7,pv=0,IS=1,NS=2,Ki=0,DS=1,kS=2,US=3,mv=4,FS=5,OS=6,zS=7,gv=300,Ns=301,Ds=302,pd=303,md=304,ec=306,gd=1e3,Wn=1001,vd=1002,Qt=1003,hp=1004,Js=1005,sn=1006,Oc=1007,wr=1008,Qi=1009,BS=1010,HS=1011,Cf=1012,vv=1013,Hi=1014,vi=1015,Bo=1016,xv=1017,_v=1018,br=1020,GS=1021,jn=1023,VS=1024,WS=1025,Cr=1026,ks=1027,jS=1028,yv=1029,XS=1030,Sv=1031,Mv=1033,zc=33776,Bc=33777,Hc=33778,Gc=33779,pp=35840,mp=35841,gp=35842,vp=35843,Ev=36196,xp=37492,_p=37496,yp=37808,Sp=37809,Mp=37810,Ep=37811,wp=37812,Tp=37813,Ap=37814,bp=37815,Cp=37816,Rp=37817,Pp=37818,Lp=37819,Ip=37820,Np=37821,Vc=36492,Dp=36494,kp=36495,$S=36283,Up=36284,Fp=36285,Op=36286,qS=3200,YS=3201,wv=0,ZS=1,Oi="",Jn="srgb",or="srgb-linear",Rf="display-p3",tc="display-p3-linear",Rl="linear",at="srgb",Pl="rec709",Ll="p3",Hr=7680,zp=519,KS=512,QS=513,JS=514,Tv=515,e1=516,t1=517,n1=518,i1=519,Bp=35044,Hp="300 es",xd=1035,yi=2e3,Il=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,_d=180/Math.PI;function qo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function r1(t,e){return(t%e+e)%e}function jc(t,e,n){return(1-n)*t+n*e}function Gp(t){return(t&t-1)===0&&t!==0}function yd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],_=i[8],M=r[0],m=r[3],u=r[6],x=r[1],v=r[4],S=r[7],A=r[2],w=r[5],T=r[8];return s[0]=o*M+a*x+l*A,s[3]=o*m+a*v+l*w,s[6]=o*u+a*S+l*T,s[1]=c*M+d*x+f*A,s[4]=c*m+d*v+f*w,s[7]=c*u+d*S+f*T,s[2]=h*M+g*x+_*A,s[5]=h*m+g*v+_*w,s[8]=h*u+g*S+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,_=n*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-d*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=g*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Oe;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s1(){const t=Nl("canvas");return t.style.display="block",t}const Vp={};function o1(t){t in Vp||(Vp[t]=!0,console.warn(t))}const Wp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ya={[or]:{transfer:Rl,primaries:Pl,toReference:t=>t,fromReference:t=>t},[Jn]:{transfer:at,primaries:Pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:Rl,primaries:Ll,toReference:t=>t.applyMatrix3(jp),fromReference:t=>t.applyMatrix3(Wp)},[Rf]:{transfer:at,primaries:Ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3(jp),fromReference:t=>t.applyMatrix3(Wp).convertLinearToSRGB()}},a1=new Set([or,tc]),Je={enabled:!0,_workingColorSpace:or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!a1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ya[e].toReference,r=ya[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ya[t].primaries},getTransfer:function(t){return t===Oi?Rl:ya[t].transfer}};function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Nl("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ts(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l1=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c1=0;class hn extends Hs{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Wn,r=Wn,s=sn,o=wr,a=jn,l=Qi,c=hn.DEFAULT_ANISOTROPY,d=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=qo(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=gv;hn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],_=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,A=(u+1)/2,w=(d+h)/4,T=(f+M)/4,I=(_+m)/4;return v>S&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=T/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=I/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-M)/x,this.z=(h-d)/x,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u1 extends Hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends u1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d1 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=M;return}if(f!==M||l!==h||c!==g||d!==_){let m=1-a;const u=l*h+c*g+d*_+f*M,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,u*x);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const S=a*x;if(l=l*m+h*S,c=c*m+g*S,d=d*m+_*S,f=f*m+M*S,m===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=A,c*=A,d*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*g-c*h,e[n+1]=l*_+d*h+c*f-a*g,e[n+2]=c*_+d*g+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"YXZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"ZXY":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"ZYX":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"YZX":this._x=h*d*f+c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f-h*g*_;break;case"XZY":this._x=h*d*f-c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new H,Xp=new Yo;class Zo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Ma.subVectors(this.max,to),Vr.subVectors(e.a,to),Wr.subVectors(e.b,to),jr.subVectors(e.c,to),Ci.subVectors(Wr,Vr),Ri.subVectors(jr,Wr),cr.subVectors(Vr,jr);let n=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-cr.z,cr.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,cr.z,0,-cr.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-cr.y,cr.x,0];return!Zc(n,Vr,Wr,jr,Ma)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,Vr,Wr,jr,Ma))?!1:(Ea.crossVectors(Ci,Ri),n=[Ea.x,Ea.y,Ea.z],Zc(n,Vr,Wr,jr,Ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new H,new H,new H,new H,new H,new H,new H,new H],Fn=new H,Sa=new Zo,Vr=new H,Wr=new H,jr=new H,Ci=new H,Ri=new H,cr=new H,to=new H,Ma=new H,Ea=new H,ur=new H;function Zc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ur.fromArray(t,s);const a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),d=i.dot(ur);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const f1=new Zo,no=new H,Kc=new H;class nc{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):f1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const n=no.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(no,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Kc)),this.expandByPoint(no.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new H,Qc=new H,wa=new H,Pi=new H,Jc=new H,Ta=new H,eu=new H;class Pf{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qc.copy(e).add(n).multiplyScalar(.5),wa.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wa),a=Pi.dot(this.direction),l=-Pi.dot(wa),c=Pi.lengthSq(),d=Math.abs(1-o*o);let f,h,g,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const M=1/d;f*=M,h*=M,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qc).addScaledVector(wa,h),g}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){Jc.subVectors(n,e),Ta.subVectors(i,e),eu.crossVectors(Jc,Ta);let o=this.direction.dot(eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Ta.crossVectors(Pi,Ta));if(l<0)return null;const c=a*this.direction.dot(Jc.cross(Pi));if(c<0||l+c>o)return null;const d=-a*Pi.dot(eu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,_,M,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,_,M,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,_,M,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=_,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,_=a*d,M=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,_=c*d,M=c*f;n[0]=h+M*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-_,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,_=c*d,M=c*f;n[0]=h-M*a,n[4]=-o*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*d,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,_=a*d,M=a*f;n[0]=l*d,n[4]=_*c-g,n[8]=h*c+M,n[1]=l*f,n[5]=M*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,M=a*c;n[0]=l*d,n[4]=M-h*f,n[8]=_*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+_,n[10]=h-M*f}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,M=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+M,n[5]=o*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*d,n[10]=M*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,p1)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Li.crossVectors(i,mn),Li.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Li.crossVectors(i,mn)),Li.normalize(),Aa.crossVectors(mn,Li),r[0]=Li.x,r[4]=Aa.x,r[8]=mn.x,r[1]=Li.y,r[5]=Aa.y,r[9]=mn.y,r[2]=Li.z,r[6]=Aa.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],_=i[2],M=i[6],m=i[10],u=i[14],x=i[3],v=i[7],S=i[11],A=i[15],w=r[0],T=r[4],I=r[8],O=r[12],y=r[1],C=r[5],Q=r[9],K=r[13],N=r[2],q=r[6],P=r[10],B=r[14],L=r[3],k=r[7],z=r[11],Y=r[15];return s[0]=o*w+a*y+l*N+c*L,s[4]=o*T+a*C+l*q+c*k,s[8]=o*I+a*Q+l*P+c*z,s[12]=o*O+a*K+l*B+c*Y,s[1]=d*w+f*y+h*N+g*L,s[5]=d*T+f*C+h*q+g*k,s[9]=d*I+f*Q+h*P+g*z,s[13]=d*O+f*K+h*B+g*Y,s[2]=_*w+M*y+m*N+u*L,s[6]=_*T+M*C+m*q+u*k,s[10]=_*I+M*Q+m*P+u*z,s[14]=_*O+M*K+m*B+u*Y,s[3]=x*w+v*y+S*N+A*L,s[7]=x*T+v*C+S*q+A*k,s[11]=x*I+v*Q+S*P+A*z,s[15]=x*O+v*K+S*B+A*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],_=e[3],M=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+M*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+m*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],_=e[12],M=e[13],m=e[14],u=e[15],x=f*m*c-M*h*c+M*l*g-a*m*g-f*l*u+a*h*u,v=_*h*c-d*m*c-_*l*g+o*m*g+d*l*u-o*h*u,S=d*M*c-_*f*c+_*a*g-o*M*g-d*a*u+o*f*u,A=_*f*l-d*M*l-_*a*h+o*M*h+d*a*m-o*f*m,w=n*x+i*v+r*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(M*h*s-f*m*s-M*r*g+i*m*g+f*r*u-i*h*u)*T,e[2]=(a*m*s-M*l*s+M*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*T,e[4]=v*T,e[5]=(d*m*s-_*h*s+_*r*g-n*m*g-d*r*u+n*h*u)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*T,e[8]=S*T,e[9]=(_*f*s-d*M*s-_*i*g+n*M*g+d*i*u-n*f*u)*T,e[10]=(o*M*s-_*a*s+_*i*c-n*M*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*T,e[12]=A*T,e[13]=(d*M*r-_*f*r+_*i*h-n*M*h-d*i*m+n*f*m)*T,e[14]=(_*a*r-o*M*r-_*i*l+n*M*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,_=s*f,M=o*d,m=o*f,u=a*f,x=l*c,v=l*d,S=l*f,A=i.x,w=i.y,T=i.z;return r[0]=(1-(M+u))*A,r[1]=(g+S)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(g-S)*w,r[5]=(1-(h+u))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(_+v)*T,r[9]=(m-x)*T,r[10]=(1-(h+M))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,d=1/o,f=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=yi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===yi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Il)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,g=(i+r)*d;let _,M;if(a===yi)_=(o+s)*f,M=-2*f;else if(a===Il)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new H,On=new mt,h1=new H(0,0,0),p1=new H(1,1,1),Li=new H,Aa=new H,mn=new H,$p=new mt,qp=new Yo;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m1=0;const Yp=new H,$r=new Yo,di=new mt,ba=new H,io=new H,g1=new H,v1=new Yo,Zp=new H(1,0,0),Kp=new H(0,1,0),Qp=new H(0,0,1),x1={type:"added"},_1={type:"removed"},tu={type:"childadded",child:null},nu={type:"childremoved",child:null};class zt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new H,n=new ai,i=new Yo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Oe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(io,ba,this.up):di.lookAt(ba,io,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(di),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(x1),tu.child=e,this.dispatchEvent(tu),tu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_1),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,g1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,v1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new H(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new H,fi=new H,iu=new H,hi=new H,qr=new H,Yr=new H,Jp=new H,ru=new H,su=new H,ou=new H;class ni{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),fi.subVectors(i,n),iu.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(fi),l=zn.dot(iu),c=fi.dot(fi),d=fi.dot(iu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),fi.subVectors(e,n),zn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Yr.subVectors(s,i),ru.subVectors(e,i);const l=qr.dot(ru),c=Yr.dot(ru);if(l<=0&&c<=0)return n.copy(i);su.subVectors(e,r);const d=qr.dot(su),f=Yr.dot(su);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(qr,o);ou.subVectors(e,s);const g=qr.dot(ou),_=Yr.dot(ou);if(_>=0&&g<=_)return n.copy(s);const M=g*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Yr,a);const m=d*_-g*f;if(m<=0&&f-d>=0&&g-_>=0)return Jp.subVectors(s,r),a=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(Jp,a);const u=1/(m+M+h);return o=M*u,a=h*u,n.copy(i).addScaledVector(qr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=r1(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=au(o,s,e+1/3),this.g=au(o,s,e),this.b=au(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Je.fromWorkingColorSpace(jt.copy(this),e),Math.round(an(jt.r*255,0,255))*65536+Math.round(an(jt.g*255,0,255))*256+Math.round(an(jt.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Jn){Je.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Ca);const i=jc(Ii.h,Ca.h,n),r=jc(Ii.s,Ca.s,n),s=jc(Ii.l,Ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=Pv;let y1=0;class Gs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=ws,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fd&&(i.blendSrc=this.blendSrc),this.blendDst!==hd&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new H,Ra=new He;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return o1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(e),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bp&&(e.usage=this.usage),e}}class Lv extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Iv extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let S1=0;const Cn=new mt,lu=new zt,Zr=new H,gn=new Zo,ro=new Zo,Pt=new H;class Tn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Iv:Lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(gn.min,ro.min),gn.expandByPoint(Pt),Pt.addVectors(gn.max,ro.max),gn.expandByPoint(Pt)):(gn.expandByPoint(ro.min),gn.expandByPoint(ro.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Pt.add(Zr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new H,l[I]=new H;const c=new H,d=new H,f=new H,h=new He,g=new He,_=new He,M=new H,m=new H;function u(I,O,y){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,O),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,I),g.fromBufferAttribute(s,O),_.fromBufferAttribute(s,y),d.sub(c),f.sub(c),g.sub(h),_.sub(h);const C=1/(g.x*_.y-_.x*g.y);isFinite(C)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(C),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(C),a[I].add(M),a[O].add(M),a[y].add(M),l[I].add(m),l[O].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,O=x.length;I<O;++I){const y=x[I],C=y.start,Q=y.count;for(let K=C,N=C+Q;K<N;K+=3)u(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const v=new H,S=new H,A=new H,w=new H;function T(I){A.fromBufferAttribute(r,I),w.copy(A);const O=a[I];v.copy(O),v.sub(A.multiplyScalar(A.dot(O))).normalize(),S.crossVectors(w,O);const C=S.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,O=x.length;I<O;++I){const y=x[I],C=y.start,Q=y.count;for(let K=C,N=C+Q;K<N;K+=3)T(e.getX(K+0)),T(e.getX(K+1)),T(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,_=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?g=l[M]*a.data.stride+a.offset:g=l[M]*d;for(let u=0;u<d;u++)h[_++]=c[g++]}return new Nn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new mt,dr=new Pf,Pa=new nc,tm=new H,Kr=new H,Qr=new H,Jr=new H,cu=new H,La=new H,Ia=new He,Na=new He,Da=new He,nm=new H,im=new H,rm=new H,ka=new H,Ua=new H;class Nt extends zt{constructor(e=new Tn,n=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(cu.fromBufferAttribute(f,e),o?La.addScaledVector(cu,d):La.addScaledVector(cu.sub(n),d))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Pa.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Pa,tm)===null||dr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),dr.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){const m=h[_],u=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,A=v;S<A;S+=3){const w=a.getX(S),T=a.getX(S+1),I=a.getX(S+2);r=Fa(this,u,e,i,c,d,f,w,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let m=_,u=M;m<u;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Fa(this,o,e,i,c,d,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){const m=h[_],u=o[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,A=v;S<A;S+=3){const w=S,T=S+1,I=S+2;r=Fa(this,u,e,i,c,d,f,w,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let m=_,u=M;m<u;m+=3){const x=m,v=m+1,S=m+2;r=Fa(this,o,e,i,c,d,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function M1(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ua);return c<n.near||c>n.far?null:{distance:c,point:Ua.clone(),object:t}}function Fa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Kr),t.getVertexPosition(l,Qr),t.getVertexPosition(c,Jr);const d=M1(t,e,n,i,Kr,Qr,Jr,ka);if(d){r&&(Ia.fromBufferAttribute(r,a),Na.fromBufferAttribute(r,l),Da.fromBufferAttribute(r,c),d.uv=ni.getInterpolation(ka,Kr,Qr,Jr,Ia,Na,Da,new He)),s&&(Ia.fromBufferAttribute(s,a),Na.fromBufferAttribute(s,l),Da.fromBufferAttribute(s,c),d.uv1=ni.getInterpolation(ka,Kr,Qr,Jr,Ia,Na,Da,new He)),o&&(nm.fromBufferAttribute(o,a),im.fromBufferAttribute(o,l),rm.fromBufferAttribute(o,c),d.normal=ni.getInterpolation(ka,Kr,Qr,Jr,nm,im,rm,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};ni.getNormal(Kr,Qr,Jr,f.normal),d.face=f}return d}class Ko extends Tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(f,2));function _(M,m,u,x,v,S,A,w,T,I,O){const y=S/T,C=A/I,Q=S/2,K=A/2,N=w/2,q=T+1,P=I+1;let B=0,L=0;const k=new H;for(let z=0;z<P;z++){const Y=z*C-K;for(let te=0;te<q;te++){const xe=te*y-Q;k[M]=xe*x,k[m]=Y*v,k[u]=N,c.push(k.x,k.y,k.z),k[M]=0,k[m]=0,k[u]=w>0?1:-1,d.push(k.x,k.y,k.z),f.push(te/T),f.push(1-z/I),B+=1}}for(let z=0;z<I;z++)for(let Y=0;Y<T;Y++){const te=h+Y+q*z,xe=h+Y+q*(z+1),G=h+(Y+1)+q*(z+1),J=h+(Y+1)+q*z;l.push(te,xe,J),l.push(xe,G,J),L+=6}a.addGroup(g,L,O),g+=L,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function E1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Nv(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const w1={clone:Us,merge:Zt};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=A1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dv extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new H,sm=new He,om=new He;class _n extends Dv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,sm,om),n.subVectors(om,sm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class b1 extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new _n(es,ts,e,n);s.layers=this.layers,this.add(s);const o=new _n(es,ts,e,n);o.layers=this.layers,this.add(o);const a=new _n(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new _n(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new _n(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kv extends hn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ns,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C1 extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ko(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Zi});s.uniforms.tEquirect.value=n;const o=new Nt(r,s),a=n.minFilter;return n.minFilter===wr&&(n.minFilter=sn),new b1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const uu=new H,R1=new H,P1=new Oe;class vr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uu.subVectors(i,n).cross(R1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||P1.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new nc,Oa=new H;class If{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],M=r[10],m=r[11],u=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-g,S-u).normalize(),i[1].setComponents(l+s,h+c,m+g,S+u).normalize(),i[2].setComponents(l+o,h+d,m+_,S+x).normalize(),i[3].setComponents(l-o,h-d,m-_,S-x).normalize(),i[4].setComponents(l-a,h-f,m-M,S-v).normalize(),n===yi)i[5].setComponents(l+a,h+f,m+M,S+v).normalize();else if(n===Il)i[5].setComponents(a,f,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function L1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let M;if(f instanceof Float32Array)M=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)M=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=t.SHORT;else if(f instanceof Uint32Array)M=t.UNSIGNED_INT;else if(f instanceof Int32Array)M=t.INT;else if(f instanceof Int8Array)M=t.BYTE;else if(f instanceof Uint8Array)M=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,f){const h=d.array,g=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let M=0,m=_.length;M<m;M++){const u=_[M];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class ic extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],_=[],M=[],m=[];for(let u=0;u<d;u++){const x=u*h-o;for(let v=0;v<c;v++){const S=v*f-s;_.push(S,-x,0),M.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const v=x+c*u,S=x+c*(u+1),A=x+1+c*(u+1),w=x+1+c*u;g.push(v,S,w),g.push(S,A,w)}this.setIndex(g),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_M=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:I1,alphahash_pars_fragment:N1,alphamap_fragment:D1,alphamap_pars_fragment:k1,alphatest_fragment:U1,alphatest_pars_fragment:F1,aomap_fragment:O1,aomap_pars_fragment:z1,batching_pars_vertex:B1,batching_vertex:H1,begin_vertex:G1,beginnormal_vertex:V1,bsdfs:W1,iridescence_fragment:j1,bumpmap_pars_fragment:X1,clipping_planes_fragment:$1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:Z1,color_fragment:K1,color_pars_fragment:Q1,color_pars_vertex:J1,color_vertex:eM,common:tM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:aM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:dM,envmap_pars_fragment:fM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:vM,fog_pars_fragment:xM,gradientmap_pars_fragment:_M,lightmap_fragment:yM,lightmap_pars_fragment:SM,lights_lambert_fragment:MM,lights_lambert_pars_fragment:EM,lights_pars_begin:wM,lights_toon_fragment:AM,lights_toon_pars_fragment:bM,lights_phong_fragment:CM,lights_phong_pars_fragment:RM,lights_physical_fragment:PM,lights_physical_pars_fragment:LM,lights_fragment_begin:IM,lights_fragment_maps:NM,lights_fragment_end:DM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:OM,map_fragment:zM,map_pars_fragment:BM,map_particle_fragment:HM,map_particle_pars_fragment:GM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:WM,morphinstance_vertex:jM,morphcolor_vertex:XM,morphnormal_vertex:$M,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:ZM,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:dE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:_E,skinning_vertex:yE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:wE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:bE,uv_pars_fragment:CE,uv_pars_vertex:RE,uv_vertex:PE,worldpos_vertex:LE,background_vert:IE,background_frag:NE,backgroundCube_vert:DE,backgroundCube_frag:kE,cube_vert:UE,cube_frag:FE,depth_vert:OE,depth_frag:zE,distanceRGBA_vert:BE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:WE,linedashed_frag:jE,meshbasic_vert:XE,meshbasic_frag:$E,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:ZE,meshmatcap_frag:KE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:dw},le={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ei={basic:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Zt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Zt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Zt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Zt([le.common,le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Zt([le.lights,le.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ei.physical={uniforms:Zt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const za={r:0,b:0,g:0},hr=new ai,fw=new mt;function hw(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function _(m,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?M(a,l):v&&v.isColor&&(M(v,1),x=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ec)?(d===void 0&&(d=new Nt(new Ko(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Us(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hr.copy(u.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fw.makeRotationFromEuler(hr)),d.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,(f!==v||h!==v.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nt(new ic(2,2),new nr({name:"BackgroundMaterial",uniforms:Us(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function M(m,u){m.getRGB(za,Nv(t)),i.buffers.color.setClear(za.r,za.g,za.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,M(a,l)},render:_}}function pw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function f(N,q,P,B,L){let k=!1;if(o){const z=M(B,P,q);c!==z&&(c=z,g(c.object)),k=u(N,B,P,L),k&&x(N,B,P,L)}else{const z=q.wireframe===!0;(c.geometry!==B.id||c.program!==P.id||c.wireframe!==z)&&(c.geometry=B.id,c.program=P.id,c.wireframe=z,k=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,I(N,q,P,B),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function M(N,q,P){const B=P.wireframe===!0;let L=a[N.id];L===void 0&&(L={},a[N.id]=L);let k=L[q.id];k===void 0&&(k={},L[q.id]=k);let z=k[B];return z===void 0&&(z=m(h()),k[B]=z),z}function m(N){const q=[],P=[],B=[];for(let L=0;L<r;L++)q[L]=0,P[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:P,attributeDivisors:B,object:N,attributes:{},index:null}}function u(N,q,P,B){const L=c.attributes,k=q.attributes;let z=0;const Y=P.getAttributes();for(const te in Y)if(Y[te].location>=0){const G=L[te];let J=k[te];if(J===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;z++}return c.attributesNum!==z||c.index!==B}function x(N,q,P,B){const L={},k=q.attributes;let z=0;const Y=P.getAttributes();for(const te in Y)if(Y[te].location>=0){let G=k[te];G===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(G=N.instanceColor));const J={};J.attribute=G,G&&G.data&&(J.data=G.data),L[te]=J,z++}c.attributes=L,c.attributesNum=z,c.index=B}function v(){const N=c.newAttributes;for(let q=0,P=N.length;q<P;q++)N[q]=0}function S(N){A(N,0)}function A(N,q){const P=c.newAttributes,B=c.enabledAttributes,L=c.attributeDivisors;P[N]=1,B[N]===0&&(t.enableVertexAttribArray(N),B[N]=1),L[N]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,q),L[N]=q)}function w(){const N=c.newAttributes,q=c.enabledAttributes;for(let P=0,B=q.length;P<B;P++)q[P]!==N[P]&&(t.disableVertexAttribArray(P),q[P]=0)}function T(N,q,P,B,L,k,z){z===!0?t.vertexAttribIPointer(N,q,P,L,k):t.vertexAttribPointer(N,q,P,B,L,k)}function I(N,q,P,B){if(i.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=B.attributes,k=P.getAttributes(),z=q.defaultAttributeValues;for(const Y in k){const te=k[Y];if(te.location>=0){let xe=L[Y];if(xe===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),xe!==void 0){const G=xe.normalized,J=xe.itemSize,ue=n.get(xe);if(ue===void 0)continue;const Ee=ue.buffer,ae=ue.type,ie=ue.bytesPerElement,Pe=i.isWebGL2===!0&&(ae===t.INT||ae===t.UNSIGNED_INT||xe.gpuType===vv);if(xe.isInterleavedBufferAttribute){const ve=xe.data,U=ve.stride,rt=xe.offset;if(ve.isInstancedInterleavedBuffer){for(let Me=0;Me<te.locationSize;Me++)A(te.location+Me,ve.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Me=0;Me<te.locationSize;Me++)S(te.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Me=0;Me<te.locationSize;Me++)T(te.location+Me,J/te.locationSize,ae,G,U*ie,(rt+J/te.locationSize*Me)*ie,Pe)}else{if(xe.isInstancedBufferAttribute){for(let ve=0;ve<te.locationSize;ve++)A(te.location+ve,xe.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ve=0;ve<te.locationSize;ve++)S(te.location+ve);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let ve=0;ve<te.locationSize;ve++)T(te.location+ve,J/te.locationSize,ae,G,J*ie,J/te.locationSize*ve*ie,Pe)}}else if(z!==void 0){const G=z[Y];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(te.location,G);break;case 3:t.vertexAttrib3fv(te.location,G);break;case 4:t.vertexAttrib4fv(te.location,G);break;default:t.vertexAttrib1fv(te.location,G)}}}}w()}function O(){Q();for(const N in a){const q=a[N];for(const P in q){const B=q[P];for(const L in B)_(B[L].object),delete B[L];delete q[P]}delete a[N]}}function y(N){if(a[N.id]===void 0)return;const q=a[N.id];for(const P in q){const B=q[P];for(const L in B)_(B[L].object),delete B[L];delete q[P]}delete a[N.id]}function C(N){for(const q in a){const P=a[q];if(P[N.id]===void 0)continue;const B=P[N.id];for(const L in B)_(B[L].object),delete B[L];delete P[N.id]}}function Q(){K(),d=!0,c!==l&&(c=l,g(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:K,dispose:O,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function mw(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let M=0;M<h;M++)_+=f[M];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function gw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),M=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),A=v&&S,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:w}}function vw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new vr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:i,v=x*4;let S=u.clippingState||null;l.value=S,S=d(_,h,v,g);for(let A=0;A!==v;++A)S[A]=n[A];u.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const u=g+M*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,S=g;v!==M;++v,S+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function xw(t){let e=new WeakMap;function n(o,a){return a===pd?o.mapping=Ns:a===md&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pd||a===md)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new C1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fv extends Dv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ms=4,am=[.125,.215,.35,.446,.526,.582],yr=20,du=new Fv,lm=new Ze;let fu=null,hu=0,pu=0;const xr=(1+Math.sqrt(5))/2,ns=1/xr,cm=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,xr,ns),new H(0,xr,-ns),new H(ns,0,xr),new H(-ns,0,xr),new H(xr,ns,0),new H(-xr,ns,0)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,hu,pu),e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Bo,format:jn,colorSpace:or,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_w(s)),this._blurMaterial=yw(s,e,n)}return r}_compileMaterial(e){const n=new Nt(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(lm),d.toneMapping=Ki,d.autoClear=!1;const g=new Vn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Nt(new Ko,g);let M=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,M=!0):(g.color.copy(lm),M=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Ba(r,x*v,u>2?v:0,v,v),d.setRenderTarget(r),M&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ns||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cm[(r-1)%cm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Nt(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*yr-1),M=s/_,m=isFinite(s)?1+Math.floor(d*M):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const u=[];let x=0;for(let T=0;T<yr;++T){const I=T/M,O=Math.exp(-I*I/2);u.push(O),T===0?x+=O:T<m&&(x+=2*O)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],A=3*S*(r>v-ms?r-v+ms:0),w=4*(this._cubeSize-S);Ba(n,A,w,3*S,2*S),l.setRenderTarget(n),l.render(f,du)}}function _w(t){const e=[],n=[],i=[];let r=t;const s=t-ms+1+am.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ms?l=am[o-t+ms-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,M=3,m=2,u=1,x=new Float32Array(M*_*g),v=new Float32Array(m*_*g),S=new Float32Array(u*_*g);for(let w=0;w<g;w++){const T=w%3*2/3-1,I=w>2?0:-1,O=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(O,M*_*w),v.set(h,m*_*w);const y=[w,w,w,w,w,w];S.set(y,u*_*w)}const A=new Tn;A.setAttribute("position",new Nn(x,M)),A.setAttribute("uv",new Nn(v,m)),A.setAttribute("faceIndex",new Nn(S,u)),e.push(A),r>ms&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yw(t,e,n){const i=new Float32Array(yr),r=new H(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function fm(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function hm(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pd||l===md,d=l===Ns||l===Ds;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new um(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new um(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Mw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ew(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const M=h.morphAttributes[_];for(let m=0,u=M.length;m<u;m++)e.remove(M[m])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const M=g[_];for(let m=0,u=M.length;m<u;m++)e.update(M[m],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,_=f.attributes.position;let M=0;if(g!==null){const x=g.array;M=g.version;for(let v=0,S=x.length;v<S;v+=3){const A=x[v+0],w=x[v+1],T=x[v+2];h.push(A,w,w,T,T,A)}}else if(_!==void 0){const x=_.array;M=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const A=v+0,w=v+1,T=v+2;h.push(A,w,w,T,T,A)}}else return;const m=new(Av(h)?Iv:Lv)(h,1);m.version=M;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function ww(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,_){t.drawElements(s,_,a,g*l),n.update(_,s,1)}function f(g,_,M){if(M===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,_,a,g*l,M),n.update(_,s,M)}function h(g,_,M){if(M===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<M;u++)this.render(g[u]/l,_[u]);else{m.multiDrawElementsWEBGL(s,_,0,a,g,0,M);let u=0;for(let x=0;x<M;x++)u+=_[x];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function Tw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Aw(t,e){return t[0]-e[0]}function bw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Cw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==M){let K=function(){C.dispose(),s.delete(d),d.removeEventListener("dispose",K)};var g=K;m!==void 0&&m.texture.dispose();const u=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,v=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let T=0;u===!0&&(T=1),x===!0&&(T=2),v===!0&&(T=3);let I=d.attributes.position.count*T,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const y=new Float32Array(I*O*4*M),C=new Rv(y,I,O,M);C.type=vi,C.needsUpdate=!0;const Q=T*4;for(let N=0;N<M;N++){const q=S[N],P=A[N],B=w[N],L=I*O*4*N;for(let k=0;k<q.count;k++){const z=k*Q;u===!0&&(o.fromBufferAttribute(q,k),y[L+z+0]=o.x,y[L+z+1]=o.y,y[L+z+2]=o.z,y[L+z+3]=0),x===!0&&(o.fromBufferAttribute(P,k),y[L+z+4]=o.x,y[L+z+5]=o.y,y[L+z+6]=o.z,y[L+z+7]=0),v===!0&&(o.fromBufferAttribute(B,k),y[L+z+8]=o.x,y[L+z+9]=o.y,y[L+z+10]=o.z,y[L+z+11]=B.itemSize===4?o.w:1)}}m={count:M,texture:C,size:new He(I,O)},s.set(d,m),d.addEventListener("dispose",K)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let v=0;v<h.length;v++)u+=h[v];const x=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let M=i[d.id];if(M===void 0||M.length!==_){M=[];for(let S=0;S<_;S++)M[S]=[S,0];i[d.id]=M}for(let S=0;S<_;S++){const A=M[S];A[0]=S,A[1]=h[S]}M.sort(bw);for(let S=0;S<8;S++)S<_&&M[S][1]?(a[S][0]=M[S][0],a[S][1]=M[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Aw);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const A=a[S],w=A[0],T=A[1];w!==Number.MAX_SAFE_INTEGER&&T?(m&&d.getAttribute("morphTarget"+S)!==m[w]&&d.setAttribute("morphTarget"+S,m[w]),u&&d.getAttribute("morphNormal"+S)!==u[w]&&d.setAttribute("morphNormal"+S,u[w]),r[S]=T,x+=T):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const v=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Rw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ov extends hn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Cr,d!==Cr&&d!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Cr&&(i=Hi),i===void 0&&d===ks&&(i=br),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const zv=new hn,Bv=new Ov(1,1);Bv.compareFunction=Tv;const Hv=new Rv,Gv=new d1,Vv=new kv,pm=[],mm=[],gm=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function Dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Ct(n,i)}}function kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;vm.set(i),t.uniformMatrix3fv(this.addr,!1,vm),Ct(n,i)}}function Uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),Ct(n,i)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Bv:zv;n.setTexture2D(e||s,r)}function Xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gv,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vv,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hv,r)}function Yw(t){switch(t){case 5126:return Pw;case 35664:return Lw;case 35665:return Iw;case 35666:return Nw;case 35674:return Dw;case 35675:return kw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return zw;case 35669:case 35673:return Bw;case 5125:return Hw;case 36294:return Gw;case 36295:return Vw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return qw}}function Zw(t,e){t.uniform1fv(this.addr,e)}function Kw(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function Qw(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function Jw(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function eT(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tT(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nT(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iT(t,e){t.uniform1iv(this.addr,e)}function rT(t,e){t.uniform2iv(this.addr,e)}function sT(t,e){t.uniform3iv(this.addr,e)}function oT(t,e){t.uniform4iv(this.addr,e)}function aT(t,e){t.uniform1uiv(this.addr,e)}function lT(t,e){t.uniform2uiv(this.addr,e)}function cT(t,e){t.uniform3uiv(this.addr,e)}function uT(t,e){t.uniform4uiv(this.addr,e)}function dT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||zv,s[o])}function fT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Gv,s[o])}function hT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Vv,s[o])}function pT(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hv,s[o])}function mT(t){switch(t){case 5126:return Zw;case 35664:return Kw;case 35665:return Qw;case 35666:return Jw;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Yw(n.type)}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mT(n.type)}}class xT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function _T(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),o=mu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_m(n,c===void 0?new gT(a,t,e):new vT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new xT(a),_m(n,f)),n=f}}}class il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);_T(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yT=37297;let ST=0;function MT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ET(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Ll&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Ll&&(i="LinearSRGBToLinearDisplayP3"),t){case or:case tc:return[i,"LinearTransferOETF"];case Jn:case Rf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+MT(t.getShaderSource(e),o)}else return r}function wT(t,e){const n=ET(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TT(t,e){let n;switch(e){case DS:n="Linear";break;case kS:n="Reinhard";break;case US:n="OptimizedCineon";break;case mv:n="ACESFilmic";break;case OS:n="AgX";break;case zS:n="Neutral";break;case FS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function bT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function CT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function gs(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(t){return t.replace(PT,IT)}const LT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function IT(t,e){let n=Fe[e];if(n===void 0){const i=LT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(n)}const NT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t){return t.replace(NT,DT)}function DT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function UT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ns:case Ds:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case pv:e="ENVMAP_BLENDING_MULTIPLY";break;case IS:e="ENVMAP_BLENDING_MIX";break;case NS:e="ENVMAP_BLENDING_ADD";break}return e}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kT(n),c=UT(n),d=FT(n),f=OT(n),h=zT(n),g=n.isWebGL2?"":AT(n),_=bT(n),M=CT(s),m=r.createProgram();let u,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(gs).join(`
`),u.length>0&&(u+=`
`),x=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(gs).join(`
`),x.length>0&&(x+=`
`)):(u=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),x=[g,Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Ki?TT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,wT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),o=Sd(o),o=Mm(o,n),o=Em(o,n),a=Sd(a),a=Mm(a,n),a=Em(a,n),o=wm(o),a=wm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+u+o,A=v+x+a,w=ym(r,r.VERTEX_SHADER,S),T=ym(r,r.FRAGMENT_SHADER,A);r.attachShader(m,w),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function I(Q){if(t.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(w).trim(),q=r.getShaderInfoLog(T).trim();let P=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,w,T);else{const L=Sm(r,w,"vertex"),k=Sm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+K+`
`+L+`
`+k)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(N===""||q==="")&&(B=!1);B&&(Q.diagnostics={runnable:P,programLog:K,vertexShader:{log:N,prefix:u},fragmentShader:{log:q,prefix:x}})}r.deleteShader(w),r.deleteShader(T),O=new il(r,m),y=RT(r,m)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,yT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ST++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}let HT=0;class GT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VT(e),n.set(e,i)),i}}class VT{constructor(e){this.id=HT++,this.code=e,this.usedTimes=0}}function WT(t,e,n,i,r,s,o){const a=new Lf,l=new GT,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,C,Q,K,N){const q=K.fog,P=N.geometry,B=y.isMeshStandardMaterial?K.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||B),k=L&&L.mapping===ec?L.image.height:null,z=M[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=Y!==void 0?Y.length:0;let xe=0;P.morphAttributes.position!==void 0&&(xe=1),P.morphAttributes.normal!==void 0&&(xe=2),P.morphAttributes.color!==void 0&&(xe=3);let G,J,ue,Ee;if(z){const tt=ei[z];G=tt.vertexShader,J=tt.fragmentShader}else G=y.vertexShader,J=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const ae=t.getRenderTarget(),ie=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,ve=!!y.map,U=!!y.matcap,rt=!!L,Me=!!y.aoMap,Re=!!y.lightMap,Ae=!!y.bumpMap,Xe=!!y.normalMap,ze=!!y.displacementMap,Ge=!!y.emissiveMap,xt=!!y.metalnessMap,R=!!y.roughnessMap,E=y.anisotropy>0,$=y.clearcoat>0,Z=y.iridescence>0,re=y.sheen>0,ee=y.transmission>0,De=E&&!!y.anisotropyMap,be=$&&!!y.clearcoatMap,ce=$&&!!y.clearcoatNormalMap,fe=$&&!!y.clearcoatRoughnessMap,ke=Z&&!!y.iridescenceMap,se=Z&&!!y.iridescenceThicknessMap,St=re&&!!y.sheenColorMap,Ve=re&&!!y.sheenRoughnessMap,we=!!y.specularMap,_e=!!y.specularColorMap,ye=!!y.specularIntensityMap,$e=ee&&!!y.transmissionMap,Ie=ee&&!!y.thicknessMap,ct=!!y.gradientMap,D=!!y.alphaMap,de=y.alphaTest>0,W=!!y.alphaHash,oe=!!y.extensions;let pe=Ki;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pe=t.toneMapping);const je={isWebGL2:f,shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:J,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Pe,instancing:ie,instancingColor:ie&&N.instanceColor!==null,instancingMorph:ie&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:or,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:U,envMap:rt,envMapMode:rt&&L.mapping,envMapCubeUVHeight:k,aoMap:Me,lightMap:Re,bumpMap:Ae,normalMap:Xe,displacementMap:g&&ze,emissiveMap:Ge,normalMapObjectSpace:Xe&&y.normalMapType===ZS,normalMapTangentSpace:Xe&&y.normalMapType===wv,metalnessMap:xt,roughnessMap:R,anisotropy:E,anisotropyMap:De,clearcoat:$,clearcoatMap:be,clearcoatNormalMap:ce,clearcoatRoughnessMap:fe,iridescence:Z,iridescenceMap:ke,iridescenceThicknessMap:se,sheen:re,sheenColorMap:St,sheenRoughnessMap:Ve,specularMap:we,specularColorMap:_e,specularIntensityMap:ye,transmission:ee,transmissionMap:$e,thicknessMap:Ie,gradientMap:ct,opaque:y.transparent===!1&&y.blending===ws&&y.alphaToCoverage===!1,alphaMap:D,alphaTest:de,alphaHash:W,combine:y.combine,mapUv:ve&&m(y.map.channel),aoMapUv:Me&&m(y.aoMap.channel),lightMapUv:Re&&m(y.lightMap.channel),bumpMapUv:Ae&&m(y.bumpMap.channel),normalMapUv:Xe&&m(y.normalMap.channel),displacementMapUv:ze&&m(y.displacementMap.channel),emissiveMapUv:Ge&&m(y.emissiveMap.channel),metalnessMapUv:xt&&m(y.metalnessMap.channel),roughnessMapUv:R&&m(y.roughnessMap.channel),anisotropyMapUv:De&&m(y.anisotropyMap.channel),clearcoatMapUv:be&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(y.sheenRoughnessMap.channel),specularMapUv:we&&m(y.specularMap.channel),specularColorMapUv:_e&&m(y.specularColorMap.channel),specularIntensityMapUv:ye&&m(y.specularIntensityMap.channel),transmissionMapUv:$e&&m(y.transmissionMap.channel),thicknessMapUv:Ie&&m(y.thicknessMap.channel),alphaMapUv:D&&m(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Xe||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(ve||D),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:pe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jt,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function x(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Q in y.defines)C.push(Q),C.push(y.defines[Q]);return y.isRawShaderMaterial===!1&&(v(C,y),S(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function v(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function S(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),y.push(a.mask)}function A(y){const C=M[y.type];let Q;if(C){const K=ei[C];Q=w1.clone(K.uniforms)}else Q=y.uniforms;return Q}function w(y,C){let Q;for(let K=0,N=d.length;K<N;K++){const q=d[K];if(q.cacheKey===C){Q=q,++Q.usedTimes;break}}return Q===void 0&&(Q=new BT(t,C,y,s),d.push(Q)),Q}function T(y){if(--y.usedTimes===0){const C=d.indexOf(y);d[C]=d[d.length-1],d.pop(),y.destroy()}}function I(y){l.remove(y)}function O(){l.dispose()}return{getParameters:u,getProgramCacheKey:x,getUniforms:A,acquireProgram:w,releaseProgram:T,releaseShaderCache:I,programs:d,dispose:O}}function jT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,_,M,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:M,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=M,u.group=m),e++,u}function a(f,h,g,_,M,m){const u=o(f,h,g,_,M,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,_,M,m){const u=o(f,h,g,_,M,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||XT),i.length>1&&i.sort(h||Am),r.length>1&&r.sort(h||Am)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function $T(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bm,t.set(i,[o])):r>=s.length?(o=new bm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ze};break;case"SpotLight":n={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZT=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QT(t,e){const n=new qT,i=YT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new H);const s=new H,o=new mt,a=new mt;function l(d,f){let h=0,g=0,_=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let M=0,m=0,u=0,x=0,v=0,S=0,A=0,w=0,T=0,I=0,O=0;d.sort(KT);const y=f===!0?Math.PI:1;for(let Q=0,K=d.length;Q<K;Q++){const N=d[Q],q=N.color,P=N.intensity,B=N.distance,L=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=q.r*P*y,g+=q.g*P*y,_+=q.b*P*y;else if(N.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(N.sh.coefficients[k],P);O++}else if(N.isDirectionalLight){const k=n.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const z=N.shadow,Y=i.get(N);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=L,r.directionalShadowMatrix[M]=N.shadow.matrix,S++}r.directional[M]=k,M++}else if(N.isSpotLight){const k=n.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(q).multiplyScalar(P*y),k.distance=B,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,r.spot[u]=k;const z=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,z.updateMatrices(N),N.castShadow&&I++),r.spotLightMatrix[u]=z.matrix,N.castShadow){const Y=i.get(N);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,r.spotShadow[u]=Y,r.spotShadowMap[u]=L,w++}u++}else if(N.isRectAreaLight){const k=n.get(N);k.color.copy(q).multiplyScalar(P),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=k,x++}else if(N.isPointLight){const k=n.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*y),k.distance=N.distance,k.decay=N.decay,N.castShadow){const z=N.shadow,Y=i.get(N);Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,r.pointShadow[m]=Y,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=N.shadow.matrix,A++}r.point[m]=k,m++}else if(N.isHemisphereLight){const k=n.get(N);k.skyColor.copy(N.color).multiplyScalar(P*y),k.groundColor.copy(N.groundColor).multiplyScalar(P*y),r.hemi[v]=k,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==M||C.pointLength!==m||C.spotLength!==u||C.rectAreaLength!==x||C.hemiLength!==v||C.numDirectionalShadows!==S||C.numPointShadows!==A||C.numSpotShadows!==w||C.numSpotMaps!==T||C.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=u,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=w+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,C.directionalLength=M,C.pointLength=m,C.spotLength=u,C.rectAreaLength=x,C.hemiLength=v,C.numDirectionalShadows=S,C.numPointShadows=A,C.numSpotShadows=w,C.numSpotMaps=T,C.numLightProbes=O,r.version=ZT++)}function c(d,f){let h=0,g=0,_=0,M=0,m=0;const u=f.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const S=d[x];if(S.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),h++}else if(S.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Cm(t,e){const n=new QT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function JT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Cm(t,e),n.set(s,[l])):o>=a.length?(l=new Cm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class e2 extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t2 extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r2(t,e,n){let i=new If;const r=new He,s=new He,o=new Dt,a=new e2({depthPacking:YS}),l=new t2,c={},d=n.maxTextureSize,f={[tr]:fn,[fn]:tr,[Jt]:Jt},h=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:n2,fragmentShader:i2}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Nt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let u=this.type;this.render=function(w,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const O=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Zi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const K=u!==pi&&this.type===pi,N=u===pi&&this.type!==pi;for(let q=0,P=w.length;q<P;q++){const B=w[q],L=B.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const k=L.getFrameExtents();if(r.multiply(k),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,L.mapSize.y=s.y)),L.map===null||K===!0||N===!0){const Y=this.type!==pi?{minFilter:Qt,magFilter:Qt}:{};L.map!==null&&L.map.dispose(),L.map=new Dr(r.x,r.y,Y),L.map.texture.name=B.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const z=L.getViewportCount();for(let Y=0;Y<z;Y++){const te=L.getViewport(Y);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),Q.viewport(o),L.updateMatrices(B,Y),i=L.getFrustum(),S(T,I,L.camera,B,this.type)}L.isPointLightShadow!==!0&&this.type===pi&&x(L,I),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(O,y,C)};function x(w,T){const I=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(T,null,I,h,M,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(T,null,I,g,M,null)}function v(w,T,I,O){let y=null;const C=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=I.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Q=y.uuid,K=T.uuid;let N=c[Q];N===void 0&&(N={},c[Q]=N);let q=N[K];q===void 0&&(q=y.clone(),N[K]=q,T.addEventListener("dispose",A)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,O===pi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Q=t.properties.get(y);Q.light=I}return y}function S(w,T,I,O,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===pi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const K=e.update(w),N=w.material;if(Array.isArray(N)){const q=K.groups;for(let P=0,B=q.length;P<B;P++){const L=q[P],k=N[L.materialIndex];if(k&&k.visible){const z=v(w,k,O,y);w.onBeforeShadow(t,w,T,I,K,z,L),t.renderBufferDirect(I,null,K,z,w,L),w.onAfterShadow(t,w,T,I,K,z,L)}}}else if(N.visible){const q=v(w,N,O,y);w.onBeforeShadow(t,w,T,I,K,q,null),t.renderBufferDirect(I,null,K,q,w,null),w.onAfterShadow(t,w,T,I,K,q,null)}}const Q=w.children;for(let K=0,N=Q.length;K<N;K++)S(Q[K],T,I,O,y)}function A(w){w.target.removeEventListener("dispose",A);for(const I in c){const O=c[I],y=w.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}function s2(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const de=new Dt;let W=null;const oe=new Dt(0,0,0,0);return{setMask:function(pe){W!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),W=pe)},setLocked:function(pe){D=pe},setClear:function(pe,je,tt,Ut,An){An===!0&&(pe*=Ut,je*=Ut,tt*=Ut),de.set(pe,je,tt,Ut),oe.equals(de)===!1&&(t.clearColor(pe,je,tt,Ut),oe.copy(de))},reset:function(){D=!1,W=null,oe.set(-1,0,0,0)}}}function s(){let D=!1,de=null,W=null,oe=null;return{setTest:function(pe){pe?ie(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(pe){de!==pe&&!D&&(t.depthMask(pe),de=pe)},setFunc:function(pe){if(W!==pe){switch(pe){case TS:t.depthFunc(t.NEVER);break;case AS:t.depthFunc(t.ALWAYS);break;case bS:t.depthFunc(t.LESS);break;case Cl:t.depthFunc(t.LEQUAL);break;case CS:t.depthFunc(t.EQUAL);break;case RS:t.depthFunc(t.GEQUAL);break;case PS:t.depthFunc(t.GREATER);break;case LS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=pe}},setLocked:function(pe){D=pe},setClear:function(pe){oe!==pe&&(t.clearDepth(pe),oe=pe)},reset:function(){D=!1,de=null,W=null,oe=null}}}function o(){let D=!1,de=null,W=null,oe=null,pe=null,je=null,tt=null,Ut=null,An=null;return{setTest:function(nt){D||(nt?ie(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(nt){de!==nt&&!D&&(t.stencilMask(nt),de=nt)},setFunc:function(nt,Yt,Zn){(W!==nt||oe!==Yt||pe!==Zn)&&(t.stencilFunc(nt,Yt,Zn),W=nt,oe=Yt,pe=Zn)},setOp:function(nt,Yt,Zn){(je!==nt||tt!==Yt||Ut!==Zn)&&(t.stencilOp(nt,Yt,Zn),je=nt,tt=Yt,Ut=Zn)},setLocked:function(nt){D=nt},setClear:function(nt){An!==nt&&(t.clearStencil(nt),An=nt)},reset:function(){D=!1,de=null,W=null,oe=null,pe=null,je=null,tt=null,Ut=null,An=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},g={},_=new WeakMap,M=[],m=null,u=!1,x=null,v=null,S=null,A=null,w=null,T=null,I=null,O=new Ze(0,0,0),y=0,C=!1,Q=null,K=null,N=null,q=null,P=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),L=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),L=k>=2);let Y=null,te={};const xe=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),J=new Dt().fromArray(xe),ue=new Dt().fromArray(G);function Ee(D,de,W,oe){const pe=new Uint8Array(4),je=t.createTexture();t.bindTexture(D,je),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<W;tt++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(de+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return je}const ae={};ae[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ie(t.DEPTH_TEST),l.setFunc(Cl),ze(!1),Ge(ap),ie(t.CULL_FACE),Ae(Zi);function ie(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Pe(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function ve(D,de){return g[D]!==de?(t.bindFramebuffer(D,de),g[D]=de,i&&(D===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function U(D,de){let W=M,oe=!1;if(D){W=_.get(de),W===void 0&&(W=[],_.set(de,W));const pe=D.textures;if(W.length!==pe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let je=0,tt=pe.length;je<tt;je++)W[je]=t.COLOR_ATTACHMENT0+je;W.length=pe.length,oe=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,oe=!0);if(oe)if(n.isWebGL2)t.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function rt(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Me={[_r]:t.FUNC_ADD,[uS]:t.FUNC_SUBTRACT,[dS]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[dp]=t.MIN,Me[fp]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[dp]=D.MIN_EXT,Me[fp]=D.MAX_EXT)}const Re={[fS]:t.ZERO,[hS]:t.ONE,[pS]:t.SRC_COLOR,[fd]:t.SRC_ALPHA,[yS]:t.SRC_ALPHA_SATURATE,[xS]:t.DST_COLOR,[gS]:t.DST_ALPHA,[mS]:t.ONE_MINUS_SRC_COLOR,[hd]:t.ONE_MINUS_SRC_ALPHA,[_S]:t.ONE_MINUS_DST_COLOR,[vS]:t.ONE_MINUS_DST_ALPHA,[SS]:t.CONSTANT_COLOR,[MS]:t.ONE_MINUS_CONSTANT_COLOR,[ES]:t.CONSTANT_ALPHA,[wS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(D,de,W,oe,pe,je,tt,Ut,An,nt){if(D===Zi){u===!0&&(Pe(t.BLEND),u=!1);return}if(u===!1&&(ie(t.BLEND),u=!0),D!==cS){if(D!==x||nt!==C){if((v!==_r||w!==_r)&&(t.blendEquation(t.FUNC_ADD),v=_r,w=_r),nt)switch(D){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lp:t.blendFunc(t.ONE,t.ONE);break;case cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case cp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case up:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,A=null,T=null,I=null,O.set(0,0,0),y=0,x=D,C=nt}return}pe=pe||de,je=je||W,tt=tt||oe,(de!==v||pe!==w)&&(t.blendEquationSeparate(Me[de],Me[pe]),v=de,w=pe),(W!==S||oe!==A||je!==T||tt!==I)&&(t.blendFuncSeparate(Re[W],Re[oe],Re[je],Re[tt]),S=W,A=oe,T=je,I=tt),(Ut.equals(O)===!1||An!==y)&&(t.blendColor(Ut.r,Ut.g,Ut.b,An),O.copy(Ut),y=An),x=D,C=!1}function Xe(D,de){D.side===Jt?Pe(t.CULL_FACE):ie(t.CULL_FACE);let W=D.side===fn;de&&(W=!W),ze(W),D.blending===ws&&D.transparent===!1?Ae(Zi):Ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const oe=D.stencilWrite;c.setTest(oe),oe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){Q!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),Q=D)}function Ge(D){D!==oS?(ie(t.CULL_FACE),D!==K&&(D===ap?t.cullFace(t.BACK):D===aS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),K=D}function xt(D){D!==N&&(L&&t.lineWidth(D),N=D)}function R(D,de,W){D?(ie(t.POLYGON_OFFSET_FILL),(q!==de||P!==W)&&(t.polygonOffset(de,W),q=de,P=W)):Pe(t.POLYGON_OFFSET_FILL)}function E(D){D?ie(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function $(D){D===void 0&&(D=t.TEXTURE0+B-1),Y!==D&&(t.activeTexture(D),Y=D)}function Z(D,de,W){W===void 0&&(Y===null?W=t.TEXTURE0+B-1:W=Y);let oe=te[W];oe===void 0&&(oe={type:void 0,texture:void 0},te[W]=oe),(oe.type!==D||oe.texture!==de)&&(Y!==W&&(t.activeTexture(W),Y=W),t.bindTexture(D,de||ae[D]),oe.type=D,oe.texture=de)}function re(){const D=te[Y];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){J.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function ye(D){ue.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function $e(D,de){let W=f.get(de);W===void 0&&(W=new WeakMap,f.set(de,W));let oe=W.get(D);oe===void 0&&(oe=t.getUniformBlockIndex(de,D.name),W.set(D,oe))}function Ie(D,de){const oe=f.get(de).get(D);d.get(de)!==oe&&(t.uniformBlockBinding(de,oe,D.__bindingPointIndex),d.set(de,oe))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Y=null,te={},g={},_=new WeakMap,M=[],m=null,u=!1,x=null,v=null,S=null,A=null,w=null,T=null,I=null,O=new Ze(0,0,0),y=0,C=!1,Q=null,K=null,N=null,q=null,P=null,J.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ie,disable:Pe,bindFramebuffer:ve,drawBuffers:U,useProgram:rt,setBlending:Ae,setMaterial:Xe,setFlipSided:ze,setCullFace:Ge,setLineWidth:xt,setPolygonOffset:R,setScissorTest:E,activeTexture:$,bindTexture:Z,unbindTexture:re,compressedTexImage2D:ee,compressedTexImage3D:De,texImage2D:Ve,texImage3D:we,updateUBOMapping:$e,uniformBlockBinding:Ie,texStorage2D:se,texStorage3D:St,texSubImage2D:be,texSubImage3D:ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ke,scissor:_e,viewport:ye,reset:ct}}function o2(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new He,f=new WeakMap;let h;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,E){return _?new OffscreenCanvas(R,E):Nl("canvas")}function m(R,E,$,Z){let re=1;const ee=xt(R);if((ee.width>Z||ee.height>Z)&&(re=Z/Math.max(ee.width,ee.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const De=E?yd:Math.floor,be=De(re*ee.width),ce=De(re*ee.height);h===void 0&&(h=M(be,ce));const fe=$?M(be,ce):h;return fe.width=be,fe.height=ce,fe.getContext("2d").drawImage(R,0,0,be,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+be+"x"+ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function u(R){const E=xt(R);return Gp(E.width)&&Gp(E.height)}function x(R){return a?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==Qt&&R.minFilter!==sn}function v(R,E){return R.generateMipmaps&&E&&R.minFilter!==Qt&&R.minFilter!==sn}function S(R){t.generateMipmap(R)}function A(R,E,$,Z,re=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=E;if(E===t.RED&&($===t.FLOAT&&(ee=t.R32F),$===t.HALF_FLOAT&&(ee=t.R16F),$===t.UNSIGNED_BYTE&&(ee=t.R8)),E===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(ee=t.R8UI),$===t.UNSIGNED_SHORT&&(ee=t.R16UI),$===t.UNSIGNED_INT&&(ee=t.R32UI),$===t.BYTE&&(ee=t.R8I),$===t.SHORT&&(ee=t.R16I),$===t.INT&&(ee=t.R32I)),E===t.RG&&($===t.FLOAT&&(ee=t.RG32F),$===t.HALF_FLOAT&&(ee=t.RG16F),$===t.UNSIGNED_BYTE&&(ee=t.RG8)),E===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(ee=t.RG8UI),$===t.UNSIGNED_SHORT&&(ee=t.RG16UI),$===t.UNSIGNED_INT&&(ee=t.RG32UI),$===t.BYTE&&(ee=t.RG8I),$===t.SHORT&&(ee=t.RG16I),$===t.INT&&(ee=t.RG32I)),E===t.RGBA){const De=re?Rl:Je.getTransfer(Z);$===t.FLOAT&&(ee=t.RGBA32F),$===t.HALF_FLOAT&&(ee=t.RGBA16F),$===t.UNSIGNED_BYTE&&(ee=De===at?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(R,E,$){return v(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===Qt||R===hp||R===Js?t.NEAREST:t.LINEAR}function I(R){const E=R.target;E.removeEventListener("dispose",I),y(E),E.isVideoTexture&&f.delete(E)}function O(R){const E=R.target;E.removeEventListener("dispose",O),Q(E)}function y(R){const E=i.get(R);if(E.__webglInit===void 0)return;const $=R.source,Z=g.get($);if(Z){const re=Z[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&C(R),Object.keys(Z).length===0&&g.delete($)}i.remove(R)}function C(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const $=R.source,Z=g.get($);delete Z[E.__cacheKey],o.memory.textures--}function Q(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let re=0;re<E.__webglFramebuffer[Z].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[Z][re]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=R.textures;for(let Z=0,re=$.length;Z<re;Z++){const ee=i.get($[Z]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove($[Z])}i.remove(R)}let K=0;function N(){K=0}function q(){const R=K;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),K+=1,R}function P(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function B(R,E){const $=i.get(R);if(R.isVideoTexture&&ze(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue($,R,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function L(R,E){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ue($,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function k(R,E){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ue($,R,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function z(R,E){const $=i.get(R);if(R.version>0&&$.__version!==R.version){Ee($,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const Y={[gd]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[vd]:t.MIRRORED_REPEAT},te={[Qt]:t.NEAREST,[hp]:t.NEAREST_MIPMAP_NEAREST,[Js]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},xe={[KS]:t.NEVER,[i1]:t.ALWAYS,[QS]:t.LESS,[Tv]:t.LEQUAL,[JS]:t.EQUAL,[n1]:t.GEQUAL,[e1]:t.GREATER,[t1]:t.NOTEQUAL};function G(R,E,$){if(E.type===vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===Oc||E.magFilter===Js||E.magFilter===wr||E.minFilter===sn||E.minFilter===Oc||E.minFilter===Js||E.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),$?(t.texParameteri(R,t.TEXTURE_WRAP_S,Y[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Y[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Y[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Wn||E.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==Qt&&E.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qt||E.minFilter!==Js&&E.minFilter!==wr||E.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Bo&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function J(R,E){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",I));const Z=E.source;let re=g.get(Z);re===void 0&&(re={},g.set(Z,re));const ee=P(E);if(ee!==R.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),re[ee].usedTimes++;const De=re[R.__cacheKey];De!==void 0&&(re[R.__cacheKey].usedTimes--,De.usedTimes===0&&C(E)),R.__cacheKey=ee,R.__webglTexture=re[ee].texture}return $}function ue(R,E,$){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const re=J(R,E),ee=E.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+$);const De=i.get(ee);if(ee.version!==De.__version||re===!0){n.activeTexture(t.TEXTURE0+$);const be=Je.getPrimaries(Je.workingColorSpace),ce=E.colorSpace===Oi?null:Je.getPrimaries(E.colorSpace),fe=E.colorSpace===Oi||be===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ke=x(E)&&u(E.image)===!1;let se=m(E.image,ke,!1,r.maxTextureSize);se=Ge(E,se);const St=u(se)||a,Ve=s.convert(E.format,E.colorSpace);let we=s.convert(E.type),_e=A(E.internalFormat,Ve,we,E.colorSpace,E.isVideoTexture);G(Z,E,St);let ye;const $e=E.mipmaps,Ie=a&&E.isVideoTexture!==!0&&_e!==Ev,ct=De.__version===void 0||re===!0,D=ee.dataReady,de=w(E,se,St);if(E.isDepthTexture)_e=t.DEPTH_COMPONENT,a?E.type===vi?_e=t.DEPTH_COMPONENT32F:E.type===Hi?_e=t.DEPTH_COMPONENT24:E.type===br?_e=t.DEPTH24_STENCIL8:_e=t.DEPTH_COMPONENT16:E.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Cr&&_e===t.DEPTH_COMPONENT&&E.type!==Cf&&E.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hi,we=s.convert(E.type)),E.format===ks&&_e===t.DEPTH_COMPONENT&&(_e=t.DEPTH_STENCIL,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,we=s.convert(E.type))),ct&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,_e,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,_e,se.width,se.height,0,Ve,we,null));else if(E.isDataTexture)if($e.length>0&&St){Ie&&ct&&n.texStorage2D(t.TEXTURE_2D,de,_e,$e[0].width,$e[0].height);for(let W=0,oe=$e.length;W<oe;W++)ye=$e[W],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,Ve,we,ye.data):n.texImage2D(t.TEXTURE_2D,W,_e,ye.width,ye.height,0,Ve,we,ye.data);E.generateMipmaps=!1}else Ie?(ct&&n.texStorage2D(t.TEXTURE_2D,de,_e,se.width,se.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Ve,we,se.data)):n.texImage2D(t.TEXTURE_2D,0,_e,se.width,se.height,0,Ve,we,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,_e,$e[0].width,$e[0].height,se.depth);for(let W=0,oe=$e.length;W<oe;W++)ye=$e[W],E.format!==jn?Ve!==null?Ie?D&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,se.depth,Ve,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,_e,ye.width,ye.height,se.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,se.depth,Ve,we,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,_e,ye.width,ye.height,se.depth,0,Ve,we,ye.data)}else{Ie&&ct&&n.texStorage2D(t.TEXTURE_2D,de,_e,$e[0].width,$e[0].height);for(let W=0,oe=$e.length;W<oe;W++)ye=$e[W],E.format!==jn?Ve!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,Ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,W,_e,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,Ve,we,ye.data):n.texImage2D(t.TEXTURE_2D,W,_e,ye.width,ye.height,0,Ve,we,ye.data)}else if(E.isDataArrayTexture)Ie?(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,_e,se.width,se.height,se.depth),D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ve,we,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,se.width,se.height,se.depth,0,Ve,we,se.data);else if(E.isData3DTexture)Ie?(ct&&n.texStorage3D(t.TEXTURE_3D,de,_e,se.width,se.height,se.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ve,we,se.data)):n.texImage3D(t.TEXTURE_3D,0,_e,se.width,se.height,se.depth,0,Ve,we,se.data);else if(E.isFramebufferTexture){if(ct)if(Ie)n.texStorage2D(t.TEXTURE_2D,de,_e,se.width,se.height);else{let W=se.width,oe=se.height;for(let pe=0;pe<de;pe++)n.texImage2D(t.TEXTURE_2D,pe,_e,W,oe,0,Ve,we,null),W>>=1,oe>>=1}}else if($e.length>0&&St){if(Ie&&ct){const W=xt($e[0]);n.texStorage2D(t.TEXTURE_2D,de,_e,W.width,W.height)}for(let W=0,oe=$e.length;W<oe;W++)ye=$e[W],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ve,we,ye):n.texImage2D(t.TEXTURE_2D,W,_e,Ve,we,ye);E.generateMipmaps=!1}else if(Ie){if(ct){const W=xt(se);n.texStorage2D(t.TEXTURE_2D,de,_e,W.width,W.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,we,se)}else n.texImage2D(t.TEXTURE_2D,0,_e,Ve,we,se);v(E,St)&&S(Z),De.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ee(R,E,$){if(E.image.length!==6)return;const Z=J(R,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+$);const ee=i.get(re);if(re.version!==ee.__version||Z===!0){n.activeTexture(t.TEXTURE0+$);const De=Je.getPrimaries(Je.workingColorSpace),be=E.colorSpace===Oi?null:Je.getPrimaries(E.colorSpace),ce=E.colorSpace===Oi||De===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,se=[];for(let W=0;W<6;W++)!fe&&!ke?se[W]=m(E.image[W],!1,!0,r.maxCubemapSize):se[W]=ke?E.image[W].image:E.image[W],se[W]=Ge(E,se[W]);const St=se[0],Ve=u(St)||a,we=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),ye=A(E.internalFormat,we,_e,E.colorSpace),$e=a&&E.isVideoTexture!==!0,Ie=ee.__version===void 0||Z===!0,ct=re.dataReady;let D=w(E,St,Ve);G(t.TEXTURE_CUBE_MAP,E,Ve);let de;if(fe){$e&&Ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,ye,St.width,St.height);for(let W=0;W<6;W++){de=se[W].mipmaps;for(let oe=0;oe<de.length;oe++){const pe=de[oe];E.format!==jn?we!==null?$e?ct&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,0,0,pe.width,pe.height,we,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,0,0,pe.width,pe.height,we,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe,ye,pe.width,pe.height,0,we,_e,pe.data)}}}else{if(de=E.mipmaps,$e&&Ie){de.length>0&&D++;const W=xt(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,D,ye,W.width,W.height)}for(let W=0;W<6;W++)if(ke){$e?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,se[W].width,se[W].height,we,_e,se[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ye,se[W].width,se[W].height,0,we,_e,se[W].data);for(let oe=0;oe<de.length;oe++){const je=de[oe].image[W].image;$e?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,0,0,je.width,je.height,we,_e,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,ye,je.width,je.height,0,we,_e,je.data)}}else{$e?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,we,_e,se[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ye,we,_e,se[W]);for(let oe=0;oe<de.length;oe++){const pe=de[oe];$e?ct&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,0,0,we,_e,pe.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,oe+1,ye,we,_e,pe.image[W])}}}v(E,Ve)&&S(t.TEXTURE_CUBE_MAP),ee.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,$,Z,re,ee){const De=s.convert($.format,$.colorSpace),be=s.convert($.type),ce=A($.internalFormat,De,be,$.colorSpace);if(!i.get(E).__hasExternalTextures){const ke=Math.max(1,E.width>>ee),se=Math.max(1,E.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,ce,ke,se,E.depth,0,De,be,null):n.texImage2D(re,ee,ce,ke,se,0,De,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,re,i.get($).__webglTexture,0,Ae(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,re,i.get($).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let Z=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if($||Xe(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===vi?Z=t.DEPTH_COMPONENT32F:re.type===Hi&&(Z=t.DEPTH_COMPONENT24));const ee=Ae(E);Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,Z,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,Z,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const Z=Ae(E);$&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const Z=E.textures;for(let re=0;re<Z.length;re++){const ee=Z[re],De=s.convert(ee.format,ee.colorSpace),be=s.convert(ee.type),ce=A(ee.internalFormat,De,be,ee.colorSpace),fe=Ae(E);$&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ce,E.width,E.height):Xe(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ce,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const Z=i.get(E.depthTexture).__webglTexture,re=Ae(E);if(E.depthTexture.format===Cr)Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(E.depthTexture.format===ks)Xe(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ve(R){const E=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,R)}else if($){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]=t.createRenderbuffer(),ie(E.__webglDepthbuffer[Z],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ie(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(R,E,$){const Z=i.get(R);E!==void 0&&ae(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&ve(R)}function rt(R){const E=R.texture,$=i.get(R),Z=i.get(E);R.addEventListener("dispose",O);const re=R.textures,ee=R.isWebGLCubeRenderTarget===!0,De=re.length>1,be=u(R)||a;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,o.memory.textures++),ee){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let fe=0;fe<E.mipmaps.length;fe++)$.__webglFramebuffer[ce][fe]=t.createFramebuffer()}else $.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)$.__webglFramebuffer[ce]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(De)if(r.drawBuffers)for(let ce=0,fe=re.length;ce<fe;ce++){const ke=i.get(re[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Xe(R)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const fe=re[ce];$.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const ke=s.convert(fe.format,fe.colorSpace),se=s.convert(fe.type),St=A(fe.internalFormat,ke,se,fe.colorSpace,R.isXRRenderTarget===!0),Ve=Ae(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,St,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),ie($.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),G(t.TEXTURE_CUBE_MAP,E,be);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)ae($.__webglFramebuffer[ce][fe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else ae($.__webglFramebuffer[ce],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(E,be)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ce=0,fe=re.length;ce<fe;ce++){const ke=re[ce],se=i.get(ke);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),G(t.TEXTURE_2D,ke,be),ae($.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),v(ke,be)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,Z.__webglTexture),G(ce,E,be),a&&E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)ae($.__webglFramebuffer[fe],R,E,t.COLOR_ATTACHMENT0,ce,fe);else ae($.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,ce,0);v(E,be)&&S(ce),n.unbindTexture()}R.depthBuffer&&ve(R)}function Me(R){const E=u(R)||a,$=R.textures;for(let Z=0,re=$.length;Z<re;Z++){const ee=$[Z];if(v(ee,E)){const De=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ee).__webglTexture;n.bindTexture(De,be),S(De),n.unbindTexture()}}}function Re(R){if(a&&R.samples>0&&Xe(R)===!1){const E=R.textures,$=R.width,Z=R.height;let re=t.COLOR_BUFFER_BIT;const ee=[],De=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(R),ce=E.length>1;if(ce)for(let fe=0;fe<E.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){ee.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&ee.push(De);const ke=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ce&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[fe]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[De]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[De])),ce){const se=i.get(E[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,$,Z,0,0,$,Z,re,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<E.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ke=i.get(E[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function Ae(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(R){const E=o.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function Ge(R,E){const $=R.colorSpace,Z=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===xd||$!==or&&$!==Oi&&(Je.getTransfer($)===at?a===!1?e.has("EXT_sRGB")===!0&&Z===jn?(R.format=xd,R.minFilter=sn,R.generateMipmaps=!1):E=bv.sRGBToLinear(E):(Z!==jn||re!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=L,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=U,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Xe}function a2(t,e,n){const i=n.isWebGL2;function r(s,o=Oi){let a;const l=Je.getTransfer(o);if(s===Qi)return t.UNSIGNED_BYTE;if(s===xv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===_v)return t.UNSIGNED_SHORT_5_5_5_1;if(s===BS)return t.BYTE;if(s===HS)return t.SHORT;if(s===Cf)return t.UNSIGNED_SHORT;if(s===vv)return t.INT;if(s===Hi)return t.UNSIGNED_INT;if(s===vi)return t.FLOAT;if(s===Bo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===GS)return t.ALPHA;if(s===jn)return t.RGBA;if(s===VS)return t.LUMINANCE;if(s===WS)return t.LUMINANCE_ALPHA;if(s===Cr)return t.DEPTH_COMPONENT;if(s===ks)return t.DEPTH_STENCIL;if(s===xd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jS)return t.RED;if(s===yv)return t.RED_INTEGER;if(s===XS)return t.RG;if(s===Sv)return t.RG_INTEGER;if(s===Mv)return t.RGBA_INTEGER;if(s===zc||s===Bc||s===Hc||s===Gc)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pp||s===mp||s===gp||s===vp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===pp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ev)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xp||s===_p)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xp)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_p)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yp||s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===Ap||s===bp||s===Cp||s===Rp||s===Pp||s===Lp||s===Ip||s===Np)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ep)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ap)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Np)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vc||s===Dp||s===kp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vc)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$S||s===Up||s===Fp||s===Op)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Vc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Up)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Op)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class l2 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c2={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const u2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new nr({extensions:{fragDepth:!0},vertexShader:u2,fragmentShader:d2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Nt(new ic(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class h2 extends Hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,_=null;const M=new f2,m=n.getContextAttributes();let u=null,x=null;const v=[],S=[],A=new He;let w=null;const T=new _n;T.layers.enable(1),T.viewport=new Dt;const I=new _n;I.layers.enable(2),I.viewport=new Dt;const O=[T,I],y=new l2;y.layers.enable(1),y.layers.enable(2);let C=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=v[G];return J===void 0&&(J=new gu,v[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=v[G];return J===void 0&&(J=new gu,v[G]=J),J.getGripSpace()},this.getHand=function(G){let J=v[G];return J===void 0&&(J=new gu,v[G]=J),J.getHandSpace()};function K(G){const J=S.indexOf(G.inputSource);if(J===-1)return;const ue=v[J];ue!==void 0&&(ue.update(G.inputSource,G.frame,c||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",q);for(let G=0;G<v.length;G++){const J=S[G];J!==null&&(S[G]=null,v[G].disconnect(J))}C=null,Q=null,M.reset(),e.setRenderTarget(u),g=null,h=null,f=null,r=null,x=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",N),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Dr(g.framebufferWidth,g.framebufferHeight,{format:jn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ue=null,Ee=null;m.depth&&(Ee=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?ks:Cr,ue=m.stencil?br:Hi);const ae={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Dr(h.textureWidth,h.textureHeight,{format:jn,type:Qi,depthTexture:new Ov(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ie=e.properties.get(x);ie.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(G){for(let J=0;J<G.removed.length;J++){const ue=G.removed[J],Ee=S.indexOf(ue);Ee>=0&&(S[Ee]=null,v[Ee].disconnect(ue))}for(let J=0;J<G.added.length;J++){const ue=G.added[J];let Ee=S.indexOf(ue);if(Ee===-1){for(let ie=0;ie<v.length;ie++)if(ie>=S.length){S.push(ue),Ee=ie;break}else if(S[ie]===null){S[ie]=ue,Ee=ie;break}if(Ee===-1)break}const ae=v[Ee];ae&&ae.connect(ue)}}const P=new H,B=new H;function L(G,J,ue){P.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(ue.matrixWorld);const Ee=P.distanceTo(B),ae=J.projectionMatrix.elements,ie=ue.projectionMatrix.elements,Pe=ae[14]/(ae[10]-1),ve=ae[14]/(ae[10]+1),U=(ae[9]+1)/ae[5],rt=(ae[9]-1)/ae[5],Me=(ae[8]-1)/ae[0],Re=(ie[8]+1)/ie[0],Ae=Pe*Me,Xe=Pe*Re,ze=Ee/(-Me+Re),Ge=ze*-Me;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ge),G.translateZ(ze),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const xt=Pe+ze,R=ve+ze,E=Ae-Ge,$=Xe+(Ee-Ge),Z=U*ve/R*xt,re=rt*ve/R*xt;G.projectionMatrix.makePerspective(E,$,Z,re,xt,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function k(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;M.texture!==null&&(G.near=M.depthNear,G.far=M.depthFar),y.near=I.near=T.near=G.near,y.far=I.far=T.far=G.far,(C!==y.near||Q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,Q=y.far,T.near=C,T.far=Q,I.near=C,I.far=Q,T.updateProjectionMatrix(),I.updateProjectionMatrix(),G.updateProjectionMatrix());const J=G.parent,ue=y.cameras;k(y,J);for(let Ee=0;Ee<ue.length;Ee++)k(ue[Ee],J);ue.length===2?L(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),z(G,y,J)};function z(G,J,ue){ue===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=_d*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return M.texture!==null};let Y=null;function te(G,J){if(d=J.getViewerPose(c||o),_=J,d!==null){const ue=d.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let Ee=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let ie=0;ie<ue.length;ie++){const Pe=ue[ie];let ve=null;if(g!==null)ve=g.getViewport(Pe);else{const rt=f.getViewSubImage(h,Pe);ve=rt.viewport,ie===0&&(e.setRenderTargetTextures(x,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(x))}let U=O[ie];U===void 0&&(U=new _n,U.layers.enable(ie),U.viewport=new Dt,O[ie]=U),U.matrix.fromArray(Pe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Pe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ve.x,ve.y,ve.width,ve.height),ie===0&&(y.matrix.copy(U.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(U)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ie=f.getDepthInformation(ue[0]);ie&&ie.isValid&&ie.texture&&M.init(e,ie,r.renderState)}}for(let ue=0;ue<v.length;ue++){const Ee=S[ue],ae=v[ue];Ee!==null&&ae!==void 0&&ae.update(Ee,J,c||o)}M.render(e,y),Y&&Y(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const xe=new Uv;xe.setAnimationLoop(te),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}const pr=new ai,p2=new mt;function m2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Nv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&g(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),M(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===fn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===fn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u),v=x.envMap,S=x.envMapRotation;if(v&&(m.envMap.value=v,pr.copy(S),pr.x*=-1,pr.y*=-1,pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(p2.makeRotationFromEuler(pr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*A,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function g2(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(_(x),S=d(x),r[x.id]=S,x.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(x,A);const w=e.render.frame;s[x.id]!==w&&(h(x),s[x.id]=w)}function d(x){const v=f();x.__bindingPointIndex=v;const S=t.createBuffer(),A=x.__size,w=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],S=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const I=Array.isArray(S[w])?S[w]:[S[w]];for(let O=0,y=I.length;O<y;O++){const C=I[O];if(g(C,w,O,A)===!0){const Q=C.__offset,K=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let q=0;q<K.length;q++){const P=K[q],B=M(P);typeof P=="number"||typeof P=="boolean"?(C.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,Q+N,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=0,C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=0,C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=0):(P.toArray(C.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,S,A){const w=x.value,T=v+"_"+S;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const I=A[T];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[T]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(x){const v=x.uniforms;let S=0;const A=16;for(let T=0,I=v.length;T<I;T++){const O=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,C=O.length;y<C;y++){const Q=O[y],K=Array.isArray(Q.value)?Q.value:[Q.value];for(let N=0,q=K.length;N<q;N++){const P=K[N],B=M(P),L=S%A;L!==0&&A-L<B.boundary&&(S+=A-L),Q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=S,S+=B.storage}}}const w=S%A;return w>0&&(S+=A-w),x.__size=S,x.__cache={},this}function M(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Df{constructor(e={}){const{canvas:n=s1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this._useLegacyLights=!1,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let S=!1,A=0,w=0,T=null,I=-1,O=null;const y=new Dt,C=new Dt;let Q=null;const K=new Ze(0);let N=0,q=n.width,P=n.height,B=1,L=null,k=null;const z=new Dt(0,0,q,P),Y=new Dt(0,0,q,P);let te=!1;const xe=new If;let G=!1,J=!1,ue=null;const Ee=new mt,ae=new He,ie=new H,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return T===null?B:1}let U=i;function rt(b,F){for(let j=0;j<b.length;j++){const X=b[j],V=n.getContext(X,F);if(V!==null)return V}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bf}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",de,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&F.shift(),U=rt(F,b),U===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,Re,Ae,Xe,ze,Ge,xt,R,E,$,Z,re,ee,De,be,ce,fe,ke,se,St,Ve,we,_e,ye;function $e(){Me=new Mw(U),Re=new gw(U,Me,e),Me.init(Re),we=new a2(U,Me,Re),Ae=new s2(U,Me,Re),Xe=new Tw(U),ze=new jT,Ge=new o2(U,Me,Ae,ze,Re,we,Xe),xt=new xw(v),R=new Sw(v),E=new L1(U,Re),_e=new pw(U,Me,E,Re),$=new Ew(U,E,Xe,_e),Z=new Rw(U,$,E,Xe),se=new Cw(U,Re,Ge),ce=new vw(ze),re=new WT(v,xt,R,Me,Re,_e,ce),ee=new m2(v,ze),De=new $T,be=new JT(Me,Re),ke=new hw(v,xt,R,Ae,Z,h,l),fe=new r2(v,Z,Re),ye=new g2(U,Xe,Re,Ae),St=new mw(U,Me,Xe,Re),Ve=new ww(U,Me,Xe,Re),Xe.programs=re.programs,v.capabilities=Re,v.extensions=Me,v.properties=ze,v.renderLists=De,v.shadowMap=fe,v.state=Ae,v.info=Xe}$e();const Ie=new h2(v,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(q,P,!1))},this.getSize=function(b){return b.set(q,P)},this.setSize=function(b,F,j=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,P=F,n.width=Math.floor(b*B),n.height=Math.floor(F*B),j===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(q*B,P*B).floor()},this.setDrawingBufferSize=function(b,F,j){q=b,P=F,B=j,n.width=Math.floor(b*j),n.height=Math.floor(F*j),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,F,j,X){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,F,j,X),Ae.viewport(y.copy(z).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Y)},this.setScissor=function(b,F,j,X){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,F,j,X),Ae.scissor(C.copy(Y).multiplyScalar(B).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){Ae.setScissorTest(te=b)},this.setOpaqueSort=function(b){L=b},this.setTransparentSort=function(b){k=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(b=!0,F=!0,j=!0){let X=0;if(b){let V=!1;if(T!==null){const me=T.texture.format;V=me===Mv||me===Sv||me===yv}if(V){const me=T.texture.type,Se=me===Qi||me===Hi||me===Cf||me===br||me===xv||me===_v,Te=ke.getClearColor(),Ce=ke.getClearAlpha(),Be=Te.r,Le=Te.g,Ne=Te.b;Se?(g[0]=Be,g[1]=Le,g[2]=Ne,g[3]=Ce,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Be,_[1]=Le,_[2]=Ne,_[3]=Ce,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT),j&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",de,!1),De.dispose(),be.dispose(),ze.dispose(),xt.dispose(),R.dispose(),Z.dispose(),_e.dispose(),ye.dispose(),re.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",An),Ie.removeEventListener("sessionend",nt),ue&&(ue.dispose(),ue=null),Yt.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Xe.autoReset,F=fe.enabled,j=fe.autoUpdate,X=fe.needsUpdate,V=fe.type;$e(),Xe.autoReset=b,fe.enabled=F,fe.autoUpdate=j,fe.needsUpdate=X,fe.type=V}function de(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function W(b){const F=b.target;F.removeEventListener("dispose",W),oe(F)}function oe(b){pe(b),ze.remove(b)}function pe(b){const F=ze.get(b).programs;F!==void 0&&(F.forEach(function(j){re.releaseProgram(j)}),b.isShaderMaterial&&re.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,j,X,V,me){F===null&&(F=Pe);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Te=ux(b,F,j,X,V);Ae.setMaterial(X,Se);let Ce=j.index,Be=1;if(X.wireframe===!0){if(Ce=$.getWireframeAttribute(j),Ce===void 0)return;Be=2}const Le=j.drawRange,Ne=j.attributes.position;let _t=Le.start*Be,pn=(Le.start+Le.count)*Be;me!==null&&(_t=Math.max(_t,me.start*Be),pn=Math.min(pn,(me.start+me.count)*Be)),Ce!==null?(_t=Math.max(_t,0),pn=Math.min(pn,Ce.count)):Ne!=null&&(_t=Math.max(_t,0),pn=Math.min(pn,Ne.count));const Rt=pn-_t;if(Rt<0||Rt===1/0)return;_e.setup(V,X,Te,j,Ce);let li,ft=St;if(Ce!==null&&(li=E.get(Ce),ft=Ve,ft.setIndex(li)),V.isMesh)X.wireframe===!0?(Ae.setLineWidth(X.wireframeLinewidth*ve()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(V.isLine){let Ue=X.linewidth;Ue===void 0&&(Ue=1),Ae.setLineWidth(Ue*ve()),V.isLineSegments?ft.setMode(U.LINES):V.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else V.isPoints?ft.setMode(U.POINTS):V.isSprite&&ft.setMode(U.TRIANGLES);if(V.isBatchedMesh)ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ft.renderInstances(_t,Rt,V.count);else if(j.isInstancedBufferGeometry){const Ue=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,oc=Math.min(j.instanceCount,Ue);ft.renderInstances(_t,Rt,oc)}else ft.render(_t,Rt)};function je(b,F,j){b.transparent===!0&&b.side===Jt&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,ta(b,F,j),b.side=tr,b.needsUpdate=!0,ta(b,F,j),b.side=Jt):ta(b,F,j)}this.compile=function(b,F,j=null){j===null&&(j=b),m=be.get(j),m.init(),x.push(m),j.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),b!==j&&b.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(v._useLegacyLights);const X=new Set;return b.traverse(function(V){const me=V.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const Te=me[Se];je(Te,j,V),X.add(Te)}else je(me,j,V),X.add(me)}),x.pop(),m=null,X},this.compileAsync=function(b,F,j=null){const X=this.compile(b,F,j);return new Promise(V=>{function me(){if(X.forEach(function(Se){ze.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){V(b);return}setTimeout(me,10)}Me.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let tt=null;function Ut(b){tt&&tt(b)}function An(){Yt.stop()}function nt(){Yt.start()}const Yt=new Uv;Yt.setAnimationLoop(Ut),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(b){tt=b,Ie.setAnimationLoop(b),b===null?Yt.stop():Yt.start()},Ie.addEventListener("sessionstart",An),Ie.addEventListener("sessionend",nt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(F),F=Ie.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,T),m=be.get(b,x.length),m.init(),x.push(m),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),xe.setFromProjectionMatrix(Ee),J=this.localClippingEnabled,G=ce.init(this.clippingPlanes,J),M=De.get(b,u.length),M.init(),u.push(M),Zn(b,F,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(L,k),this.info.render.frame++,G===!0&&ce.beginShadows();const j=m.state.shadowsArray;if(fe.render(j,b,F),G===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1)&&ke.render(M,b),m.setupLights(v._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let V=0,me=X.length;V<me;V++){const Se=X[V];Wf(M,b,Se,Se.viewport)}}else Wf(M,b,F);T!==null&&(Ge.updateMultisampleRenderTarget(T),Ge.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,F),_e.resetDefaultState(),I=-1,O=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function Zn(b,F,j,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||xe.intersectsSprite(b)){X&&ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const Se=Z.update(b),Te=b.material;Te.visible&&M.push(b,Se,Te,j,ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||xe.intersectsObject(b))){const Se=Z.update(b),Te=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ie.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ie.copy(Se.boundingSphere.center)),ie.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const Ce=Se.groups;for(let Be=0,Le=Ce.length;Be<Le;Be++){const Ne=Ce[Be],_t=Te[Ne.materialIndex];_t&&_t.visible&&M.push(b,Se,_t,j,ie.z,Ne)}}else Te.visible&&M.push(b,Se,Te,j,ie.z,null)}}const me=b.children;for(let Se=0,Te=me.length;Se<Te;Se++)Zn(me[Se],F,j,X)}function Wf(b,F,j,X){const V=b.opaque,me=b.transmissive,Se=b.transparent;m.setupLightsView(j),G===!0&&ce.setGlobalState(v.clippingPlanes,j),me.length>0&&cx(V,me,F,j),X&&Ae.viewport(y.copy(X)),V.length>0&&ea(V,F,j),me.length>0&&ea(me,F,j),Se.length>0&&ea(Se,F,j),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function cx(b,F,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const me=Re.isWebGL2;ue===null&&(ue=new Dr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Bo:Qi,minFilter:wr,samples:me?4:0})),v.getDrawingBufferSize(ae),me?ue.setSize(ae.x,ae.y):ue.setSize(yd(ae.x),yd(ae.y));const Se=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(K),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=Ki,ea(b,j,X),Ge.updateMultisampleRenderTarget(ue),Ge.updateRenderTargetMipmap(ue);let Ce=!1;for(let Be=0,Le=F.length;Be<Le;Be++){const Ne=F[Be],_t=Ne.object,pn=Ne.geometry,Rt=Ne.material,li=Ne.group;if(Rt.side===Jt&&_t.layers.test(X.layers)){const ft=Rt.side;Rt.side=fn,Rt.needsUpdate=!0,jf(_t,j,X,pn,Rt,li),Rt.side=ft,Rt.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ge.updateMultisampleRenderTarget(ue),Ge.updateRenderTargetMipmap(ue)),v.setRenderTarget(Se),v.setClearColor(K,N),v.toneMapping=Te}function ea(b,F,j){const X=F.isScene===!0?F.overrideMaterial:null;for(let V=0,me=b.length;V<me;V++){const Se=b[V],Te=Se.object,Ce=Se.geometry,Be=X===null?Se.material:X,Le=Se.group;Te.layers.test(j.layers)&&jf(Te,F,j,Ce,Be,Le)}}function jf(b,F,j,X,V,me){b.onBeforeRender(v,F,j,X,V,me),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,F,j,X,b,me),V.transparent===!0&&V.side===Jt&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,v.renderBufferDirect(j,F,X,V,b,me),V.side=tr,V.needsUpdate=!0,v.renderBufferDirect(j,F,X,V,b,me),V.side=Jt):v.renderBufferDirect(j,F,X,V,b,me),b.onAfterRender(v,F,j,X,V,me)}function ta(b,F,j){F.isScene!==!0&&(F=Pe);const X=ze.get(b),V=m.state.lights,me=m.state.shadowsArray,Se=V.state.version,Te=re.getParameters(b,V.state,me,F,j),Ce=re.getProgramCacheKey(Te);let Be=X.programs;X.environment=b.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(b.isMeshStandardMaterial?R:xt).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",W),Be=new Map,X.programs=Be);let Le=Be.get(Ce);if(Le!==void 0){if(X.currentProgram===Le&&X.lightsStateVersion===Se)return $f(b,Te),Le}else Te.uniforms=re.getUniforms(b),b.onBuild(j,Te,v),b.onBeforeCompile(Te,v),Le=re.acquireProgram(Te,Ce),Be.set(Ce,Le),X.uniforms=Te.uniforms;const Ne=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),$f(b,Te),X.needsLights=fx(b),X.lightsStateVersion=Se,X.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMap.value=V.state.directionalShadowMap,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotShadowMap.value=V.state.spotShadowMap,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMap.value=V.state.pointShadowMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Le,X.uniformsList=null,Le}function Xf(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=il.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function $f(b,F){const j=ze.get(b);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function ux(b,F,j,X,V){F.isScene!==!0&&(F=Pe),Ge.resetTextureUnits();const me=F.fog,Se=X.isMeshStandardMaterial?F.environment:null,Te=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:or,Ce=(X.isMeshStandardMaterial?R:xt).get(X.envMap||Se),Be=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Le=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!j.morphAttributes.position,_t=!!j.morphAttributes.normal,pn=!!j.morphAttributes.color;let Rt=Ki;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const li=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=li!==void 0?li.length:0,Ue=ze.get(X),oc=m.state.lights;if(G===!0&&(J===!0||b!==O)){const bn=b===O&&X.id===I;ce.setState(X,b,bn)}let ut=!1;X.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==oc.state.version||Ue.outputColorSpace!==Te||V.isBatchedMesh&&Ue.batching===!1||!V.isBatchedMesh&&Ue.batching===!0||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||V.isInstancedMesh&&Ue.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ue.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ue.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ue.instancingMorph===!1&&V.morphTexture!==null||Ue.envMap!==Ce||X.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ce.numPlanes||Ue.numIntersection!==ce.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==Le||Ue.morphTargets!==Ne||Ue.morphNormals!==_t||Ue.morphColors!==pn||Ue.toneMapping!==Rt||Re.isWebGL2===!0&&Ue.morphTargetsCount!==ft)&&(ut=!0):(ut=!0,Ue.__version=X.version);let ar=Ue.currentProgram;ut===!0&&(ar=ta(X,F,V));let qf=!1,Ws=!1,ac=!1;const Ht=ar.getUniforms(),lr=Ue.uniforms;if(Ae.useProgram(ar.program)&&(qf=!0,Ws=!0,ac=!0),X.id!==I&&(I=X.id,Ws=!0),qf||O!==b){Ht.setValue(U,"projectionMatrix",b.projectionMatrix),Ht.setValue(U,"viewMatrix",b.matrixWorldInverse);const bn=Ht.map.cameraPosition;bn!==void 0&&bn.setValue(U,ie.setFromMatrixPosition(b.matrixWorld)),Re.logarithmicDepthBuffer&&Ht.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ht.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,Ws=!0,ac=!0)}if(V.isSkinnedMesh){Ht.setOptional(U,V,"bindMatrix"),Ht.setOptional(U,V,"bindMatrixInverse");const bn=V.skeleton;bn&&(Re.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Ht.setValue(U,"boneTexture",bn.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ht.setOptional(U,V,"batchingTexture"),Ht.setValue(U,"batchingTexture",V._matricesTexture,Ge));const lc=j.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0&&Re.isWebGL2===!0)&&se.update(V,j,ar),(Ws||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,Ht.setValue(U,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(lr.envMap.value=Ce,lr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Ws&&(Ht.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&dx(lr,ac),me&&X.fog===!0&&ee.refreshFogUniforms(lr,me),ee.refreshMaterialUniforms(lr,X,B,P,ue),il.upload(U,Xf(Ue),lr,Ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(il.upload(U,Xf(Ue),lr,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ht.setValue(U,"center",V.center),Ht.setValue(U,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(U,"normalMatrix",V.normalMatrix),Ht.setValue(U,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const bn=X.uniformsGroups;for(let cc=0,hx=bn.length;cc<hx;cc++)if(Re.isWebGL2){const Yf=bn[cc];ye.update(Yf,ar),ye.bind(Yf,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function dx(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function fx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,F,j){ze.get(b.texture).__webglTexture=F,ze.get(b.depthTexture).__webglTexture=j;const X=ze.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const j=ze.get(b);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,j=0){T=b,A=F,w=j;let X=!0,V=null,me=!1,Se=!1;if(b){const Ce=ze.get(b);Ce.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Ce.__webglFramebuffer===void 0?Ge.setupRenderTarget(b):Ce.__hasExternalTextures&&Ge.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const Le=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?V=Le[F][j]:V=Le[F],me=!0):Re.isWebGL2&&b.samples>0&&Ge.useMultisampledRTT(b)===!1?V=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[j]:V=Le,y.copy(b.viewport),C.copy(b.scissor),Q=b.scissorTest}else y.copy(z).multiplyScalar(B).floor(),C.copy(Y).multiplyScalar(B).floor(),Q=te;if(Ae.bindFramebuffer(U.FRAMEBUFFER,V)&&Re.drawBuffers&&X&&Ae.drawBuffers(b,V),Ae.viewport(y),Ae.scissor(C),Ae.setScissorTest(Q),me){const Ce=ze.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,j)}else if(Se){const Ce=ze.get(b.texture),Be=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,j||0,Be)}I=-1},this.readRenderTargetPixels=function(b,F,j,X,V,me,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){Ae.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ce=b.texture,Be=Ce.format,Le=Ce.type;if(Be!==jn&&we.convert(Be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Le===Bo&&(Me.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==Qi&&we.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===vi&&(Re.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&j>=0&&j<=b.height-V&&U.readPixels(F,j,X,V,we.convert(Be),we.convert(Le),me)}finally{const Ce=T!==null?ze.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,F,j=0){const X=Math.pow(2,-j),V=Math.floor(F.image.width*X),me=Math.floor(F.image.height*X);Ge.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,b.x,b.y,V,me),Ae.unbindTexture()},this.copyTextureToTexture=function(b,F,j,X=0){const V=F.image.width,me=F.image.height,Se=we.convert(j.format),Te=we.convert(j.type);Ge.setTexture2D(j,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,b.x,b.y,V,me,Se,Te,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,X,b.x,b.y,Se,Te,F.image),X===0&&j.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,F,j,X,V=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=Math.round(b.max.x-b.min.x),Se=Math.round(b.max.y-b.min.y),Te=b.max.z-b.min.z+1,Ce=we.convert(X.format),Be=we.convert(X.type);let Le;if(X.isData3DTexture)Ge.setTexture3D(X,0),Le=U.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Ge.setTexture2DArray(X,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const Ne=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=U.getParameter(U.UNPACK_SKIP_PIXELS),Rt=U.getParameter(U.UNPACK_SKIP_ROWS),li=U.getParameter(U.UNPACK_SKIP_IMAGES),ft=j.isCompressedTexture?j.mipmaps[V]:j.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,b.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,b.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Le,V,F.x,F.y,F.z,me,Se,Te,Ce,Be,ft.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(Le,V,F.x,F.y,F.z,me,Se,Te,Ce,ft.data):U.texSubImage3D(Le,V,F.x,F.y,F.z,me,Se,Te,Ce,Be,ft),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ne),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,li),V===0&&X.generateMipmaps&&U.generateMipmap(Le),Ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ge.setTextureCube(b,0):b.isData3DTexture?Ge.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ge.setTexture2DArray(b,0):Ge.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,Ae.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Rf?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===tc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class v2 extends Df{}v2.prototype.isWebGL1Renderer=!0;class Wv extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class kf extends Gs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rm=new mt,Md=new Pf,Ha=new nc,Ga=new H;class jv extends zt{constructor(e=new Tn,n=new kf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;Rm.copy(r).invert(),Md.copy(e.ray).applyMatrix4(Rm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=h,M=g;_<M;_++){const m=c.getX(_);Ga.fromBufferAttribute(f,m),Pm(Ga,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,M=g;_<M;_++)Ga.fromBufferAttribute(f,_),Pm(Ga,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pm(t,e,n,i,r,s,o){const a=Md.distanceSqToPoint(t);if(a<n){const l=new H;Md.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Uf extends Tn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new H,S=new H,A=new H;for(let w=0;w<n.length;w+=3)g(n[w+0],v),g(n[w+1],S),g(n[w+2],A),l(v,S,A,x)}function l(x,v,S,A){const w=A+1,T=[];for(let I=0;I<=w;I++){T[I]=[];const O=x.clone().lerp(S,I/w),y=v.clone().lerp(S,I/w),C=w-I;for(let Q=0;Q<=C;Q++)Q===0&&I===w?T[I][Q]=O:T[I][Q]=O.clone().lerp(y,Q/C)}for(let I=0;I<w;I++)for(let O=0;O<2*(w-I)-1;O++){const y=Math.floor(O/2);O%2===0?(h(T[I][y+1]),h(T[I+1][y]),h(T[I][y])):(h(T[I][y+1]),h(T[I+1][y+1]),h(T[I+1][y]))}}function c(x){const v=new H;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(x),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const x=new H;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const S=m(x)/2/Math.PI+.5,A=u(x)/Math.PI+.5;o.push(S,1-A)}_(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],S=o[x+2],A=o[x+4],w=Math.max(v,S,A),T=Math.min(v,S,A);w>.9&&T<.1&&(v<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function g(x,v){const S=x*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const x=new H,v=new H,S=new H,A=new H,w=new He,T=new He,I=new He;for(let O=0,y=0;O<s.length;O+=9,y+=6){x.set(s[O+0],s[O+1],s[O+2]),v.set(s[O+3],s[O+4],s[O+5]),S.set(s[O+6],s[O+7],s[O+8]),w.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),A.copy(x).add(v).add(S).divideScalar(3);const C=m(A);M(w,y+0,x,C),M(T,y+2,v,C),M(I,y+4,S,C)}}function M(x,v,S,A){A<0&&x.x===1&&(o[v]=x.x-1),S.x===0&&S.z===0&&(o[v]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uf(e.vertices,e.indices,e.radius,e.details)}}class Dl extends Uf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Dl(e.radius,e.detail)}}class Fs extends Tn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,g=new H,_=new He;for(let M=0;M<=r;M++){for(let m=0;m<=i;m++){const u=s+m/i*o;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),_.x=(g.x/n+1)/2,_.y=(g.y/n+1)/2,d.push(_.x,_.y)}f+=h}for(let M=0;M<r;M++){const m=M*(i+1);for(let u=0;u<i;u++){const x=u+m,v=x,S=x+i+1,A=x+i+2,w=x+1;a.push(v,S,w),a.push(S,A,w)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yo extends Tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new H,h=new H,g=[],_=[],M=[],m=[];for(let u=0;u<=i;u++){const x=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const w=A/n;f.x=-e*Math.cos(r+w*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+v*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(w+S,1-v),x.push(c++)}d.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const v=d[u][x+1],S=d[u][x],A=d[u+1][x],w=d[u+1][x+1];(u!==0||o>0)&&g.push(v,S,w),(u!==i-1||l<Math.PI)&&g.push(S,A,w)}this.setIndex(g),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xv extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wv,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $v extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const vu=new mt,Lm=new H,Im=new H;class x2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lm),Im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Im),n.updateMatrixWorld(),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _2 extends x2{constructor(){super(new Fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ed extends $v{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new _2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qv extends $v{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Nm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Nm(){return(typeof performance>"u"?Date:performance).now()}const Dm=new mt;class y2{constructor(e,n,i=0,r=1/0){this.ray=new Pf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dm),this}intersectObject(e,n=!0,i=[]){return wd(e,this,i,n),i.sort(km),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wd(e[r],this,i,n);return i.sort(km),i}}function km(t,e){return t.distance-e.distance}function wd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)wd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);function S2({onSelectNode:t}){const e=he.useRef(null),[n,i]=he.useState(null);return he.useEffect(()=>{const r=e.current;if(!r)return;const s=r.clientWidth||560,o=r.clientHeight||560,a=new Wv,l=new _n(45,s/o,.1,1e3);l.position.set(0,0,16);const c=new Df({antialias:!0,alpha:!0});c.setSize(s,o),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=mv,c.toneMappingExposure=1.1,r.appendChild(c.domElement);const d=new qv(14677999,.9);a.add(d);const f=new Ed(5623720,1.8);f.position.set(12,18,14),a.add(f);const h=new Ed(15048468,.7);h.position.set(-14,-8,-10),a.add(h);const g=new vs;a.add(g);const _=5.2,M=new yo(_,48,48),m=new Xv({color:998960,roughness:.65,metalness:.15,wireframe:!1}),u=new Nt(M,m);g.add(u);const x=new yo(_+.04,32,24),v=new Vn({color:2723181,wireframe:!0,transparent:!0,opacity:.22}),S=new Nt(x,v);g.add(S);const A=[new Vn({color:5161617,transparent:!0,opacity:.45,side:Jt}),new Vn({color:15048468,transparent:!0,opacity:.35,side:Jt}),new Vn({color:3715466,transparent:!0,opacity:.3,side:Jt})],w=[],T=[6.6,7.3,8],I=[{x:.6,y:.2,z:.1},{x:-.4,y:.8,z:-.3},{x:.2,y:-.6,z:.7}];T.forEach((ae,ie)=>{const Pe=new Fs(ae,ae+.08,64),ve=new Nt(Pe,A[ie]);ve.rotation.set(I[ie].x,I[ie].y,I[ie].z),g.add(ve),w.push({mesh:ve,speed:(ie%2===0?1:-1)*(.003+ie*.002)})});const O=[{name:"Pacific Floating Solar Array",type:"Solar",lat:34,lon:-118,stat:"98.4% Efficiency",color:15048468},{name:"North Sea Wind Corridor",type:"Wind",lat:56,lon:3,stat:"14.2 GW Transmission",color:5161617},{name:"Sahara Sun Harvesting Grid",type:"Solar",lat:24,lon:12,stat:"220 GWh Annual",color:15048468},{name:"Atacama Clean Energy Reserve",type:"Storage",lat:-23,lon:-69,stat:"1.2 GWh BESS Capacity",color:3715466},{name:"Himalayan Hydro Turbine Link",type:"Hydro",lat:28,lon:85,stat:"8.6 GW Continuous",color:2455977},{name:"Nordic Clean Heat Exchange",type:"Heat Pump",lat:60,lon:15,stat:"420k Tons CO2 Offset",color:5623720}],y=[];function C(ae,ie,Pe){const ve=(90-ae)*(Math.PI/180),U=(ie+180)*(Math.PI/180),rt=-(Pe*Math.sin(ve)*Math.cos(U)),Me=Pe*Math.sin(ve)*Math.sin(U),Re=Pe*Math.cos(ve);return new H(rt,Re,Me)}O.forEach(ae=>{const ie=C(ae.lat,ae.lon,_+.12),Pe=new yo(.2,16,16),ve=new Vn({color:ae.color}),U=new Nt(Pe,ve);U.position.copy(ie),U.userData=ae;const rt=new Fs(.24,.42,24),Me=new Vn({color:ae.color,transparent:!0,opacity:.6,side:Jt}),Re=new Nt(rt,Me);Re.position.copy(ie),Re.lookAt(0,0,0),g.add(U),g.add(Re),y.push(U)});const Q=180,K=new Tn,N=new Float32Array(Q*3);for(let ae=0;ae<Q*3;ae+=3){const ie=Math.random(),Pe=Math.random(),ve=ie*2*Math.PI,U=Math.acos(2*Pe-1),rt=_+.8+Math.random()*2.8;N[ae]=rt*Math.sin(U)*Math.cos(ve),N[ae+1]=rt*Math.sin(U)*Math.sin(ve),N[ae+2]=rt*Math.cos(U)}K.setAttribute("position",new Nn(N,3));const q=new kf({color:8970435,size:.08,transparent:!0,opacity:.6}),P=new jv(K,q);g.add(P);let B=0,L=.2,k=0;const z=ae=>{const ie=r.getBoundingClientRect();(ae.clientX-ie.left)/ie.width-.5,B=((ae.clientY-ie.top)/ie.height-.5)*2,L=B*.6};r.addEventListener("mousemove",z);const Y=new y2,te=new He,xe=ae=>{const ie=r.getBoundingClientRect();te.x=(ae.clientX-ie.left)/ie.width*2-1,te.y=-((ae.clientY-ie.top)/ie.height)*2+1,Y.setFromCamera(te,l);const Pe=Y.intersectObjects(y);if(Pe.length>0){const ve=Pe[0].object.userData;i(ve),t&&t(ve)}};r.addEventListener("click",xe);let G;const J=new Yv,ue=()=>{G=requestAnimationFrame(ue);const ae=J.getElapsedTime();k+=(L-k)*.04,g.rotation.y+=.0022,g.rotation.x=k*.4+Math.sin(ae*.4)*.05,w.forEach(ie=>{ie.mesh.rotation.z+=ie.speed}),P.rotation.y-=.001,c.render(a,l)};ue();const Ee=()=>{if(!r)return;const ae=r.clientWidth,ie=r.clientHeight;l.aspect=ae/ie,l.updateProjectionMatrix(),c.setSize(ae,ie)};return window.addEventListener("resize",Ee),()=>{cancelAnimationFrame(G),window.removeEventListener("resize",Ee),r.removeEventListener("mousemove",z),r.removeEventListener("click",xe),c.domElement&&r.contains(c.domElement)&&r.removeChild(c.domElement),c.dispose(),M.dispose(),m.dispose(),x.dispose(),v.dispose(),K.dispose(),q.dispose()}},[t]),p.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"480px"},children:[p.jsx("div",{ref:e,style:{width:"100%",height:"100%",cursor:"grab"}}),n&&p.jsxs("div",{className:"card animate-fade-in",style:{position:"absolute",bottom:"20px",left:"20px",right:"20px",maxWidth:"340px",background:"rgba(255, 255, 255, 0.94)",backdropFilter:"blur(12px)",border:"1px solid var(--border-medium)",padding:"1rem",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-lg)",zIndex:10},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.25rem"},children:[p.jsxs("span",{className:`badge ${n.type==="Solar"?"badge-solar":"badge-emerald"}`,children:[n.type," Node"]}),p.jsx("button",{onClick:()=>i(null),style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},children:"✕"})]}),p.jsx("h4",{style:{fontSize:"1rem",color:"var(--emerald-950)",marginTop:"0.25rem"},children:n.name}),p.jsxs("p",{style:{fontSize:"0.8125rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:["Operational Metric: ",p.jsx("strong",{style:{color:"var(--emerald-700)"},children:n.stat})]})]})]})}function Um({onNavigate:t,onSelectNode:e,user:n,onOpenAuth:i}){return p.jsx("section",{style:{position:"relative",padding:"4rem 0 3.5rem 0",overflow:"hidden",background:"radial-gradient(ellipse at 80% 20%, rgba(85, 207, 168, 0.08) 0%, rgba(246, 249, 247, 0) 70%)"},children:p.jsx("div",{className:"container",children:p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.05fr 0.95fr",gap:"2.5rem",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsxs("div",{className:"badge badge-emerald",style:{marginBottom:"1.25rem",padding:"0.35rem 0.75rem",fontSize:"0.8125rem"},children:[p.jsx($o,{size:13}),"Applied Clean Energy Agentic Platform"]}),p.jsx("h1",{style:{fontSize:"3.25rem",lineHeight:1.12,color:"var(--emerald-950)",marginBottom:"1.25rem"},children:"Intelligent Energy Solutions for a Sustainable Future."}),p.jsx("p",{style:{fontSize:"1.1875rem",lineHeight:1.6,color:"var(--text-body)",marginBottom:"2rem",maxWidth:"540px"},children:"Unite real-time federal and state incentive discovery with generative AI energy modeling. Track verifiable carbon offsets, maximize clean technology rebates, and accelerate your path to net-zero."}),n?p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",marginBottom:"2.5rem"},children:[p.jsxs("button",{onClick:()=>t("chat"),className:"btn btn-primary",style:{padding:"0.875rem 1.75rem",fontSize:"1rem"},children:["Launch Intelligence Agent ",p.jsx(Mf,{size:18})]}),p.jsx("button",{onClick:()=>t("incentives"),className:"btn btn-secondary",style:{padding:"0.875rem 1.5rem",fontSize:"1rem"},children:"Check Regional Incentives"})]}):p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",marginBottom:"2.5rem"},children:[p.jsxs("button",{onClick:()=>i("login","Sign in to launch Gemini Energy Agent and full suite"),className:"btn btn-primary",style:{padding:"0.875rem 1.75rem",fontSize:"1rem"},children:[p.jsx(Xn,{size:16})," Sign In to Access Platform"]}),p.jsx("button",{onClick:()=>i("register","Create your clean energy account"),className:"btn btn-secondary",style:{padding:"0.875rem 1.5rem",fontSize:"1rem"},children:"Create Account"})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1.25rem",paddingTop:"1.5rem",borderTop:"1px solid var(--border-subtle)"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--emerald-700)"},children:[p.jsx(av,{size:16}),p.jsx("span",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--emerald-950)"},children:"4.8M+"})]}),p.jsx("div",{style:{fontSize:"0.8125rem",color:"var(--text-muted)",fontWeight:500},children:"lbs CO2 Tracked"})]}),p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--accent-sun)"},children:[p.jsx(rv,{size:16}),p.jsx("span",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--emerald-950)"},children:"$1.4M+"})]}),p.jsx("div",{style:{fontSize:"0.8125rem",color:"var(--text-muted)",fontWeight:500},children:"Rebates Unlocked"})]}),p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",color:"var(--emerald-600)"},children:[p.jsx(Xo,{size:16}),p.jsx("span",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--emerald-950)"},children:"99.4%"})]}),p.jsx("div",{style:{fontSize:"0.8125rem",color:"var(--text-muted)",fontWeight:500},children:"Incentive Matching"})]})]})]}),p.jsxs("div",{style:{position:"relative",height:"560px",display:"flex",alignItems:"center",justifyContent:"center"},children:[p.jsx(S2,{onSelectNode:e}),p.jsx("div",{style:{position:"absolute",top:"16px",right:"16px",background:"rgba(255, 255, 255, 0.88)",backdropFilter:"blur(8px)",padding:"0.35rem 0.75rem",borderRadius:"var(--radius-full)",fontSize:"0.75rem",fontWeight:600,color:"var(--emerald-800)",border:"1px solid var(--border-subtle)",boxShadow:"var(--shadow-sm)",pointerEvents:"none"},children:"Interactive 3D Clean Energy Grid • Drag to rotate"})]})]})})})}const M2=typeof window<"u"&&window.location.protocol.startsWith("http")&&(window.location.port==="8080"||!window.location.port||window.location.port==="80"),Zv=M2?"":"http://127.0.0.1:8080";function Kv(){const t=localStorage.getItem("eia_auth_token");return t?{Authorization:`Bearer ${t}`}:{}}async function wt(t,e={}){const n=`${Zv}${t}`,i={"Content-Type":"application/json",...Kv(),...e.headers},r=await fetch(n,{...e,headers:i});if(!r.ok){const s=await r.json().catch(()=>({})),o=s.detail||s.message||`Request failed with status ${r.status}`,a=new Error(o);throw a.status=r.status,a.data=s,a}return r.json()}const It={auth:{register:t=>wt("/auth/register",{method:"POST",body:JSON.stringify(t)}),login:t=>wt("/auth/login",{method:"POST",body:JSON.stringify(t)}),google:t=>wt("/auth/google",{method:"POST",body:JSON.stringify(t)}),me:()=>wt("/auth/me",{method:"GET"}),getGoogleConfig:()=>wt("/auth/google-config",{method:"GET"})},products:{getAll:()=>wt("/products"),getById:t=>wt(`/products/${t}`),create:t=>wt("/products",{method:"POST",body:JSON.stringify(t)}),update:(t,e)=>wt(`/products/${t}`,{method:"PUT",body:JSON.stringify(e)}),delete:t=>wt(`/products/${t}`,{method:"DELETE"})},incentives:{getByZip:t=>wt(`/incentive/?zip_code=${encodeURIComponent(t)}`),create:t=>wt("/incentive",{method:"POST",body:JSON.stringify(t)})},users:{getAll:()=>wt("/user"),getByEmail:t=>wt(`/user/${encodeURIComponent(t)}`),create:t=>wt("/user",{method:"POST",body:JSON.stringify(t)})},agent:{appName:"agent",getSessions:(t="user")=>wt(`/apps/agent/users/${encodeURIComponent(t)}/sessions`),getSession:(t,e="user")=>wt(`/apps/agent/users/${encodeURIComponent(e)}/sessions/${encodeURIComponent(t)}`),createSession:(t="user")=>wt(`/apps/agent/users/${encodeURIComponent(t)}/sessions`,{method:"POST"}),deleteSession:(t,e="user")=>wt(`/apps/agent/users/${encodeURIComponent(e)}/sessions/${encodeURIComponent(t)}`,{method:"DELETE"}),streamMessage:async(t,e)=>{const n=`${Zv}/run_sse`,i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream",...Kv()},body:JSON.stringify(t)});if(!i.ok)throw new Error(`Agent stream error: ${i.status}`);const r=i.body.getReader(),s=new TextDecoder;let o="";for(;;){const{done:a,value:l}=await r.read();if(a)break;for(o+=s.decode(l,{stream:!0});;){const c=o.indexOf(`
`);if(c===-1)break;const d=o.slice(0,c).trim();if(o=o.slice(c+1),d){let f=d;f.startsWith("data:")&&(f=f.replace(/^data:\s*/,""));try{if(f){const h=JSON.parse(f);await e(h)}}catch{}}}}return!0}}};function E2({onAuthSuccess:t}){const[e,n]=he.useState("login"),[i,r]=he.useState(!1),[s,o]=he.useState(!1),[a,l]=he.useState(""),[c,d]=he.useState(""),[f,h]=he.useState(""),[g,_]=he.useState(""),[M,m]=he.useState(""),[u,x]=he.useState(""),v=async A=>{A.preventDefault(),l(""),o(!0);try{let w;if(e==="register"){if(!c||!f||!g)throw new Error("Please complete all required fields.");w=await It.auth.register({email:c.trim(),username:f.trim(),password:g,zip_code:M.trim()||"00000",full_name:u.trim()||f.trim()})}else{if(!c||!g)throw new Error("Please enter your email/username and password.");w=await It.auth.login({credential:c.trim(),password:g})}w&&w.token&&(localStorage.setItem("eia_auth_token",w.token),t(w.user,w.token))}catch(w){console.error("Auth error:",w),l(w.message||"Authentication failed. Please verify credentials.")}finally{o(!1)}},S=async()=>{l(""),o(!0);try{const A=prompt(`Sign in with Google Account
Enter Google Account Email:`,c||"suhasacharya0525@gmail.com");if(!A){o(!1);return}const w=await It.auth.google({email:A.trim(),name:A.split("@")[0].replace("."," ").toUpperCase(),picture:`https://api.dicebear.com/7.x/initials/svg?seed=${A}`,provider:"google"});w&&w.token&&(localStorage.setItem("eia_auth_token",w.token),t(w.user,w.token))}catch(A){console.error("Google OAuth error:",A),l(A.message||"Google OAuth sign-in encountered an issue.")}finally{o(!1)}};return p.jsx("section",{id:"auth-gateway",style:{padding:"4rem 0",background:"radial-gradient(ellipse at 50% 0%, rgba(85, 207, 168, 0.09) 0%, rgba(246, 249, 247, 0) 80%)",borderTop:"1px solid var(--border-subtle)",borderBottom:"1px solid var(--border-subtle)"},children:p.jsx("div",{className:"container",children:p.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"2.5rem",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsxs("div",{className:"badge badge-emerald",style:{marginBottom:"1rem",padding:"0.3rem 0.75rem"},children:[p.jsx(Xo,{size:14})," Unified Clean Energy Gateway"]}),p.jsx("h2",{style:{fontSize:"2.35rem",color:"var(--emerald-950)",lineHeight:1.2,marginBottom:"1rem"},children:"Authenticate to Unlock Your Intelligent Energy Suite"}),p.jsx("p",{style:{color:"var(--text-body)",fontSize:"1.0625rem",lineHeight:1.6,marginBottom:"1.5rem"},children:"Sign in with your verified credentials or Google account to interact directly with the Gemini 2.5 Energy Agent, unlock localized incentive matrices, and model 25-year carbon ROI."}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",fontSize:"0.9375rem",color:"var(--text-main)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("span",{style:{color:"var(--emerald-600)",fontWeight:800},children:"✓"}),p.jsx("span",{children:"Direct session orchestration with Google ADK Gemini 2.5 Agent"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("span",{style:{color:"var(--emerald-600)",fontWeight:800},children:"✓"}),p.jsx("span",{children:"Verified federal Section 25D and regional utility rebates"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("span",{style:{color:"var(--emerald-600)",fontWeight:800},children:"✓"}),p.jsx("span",{children:"Full access to add, edit, and evaluate equipment savings"})]})]})]}),p.jsxs("div",{className:"card",style:{background:"#ffffff",padding:"2rem",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-xl)",border:"1px solid var(--border-medium)"},children:[p.jsxs("button",{type:"button",onClick:S,disabled:s,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",border:"1px solid #dadce0",background:"#ffffff",color:"#3c4043",fontWeight:600,fontSize:"0.9375rem",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 1px 3px rgba(60,64,67,0.08)",marginBottom:"1.25rem"},onMouseEnter:A=>A.currentTarget.style.backgroundColor="#f8f9fa",onMouseLeave:A=>A.currentTarget.style.backgroundColor="#ffffff",children:[p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[p.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z"}),p.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),p.jsx("path",{fill:"#FBBC05",d:"M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"}),p.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"})]}),"Continue with Google Account"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"1rem 0",color:"var(--text-subtle)",fontSize:"0.8125rem"},children:[p.jsx("div",{style:{flex:1,height:"1px",background:"var(--border-subtle)"}}),p.jsx("span",{style:{padding:"0 0.75rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"or with credentials"}),p.jsx("div",{style:{flex:1,height:"1px",background:"var(--border-subtle)"}})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",background:"var(--bg-canvas)",padding:"0.25rem",borderRadius:"var(--radius-md)",marginBottom:"1rem"},children:[p.jsx("button",{type:"button",onClick:()=>{n("login"),l("")},style:{padding:"0.45rem",borderRadius:"calc(var(--radius-md) - 2px)",border:"none",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",background:e==="login"?"#ffffff":"transparent",color:e==="login"?"var(--emerald-900)":"var(--text-muted)",boxShadow:e==="login"?"var(--shadow-sm)":"none"},children:"Sign In"}),p.jsx("button",{type:"button",onClick:()=>{n("register"),l("")},style:{padding:"0.45rem",borderRadius:"calc(var(--radius-md) - 2px)",border:"none",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",background:e==="register"?"#ffffff":"transparent",color:e==="register"?"var(--emerald-900)":"var(--text-muted)",boxShadow:e==="register"?"var(--shadow-sm)":"none"},children:"Create Account"})]}),a&&p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.65rem",borderRadius:"var(--radius-md)",backgroundColor:"var(--danger-soft)",color:"var(--danger)",fontSize:"0.8125rem",marginBottom:"1rem",border:"1px solid rgba(207, 60, 60, 0.2)"},children:[p.jsx(iv,{size:15}),p.jsx("span",{children:a})]}),p.jsxs("form",{onSubmit:v,children:[p.jsxs("div",{className:"form-group",style:{marginBottom:"0.875rem"},children:[p.jsx("label",{className:"form-label",style:{fontSize:"0.8125rem"},children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(lv,{size:13})," ",e==="register"?"Email Address":"Email or Username"]})}),p.jsx("input",{type:e==="register"?"email":"text",required:!0,className:"form-input",style:{padding:"0.65rem 0.875rem"},placeholder:e==="register"?"alex@domain.com":"alex@domain.com or alex",value:c,onChange:A=>d(A.target.value)})]}),e==="register"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"form-group",style:{marginBottom:"0.875rem"},children:[p.jsx("label",{className:"form-label",style:{fontSize:"0.8125rem"},children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(Tf,{size:13})," Username"]})}),p.jsx("input",{type:"text",required:!0,className:"form-input",style:{padding:"0.65rem 0.875rem"},placeholder:"e.g. greenarchitect",value:f,onChange:A=>h(A.target.value)})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.875rem"},children:[p.jsxs("div",{children:[p.jsx("label",{className:"form-label",style:{fontSize:"0.8125rem"},children:"Full Name"}),p.jsx("input",{type:"text",className:"form-input",style:{padding:"0.65rem 0.875rem"},placeholder:"Alex Morgan",value:u,onChange:A=>x(A.target.value)})]}),p.jsxs("div",{children:[p.jsx("label",{className:"form-label",style:{fontSize:"0.8125rem"},children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[p.jsx(wf,{size:12})," ZIP Code"]})}),p.jsx("input",{type:"text",className:"form-input",style:{padding:"0.65rem 0.875rem"},placeholder:"e.g. 42561",value:M,onChange:A=>m(A.target.value)})]})]})]}),p.jsxs("div",{className:"form-group",style:{marginBottom:"1rem"},children:[p.jsx("label",{className:"form-label",style:{fontSize:"0.8125rem"},children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(Xn,{size:13})," Password"]})}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("input",{type:i?"text":"password",required:!0,className:"form-input",style:{padding:"0.65rem 2.25rem 0.65rem 0.875rem"},placeholder:"At least 6 characters",value:g,onChange:A=>_(A.target.value)}),p.jsx("button",{type:"button",onClick:()=>r(!i),style:{position:"absolute",right:"0.65rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},children:i?p.jsx(sv,{size:15}):p.jsx(ov,{size:15})})]})]}),p.jsx("button",{type:"submit",disabled:s,className:"btn btn-primary",style:{width:"100%",padding:"0.75rem",fontSize:"0.9375rem"},children:s?p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("i",{className:"fa fa-spinner fa-spin"})," Authenticating..."]}):e==="register"?"Create Account & Unlock Platform":"Sign In & Enter Dashboard"})]})]})]})})})}function w2({onOpenAuth:t}){const e=[{id:"agent",icon:p.jsx(cv,{size:22,color:"var(--emerald-700)"}),tag:"Agentic Intelligence",title:"Gemini 2.5 Energy Agent",desc:"Autonomous reasoning engine with real-time tools for incentive matching, equipment evaluation, and carbon modeling.",actionText:"Sign In to Launch Agent",tab:"chat"},{id:"incentives",icon:p.jsx($o,{size:22,color:"var(--accent-sun)"}),tag:"Regional Database",title:"Incentive Discovery Engine",desc:"Instant lookup across federal Section 25D, state tax credits, and utility rebates tailored to your exact ZIP code.",actionText:"Sign In to Check Incentives",tab:"incentives"},{id:"products",icon:p.jsx(dv,{size:22,color:"var(--emerald-600)"}),tag:"Certified Systems",title:"Equipment & Storage Catalog",desc:"Curated residential and commercial solar panels, microinverters, battery reserves, and heat pumps with verified metrics.",actionText:"Sign In to Browse Catalog",tab:"products"},{id:"calculator",icon:p.jsx(Ef,{size:22,color:"var(--accent-wind)"}),tag:"Financial Modeling",title:"25-Year Solar & Carbon ROI",desc:"Dynamic simulation of monthly electric bill savings, recommended kW array sizing, and verifiable lifetime carbon offset.",actionText:"Sign In to Run Simulation",tab:"calculator"}];return p.jsx("section",{style:{padding:"4rem 0 5rem 0",background:"#ffffff"},children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"section-header",children:[p.jsx("span",{className:"tag",children:"Platform Capabilities"}),p.jsx("h2",{children:"Intelligent Infrastructure at Your Fingertips"}),p.jsx("p",{children:"Authenticate with your credentials or Google account to unlock full access to our applied clean energy suite."})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(270px, 1fr))",gap:"1.75rem"},children:e.map(n=>p.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid var(--border-medium)",background:"var(--bg-canvas)",position:"relative"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1.25rem"},children:[p.jsx("div",{style:{width:"3rem",height:"3rem",borderRadius:"var(--radius-md)",background:"#ffffff",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"var(--shadow-sm)"},children:n.icon}),p.jsxs("span",{className:"badge",style:{background:"#ffffff",color:"var(--emerald-850)",border:"1px solid var(--border-medium)",fontSize:"0.6875rem",display:"flex",alignItems:"center",gap:"0.25rem"},children:[p.jsx(Xn,{size:11,color:"var(--emerald-700)"})," Requires Login"]})]}),p.jsx("div",{style:{fontSize:"0.75rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--emerald-700)",marginBottom:"0.35rem"},children:n.tag}),p.jsx("h3",{style:{fontSize:"1.25rem",color:"var(--emerald-950)",marginBottom:"0.5rem"},children:n.title}),p.jsx("p",{style:{fontSize:"0.875rem",color:"var(--text-body)",lineHeight:1.5,marginBottom:"1.5rem"},children:n.desc})]}),p.jsxs("button",{onClick:()=>t("login",`Sign in to access ${n.title}`),className:"btn btn-primary",style:{width:"100%",fontSize:"0.875rem",padding:"0.75rem",justifyContent:"center"},children:[p.jsx(Xn,{size:14})," ",n.actionText]})]},n.id))})]})})}function Fm({onAskAgent:t}){const[e,n]=he.useState([]),[i,r]=he.useState(!0),[s,o]=he.useState("all"),[a,l]=he.useState(!1),[c,d]=he.useState(!1),[f,h]=he.useState(null),[g,_]=he.useState(""),[M,m]=he.useState(""),[u,x]=he.useState(""),[v,S]=he.useState(""),[A,w]=he.useState(""),[T,I]=he.useState(""),O=async()=>{r(!0);try{const P=await It.products.getAll();n(P||[])}catch(P){console.error("Error loading products:",P)}finally{r(!1)}};he.useEffect(()=>{O()},[]);const y=()=>{_(`PROD-${Math.floor(100+Math.random()*900)}`),m(""),x(""),S("$1,200.00"),w("$360.00"),I("450 lbs/yr"),d(!0)},C=P=>{h(P),_(P.id),m(P.name),x(P.description),S(P.price),w(P.incentive),I(P.carbon_savings),l(!0)},Q=async P=>{P.preventDefault();try{await It.products.create({id:g,name:M,description:u,price:v,incentive:A,carbon_savings:T}),d(!1),O()}catch(B){alert(`Failed to create product: ${B.message}`)}},K=async P=>{P.preventDefault();try{await It.products.update(g,{id:g,name:M,description:u,price:v,incentive:A,carbon_savings:T}),l(!1),O()}catch(B){alert(`Failed to update product: ${B.message}`)}},N=async P=>{if(window.confirm("Are you sure you want to delete this clean energy product?"))try{await It.products.delete(P),O()}catch(B){alert(`Failed to delete product: ${B.message}`)}},q=e.filter(P=>s==="all"?!0:(P.name+" "+P.description).toLowerCase().includes(s));return p.jsxs("section",{id:"products",style:{padding:"5rem 0",background:"var(--bg-canvas)"},children:[p.jsxs("div",{className:"container",children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"1.5rem",marginBottom:"2.5rem"},children:[p.jsxs("div",{children:[p.jsx("span",{className:"tag",style:{color:"var(--emerald-700)",fontWeight:700,fontSize:"0.8125rem",textTransform:"uppercase"},children:"Clean Energy Systems"}),p.jsx("h2",{style:{fontSize:"2.25rem",color:"var(--emerald-950)",marginTop:"0.25rem"},children:"Commercial & Residential Equipment"}),p.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1rem"},children:"High-efficiency solar arrays, microinverters, battery reserves, and heat pumps with verified carbon ratings."})]}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:p.jsxs("button",{onClick:y,className:"btn btn-primary",children:[p.jsx(uv,{size:18})," Add New Equipment"]})})]}),p.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"2rem",flexWrap:"wrap"},children:[{id:"all",label:"All Technologies"},{id:"solar",label:"Solar Panels"},{id:"battery",label:"Storage & Batteries"},{id:"inverter",label:"Inverters"},{id:"heat",label:"Heat Pumps"}].map(P=>p.jsx("button",{onClick:()=>o(P.id),className:"btn",style:{fontSize:"0.875rem",padding:"0.4rem 1rem",borderRadius:"var(--radius-full)",background:s===P.id?"var(--emerald-800)":"#ffffff",color:s===P.id?"#ffffff":"var(--text-body)",border:"1px solid "+(s===P.id?"var(--emerald-800)":"var(--border-medium)")},children:P.label},P.id))}),i?p.jsxs("div",{style:{textAlign:"center",padding:"4rem",color:"var(--text-muted)"},children:[p.jsx("i",{className:"fa fa-spinner fa-spin fa-2x"}),p.jsx("p",{style:{marginTop:"1rem"},children:"Loading certified equipment catalog..."})]}):p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:"1.5rem"},children:q.map(P=>p.jsxs("div",{className:"card animate-fade-in",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#ffffff",position:"relative",overflow:"hidden"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.75rem"},children:[p.jsxs("span",{className:"badge badge-emerald",style:{fontSize:"0.75rem"},children:["ID: ",P.id]}),p.jsxs("div",{style:{display:"flex",gap:"0.35rem"},children:[p.jsx("button",{onClick:()=>C(P),title:"Edit product",style:{background:"var(--emerald-50)",border:"none",padding:"0.35rem",borderRadius:"var(--radius-sm)",cursor:"pointer",color:"var(--emerald-800)"},children:p.jsx(tS,{size:15})}),p.jsx("button",{onClick:()=>N(P.id),title:"Delete product",style:{background:"var(--danger-soft)",border:"none",padding:"0.35rem",borderRadius:"var(--radius-sm)",cursor:"pointer",color:"var(--danger)"},children:p.jsx(fv,{size:15})})]})]}),p.jsx("h3",{style:{fontSize:"1.25rem",color:"var(--emerald-950)",marginBottom:"0.5rem"},children:P.name}),p.jsx("p",{style:{fontSize:"0.875rem",color:"var(--text-body)",lineHeight:1.5,marginBottom:"1.25rem"},children:P.description})]}),p.jsxs("div",{children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1.1fr",gap:"0.5rem",background:"var(--bg-canvas)",padding:"0.75rem",borderRadius:"var(--radius-md)",marginBottom:"1rem"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontWeight:600},children:"PRICE"}),p.jsx("div",{style:{fontWeight:700,fontSize:"0.9375rem",color:"var(--emerald-950)"},children:P.price})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--emerald-700)",fontWeight:600},children:"INCENTIVE"}),p.jsx("div",{style:{fontWeight:700,fontSize:"0.9375rem",color:"var(--emerald-700)"},children:P.incentive})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontSize:"0.6875rem",color:"var(--text-muted)",fontWeight:600},children:"CO2 SAVING"}),p.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"#166534"},children:P.carbon_savings})]})]}),p.jsxs("button",{onClick:()=>t(`Tell me more about ${P.name}. With a price of ${P.price} and incentive of ${P.incentive}, what is the payback timeline?`),className:"btn btn-ghost",style:{width:"100%",justifyContent:"center",border:"1px solid var(--border-medium)",fontSize:"0.8125rem",color:"var(--emerald-800)"},children:[p.jsx(rS,{size:14})," Consult Agent on this Product"]})]})]},P.id))})]}),(c||a)&&p.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(11, 33, 25, 0.65)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"1rem"},children:p.jsxs("div",{className:"card animate-fade-in",style:{width:"100%",maxWidth:"520px",background:"#ffffff",borderRadius:"var(--radius-lg)",padding:"2rem",position:"relative"},children:[p.jsx("button",{onClick:()=>{d(!1),l(!1)},style:{position:"absolute",top:"1.25rem",right:"1.25rem",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},children:p.jsx(Af,{size:20})}),p.jsx("h3",{style:{fontSize:"1.375rem",color:"var(--emerald-950)",marginBottom:"1.25rem"},children:c?"Add Clean Energy Equipment":"Edit Equipment Details"}),p.jsxs("form",{onSubmit:c?Q:K,children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"0.75rem"},children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Product ID"}),p.jsx("input",{type:"text",required:!0,disabled:a,className:"form-input",value:g,onChange:P=>_(P.target.value)})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Product Name"}),p.jsx("input",{type:"text",required:!0,className:"form-input",value:M,onChange:P=>m(P.target.value)})]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Description & Efficiency Specs"}),p.jsx("textarea",{required:!0,rows:3,className:"form-textarea",value:u,onChange:P=>x(P.target.value)})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.75rem"},children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Retail Price"}),p.jsx("input",{type:"text",required:!0,className:"form-input",value:v,onChange:P=>S(P.target.value)})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Incentive"}),p.jsx("input",{type:"text",required:!0,className:"form-input",value:A,onChange:P=>w(P.target.value)})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Carbon Offset"}),p.jsx("input",{type:"text",required:!0,className:"form-input",value:T,onChange:P=>I(P.target.value)})]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.75rem",marginTop:"1rem"},children:[p.jsx("button",{type:"button",onClick:()=>{d(!1),l(!1)},className:"btn btn-ghost",children:"Cancel"}),p.jsx("button",{type:"submit",className:"btn btn-primary",children:c?"Save to Catalog":"Update Equipment"})]})]})]})})]})}function Om({onAskAgent:t}){const[e,n]=he.useState(""),[i,r]=he.useState(null),[s,o]=he.useState(!1),[a,l]=he.useState(""),c=async f=>{const h=(f||e).trim();if(h){o(!0),l(h);try{const g=await It.incentives.getByZip(h);r(Array.isArray(g)?g:[g])}catch(g){console.warn("Incentive fetch error:",g),r([])}finally{o(!1)}}},d=["42561","52342","23444","11368","10453"];return p.jsx("section",{id:"incentives",style:{padding:"5rem 0",background:"#ffffff"},children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"section-header",children:[p.jsx("span",{className:"tag",children:"Regional Incentives"}),p.jsx("h2",{children:"Unlock Available Clean Energy Rebates"}),p.jsx("p",{children:"Verify local, state, and federal subsidies directly mapped to your region's utility grid and equipment standards."})]}),p.jsxs("div",{className:"card",style:{maxWidth:"680px",margin:"0 auto 2rem auto",padding:"1rem",boxShadow:"var(--shadow-md)",border:"1px solid var(--border-medium)"},children:[p.jsxs("form",{onSubmit:f=>{f.preventDefault(),c()},style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[p.jsxs("div",{style:{position:"relative",flex:1},children:[p.jsx(wf,{size:18,style:{position:"absolute",left:"1rem",top:"50%",transform:"translateY(-50%)",color:"var(--emerald-600)"}}),p.jsx("input",{type:"text",placeholder:"Enter 5-digit ZIP Code (e.g. 42561)",value:e,onChange:f=>n(f.target.value),style:{width:"100%",padding:"0.875rem 1rem 0.875rem 2.75rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-medium)",fontSize:"1rem",outline:"none"}})]}),p.jsx("button",{type:"submit",disabled:s,className:"btn btn-primary",style:{padding:"0.875rem 1.5rem"},children:s?p.jsx("i",{className:"fa fa-spinner fa-spin"}):p.jsxs(p.Fragment,{children:[p.jsx(nS,{size:18})," Search"]})})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.875rem",paddingTop:"0.75rem",borderTop:"1px solid var(--border-subtle)",fontSize:"0.8125rem",color:"var(--text-muted)",flexWrap:"wrap"},children:[p.jsx("span",{children:"Verified Sample Locations:"}),d.map(f=>p.jsxs("button",{type:"button",onClick:()=>{n(f),c(f)},style:{background:"var(--emerald-50)",border:"1px solid var(--border-subtle)",color:"var(--emerald-800)",fontWeight:600,fontSize:"0.75rem",padding:"0.2rem 0.5rem",borderRadius:"var(--radius-sm)",cursor:"pointer"},children:["ZIP ",f]},f))]})]}),a&&p.jsx("div",{style:{maxWidth:"780px",margin:"2rem auto 0 auto"},children:i&&i.length>0?p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("h4",{style:{color:"var(--emerald-950)",fontSize:"1.125rem"},children:["Verified Incentives for ZIP ",a," (",i.length," Found)"]}),p.jsxs("span",{className:"badge badge-emerald",children:[p.jsx(Yy,{size:13})," Active Programs"]})]}),i.map((f,h)=>p.jsxs("div",{className:"card animate-fade-in",style:{borderLeft:"4px solid var(--emerald-600)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.25rem"},children:[p.jsx(qy,{size:16,color:"var(--emerald-700)"}),p.jsx("h4",{style:{fontSize:"1.125rem",color:"var(--emerald-950)"},children:f.org||"Federal Clean Energy Rebate Program"})]}),p.jsxs("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:["Region Jurisdiction: ",p.jsxs("strong",{children:["ZIP ",f.zip_code]}),f.product_id&&p.jsxs("span",{style:{marginLeft:"1rem"},children:["Associated Equipment: ",p.jsx("code",{children:f.product_id})]})]})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:600},children:"Total Incentive Value"}),p.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"var(--emerald-700)",fontFamily:"var(--font-display)"},children:f.total_incentive||"$0.00"})]}),p.jsxs("button",{onClick:()=>t(`Analyze how the ${f.org||"clean energy"} incentive of ${f.total_incentive} applies to my home in ZIP ${f.zip_code}.`),className:"btn btn-outline-emerald",style:{fontSize:"0.875rem"},children:["Ask Agent ",p.jsx(Mf,{size:14})]})]})]},h))]}):p.jsxs("div",{className:"card",style:{textAlign:"center",padding:"3rem 1.5rem",background:"var(--bg-canvas)"},children:[p.jsx("div",{style:{color:"var(--text-muted)",marginBottom:"0.5rem"},children:p.jsx($o,{size:32,style:{opacity:.5}})}),p.jsxs("h4",{style:{color:"var(--emerald-950)",marginBottom:"0.25rem"},children:["No Direct Incentives Listed for ZIP ",a]}),p.jsx("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)",maxWidth:"420px",margin:"0 auto 1.25rem auto"},children:"Federal 30% Residential Clean Energy Credit (Section 25D) may still apply regardless of specific utility listings."}),p.jsx("button",{onClick:()=>t(`What nationwide federal tax credits or alternative energy incentives exist for zip code ${a}?`),className:"btn btn-primary",children:"Consult AI Agent on Federal Credits"})]})})]})})}function zm({onAskAgent:t}){const[e,n]=he.useState(240),[i,r]=he.useState(4.8),s=Math.round(e/.18),o=(s/30/i).toFixed(1),a=Math.round(e*12*.85),l=Math.round(a*25*1.03),c=Math.round(s*12*.88);return p.jsx("section",{id:"calculator",style:{padding:"5rem 0",background:"#ffffff"},children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"section-header",children:[p.jsx("span",{className:"tag",children:"ROI & Impact Modeling"}),p.jsx("h2",{children:"Solar & Carbon Savings Simulator"}),p.jsx("p",{children:"Estimate your 25-year financial returns and lifecycle carbon reduction based on regional grid emission factors."})]}),p.jsxs("div",{className:"card",style:{maxWidth:"920px",margin:"0 auto",display:"grid",gridTemplateColumns:"1.1fr 1.3fr",gap:"2.5rem",padding:"2.5rem",boxShadow:"var(--shadow-lg)",border:"1px solid var(--border-medium)"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"1.5rem"},children:[p.jsx(Ef,{size:20,color:"var(--emerald-700)"}),p.jsx("h3",{style:{fontSize:"1.25rem",color:"var(--emerald-950)"},children:"Energy Parameters"})]}),p.jsxs("div",{style:{marginBottom:"2rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[p.jsx("label",{style:{fontSize:"0.875rem",fontWeight:600,color:"var(--text-main)"},children:"Average Monthly Electricity Bill"}),p.jsxs("span",{style:{fontWeight:800,color:"var(--emerald-800)",fontSize:"1.125rem"},children:["$",e," / mo"]})]}),p.jsx("input",{type:"range",min:"50",max:"800",step:"10",value:e,onChange:d=>n(Number(d.target.value)),style:{width:"100%",accentColor:"var(--emerald-600)",cursor:"pointer"}}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:[p.jsx("span",{children:"$50"}),p.jsx("span",{children:"$400"}),p.jsx("span",{children:"$800"})]})]}),p.jsxs("div",{style:{marginBottom:"2rem"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"},children:[p.jsx("label",{style:{fontSize:"0.875rem",fontWeight:600,color:"var(--text-main)"},children:"Daily Peak Sunlight Hours"}),p.jsxs("span",{style:{fontWeight:800,color:"var(--emerald-800)",fontSize:"1.125rem"},children:[i," hrs / day"]})]}),p.jsx("input",{type:"range",min:"3.0",max:"6.5",step:"0.1",value:i,onChange:d=>r(Number(d.target.value)),style:{width:"100%",accentColor:"var(--emerald-600)",cursor:"pointer"}}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:[p.jsx("span",{children:"3.0 (Northeast)"}),p.jsx("span",{children:"4.8 (Midwest)"}),p.jsx("span",{children:"6.5 (Southwest)"})]})]}),p.jsxs("div",{style:{background:"var(--bg-canvas)",padding:"1rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-subtle)",fontSize:"0.875rem",color:"var(--text-body)"},children:["Estimated Monthly Usage: ",p.jsxs("strong",{children:[s.toLocaleString()," kWh"]}),p.jsx("br",{}),"Recommended Solar Array: ",p.jsxs("strong",{children:[o," kW DC"]})]})]}),p.jsxs("div",{style:{background:"linear-gradient(145deg, var(--emerald-900) 0%, var(--emerald-800) 100%)",borderRadius:"var(--radius-lg)",padding:"2rem",color:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 12px 28px rgba(14, 56, 43, 0.25)"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.35rem",background:"rgba(255, 255, 255, 0.12)",padding:"0.25rem 0.6rem",borderRadius:"var(--radius-full)",fontSize:"0.75rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"1rem"},children:[p.jsx(Xo,{size:13})," Verifiable Impact Model"]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("div",{style:{fontSize:"0.8125rem",opacity:.8,textTransform:"uppercase",letterSpacing:"0.05em"},children:"Estimated 25-Year Net Utility Savings"}),p.jsxs("div",{style:{fontSize:"2.75rem",fontWeight:800,fontFamily:"var(--font-display)",color:"#bbf0de"},children:["$",l.toLocaleString()]}),p.jsxs("div",{style:{fontSize:"0.8125rem",opacity:.75},children:["~$",a.toLocaleString()," saved in Year 1 with inflation indexing"]})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",paddingTop:"1.25rem",borderTop:"1px solid rgba(255, 255, 255, 0.15)"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.8125rem",opacity:.8},children:[p.jsx(av,{size:14,color:"#55cfa8"})," Annual Carbon Offset"]}),p.jsxs("div",{style:{fontSize:"1.375rem",fontWeight:700,marginTop:"0.25rem"},children:[c.toLocaleString()," lbs"]})]}),p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.8125rem",opacity:.8},children:[p.jsx(rv,{size:14,color:"#e59f14"})," Federal 30% Tax Credit"]}),p.jsxs("div",{style:{fontSize:"1.375rem",fontWeight:700,marginTop:"0.25rem"},children:["$",Math.round(o*2800*.3).toLocaleString()]})]})]})]}),p.jsxs("button",{onClick:()=>t(`I have a monthly electricity bill of $${e} with ${i} peak sunlight hours. Please model a complete clean energy configuration with recommended solar array size, battery reserve, and available incentives.`),className:"btn",style:{marginTop:"1.75rem",background:"#ffffff",color:"var(--emerald-950)",fontWeight:700,width:"100%",padding:"0.875rem"},children:["Analyze with Energy Agent ",p.jsx(Mf,{size:16})]})]})]})]})})}function Ff(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let zr=Ff();function Qv(t){zr=t}const Jv=/[&<>"']/,T2=new RegExp(Jv.source,"g"),ex=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,A2=new RegExp(ex.source,"g"),b2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bm=t=>b2[t];function xn(t,e){if(e){if(Jv.test(t))return t.replace(T2,Bm)}else if(ex.test(t))return t.replace(A2,Bm);return t}const C2=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function R2(t){return t.replace(C2,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const P2=/(^|[^\[])\^/g;function et(t,e){let n=typeof t=="string"?t:t.source;e=e||"";const i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(P2,"$1"),n=n.replace(r,o),i},getRegex:()=>new RegExp(n,e)};return i}function Hm(t){try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const So={exec:()=>null};function Gm(t,e){const n=t.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=n.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function Va(t,e,n){const i=t.length;if(i===0)return"";let r=0;for(;r<i&&t.charAt(i-r-1)===e;)r++;return t.slice(0,i-r)}function L2(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let i=0;i<t.length;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])n++;else if(t[i]===e[1]&&(n--,n<0))return i;return-1}function Vm(t,e,n,i){const r=e.href,s=e.title?xn(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:r,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:r,title:s,text:xn(o)}}function I2(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class kl{constructor(e){st(this,"options");st(this,"rules");st(this,"lexer");this.options=e||zr}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Va(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],r=I2(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:r}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const r=Va(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let i=n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);i=Va(i.replace(/^ *>[ \t]?/gm,""),`
`);const r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:n[0],tokens:s,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i=n[1].trim();const r=i.length>1,s={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");const o=new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let d=!1;if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;a=n[0],e=e.substring(a.length);let f=n[2].split(`
`,1)[0].replace(/^\t+/,u=>" ".repeat(3*u.length)),h=e.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,l=f.trimStart()):(g=n[2].search(/[^ ]/),g=g>4?1:g,l=f.slice(g),g+=n[1].length);let _=!1;if(!f&&/^ *$/.test(h)&&(a+=h+`
`,e=e.substring(h.length+1),d=!0),!d){const u=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),x=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),v=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),S=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;e;){const A=e.split(`
`,1)[0];if(h=A,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),v.test(h)||S.test(h)||u.test(h)||x.test(e))break;if(h.search(/[^ ]/)>=g||!h.trim())l+=`
`+h.slice(g);else{if(_||f.search(/[^ ]/)>=4||v.test(f)||S.test(f)||x.test(f))break;l+=`
`+h}!_&&!h.trim()&&(_=!0),a+=A+`
`,e=e.substring(A.length+1),f=h.slice(g)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let M=null,m;this.options.gfm&&(M=/^\[[ xX]\] /.exec(l),M&&(m=M[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!M,checked:m,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let d=0;d<s.items.length;d++)if(this.lexer.state.top=!1,s.items[d].tokens=this.lexer.blockTokens(s.items[d].text,[]),!s.loose){const f=s.items[d].tokens.filter(g=>g.type==="space"),h=f.length>0&&f.some(g=>/\n.*\n/.test(g.raw));s.loose=h}if(s.loose)for(let d=0;d<s.items.length;d++)s.items[d].loose=!0;return s}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),r=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:r,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const i=Gm(n[1]),r=n[2].replace(/^\||\| *$/g,"").split("|"),s=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===r.length){for(const a of r)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of i)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(Gm(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:xn(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=Va(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=L2(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let r=n[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=n[3]?n[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),Vm(n,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const r=(i[2]||i[1]).replace(/\s+/g," "),s=n[r.toLowerCase()];if(!s){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return Vm(i,s,i[0],this.lexer)}}emStrong(e,n,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...r[0]].length-1;let a,l,c=o,d=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,n=n.slice(-1*e.length+o);(r=f.exec(n))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){d+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+d);const h=[...r[0]][0].length,g=e.slice(0,o+r.index+h+l);if(Math.min(o,l)%2){const M=g.slice(1,-1);return{type:"em",raw:g,text:M,tokens:this.lexer.inlineTokens(M)}}const _=g.slice(2,-2);return{type:"strong",raw:g,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=xn(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let i,r;return n[2]==="@"?(i=xn(n[1]),r="mailto:"+i):(i=xn(n[1]),r=i),{type:"link",raw:n[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let n;if(n=this.rules.inline.url.exec(e)){let r,s;if(n[2]==="@")r=xn(n[0]),s="mailto:"+r;else{let o;do o=n[0],n[0]=((i=this.rules.inline._backpedal.exec(n[0]))==null?void 0:i[0])??"";while(o!==n[0]);r=xn(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=n[0]:i=xn(n[0]),{type:"text",raw:n[0],text:i}}}}const N2=/^(?: *(?:\n|$))+/,D2=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,k2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qo=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,U2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,tx=/(?:[*+-]|\d{1,9}[.)])/,nx=et(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,tx).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Of=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,F2=/^[^\n]+/,zf=/(?!\s*\])(?:\\.|[^\[\]\\])+/,O2=et(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",zf).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),z2=et(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,tx).getRegex(),sc="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Bf=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,B2=et("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Bf).replace("tag",sc).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ix=et(Of).replace("hr",Qo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",sc).getRegex(),H2=et(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ix).getRegex(),Hf={blockquote:H2,code:D2,def:O2,fences:k2,heading:U2,hr:Qo,html:B2,lheading:nx,list:z2,newline:N2,paragraph:ix,table:So,text:F2},Wm=et("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",sc).getRegex(),G2={...Hf,table:Wm,paragraph:et(Of).replace("hr",Qo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Wm).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",sc).getRegex()},V2={...Hf,html:et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Bf).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:So,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:et(Of).replace("hr",Qo).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nx).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},rx=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,W2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,sx=/^( {2,}|\\)\n(?!\s*$)/,j2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Jo="\\p{P}\\p{S}",X2=et(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Jo).getRegex(),$2=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,q2=et(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Jo).getRegex(),Y2=et("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Jo).getRegex(),Z2=et("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Jo).getRegex(),K2=et(/\\([punct])/,"gu").replace(/punct/g,Jo).getRegex(),Q2=et(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),J2=et(Bf).replace("(?:-->|$)","-->").getRegex(),eA=et("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",J2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ul=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,tA=et(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ul).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ox=et(/^!?\[(label)\]\[(ref)\]/).replace("label",Ul).replace("ref",zf).getRegex(),ax=et(/^!?\[(ref)\](?:\[\])?/).replace("ref",zf).getRegex(),nA=et("reflink|nolink(?!\\()","g").replace("reflink",ox).replace("nolink",ax).getRegex(),Gf={_backpedal:So,anyPunctuation:K2,autolink:Q2,blockSkip:$2,br:sx,code:W2,del:So,emStrongLDelim:q2,emStrongRDelimAst:Y2,emStrongRDelimUnd:Z2,escape:rx,link:tA,nolink:ax,punctuation:X2,reflink:ox,reflinkSearch:nA,tag:eA,text:j2,url:So},iA={...Gf,link:et(/^!?\[(label)\]\((.*?)\)/).replace("label",Ul).getRegex(),reflink:et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ul).getRegex()},Td={...Gf,escape:et(rx).replace("])","~|])").getRegex(),url:et(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},rA={...Td,br:et(sx).replace("{2,}","*").getRegex(),text:et(Td.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Wa={normal:Hf,gfm:G2,pedantic:V2},so={normal:Gf,gfm:Td,breaks:rA,pedantic:iA};class ii{constructor(e){st(this,"tokens");st(this,"options");st(this,"state");st(this,"tokenizer");st(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zr,this.options.tokenizer=this.options.tokenizer||new kl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Wa.normal,inline:so.normal};this.options.pedantic?(n.block=Wa.pedantic,n.inline=so.pedantic):this.options.gfm&&(n.block=Wa.gfm,this.options.breaks?n.inline=so.breaks:n.inline=so.gfm),this.tokenizer.rules=n}static get rules(){return{block:Wa,inline:so}}static lex(e,n){return new ii(n).lex(e)}static lexInline(e,n){return new ii(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const i=this.inlineQueue[n];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(d=>{c=d.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=n[n.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,r,s,o=e,a,l,c;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(i=d.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=n[n.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const f=e.slice(1);let h;this.options.extensions.startInline.forEach(g=>{h=g.call({lexer:this},f),typeof h=="number"&&h>=0&&(d=Math.min(d,h))}),d<1/0&&d>=0&&(s=e.substring(0,d+1))}if(i=this.tokenizer.inlineText(s)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,r=n[n.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}}class Fl{constructor(e){st(this,"options");this.options=e||zr}code(e,n,i){var s;const r=(s=(n||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+xn(r)+'">'+(i?e:xn(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:xn(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,i){return`<h${n}>${e}</h${n}>
`}hr(){return`<hr>
`}list(e,n,i){const r=n?"ol":"ul",s=n&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e,n,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){const r=Hm(e);if(r===null)return i;e=r;let s='<a href="'+e+'"';return n&&(s+=' title="'+n+'"'),s+=">"+i+"</a>",s}image(e,n,i){const r=Hm(e);if(r===null)return i;e=r;let s=`<img src="${e}" alt="${i}"`;return n&&(s+=` title="${n}"`),s+=">",s}text(e){return e}}class Vf{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class ri{constructor(e){st(this,"options");st(this,"renderer");st(this,"textRenderer");this.options=e||zr,this.options.renderer=this.options.renderer||new Fl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Vf}static parse(e,n){return new ri(n).parse(e)}static parseInline(e,n){return new ri(n).parseInline(e)}parse(e,n=!0){let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){i+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{const o=s;i+=this.renderer.heading(this.parseInline(o.tokens),o.depth,R2(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;i+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let d=0;d<o.header.length;d++)l+=this.renderer.tablecell(this.parseInline(o.header[d].tokens),{header:!0,align:o.align[d]});a+=this.renderer.tablerow(l);let c="";for(let d=0;d<o.rows.length;d++){const f=o.rows[d];l="";for(let h=0;h<f.length;h++)l+=this.renderer.tablecell(this.parseInline(f[h].tokens),{header:!1,align:o.align[h]});c+=this.renderer.tablerow(l)}i+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);i+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let d="";for(let f=0;f<o.items.length;f++){const h=o.items[f],g=h.checked,_=h.task;let M="";if(h.task){const m=this.renderer.checkbox(!!g);c?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=m+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=m+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:m+" "}):M+=m+" "}M+=this.parse(h.tokens,c),d+=this.renderer.listitem(M,_,!!g)}i+=this.renderer.list(d,a,l);continue}case"html":{const o=s;i+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;i+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;r+1<e.length&&e[r+1].type==="text";)o=e[++r],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);i+=n?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}parseInline(e,n){n=n||this.renderer;let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}switch(s.type){case"escape":{const o=s;i+=n.text(o.text);break}case"html":{const o=s;i+=n.html(o.text);break}case"link":{const o=s;i+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break}case"image":{const o=s;i+=n.image(o.href,o.title,o.text);break}case"strong":{const o=s;i+=n.strong(this.parseInline(o.tokens,n));break}case"em":{const o=s;i+=n.em(this.parseInline(o.tokens,n));break}case"codespan":{const o=s;i+=n.codespan(o.text);break}case"br":{i+=n.br();break}case"del":{const o=s;i+=n.del(this.parseInline(o.tokens,n));break}case"text":{const o=s;i+=n.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}}class Mo{constructor(e){st(this,"options");this.options=e||zr}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}st(Mo,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Ur,Ad,lx;class sA{constructor(...e){Kf(this,Ur);st(this,"defaults",Ff());st(this,"options",this.setOptions);st(this,"parse",na(this,Ur,Ad).call(this,ii.lex,ri.parse));st(this,"parseInline",na(this,Ur,Ad).call(this,ii.lexInline,ri.parseInline));st(this,"Parser",ri);st(this,"Renderer",Fl);st(this,"TextRenderer",Vf);st(this,"Lexer",ii);st(this,"Tokenizer",kl);st(this,"Hooks",Mo);this.use(...e)}walkTokens(e,n){var r,s;let i=[];for(const o of e)switch(i=i.concat(n.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)i=i.concat(this.walkTokens(l.tokens,n));for(const l of a.rows)for(const c of l)i=i.concat(this.walkTokens(c.tokens,n));break}case"list":{const a=o;i=i.concat(this.walkTokens(a.items,n));break}default:{const a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);i=i.concat(this.walkTokens(c,n))}):a.tokens&&(i=i.concat(this.walkTokens(a.tokens,n)))}}return i}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=n.renderers[s.name];o?n.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[s.level];o?o.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),r.extensions=n),i.renderer){const s=this.defaults.renderer||new Fl(this.defaults);for(const o in i.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.renderer[a],c=s[a];s[a]=(...d)=>{let f=l.apply(s,d);return f===!1&&(f=c.apply(s,d)),f||""}}r.renderer=s}if(i.tokenizer){const s=this.defaults.tokenizer||new kl(this.defaults);for(const o in i.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=i.tokenizer[a],c=s[a];s[a]=(...d)=>{let f=l.apply(s,d);return f===!1&&(f=c.apply(s,d)),f}}r.tokenizer=s}if(i.hooks){const s=this.defaults.hooks||new Mo;for(const o in i.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.hooks[a],c=s[a];Mo.passThroughHooks.has(o)?s[a]=d=>{if(this.defaults.async)return Promise.resolve(l.call(s,d)).then(h=>c.call(s,h));const f=l.call(s,d);return c.call(s,f)}:s[a]=(...d)=>{let f=l.apply(s,d);return f===!1&&(f=c.apply(s,d)),f}}r.hooks=s}if(i.walkTokens){const s=this.defaults.walkTokens,o=i.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return ii.lex(e,n??this.defaults)}parser(e,n){return ri.parse(e,n??this.defaults)}}Ur=new WeakSet,Ad=function(e,n){return(i,r)=>{const s={...r},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=na(this,Ur,lx).call(this,!!o.silent,!!o.async);if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>n(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(i=o.hooks.preprocess(i));let l=e(i,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=n(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},lx=function(e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+xn(i.message+"",!0)+"</pre>";return n?Promise.resolve(r):r}if(n)return Promise.reject(i);throw i}};const kr=new sA;function Ke(t,e){return kr.parse(t,e)}Ke.options=Ke.setOptions=function(t){return kr.setOptions(t),Ke.defaults=kr.defaults,Qv(Ke.defaults),Ke};Ke.getDefaults=Ff;Ke.defaults=zr;Ke.use=function(...t){return kr.use(...t),Ke.defaults=kr.defaults,Qv(Ke.defaults),Ke};Ke.walkTokens=function(t,e){return kr.walkTokens(t,e)};Ke.parseInline=kr.parseInline;Ke.Parser=ri;Ke.parser=ri.parse;Ke.Renderer=Fl;Ke.TextRenderer=Vf;Ke.Lexer=ii;Ke.lexer=ii.lex;Ke.Tokenizer=kl;Ke.Hooks=Mo;Ke.parse=Ke;Ke.options;Ke.setOptions;Ke.use;Ke.walkTokens;Ke.parseInline;ri.parse;ii.lex;function oA({isThinking:t=!1,isStreaming:e=!1}){const n=he.useRef(null);return he.useEffect(()=>{const i=n.current;if(!i)return;const r=i.clientWidth||280,s=i.clientHeight||280,o=new Wv,a=new _n(45,r/s,.1,100);a.position.set(0,0,7.5);const l=new Df({antialias:!0,alpha:!0});l.setSize(r,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(l.domElement);const c=new qv(14677999,1.2);o.add(c);const d=new Ed(5161617,2);d.position.set(5,8,5),o.add(d);const f=new vs;o.add(f);const h=new Dl(1.6,1),g=new Xv({color:1528383,roughness:.4,metalness:.2,wireframe:!1}),_=new Nt(h,g);f.add(_);const M=new Dl(2.1,2),m=new Vn({color:5161617,wireframe:!0,transparent:!0,opacity:.4}),u=new Nt(M,m);f.add(u);const x=new Fs(2.5,2.58,48),v=new Vn({color:3715466,transparent:!0,opacity:.5,side:Jt}),S=new Nt(x,v);S.rotation.x=Math.PI/3,f.add(S);const A=new Fs(2.8,2.86,48),w=new Vn({color:15048468,transparent:!0,opacity:.35,side:Jt}),T=new Nt(A,w);T.rotation.y=Math.PI/4,T.rotation.z=Math.PI/6,f.add(T);const I=70,O=new Tn,y=new Float32Array(I*3);for(let B=0;B<I*3;B+=3){const L=2.4+Math.random()*1,k=Math.random()*Math.PI*2,z=(Math.random()-.5)*Math.PI;y[B]=L*Math.cos(z)*Math.sin(k),y[B+1]=L*Math.sin(z),y[B+2]=L*Math.cos(z)*Math.cos(k)}O.setAttribute("position",new Nn(y,3));const C=new kf({color:5623720,size:.08,transparent:!0,opacity:.7}),Q=new jv(O,C);f.add(Q);let K;const N=new Yv,q=()=>{K=requestAnimationFrame(q);const B=N.getElapsedTime(),L=t||e,k=L?2.5:1,z=L?3.5:1.2;f.rotation.y+=.008*k,f.rotation.x=Math.sin(B*.8)*.15,u.rotation.y-=.012*k,S.rotation.z+=.015*k,T.rotation.z-=.012*k;const Y=1+Math.sin(B*z)*(L?.08:.03);_.scale.set(Y,Y,Y),u.scale.set(Y,Y,Y),l.render(o,a)};q();const P=()=>{if(!i)return;const B=i.clientWidth,L=i.clientHeight;a.aspect=B/L,a.updateProjectionMatrix(),l.setSize(B,L)};return window.addEventListener("resize",P),()=>{cancelAnimationFrame(K),window.removeEventListener("resize",P),l.domElement&&i.contains(l.domElement)&&i.removeChild(l.domElement),l.dispose(),h.dispose(),g.dispose(),M.dispose(),m.dispose(),O.dispose(),C.dispose()}},[t,e]),p.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"220px"},children:[p.jsx("div",{ref:n,style:{width:"100%",height:"100%"}}),p.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",fontSize:"0.75rem",fontWeight:600,color:t||e?"var(--emerald-600)":"var(--text-muted)",background:"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(4px)",padding:"0.2rem 0.6rem",borderRadius:"var(--radius-full)",border:"1px solid var(--border-subtle)",whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:t||e?"#38b18a":"#627b70",animation:t||e?"pulseSlow 1s infinite":"none"}}),e?"Synthesizing Knowledge...":t?"Orchestrating Energy Agents...":"Applied Energy Intelligence Core"]})]})}function aA({user:t,initialPrompt:e,onClearInitialPrompt:n}){const[i,r]=he.useState([]),[s,o]=he.useState(""),[a,l]=he.useState([]),[c,d]=he.useState(""),[f,h]=he.useState(!1),[g,_]=he.useState(!1),[M,m]=he.useState(!1),[u,x]=he.useState(null),[v,S]=he.useState(!0),A=he.useRef(null),w=he.useRef(null),T=(t==null?void 0:t.email)||"user",I=()=>{var P;(P=A.current)==null||P.scrollIntoView({behavior:"smooth"})};he.useEffect(()=>{I()},[a,g,M]);const O=async()=>{try{const P=await It.agent.getSessions(T);if(P&&P.length){r(P);const B=P[0].id;o(B),C(B)}else y()}catch(P){console.warn("Could not fetch sessions, creating new one:",P),y()}},y=async()=>{try{const P=await It.agent.createSession(T);if(P&&P.id)return r(B=>[P,...B]),o(P.id),l([{role:"model",text:`Welcome! I am your **Clean Energy Intelligence Agent** powered by Gemini 2.5.

I can assist you with:
- Finding certified **tax credits & utility rebates** for your ZIP code
- Analyzing **solar systems, inverters, and battery storage**
- Modeling **carbon savings and 25-year ROI**
- Querying registered regional consumer energy profiles

How can I power your energy transition today?`}]),P.id}catch(P){console.error("Session creation error:",P)}return null},C=async P=>{try{const B=await It.agent.getSession(P,T);if(B&&B.events){const L=[];B.events.forEach(k=>{k.content&&k.content.parts&&k.content.parts.forEach(z=>{z.text?L.push({role:k.content.role||"model",text:z.text}):z.functionCall?L.push({role:"tool-call",name:z.functionCall.name}):z.functionResponse&&L.push({role:"tool-result",name:z.functionResponse.name})})}),l(L)}}catch(B){console.error("Error loading session events:",B)}},Q=async(P,B)=>{P.stopPropagation();try{await It.agent.deleteSession(B,T);const L=i.filter(k=>k.id!==B);r(L),s===B&&(L.length>0?(o(L[0].id),C(L[0].id)):y())}catch(L){console.error("Delete session error:",L)}};he.useEffect(()=>{O()},[t]),he.useEffect(()=>{e&&s&&!f&&(N(e),n&&n())},[e,s]);const K=P=>new Promise((B,L)=>{const k=new FileReader;k.readAsDataURL(P),k.onload=()=>{const z=k.result.split(",")[1];B({data:z,displayName:P.name,mimeType:P.type})},k.onerror=z=>L(z)}),N=async P=>{const B=(P||c).trim();if(!B&&!u)return;let L=s;if(!L&&(L=await y(),!L))return;const k=[];B&&k.push({text:B});let z=null;u&&(z=await K(u),k.push({inlineData:z})),l(te=>[...te,{role:"user",text:B,file:u?u.name:null}]),d(""),x(null),h(!0),_(!0);const Y={appName:It.agent.appName,newMessage:{role:"user",parts:k},sessionId:L,stateDelta:null,streaming:!1,userId:T};try{await It.agent.streamMessage(Y,async te=>{te&&(_(!1),m(!0),te.content&&te.content.parts&&te.content.parts.forEach(xe=>{xe.functionCall?l(G=>[...G,{role:"tool-call",name:xe.functionCall.name}]):xe.functionResponse?l(G=>[...G,{role:"tool-result",name:xe.functionResponse.name}]):xe.text&&l(G=>[...G,{role:"model",text:xe.text}])}))})}catch(te){console.error("Chat streaming error:",te),l(xe=>[...xe,{role:"model",text:`⚠️ **Error communicating with Gemini Energy Agent:** ${te.message}`}])}finally{h(!1),_(!1),m(!1)}},q=["What clean energy incentives are available for ZIP 42561?","Which registered user zip code has the highest potential carbon savings?","Compare the top solar systems in our catalog by ROI and incentive value.","Are there any registered users with no incentives in their zip code?"];return p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"280px 1fr",height:"calc(100vh - 4.25rem)",background:"var(--bg-canvas)",overflow:"hidden"},children:[p.jsxs("aside",{style:{borderRight:"1px solid var(--border-subtle)",background:"#ffffff",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[p.jsxs("div",{style:{padding:"1.25rem",overflowY:"auto",flex:1},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--emerald-950)",fontWeight:700},children:[p.jsx(Ky,{size:18,color:"var(--emerald-700)"}),p.jsx("span",{children:"Agent Sessions"})]}),p.jsxs("button",{onClick:y,className:"btn btn-primary",style:{padding:"0.35rem 0.65rem",fontSize:"0.75rem"},children:[p.jsx(uv,{size:14})," New"]})]}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem"},children:i.map(P=>{const B=P.id===s;return p.jsxs("div",{onClick:()=>{o(P.id),C(P.id)},style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.625rem 0.75rem",borderRadius:"var(--radius-md)",background:B?"var(--emerald-50)":"transparent",border:"1px solid "+(B?"var(--border-medium)":"transparent"),cursor:"pointer",fontSize:"0.8125rem",color:B?"var(--emerald-950)":"var(--text-body)",fontWeight:B?600:500,transition:"all 0.15s ease"},children:[p.jsxs("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"180px"},children:["Session ",P.id.slice(0,8),"..."]}),p.jsx("button",{onClick:L=>Q(L,P.id),style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"0.2rem"},title:"Delete session",children:p.jsx(fv,{size:13})})]},P.id)})})]}),p.jsxs("div",{style:{padding:"1rem",borderTop:"1px solid var(--border-subtle)",background:"var(--bg-canvas)",fontSize:"0.75rem"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--emerald-800)",fontWeight:700,marginBottom:"0.25rem"},children:[p.jsx($y,{size:13})," Model: Gemini 2.5 Flash"]}),p.jsx("div",{style:{color:"var(--text-muted)"},children:"Google ADK Agent • Zero Sandbox Friction"})]})]}),p.jsxs("section",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"hidden"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.875rem 1.5rem",background:"#ffffff",borderBottom:"1px solid var(--border-subtle)"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[p.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"var(--radius-sm)",background:"var(--emerald-100)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--emerald-800)"},children:p.jsx(Uc,{size:18})}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:"0.9375rem",color:"var(--emerald-950)"},children:"Energy Saving Agent"}),p.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--emerald-700)"},children:["Session: ",p.jsx("code",{children:s?s.slice(0,16):"Initializing..."})]})]})]}),p.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:p.jsxs("button",{onClick:()=>S(!v),className:"btn btn-ghost",style:{fontSize:"0.8125rem",padding:"0.35rem 0.75rem"},children:[v?p.jsx(eS,{size:14}):p.jsx(Jy,{size:14}),p.jsx("span",{children:v?"Hide 3D Core":"Show 3D Core"})]})})]}),v&&p.jsx("div",{style:{height:"170px",background:"linear-gradient(180deg, #ffffff 0%, var(--bg-canvas) 100%)",borderBottom:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:p.jsx(oA,{isThinking:g,isStreaming:M})}),p.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[a.map((P,B)=>{if(P.role==="tool-call")return p.jsxs("div",{style:{alignSelf:"center",display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.3rem 0.8rem",borderRadius:"var(--radius-full)",background:"var(--emerald-50)",border:"1px solid var(--border-medium)",fontSize:"0.75rem",color:"var(--emerald-800)",fontWeight:600},children:[p.jsx($o,{size:13,color:"var(--emerald-600)"}),p.jsxs("span",{children:["Executing Tool: ",p.jsx("code",{children:P.name})]})]},B);if(P.role==="tool-result")return p.jsx("div",{style:{alignSelf:"center",display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.25rem 0.75rem",borderRadius:"var(--radius-full)",background:"#f0fdf4",border:"1px solid #bbf7d0",fontSize:"0.75rem",color:"#166534",fontWeight:500},children:p.jsxs("span",{children:["✓ Tool Completed: ",p.jsx("code",{children:P.name})]})},B);const L=P.role==="user";return p.jsxs("div",{className:"animate-fade-in",style:{display:"flex",gap:"0.75rem",alignSelf:L?"flex-end":"flex-start",maxWidth:"80%"},children:[!L&&p.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",background:"var(--emerald-800)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:p.jsx(Uc,{size:15})}),p.jsxs("div",{style:{background:L?"linear-gradient(135deg, var(--emerald-800) 0%, var(--emerald-700) 100%)":"#ffffff",color:L?"#ffffff":"var(--text-main)",padding:"1rem 1.25rem",borderRadius:L?"16px 16px 2px 16px":"16px 16px 16px 2px",boxShadow:L?"0 4px 12px rgba(14, 56, 43, 0.15)":"var(--shadow-sm)",border:L?"none":"1px solid var(--border-subtle)",fontSize:"0.9375rem",lineHeight:1.6},children:[L?p.jsx("div",{children:P.text}):p.jsx("div",{style:{overflowWrap:"break-word"},dangerouslySetInnerHTML:{__html:Ke.parse(P.text||"")}}),P.file&&p.jsxs("div",{style:{marginTop:"0.5rem",padding:"0.35rem 0.6rem",borderRadius:"var(--radius-sm)",background:L?"rgba(255,255,255,0.2)":"var(--bg-canvas)",fontSize:"0.75rem",display:"inline-flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(Fc,{size:13})," ",P.file]})]}),L&&p.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",background:"var(--emerald-100)",color:"var(--emerald-900)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontWeight:700,fontSize:"0.75rem"},children:p.jsx(Tf,{size:14})})]},B)}),g&&p.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignSelf:"flex-start",alignItems:"center"},children:[p.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"50%",background:"var(--emerald-800)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(Uc,{size:15})}),p.jsxs("div",{className:"card",style:{padding:"0.75rem 1rem",borderRadius:"16px 16px 16px 2px",display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--emerald-700)",fontSize:"0.875rem",fontWeight:600},children:[p.jsx("i",{className:"fa fa-circle-notch fa-spin"}),p.jsx("span",{children:"Gemini Agent is synthesizing clean energy models..."})]})]}),p.jsx("div",{ref:A})]}),p.jsx("div",{style:{padding:"0.5rem 1.5rem",background:"#ffffff",borderTop:"1px solid var(--border-subtle)",display:"flex",gap:"0.5rem",overflowX:"auto",whiteSpace:"nowrap"},children:q.map((P,B)=>p.jsx("button",{disabled:f,onClick:()=>N(P),style:{fontSize:"0.75rem",padding:"0.3rem 0.75rem",borderRadius:"var(--radius-full)",border:"1px solid var(--border-medium)",background:"var(--bg-canvas)",color:"var(--emerald-900)",cursor:"pointer",fontWeight:500},children:P},B))}),p.jsxs("div",{style:{padding:"1rem 1.5rem",background:"#ffffff",borderTop:"1px solid var(--border-subtle)"},children:[u&&p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.35rem 0.75rem",background:"var(--emerald-50)",borderRadius:"var(--radius-sm)",fontSize:"0.8125rem",marginBottom:"0.5rem",color:"var(--emerald-900)",border:"1px solid var(--border-medium)"},children:[p.jsx(Fc,{size:14}),p.jsx("span",{children:u.name}),p.jsx("button",{onClick:()=>x(null),style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},children:p.jsx(Af,{size:14})})]}),p.jsxs("form",{onSubmit:P=>{P.preventDefault(),N()},style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[p.jsx("input",{type:"file",ref:w,onChange:P=>{P.target.files&&P.target.files[0]&&x(P.target.files[0])},style:{display:"none"}}),p.jsx("button",{type:"button",onClick:()=>{var P;return(P=w.current)==null?void 0:P.click()},className:"btn btn-ghost",title:"Attach document or solar proposal",style:{padding:"0.75rem",color:"var(--text-muted)"},children:p.jsx(Fc,{size:18})}),p.jsx("input",{type:"text",value:c,disabled:f,onChange:P=>d(P.target.value),placeholder:"Inquire on incentives, equipment payback, carbon metrics, or solar sizing...",style:{flex:1,padding:"0.875rem 1.25rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-medium)",fontSize:"0.9375rem",outline:"none"}}),p.jsx("button",{type:"submit",disabled:f||!c.trim()&&!u,className:"btn btn-primary",style:{padding:"0.875rem 1.5rem"},children:f?p.jsx("i",{className:"fa fa-spinner fa-spin"}):p.jsxs(p.Fragment,{children:[p.jsx(iS,{size:16})," Send"]})})]})]})]})]})}function lA({isOpen:t,initialMode:e="login",promptText:n="",onClose:i,onAuthSuccess:r}){const[s,o]=he.useState(e),[a,l]=he.useState(!1),[c,d]=he.useState(!1),[f,h]=he.useState(""),[g,_]=he.useState(""),[M,m]=he.useState(""),[u,x]=he.useState(""),[v,S]=he.useState(""),[A,w]=he.useState("");if(!t)return null;const T=async O=>{O.preventDefault(),h(""),d(!0);try{let y;if(s==="register"){if(!g||!M||!u)throw new Error("Please complete all required fields.");y=await It.auth.register({email:g.trim(),username:M.trim(),password:u,zip_code:v.trim()||"00000",full_name:A.trim()||M.trim()})}else{if(!g||!u)throw new Error("Please provide your credential and password.");y=await It.auth.login({credential:g.trim(),password:u})}y&&y.token&&(localStorage.setItem("eia_auth_token",y.token),r(y.user,y.token),i())}catch(y){console.error("Auth error:",y),h(y.message||"Authentication failed. Please check your credentials.")}finally{d(!1)}},I=async()=>{h(""),d(!0);try{const O=prompt(`Sign in with Google Account
Enter Google Account Email:`,g||"suhasacharya0525@gmail.com");if(!O){d(!1);return}const y=await It.auth.google({email:O.trim(),name:O.split("@")[0].replace("."," ").toUpperCase(),picture:`https://api.dicebear.com/7.x/initials/svg?seed=${O}`,provider:"google"});y&&y.token&&(localStorage.setItem("eia_auth_token",y.token),r(y.user,y.token),i())}catch(O){console.error("Google OAuth error:",O),h(O.message||"Google OAuth sign-in encountered an issue.")}finally{d(!1)}};return p.jsx("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(11, 33, 25, 0.65)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"1rem"},children:p.jsxs("div",{className:"card animate-fade-in",style:{width:"100%",maxWidth:"460px",background:"#ffffff",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-xl)",padding:"2rem",position:"relative"},children:[p.jsx("button",{onClick:i,style:{position:"absolute",top:"1.25rem",right:"1.25rem",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},children:p.jsx(Af,{size:20})}),p.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[p.jsx("div",{style:{width:"3rem",height:"3rem",borderRadius:"var(--radius-md)",background:"var(--emerald-50)",border:"1px solid var(--border-medium)",color:"var(--emerald-700)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 0.75rem auto"},children:p.jsx(Xn,{size:22})}),p.jsx("h3",{style:{fontSize:"1.5rem",color:"var(--emerald-950)",marginBottom:"0.25rem"},children:s==="login"?"Welcome Back":"Create Clean Energy Account"}),p.jsx("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)"},children:n||(s==="login"?"Access your saved incentives and intelligent agent sessions.":"Join the verified clean energy platform for rebates and modeling.")})]}),p.jsxs("button",{type:"button",onClick:I,disabled:c,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.75rem",padding:"0.75rem 1rem",borderRadius:"var(--radius-md)",border:"1px solid #dadce0",background:"#ffffff",color:"#3c4043",fontWeight:600,fontSize:"0.9375rem",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 1px 3px rgba(60,64,67,0.08)",marginBottom:"1.25rem"},onMouseEnter:O=>O.currentTarget.style.backgroundColor="#f8f9fa",onMouseLeave:O=>O.currentTarget.style.backgroundColor="#ffffff",children:[p.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",children:[p.jsx("path",{fill:"#4285F4",d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616z"}),p.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),p.jsx("path",{fill:"#FBBC05",d:"M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"}),p.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"})]}),"Continue with Google"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",margin:"1.25rem 0",color:"var(--text-subtle)",fontSize:"0.8125rem"},children:[p.jsx("div",{style:{flex:1,height:"1px",background:"var(--border-subtle)"}}),p.jsx("span",{style:{padding:"0 0.75rem",textTransform:"uppercase",letterSpacing:"0.05em"},children:"or with credentials"}),p.jsx("div",{style:{flex:1,height:"1px",background:"var(--border-subtle)"}})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",background:"var(--bg-canvas)",padding:"0.25rem",borderRadius:"var(--radius-md)",marginBottom:"1.25rem"},children:[p.jsx("button",{type:"button",onClick:()=>{o("login"),h("")},style:{padding:"0.5rem",borderRadius:"calc(var(--radius-md) - 2px)",border:"none",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",background:s==="login"?"#ffffff":"transparent",color:s==="login"?"var(--emerald-900)":"var(--text-muted)",boxShadow:s==="login"?"var(--shadow-sm)":"none"},children:"Sign In"}),p.jsx("button",{type:"button",onClick:()=>{o("register"),h("")},style:{padding:"0.5rem",borderRadius:"calc(var(--radius-md) - 2px)",border:"none",fontWeight:600,fontSize:"0.875rem",cursor:"pointer",background:s==="register"?"#ffffff":"transparent",color:s==="register"?"var(--emerald-900)":"var(--text-muted)",boxShadow:s==="register"?"var(--shadow-sm)":"none"},children:"Create Account"})]}),f&&p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem",borderRadius:"var(--radius-md)",backgroundColor:"var(--danger-soft)",color:"var(--danger)",fontSize:"0.8125rem",marginBottom:"1rem",border:"1px solid rgba(207, 60, 60, 0.2)"},children:[p.jsx(iv,{size:16}),p.jsx("span",{children:f})]}),p.jsxs("form",{onSubmit:T,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(lv,{size:14})," ",s==="register"?"Email Address":"Email or Username"]})}),p.jsx("input",{type:s==="register"?"email":"text",required:!0,className:"form-input",placeholder:s==="register"?"alex@domain.com":"alex@domain.com or alex",value:g,onChange:O=>_(O.target.value)})]}),s==="register"&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(Tf,{size:14})," Username"]})}),p.jsx("input",{type:"text",required:!0,className:"form-input",placeholder:"e.g. greenarchitect",value:M,onChange:O=>m(O.target.value)})]}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"},children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Full Name"}),p.jsx("input",{type:"text",className:"form-input",placeholder:"Alex Morgan",value:A,onChange:O=>w(O.target.value)})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[p.jsx(wf,{size:13})," ZIP Code"]})}),p.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. 42561",value:v,onChange:O=>S(O.target.value)})]})]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[p.jsx(Xn,{size:14})," Password"]})}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("input",{type:a?"text":"password",required:!0,className:"form-input",placeholder:"At least 6 characters",value:u,onChange:O=>x(O.target.value),style:{paddingRight:"2.5rem"}}),p.jsx("button",{type:"button",onClick:()=>l(!a),style:{position:"absolute",right:"0.75rem",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},children:a?p.jsx(sv,{size:16}):p.jsx(ov,{size:16})})]})]}),p.jsx("button",{type:"submit",disabled:c,className:"btn btn-primary",style:{width:"100%",marginTop:"0.5rem",padding:"0.75rem"},children:c?p.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx("i",{className:"fa fa-spinner fa-spin"})," Verifying..."]}):s==="register"?"Complete Registration":"Sign In to Account"})]})]})})}function cA(){const[t,e]=he.useState("home"),[n,i]=he.useState(null),[r,s]=he.useState(!1),[o,a]=he.useState("login"),[l,c]=he.useState(""),[d,f]=he.useState(""),[h,g]=he.useState("");he.useEffect(()=>{const S=()=>{const A=window.location.hash.replace("#/","").replace("#","");["home","products","incentives","calculator","chat"].includes(A)&&e(A)};return S(),window.addEventListener("hashchange",S),()=>window.removeEventListener("hashchange",S)},[]);const _=S=>{e(S),window.location.hash=`#/${S}`,window.scrollTo({top:0,behavior:"smooth"})};he.useEffect(()=>{localStorage.getItem("eia_auth_token")&&It.auth.me().then(A=>{i(A)}).catch(()=>{localStorage.removeItem("eia_auth_token"),i(null)})},[]);const M=S=>{g(S),setTimeout(()=>g(""),4e3)},m=(S="login",A="")=>{a(S),c(A),s(!0)},u=S=>{i(S),M(`Welcome, ${S.username||S.email}! Platform unlocked.`)},x=()=>{localStorage.removeItem("eia_auth_token"),i(null),e("home"),window.location.hash="#/home",M("Signed out. Features are locked until next login.")},v=S=>{if(!n){m("login","Sign in to consult the AI Energy Agent");return}f(S),_("chat")};return p.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[h&&p.jsxs("div",{className:"animate-fade-in",style:{position:"fixed",bottom:"24px",right:"24px",background:"var(--emerald-900)",color:"#ffffff",padding:"0.875rem 1.5rem",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-xl)",zIndex:2e3,display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.9375rem",fontWeight:600},children:[p.jsx(Xo,{size:18,color:"#55cfa8"}),p.jsx("span",{children:h})]}),p.jsx(sS,{activeTab:t,setActiveTab:_,user:n,onOpenAuth:m,onLogout:x}),p.jsxs("main",{style:{flex:1},children:[!n&&p.jsx(p.Fragment,{children:t==="home"?p.jsxs(p.Fragment,{children:[p.jsx(Um,{onNavigate:_,user:n,onOpenAuth:m,onSelectNode:S=>m("login",`Sign in to analyze the ${S.name} clean energy facility with the AI Agent`)}),p.jsx(E2,{onAuthSuccess:u}),p.jsx(w2,{onOpenAuth:m})]}):p.jsx("div",{style:{minHeight:"70vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"4rem 1.5rem",background:"radial-gradient(ellipse at 50% 30%, rgba(85, 207, 168, 0.08) 0%, rgba(246, 249, 247, 0) 80%)"},children:p.jsxs("div",{className:"card animate-fade-in",style:{maxWidth:"520px",textAlign:"center",padding:"3rem 2rem",boxShadow:"var(--shadow-xl)",border:"1px solid var(--border-medium)"},children:[p.jsx("div",{style:{width:"3.5rem",height:"3.5rem",borderRadius:"var(--radius-md)",background:"var(--emerald-50)",border:"1px solid var(--border-medium)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--emerald-700)",margin:"0 auto 1.25rem auto"},children:p.jsx(Xn,{size:26})}),p.jsx("h2",{style:{fontSize:"1.75rem",color:"var(--emerald-950)",marginBottom:"0.5rem"},children:"Authentication Required"}),p.jsxs("p",{style:{color:"var(--text-body)",fontSize:"1rem",lineHeight:1.6,marginBottom:"2rem"},children:["Access to the ",p.jsx("strong",{children:t.toUpperCase()})," feature and the Gemini 2.5 Energy Agent requires verified registration. Sign in or continue with Google to unlock full platform capabilities."]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[p.jsx("button",{onClick:()=>m("login",`Sign in to access ${t}`),className:"btn btn-primary",style:{padding:"0.875rem",fontSize:"1rem",justifyContent:"center"},children:"Sign In to Unlock"}),p.jsx("button",{onClick:()=>m("register",`Register to unlock ${t}`),className:"btn btn-secondary",style:{padding:"0.875rem",fontSize:"1rem",justifyContent:"center"},children:"Create Free Account"}),p.jsx("button",{onClick:()=>_("home"),className:"btn btn-ghost",style:{fontSize:"0.875rem"},children:"Return to Overview"})]})]})})}),n&&p.jsxs(p.Fragment,{children:[t==="home"&&p.jsxs(p.Fragment,{children:[p.jsx(Um,{onNavigate:_,user:n,onOpenAuth:m,onSelectNode:S=>v(`Provide an energy output and grid balance analysis for the ${S.name} (${S.type}) facility.`)}),p.jsx(Om,{onAskAgent:v}),p.jsx(Fm,{onAskAgent:v}),p.jsx(zm,{onAskAgent:v})]}),t==="products"&&p.jsx("div",{style:{padding:"2rem 0"},children:p.jsx(Fm,{onAskAgent:v})}),t==="incentives"&&p.jsx("div",{style:{padding:"2rem 0"},children:p.jsx(Om,{onAskAgent:v})}),t==="calculator"&&p.jsx("div",{style:{padding:"2rem 0"},children:p.jsx(zm,{onAskAgent:v})}),t==="chat"&&p.jsx(aA,{user:n,initialPrompt:d,onClearInitialPrompt:()=>f("")})]})]}),p.jsx(lA,{isOpen:r,initialMode:o,promptText:l,onClose:()=>s(!1),onAuthSuccess:u}),t!=="chat"&&p.jsx("footer",{style:{background:"var(--emerald-950)",color:"#ffffff",padding:"4rem 0 2rem 0",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:"3rem",marginBottom:"3rem"},children:[p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1rem"},children:[p.jsx("div",{style:{width:"2rem",height:"2rem",borderRadius:"var(--radius-sm)",background:"var(--emerald-700)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(dd,{size:16})}),p.jsx("span",{style:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.125rem"},children:"Clean Energy Insights"})]}),p.jsx("p",{style:{fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7)",lineHeight:1.6,maxWidth:"320px"},children:"Empowering households, enterprises, and regional utilities with generative agentic intelligence to maximize renewable adoption and carbon reduction."})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"#ffffff",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Solutions"}),p.jsxs("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.6rem",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7)"},children:[p.jsx("li",{onClick:()=>n?_("products"):m("login","Sign in to access Equipment"),style:{cursor:"pointer"},children:"Equipment Catalog"}),p.jsx("li",{onClick:()=>n?_("incentives"):m("login","Sign in to access Incentives"),style:{cursor:"pointer"},children:"Regional Incentives"}),p.jsx("li",{onClick:()=>n?_("calculator"):m("login","Sign in to access ROI Simulator"),style:{cursor:"pointer"},children:"25-Year ROI Modeling"}),p.jsx("li",{onClick:()=>n?_("chat"):m("login","Sign in to launch AI Agent"),style:{cursor:"pointer"},children:"Gemini Energy Agent"})]})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"#ffffff",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Technology"}),p.jsxs("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.6rem",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7)"},children:[p.jsx("li",{children:"Google Agent Development Kit (ADK)"}),p.jsx("li",{children:"Gemini 2.5 Flash LLM"}),p.jsx("li",{children:"Three.js 3D Spatial Rendering"}),p.jsx("li",{children:"Federal Section 25D Mapping"})]})]}),p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:"0.875rem",color:"#ffffff",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Access"}),p.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.6rem",fontSize:"0.875rem",color:"rgba(255, 255, 255, 0.7)"},children:n?p.jsxs(p.Fragment,{children:[p.jsxs("li",{style:{color:"#4ec291",fontWeight:600},children:["Signed in as ",n.username||n.email]}),p.jsx("li",{onClick:x,style:{cursor:"pointer",color:"var(--danger)"},children:"Sign Out"})]}):p.jsxs(p.Fragment,{children:[p.jsx("li",{onClick:()=>m("login"),style:{cursor:"pointer"},children:"Sign In"}),p.jsx("li",{onClick:()=>m("register"),style:{cursor:"pointer"},children:"Register with Email"}),p.jsx("li",{onClick:()=>m("login"),style:{cursor:"pointer"},children:"Continue with Google"})]})})]})]}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"2rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"0.8125rem",color:"rgba(255, 255, 255, 0.5)",flexWrap:"wrap",gap:"1rem"},children:[p.jsxs("div",{children:["© ",new Date().getFullYear()," Clean Energy Insights Inc. All rights reserved."]}),p.jsxs("div",{style:{display:"flex",gap:"1.5rem"},children:[p.jsx("span",{children:"Environmental & Safety Standards Compliant"}),p.jsx("span",{children:"ISO 14064 Carbon Validation"})]})]})]})})]})}xu.createRoot(document.getElementById("root")).render(p.jsx(Nx.StrictMode,{children:p.jsx(cA,{})}));
