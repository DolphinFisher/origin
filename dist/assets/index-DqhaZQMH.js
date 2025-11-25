function KT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function QT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yv={exports:{}},au={},vv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),YT=Symbol.for("react.portal"),XT=Symbol.for("react.fragment"),JT=Symbol.for("react.strict_mode"),ZT=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),iI=Symbol.for("react.memo"),sI=Symbol.for("react.lazy"),gm=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var _v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wv=Object.assign,Ev={};function os(t,e,n){this.props=t,this.context=e,this.refs=Ev,this.updater=n||_v}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tv(){}Tv.prototype=os.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=Ev,this.updater=n||_v}var Rd=kd.prototype=new Tv;Rd.constructor=kd;wv(Rd,os.prototype);Rd.isPureReactComponent=!0;var ym=Array.isArray,Iv=Object.prototype.hasOwnProperty,Cd={current:null},Sv={key:!0,ref:!0,__self:!0,__source:!0};function Av(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Iv.call(e,r)&&!Sv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Bo,type:t,key:s,ref:o,props:i,_owner:Cd.current}}function aI(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vm=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case YT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yc(o,0):r,ym(i)?(n="",t!=null&&(n=t.replace(vm,"$&/")+"/"),Ga(i,e,n,"",function(c){return c})):i!=null&&(Pd(i)&&(i=aI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ym(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+yc(s,l);o+=Ga(s,e,n,u,i)}else if(u=oI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+yc(s,l++),o+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Ka={transition:null},cI={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Cd};function kv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=os;ee.Fragment=XT;ee.Profiler=ZT;ee.PureComponent=kd;ee.StrictMode=JT;ee.Suspense=rI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;ee.act=kv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Iv.call(e,u)&&!Sv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Bo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};ee.createElement=Av;ee.createFactory=function(t){var e=Av.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:nI,render:t}};ee.isValidElement=Pd;ee.lazy=function(t){return{$$typeof:sI,_payload:{_status:-1,_result:t},_init:uI}};ee.memo=function(t,e){return{$$typeof:iI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ee.unstable_act=kv;ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.3.1";vv.exports=ee;var j=vv.exports;const hI=QT(j),dI=KT({__proto__:null,default:hI},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fI=j,pI=Symbol.for("react.element"),mI=Symbol.for("react.fragment"),gI=Object.prototype.hasOwnProperty,yI=fI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vI={key:!0,ref:!0,__self:!0,__source:!0};function Rv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gI.call(e,r)&&!vI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:pI,type:t,key:s,ref:o,props:i,_owner:yI.current}}au.Fragment=mI;au.jsx=Rv;au.jsxs=Rv;yv.exports=au;var E=yv.exports,rh={},Cv={exports:{}},St={},Pv={exports:{}},xv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ye=J-1>>>1,le=B[ye];if(0<i(le,Q))B[ye]=Q,B[J]=le,J=ye;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ye=0,le=B.length,Se=le>>>1;ye<Se;){var fn=2*(ye+1)-1,pn=B[fn],mn=fn+1,gn=B[mn];if(0>i(pn,J))mn<le&&0>i(gn,pn)?(B[ye]=gn,B[mn]=J,ye=mn):(B[ye]=pn,B[fn]=J,ye=fn);else if(mn<le&&0>i(gn,J))B[ye]=gn,B[mn]=J,ye=mn;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,S=!1,R=!1,N=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function P(B){if(N=!1,w(B),!R)if(n(u)!==null)R=!0,ys(O);else{var Q=n(c);Q!==null&&dn(P,Q.startTime-B)}}function O(B,Q){R=!1,N&&(N=!1,_(y),y=-1),S=!0;var J=m;try{for(w(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!C());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,m=p.priorityLevel;var le=ye(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),w(Q)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var fn=n(c);fn!==null&&dn(P,fn.startTime-Q),Se=!1}return Se}finally{p=null,m=J,S=!1}}var L=!1,T=null,y=-1,I=5,A=-1;function C(){return!(t.unstable_now()-A<I)}function D(){if(T!==null){var B=t.unstable_now();A=B;var Q=!0;try{Q=T(!0,B)}finally{Q?k():(L=!1,T=null)}}else L=!1}var k;if(typeof v=="function")k=function(){v(D)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Nr=Rt.port2;Rt.port1.onmessage=D,k=function(){Nr.postMessage(null)}}else k=function(){x(D,0)};function ys(B){T=B,L||(L=!0,k())}function dn(B,Q){y=x(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,ys(O))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var ye=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:f++,callback:Q,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>ye?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(N?(_(y),y=-1):N=!0,dn(P,J-ye))):(B.sortIndex=le,e(u,B),R||S||(R=!0,ys(O))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(xv);Pv.exports=xv;var _I=Pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wI=j,It=_I;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nv=new Set,ho={};function ii(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(ho[t]=e,t=0;t<e.length;t++)Nv.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=Object.prototype.hasOwnProperty,EI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},wm={};function TI(t){return ih.call(wm,t)?!0:ih.call(_m,t)?!1:EI.test(t)?wm[t]=!0:(_m[t]=!0,!1)}function II(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SI(t,e,n,r){if(e===null||typeof e>"u"||II(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Nd);We[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Nd);We[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Nd);We[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SI(e,n,i,r)&&(n=null),r||i===null?TI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=wI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),Ti=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ah=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Ov=Symbol.for("react.offscreen"),Em=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,vc;function js(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function wc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function AI(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ii:return"Fragment";case Ti:return"Portal";case sh:return"Profiler";case Dd:return"StrictMode";case oh:return"Suspense";case ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dv:return(t.displayName||"Context")+".Consumer";case bv:return(t._context.displayName||"Context")+".Provider";case Od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:lh(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return lh(t(e))}catch{}}return null}function kI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lh(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RI(t){var e=Vv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=RI(t))}function Lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mv(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function ch(t,e){Mv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Us(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Fv(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ka,Uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CI=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){CI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function zv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function Bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ph(t,e){if(e){if(PI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yh=null,Li=null,Mi=null;function km(t){if(t=Wo(t)){if(typeof yh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=du(e),yh(t.stateNode,t.type,e))}}function $v(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function Hv(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,km(t),e)for(t=0;t<e.length;t++)km(e[t])}}function Wv(t,e){return t(e)}function qv(){}var Ec=!1;function Gv(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return Wv(t,e,n)}finally{Ec=!1,(Li!==null||Mi!==null)&&(qv(),Hv())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var r=du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var vh=!1;if(Cn)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){vh=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{vh=!1}function xI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Xs=!1,gl=null,yl=!1,_h=null,NI={onError:function(t){Xs=!0,gl=t}};function bI(t,e,n,r,i,s,o,l,u){Xs=!1,gl=null,xI.apply(NI,arguments)}function DI(t,e,n,r,i,s,o,l,u){if(bI.apply(this,arguments),Xs){if(Xs){var c=gl;Xs=!1,gl=null}else throw Error(U(198));yl||(yl=!0,_h=c)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(si(t)!==t)throw Error(U(188))}function OI(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rm(i),t;if(s===r)return Rm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Qv(t){return t=OI(t),t!==null?Yv(t):null}function Yv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yv(t);if(e!==null)return e;t=t.sibling}return null}var Xv=It.unstable_scheduleCallback,Cm=It.unstable_cancelCallback,VI=It.unstable_shouldYield,LI=It.unstable_requestPaint,ke=It.unstable_now,MI=It.unstable_getCurrentPriorityLevel,Md=It.unstable_ImmediatePriority,Jv=It.unstable_UserBlockingPriority,vl=It.unstable_NormalPriority,FI=It.unstable_LowPriority,Zv=It.unstable_IdlePriority,lu=null,Xt=null;function jI(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:BI,UI=Math.log,zI=Math.LN2;function BI(t){return t>>>=0,t===0?32:31-(UI(t)/zI|0)|0}var Ra=64,Ca=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=zs(l):(s&=o,s!==0&&(r=zs(s)))}else o=n&~i,o!==0?r=zs(o):s!==0&&(r=zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function $I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=$I(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e_(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function WI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function t_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n_,jd,r_,i_,s_,Eh=!1,Pa=[],tr=null,nr=null,rr=null,mo=new Map,go=new Map,Wn=[],qI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GI(t,e,n,r,i){switch(e){case"focusin":return tr=Ds(tr,t,e,n,r,i),!0;case"dragenter":return nr=Ds(nr,t,e,n,r,i),!0;case"mouseover":return rr=Ds(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mo.set(s,Ds(mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,go.set(s,Ds(go.get(s)||null,t,e,n,r,i)),!0}return!1}function o_(t){var e=Ur(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=Kv(n),e!==null){t.blockedOn=e,s_(t.priority,function(){r_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gh=r,n.target.dispatchEvent(r),gh=null}else return e=Wo(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Qa(t)&&n.delete(e)}function KI(){Eh=!1,tr!==null&&Qa(tr)&&(tr=null),nr!==null&&Qa(nr)&&(nr=null),rr!==null&&Qa(rr)&&(rr=null),mo.forEach(xm),go.forEach(xm)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,Eh||(Eh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,KI)))}function yo(t){function e(i){return Os(i,t)}if(0<Pa.length){Os(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Os(tr,t),nr!==null&&Os(nr,t),rr!==null&&Os(rr,t),mo.forEach(e),go.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)o_(n),n.blockedOn===null&&Wn.shift()}var Fi=Mn.ReactCurrentBatchConfig,wl=!0;function QI(t,e,n,r){var i=ae,s=Fi.transition;Fi.transition=null;try{ae=1,Ud(t,e,n,r)}finally{ae=i,Fi.transition=s}}function YI(t,e,n,r){var i=ae,s=Fi.transition;Fi.transition=null;try{ae=4,Ud(t,e,n,r)}finally{ae=i,Fi.transition=s}}function Ud(t,e,n,r){if(wl){var i=Th(t,e,n,r);if(i===null)bc(t,e,r,El,n),Pm(t,r);else if(GI(i,t,e,n,r))r.stopPropagation();else if(Pm(t,r),e&4&&-1<qI.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&n_(s),s=Th(t,e,n,r),s===null&&bc(t,e,r,El,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bc(t,e,r,null,n)}}var El=null;function Th(t,e,n,r){if(El=null,t=Ld(r),t=Ur(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function a_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MI()){case Md:return 1;case Jv:return 4;case vl:case FI:return 16;case Zv:return 536870912;default:return 16}default:return 16}}var Xn=null,zd=null,Ya=null;function l_(){if(Ya)return Ya;var t,e=zd,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ya=i.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function Nm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:Nm,this.isPropagationStopped=Nm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bd=At(as),Ho=we({},as,{view:0,detail:0}),XI=At(Ho),Ic,Sc,Vs,uu=we({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(Ic=t.screenX-Vs.screenX,Sc=t.screenY-Vs.screenY):Sc=Ic=0,Vs=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),bm=At(uu),JI=we({},uu,{dataTransfer:0}),ZI=At(JI),e1=we({},Ho,{relatedTarget:0}),Ac=At(e1),t1=we({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=At(t1),r1=we({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i1=At(r1),s1=we({},as,{data:0}),Dm=At(s1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l1[t])?!!e[t]:!1}function $d(){return u1}var c1=we({},Ho,{key:function(t){if(t.key){var e=o1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h1=At(c1),d1=we({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=At(d1),f1=we({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),p1=At(f1),m1=we({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=At(m1),y1=we({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=At(y1),_1=[9,13,27,32],Hd=Cn&&"CompositionEvent"in window,Js=null;Cn&&"documentMode"in document&&(Js=document.documentMode);var w1=Cn&&"TextEvent"in window&&!Js,u_=Cn&&(!Hd||Js&&8<Js&&11>=Js),Vm=" ",Lm=!1;function c_(t,e){switch(t){case"keyup":return _1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function E1(t,e){switch(t){case"compositionend":return h_(e);case"keypress":return e.which!==32?null:(Lm=!0,Vm);case"textInput":return t=e.data,t===Vm&&Lm?null:t;default:return null}}function T1(t,e){if(Si)return t==="compositionend"||!Hd&&c_(t,e)?(t=l_(),Ya=zd=Xn=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u_&&e.locale!=="ko"?null:e.data;default:return null}}var I1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I1[t.type]:e==="textarea"}function d_(t,e,n,r){$v(r),e=Tl(e,"onChange"),0<e.length&&(n=new Bd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zs=null,vo=null;function S1(t){I_(t,0)}function cu(t){var e=Ri(t);if(Lv(e))return t}function A1(t,e){if(t==="change")return e}var f_=!1;if(Cn){var kc;if(Cn){var Rc="oninput"in document;if(!Rc){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Rc=typeof Fm.oninput=="function"}kc=Rc}else kc=!1;f_=kc&&(!document.documentMode||9<document.documentMode)}function jm(){Zs&&(Zs.detachEvent("onpropertychange",p_),vo=Zs=null)}function p_(t){if(t.propertyName==="value"&&cu(vo)){var e=[];d_(e,vo,t,Ld(t)),Gv(S1,e)}}function k1(t,e,n){t==="focusin"?(jm(),Zs=e,vo=n,Zs.attachEvent("onpropertychange",p_)):t==="focusout"&&jm()}function R1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(vo)}function C1(t,e){if(t==="click")return cu(e)}function P1(t,e){if(t==="input"||t==="change")return cu(e)}function x1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:x1;function _o(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ih.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=Um(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function m_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g_(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function N1(t){var e=g_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m_(n.ownerDocument.documentElement,n)){if(r!==null&&Wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zm(n,s);var o=zm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b1=Cn&&"documentMode"in document&&11>=document.documentMode,Ai=null,Ih=null,eo=null,Sh=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sh||Ai==null||Ai!==ml(r)||(r=Ai,"selectionStart"in r&&Wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&_o(eo,r)||(eo=r,r=Tl(Ih,"onSelect"),0<r.length&&(e=new Bd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Cc={},y_={};Cn&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function hu(t){if(Cc[t])return Cc[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y_)return Cc[t]=e[n];return t}var v_=hu("animationend"),__=hu("animationiteration"),w_=hu("animationstart"),E_=hu("transitionend"),T_=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){T_.set(t,e),ii(e,[t])}for(var Pc=0;Pc<$m.length;Pc++){var xc=$m[Pc],D1=xc.toLowerCase(),O1=xc[0].toUpperCase()+xc.slice(1);Sr(D1,"on"+O1)}Sr(v_,"onAnimationEnd");Sr(__,"onAnimationIteration");Sr(w_,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(E_,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DI(r,e,void 0,t),t.currentTarget=null}function I_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,c),s=u}}}if(yl)throw t=_h,yl=!1,_h=null,t}function de(t,e){var n=e[Ph];n===void 0&&(n=e[Ph]=new Set);var r=t+"__bubble";n.has(r)||(S_(e,t,2,!1),n.add(r))}function Nc(t,e,n){var r=0;e&&(r|=4),S_(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[ba]){t[ba]=!0,Nv.forEach(function(n){n!=="selectionchange"&&(V1.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Nc("selectionchange",!1,e))}}function S_(t,e,n,r){switch(a_(e)){case 1:var i=QI;break;case 4:i=YI;break;default:i=Ud}n=i.bind(null,e,n,t),i=void 0,!vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Gv(function(){var c=s,f=Ld(n),p=[];e:{var m=T_.get(t);if(m!==void 0){var S=Bd,R=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":S=h1;break;case"focusin":R="focus",S=Ac;break;case"focusout":R="blur",S=Ac;break;case"beforeblur":case"afterblur":S=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ZI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=p1;break;case v_:case __:case w_:S=n1;break;case E_:S=g1;break;case"scroll":S=XI;break;case"wheel":S=v1;break;case"copy":case"cut":case"paste":S=i1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Om}var N=(e&4)!==0,x=!N&&t==="scroll",_=N?m!==null?m+"Capture":null:m;N=[];for(var v=c,w;v!==null;){w=v;var P=w.stateNode;if(w.tag===5&&P!==null&&(w=P,_!==null&&(P=po(v,_),P!=null&&N.push(Eo(v,P,w)))),x)break;v=v.return}0<N.length&&(m=new S(m,R,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==gh&&(R=n.relatedTarget||n.fromElement)&&(Ur(R)||R[Pn]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=c,R=R?Ur(R):null,R!==null&&(x=si(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=c),S!==R)){if(N=bm,P="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=Om,P="onPointerLeave",_="onPointerEnter",v="pointer"),x=S==null?m:Ri(S),w=R==null?m:Ri(R),m=new N(P,v+"leave",S,n,f),m.target=x,m.relatedTarget=w,P=null,Ur(f)===c&&(N=new N(_,v+"enter",R,n,f),N.target=w,N.relatedTarget=x,P=N),x=P,S&&R)t:{for(N=S,_=R,v=0,w=N;w;w=yi(w))v++;for(w=0,P=_;P;P=yi(P))w++;for(;0<v-w;)N=yi(N),v--;for(;0<w-v;)_=yi(_),w--;for(;v--;){if(N===_||_!==null&&N===_.alternate)break t;N=yi(N),_=yi(_)}N=null}else N=null;S!==null&&Wm(p,m,S,N,!1),R!==null&&x!==null&&Wm(p,x,R,N,!0)}}e:{if(m=c?Ri(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var O=A1;else if(Mm(m))if(f_)O=P1;else{O=R1;var L=k1}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=C1);if(O&&(O=O(t,c))){d_(p,O,n,f);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&hh(m,"number",m.value)}switch(L=c?Ri(c):window,t){case"focusin":(Mm(L)||L.contentEditable==="true")&&(Ai=L,Ih=c,eo=null);break;case"focusout":eo=Ih=Ai=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,Bm(p,n,f);break;case"selectionchange":if(b1)break;case"keydown":case"keyup":Bm(p,n,f)}var T;if(Hd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Si?c_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(u_&&n.locale!=="ko"&&(Si||y!=="onCompositionStart"?y==="onCompositionEnd"&&Si&&(T=l_()):(Xn=f,zd="value"in Xn?Xn.value:Xn.textContent,Si=!0)),L=Tl(c,y),0<L.length&&(y=new Dm(y,t,null,n,f),p.push({event:y,listeners:L}),T?y.data=T:(T=h_(n),T!==null&&(y.data=T)))),(T=w1?E1(t,n):T1(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(f=new Dm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}I_(p,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=po(t,n),s!=null&&r.unshift(Eo(t,s,i)),s=po(t,e),s!=null&&r.push(Eo(t,s,i))),t=t.return}return r}function yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=po(n,s),u!=null&&o.unshift(Eo(n,u,l))):i||(u=po(n,s),u!=null&&o.push(Eo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var L1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(L1,`
`).replace(M1,"")}function Da(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(U(425))}function Il(){}var Ah=null,kh=null;function Rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(t){return Gm.resolve(null).then(t).catch(U1)}:Ch;function U1(t){setTimeout(function(){throw t})}function Dc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yo(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ls,To="__reactProps$"+ls,Pn="__reactContainer$"+ls,Ph="__reactEvents$"+ls,z1="__reactListeners$"+ls,B1="__reactHandles$"+ls;function Ur(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Km(t);t!==null;){if(n=t[Yt])return n;t=Km(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Yt]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function du(t){return t[To]||null}var xh=[],Ci=-1;function Ar(t){return{current:t}}function me(t){0>Ci||(t.current=xh[Ci],xh[Ci]=null,Ci--)}function ce(t,e){Ci++,xh[Ci]=t.current,t.current=e}var mr={},nt=Ar(mr),pt=Ar(!1),Gr=mr;function Gi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Sl(){me(pt),me(nt)}function Qm(t,e,n){if(nt.current!==mr)throw Error(U(168));ce(nt,e),ce(pt,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,kI(t)||"Unknown",i));return we({},n,r)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Gr=nt.current,ce(nt,t),ce(pt,pt.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=A_(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,me(pt),me(nt),ce(nt,t)):me(pt),ce(pt,n)}var wn=null,fu=!1,Oc=!1;function k_(t){wn===null?wn=[t]:wn.push(t)}function $1(t){fu=!0,k_(t)}function kr(){if(!Oc&&wn!==null){Oc=!0;var t=0,e=ae;try{var n=wn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,fu=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),Xv(Md,kr),i}finally{ae=e,Oc=!1}}return null}var Pi=[],xi=0,kl=null,Rl=0,Ct=[],Pt=0,Kr=null,En=1,Tn="";function Mr(t,e){Pi[xi++]=Rl,Pi[xi++]=kl,kl=t,Rl=e}function R_(t,e,n){Ct[Pt++]=En,Ct[Pt++]=Tn,Ct[Pt++]=Kr,Kr=t;var r=En;t=Tn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Bt(e)+i|n<<i|r,Tn=s+t}else En=1<<s|n<<i|r,Tn=t}function qd(t){t.return!==null&&(Mr(t,1),R_(t,1,0))}function Gd(t){for(;t===kl;)kl=Pi[--xi],Pi[xi]=null,Rl=Pi[--xi],Pi[xi]=null;for(;t===Kr;)Kr=Ct[--Pt],Ct[Pt]=null,Tn=Ct[--Pt],Ct[Pt]=null,En=Ct[--Pt],Ct[Pt]=null}var Tt=null,wt=null,ge=!1,jt=null;function C_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function Nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bh(t){if(ge){var e=wt;if(e){var n=e;if(!Xm(t,e)){if(Nh(t))throw Error(U(418));e=ir(n.nextSibling);var r=Tt;e&&Xm(t,e)?C_(r,n):(t.flags=t.flags&-4097|2,ge=!1,Tt=t)}}else{if(Nh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,Tt=t}}}function Jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Oa(t){if(t!==Tt)return!1;if(!ge)return Jm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rh(t.type,t.memoizedProps)),e&&(e=wt)){if(Nh(t))throw P_(),Error(U(418));for(;e;)C_(t,e),e=ir(e.nextSibling)}if(Jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?ir(t.stateNode.nextSibling):null;return!0}function P_(){for(var t=wt;t;)t=ir(t.nextSibling)}function Ki(){wt=Tt=null,ge=!1}function Kd(t){jt===null?jt=[t]:jt.push(t)}var H1=Mn.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function x_(t){function e(_,v){if(t){var w=_.deletions;w===null?(_.deletions=[v],_.flags|=16):w.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=lr(_,v),_.index=0,_.sibling=null,_}function s(_,v,w){return _.index=w,t?(w=_.alternate,w!==null?(w=w.index,w<v?(_.flags|=2,v):w):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,w,P){return v===null||v.tag!==6?(v=zc(w,_.mode,P),v.return=_,v):(v=i(v,w),v.return=_,v)}function u(_,v,w,P){var O=w.type;return O===Ii?f(_,v,w.props.children,P,w.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===$n&&Zm(O)===v.type)?(P=i(v,w.props),P.ref=Ls(_,v,w),P.return=_,P):(P=il(w.type,w.key,w.props,null,_.mode,P),P.ref=Ls(_,v,w),P.return=_,P)}function c(_,v,w,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Bc(w,_.mode,P),v.return=_,v):(v=i(v,w.children||[]),v.return=_,v)}function f(_,v,w,P,O){return v===null||v.tag!==7?(v=Wr(w,_.mode,P,O),v.return=_,v):(v=i(v,w),v.return=_,v)}function p(_,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zc(""+v,_.mode,w),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return w=il(v.type,v.key,v.props,null,_.mode,w),w.ref=Ls(_,null,v),w.return=_,w;case Ti:return v=Bc(v,_.mode,w),v.return=_,v;case $n:var P=v._init;return p(_,P(v._payload),w)}if(Us(v)||Ns(v))return v=Wr(v,_.mode,w,null),v.return=_,v;Va(_,v)}return null}function m(_,v,w,P){var O=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return O!==null?null:l(_,v,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Sa:return w.key===O?u(_,v,w,P):null;case Ti:return w.key===O?c(_,v,w,P):null;case $n:return O=w._init,m(_,v,O(w._payload),P)}if(Us(w)||Ns(w))return O!==null?null:f(_,v,w,P,null);Va(_,w)}return null}function S(_,v,w,P,O){if(typeof P=="string"&&P!==""||typeof P=="number")return _=_.get(w)||null,l(v,_,""+P,O);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Sa:return _=_.get(P.key===null?w:P.key)||null,u(v,_,P,O);case Ti:return _=_.get(P.key===null?w:P.key)||null,c(v,_,P,O);case $n:var L=P._init;return S(_,v,w,L(P._payload),O)}if(Us(P)||Ns(P))return _=_.get(w)||null,f(v,_,P,O,null);Va(v,P)}return null}function R(_,v,w,P){for(var O=null,L=null,T=v,y=v=0,I=null;T!==null&&y<w.length;y++){T.index>y?(I=T,T=null):I=T.sibling;var A=m(_,T,w[y],P);if(A===null){T===null&&(T=I);break}t&&T&&A.alternate===null&&e(_,T),v=s(A,v,y),L===null?O=A:L.sibling=A,L=A,T=I}if(y===w.length)return n(_,T),ge&&Mr(_,y),O;if(T===null){for(;y<w.length;y++)T=p(_,w[y],P),T!==null&&(v=s(T,v,y),L===null?O=T:L.sibling=T,L=T);return ge&&Mr(_,y),O}for(T=r(_,T);y<w.length;y++)I=S(T,_,y,w[y],P),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?y:I.key),v=s(I,v,y),L===null?O=I:L.sibling=I,L=I);return t&&T.forEach(function(C){return e(_,C)}),ge&&Mr(_,y),O}function N(_,v,w,P){var O=Ns(w);if(typeof O!="function")throw Error(U(150));if(w=O.call(w),w==null)throw Error(U(151));for(var L=O=null,T=v,y=v=0,I=null,A=w.next();T!==null&&!A.done;y++,A=w.next()){T.index>y?(I=T,T=null):I=T.sibling;var C=m(_,T,A.value,P);if(C===null){T===null&&(T=I);break}t&&T&&C.alternate===null&&e(_,T),v=s(C,v,y),L===null?O=C:L.sibling=C,L=C,T=I}if(A.done)return n(_,T),ge&&Mr(_,y),O;if(T===null){for(;!A.done;y++,A=w.next())A=p(_,A.value,P),A!==null&&(v=s(A,v,y),L===null?O=A:L.sibling=A,L=A);return ge&&Mr(_,y),O}for(T=r(_,T);!A.done;y++,A=w.next())A=S(T,_,y,A.value,P),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?y:A.key),v=s(A,v,y),L===null?O=A:L.sibling=A,L=A);return t&&T.forEach(function(D){return e(_,D)}),ge&&Mr(_,y),O}function x(_,v,w,P){if(typeof w=="object"&&w!==null&&w.type===Ii&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Sa:e:{for(var O=w.key,L=v;L!==null;){if(L.key===O){if(O=w.type,O===Ii){if(L.tag===7){n(_,L.sibling),v=i(L,w.props.children),v.return=_,_=v;break e}}else if(L.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===$n&&Zm(O)===L.type){n(_,L.sibling),v=i(L,w.props),v.ref=Ls(_,L,w),v.return=_,_=v;break e}n(_,L);break}else e(_,L);L=L.sibling}w.type===Ii?(v=Wr(w.props.children,_.mode,P,w.key),v.return=_,_=v):(P=il(w.type,w.key,w.props,null,_.mode,P),P.ref=Ls(_,v,w),P.return=_,_=P)}return o(_);case Ti:e:{for(L=w.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(_,v.sibling),v=i(v,w.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=Bc(w,_.mode,P),v.return=_,_=v}return o(_);case $n:return L=w._init,x(_,v,L(w._payload),P)}if(Us(w))return R(_,v,w,P);if(Ns(w))return N(_,v,w,P);Va(_,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,w),v.return=_,_=v):(n(_,v),v=zc(w,_.mode,P),v.return=_,_=v),o(_)):n(_,v)}return x}var Qi=x_(!0),N_=x_(!1),Cl=Ar(null),Pl=null,Ni=null,Qd=null;function Yd(){Qd=Ni=Pl=null}function Xd(t){var e=Cl.current;me(Cl),t._currentValue=e}function Dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){Pl=t,Qd=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(Pl===null)throw Error(U(308));Ni=t,Pl.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var zr=null;function Jd(t){zr===null?zr=[t]:zr.push(t)}function b_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jd(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,Jd(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(m=e,S=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){p=R.call(S,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,m=typeof R=="function"?R.call(S,p,m):R,m==null)break e;p=we({},p,m);break e;case 2:Hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=p}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var qo={},Jt=Ar(qo),Io=Ar(qo),So=Ar(qo);function Br(t){if(t===qo)throw Error(U(174));return t}function ef(t,e){switch(ce(So,e),ce(Io,t),ce(Jt,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}me(Jt),ce(Jt,e)}function Yi(){me(Jt),me(Io),me(So)}function O_(t){Br(So.current);var e=Br(Jt.current),n=fh(e,t.type);e!==n&&(ce(Io,t),ce(Jt,n))}function tf(t){Io.current===t&&(me(Jt),me(Io))}var ve=Ar(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function nf(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var Za=Mn.ReactCurrentDispatcher,Lc=Mn.ReactCurrentBatchConfig,Qr=0,_e=null,Ne=null,Me=null,bl=!1,to=!1,Ao=0,W1=0;function Ye(){throw Error(U(321))}function rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function sf(t,e,n,r,i,s){if(Qr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?Q1:Y1,t=n(r,i),to){s=0;do{if(to=!1,Ao=0,25<=s)throw Error(U(301));s+=1,Me=Ne=null,e.updateQueue=null,Za.current=X1,t=n(r,i)}while(to)}if(Za.current=Dl,e=Ne!==null&&Ne.next!==null,Qr=0,Me=Ne=_e=null,bl=!1,e)throw Error(U(300));return t}function of(){var t=Ao!==0;return Ao=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=t:Me=Me.next=t,Me}function Ot(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Me===null?_e.memoizedState:Me.next;if(e!==null)Me=e,Ne=t;else{if(t===null)throw Error(U(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Me===null?_e.memoizedState=Me=t:Me=Me.next=t}return Me}function ko(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Qr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,Yr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function V_(){}function L_(t,e){var n=_e,r=Ot(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,af(j_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Ro(9,F_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(U(349));Qr&30||M_(n,e,i)}return i}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F_(t,e,n,r){e.value=n,e.getSnapshot=r,U_(e)&&z_(t)}function j_(t,e,n){return n(function(){U_(e)&&z_(t)})}function U_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function z_(t){var e=xn(t,1);e!==null&&$t(e,t,1,-1)}function ng(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=K1.bind(null,_e,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function B_(){return Ot().memoizedState}function el(t,e,n,r){var i=Kt();_e.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function pu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&rf(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function rg(t,e){return el(8390656,8,t,e)}function af(t,e){return pu(2048,8,t,e)}function $_(t,e){return pu(4,2,t,e)}function H_(t,e){return pu(4,4,t,e)}function W_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q_(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,W_.bind(null,e,t),n)}function lf(){}function G_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function K_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Q_(t,e,n){return Qr&21?(Wt(n,e)||(n=e_(),_e.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function q1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Lc.transition;Lc.transition={};try{t(!1),e()}finally{ae=n,Lc.transition=r}}function Y_(){return Ot().memoizedState}function G1(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X_(t))J_(e,n);else if(n=b_(t,e,n,r),n!==null){var i=at();$t(n,t,r,i),Z_(n,e,r)}}function K1(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X_(t))J_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,Jd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=b_(t,e,i,r),n!==null&&(i=at(),$t(n,t,r,i),Z_(n,e,r))}}function X_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function J_(t,e){to=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fd(t,n)}}var Dl={readContext:Dt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Q1={readContext:Dt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,W_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=G1.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:lf,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=q1.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Kt();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Fe===null)throw Error(U(349));Qr&30||M_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rg(j_.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,F_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Fe.identifierPrefix;if(ge){var n=Tn,r=En;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y1={readContext:Dt,useCallback:G_,useContext:Dt,useEffect:af,useImperativeHandle:q_,useInsertionEffect:$_,useLayoutEffect:H_,useMemo:K_,useReducer:Mc,useRef:B_,useState:function(){return Mc(ko)},useDebugValue:lf,useDeferredValue:function(t){var e=Ot();return Q_(e,Ne.memoizedState,t)},useTransition:function(){var t=Mc(ko)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:L_,useId:Y_,unstable_isNewReconciler:!1},X1={readContext:Dt,useCallback:G_,useContext:Dt,useEffect:af,useImperativeHandle:q_,useInsertionEffect:$_,useLayoutEffect:H_,useMemo:K_,useReducer:Fc,useRef:B_,useState:function(){return Fc(ko)},useDebugValue:lf,useDeferredValue:function(t){var e=Ot();return Ne===null?e.memoizedState=t:Q_(e,Ne.memoizedState,t)},useTransition:function(){var t=Fc(ko)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:V_,useSyncExternalStore:L_,useId:Y_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=ar(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&($t(e,t,i,r),Ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=ar(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&($t(e,t,i,r),Ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=ar(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&($t(e,t,r,n),Ja(e,t,r))}};function ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function e0(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=mt(e)?Gr:nt.current,r=e.contextTypes,s=(r=r!=null)?Gi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=mt(e)?Gr:nt.current,i.context=Gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mu.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e){try{var n="",r=e;do n+=AI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function t0(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vl||(Vl=!0,qh=r),Lh(t,e)},n}function n0(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new J1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var Z1=Mn.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?N_(e,null,n,r):Qi(e,t.child,n,r)}function ug(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=sf(t,e,n,r,s,i),n=of(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ge&&n&&qd(e),e.flags|=1,ot(t,e,r,i),e.child)}function cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,r,i)):(t=il(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_o(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return Mh(t,e,n,r,i)}function i0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Di,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Di,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Di,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Di,vt),vt|=r;return ot(t,e,i,n),e.child}function s0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,i){var s=mt(n)?Gr:nt.current;return s=Gi(e,s),ji(e,i),n=sf(t,e,n,r,s,i),r=of(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ge&&r&&qd(e),e.flags|=1,ot(t,e,n,i),e.child)}function hg(t,e,n,r,i){if(mt(n)){var s=!0;Al(e)}else s=!1;if(ji(e,i),e.stateNode===null)tl(t,e),e0(e,n,r),Vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=mt(n)?Gr:nt.current,c=Gi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&sg(e,o,r,c),Hn=!1;var m=e.memoizedState;o.state=m,xl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||pt.current||Hn?(typeof f=="function"&&(Oh(e,n,f,r),u=e.memoizedState),(l=Hn||ig(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=mt(n)?Gr:nt.current,u=Gi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&sg(e,o,r,u),Hn=!1,m=e.memoizedState,o.state=m,xl(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||pt.current||Hn?(typeof S=="function"&&(Oh(e,n,S,r),R=e.memoizedState),(c=Hn||ig(e,n,c,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Fh(t,e,n,r,s,i)}function Fh(t,e,n,r,i,s){s0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ym(e,n,!1),Nn(t,e,s);r=e.stateNode,Z1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qi(e,t.child,null,s),e.child=Qi(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&Ym(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),ef(t,e.containerInfo)}function dg(t,e,n,r,i){return Ki(),Kd(i),e.flags|=256,ot(t,e,n,r),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function a0(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ve,i&1),t===null)return bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=jh,t):uf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return eS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jh,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uf(t,e){return e=vu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&Kd(r),Qi(e,t.child,null,n),t=uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=jc(Error(U(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qi(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=jh,s);if(!(e.mode&1))return La(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=jc(s,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),$t(r,t,i,-1))}return mf(),r=jc(Error(U(421))),La(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=ir(i.nextSibling),Tt=e,ge=!0,jt=null,t!==null&&(Ct[Pt++]=En,Ct[Pt++]=Tn,Ct[Pt++]=Kr,En=t.id,Tn=t.overflow,Kr=e),e=uf(e,r.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dh(t.return,e,n)}function Uc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function l0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uc(e,!0,n,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:o0(e),Ki();break;case 5:O_(e);break;case 1:mt(e.type)&&Al(e);break;case 4:ef(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?a0(t,e,n):(ce(ve,ve.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return l0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,i0(t,e,n)}return Nn(t,e,n)}var u0,zh,c0,h0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};c0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Br(Jt.current);var s=null;switch(n){case"input":i=uh(t,i),r=uh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=dh(t,i),r=dh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}ph(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ho.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nS(t,e,n){var r=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return mt(e.type)&&Sl(),Xe(e),null;case 3:return r=e.stateNode,Yi(),me(pt),me(nt),nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(Qh(jt),jt=null))),zh(t,e),Xe(e),null;case 5:tf(e);var i=Br(So.current);if(n=e.type,t!==null&&e.stateNode!=null)c0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Xe(e),null}if(t=Br(Jt.current),Oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[To]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Bs.length;i++)de(Bs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Tm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Sm(r,s),de("invalid",r)}ph(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",""+l]):ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Aa(r),Im(r,s,!0);break;case"textarea":Aa(r),Am(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[To]=r,u0(t,e,!1,!1),e.stateNode=t;e:{switch(o=mh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bs.length;i++)de(Bs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Tm(t,r),i=uh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Sm(t,r),i=dh(t,r),de("invalid",t);break;default:i=r}ph(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Bv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fo(t,u):typeof u=="number"&&fo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&bd(t,s,u,o))}switch(n){case"input":Aa(t),Im(t,r,!1);break;case"textarea":Aa(t),Am(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)h0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Br(So.current),Br(Jt.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Xe(e),null;case 13:if(me(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&wt!==null&&e.mode&1&&!(e.flags&128))P_(),Ki(),e.flags|=98560,s=!1;else if(s=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Yt]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else jt!==null&&(Qh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?De===0&&(De=3):mf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Yi(),zh(t,e),t===null&&wo(e.stateNode.containerInfo),Xe(e),null;case 10:return Xd(e.type._context),Xe(e),null;case 17:return mt(e.type)&&Sl(),Xe(e),null;case 19:if(me(ve),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Ji&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Xe(e),null}else 2*ke()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function rS(t,e){switch(Gd(e),e.tag){case 1:return mt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),me(pt),me(nt),nf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tf(e),null;case 13:if(me(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(ve),null;case 4:return Yi(),null;case 10:return Xd(e.type._context),null;case 22:case 23:return pf(),null;case 24:return null;default:return null}}var Ma=!1,et=!1,iS=typeof WeakSet=="function"?WeakSet:Set,H=null;function bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var pg=!1;function sS(t,e){if(Ah=wl,t=g_(),Wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kh={focusedElem:t,selectionRange:n},wl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,x=R.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?N:Mt(e.type,N),x);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(P){Ie(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return R=pg,pg=!1,R}function no(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bh(e,n,s)}i=i.next}while(i!==r)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function d0(t){var e=t.alternate;e!==null&&(t.alternate=null,d0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[To],delete e[Ph],delete e[z1],delete e[B1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f0(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function Wh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wh(t,e,n),t=t.sibling;t!==null;)Wh(t,e,n),t=t.sibling}var ze=null,Ft=!1;function zn(t,e,n){for(n=n.child;n!==null;)p0(t,e,n),n=n.sibling}function p0(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:et||bi(n,e);case 6:var r=ze,i=Ft;ze=null,zn(t,e,n),ze=r,Ft=i,ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?Dc(t.parentNode,n):t.nodeType===1&&Dc(t,n),yo(t)):Dc(ze,n.stateNode));break;case 4:r=ze,i=Ft,ze=n.stateNode.containerInfo,Ft=!0,zn(t,e,n),ze=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bh(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!et&&(bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,zn(t,e,n),et=r):zn(t,e,n);break;default:zn(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iS),e.forEach(function(r){var i=pS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ft=!1;break e;case 3:ze=l.stateNode.containerInfo,Ft=!0;break e;case 4:ze=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(ze===null)throw Error(U(160));p0(s,o,i),ze=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)m0(e,t),e=e.sibling}function m0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Gt(t),r&4){try{no(3,t,t.return),gu(3,t)}catch(N){Ie(t,t.return,N)}try{no(5,t,t.return)}catch(N){Ie(t,t.return,N)}}break;case 1:Lt(e,t),Gt(t),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Lt(e,t),Gt(t),r&512&&n!==null&&bi(n,n.return),t.flags&32){var i=t.stateNode;try{fo(i,"")}catch(N){Ie(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Mv(i,s),mh(l,o);var c=mh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Bv(i,p):f==="dangerouslySetInnerHTML"?Uv(i,p):f==="children"?fo(i,p):bd(i,f,p,c)}switch(l){case"input":ch(i,s);break;case"textarea":Fv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Vi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[To]=s}catch(N){Ie(t,t.return,N)}}break;case 6:if(Lt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ie(t,t.return,N)}}break;case 3:if(Lt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(N){Ie(t,t.return,N)}break;case 4:Lt(e,t),Gt(t);break;case 13:Lt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(df=ke())),r&4&&gg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||f,Lt(e,t),et=c):Lt(e,t),Gt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,S=m.child,m.tag){case 0:case 11:case 14:case 15:no(4,m,m.return);break;case 1:bi(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Ie(r,n,N)}}break;case 5:bi(m,m.return);break;case 22:if(m.memoizedState!==null){vg(p);continue}}S!==null?(S.return=m,H=S):vg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=zv("display",o))}catch(N){Ie(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Ie(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Gt(t),r&4&&gg(t);break;case 21:break;default:Lt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var s=mg(t);Wh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mg(t);Hh(t,l,o);break;default:throw Error(U(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){H=t,g0(t)}function g0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ma;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=Ma;var c=et;if(Ma=o,(et=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?_g(i):u!==null?(u.return=o,H=u):_g(i);for(;s!==null;)H=s,g0(s),s=s.sibling;H=i,Ma=l,et=c}yg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):yg(t)}}function yg(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&yo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}et||e.flags&512&&$h(e)}catch(m){Ie(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function vg(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function _g(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{$h(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{$h(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var aS=Math.ceil,Ol=Mn.ReactCurrentDispatcher,cf=Mn.ReactCurrentOwner,bt=Mn.ReactCurrentBatchConfig,ie=0,Fe=null,Ce=null,He=0,vt=0,Di=Ar(0),De=0,Co=null,Yr=0,yu=0,hf=0,ro=null,ht=null,df=0,Ji=1/0,_n=null,Vl=!1,qh=null,or=null,Fa=!1,Jn=null,Ll=0,io=0,Gh=null,nl=-1,rl=0;function at(){return ie&6?ke():nl!==-1?nl:nl=ke()}function ar(t){return t.mode&1?ie&2&&He!==0?He&-He:H1.transition!==null?(rl===0&&(rl=e_()),rl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:a_(t.type)),t):1}function $t(t,e,n,r){if(50<io)throw io=0,Gh=null,Error(U(185));$o(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(yu|=n),De===4&&qn(t,He)),gt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Ji=ke()+500,fu&&kr()))}function gt(t,e){var n=t.callbackNode;HI(t,e);var r=_l(t,t===Fe?He:0);if(r===0)n!==null&&Cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cm(n),e===1)t.tag===0?$1(wg.bind(null,t)):k_(wg.bind(null,t)),j1(function(){!(ie&6)&&kr()}),n=null;else{switch(t_(r)){case 1:n=Md;break;case 4:n=Jv;break;case 16:n=vl;break;case 536870912:n=Zv;break;default:n=vl}n=S0(n,y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y0(t,e){if(nl=-1,rl=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=_l(t,t===Fe?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=ie;ie|=2;var s=_0();(Fe!==t||He!==e)&&(_n=null,Ji=ke()+500,Hr(t,e));do try{cS();break}catch(l){v0(t,l)}while(!0);Yd(),Ol.current=s,ie=i,Ce!==null?e=0:(Fe=null,He=0,e=De)}if(e!==0){if(e===2&&(i=wh(t),i!==0&&(r=i,e=Kh(t,i))),e===1)throw n=Co,Hr(t,0),qn(t,r),gt(t,ke()),n;if(e===6)qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!lS(i)&&(e=Ml(t,r),e===2&&(s=wh(t),s!==0&&(r=s,e=Kh(t,s))),e===1))throw n=Co,Hr(t,0),qn(t,r),gt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Fr(t,ht,_n);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=df+500-ke(),10<e)){if(_l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ch(Fr.bind(null,t,ht,_n),e);break}Fr(t,ht,_n);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aS(r/1960))-r,10<r){t.timeoutHandle=Ch(Fr.bind(null,t,ht,_n),r);break}Fr(t,ht,_n);break;case 5:Fr(t,ht,_n);break;default:throw Error(U(329))}}}return gt(t,ke()),t.callbackNode===n?y0.bind(null,t):null}function Kh(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=ht,ht=n,e!==null&&Qh(e)),t}function Qh(t){ht===null?ht=t:ht.push.apply(ht,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~hf,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function wg(t){if(ie&6)throw Error(U(327));Ui();var e=_l(t,0);if(!(e&1))return gt(t,ke()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=wh(t);r!==0&&(e=r,n=Kh(t,r))}if(n===1)throw n=Co,Hr(t,0),qn(t,e),gt(t,ke()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,ht,_n),gt(t,ke()),null}function ff(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Ji=ke()+500,fu&&kr())}}function Xr(t){Jn!==null&&Jn.tag===0&&!(ie&6)&&Ui();var e=ie;ie|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,t)return t()}finally{ae=r,bt.transition=n,ie=e,!(ie&6)&&kr()}}function pf(){vt=Di.current,me(Di)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F1(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Yi(),me(pt),me(nt),nf();break;case 5:tf(r);break;case 4:Yi();break;case 13:me(ve);break;case 19:me(ve);break;case 10:Xd(r.type._context);break;case 22:case 23:pf()}n=n.return}if(Fe=t,Ce=t=lr(t.current,null),He=vt=e,De=0,Co=null,hf=yu=Yr=0,ht=ro=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function v0(t,e){do{var n=Ce;try{if(Yd(),Za.current=Dl,bl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bl=!1}if(Qr=0,Me=Ne=_e=null,to=!1,Ao=0,cf.current=null,n===null||n.return===null){De=1,Co=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=He,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=ag(o);if(S!==null){S.flags&=-257,lg(S,o,l,s,e),S.mode&1&&og(s,c,e),e=S,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){og(s,c,e),mf();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var x=ag(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),lg(x,o,l,s,e),Kd(Xi(u,l));break e}}s=u=Xi(u,l),De!==4&&(De=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=t0(s,u,e);eg(s,_);break e;case 1:l=u;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(or===null||!or.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=n0(s,l,e);eg(s,P);break e}}s=s.return}while(s!==null)}E0(n)}catch(O){e=O,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function _0(){var t=Ol.current;return Ol.current=Dl,t===null?Dl:t}function mf(){(De===0||De===3||De===2)&&(De=4),Fe===null||!(Yr&268435455)&&!(yu&268435455)||qn(Fe,He)}function Ml(t,e){var n=ie;ie|=2;var r=_0();(Fe!==t||He!==e)&&(_n=null,Hr(t,e));do try{uS();break}catch(i){v0(t,i)}while(!0);if(Yd(),ie=n,Ol.current=r,Ce!==null)throw Error(U(261));return Fe=null,He=0,De}function uS(){for(;Ce!==null;)w0(Ce)}function cS(){for(;Ce!==null&&!VI();)w0(Ce)}function w0(t){var e=I0(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?E0(t):Ce=e,cf.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rS(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Ce=null;return}}else if(n=nS(n,e,vt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);De===0&&(De=5)}function Fr(t,e,n){var r=ae,i=bt.transition;try{bt.transition=null,ae=1,hS(t,e,n,r)}finally{bt.transition=i,ae=r}return null}function hS(t,e,n,r){do Ui();while(Jn!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WI(t,s),t===Fe&&(Ce=Fe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,S0(vl,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,cf.current=null,sS(t,n),m0(n,t),N1(kh),wl=!!Ah,kh=Ah=null,t.current=n,oS(n),LI(),ie=l,ae=o,bt.transition=s}else t.current=n;if(Fa&&(Fa=!1,Jn=t,Ll=i),s=t.pendingLanes,s===0&&(or=null),jI(n.stateNode),gt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vl)throw Vl=!1,t=qh,qh=null,t;return Ll&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===Gh?io++:(io=0,Gh=t):io=0,kr(),null}function Ui(){if(Jn!==null){var t=t_(Ll),e=bt.transition,n=ae;try{if(bt.transition=null,ae=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,Ll=0,ie&6)throw Error(U(331));var i=ie;for(ie|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:no(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,S=f.return;if(d0(f),f===c){H=null;break}if(m!==null){m.return=S,H=m;break}H=S}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var x=N.sibling;N.sibling=null,N=x}while(N!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:no(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,H=_;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,H=w;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gu(9,l)}}catch(O){Ie(l,l.return,O)}if(l===o){H=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,H=P;break e}H=l.return}}if(ie=i,kr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(lu,t)}catch{}r=!0}return r}finally{ae=n,bt.transition=e}}return!1}function Eg(t,e,n){e=Xi(n,e),e=t0(t,e,1),t=sr(t,e,1),e=at(),t!==null&&($o(t,1,e),gt(t,e))}function Ie(t,e,n){if(t.tag===3)Eg(t,t,n);else for(;e!==null;){if(e.tag===3){Eg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=Xi(n,t),t=n0(e,t,1),e=sr(e,t,1),t=at(),e!==null&&($o(e,1,t),gt(e,t));break}}e=e.return}}function dS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(He&n)===n&&(De===4||De===3&&(He&130023424)===He&&500>ke()-df?Hr(t,0):hf|=n),gt(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):e=1);var n=at();t=xn(t,e),t!==null&&($o(t,e,n),gt(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),T0(t,n)}var I0;I0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,tS(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ge&&e.flags&1048576&&R_(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(t,e),t=e.pendingProps;var i=Gi(e,nt.current);ji(e,n),i=sf(null,e,r,t,i,n);var s=of();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Al(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zd(e),i.updater=mu,e.stateNode=i,i._reactInternals=e,Vh(e,r,t,n),e=Fh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&qd(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gS(r),t=Mt(r,t),i){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=hg(null,e,r,t,n);break e;case 11:e=ug(null,e,r,t,n);break e;case 14:e=cg(null,e,r,Mt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),hg(t,e,r,i,n);case 3:e:{if(o0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D_(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(U(423)),e),e=dg(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(U(424)),e),e=dg(t,e,r,n,i);break e}else for(wt=ir(e.stateNode.containerInfo.firstChild),Tt=e,ge=!0,jt=null,n=N_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=Nn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return O_(e),t===null&&bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rh(r,i)?o=null:s!==null&&Rh(r,s)&&(e.flags|=32),s0(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&bh(e),null;case 13:return a0(t,e,n);case 4:return ef(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ug(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Cl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!pt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Dt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),cg(t,e,r,i,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),tl(t,e),e.tag=1,mt(r)?(t=!0,Al(e)):t=!1,ji(e,n),e0(e,r,i),Vh(e,r,i,n),Fh(null,e,r,!0,t,n);case 19:return l0(t,e,n);case 22:return i0(t,e,n)}throw Error(U(156,e.tag))};function S0(t,e){return Xv(t,e)}function mS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new mS(t,e,n,r)}function gf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return gf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Od)return 11;if(t===Vd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ii:return Wr(n.children,i,s,e);case Dd:o=8,i|=8;break;case sh:return t=Nt(12,n,e,i|2),t.elementType=sh,t.lanes=s,t;case oh:return t=Nt(13,n,e,i),t.elementType=oh,t.lanes=s,t;case ah:return t=Nt(19,n,e,i),t.elementType=ah,t.lanes=s,t;case Ov:return vu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bv:o=10;break e;case Dv:o=9;break e;case Od:o=11;break e;case Vd:o=14;break e;case $n:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function vu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Ov,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,r,i,s,o,l,u){return t=new yS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zd(s),t}function vS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ti,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return mr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(mt(n))return A_(t,n,e)}return e}function k0(t,e,n,r,i,s,o,l,u){return t=yf(n,r,!0,t,i,s,o,l,u),t.context=A0(null),n=t.current,r=at(),i=ar(n),s=An(r,i),s.callback=e??null,sr(n,s,i),t.current.lanes=i,$o(t,i,r),gt(t,r),t}function _u(t,e,n,r){var i=e.current,s=at(),o=ar(i);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&($t(t,i,o,s),Ja(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vf(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function _S(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function _f(t){this._internalRoot=t}wu.prototype.render=_f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));_u(t,e,null,null)};wu.prototype.unmount=_f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){_u(null,t,null,null)}),e[Pn]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=i_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&o_(t)}};function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function wS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fl(o);s.call(c)}}var o=k0(e,r,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[Pn]=o.current,wo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Fl(u);l.call(c)}}var u=yf(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=u,t[Pn]=u.current,wo(t.nodeType===8?t.parentNode:t),Xr(function(){_u(e,u,n,r)}),u}function Tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fl(o);l.call(u)}}_u(e,o,t,i)}else o=wS(n,e,t,i,r);return Fl(o)}n_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(Fd(e,n|1),gt(e,ke()),!(ie&6)&&(Ji=ke()+500,kr()))}break;case 13:Xr(function(){var r=xn(t,1);if(r!==null){var i=at();$t(r,t,1,i)}}),vf(t,1)}};jd=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=at();$t(e,t,134217728,n)}vf(t,134217728)}};r_=function(t){if(t.tag===13){var e=ar(t),n=xn(t,e);if(n!==null){var r=at();$t(n,t,e,r)}vf(t,e)}};i_=function(){return ae};s_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};yh=function(t,e,n){switch(e){case"input":if(ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=du(r);if(!i)throw Error(U(90));Lv(r),ch(r,i)}}}break;case"textarea":Fv(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};Wv=ff;qv=Xr;var ES={usingClientEntryPoint:!1,Events:[Wo,Ri,du,$v,Hv,ff]},Fs={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TS={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qv(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{lu=ja.inject(TS),Xt=ja}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(e))throw Error(U(200));return vS(t,e,null,n)};St.createRoot=function(t,e){if(!wf(t))throw Error(U(299));var n=!1,r="",i=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,wo(t.nodeType===8?t.parentNode:t),new _f(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Qv(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return Xr(t)};St.hydrate=function(t,e,n){if(!Eu(e))throw Error(U(200));return Tu(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!wf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k0(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wu(e)};St.render=function(t,e,n){if(!Eu(e))throw Error(U(200));return Tu(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(U(40));return t._reactRootContainer?(Xr(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};St.unstable_batchedUpdates=ff;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Tu(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(t){console.error(t)}}C0(),Cv.exports=St;var IS=Cv.exports,Sg=IS;rh.createRoot=Sg.createRoot,rh.hydrateRoot=Sg.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(this,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const Ag="popstate";function SS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Yh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jl(i)}return kS(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ef(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AS(){return Math.random().toString(36).substr(2,8)}function kg(t,e){return{usr:t.state,key:t.key,idx:e}}function Yh(t,e,n,r){return n===void 0&&(n=null),Po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?us(e):e,{state:n,key:e&&e.key||r||AS()})}function jl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function kS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Zn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Po({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Zn.Pop;let x=f(),_=x==null?null:x-c;c=x,u&&u({action:l,location:N.location,delta:_})}function m(x,_){l=Zn.Push;let v=Yh(N.location,x,_);c=f()+1;let w=kg(v,c),P=N.createHref(v);try{o.pushState(w,"",P)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;i.location.assign(P)}s&&u&&u({action:l,location:N.location,delta:1})}function S(x,_){l=Zn.Replace;let v=Yh(N.location,x,_);c=f();let w=kg(v,c),P=N.createHref(v);o.replaceState(w,"",P),s&&u&&u({action:l,location:N.location,delta:0})}function R(x){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof x=="string"?x:jl(x);return v=v.replace(/ $/,"%20"),xe(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let N={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ag,p),u=x,()=>{i.removeEventListener(Ag,p),u=null}},createHref(x){return e(i,x)},createURL:R,encodeLocation(x){let _=R(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:S,go(x){return o.go(x)}};return N}var Rg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rg||(Rg={}));function RS(t,e,n){return n===void 0&&(n="/"),CS(t,e,n)}function CS(t,e,n,r){let i=typeof e=="string"?us(e):e,s=Tf(i.pathname||"/",n);if(s==null)return null;let o=P0(t);PS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=zS(s);l=FS(o[u],c)}return l}function P0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ur([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),P0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:LS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of x0(s.path))i(s,o,u)}),e}function x0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=x0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function PS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xS=/^:[\w-]+$/,NS=3,bS=2,DS=1,OS=10,VS=-2,Cg=t=>t==="*";function LS(t,e){let n=t.split("/"),r=n.length;return n.some(Cg)&&(r+=VS),e&&(r+=bS),n.filter(i=>!Cg(i)).reduce((i,s)=>i+(xS.test(s)?NS:s===""?DS:OS),r)}function MS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function FS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=jS({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ur([s,p.pathname]),pathnameBase:qS(ur([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ur([s,p.pathnameBase]))}return o}function jS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=US(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:S}=f;if(m==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const R=l[p];return S&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function US(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ef(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function zS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ef(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const BS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$S=t=>BS.test(t);function HS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?us(t):t,s;if(n)if($S(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Ef(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Pg(n.substring(1),"/"):s=Pg(n,e)}else s=e;return{pathname:s,search:GS(r),hash:KS(i)}}function Pg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function N0(t,e){let n=WS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function b0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=us(t):(i=Po({},t),xe(!i.pathname||!i.pathname.includes("?"),$c("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),$c("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),$c("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=HS(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),qS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const D0=["post","put","patch","delete"];new Set(D0);const YS=["get",...D0];new Set(YS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xo.apply(this,arguments)}const If=j.createContext(null),XS=j.createContext(null),oi=j.createContext(null),Iu=j.createContext(null),ai=j.createContext({outlet:null,matches:[],isDataRoute:!1}),O0=j.createContext(null);function JS(t,e){let{relative:n}=e===void 0?{}:e;Go()||xe(!1);let{basename:r,navigator:i}=j.useContext(oi),{hash:s,pathname:o,search:l}=M0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ur([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Go(){return j.useContext(Iu)!=null}function Su(){return Go()||xe(!1),j.useContext(Iu).location}function V0(t){j.useContext(oi).static||j.useLayoutEffect(t)}function L0(){let{isDataRoute:t}=j.useContext(ai);return t?hA():ZS()}function ZS(){Go()||xe(!1);let t=j.useContext(If),{basename:e,future:n,navigator:r}=j.useContext(oi),{matches:i}=j.useContext(ai),{pathname:s}=Su(),o=JSON.stringify(N0(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return V0(()=>{l.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=b0(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ur([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function M0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(oi),{matches:i}=j.useContext(ai),{pathname:s}=Su(),o=JSON.stringify(N0(i,r.v7_relativeSplatPath));return j.useMemo(()=>b0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function eA(t,e){return tA(t,e)}function tA(t,e,n,r){Go()||xe(!1);let{navigator:i}=j.useContext(oi),{matches:s}=j.useContext(ai),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Su(),f;if(e){var p;let x=typeof e=="string"?us(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||xe(!1),f=x}else f=c;let m=f.pathname||"/",S=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let R=RS(t,{pathname:S}),N=oA(R&&R.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:ur([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:ur([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&N?j.createElement(Iu.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Zn.Pop}},N):N}function nA(){let t=cA(),e=QS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const rA=j.createElement(nA,null);class iA extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(ai.Provider,{value:this.props.routeContext},j.createElement(O0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sA(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(If);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ai.Provider,{value:e},r)}function oA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||xe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:S}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let S,R=!1,N=null,x=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||rA,u&&(c<0&&m===0?(dA("route-fallback"),R=!0,x=null):c===m&&(R=!0,x=p.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,m+1)),v=()=>{let w;return S?w=N:R?w=x:p.route.Component?w=j.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=f,j.createElement(sA,{match:p,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?j.createElement(iA,{location:n.location,revalidation:n.revalidation,component:N,error:S,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var F0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(F0||{}),j0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(j0||{});function aA(t){let e=j.useContext(If);return e||xe(!1),e}function lA(t){let e=j.useContext(XS);return e||xe(!1),e}function uA(t){let e=j.useContext(ai);return e||xe(!1),e}function U0(t){let e=uA(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function cA(){var t;let e=j.useContext(O0),n=lA(),r=U0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function hA(){let{router:t}=aA(F0.UseNavigateStable),e=U0(j0.UseNavigateStable),n=j.useRef(!1);return V0(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xo({fromRouteId:e},s)))},[t,e])}const xg={};function dA(t,e,n){xg[t]||(xg[t]=!0)}function fA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Xh(t){xe(!1)}function pA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1,future:l}=t;Go()&&xe(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:xo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=us(r));let{pathname:f="/",search:p="",hash:m="",state:S=null,key:R="default"}=r,N=j.useMemo(()=>{let x=Tf(f,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:S,key:R},navigationType:i}},[u,f,p,m,S,R,i]);return N==null?null:j.createElement(oi.Provider,{value:c},j.createElement(Iu.Provider,{children:n,value:N}))}function mA(t){let{children:e,location:n}=t;return eA(Jh(e),n)}new Promise(()=>{});function Jh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Jh(r.props.children,s));return}r.type!==Xh&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zh(){return Zh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zh.apply(this,arguments)}function gA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vA(t,e){return t.button===0&&(!e||e==="_self")&&!yA(t)}const _A=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wA="6";try{window.__reactRouterVersion=wA}catch{}const EA="startTransition",Ng=dI[EA];function TA(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=SS({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=j.useCallback(p=>{c&&Ng?Ng(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>fA(r),[r]),j.createElement(pA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const IA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",SA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AA=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=gA(e,_A),{basename:S}=j.useContext(oi),R,N=!1;if(typeof c=="string"&&SA.test(c)&&(R=c,IA))try{let w=new URL(window.location.href),P=c.startsWith("//")?new URL(w.protocol+c):new URL(c),O=Tf(P.pathname,S);P.origin===w.origin&&O!=null?c=O+P.search+P.hash:N=!0}catch{}let x=JS(c,{relative:i}),_=kA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function v(w){r&&r(w),w.defaultPrevented||_(w)}return j.createElement("a",Zh({},m,{href:R||x,onClick:N||s?r:v,ref:n,target:u}))});var bg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bg||(bg={}));var Dg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function kA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=L0(),c=Su(),f=M0(t,{relative:o});return j.useCallback(p=>{if(vA(p,n)){p.preventDefault();let m=r!==void 0?r:jl(c)===jl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}function RA({isAdmin:t,onLogout:e}){return E.jsx("header",{className:"bg-gray-800 shadow-sm border-b border-gray-700",children:E.jsx("div",{className:"max-w-6xl mx-auto px-4 py-6",children:E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("div",{className:"bg-white p-2 rounded-xl",children:E.jsx("div",{className:"w-12 h-12 flex items-center justify-center font-bold text-gray-800",children:"AMU"})}),E.jsxs("div",{children:[E.jsx("h1",{className:"text-gray-100",children:"Ankara Medipol Üniversitesi"}),E.jsx("p",{className:"text-gray-400 mt-1",children:"Hazırlık Sınıfı - Duyuru ve Ödev Platformu"})]})]}),E.jsxs("div",{children:[t&&E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("span",{className:"text-gray-400 bg-gray-700 px-4 py-2 rounded-lg",children:"Admin"}),E.jsx("button",{onClick:e,className:"px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors",children:"Çıkış Yap"})]}),!t&&E.jsx(AA,{to:"/admin",className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Giriş"})]})]})})})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),PA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Og=t=>{const e=PA(t);return e.charAt(0).toUpperCase()+e.slice(1)},z0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>j.createElement("svg",{ref:u,...xA,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:z0("lucide",i),...l},[...o.map(([c,f])=>j.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=(t,e)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(NA,{ref:s,iconNode:e,className:z0(`lucide-${CA(Og(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Og(t),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Vg=kt("bell",bA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Lg=kt("book-open",DA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],VA=kt("calendar",OA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],MA=kt("chevron-left",LA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jA=kt("chevron-right",FA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],zA=kt("circle-alert",UA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],$A=kt("image-plus",BA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],WA=kt("image",HA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],GA=kt("lock",qA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Ul=kt("paperclip",KA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Zi=kt("trash-2",QA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],XA=kt("triangle-alert",YA);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],B0=kt("x",JA),ZA="modulepreload",ek=function(t){return"/"+t},Mg={},tk=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=ek(u),u in Mg)return;Mg[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":ZA,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,S)=>{p.addEventListener("load",m),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};let Hc=null;function cs(){return Hc||(Hc=tk(()=>import("./apiFirebase-DWWUGbyi.js"),[])),Hc}async function nk(){try{const e=await cs();if(e)return await e.fbGetAnnouncements()}catch{}return(await fetch("/api/announcements")).json()}async function rk(){const t=await fetch("/api/external/announcements");if(!t.ok)return[];const e=await t.json();function n(r){if(!r)return new Date().toISOString();const i=String(r).trim(),s=new Date(i);if(!isNaN(s.getTime()))return s.toISOString();const o=i.toLowerCase(),l={ocak:1,şubat:2,mart:3,nisan:4,mayıs:5,haziran:6,temmuz:7,ağustos:8,eylül:9,ekim:10,kasım:11,aralık:12},u=o.match(/(\d{1,2})\s+([a-zıiğüşöç]+)/i),c=o.match(/(\d{4})/);if(u&&c){const f=parseInt(u[1],10),p=u[2],m=l[p]||1,S=parseInt(c[1],10),R=new Date(Date.UTC(S,m-1,f,0,0,0));if(!isNaN(R.getTime()))return R.toISOString()}return new Date().toISOString()}return e.map((r,i)=>({id:`ext-${i}-${r.link??""}`,title:r.title??"Duyuru",content:`${r.excerpt??""}`.trim(),date:new Date(n(r.dateText??new Date().toISOString())),priority:"normal",images:r.img?[r.img]:[],source:r.link??""}))}async function ik(t){const e=await fetch(`/api/external/post?url=${encodeURIComponent(t)}`);return e.ok?e.json():null}async function sk(t){try{const r=await cs();if(r)return await r.fbAddAnnouncement(t)}catch{}const e=localStorage.getItem("admin_token");return(await fetch("/api/announcements",{method:"POST",headers:{"Content-Type":"application/json",...e?{Authorization:`Bearer ${e}`}:{}},body:JSON.stringify(t)})).json()}async function ok(t){try{const n=await cs();if(n)return await n.fbDeleteAnnouncement(t)}catch{}const e=localStorage.getItem("admin_token");await fetch(`/api/announcements/${t}`,{method:"DELETE",headers:e?{Authorization:`Bearer ${e}`}:{}})}async function ak(){try{const e=await cs();if(e)return await e.fbGetAssignments()}catch{}return(await fetch("/api/assignments")).json()}async function lk(t){try{const r=await cs();if(r)return await r.fbAddAssignment(t)}catch{}const e=localStorage.getItem("admin_token");return(await fetch("/api/assignments",{method:"POST",headers:{"Content-Type":"application/json",...e?{Authorization:`Bearer ${e}`}:{}},body:JSON.stringify(t)})).json()}async function uk(t){try{const n=await cs();if(n)return await n.fbDeleteAssignment(t)}catch{}const e=localStorage.getItem("admin_token");await fetch(`/api/assignments/${t}`,{method:"DELETE",headers:e?{Authorization:`Bearer ${e}`}:{}})}async function ck(t){const e=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t})});return e.ok?(await e.json()).token:null}function hk({announcements:t,onDelete:e,isAdmin:n}){const[r,i]=j.useState(null),[s,o]=j.useState(null),[l,u]=j.useState(!1),[c,f]=j.useState(1),p=5,m=Math.max(1,Math.ceil(t.length/p));j.useEffect(()=>{const O=Math.max(1,Math.ceil(t.length/p));c>O&&f(O)},[t]);const S=async O=>{try{u(!0);const L=await ik(O);L&&o(L)}finally{u(!1)}},R=O=>{switch(O){case"urgent":return E.jsx(XA,{className:"w-5 h-5 text-red-600"});case"important":return E.jsx(zA,{className:"w-5 h-5 text-orange-600"});default:return E.jsx(Vg,{className:"w-5 h-5 text-blue-600"})}},N=O=>{switch(O){case"urgent":return"border-l-red-500 bg-red-950/50";case"important":return"border-l-orange-500 bg-orange-950/50";default:return"border-l-blue-500 bg-gray-800"}},x=O=>{try{return!(O instanceof Date)||isNaN(O.getTime())?"Tarih yok":new Intl.DateTimeFormat("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(O)}catch{return"Tarih yok"}};if(t.length===0)return E.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-sm p-12 text-center border border-gray-700",children:[E.jsx(Vg,{className:"w-16 h-16 text-gray-600 mx-auto mb-4"}),E.jsx("p",{className:"text-gray-400",children:"Henüz duyuru bulunmamaktadır."})]});const _=(c-1)*p,v=t.slice(_,_+p),w=()=>f(O=>Math.max(1,O-1)),P=()=>f(O=>Math.min(m,O+1));return E.jsxs("div",{className:"space-y-4",children:[v.map(O=>E.jsxs("div",{className:`bg-gray-800 rounded-lg shadow-sm border-l-4 border border-gray-700 p-6 ${N(O.priority)} transition-all hover:shadow-md`,children:[O.source?E.jsxs("div",{className:"grid grid-cols-12 gap-4",children:[E.jsx("div",{className:"col-span-4",children:O.images&&O.images[0]&&E.jsx("img",{src:O.images[0],alt:O.title,className:"w-full h-40 md:h-48 object-cover rounded-lg border border-gray-700 cursor-pointer",onClick:()=>O.source&&S(O.source)})}),E.jsxs("div",{className:"col-span-8",children:[E.jsx("p",{className:"text-gray-400 text-sm mb-1",children:x(O.date)}),E.jsx("a",{href:O.source,className:"text-gray-100 font-semibold hover:underline",onClick:L=>{L.preventDefault(),O.source&&S(O.source)},children:O.title}),E.jsx("p",{className:"text-gray-300 mt-2 line-clamp-3",children:O.content}),E.jsx("div",{className:"mt-3",children:E.jsxs("a",{href:O.source,className:"inline-flex items-center gap-2 text-blue-400 hover:text-blue-300",onClick:L=>{L.preventDefault(),O.source&&S(O.source)},children:[E.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h6m0 0v6m0-6L10 16M7 7h3m-3 0v3m0-3l7 7"})}),"Read more"]})})]})]}):E.jsxs("div",{className:"flex items-start gap-4",children:[E.jsx("div",{className:"mt-1",children:R(O.priority)}),E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"text-gray-100 mb-2",children:O.title}),E.jsx("p",{className:"text-gray-300 mb-3 whitespace-pre-wrap",children:O.content}),O.images&&O.images.length>0&&E.jsx("div",{className:"grid grid-cols-2 gap-2 mb-3",children:O.images.map((L,T)=>E.jsx("img",{src:L,alt:`Duyuru görseli ${T+1}`,className:"w-full h-64 object-cover rounded-lg border border-gray-700 cursor-pointer",onClick:()=>i(L)},T))}),O.files&&O.files.length>0&&E.jsx("div",{className:"space-y-2 mb-3",children:O.files.map((L,T)=>E.jsxs("a",{href:L.url,download:L.name,className:"flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors",children:[E.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),E.jsx("span",{children:L.name})]},T))}),E.jsx("p",{className:"text-gray-500",children:x(O.date)})]})]}),n&&E.jsx("div",{className:"flex justify-end",children:E.jsx("button",{onClick:()=>e(O.id),className:"text-gray-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-950/50",children:E.jsx(Zi,{className:"w-5 h-5"})})})]},O.id)),E.jsxs("div",{className:"flex items-center justify-center gap-2 pt-4",children:[E.jsx("button",{onClick:w,disabled:c===1,className:`px-3 py-2 rounded-md border border-gray-700 text-gray-300 ${c===1?"opacity-50 cursor-not-allowed":"hover:bg-gray-700"}`,children:E.jsx(MA,{className:"w-4 h-4"})}),Array.from({length:m}).map((O,L)=>{const T=L+1,y=T===c;return E.jsx("button",{onClick:()=>f(T),className:`px-3 py-2 rounded-md border ${y?"bg-blue-600 border-blue-600 text-white":"border-gray-700 text-gray-300 hover:bg-gray-700"}`,children:T},T)}),E.jsx("button",{onClick:P,disabled:c===m,className:`px-3 py-2 rounded-md border border-gray-700 text-gray-300 ${c===m?"opacity-50 cursor-not-allowed":"hover:bg-gray-700"}`,children:E.jsx(jA,{className:"w-4 h-4"})})]}),r&&E.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50",onClick:()=>i(null),children:E.jsx("img",{src:r,alt:"preview",className:"max-w-[90vw] max-h-[90vh] object-contain"})}),s&&E.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50",onClick:()=>o(null),children:E.jsxs("div",{className:"bg-gray-900 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg border border-gray-700 p-6",onClick:O=>O.stopPropagation(),children:[E.jsx("h2",{className:"text-gray-100 text-xl font-semibold mb-1",children:s.title||"Duyuru"}),s.dateText&&E.jsx("p",{className:"text-gray-400 text-sm mb-4",children:s.dateText}),l?E.jsx("div",{className:"text-gray-400",children:"Yükleniyor…"}):E.jsx("div",{className:"external-content text-gray-100 leading-relaxed",dangerouslySetInnerHTML:{__html:s.contentHtml}})]})})]})}function dk({assignments:t,onDelete:e,isAdmin:n}){const[r,i]=j.useState(null),s=c=>{try{return!(c instanceof Date)||isNaN(c.getTime())?"Tarih yok":new Intl.DateTimeFormat("tr-TR",{day:"numeric",month:"long",year:"numeric"}).format(c)}catch{return"Tarih yok"}},o=c=>{const f=new Date,m=(c instanceof Date&&!isNaN(c.getTime())?c.getTime():f.getTime())-f.getTime();return Math.ceil(m/(1e3*60*60*24))},l=c=>{const f=o(c);return f<0?"text-red-400 bg-red-950/50":f<=2?"text-orange-400 bg-orange-950/50":"text-blue-400 bg-blue-950/50"},u=c=>{const f=o(c);return f<0?"Süresi geçti!":f===0?"Bugün!":f===1?"Yarın":`${f} gün kaldı`};return t.length===0?E.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-sm p-12 text-center border border-gray-700",children:[E.jsx(Lg,{className:"w-16 h-16 text-gray-600 mx-auto mb-4"}),E.jsx("p",{className:"text-gray-400",children:"Henüz ödev bulunmamaktadır."})]}):E.jsxs("div",{className:"space-y-4",children:[t.map(c=>{const f=o(c.dueDate)<0;return E.jsx("div",{className:`bg-gray-800 rounded-lg shadow-sm p-6 transition-all hover:shadow-md border ${f?"border-2 border-red-500 ring-2 ring-red-500/20 animate-pulse":"border-gray-700"}`,children:E.jsx("div",{className:"flex items-start gap-4",children:E.jsxs("div",{className:"flex-1",children:[E.jsxs("div",{className:"flex items-start justify-between gap-4 mb-3",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-gray-100 mb-1",children:c.title}),E.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[E.jsxs("span",{className:"inline-flex items-center gap-1 text-gray-300 bg-gray-700 px-3 py-1 rounded-full",children:[E.jsx(Lg,{className:"w-4 h-4"}),c.subject]}),f&&E.jsx("span",{className:"inline-flex items-center gap-1 text-red-400 bg-red-950 px-3 py-1 rounded-full animate-pulse",children:"⚠️ Tarihi Geçti"})]})]}),n&&E.jsx("button",{onClick:()=>e(c.id),className:"text-gray-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-950/50",children:E.jsx(Zi,{className:"w-5 h-5"})})]}),E.jsx("p",{className:"text-gray-300 mb-4 whitespace-pre-wrap",children:c.description}),c.images&&c.images.length>0&&E.jsx("div",{className:"grid grid-cols-2 gap-2 mb-4",children:c.images.map((p,m)=>E.jsx("img",{src:p,alt:`Ödev görseli ${m+1}`,className:"w-full h-64 object-cover rounded-lg border border-gray-700 cursor-pointer",onClick:()=>i(p)},m))}),c.files&&c.files.length>0&&E.jsx("div",{className:"space-y-2 mb-4",children:c.files.map((p,m)=>E.jsxs("a",{href:p.url,download:p.name,className:"flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors",children:[E.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),E.jsx("span",{children:p.name})]},m))}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsxs("div",{className:"flex items-center gap-2 text-gray-400",children:[E.jsx(VA,{className:"w-4 h-4"}),E.jsx("span",{children:s(c.dueDate)})]}),E.jsx("span",{className:`px-3 py-1 rounded-full ${l(c.dueDate)}`,children:u(c.dueDate)})]})]})})},c.id)}),r&&E.jsx(fk,{src:r,onClose:()=>i(null)})]})}function fk({src:t,onClose:e}){return E.jsx("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50",onClick:e,children:E.jsx("img",{src:t,alt:"preview",className:"max-w-[90vw] max-h-[90vh] object-contain"})})}function pk({onClose:t,onAdd:e}){const[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState("normal"),[u,c]=j.useState([]),[f,p]=j.useState([]),m=_=>{const v=_.target.files;v&&Array.from(v).forEach(w=>{const P=new FileReader;P.onloadend=()=>{c(O=>[...O,P.result])},P.readAsDataURL(w)})},S=_=>{const v=_.target.files;v&&Array.from(v).forEach(w=>{const P=new FileReader;P.onloadend=()=>{p(O=>[...O,{name:w.name,url:P.result}])},P.readAsDataURL(w)})},R=_=>{c(v=>v.filter((w,P)=>P!==_))},N=_=>{p(v=>v.filter((w,P)=>P!==_))},x=_=>{_.preventDefault(),n.trim()&&i.trim()&&e({title:n,content:i,priority:o,date:new Date,images:u.length>0?u:void 0,files:f.length>0?f:void 0})};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:E.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700",children:[E.jsxs("div",{className:"sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between",children:[E.jsx("h2",{className:"text-gray-100",children:"Yeni Duyuru Ekle"}),E.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-300 transition-colors",children:E.jsx(B0,{className:"w-6 h-6"})})]}),E.jsxs("form",{onSubmit:x,className:"p-6 space-y-6",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"title",className:"block text-gray-300 mb-2",children:"Başlık"}),E.jsx("input",{type:"text",id:"title",value:n,onChange:_=>r(_.target.value),className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",placeholder:"Duyuru başlığı",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"content",className:"block text-gray-300 mb-2",children:"İçerik"}),E.jsx("textarea",{id:"content",value:i,onChange:_=>s(_.target.value),rows:6,className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none",placeholder:"Duyuru içeriği",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"priority",className:"block text-gray-300 mb-2",children:"Öncelik"}),E.jsxs("select",{id:"priority",value:o,onChange:_=>l(_.target.value),className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",children:[E.jsx("option",{value:"normal",children:"Normal"}),E.jsx("option",{value:"important",children:"Önemli"}),E.jsx("option",{value:"urgent",children:"Acil"})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-gray-300 mb-2",children:"Görseller"}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("label",{className:"flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer",children:[E.jsx(WA,{className:"w-5 h-5"}),E.jsx("span",{children:"Görsel Ekle"}),E.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:m,className:"hidden"})]}),u.length>0&&E.jsx("div",{className:"grid grid-cols-3 gap-3",children:u.map((_,v)=>E.jsxs("div",{className:"relative group",children:[E.jsx("img",{src:_,alt:`Upload ${v+1}`,className:"w-full h-32 object-contain rounded-lg border border-gray-700 bg-gray-900"}),E.jsx("button",{type:"button",onClick:()=>R(v),className:"absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:E.jsx(Zi,{className:"w-4 h-4"})})]},v))})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-gray-300 mb-2",children:"Dosyalar"}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("label",{className:"flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer",children:[E.jsx(Ul,{className:"w-5 h-5"}),E.jsx("span",{children:"Dosya Ekle"}),E.jsx("input",{type:"file",multiple:!0,onChange:S,className:"hidden"})]}),f.length>0&&E.jsx("div",{className:"space-y-2",children:f.map((_,v)=>E.jsxs("div",{className:"flex items-center justify-between bg-gray-900 border border-gray-700 rounded-lg px-4 py-3",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(Ul,{className:"w-4 h-4 text-gray-400"}),E.jsx("span",{className:"text-gray-300",children:_.name})]}),E.jsx("button",{type:"button",onClick:()=>N(v),className:"text-red-400 hover:text-red-300",children:E.jsx(Zi,{className:"w-4 h-4"})})]},v))})]})]}),E.jsxs("div",{className:"flex gap-3 pt-4",children:[E.jsx("button",{type:"button",onClick:t,className:"flex-1 px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors",children:"İptal"}),E.jsx("button",{type:"submit",className:"flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Duyuru Ekle"})]})]})]})})}function mk({onClose:t,onAdd:e}){const[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[f,p]=j.useState([]),[m,S]=j.useState([]),R=w=>{w.preventDefault(),n.trim()&&i.trim()&&o&&u.trim()&&e({title:n,description:i,dueDate:new Date(o),subject:u,completed:!1,images:f.length>0?f:void 0,files:m.length>0?m:void 0})},N=w=>{const P=w.target.files;P&&Array.from(P).forEach(O=>{const L=new FileReader;L.onloadend=()=>{p(T=>[...T,L.result])},L.readAsDataURL(O)})},x=w=>{const P=w.target.files;P&&Array.from(P).forEach(O=>{const L=new FileReader;L.onloadend=()=>{S(T=>[...T,{name:O.name,url:L.result}])},L.readAsDataURL(O)})},_=w=>{p(P=>P.filter((O,L)=>L!==w))},v=w=>{S(P=>P.filter((O,L)=>L!==w))};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:E.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700",children:[E.jsxs("div",{className:"sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between",children:[E.jsx("h2",{className:"text-gray-100",children:"Yeni Ödev Ekle"}),E.jsx("button",{onClick:t,className:"text-gray-400 hover:text-gray-300 transition-colors",children:E.jsx(B0,{className:"w-6 h-6"})})]}),E.jsxs("form",{onSubmit:R,className:"p-6 space-y-6",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"title",className:"block text-gray-300 mb-2",children:"Ödev Başlığı"}),E.jsx("input",{type:"text",id:"title",value:n,onChange:w=>r(w.target.value),className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",placeholder:"Örn: İngilizce Essay",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"subject",className:"block text-gray-300 mb-2",children:"Ders"}),E.jsx("input",{type:"text",id:"subject",value:u,onChange:w=>c(w.target.value),className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",placeholder:"Örn: English, Mathematics",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"description",className:"block text-gray-300 mb-2",children:"Açıklama"}),E.jsx("textarea",{id:"description",value:i,onChange:w=>s(w.target.value),rows:5,className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none",placeholder:"Ödev detayları",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"dueDate",className:"block text-gray-300 mb-2",children:"Teslim Tarihi"}),E.jsx("input",{type:"date",id:"dueDate",value:o,onChange:w=>l(w.target.value),className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-gray-300 mb-2",children:"Görseller (İsteğe bağlı)"}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("label",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer",children:[E.jsx($A,{className:"w-5 h-5"}),E.jsx("span",{children:"Görsel Yükle"}),E.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:N,className:"hidden"})]}),f.length>0&&E.jsx("div",{className:"grid grid-cols-3 gap-3",children:f.map((w,P)=>E.jsxs("div",{className:"relative group",children:[E.jsx("img",{src:w,alt:`Upload ${P+1}`,className:"w-full h-32 object-contain rounded-lg border border-gray-700 bg-gray-900"}),E.jsx("button",{type:"button",onClick:()=>_(P),className:"absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:E.jsx(Zi,{className:"w-4 h-4"})})]},P))})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-gray-300 mb-2",children:"Dosyalar (İsteğe bağlı)"}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("label",{className:"flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer",children:[E.jsx(Ul,{className:"w-5 h-5"}),E.jsx("span",{children:"Dosya Yükle"}),E.jsx("input",{type:"file",multiple:!0,onChange:x,className:"hidden"})]}),m.length>0&&E.jsx("div",{className:"space-y-2",children:m.map((w,P)=>E.jsxs("div",{className:"flex items-center justify-between gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg group",children:[E.jsxs("div",{className:"flex items-center gap-2 text-gray-300 flex-1 min-w-0",children:[E.jsx(Ul,{className:"w-4 h-4 flex-shrink-0"}),E.jsx("span",{className:"truncate",children:w.name})]}),E.jsx("button",{type:"button",onClick:()=>v(P),className:"text-gray-500 hover:text-red-400 transition-colors flex-shrink-0",children:E.jsx(Zi,{className:"w-4 h-4"})})]},P))})]})]}),E.jsxs("div",{className:"flex gap-3 pt-4",children:[E.jsx("button",{type:"button",onClick:t,className:"flex-1 px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors",children:"İptal"}),E.jsx("button",{type:"submit",className:"flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Ödev Ekle"})]})]})]})})}const gk=[{title:"İngilizce Yeterlilik Sınavı (YAZILI)",start:"9.09.2025",end:"9.09.2025"},{title:"İngilizce Yeterlilik Sınavı (SÖZLÜ)",start:"10.09.2025",end:"11.09.2025"},{title:"Sınav Sonuçlarının Yayınlanması",start:"12.09.2025",end:"12.09.2025"},{title:"Sınav Sonucuna İtiraz",start:"12.09.2025",end:"17.09.2025"},{title:"1. Dilim Dersleri",start:"29.09.2025",end:"18.11.2025"},{title:"TAT1 (SÖZLÜ)",start:"20.11.2025",end:"21.11.2025"},{title:"TAT1 (YAZILI)",start:"22.11.2025",end:"22.11.2025"},{title:"Mazeret Sınav Başvurusu",start:"22.11.2025",end:"24.11.2025"},{title:"Sınav Sonuçlarının Yayınlanması",start:"24.11.2025",end:"24.11.2025"},{title:"TAT1 Sonucuna İtiraz",start:"24.11.2025",end:"27.11.2025"},{title:"2. Dilim Dersleri",start:"24.11.2025",end:"16.01.2026"},{title:"Mazeret Sınavı",start:"27.11.2025",end:"27.11.2025"},{title:"TAT2 (SÖZLÜ)",start:"15.01.2026",end:"16.01.2026"},{title:"TAT2 (YAZILI)",start:"17.01.2026",end:"17.01.2026"},{title:"Mazeret Sınav Başvurusu",start:"15.01.2026",end:"20.01.2026"},{title:"Sınav Sonuçlarının Yayınlanması",start:"20.01.2026",end:"20.01.2026"},{title:"Ara Dönem Muafiyet Sınav Başvurusu",start:"20.01.2026",end:"23.01.2026"},{title:"TAT2 Sonucuna İtiraz",start:"20.01.2026",end:"23.01.2026"},{title:"Mazeret Sınavı",start:"23.01.2026",end:"23.01.2026"},{title:"Ara Dönem Muafiyet Sınavı",start:"27.01.2026",end:"27.01.2026"},{title:"3. Dilim Dersleri",start:"16.02.2026",end:"10.04.2026"},{title:"TAT3 (YAZILI)",start:"11.04.2026",end:"11.04.2026"},{title:"TAT3 (SÖZLÜ)",start:"13.04.2026",end:"14.04.2026"},{title:"Mazeret Sınav Başvurusu",start:"11.04.2026",end:"16.04.2026"},{title:"Sınav Sonuçlarının Yayınlanması",start:"16.04.2026",end:"16.04.2026"},{title:"Mazeret Sınavı",start:"17.04.2026",end:"17.04.2026"},{title:"TAT3 Sonucuna İtiraz",start:"16.04.2026",end:"21.04.2026"},{title:"4. Dilim Dersleri",start:"20.04.2026",end:"17.06.2026"},{title:"TAT4 (YAZILI)",start:"22.06.2026",end:"22.06.2026"},{title:"TAT4 (SÖZLÜ)",start:"18.06.2026",end:"19.06.2026"},{title:"Mazeret Sınav Başvurusu",start:"18.06.2026",end:"23.06.2026"},{title:"Sınav Sonuçlarının Yayınlanması",start:"24.06.2026",end:"24.06.2026"},{title:"TAT4 Sonucuna İtiraz",start:"24.06.2026",end:"29.06.2026"},{title:"Mazeret Sınavı",start:"29.06.2026",end:"29.06.2026"}];function yk(){const t=new Date,e=n=>{const[r,i,s]=n.split(".").map(o=>parseInt(o,10));return new Date(s,(i||1)-1,r||1)};return E.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6",children:[E.jsx("h2",{className:"text-gray-100 mb-4",children:"Akademik Takvim (2025-2026)"}),E.jsx("div",{className:"overflow-x-auto",children:E.jsxs("table",{className:"min-w-full text-left text-gray-200",children:[E.jsx("thead",{children:E.jsxs("tr",{className:"bg-gray-700",children:[E.jsx("th",{className:"px-4 py-2",children:"Açıklama"}),E.jsx("th",{className:"px-4 py-2",children:"Başlangıç"}),E.jsx("th",{className:"px-4 py-2",children:"Bitiş"})]})}),E.jsx("tbody",{children:gk.map((n,r)=>{const s=`border-t border-gray-700 hover:bg-gray-700/50 ${e(n.end).getTime()<t.getTime()?"opacity-70":""}`;return E.jsxs("tr",{className:s,children:[E.jsx("td",{className:"px-4 py-2",children:n.title}),E.jsx("td",{className:"px-4 py-2",children:n.start}),E.jsx("td",{className:"px-4 py-2",children:n.end})]},r)})})]})})]})}function vk({isAdmin:t,onLogout:e}){const[n,r]=j.useState("announcements"),[i,s]=j.useState(!1),[o,l]=j.useState(!1),[u,c]=j.useState([]),[f,p]=j.useState([]);j.useEffect(()=>{(async()=>{const[x,_,v]=await Promise.all([nk(),rk(),ak()]),w=[..._,...x];c(w.map(P=>({...P,date:P.date instanceof Date?P.date:P.date?new Date(P.date):new Date}))),p(v.map(P=>({...P,dueDate:P.dueDate instanceof Date?P.dueDate:P.dueDate?new Date(P.dueDate):new Date})))})()},[]);const m=async x=>{const _=await sk(x);c([{..._,date:new Date(_.date)},...u]),s(!1)},S=async x=>{await ok(x),c(u.filter(_=>_.id!==x))},R=async x=>{const _=await lk(x);p([{..._,dueDate:new Date(_.dueDate)},...f]),l(!1)},N=async x=>{await uk(x),p(f.filter(_=>_.id!==x))};return E.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",children:[E.jsx(RA,{isAdmin:t,onLogout:e}),E.jsxs("main",{className:"max-w-6xl mx-auto px-4 py-8",children:[E.jsxs("div",{className:"bg-gray-800 rounded-lg shadow-sm p-2 mb-6 flex gap-2 border border-gray-700",children:[E.jsx("button",{onClick:()=>r("announcements"),className:`flex-1 py-3 px-6 rounded-md transition-all ${n==="announcements"?"bg-blue-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"Duyurular"}),E.jsx("button",{onClick:()=>r("assignments"),className:`flex-1 py-3 px-6 rounded-md transition-all ${n==="assignments"?"bg-blue-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"Ödevler"}),E.jsx("button",{onClick:()=>r("calendar"),className:`flex-1 py-3 px-6 rounded-md transition-all ${n==="calendar"?"bg-blue-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"Akademik Takvim"})]}),n==="announcements"?E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between items-center mb-6",children:[E.jsx("h2",{className:"text-gray-100",children:"Son Duyurular"}),t&&E.jsx("button",{onClick:()=>s(!0),className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"+ Yeni Duyuru"})]}),E.jsx(hk,{announcements:u,onDelete:S,isAdmin:t})]}):n==="assignments"?E.jsxs("div",{children:[E.jsxs("div",{className:"flex justify-between items-center mb-6",children:[E.jsx("h2",{className:"text-gray-100",children:"Ödevler"}),t&&E.jsx("button",{onClick:()=>l(!0),className:"bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"+ Yeni Ödev"})]}),E.jsx(dk,{assignments:f,onDelete:N,isAdmin:t})]}):E.jsxs("div",{children:[E.jsx("div",{className:"flex justify-between items-center mb-6",children:E.jsx("h2",{className:"text-gray-100",children:"Akademik Takvim"})}),E.jsx(yk,{})]})]}),i&&E.jsx(pk,{onClose:()=>s(!1),onAdd:m}),o&&E.jsx(mk,{onClose:()=>l(!1),onAdd:R})]})}function _k({onLogin:t}){const[e,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState(""),l=async u=>{u.preventDefault(),await t(e.trim(),r.trim())||(o("Giriş başarısız"),i(""))};return E.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",children:E.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-xl max-w-md w-full border border-gray-700",children:[E.jsx("div",{className:"bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-center",children:E.jsx("h2",{className:"text-gray-100",children:"Admin Girişi"})}),E.jsxs("form",{onSubmit:l,className:"p-6 space-y-6",children:[E.jsx("div",{className:"flex justify-center mb-4",children:E.jsx("div",{className:"bg-blue-600 p-4 rounded-full",children:E.jsx(GA,{className:"w-8 h-8 text-white"})})}),E.jsx("p",{className:"text-gray-300 text-center",children:"Admin girişi"}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-gray-300 mb-2",children:"E-posta"}),E.jsx("input",{type:"email",id:"email",value:e,onChange:u=>{n(u.target.value),o("")},className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",placeholder:"email",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"password",className:"block text-gray-300 mb-2",children:"Şifre"}),E.jsx("input",{type:"password",id:"password",value:r,onChange:u=>{i(u.target.value),o("")},className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none",placeholder:"Admin şifresi",required:!0,autoFocus:!0}),s&&E.jsx("p",{className:"text-red-400 mt-2",children:s})]}),E.jsx("div",{className:"bg-gray-900 border border-gray-700 rounded-lg p-4",children:E.jsx("p",{className:"text-gray-400",children:"E-posta ve şifre ile giriş yapın."})}),E.jsx("div",{className:"flex",children:E.jsx("button",{type:"submit",className:"flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",children:"Giriş Yap"})})]})]})})}const wk=()=>{};var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ek=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},H0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ek(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Tk;const m=s<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ik=function(t){const e=$0(t);return H0.encodeByteArray(e,!0)},zl=function(t){return Ik(t).replace(/\./g,"")},W0=function(t){try{return H0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=()=>Sk().__FIREBASE_DEFAULTS__,kk=()=>{if(typeof process>"u"||typeof Fg>"u")return;const t=Fg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W0(t[1]);return e&&JSON.parse(e)},Au=()=>{try{return wk()||Ak()||kk()||Rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q0=t=>{var e,n;return(n=(e=Au())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},G0=t=>{const e=q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K0=()=>{var t;return(t=Au())===null||t===void 0?void 0:t.config},Q0=t=>{var e;return(e=Au())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),""].join(".")}const so={};function Pk(){const t={prod:[],emulator:[]};for(const e of Object.keys(so))so[e]?t.emulator.push(e):t.prod.push(e);return t}function xk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jg=!1;function Af(t,e){if(typeof window>"u"||typeof document>"u"||!li(window.location.host)||so[t]===e||so[t]||jg)return;so[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=Pk().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{jg=!0,o()},m}function f(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=xk(r),S=n("text"),R=document.getElementById(S)||document.createElement("span"),N=n("learnmore"),x=document.getElementById(N)||document.createElement("a"),_=n("preprendIcon"),v=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const w=m.element;l(w),f(x,N);const P=c();u(v,_),w.append(v,R,x,P),document.body.appendChild(w)}s?(R.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function bk(){var t;const e=(t=Au())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ok(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lk(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mk(){return!bk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fk(){try{return typeof indexedDB=="object"}catch{return!1}}function jk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uk,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cn(i,l,r)}}function zk(t,e){return t.replace(Bk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bk=/\{\$([^}]+)}/g;function $k(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ug(s)&&Ug(o)){if(!Jr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Hk(t,e){const n=new Wk(t,e);return n.subscribe.bind(n)}class Wk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wc),i.error===void 0&&(i.error=Wc),i.complete===void 0&&(i.complete=Wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ck;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qk(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kk(t){return t===jr?void 0:t}function Qk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Xk={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Jk=te.INFO,Zk={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},eR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kf{constructor(e){this.name=e,this._logLevel=Jk,this._logHandler=eR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const tR=(t,e)=>e.some(n=>t instanceof n);let zg,Bg;function nR(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rR(){return Bg||(Bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X0=new WeakMap,ed=new WeakMap,J0=new WeakMap,qc=new WeakMap,Rf=new WeakMap;function iR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X0.set(n,t)}).catch(()=>{}),Rf.set(e,t),e}function sR(t){if(ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ed.set(t,e)}let td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oR(t){td=t(td)}function aR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return J0.set(r,e.sort?e.sort():[e]),cr(r)}:rR().includes(t)?function(...e){return t.apply(Gc(this),e),cr(X0.get(this))}:function(...e){return cr(t.apply(Gc(this),e))}}function lR(t){return typeof t=="function"?aR(t):(t instanceof IDBTransaction&&sR(t),tR(t,nR())?new Proxy(t,td):t)}function cr(t){if(t instanceof IDBRequest)return iR(t);if(qc.has(t))return qc.get(t);const e=lR(t);return e!==t&&(qc.set(t,e),Rf.set(e,t)),e}const Gc=t=>Rf.get(t);function uR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const cR=["get","getKey","getAll","getAllKeys","count"],hR=["put","add","delete","clear"],Kc=new Map;function $g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Kc.set(e,s),s}oR(t=>({...t,get:(e,n,r)=>$g(e,n)||t.get(e,n,r),has:(e,n)=>!!$g(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nd="@firebase/app",Hg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new kf("@firebase/app"),pR="@firebase/app-compat",mR="@firebase/analytics-compat",gR="@firebase/analytics",yR="@firebase/app-check-compat",vR="@firebase/app-check",_R="@firebase/auth",wR="@firebase/auth-compat",ER="@firebase/database",TR="@firebase/data-connect",IR="@firebase/database-compat",SR="@firebase/functions",AR="@firebase/functions-compat",kR="@firebase/installations",RR="@firebase/installations-compat",CR="@firebase/messaging",PR="@firebase/messaging-compat",xR="@firebase/performance",NR="@firebase/performance-compat",bR="@firebase/remote-config",DR="@firebase/remote-config-compat",OR="@firebase/storage",VR="@firebase/storage-compat",LR="@firebase/firestore",MR="@firebase/ai",FR="@firebase/firestore-compat",jR="firebase",UR="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="[DEFAULT]",zR={[nd]:"fire-core",[pR]:"fire-core-compat",[gR]:"fire-analytics",[mR]:"fire-analytics-compat",[vR]:"fire-app-check",[yR]:"fire-app-check-compat",[_R]:"fire-auth",[wR]:"fire-auth-compat",[ER]:"fire-rtdb",[TR]:"fire-data-connect",[IR]:"fire-rtdb-compat",[SR]:"fire-fn",[AR]:"fire-fn-compat",[kR]:"fire-iid",[RR]:"fire-iid-compat",[CR]:"fire-fcm",[PR]:"fire-fcm-compat",[xR]:"fire-perf",[NR]:"fire-perf-compat",[bR]:"fire-rc",[DR]:"fire-rc-compat",[OR]:"fire-gcs",[VR]:"fire-gcs-compat",[LR]:"fire-fst",[FR]:"fire-fst-compat",[MR]:"fire-vertex","fire-js":"fire-js",[jR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,BR=new Map,id=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(id.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;id.set(e,t);for(const n of No.values())Wg(n,t);for(const n of BR.values())Wg(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Ko("app","Firebase",$R);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=UR;function Z0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rd,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=K0()),!n)throw hr.create("no-options");const s=No.get(i);if(s){if(Jr(n,s.options)&&Jr(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new Yk(i);for(const u of id.values())o.addComponent(u);const l=new HR(n,r,o);return No.set(i,l),l}function Cf(t=rd){const e=No.get(t);if(!e&&t===rd&&K0())return Z0();if(!e)throw hr.create("no-app",{appName:t});return e}function qg(){return Array.from(No.values())}function Zt(t,e,n){var r;let i=(r=zR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}Zr(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="firebase-heartbeat-database",qR=1,bo="firebase-heartbeat-store";let Qc=null;function ew(){return Qc||(Qc=uR(WR,qR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Qc}async function GR(t){try{const n=(await ew()).transaction(bo),r=await n.objectStore(bo).get(tw(t));return await n.done,r}catch(e){if(e instanceof cn)bn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function Gg(t,e){try{const r=(await ew()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,tw(t)),await r.done}catch(n){if(n instanceof cn)bn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function tw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=1024,QR=30;class YR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>QR){const o=ZR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kg(),{heartbeatsToSend:r,unsentEntries:i}=XR(this._heartbeatsCache.heartbeats),s=zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return bn.warn(n),""}}}function Kg(){return new Date().toISOString().substring(0,10)}function XR(t,e=KR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fk()?jk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qg(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}function ZR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){Zr(new gr("platform-logger",e=>new dR(e),"PRIVATE")),Zr(new gr("heartbeat",e=>new YR(e),"PRIVATE")),Zt(nd,Hg,t),Zt(nd,Hg,"esm2017"),Zt("fire-js","")}eC("");var tC="firebase",nC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(tC,nC,"app");var Yg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,nw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function I(){}I.prototype=y.prototype,T.D=y.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(A,C,D){for(var k=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)k[Rt-2]=arguments[Rt];return y.prototype[C].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,I){I||(I=0);var A=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)A[C]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(C=0;16>C;++C)A[C]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=T.g[0],I=T.g[1],C=T.g[2];var D=T.g[3],k=y+(D^I&(C^D))+A[0]+3614090360&4294967295;y=I+(k<<7&4294967295|k>>>25),k=D+(C^y&(I^C))+A[1]+3905402710&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(I^D&(y^I))+A[2]+606105819&4294967295,C=D+(k<<17&4294967295|k>>>15),k=I+(y^C&(D^y))+A[3]+3250441966&4294967295,I=C+(k<<22&4294967295|k>>>10),k=y+(D^I&(C^D))+A[4]+4118548399&4294967295,y=I+(k<<7&4294967295|k>>>25),k=D+(C^y&(I^C))+A[5]+1200080426&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(I^D&(y^I))+A[6]+2821735955&4294967295,C=D+(k<<17&4294967295|k>>>15),k=I+(y^C&(D^y))+A[7]+4249261313&4294967295,I=C+(k<<22&4294967295|k>>>10),k=y+(D^I&(C^D))+A[8]+1770035416&4294967295,y=I+(k<<7&4294967295|k>>>25),k=D+(C^y&(I^C))+A[9]+2336552879&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(I^D&(y^I))+A[10]+4294925233&4294967295,C=D+(k<<17&4294967295|k>>>15),k=I+(y^C&(D^y))+A[11]+2304563134&4294967295,I=C+(k<<22&4294967295|k>>>10),k=y+(D^I&(C^D))+A[12]+1804603682&4294967295,y=I+(k<<7&4294967295|k>>>25),k=D+(C^y&(I^C))+A[13]+4254626195&4294967295,D=y+(k<<12&4294967295|k>>>20),k=C+(I^D&(y^I))+A[14]+2792965006&4294967295,C=D+(k<<17&4294967295|k>>>15),k=I+(y^C&(D^y))+A[15]+1236535329&4294967295,I=C+(k<<22&4294967295|k>>>10),k=y+(C^D&(I^C))+A[1]+4129170786&4294967295,y=I+(k<<5&4294967295|k>>>27),k=D+(I^C&(y^I))+A[6]+3225465664&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^I&(D^y))+A[11]+643717713&4294967295,C=D+(k<<14&4294967295|k>>>18),k=I+(D^y&(C^D))+A[0]+3921069994&4294967295,I=C+(k<<20&4294967295|k>>>12),k=y+(C^D&(I^C))+A[5]+3593408605&4294967295,y=I+(k<<5&4294967295|k>>>27),k=D+(I^C&(y^I))+A[10]+38016083&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^I&(D^y))+A[15]+3634488961&4294967295,C=D+(k<<14&4294967295|k>>>18),k=I+(D^y&(C^D))+A[4]+3889429448&4294967295,I=C+(k<<20&4294967295|k>>>12),k=y+(C^D&(I^C))+A[9]+568446438&4294967295,y=I+(k<<5&4294967295|k>>>27),k=D+(I^C&(y^I))+A[14]+3275163606&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^I&(D^y))+A[3]+4107603335&4294967295,C=D+(k<<14&4294967295|k>>>18),k=I+(D^y&(C^D))+A[8]+1163531501&4294967295,I=C+(k<<20&4294967295|k>>>12),k=y+(C^D&(I^C))+A[13]+2850285829&4294967295,y=I+(k<<5&4294967295|k>>>27),k=D+(I^C&(y^I))+A[2]+4243563512&4294967295,D=y+(k<<9&4294967295|k>>>23),k=C+(y^I&(D^y))+A[7]+1735328473&4294967295,C=D+(k<<14&4294967295|k>>>18),k=I+(D^y&(C^D))+A[12]+2368359562&4294967295,I=C+(k<<20&4294967295|k>>>12),k=y+(I^C^D)+A[5]+4294588738&4294967295,y=I+(k<<4&4294967295|k>>>28),k=D+(y^I^C)+A[8]+2272392833&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^I)+A[11]+1839030562&4294967295,C=D+(k<<16&4294967295|k>>>16),k=I+(C^D^y)+A[14]+4259657740&4294967295,I=C+(k<<23&4294967295|k>>>9),k=y+(I^C^D)+A[1]+2763975236&4294967295,y=I+(k<<4&4294967295|k>>>28),k=D+(y^I^C)+A[4]+1272893353&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^I)+A[7]+4139469664&4294967295,C=D+(k<<16&4294967295|k>>>16),k=I+(C^D^y)+A[10]+3200236656&4294967295,I=C+(k<<23&4294967295|k>>>9),k=y+(I^C^D)+A[13]+681279174&4294967295,y=I+(k<<4&4294967295|k>>>28),k=D+(y^I^C)+A[0]+3936430074&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^I)+A[3]+3572445317&4294967295,C=D+(k<<16&4294967295|k>>>16),k=I+(C^D^y)+A[6]+76029189&4294967295,I=C+(k<<23&4294967295|k>>>9),k=y+(I^C^D)+A[9]+3654602809&4294967295,y=I+(k<<4&4294967295|k>>>28),k=D+(y^I^C)+A[12]+3873151461&4294967295,D=y+(k<<11&4294967295|k>>>21),k=C+(D^y^I)+A[15]+530742520&4294967295,C=D+(k<<16&4294967295|k>>>16),k=I+(C^D^y)+A[2]+3299628645&4294967295,I=C+(k<<23&4294967295|k>>>9),k=y+(C^(I|~D))+A[0]+4096336452&4294967295,y=I+(k<<6&4294967295|k>>>26),k=D+(I^(y|~C))+A[7]+1126891415&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~I))+A[14]+2878612391&4294967295,C=D+(k<<15&4294967295|k>>>17),k=I+(D^(C|~y))+A[5]+4237533241&4294967295,I=C+(k<<21&4294967295|k>>>11),k=y+(C^(I|~D))+A[12]+1700485571&4294967295,y=I+(k<<6&4294967295|k>>>26),k=D+(I^(y|~C))+A[3]+2399980690&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~I))+A[10]+4293915773&4294967295,C=D+(k<<15&4294967295|k>>>17),k=I+(D^(C|~y))+A[1]+2240044497&4294967295,I=C+(k<<21&4294967295|k>>>11),k=y+(C^(I|~D))+A[8]+1873313359&4294967295,y=I+(k<<6&4294967295|k>>>26),k=D+(I^(y|~C))+A[15]+4264355552&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~I))+A[6]+2734768916&4294967295,C=D+(k<<15&4294967295|k>>>17),k=I+(D^(C|~y))+A[13]+1309151649&4294967295,I=C+(k<<21&4294967295|k>>>11),k=y+(C^(I|~D))+A[4]+4149444226&4294967295,y=I+(k<<6&4294967295|k>>>26),k=D+(I^(y|~C))+A[11]+3174756917&4294967295,D=y+(k<<10&4294967295|k>>>22),k=C+(y^(D|~I))+A[2]+718787259&4294967295,C=D+(k<<15&4294967295|k>>>17),k=I+(D^(C|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+D&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var I=y-this.blockSize,A=this.B,C=this.h,D=0;D<y;){if(C==0)for(;D<=I;)i(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<y;)if(A[C++]=T.charCodeAt(D++),C==this.blockSize){i(this,A),C=0;break}}else for(;D<y;)if(A[C++]=T[D++],C==this.blockSize){i(this,A),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var I=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=I&255,I/=256;for(this.u(T),T=Array(16),y=I=0;4>y;++y)for(var A=0;32>A;A+=8)T[I++]=this.g[y]>>>A&255;return T};function s(T,y){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=y(T)}function o(T,y){this.h=y;for(var I=[],A=!0,C=T.length-1;0<=C;C--){var D=T[C]|0;A&&D==y||(I[C]=D,A=!1)}this.g=I}var l={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return x(c(-T));for(var y=[],I=1,A=0;T>=I;A++)y[A]=T/I|0,I*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return x(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),A=p,C=0;C<T.length;C+=8){var D=Math.min(8,T.length-C),k=parseInt(T.substring(C,C+D),y);8>D?(D=c(Math.pow(y,D)),A=A.j(D).add(c(k))):(A=A.j(I),A=A.add(c(k)))}return A}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-x(this).m();for(var T=0,y=1,I=0;I<this.g.length;I++){var A=this.i(I);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+x(this).toString(T);for(var y=c(Math.pow(T,6)),I=this,A="";;){var C=P(I,y).g;I=_(I,C.j(y));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=C,R(I))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=_(this,T),N(T)?-1:R(T)?0:1};function x(T){for(var y=T.g.length,I=[],A=0;A<y;A++)I[A]=~T.g[A];return new o(I,~T.h).add(m)}t.abs=function(){return N(this)?x(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),I=[],A=0,C=0;C<=y;C++){var D=A+(this.i(C)&65535)+(T.i(C)&65535),k=(D>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);A=k>>>16,D&=65535,k&=65535,I[C]=k<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function _(T,y){return T.add(x(y))}t.j=function(T){if(R(this)||R(T))return p;if(N(this))return N(T)?x(this).j(x(T)):x(x(this).j(T));if(N(T))return x(this.j(x(T)));if(0>this.l(S)&&0>T.l(S))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,I=[],A=0;A<2*y;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<T.g.length;C++){var D=this.i(A)>>>16,k=this.i(A)&65535,Rt=T.i(C)>>>16,Nr=T.i(C)&65535;I[2*A+2*C]+=k*Nr,v(I,2*A+2*C),I[2*A+2*C+1]+=D*Nr,v(I,2*A+2*C+1),I[2*A+2*C+1]+=k*Rt,v(I,2*A+2*C+1),I[2*A+2*C+2]+=D*Rt,v(I,2*A+2*C+2)}for(A=0;A<y;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=y;A<2*y;A++)I[A]=0;return new o(I,0)};function v(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function w(T,y){this.g=T,this.h=y}function P(T,y){if(R(y))throw Error("division by zero");if(R(T))return new w(p,p);if(N(T))return y=P(x(T),y),new w(x(y.g),x(y.h));if(N(y))return y=P(T,x(y)),new w(x(y.g),y.h);if(30<T.g.length){if(N(T)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=y;0>=A.l(T);)I=O(I),A=O(A);var C=L(I,1),D=L(A,1);for(A=L(A,2),I=L(I,2);!R(A);){var k=D.add(A);0>=k.l(T)&&(C=C.add(I),D=k),A=L(A,1),I=L(I,1)}return y=_(T,C.j(y)),new w(C,y)}for(C=p;0<=T.l(y);){for(I=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=c(I),k=D.j(y);N(k)||0<k.l(T);)I-=A,D=c(I),k=D.j(y);R(D)&&(D=m),C=C.add(D),T=_(T,k)}return new w(C,T)}t.A=function(T){return P(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)&T.i(A);return new o(I,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)|T.i(A);return new o(I,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),I=[],A=0;A<y;A++)I[A]=this.i(A)^T.i(A);return new o(I,this.h^T.h)};function O(T){for(var y=T.g.length+1,I=[],A=0;A<y;A++)I[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(I,T.h)}function L(T,y){var I=y>>5;y%=32;for(var A=T.g.length-I,C=[],D=0;D<A;D++)C[D]=0<y?T.i(D+I)>>>y|T.i(D+I+1)<<32-y:T.i(D+I);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,dr=o}).apply(typeof Yg<"u"?Yg:typeof self<"u"?self:typeof window<"u"?window:{});var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rw,Ws,iw,sl,sd,sw,ow,aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ua=="object"&&Ua];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break e;d=d[b]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,b={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function S(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,b,V){for(var z=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)z[ue-2]=arguments[ue];return h.prototype[b].apply(g,z)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function x(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const b=a.length||0,V=g.length||0;a.length=b+V;for(let z=0;z<V;z++)a[b+z]=g[z]}else a.push(g)}}class _{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var O=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function L(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let V=0;V<I.length;V++)d=I[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function D(a){l.setTimeout(()=>{throw a},0)}function k(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Rt{constructor(){this.h=this.g=null}add(h,d){const g=Nr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Nr=new _(()=>new ys,a=>a.reset());class ys{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,B=!1,Q=new Rt,J=()=>{const a=l.Promise.resolve(void 0);dn=()=>{a.then(ye)}};var ye=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(d){D(d)}var h=Nr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function pn(a,h){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{P(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pn.aa.h.call(this)}}R(pn,Se);var mn={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),yT=0;function vT(a,h,d,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=b,this.key=++yT,this.da=this.fa=!1}function sa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function oa(a){this.src=a,this.g={},this.h=0}oa.prototype.add=function(a,h,d,g,b){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=Qu(a,h,g,b);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new vT(h,this.src,V,!!g,b),h.fa=d,a.push(h)),h};function Ku(a,h){var d=h.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=b)&&Array.prototype.splice.call(g,b,1),V&&(sa(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Qu(a,h,d,g){for(var b=0;b<a.length;++b){var V=a[b];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return b}return-1}var Yu="closure_lm_"+(1e6*Math.random()|0),Xu={};function yp(a,h,d,g,b){if(Array.isArray(h)){for(var V=0;V<h.length;V++)yp(a,h[V],d,g,b);return null}return d=wp(d),a&&a[gn]?a.K(h,d,c(g)?!!g.capture:!1,b):_T(a,h,d,!1,g,b)}function _T(a,h,d,g,b,V){if(!h)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,ue=Zu(a);if(ue||(a[Yu]=ue=new oa(a)),d=ue.add(h,d,g,z,V),d.proxy)return d;if(g=wT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)fn||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(_p(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function wT(){function a(d){return h.call(a.src,a.listener,d)}const h=ET;return a}function vp(a,h,d,g,b){if(Array.isArray(h))for(var V=0;V<h.length;V++)vp(a,h[V],d,g,b);else g=c(g)?!!g.capture:!!g,d=wp(d),a&&a[gn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=Qu(V,d,g,b),-1<d&&(sa(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Zu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Qu(h,d,g,b)),(d=-1<a?h[a]:null)&&Ju(d))}function Ju(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gn])Ku(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(_p(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Zu(h))?(Ku(d,a),d.h==0&&(d.src=null,h[Yu]=null)):sa(a)}}}function _p(a){return a in Xu?Xu[a]:Xu[a]="on"+a}function ET(a,h){if(a.da)a=!0;else{h=new pn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&Ju(a),a=d.call(g,h)}return a}function Zu(a){return a=a[Yu],a instanceof oa?a:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function wp(a){return typeof a=="function"?a:(a[ec]||(a[ec]=function(h){return a.handleEvent(h)}),a[ec])}function Ge(){le.call(this),this.i=new oa(this),this.M=this,this.F=null}R(Ge,le),Ge.prototype[gn]=!0,Ge.prototype.removeEventListener=function(a,h,d,g){vp(this,a,h,d,g)};function it(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Se(h,a);else if(h instanceof Se)h.target=h.target||a;else{var b=h;h=new Se(g,a),A(h,b)}if(b=!0,d)for(var V=d.length-1;0<=V;V--){var z=h.g=d[V];b=aa(z,g,!0,h)&&b}if(z=h.g=a,b=aa(z,g,!0,h)&&b,b=aa(z,g,!1,h)&&b,d)for(V=0;V<d.length;V++)z=h.g=d[V],b=aa(z,g,!1,h)&&b}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)sa(d[g]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ge.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function aa(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,V=0;V<h.length;++V){var z=h[V];if(z&&!z.da&&z.capture==d){var ue=z.listener,Ue=z.ha||z.src;z.fa&&Ku(a.i,z),b=ue.call(Ue,g)!==!1&&b}}return b&&!g.defaultPrevented}function Ep(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Tp(a){a.g=Ep(()=>{a.g=null,a.i&&(a.i=!1,Tp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class TT extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(a){le.call(this),this.h=a,this.g={}}R(vs,le);var Ip=[];function Sp(a){L(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ju(h)},a),a.g={}}vs.prototype.N=function(){vs.aa.N.call(this),Sp(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tc=l.JSON.stringify,IT=l.JSON.parse,ST=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function nc(){}nc.prototype.h=null;function Ap(a){return a.h||(a.h=a.i())}function kp(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rc(){Se.call(this,"d")}R(rc,Se);function ic(){Se.call(this,"c")}R(ic,Se);var br={},Rp=null;function la(){return Rp=Rp||new Ge}br.La="serverreachability";function Cp(a){Se.call(this,br.La,a)}R(Cp,Se);function ws(a){const h=la();it(h,new Cp(h))}br.STAT_EVENT="statevent";function Pp(a,h){Se.call(this,br.STAT_EVENT,a),this.stat=h}R(Pp,Se);function st(a){const h=la();it(h,new Pp(h,a))}br.Ma="timingevent";function xp(a,h){Se.call(this,br.Ma,a),this.size=h}R(xp,Se);function Es(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function AT(a,h,d,g,b,V){a.info(function(){if(a.g)if(V)for(var z="",ue=V.split("&"),Ue=0;Ue<ue.length;Ue++){var se=ue[Ue].split("=");if(1<se.length){var Ke=se[0];se=se[1];var Qe=Ke.split("_");z=2<=Qe.length&&Qe[1]=="type"?z+(Ke+"="+se+"&"):z+(Ke+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+d+`
`+z})}function kT(a,h,d,g,b,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+d+`
`+V+" "+z})}function fi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+CT(a,d)+(g?" "+g:"")})}function RT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ts.prototype.info=function(){};function CT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var V=b[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return tc(d)}catch{return h}}var ua={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Np={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sc;function ca(){}R(ca,nc),ca.prototype.g=function(){return new XMLHttpRequest},ca.prototype.i=function(){return{}},sc=new ca;function Fn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var Dp={},oc={};function ac(a,h,d){a.L=1,a.v=pa(yn(h)),a.m=d,a.P=!0,Op(a,null)}function Op(a,h){a.F=Date.now(),ha(a),a.A=yn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Kp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new bp,a.g=dm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new TT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ip[0]=b.toString()),b=Ip);for(var V=0;V<b.length;V++){var z=yp(d,b[V],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ws(),AT(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=vn(this.g);var h=this.g.Ba();const gi=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||tm(this.g)))){this.J||Qe!=4||h==7||(h==8||0>=gi?ws(3):ws(2)),lc(this);var d=this.g.Z();this.X=d;t:if(Vp(this)){var g=tm(this.g);a="";var b=g.length,V=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Is(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,kT(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Ue=this.g;if((ue=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ue)){var se=ue;break t}}se=null}if(d=se)fi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uc(this,d);else{this.o=!1,this.s=3,st(12),Dr(this),Is(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<z.length;)if(Vt=PT(this,z),Vt==oc){Qe==4&&(this.s=4,st(14),d=!1),fi(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Dp){this.s=4,st(15),fi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else fi(this.i,this.l,Vt,null),uc(this,Vt);if(Vp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||z.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)fi(this.i,this.l,z,"[Invalid Chunked Response]"),Dr(this),Is(this);else if(0<z.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),mc(Ke),Ke.M=!0,st(11))}}else fi(this.i,this.l,z,null),uc(this,z);Qe==4&&Dr(this),this.o&&!this.J&&(Qe==4?lm(this.j,this):(this.o=!1,ha(this)))}else qT(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Dr(this),Is(this)}}}catch{}finally{}};function Vp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function PT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?oc:(d=Number(h.substring(d,g)),isNaN(d)?Dp:(g+=1,g+d>h.length?oc:(h=h.slice(g,g+d),a.C=g+d,h)))}Fn.prototype.cancel=function(){this.J=!0,Dr(this)};function ha(a){a.S=Date.now()+a.I,Lp(a,a.I)}function Lp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Es(m(a.ba,a),h)}function lc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(RT(this.i,this.A),this.L!=2&&(ws(),st(17)),Dr(this),this.s=2,Is(this)):Lp(this,this.S-a)};function Is(a){a.j.G==0||a.J||lm(a.j,a)}function Dr(a){lc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Sp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function uc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||cc(d.h,a))){if(!a.K&&cc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)wa(d),va(d);else break e;pc(d),st(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Es(m(d.Za,d),6e3));if(1>=jp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Vr(d,11)}else if((a.K||d.g==a)&&wa(d),!v(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let se=b[h];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ke=se[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Qe=se[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));const gi=se[5];gi!=null&&typeof gi=="number"&&0<gi&&(g=1.5*gi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Vt=a.g;if(Vt){const Ta=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var V=g.h;V.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(hc(V,V.h),V.h=null))}if(g.D){const gc=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(g.ya=gc,he(g.I,g.D,gc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=hm(g,g.J?g.ia:null,g.W),z.K){Up(g.h,z);var ue=z,Ue=g.L;Ue&&(ue.I=Ue),ue.B&&(lc(ue),ha(ue)),g.g=z}else om(g);0<d.i.length&&_a(d)}else se[0]!="stop"&&se[0]!="close"||Vr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Vr(d,7):fc(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}ws(4)}catch{}}var xT=class{constructor(a,h){this.g=a,this.map=h}};function Mp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jp(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hc(a,h){a.g?a.g.add(h):a.h=h}function Up(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mp.prototype.cancel=function(){if(this.i=zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function NT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function bT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Bp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=bT(a),g=NT(a),b=g.length,V=0;V<b;V++)h.call(void 0,g[V],d&&d[V],a)}var $p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),b=null;if(0<=g){var V=a[d].substring(0,g);b=a[d].substring(g+1)}else V=a[d];h(V,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,da(this,a.j),this.o=a.o,this.g=a.g,fa(this,a.s),this.l=a.l;var h=a.i,d=new ks;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Hp(this,d),this.m=a.m}else a&&(h=String(a).match($p))?(this.h=!1,da(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),fa(this,h[4]),this.l=Ss(h[5]||"",!0),Hp(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}Or.prototype.toString=function(){var a=[],h=this.j;h&&a.push(As(h,Wp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(As(h,Wp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(As(d,d.charAt(0)=="/"?LT:VT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",As(d,FT)),a.join("")};function yn(a){return new Or(a)}function da(a,h,d){a.j=d?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Hp(a,h,d){h instanceof ks?(a.i=h,jT(a.i,a.h)):(d||(h=As(h,MT)),a.i=new ks(h,a.h))}function he(a,h,d){a.i.set(h,d)}function pa(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function As(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,OT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wp=/[#\/\?@]/g,VT=/[#\?:]/g,LT=/[#\?]/g,MT=/[#\?@]/g,FT=/#/g;function ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&DT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(a,h){jn(this),this.i=null,a=pi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function qp(a,h){jn(a),h=pi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Gp(a,h){return jn(a),h=pi(a,h),a.g.has(h)}t.forEach=function(a,h){jn(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const b=a[g];for(let V=0;V<b.length;V++)d.push(h[g])}return d},t.V=function(a){jn(this);let h=[];if(typeof a=="string")Gp(this,a)&&(h=h.concat(this.g.get(pi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return jn(this),this.i=null,a=pi(this,a),Gp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Kp(a,h,d){qp(a,h),0<d.length&&(a.i=null,a.g.set(pi(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var b=V;z[g]!==""&&(b+="="+encodeURIComponent(String(z[g]))),a.push(b)}}return this.i=a.join("&")};function pi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jT(a,h){h&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(d,g){var b=g.toLowerCase();g!=b&&(qp(this,g),Kp(this,b,d))},a)),a.j=h}function UT(a,h){const d=new Ts;if(l.Image){const g=new Image;g.onload=S(Un,d,"TestLoadImage: loaded",!0,h,g),g.onerror=S(Un,d,"TestLoadImage: error",!1,h,g),g.onabort=S(Un,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=S(Un,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function zT(a,h){const d=new Ts,g=new AbortController,b=setTimeout(()=>{g.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(b),V.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function BT(){this.g=new ST}function $T(a,h,d){const g=d||"";try{Bp(a,function(b,V){let z=b;c(b)&&(z=tc(b)),h.push(g+V+"="+encodeURIComponent(z))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function ma(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ma,nc),ma.prototype.g=function(){return new ga(this.l,this.j)},ma.prototype.i=function(a){return function(){return a}}({});function ga(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ga,Ge),t=ga.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Rs(this):Cs(this),this.readyState==3&&Qp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yp(a){let h="";return L(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function dc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Yp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,h,d))}function Te(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,Ge);var HT=/^https?$/i,WT=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sc.g(),this.v=this.o?Ap(this.o):Ap(sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Xp(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(WT,h,void 0))||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{em(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Xp(this,V)}};function Xp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jp(a),ya(a)}function Jp(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zp(this):this.bb())},t.bb=function(){Zp(this)};function Zp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Ep(a.Ea,0,a);else if(it(a,"readystatechange"),vn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=z===0){var b=String(a.D).match($p)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!HT.test(b?b.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var V=2<vn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Jp(a)}}finally{ya(a)}}}}function ya(a,h){if(a.g){em(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||it(a,"ready");try{d.onreadystatechange=g}catch{}}}function em(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),IT(h)}};function tm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qT(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=C(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[b]||[];h[b]=V,V.push(d)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function nm(a){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,a),this.cb=Ps("retryDelaySeedMs",1e4,a),this.Wa=Ps("forwardChannelMaxRetries",2,a),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mp(a&&a.concurrentRequestLimit),this.Da=new BT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){st(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=hm(this,null,this.W),_a(this)};function fc(a){if(rm(a),a.G==3){var h=a.U++,d=yn(a.I);if(he(d,"SID",a.K),he(d,"RID",h),he(d,"TYPE","terminate"),xs(a,d),h=new Fn(a,a.j,h),h.L=2,h.v=pa(yn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=dm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ha(h)}cm(a)}function va(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function rm(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _a(a){if(!Fp(a.h)&&!a.s){a.s=!0;var h=a.Ga;dn||J(),B||(dn(),B=!0),Q.add(h,a),a.B=0}}function GT(a,h){return jp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Es(m(a.Ga,a,h),um(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Fn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(b.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=sm(this,b,h),d=yn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),xs(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(Yp(V)))+"&"+h:this.m&&dc(d,this.m,V)),hc(this.h,b),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",h),he(d,"SID","null"),b.T=!0,ac(b,d,null)):ac(b,d,h),this.G=2}}else this.G==3&&(a?im(this,a):this.i.length==0||Fp(this.h)||im(this))};function im(a,h){var d;h?d=h.l:d=a.U++;const g=yn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),xs(a,g),a.m&&a.o&&dc(g,a.m,a.o),d=new Fn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),hc(a.h,d),ac(d,g,h)}function xs(a,h){a.H&&L(a.H,function(d,g){he(h,g,d)}),a.l&&Bp({},function(d,g){he(h,g,d)})}function sm(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let V=-1;for(;;){const z=["count="+d];V==-1?0<d?(V=b[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let ue=!0;for(let Ue=0;Ue<d;Ue++){let se=b[Ue].g;const Ke=b[Ue].map;if(se-=V,0>se)V=Math.max(0,b[Ue].g-100),ue=!1;else try{$T(Ke,z,"req"+se+"_")}catch{g&&g(Ke)}}if(ue){g=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function om(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;dn||J(),B||(dn(),B=!0),Q.add(h,a),a.v=0}}function pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Es(m(a.Fa,a),um(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,am(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Es(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),va(this),am(this))};function mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function am(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),xs(a,h),a.m&&a.o&&dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=pa(yn(h)),d.m=null,d.P=!0,Op(d,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),pc(this),st(19))};function wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function lm(a,h){var d=null;if(a.g==h){wa(a),mc(a),a.g=null;var g=2}else if(cc(a.h,h))d=h.D,Up(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=la(),it(g,new xp(g,d)),_a(a)}else om(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&GT(a,h)||g==2&&pc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function um(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const b=!g;g=new Or(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||da(g,"https"),pa(g),b?UT(g.toString(),d):zT(g.toString(),d)}else st(2);a.G=0,a.l&&a.l.sa(h),cm(a),rm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function cm(a){if(a.G=0,a.ka=[],a.l){const h=zp(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function hm(a,h,d){var g=d instanceof Or?yn(d):new Or(d);if(g.g!="")h&&(g.g=h+"."+g.g),fa(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var V=new Or(null);g&&da(V,g),h&&(V.g=h),b&&fa(V,b),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&he(g,d,h),he(g,"VER",a.la),xs(a,g),g}function dm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Te(new ma({eb:d})):new Te(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fm(){}t=fm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ea(){}Ea.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ge.call(this),this.g=new nm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new mi(this)}R(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){fc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tc(a),a=d);h.i.push(new xT(h.Ya++,a)),h.G==3&&_a(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,fc(this.g),delete this.g,yt.aa.N.call(this)};function pm(a){rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(pm,rc);function mm(){ic.call(this),this.status=1}R(mm,ic);function mi(a){this.g=a}R(mi,fm),mi.prototype.ua=function(){it(this.g,"a")},mi.prototype.ta=function(a){it(this.g,new pm(a))},mi.prototype.sa=function(a){it(this.g,new mm)},mi.prototype.ra=function(){it(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,aw=function(){return new Ea},ow=function(){return la()},sw=br,sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ua.NO_ERROR=0,ua.TIMEOUT=8,ua.HTTP_ERROR=6,sl=ua,Np.COMPLETE="complete",iw=Np,kp.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,Ws=kp,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,rw=Te}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});const Xg="@firebase/firestore",Jg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new kf("@firebase/firestore");function vi(){return ei.logLevel}function $(t,...e){if(ei.logLevel<=te.DEBUG){const n=e.map(Pf);ei.debug(`Firestore (${hs}): ${t}`,...n)}}function Dn(t,...e){if(ei.logLevel<=te.ERROR){const n=e.map(Pf);ei.error(`Firestore (${hs}): ${t}`,...n)}}function yr(t,...e){if(ei.logLevel<=te.WARN){const n=e.map(Pf);ei.warn(`Firestore (${hs}): ${t}`,...n)}}function Pf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lw(t,r,n)}function lw(t,e,n){let r=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||lw(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class iC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sC{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new uw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new oC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Zg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=uC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function od(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=cw(),o=cC(s.encode(ey(t,n)),s.encode(ey(e,n)));return o!==0?o:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function ey(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function cC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="__name__";class Qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Qt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=Qt.isNumericId(e),i=Qt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Qt.extractNumericId(e).compare(Qt.extractNumericId(n)):od(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class fe extends Qt{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const hC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Qt{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return hC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new $e([ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dC(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ry(t){if(q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Yo(t,e){if(!dw(t))throw new W(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=-62135596800,sy=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sy);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<iy)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sy}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Pe("string",pe._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new pe(0,0))}static max(){return new Y(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-1;function fC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new vr(i,q.empty(),e)}function pC(t){return new vr(t.readTime,t.key,Do)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Y.min(),q.empty(),Do)}static max(){return new vr(Y.max(),q.empty(),Do)}}function mC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==gC)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ru.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=-1;function Cu(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function _C(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="";function wC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=oy(e)),e=EC(t.get(n),e);return oy(e)}function EC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case fw:n+="";break;default:n+=s}}return n}function oy(t){return t+fw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ly(this.data.getIterator())}getIteratorFrom(e){return new ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Ve($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mw("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const TC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=TC.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="server_timestamp",yw="__type__",vw="__previous_value__",_w="__local_write_time__";function Df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[yw])===null||n===void 0?void 0:n.stringValue)===gw}function Pu(t){const e=t.mapValue.fields[vw];return Df(e)?Pu(e):e}function Oo(t){const e=_r(t.mapValue.fields[_w].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const $l="(default)";class Vo{constructor(e,n){this.projectId=e,this.database=n||$l}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===$l}isEqual(e){return e instanceof Vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="__type__",SC="__max__",Ba={mapValue:{}},Ew="__vector__",Hl="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Df(t)?4:kC(t)?9007199254740991:AC(t)?10:11:K(28295,{value:t})}function an(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wr(i.bytesValue).isEqual(wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ay(o)!==ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Lo(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uy(t.timestampValue,e.timestampValue);case 4:return uy(Oo(t),Oo(e));case 5:return od(t.stringValue,e.stringValue);case 6:return function(s,o){const l=wr(s),u=wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Z(l[c],u[c]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(Ae(s.latitude),Ae(o.latitude));return l!==0?l:Z(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},S=(l=p[Hl])===null||l===void 0?void 0:l.arrayValue,R=(u=m[Hl])===null||u===void 0?void 0:u.arrayValue,N=Z(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:cy(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ba.mapValue&&o===Ba.mapValue)return 0;if(s===Ba.mapValue)return 1;if(o===Ba.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=od(u[p],f[p]);if(m!==0)return m;const S=ts(l[u[p]],c[f[p]]);if(S!==0)return S}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{le:n})}}function uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=_r(t),r=_r(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function cy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ts(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function ns(t){return ad(t)}function ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ad(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ad(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function ol(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pu(t);return e?16+ol(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ol(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Rr(r.fields,(s,o)=>{i+=s.length+ol(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function ld(t){return!!t&&"integerValue"in t}function Of(t){return!!t&&"arrayValue"in t}function hy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function AC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[ww])===null||n===void 0?void 0:n.stringValue)===Ew}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===SC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=oo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(oo(this.value))}}function Tw(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new $e([n]);if(al(r)){const s=Tw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function fy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n="asc"){this.field=e,this.dir=n}}function RC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{}class be extends Iw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PC(e,n,r):n==="array-contains"?new bC(e,r):n==="in"?new DC(e,r):n==="not-in"?new OC(e,r):n==="array-contains-any"?new VC(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xC(e,r):new NC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ts(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends Iw{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new ln(e,n)}matches(e){return Sw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Sw(t){return t.op==="and"}function Aw(t){return CC(t)&&Sw(t)}function CC(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function ud(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(Aw(t))return t.filters.map(e=>ud(e)).join(",");{const e=t.filters.map(n=>ud(n)).join(",");return`${t.op}(${e})`}}function kw(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(t,e):t instanceof ln?function(r,i){return i instanceof ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&kw(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function Rw(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Rw).join(" ,")+"}"}(t):"Filter"}class PC extends be{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class xC extends be{constructor(e,n){super(e,"in",n),this.keys=Cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NC extends be{constructor(e,n){super(e,"not-in",n),this.keys=Cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class bC extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Of(n)&&Lo(n.arrayValue,this.value)}}class DC extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class OC extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Lo(this.value.arrayValue,n)}}class VC extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function my(t,e=null,n=[],r=[],i=null,s=null,o=null){return new LC(t,e,n,r,i,s,o)}function Vf(t){const e=X(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ud(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.Pe=n}return e.Pe}function Lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!py(t.startAt,e.startAt)&&py(t.endAt,e.endAt)}function cd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function MC(t,e,n,r,i,s,o,l){return new xu(t,e,n,r,i,s,o,l)}function Mf(t){return new xu(t)}function gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function FC(t){return t.collectionGroup!==null}function ao(t){const e=X(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ve($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new ql(s,r))}),n.has($e.keyField().canonicalString())||e.Te.push(new ql($e.keyField(),r))}return e.Te}function en(t){const e=X(t);return e.Ie||(e.Ie=jC(e,ao(t))),e.Ie}function jC(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ql(i.field,s)});const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hd(t,e,n){return new xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Lf(en(t),en(e))&&t.limitType===e.limitType}function Pw(t){return`${Vf(en(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Rw(i)).join(", ")}]`),Cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ns(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ns(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function bu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=fy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ao(r),i)||r.endAt&&!function(o,l,u){const c=fy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ao(r),i))}(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xw(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const s=zC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ts(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return pw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new Ee(q.comparator);function Vn(){return BC}const Nw=new Ee(q.comparator);function qs(...t){let e=Nw;for(const n of t)e=e.insert(n.key,n);return e}function bw(t){let e=Nw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return lo()}function Dw(){return lo()}function lo(){return new ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const $C=new Ee(q.comparator),HC=new Ve(q.comparator);function ne(...t){let e=HC;for(const n of t)e=e.add(n);return e}const WC=new Ve(Z);function qC(){return WC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function Ow(t){return{integerValue:""+t}}function GC(t,e){return _C(e)?Ow(e):Ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof Mo?function(i,s){const o={fields:{[yw]:{stringValue:gw},[_w]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Df(s)&&(s=Pu(s)),s&&(o.fields[vw]=s),{mapValue:o}}(n,e):t instanceof Fo?Lw(t,e):t instanceof jo?Mw(t,e):function(i,s){const o=Vw(i,s),l=yy(o)+yy(i.Ee);return ld(o)&&ld(i.Ee)?Ow(l):Ff(i.serializer,l)}(t,e)}function QC(t,e,n){return t instanceof Fo?Lw(t,e):t instanceof jo?Mw(t,e):n}function Vw(t,e){return t instanceof Gl?function(r){return ld(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mo extends Du{}class Fo extends Du{constructor(e){super(),this.elements=e}}function Lw(t,e){const n=Fw(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class jo extends Du{constructor(e){super(),this.elements=e}}function Mw(t,e){let n=Fw(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class Gl extends Du{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function yy(t){return Ae(t.integerValue||t.doubleValue)}function Fw(t){return Of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n){this.field=e,this.transform=n}}function XC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof jo&&i instanceof jo?es(r.elements,i.elements,an):r instanceof Gl&&i instanceof Gl?an(r.Ee,i.Ee):r instanceof Mo&&i instanceof Mo}(t.transform,e.transform)}class JC{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ou{}function jw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jf(t.key,Ht.none()):new Xo(t.key,t.data,Ht.none());{const n=t.data,r=dt.empty();let i=new Ve($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new Et(i.toArray()),Ht.none())}}function ZC(t,e,n){t instanceof Xo?function(i,s,o){const l=i.value.clone(),u=_y(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(i,s,o){if(!ll(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=_y(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Uw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof Xo?function(s,o,l,u){if(!ll(s.precondition,o))return l;const c=s.value.clone(),f=wy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(s,o,l,u){if(!ll(s.precondition,o))return l;const c=wy(s.fieldTransforms,u,o),f=o.data;return f.setAll(Uw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ll(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function eP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vw(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&es(r,i,(s,o)=>XC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends Ou{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Ou{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _y(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,QC(o,l,n[i]))}return r}function wy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KC(s,o,e))}return r}class jf extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tP extends Ou{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Dw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=jw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>vy(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class Uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return $C}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Uf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,re;function sP(t){switch(t){case F.OK:return K(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function zw(t){if(t===void 0)return Dn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Re.OK:return F.OK;case Re.CANCELLED:return F.CANCELLED;case Re.UNKNOWN:return F.UNKNOWN;case Re.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Re.INTERNAL:return F.INTERNAL;case Re.UNAVAILABLE:return F.UNAVAILABLE;case Re.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Re.NOT_FOUND:return F.NOT_FOUND;case Re.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Re.ABORTED:return F.ABORTED;case Re.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Re.DATA_LOSS:return F.DATA_LOSS;default:return K(39323,{code:t})}}(re=Re||(Re={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new dr([4294967295,4294967295],0);function Ey(t){const e=cw().encode(t),n=new nw;return n.update(e),new Uint8Array(n.digest())}function Ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dr([n,r],0),new dr([i,s],0)]}class zf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gs(`Invalid padding: ${n}`);if(r<0)throw new Gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gs(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=dr.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(dr.fromNumber(r)));return i.compare(oP)===1&&(i=new dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ey(e),[r,i]=Ty(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=Ey(e),[r,i]=Ty(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vu(Y.min(),i,new Ee(Z),Vn(),ne())}}class Jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class Bw{constructor(e,n){this.targetId=e,this.De=n}}class $w{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Iy{constructor(){this.ve=0,this.Ce=Sy(),this.Fe=qe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ne(),n=ne(),r=ne();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Jo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Sy()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class aP{constructor(e){this.We=e,this.Ge=new Map,this.ze=Vn(),this.je=$a(),this.Je=$a(),this.He=new Ee(Z)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(cd(s))if(r===0){const o=new q(s.path);this.Xe(n,o,tt.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof mw)return yr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new zf(o,i,s)}catch(u){return yr(u instanceof Gs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&cd(l.target)){const u=new q(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,tt.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=ne();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Vu(e,n,this.He,this.ze,r);return this.ze=Vn(),this.je=$a(),this.Je=$a(),this.He=new Ee(Z),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Iy,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ve(Z),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ve(Z),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Iy),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function $a(){return new Ee(q.comparator)}function Sy(){return new Ee(q.comparator)}const lP={asc:"ASCENDING",desc:"DESCENDING"},uP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cP={and:"AND",or:"OR"};class hP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dd(t,e){return t.useProto3Json||Cu(e)?e:{value:e}}function Kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dP(t,e){return Kl(t,e.toTimestamp())}function tn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=_r(n);return new pe(r.seconds,r.nanos)}(t))}function Bf(t,e){return fd(t,e).canonicalString()}function fd(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ww(t){const e=fe.fromString(t);return oe(Yw(e),10190,{key:e.toString()}),e}function pd(t,e){return Bf(t.databaseId,e.path)}function Yc(t,e){const n=Ww(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Gw(n))}function qw(t,e){return Bf(t.databaseId,e)}function fP(t){const e=Ww(t);return e.length===4?fe.emptyPath():Gw(e)}function md(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ay(t,e,n){return{name:pd(t,e),fields:n.value.mapValue.fields}}function pP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),qe.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?F.UNKNOWN:zw(c.code);return new W(f,c.message||"")}(o);n=new $w(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yc(t,r.document.name),s=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):Y.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ul(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yc(t,r.document),s=r.readTime?tn(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yc(t,r.document),s=r.removedTargetIds||[];n=new ul([],s,i,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new iP(i,s),l=r.targetId;n=new Bw(l,o)}}return n}function mP(t,e){let n;if(e instanceof Xo)n={update:Ay(t,e.key,e.value)};else if(e instanceof jf)n={delete:pd(t,e.key)};else if(e instanceof Cr)n={update:Ay(t,e.key,e.data),updateMask:SP(e.fieldMask)};else{if(!(e instanceof tP))return K(16599,{Rt:e.type});n={verify:pd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Gl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function gP(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?tn(i.updateTime):tn(s);return o.isEqual(Y.min())&&(o=tn(s)),new JC(o,i.transformResults||[])}(n,e))):[]}function yP(t,e){return{documents:[qw(t,e.path)]}}function vP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qw(t,i);const s=function(c){if(c.length!==0)return Qw(ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:wi(m.field),direction:EP(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:i}}function _P(t){let e=fP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=Kw(p);return m instanceof ln&&Aw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new ql(Ei(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Cu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new Wl(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new Wl(S,m)}(n.endAt)),MC(e,i,o,s,l,"F",u,c)}function wP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ei(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ei(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(Ei(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>Kw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function EP(t){return lP[t]}function TP(t){return uP[t]}function IP(t){return cP[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return $e.fromServerFormat(t.fieldPath)}function Qw(t){return t instanceof be?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(hy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(hy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:TP(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(i=>Qw(i));return r.length===1?r[0]:{compositeFilter:{op:IP(n.op),filters:r}}}(t):K(54877,{filter:t})}function SP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.gt=e}}function kP(t){const e=_P({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.Dn=new CP}addToCollectionParentIndex(e,n){return this.Dn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(vr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class CP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xw=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(Xw,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new rs(0)}static ur(){return new rs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="LruGarbageCollector",PP=1048576;function Cy([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class xP{constructor(e){this.Tr=e,this.buffer=new Ve(Cy),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){$(Ry,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fs(n)?$(Ry,"Ignoring IndexedDB error during garbage collection: ",n):await ds(n)}await this.Rr(3e5)})}}class bP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ru.ue);const r=new xP(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(ky)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ky):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),vi()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function DP(t,e){return new bP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.changes=new ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&uo(r.mutation,i,Et.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Vn();const o=lo(),l=function(){return lo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Cr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),uo(f.mutation,c,f.mutation.getFieldMask(),pe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new VP(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=lo();let i=new Ee((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Dw();f.forEach(m=>{if(!s.has(m)){const S=jw(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):FC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve($r());let l=Do,u=s;return o.next(c=>M.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:bw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new xu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,tt.newInvalidDocument(f)))});let l=qs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&uo(f.mutation,c,Et.empty(),pe.now()),bu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return M.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:kP(i.bundledQuery),readTime:tn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.overlays=new Ee(q.comparator),this.kr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=$r(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=$r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return M.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rP(n,r));let s=this.kr.get(n);s===void 0&&(s=ne(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.qr=new Ve(Le.Qr),this.$r=new Ve(Le.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Le(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new q(new fe([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new q(new fe([])),r=new Le(n,e),i=new Le(n,e+1);let s=ne();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return q.comparator(e.key,n.key)||Z(e.Hr,n.Hr)}static Ur(e,n){return Z(e.Hr,n.Hr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ve(Le.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?bf:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(Z);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Le(new q(s),0);let l=new Ve(Z);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Le(n,0),i=this.Yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.ni=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||mC(pC(f),r)<=0||(i.has(f.key)||bu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ri(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BP(this)}getSize(e){return M.resolve(this.size)}}class BP extends OP{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.persistence=e,this.ii=new ci(n=>Vf(n),Lf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new $f,this.targetCount=0,this._i=rs.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),M.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.hr(n),M.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.ai={},this.overlays={},this.ui=new Ru(0),this.ci=!1,this.ci=!0,this.li=new jP,this.referenceDelegate=e(this),this.hi=new $P(this),this.indexManager=new RP,this.remoteDocumentCache=function(i){return new zP(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new AP(n),this.Ti=new MP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new UP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new HP(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class HP extends yC{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ai=new $f,this.Ri=null}static Vi(e){return new Hf(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const i=q.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return M.or([()=>M.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ql{constructor(e,n){this.persistence=e,this.gi=new ci(r=>wC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=DP(this,n)}static Vi(e,n){return new Ql(e,n)}Ii(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return M.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ol(e.data.value)),n}Sr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Mk()?8:vC(rt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WP;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(vi()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(vi()<=te.DEBUG&&$("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(vi()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):M.resolve())}ps(e,n){if(gy(n))return M.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hd(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,hd(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,i){return gy(n)||i.isEqual(Y.min())?M.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?M.resolve(null):(vi()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.vs(e,o,n,fC(i,Do)).next(l=>l))})}bs(e,n){let r=new Ve(xw(e));return n.forEach((i,s)=>{bu(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return vi()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",_i(n)),this.gs.getDocumentsMatchingQuery(e,n,vr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="LocalStore",GP=3e8;class KP{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new Ee(Z),this.Ms=new ci(s=>Vf(s),Lf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function QP(t,e,n,r){return new KP(t,e,n,r)}async function Zw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function YP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let S=M.resolve();return m.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(N=>{const x=c.docVersions.get(R);oe(x!==null,48541),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function XP(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(N,x,_){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=GP?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,S,f)&&l.push(n.hi.updateTargetData(s,S))});let u=Vn(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(JP(s,o,e.documentUpdates).next(f=>{u=f.Ls,c=f.ks})),!r.isEqual(Y.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Fs=i,s))}function JP(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(qf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function ZP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ex(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function gd(t,e,n){const r=X(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fs(o))throw o;$(qf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Py(t,e,n){const r=X(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=X(u),m=p.Ms.get(f);return m!==void 0?M.resolve(p.Fs.get(m)):p.hi.getTargetData(c,f)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(tx(r,UC(e),l),{documents:l,qs:s})))}function tx(t,e,n){let r=t.xs.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class xy{constructor(){this.activeTargetIds=qC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nx{constructor(){this.Fo=new xy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new xy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="ConnectivityMonitor";class by{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(Ny,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){$(Ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=null;function yd(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="RestConnection",ix={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===$l?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=yd(),l=this.Go(e,n.toUriEncodedString());$(Xc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:c}=new URL(l),f=li(c);return this.jo(e,l,u,r,f).then(p=>($(Xc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw yr(Xc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=ix[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class ax extends sx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=yd();return new Promise((l,u)=>{const c=new rw;c.setWithCredentials(!0),c.listenOnce(iw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sl.NO_ERROR:const p=c.getResponseJson();$(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case sl.TIMEOUT:$(Je,`RPC '${e}' ${o} timed out`),u(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const m=c.getStatus();if($(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S==null?void 0:S.error;if(R&&R.status&&R.message){const N=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(R.status);u(new W(N,R.message))}else u(new W(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(F.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{$(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Je,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}P_(e,n,r){const i=yd(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aw(),l=ow(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let m=!1,S=!1;const R=new ox({Ho:x=>{S?$(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||($(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),$(Je,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},Yo:()=>p.close()}),N=(x,_,v)=>{x.listen(_,w=>{try{v(w)}catch(P){setTimeout(()=>{throw P},0)}})};return N(p,Ws.EventType.OPEN,()=>{S||($(Je,`RPC '${e}' stream ${i} transport opened.`),R.s_())}),N(p,Ws.EventType.CLOSE,()=>{S||(S=!0,$(Je,`RPC '${e}' stream ${i} transport closed`),R.__(),this.I_(p))}),N(p,Ws.EventType.ERROR,x=>{S||(S=!0,yr(Je,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),R.__(new W(F.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ws.EventType.MESSAGE,x=>{var _;if(!S){const v=x.data[0];oe(!!v,16349);const w=v,P=(w==null?void 0:w.error)||((_=w[0])===null||_===void 0?void 0:_.error);if(P){$(Je,`RPC '${e}' stream ${i} received error:`,P);const O=P.status;let L=function(I){const A=Re[I];if(A!==void 0)return zw(A)}(O),T=P.message;L===void 0&&(L=F.INTERNAL,T="Unknown error status: "+O+" with message "+P.message),S=!0,R.__(new W(L,T)),p.close()}else $(Je,`RPC '${e}' stream ${i} received:`,v),R.a_(v)}}),N(l,sw.STAT_EVENT,x=>{x.stat===sd.PROXY?$(Je,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===sd.NOPROXY&&$(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Jc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new hP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="PersistentStream";class nE{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new tE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(Dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():($(Dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lx extends nE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=pP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?tn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=md(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=cd(u)?{documents:yP(s,u)}:{query:vP(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Hw(s,o.resumeToken);const c=dd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Kl(s,o.snapshotVersion.toTimestamp());const c=dd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=wP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=md(this.serializer),n.removeTarget=e,this.k_(n)}}class ux extends nE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=gP(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=md(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mP(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{}class hx extends cx{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,fd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,fd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class dx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dn(n),this._a=!1):$("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="RemoteStore";class fx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{hi(this)&&($(ti,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ia.add(4),await Zo(c),c.Aa.set("Unknown"),c.Ia.delete(4),await Mu(c)}(this))})}),this.Aa=new dx(r,i)}}async function Mu(t){if(hi(t))for(const e of t.da)await e(!0)}async function Zo(t){for(const e of t.da)await e(!1)}function rE(t,e){const n=X(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Yf(n)?Qf(n):ps(n).x_()&&Kf(n,e))}function Gf(t,e){const n=X(t),r=ps(n);n.Ta.delete(e),r.x_()&&iE(n,e),n.Ta.size===0&&(r.x_()?r.B_():hi(n)&&n.Aa.set("Unknown"))}function Kf(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).H_(e)}function iE(t,e){t.Ra.$e(e),ps(t).Y_(e)}function Qf(t){t.Ra=new aP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.Aa.aa()}function Yf(t){return hi(t)&&!ps(t).M_()&&t.Ta.size>0}function hi(t){return X(t).Ia.size===0}function sE(t){t.Ra=void 0}async function px(t){t.Aa.set("Online")}async function mx(t){t.Ta.forEach((e,n)=>{Kf(t,e)})}async function gx(t,e){sE(t),Yf(t)?(t.Aa.la(e),Qf(t)):t.Aa.set("Unknown")}async function yx(t,e,n){if(t.Aa.set("Online"),e instanceof $w&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){$(ti,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yl(t,r)}else if(e instanceof ul?t.Ra.Ye(e):e instanceof Bw?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Y.min()))try{const r=await eE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(c);f&&s.Ta.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),iE(s,u);const p=new er(f.target,u,c,f.sequenceNumber);Kf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(ti,"Failed to raise snapshot:",r),await Yl(t,r)}}async function Yl(t,e,n){if(!fs(e))throw e;t.Ia.add(1),await Zo(t),t.Aa.set("Offline"),n||(n=()=>eE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(ti,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Mu(t)})}function oE(t,e){return e().catch(n=>Yl(t,n,e))}async function Fu(t){const e=X(t),n=Tr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bf;for(;vx(e);)try{const i=await ZP(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,_x(e,i)}catch(i){await Yl(e,i)}aE(e)&&lE(e)}function vx(t){return hi(t)&&t.Pa.length<10}function _x(t,e){t.Pa.push(e);const n=Tr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function aE(t){return hi(t)&&!Tr(t).M_()&&t.Pa.length>0}function lE(t){Tr(t).start()}async function wx(t){Tr(t).na()}async function Ex(t){const e=Tr(t);for(const n of t.Pa)e.X_(n.mutations)}async function Tx(t,e,n){const r=t.Pa.shift(),i=Uf.from(r,e,n);await oE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fu(t)}async function Ix(t,e){e&&Tr(t).Z_&&await async function(r,i){if(function(o){return sP(o)&&o!==F.ABORTED}(i.code)){const s=r.Pa.shift();Tr(r).N_(),await oE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fu(r)}}(t,e),aE(t)&&lE(t)}async function Oy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$(ti,"RemoteStore received new credentials");const r=hi(n);n.Ia.add(3),await Zo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Mu(n)}async function Sx(t,e){const n=X(t);e?(n.Ia.delete(2),await Mu(n)):e||(n.Ia.add(2),await Zo(n),n.Aa.set("Unknown"))}function ps(t){return t.Va||(t.Va=function(n,r,i){const s=X(n);return s.ia(),new lx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:px.bind(null,t),e_:mx.bind(null,t),n_:gx.bind(null,t),J_:yx.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Yf(t)?Qf(t):t.Aa.set("Unknown")):(await t.Va.stop(),sE(t))})),t.Va}function Tr(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.ia(),new ux(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:wx.bind(null,t),n_:Ix.bind(null,t),ea:Ex.bind(null,t),ta:Tx.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Fu(t)):(await t.ma.stop(),t.Pa.length>0&&($(ti,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Xf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jf(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),fs(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{static emptySet(e){return new zi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.fa=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):K(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new is(e,n,zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class kx{constructor(){this.queries=Ly(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Ly(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function Ly(){return new ci(t=>Pw(t),Nu)}async function uE(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new Ax,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Jf(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Zf(n)}async function cE(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Rx(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Zf(n)}function Cx(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Zf(t){t.Da.forEach(e=>{e.next()})}var vd,My;(My=vd||(vd={})).Fa="default",My.Cache="cache";class hE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.key=e}}class fE{constructor(e){this.key=e}}class Px{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ne(),this.mutatedKeys=ne(),this.Xa=xw(e),this.eu=new zi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Vy,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=bu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;m&&S?m.data.isEqual(S.data)?R!==N&&(r.track({type:3,doc:S}),x=!0):this.iu(m,S)||(r.track({type:2,doc:S}),x=!0,(u&&this.Xa(S,u)>0||c&&this.Xa(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),x=!0):m&&!S&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(S,R){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:x})}};return N(S)-N(R)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new is(this.query,e.eu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Vy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ne(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new fE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new dE(r))}),n}uu(e){this.Ha=e.qs,this.Za=ne();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return is.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ep="SyncEngine";class xx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Nx{constructor(e){this.key=e,this.lu=!1}}class bx{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new ci(l=>Pw(l),Nu),this.Tu=new Map,this.Iu=new Set,this.du=new Ee(q.comparator),this.Eu=new Map,this.Au=new $f,this.Ru={},this.Vu=new Map,this.mu=rs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Dx(t,e,n=!0){const r=_E(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await pE(r,e,n,!0),i}async function Ox(t,e){const n=_E(t);await pE(n,e,!0,!1)}async function pE(t,e,n,r){const i=await ex(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Vx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rE(t.remoteStore,i),l}async function Vx(t,e,n,r,i){t.gu=(p,m,S)=>async function(N,x,_,v){let w=x.view.nu(_);w.Ds&&(w=await Py(N.localStore,x.query,!1).then(({documents:T})=>x.view.nu(T,w)));const P=v&&v.targetChanges.get(x.targetId),O=v&&v.targetMismatches.get(x.targetId)!=null,L=x.view.applyChanges(w,N.isPrimaryClient,P,O);return jy(N,x.targetId,L._u),L.snapshot}(t,p,m,S);const s=await Py(t.localStore,e,!0),o=new Px(e,s.qs),l=o.nu(s.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,c._u);const f=new xx(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function Lx(t,e,n){const r=X(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Nu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Gf(r.remoteStore,i.targetId),_d(r,i.targetId)}).catch(ds)):(_d(r,i.targetId),await gd(r.localStore,i.targetId,!0))}async function Mx(t,e){const n=X(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gf(n.remoteStore,r.targetId))}async function Fx(t,e,n){const r=Wx(t);try{const i=await function(o,l){const u=X(o),c=pe.now(),f=l.reduce((S,R)=>S.add(R.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Vn(),N=ne();return u.Os.getEntries(S,f).next(x=>{R=x,R.forEach((_,v)=>{v.isValidDocument()||(N=N.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(x=>{p=x;const _=[];for(const v of l){const w=eP(v,p.get(v.key).overlayedDocument);w!=null&&_.push(new Cr(v.key,w,Tw(w.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,_,l)}).next(x=>{m=x;const _=x.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(S,x.batchId,_)})}).then(()=>({batchId:m.batchId,changes:bw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new Ee(Z)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,i.batchId,n),await ea(r,i.changes),await Fu(r.remoteStore)}catch(i){const s=Jf(i,"Failed to persist write");n.reject(s)}}async function mE(t,e){const n=X(t);try{const r=await XP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?oe(o.lu,14607):i.removedDocuments.size>0&&(oe(o.lu,42227),o.lu=!1))}),await ea(n,r,e)}catch(r){await ds(r)}}function Fy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.wa)m.va(l)&&(c=!0)}),c&&Zf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jx(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ee(q.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=ne().add(s),u=new Vu(Y.min(),new Map,new Ee(Z),o,l);await mE(r,u),r.du=r.du.remove(s),r.Eu.delete(e),tp(r)}else await gd(r.localStore,e,!1).then(()=>_d(r,e,n)).catch(ds)}async function Ux(t,e){const n=X(t),r=e.batch.batchId;try{const i=await YP(n.localStore,e);yE(n,r,null),gE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,i)}catch(i){await ds(i)}}async function zx(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);yE(r,e,n),gE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,i)}catch(i){await ds(i)}}function gE(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function yE(t,e,n){const r=X(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function _d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||vE(t,r)})}function vE(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Gf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),tp(t))}function jy(t,e,n){for(const r of n)r instanceof dE?(t.Au.addReference(r.key,e),Bx(t,r)):r instanceof fE?($(ep,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||vE(t,r.key)):K(19791,{yu:r})}function Bx(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||($(ep,"New document in limbo: "+n),t.Iu.add(r),tp(t))}function tp(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new q(fe.fromString(e)),r=t.mu.next();t.Eu.set(r,new Nx(n)),t.du=t.du.insert(n,r),rE(t.remoteStore,new er(en(Mf(n.path)),r,"TargetPurposeLimboResolution",Ru.ue))}}async function ea(t,e,n){const r=X(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Wf.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Is,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>M.forEach(m.ds,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!fs(p))throw p;$(qf,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=f.Fs.get(m),R=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(R);f.Fs=f.Fs.insert(m,N)}}}(r.localStore,s))}async function $x(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$(ep,"User change. New user:",e.toKey());const r=await Zw(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new W(F.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.Bs)}}function Hx(t,e){const n=X(t),r=n.Eu.get(e);if(r&&r.lu)return ne().add(r.key);{let i=ne();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function _E(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jx.bind(null,e),e.hu.J_=Rx.bind(null,e.eventManager),e.hu.pu=Cx.bind(null,e.eventManager),e}function Wx(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ux.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zx.bind(null,e),e}class Xl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return QP(this.persistence,new qP,e.initialUser,this.serializer)}Du(e){return new Jw(Hf.Vi,this.serializer)}bu(e){return new nx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xl.provider={build:()=>new Xl};class qx extends Xl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){oe(this.persistence.referenceDelegate instanceof Ql,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new NP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new Jw(r=>Ql.Vi(r,n),this.serializer)}}class wd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$x.bind(null,this.syncEngine),await Sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kx}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=function(s){return new ax(s)}(e.databaseInfo);return function(s,o,l,u){return new hx(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new fx(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fy(this.syncEngine,n,0),function(){return by.C()?new by:new rx}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new bx(i,s,o,l,u,c);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$(ti,"RemoteStore shutting down."),s.Ia.add(5),await Zo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}wd.provider={build:()=>new wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class Gx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{yr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{$("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{yr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function Uy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kx(t);$(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Oy(e.remoteStore,i)),t._onlineComponents=e}async function Kx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Ir,"Using user provided OfflineComponentProvider");try{await Zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;yr("Error using user provided cache. Falling back to memory cache: "+n),await Zc(t,new Xl)}}else $(Ir,"Using default OfflineComponentProvider"),await Zc(t,new qx(void 0));return t._offlineComponents}async function EE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Ir,"Using user provided OnlineComponentProvider"),await Uy(t,t._uninitializedComponentsProvider._online)):($(Ir,"Using default OnlineComponentProvider"),await Uy(t,new wd))),t._onlineComponents}function Qx(t){return EE(t).then(e=>e.syncEngine)}async function TE(t){const e=await EE(t),n=e.eventManager;return n.onListen=Dx.bind(null,e.syncEngine),n.onUnlisten=Lx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ox.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Mx.bind(null,e.syncEngine),n}function Yx(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new wE({next:m=>{f.Ou(),o.enqueueAndForget(()=>cE(s,p));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new W(F.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new hE(Mf(l.path),f,{includeMetadataChanges:!0,ka:!0});return uE(s,p)}(await TE(t),t.asyncQueue,e,n,r)),r.promise}function Xx(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new wE({next:m=>{f.Ou(),o.enqueueAndForget(()=>cE(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new hE(l,f,{includeMetadataChanges:!0,ka:!0});return uE(s,p)}(await TE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firestore.googleapis.com",By=!0;class $y{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=SE,this.ssl=By}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:By;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PP)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $y({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $y(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rC;switch(r.type){case"firstParty":return new aC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zy.get(n);r&&($("ComponentProvider","Removing Datastore"),zy.delete(n),r.terminate())}(this),Promise.resolve()}}function Jx(t,e,n,r={}){var i;t=On(t,ju);const s=li(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(Sf(`https://${u}`),Af("Firestore",!0)),o.host!==SE&&o.host!==u&&yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Jr(c,l)&&(t._setSettings(c),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ze.MOCK_USER;else{f=Y0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(m)}t._authCredentials=new iC(new uw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Uu(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Yo(n,Oe._jsonSchema))return new Oe(e,r||null,new q(fe.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:Pe("string",Oe._jsonSchemaVersion),referencePath:Pe("string")};class fr extends Uu{constructor(e,n,r){super(e,n,Mf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function lD(t,e,...n){if(t=je(t),hw("collection","path",e),t instanceof ju){const r=fe.fromString(e,...n);return ry(r),new fr(t,null,r)}{if(!(t instanceof Oe||t instanceof fr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return ry(r),new fr(t.firestore,null,r)}}function Zx(t,e,...n){if(t=je(t),arguments.length===1&&(e=xf.newId()),hw("doc","path",e),t instanceof ju){const r=fe.fromString(e,...n);return ny(r),new Oe(t,null,new q(r))}{if(!(t instanceof Oe||t instanceof fr))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return ny(r),new Oe(t.firestore,t instanceof fr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="AsyncQueue";class Wy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new tE(this,"async_queue_retry"),this.oc=()=>{const r=Jc();r&&$(Hy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new kn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!fs(e))throw e;$(Hy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Dn("INTERNAL UNHANDLED ERROR: ",qy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Xf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&K(47125,{hc:qy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function qy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ms extends ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wy(e),this._firestoreClient=void 0,await e}}}function e2(t,e){const n=typeof t=="object"?t:Cf(),r=typeof t=="string"?t:$l,i=ku(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=G0("firestore");s&&Jx(i,...s)}return i}function np(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||t2(t),t._firestoreClient}function t2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new IC(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,IE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Gx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(qe.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yo(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:Pe("string",xt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nn._jsonSchemaVersion}}static fromJSON(e){if(Yo(e,nn._jsonSchema))return new nn(e.latitude,e.longitude)}}nn._jsonSchemaVersion="firestore/geoPoint/1.0",nn._jsonSchema={type:Pe("string",nn._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yo(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new rn(e.vectorValues);throw new W(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:Pe("string",rn._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=/^__.*__$/;class r2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class AE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:t})}}class rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Jl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(kE(this.Ec)&&n2.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class i2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Lu(e)}Dc(e,n,r,i=!1){return new rp({Ec:e,methodName:n,bc:r,path:$e.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RE(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new i2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function s2(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);sp("Data must be an object, but it was:",o,r);const l=CE(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Ed(e,p,n);if(!o.contains(m))throw new W(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xE(f,m)||f.push(m)}u=new Et(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new r2(new dt(l),u,c)}class $u extends Bu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $u}}class ip extends Bu{_toFieldTransform(e){return new YC(e.path,new Mo)}isEqual(e){return e instanceof ip}}function o2(t,e,n,r){const i=t.Dc(1,e,n);sp("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();Rr(r,(u,c)=>{const f=op(e,u,n);c=je(c);const p=i.gc(f);if(c instanceof $u)s.push(f);else{const m=Hu(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Et(s);return new AE(o,l,i.fieldTransforms)}function a2(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[Ed(e,r,n)],u=[i];if(s.length%2!=0)throw new W(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ed(e,s[m])),u.push(s[m+1]);const c=[],f=dt.empty();for(let m=l.length-1;m>=0;--m)if(!xE(c,l[m])){const S=l[m];let R=u[m];R=je(R);const N=o.gc(S);if(R instanceof $u)c.push(S);else{const x=Hu(R,N);x!=null&&(c.push(S),f.set(S,x))}}const p=new Et(c);return new AE(f,p,o.fieldTransforms)}function Hu(t,e){if(PE(t=je(t)))return sp("Unsupported field value:",e,t),CE(t,e);if(t instanceof Bu)return function(r,i){if(!kE(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Hu(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Kl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kl(i.serializer,s)}}if(r instanceof nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:Hw(i.serializer,r._byteString)};if(r instanceof Oe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof rn)return function(o,l){return{mapValue:{fields:{[ww]:{stringValue:Ew},[Hl]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return Ff(l.serializer,c)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Nf(r)}`)}(t,e)}function CE(t,e){const n={};return pw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=Hu(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof nn||t instanceof xt||t instanceof Oe||t instanceof Bu||t instanceof rn)}function sp(t,e,n){if(!PE(n)||!dw(n)){const r=Nf(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Ed(t,e,n){if((e=je(e))instanceof zu)return e._internalPath;if(typeof e=="string")return op(t,e);throw Jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const l2=new RegExp("[~\\*/\\[\\]]");function op(t,e,n){if(e.search(l2)>=0)throw Jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zu(...e.split("."))._internalPath}catch{throw Jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(F.INVALID_ARGUMENT,l+t+u)}function xE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u2 extends NE{data(){return super.data()}}function bE(t,e){return typeof e=="string"?op(t,e):e instanceof zu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class h2{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Hl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new rn(s)}convertGeoPoint(e){return new nn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);oe(Yw(r),9688,{name:e});const i=new Vo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qr extends NE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Pe("string",qr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class cl extends qr{data(e={}){return super.data(e)}}class Bi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cl(this._firestore,this._userDataWriter,r.key,r,new Ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new cl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new cl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:f2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function f2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){t=On(t,Oe);const e=On(t.firestore,ms);return Yx(np(e),t._key).then(n=>p2(e,t,n))}Bi._jsonSchemaVersion="firestore/querySnapshot/1.0",Bi._jsonSchema={type:Pe("string",Bi._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class DE extends h2{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function cD(t){t=On(t,Uu);const e=On(t.firestore,ms),n=np(e),r=new DE(e);return c2(t._query),Xx(n,t._query).then(i=>new Bi(e,r,t,i))}function hD(t,e,n,...r){t=On(t,Oe);const i=On(t.firestore,ms),s=RE(i);let o;return o=typeof(e=je(e))=="string"||e instanceof zu?a2(s,"updateDoc",t._key,e,n,r):o2(s,"updateDoc",t._key,e),ap(i,[o.toMutation(t._key,Ht.exists(!0))])}function dD(t){return ap(On(t.firestore,ms),[new jf(t._key,Ht.none())])}function fD(t,e){const n=On(t.firestore,ms),r=Zx(t),i=d2(t.converter,e);return ap(n,[s2(RE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function ap(t,e){return function(r,i){const s=new kn;return r.asyncQueue.enqueueAndForget(async()=>Fx(await Qx(r),i,s)),s.promise}(np(t),e)}function p2(t,e,n){const r=n.docs.get(e._key),i=new DE(t);return new qr(t,i,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}function pD(){return new ip("serverTimestamp")}(function(e,n=!0){(function(i){hs=i})(ui),Zr(new gr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ms(new sC(r.getProvider("auth-internal")),new lC(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zt(Xg,Jg,e),Zt(Xg,Jg,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="firebasestorage.googleapis.com",m2="storageBucket",g2=2*60*1e3,y2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends cn{constructor(e,n,r=0){super(eh(e),`Firebase Storage: ${n} (${eh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var un;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(un||(un={}));function eh(t){return"storage/"+t}function v2(){const t="An unknown error occurred, please check the error payload for server response.";return new hn(un.UNKNOWN,t)}function _2(){return new hn(un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w2(){return new hn(un.CANCELED,"User canceled the upload/download.")}function E2(t){return new hn(un.INVALID_URL,"Invalid URL '"+t+"'.")}function T2(t){return new hn(un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Gy(t){return new hn(un.INVALID_ARGUMENT,t)}function VE(){return new hn(un.APP_DELETED,"The Firebase app was deleted.")}function I2(t){return new hn(un.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw T2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},N=n===OE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",_=new RegExp(`^https?://${N}/${i}/${x}`,"i"),w=[{regex:l,indices:u,postModify:s},{regex:S,indices:R,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<w.length;P++){const O=w[P],L=O.regex.exec(e);if(L){const T=L[O.indices.bucket];let y=L[O.indices.path];y||(y=""),r=new Ut(T,y),O.postModify(r);break}}if(r==null)throw E2(e);return r}}class S2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...x){c||(c=!0,e.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,t(S,u())},x)}function m(){s&&clearTimeout(s)}function S(x,..._){if(c){m();return}if(x){m(),f.call(null,x,..._);return}if(u()||o){m(),f.call(null,x,..._);return}r<64&&(r*=2);let w;l===1?(l=2,w=0):w=(r+Math.random())*1e3,p(w)}let R=!1;function N(x){R||(R=!0,m(),!c&&(i!==null?(x||(l=2),clearTimeout(i),p(0)):x||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function k2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){return t!==void 0}function Ky(t,e,n,r){if(r<e)throw Gy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gy(`Invalid value for '${t}'. Expected ${n} or less.`)}function C2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Zl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zl||(Zl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n,r,i,s,o,l,u,c,f,p,m=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Zl.NO_ERROR,u=s.getStatus();if(!l||P2(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Zl.ABORT;r(!1,new Wa(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Wa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());R2(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=v2();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?VE():w2();o(u)}else{const u=_2();o(u)}};this.canceled_?n(!1,new Wa(!1,null,!0)):this.backoffId_=A2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&k2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function N2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function b2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function D2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function O2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function V2(t,e,n,r,i,s,o=!0,l=!1){const u=C2(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return D2(f,e),N2(f,n),b2(f,s),O2(f,r),new x2(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function M2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new eu(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return M2(this._location.path)}get storage(){return this._service}get parent(){const e=L2(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new eu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw I2(e)}}function Qy(t,e){const n=e==null?void 0:e[m2];return n==null?null:Ut.makeFromBucketSpec(n,t)}function F2(t,e,n,r={}){t.host=`${e}:${n}`;const i=li(e);i&&(Sf(`https://${t.host}/b`),Af("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Y0(s,t.app.options.projectId))}class j2{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=OE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=g2,this._maxUploadRetryTime=y2,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=Qy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=Qy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ky("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ky("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new eu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new S2(VE());{const o=V2(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Yy="@firebase/storage",Xy="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="storage";function U2(t=Cf(),e){t=je(t);const r=ku(t,LE).getImmediate({identifier:e}),i=G0("storage");return i&&z2(r,...i),r}function z2(t,e,n,r={}){F2(t,e,n,r)}function B2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new j2(n,r,i,e,ui)}function $2(){Zr(new gr(LE,B2,"PUBLIC").setMultipleInstances(!0)),Zt(Yy,Xy,""),Zt(Yy,Xy,"esm2017")}$2();function lp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ME(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H2=ME,FE=new Ko("auth","Firebase",ME());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new kf("@firebase/auth");function W2(t,...e){tu.logLevel<=te.WARN&&tu.warn(`Auth (${ui}): ${t}`,...e)}function hl(t,...e){tu.logLevel<=te.ERROR&&tu.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw up(t,...e)}function sn(t,...e){return up(t,...e)}function jE(t,e,n){const r=Object.assign(Object.assign({},H2()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return jE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function up(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FE.create(t,...e)}function G(t,e,...n){if(!t)throw up(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function Ln(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function q2(){return Jy()==="http:"||Jy()==="https:"}function Jy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q2()||Ok()||"connection"in navigator)?navigator.onLine:!0}function K2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Nk()||Vk()}get(){return G2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X2=new ta(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,r,i={}){return zE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Dk()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&li(t.emulatorConfig.host)&&(c.credentials="include"),UE.fetch()(await BE(t,t.config.apiHost,n,l),c)})}async function zE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q2),e);try{const i=new Z2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw qa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jE(t,f,c);qt(t,f)}}catch(i){if(i instanceof cn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function na(t,e,n,r,i={}){const s=await xr(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function BE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?cp(t.config,i):`${t.config.apiScheme}://${i}`;return Y2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function J2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Z2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),X2.get())})}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function Zy(t){return t!==void 0&&t.enterprise!==void 0}class eN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return J2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tN(t,e){return xr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function nu(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rN(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=hp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(th(i.auth_time)),issuedAtTime:co(th(i.iat)),expirationTime:co(th(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function th(t){return Number(t)*1e3}function hp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const i=W0(n);return i?JSON.parse(i):(hl("Failed to decode base64 JWT payload"),null)}catch(i){return hl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ev(t){const e=hp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&iN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,nu(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$E(s.providerUserInfo):[],l=aN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Id(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function oN(t){const e=je(t);await ru(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $E(t){return t.map(e=>{var{providerId:n}=e,r=lp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(t,e){const n=await zE(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await BE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&li(t.emulatorConfig.host)&&(u.credentials="include"),UE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uN(t,e){return xr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ev(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ev(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await lN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $i;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=lp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Id(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rN(this,e)}reload(){return oN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ru(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Uo(this,nN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:P,isAnonymous:O,providerData:L,stsTokenManager:T}=n;G(w&&T,e,"internal-error");const y=$i.fromJSON(this.name,T);G(typeof w=="string",e,"internal-error"),Bn(p,e.name),Bn(m,e.name),G(typeof P=="boolean",e,"internal-error"),G(typeof O=="boolean",e,"internal-error"),Bn(S,e.name),Bn(R,e.name),Bn(N,e.name),Bn(x,e.name),Bn(_,e.name),Bn(v,e.name);const I=new zt({uid:w,auth:e,email:m,emailVerified:P,displayName:p,isAnonymous:O,photoURL:R,phoneNumber:S,tenantId:N,stsTokenManager:y,createdAt:_,lastLoginAt:v});return L&&Array.isArray(L)&&(I.providerData=L.map(A=>Object.assign({},A))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ru(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$E(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $i;l.updateFromIdToken(r);const u=new zt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Id(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new Map;function Sn(t){Ln(t instanceof Function,"Expected a class definition");let e=tv.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HE.type="NONE";const nv=HE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dl(this.userKey,i.apiKey,s),this.fullPersistenceKey=dl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nu(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Sn(nv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Sn(nv);const o=dl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await nu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await zt._fromGetAccountInfoResponse(e,m,f)}else p=zt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(YE(e))return"Blackberry";if(XE(e))return"Webos";if(qE(e))return"Safari";if((e.includes("chrome/")||GE(e))&&!e.includes("edge/"))return"Chrome";if(QE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WE(t=rt()){return/firefox\//i.test(t)}function qE(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GE(t=rt()){return/crios\//i.test(t)}function KE(t=rt()){return/iemobile/i.test(t)}function QE(t=rt()){return/android/i.test(t)}function YE(t=rt()){return/blackberry/i.test(t)}function XE(t=rt()){return/webos/i.test(t)}function dp(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cN(t=rt()){var e;return dp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hN(){return Lk()&&document.documentMode===10}function JE(t=rt()){return dp(t)||QE(t)||XE(t)||YE(t)||/windows phone/i.test(t)||KE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t,e=[]){let n;switch(t){case"Browser":n=rv(rt());break;case"Worker":n=`${rv(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t,e={}){return xr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=6;class mN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new dN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nu(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ru(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(Rn(this));const n=e?je(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fN(this),n=new mN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ZE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&W2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function di(t){return je(t)}class iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hk(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yN(t){Wu=t}function eT(t){return Wu.loadJS(t)}function vN(){return Wu.recaptchaEnterpriseScript}function _N(){return Wu.gapiScript}function wN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class EN{constructor(){this.enterprise=new TN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const IN="recaptcha-enterprise",tT="NO_RECAPTCHA";class SN{constructor(e){this.type=IN,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{tN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new eN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Zy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(tT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new EN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Zy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vN();u.length!==0&&(u+=l),eT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function sv(t,e,n,r=!1,i=!1){const s=new SN(t);let o;if(i)o=tT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Sd(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e){const n=ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Jr(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function kN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RN(t,e,n){const r=di(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nT(e),{host:o,port:l}=CN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Jr(c,r.config.emulator)&&Jr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,li(o)?(Sf(`${s}//${o}${u}`),Af("Auth",!0)):PN()}function nT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CN(t){const e=nT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ov(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ov(o)}}}function ov(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function xN(t,e){return xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){return na(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function DN(t,e){return na(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends fp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,n,"signInWithPassword",NN);case"emailLink":return bN(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,r,"signUpPassword",xN);case"emailLink":return DN(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return na(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="http://localhost";class ni extends fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=lp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:ON,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LN(t){const e=$s(Hs(t)).link,n=e?$s(Hs(e)).deep_link_id:null,r=$s(Hs(t)).deep_link_id;return(r?$s(Hs(r)).link:null)||r||n||e||t}class pp{constructor(e){var n,r,i,s,o,l;const u=$s(Hs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=VN((i=u.mode)!==null&&i!==void 0?i:null);G(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=LN(e);try{return new pp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pp.parseLink(n);return G(r,"argument-error"),zo._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends rT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ra{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ra{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ra{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e){return na(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zt._fromIdTokenResponse(e,r,i),o=av(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=av(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function av(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,iu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new iu(e,n,r,i)}}function iT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?iu._fromErrorAndOperation(t,s,e,r):s})}async function FN(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e,n=!1){const{auth:r}=t;if(_t(r.app))return Promise.reject(Rn(r));const i="reauthenticate";try{const s=await Uo(t,iT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=hp(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sT(t,e,n=!1){if(_t(t.app))return Promise.reject(Rn(t));const r="signIn",i=await iT(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function UN(t,e){return sT(di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zN(t,e,n){if(_t(t.app))return Promise.reject(Rn(t));const r=di(t),o=await Sd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&oT(t),u}),l=await ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function BN(t,e,n){return _t(t.app)?Promise.reject(Rn(t)):UN(je(t),gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oT(t),r})}function $N(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function HN(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function WN(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function qN(t){return je(t).signOut()}const su="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(su,"1"),this.storage.removeItem(su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=1e3,KN=10;class lT extends aT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=JE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lT.type="LOCAL";const QN=lT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends aT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uT.type="SESSION";const cT=uT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await YN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=mp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function JN(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function ZN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tb(){return hT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="firebaseLocalStorageDb",nb=1,ou="firebaseLocalStorage",fT="fbase_key";class ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gu(t,e){return t.transaction([ou],e?"readwrite":"readonly").objectStore(ou)}function rb(){const t=indexedDB.deleteDatabase(dT);return new ia(t).toPromise()}function Ad(){const t=indexedDB.open(dT,nb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ou,{keyPath:fT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ou)?e(r):(r.close(),await rb(),e(await Ad()))})})}async function lv(t,e,n){const r=Gu(t,!0).put({[fT]:e,value:n});return new ia(r).toPromise()}async function ib(t,e){const n=Gu(t,!1).get(e),r=await new ia(n).toPromise();return r===void 0?null:r.value}function uv(t,e){const n=Gu(t,!0).delete(e);return new ia(n).toPromise()}const sb=800,ob=3;class pT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ob)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qu._getInstance(tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZN(),!this.activeServiceWorker)return;this.sender=new XN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await lv(e,su,"1"),await uv(e,su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ib(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gu(i,!1).getAll();return new ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pT.type="LOCAL";const ab=pT;new ta(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t,e){return e?Sn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp extends fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ub(t){return sT(t.auth,new gp(t),t.bypassAuthState)}function cb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),jN(n,new gp(t),t.bypassAuthState)}async function hb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),FN(n,new gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ub;case"linkViaPopup":case"linkViaRedirect":return hb;case"reauthViaPopup":case"reauthViaRedirect":return cb;default:qt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new ta(2e3,1e4);class Oi extends mT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,db.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="pendingRedirect",fl=new Map;class pb extends mT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fl.get(this.auth._key());if(!e){try{const r=await mb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fl.set(this.auth._key(),e)}return this.bypassAuthState||fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mb(t,e){const n=vb(e),r=yb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gb(t,e){fl.set(t._key(),e)}function yb(t){return Sn(t._redirectPersistence)}function vb(t){return dl(fb,t.config.apiKey,t.name)}async function _b(t,e,n=!1){if(_t(t.app))return Promise.reject(Rn(t));const r=di(t),i=lb(r,e),o=await new pb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=10*60*1e3;class Eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wb&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(e))}saveEventToCache(e){this.cachedEventUids.add(cv(e)),this.lastProcessedEventTime=Date.now()}}function cv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ab=/^https?/;async function kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ib(t);for(const n of e)try{if(Rb(n))return}catch{}qt(t,"unauthorized-domain")}function Rb(t){const e=Td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ab.test(n))return!1;if(Sb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new ta(3e4,6e4);function hv(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pb(t){return new Promise((e,n)=>{var r,i,s;function o(){hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hv(),n(sn(t,"network-request-failed"))},timeout:Cb.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const l=wN("iframefcb");return on()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},eT(`${_N()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw pl=null,e})}let pl=null;function xb(t){return pl=pl||Pb(t),pl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new ta(5e3,15e3),bb="__/auth/iframe",Db="emulator/auth/iframe",Ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lb(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cp(e,Db):`https://${t.config.authDomain}/${bb}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=Vb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function Mb(t){const e=await xb(t),n=on().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Lb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ob,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},Nb.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jb=500,Ub=600,zb="_blank",Bb="http://localhost";class dv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $b(t,e,n,r=jb,i=Ub){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Fb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(l=GE(c)?zb:n),WE(c)&&(e=e||Bb,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(cN(c)&&l!=="_self")return Hb(e||"",l),new dv(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new dv(p)}function Hb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="__/auth/handler",qb="emulator/auth/handler",Gb=encodeURIComponent("fac");async function fv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof rT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$k(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ra){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Gb}=${encodeURIComponent(u)}`:"";return`${Kb(t)}?${Qo(l).slice(1)}${c}`}function Kb({config:t}){return t.emulator?cp(t,qb):`https://${t.authDomain}/${Wb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cT,this._completeRedirectFn=_b,this._overrideRedirectResult=gb}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fv(e,n,r,Td(),i);return $b(e,o,mp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fv(e,n,r,Td(),i);return JN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mb(e),r=new Eb(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nh,{type:nh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nh];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return JE()||qE()||dp()}}const Yb=Qb;var pv="@firebase/auth",mv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zb(t){Zr(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZE(t)},c=new gN(r,i,s,u);return kN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new gr("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new Xb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(pv,mv,Jb(t)),Zt(pv,mv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=5*60,tD=Q0("authIdTokenMaxAge")||eD;let gv=null;const nD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tD)return;const i=n==null?void 0:n.token;gv!==i&&(gv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rD(t=Cf()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AN(t,{popupRedirectResolver:Yb,persistence:[ab,QN,cT]}),r=Q0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nD(s.toString());HN(n,o,()=>o(n.currentUser)),$N(n,l=>o(l))}}const i=q0("auth");return i&&RN(n,`http://${i}`),n}function iD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zb("Browser");const Qs={apiKey:"AIzaSyA4dSxybvXDCw8Q8YLZKoLkFiyLVmsPZ58",authDomain:"odev-2beaa.firebaseapp.com",projectId:"odev-2beaa",storageBucket:"odev-2beaa.appspot.com",messagingSenderId:"599307805968",appId:"1:599307805968:web:19e3e5d7ce973edd187195"},sD=!!(Qs.apiKey&&Qs.authDomain&&Qs.projectId&&Qs.appId),ss=sD?qg().length?qg()[0]:Z0(Qs):null,mD=ss?e2(ss):null,Lr=ss?rD(ss):null;ss&&U2(ss);function oD(){const[t,e]=j.useState(!1),n=L0(),r="admin@gmail.com",i="Saman122!",s=async(l,u)=>{if(Lr)try{const f=await BN(Lr,l,u);return e((f.user.email??"")===(r??"")),n("/"),!0}catch{if(l===r&&u===i)try{const p=await zN(Lr,l,u);return e((p.user.email??"")===(r??"")),n("/"),!0}catch{return!1}return!1}const c=await ck(u);return c?(localStorage.setItem("admin_token",c),e(!0),n("/"),!0):!1},o=()=>{e(!1),localStorage.removeItem("admin_token"),Lr&&qN(Lr)};return j.useEffect(()=>{if(Lr)return WN(Lr,l=>{e(!!l&&(l.email??"")===r)})},[]),E.jsxs(mA,{children:[E.jsx(Xh,{path:"/",element:E.jsx(vk,{isAdmin:t,onLogout:o})}),E.jsx(Xh,{path:"/admin",element:E.jsx(_k,{onLogin:s})})]})}rh.createRoot(document.getElementById("root")).render(E.jsx(TA,{children:E.jsx(oD,{})}));export{pe as T,fD as a,dD as b,lD as c,mD as d,Zx as e,uD as f,cD as g,sD as i,pD as s,hD as u};
