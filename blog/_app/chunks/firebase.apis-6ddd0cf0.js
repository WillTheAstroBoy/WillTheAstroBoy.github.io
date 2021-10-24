var Fl=Object.defineProperty,Vl=Object.defineProperties;var $l=Object.getOwnPropertyDescriptors;var vo=Object.getOwnPropertySymbols;var Bl=Object.prototype.hasOwnProperty,jl=Object.prototype.propertyIsEnumerable;var wo=(t,e,n)=>e in t?Fl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Pn=(t,e)=>{for(var n in e||(e={}))Bl.call(e,n)&&wo(t,n,e[n]);if(vo)for(var n of vo(e))jl.call(e,n)&&wo(t,n,e[n]);return t},rs=(t,e)=>Vl(t,$l(e));import{userStore as ss}from"./user_store-fbe9c342.js";import"./vendor-271a6b41.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function is(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ql(t,e,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(l){try{u(r.next(l))}catch(h){o(h)}}function c(l){try{u(r.throw(l))}catch(h){o(h)}}function u(l){l.done?i(l.value):s(l.value).then(a,c)}u((r=r.apply(t,e||[])).next())})}function Hl(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(l){return c([u,l])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,s&&(i=u[0]&2?s.return:u[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,u[1])).done)return i;switch(s=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,s=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(l){u=[6,l],s=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function os(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ln(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=r.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return i}function _o(t,e,n){if(n||arguments.length===2)for(var r=0,s=e.length,i;r<s;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}/**
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
 */const zl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wl=function(t){try{return Kl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function j(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function Io(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function To(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yl(){return j().indexOf("Electron/")>=0}function So(){const t=j();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jl(){return j().indexOf("MSAppHost/")>=0}/**
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
 */const Ql="FirebaseError";class qe extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Ql,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ut.prototype.create)}}class Ut{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qe(s,a,r)}}function Zl(t,e){return t.replace(eh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eh=/\{\$([^}]+)}/g;function th(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(bo(i)&&bo(o)){if(!Mn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bo(t){return t!==null&&typeof t=="object"}/**
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
 */function xt(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ft(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nh(t,e){const n=new rh(t,e);return n.subscribe.bind(n)}class rh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=as),s.error===void 0&&(s.error=as),s.complete===void 0&&(s.complete=as);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function as(){}/**
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
 */function B(t){return t&&t._delegate?t._delegate:t}var He=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var ze="[DEFAULT]";/**
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
 */var ih=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new Xl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(i){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(ah(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch(h){}try{for(var s=os(this.instancesDeferred.entries()),i=s.next();!i.done;i=s.next()){var o=Ln(i.value,2),a=o[0],c=o[1],u=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:u});c.resolve(l)}catch(h){}}}catch(h){n={error:h}}finally{try{i&&!i.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=ze),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return ql(this,void 0,void 0,function(){var e;return Hl(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(_o(_o([],Ln(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Ln(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=ze),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=ze),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var s=e.options,i=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=os(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Ln(u.value,2),h=l[0],d=l[1],p=this.normalizeInstanceIdentifier(h);o===p&&d.resolve(a)}}catch(g){n={error:g}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);var o=this.instances.get(s);return o&&e(o,s),function(){i.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,s,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=os(i),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(u){}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,s=r===void 0?{}:r,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:oh(n),options:s}),this.instances.set(n,i),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=ze),this.component?this.component.multipleInstances?e:ze:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function oh(t){return t===ze?void 0:t}function ah(t){return t.instantiationMode==="EAGER"}/**
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
 */var ch=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new ih(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const uh={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},lh=k.INFO,hh={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},dh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cs{constructor(e){this.name=e,this._logLevel=lh,this._logHandler=dh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}/**
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
 */class fh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ph(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ph(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ao="@firebase/app",gh="0.7.3";/**
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
 */const us=new cs("@firebase/app"),mh="@firebase/app-compat",yh="@firebase/analytics-compat",vh="@firebase/analytics",wh="@firebase/app-check-compat",_h="@firebase/app-check",Eh="@firebase/auth",Ih="@firebase/auth-compat",Th="@firebase/database",Sh="@firebase/database-compat",bh="@firebase/functions",Ah="@firebase/functions-compat",kh="@firebase/installations",Rh="@firebase/installations-compat",Ch="@firebase/messaging",Nh="@firebase/messaging-compat",Dh="@firebase/performance",Oh="@firebase/performance-compat",Ph="@firebase/remote-config",Lh="@firebase/remote-config-compat",Mh="@firebase/storage",Uh="@firebase/storage-compat",xh="@firebase/firestore",Fh="@firebase/firestore-compat",Vh="firebase",$h="9.1.2";/**
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
 */const ko="[DEFAULT]",Bh={[Ao]:"fire-core",[mh]:"fire-core-compat",[vh]:"fire-analytics",[yh]:"fire-analytics-compat",[_h]:"fire-app-check",[wh]:"fire-app-check-compat",[Eh]:"fire-auth",[Ih]:"fire-auth-compat",[Th]:"fire-rtdb",[Sh]:"fire-rtdb-compat",[bh]:"fire-fn",[Ah]:"fire-fn-compat",[kh]:"fire-iid",[Rh]:"fire-iid-compat",[Ch]:"fire-fcm",[Nh]:"fire-fcm-compat",[Dh]:"fire-perf",[Oh]:"fire-perf-compat",[Ph]:"fire-rc",[Lh]:"fire-rc-compat",[Mh]:"fire-gcs",[Uh]:"fire-gcs-compat",[xh]:"fire-fst",[Fh]:"fire-fst-compat","fire-js":"fire-js",[Vh]:"fire-js-all"};/**
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
 */const Un=new Map,ls=new Map;function jh(t,e){try{t.container.addComponent(e)}catch(n){us.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ls.has(e))return us.debug(`There were multiple attempts to register component ${e}.`),!1;ls.set(e,t);for(const n of Un.values())jh(n,t);return!0}function xn(t,e){return t.container.getProvider(e)}/**
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
 */const qh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Fn=new Ut("app","Firebase",qh);/**
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
 */class Hh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const ht=$h;function zh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ko,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Fn.create("bad-app-name",{appName:String(r)});const s=Un.get(r);if(s){if(Mn(t,s.options)&&Mn(n,s.config))return s;throw Fn.create("duplicate-app",{appName:r})}const i=new ch(r);for(const a of ls.values())i.addComponent(a);const o=new Hh(t,n,i);return Un.set(r,o),o}function hs(t=ko){const e=Un.get(t);if(!e)throw Fn.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let s=(r=Bh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),us.warn(a.join(" "));return}lt(new He(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function Gh(t){lt(new He("platform-logger",e=>new fh(e),"PRIVATE")),$t(Ao,gh,t),$t("fire-js","")}Gh();function Ro(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kh=Ro,Co=new Ut("auth","Firebase",Ro());/**
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
 */const No=new cs("@firebase/auth");function Vn(t,...e){No.logLevel<=k.ERROR&&No.error(`Auth (${ht}): ${t}`,...e)}/**
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
 */function pe(t,...e){throw ds(t,...e)}function me(t,...e){return ds(t,...e)}function Wh(t,e,n){const r=Object.assign(Object.assign({},Kh()),{[e]:n});return new Ut("auth","Firebase",r).create(e,{appName:t.name})}function ds(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Co.create(t,...e)}function _(t,e,...n){if(!t)throw ds(e,...n)}function Ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vn(e),new Error(e)}function Ie(t,e){t||Ee(e)}/**
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
 */const Do=new Map;function Te(t){Ie(t instanceof Function,"Expected a class definition");let e=Do.get(t);return e?(Ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Do.set(t,e),e)}/**
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
 */function Xh(t,e){const n=xn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mn(i,e!=null?e:{}))return s;pe(s,"already-initialized")}return n.initialize({options:e})}function Yh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Te);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jh(){return Oo()==="http:"||Oo()==="https:"}function Oo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qh(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jh()||Io()||"connection"in navigator)?navigator.onLine:!0}function Zh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ie(n>e,"Short delay should be less than long delay!"),this.isMobile=Eo()||To()}get(){return Qh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ps(t,e){Ie(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ed={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const td=new Bt(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jt(t,e,n,r,s={}){return Po(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xt(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(gs.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),gs.fetch()(Lo(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Po(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ed),e);try{const s=new nd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ms(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ms(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wh(t,l,u);pe(t,l)}}catch(s){if(s instanceof qe)throw s;pe(t,"network-request-failed")}}async function Bn(t,e,n,r,s={}){const i=await jt(t,e,n,r,s);return"mfaPendingCredential"in i&&pe(t,"multi-factor-auth-required",{serverResponse:i}),i}function Lo(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ps(t.config,s):`${t.config.apiScheme}://${s}`}class nd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"timeout")),td.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ms(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=me(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function rd(t,e){return jt(t,"POST","/v1/accounts:delete",e)}async function sd(t,e){return jt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qt(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function id(t,e=!1){const n=B(t),r=await n.getIdToken(e),s=vs(r);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qt(ys(s.auth_time)),issuedAtTime:qt(ys(s.iat)),expirationTime:qt(ys(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ys(t){return Number(t)*1e3}function vs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wl(n);return s?JSON.parse(s):(Vn("Failed to decode base64 JWT payload"),null)}catch(s){return Vn("Caught error parsing JWT payload as JSON",s),null}}function od(t){const e=vs(t);return _(e,"internal-error"),_(typeof e.exp!="undefined","internal-error"),_(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ht(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qe&&ad(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ad({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qt(this.lastLoginAt),this.creationTime=qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ht(t,sd(n,{idToken:r}));_(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?hd(i.providerUserInfo):[],a=ld(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mo(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function ud(t){const e=B(t);await jn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ld(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hd(t){return t.map(e=>{var{providerId:n}=e,r=is(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dd(t,e){const n=await Po(t,{},()=>{const r=xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lo(t,s,"/v1/token",`key=${i}`);return gs.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken!="undefined","internal-error"),_(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zt;return r&&(_(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zt,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
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
 */function Ce(t,e){_(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ge{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=is(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new cd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Mo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ht(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return id(this,e)}reload(){return ud(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ht(this,rd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,ie=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:z,emailVerified:U,isAnonymous:_e,providerData:ge,stsTokenManager:On}=n;_(z&&On,e,"internal-error");const Mt=zt.fromJSON(this.name,On);_(typeof z=="string",e,"internal-error"),Ce(h,e.name),Ce(d,e.name),_(typeof U=="boolean",e,"internal-error"),_(typeof _e=="boolean",e,"internal-error"),Ce(p,e.name),Ce(g,e.name),Ce(b,e.name),Ce(C,e.name),Ce(L,e.name),Ce(ie,e.name);const ns=new Ge({uid:z,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:_e,photoURL:g,phoneNumber:p,tenantId:b,stsTokenManager:Mt,createdAt:L,lastLoginAt:ie});return ge&&Array.isArray(ge)&&(ns.providerData=ge.map(xl=>Object.assign({},xl))),C&&(ns._redirectEventId=C),ns}static async _fromIdTokenResponse(e,n,r=!1){const s=new zt;s.updateFromServerResponse(n);const i=new Ge({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jn(i),i}}/**
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
 */class Uo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Uo.type="NONE";const xo=Uo;/**
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
 */function qn(t,e,n){return`firebase:${t}:${e}:${n}`}class dt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=qn(this.userKey,s.apiKey,i),this.fullPersistenceKey=qn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dt(Te(xo),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Te(xo);const o=qn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ge._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch(l){}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new dt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch(l){}})),new dt(i,e,r))}}/**
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
 */function Fo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qo(e))return"Blackberry";if(Ho(e))return"Webos";if(ws(e))return"Safari";if((e.includes("chrome/")||$o(e))&&!e.includes("edge/"))return"Chrome";if(jo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vo(t=j()){return/firefox\//i.test(t)}function ws(t=j()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $o(t=j()){return/crios\//i.test(t)}function Bo(t=j()){return/iemobile/i.test(t)}function jo(t=j()){return/android/i.test(t)}function qo(t=j()){return/blackberry/i.test(t)}function Ho(t=j()){return/webos/i.test(t)}function Hn(t=j()){return/iphone|ipad|ipod/i.test(t)}function fd(t=j()){var e;return Hn(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function pd(){return So()&&document.documentMode===10}function zo(t=j()){return Hn(t)||jo(t)||Ho(t)||qo(t)||/windows phone/i.test(t)||Bo(t)}function gd(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function Go(t,e=[]){let n;switch(t){case"Browser":n=Fo(j());break;case"Worker":n=`${Fo(j())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ht}/${r}`}/**
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
 */class md{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ko(this),this.idTokenSubscription=new Ko(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Co,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Te(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await dt.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jn(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ut("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Te(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Go(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function _s(t){return B(t)}class Ko{constructor(e){this.auth=e,this.observer=null,this.addObserver=nh(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Es{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ee("not implemented")}_getIdTokenResponse(e){return Ee("not implemented")}_linkToIdToken(e,n){return Ee("not implemented")}_getReauthenticationResolver(e){return Ee("not implemented")}}async function yd(t,e){return jt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vd(t,e){return Bn(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
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
 */async function wd(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function _d(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
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
 */class Gt extends Es{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gt(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gt(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wd(e,{email:this._email,oobCode:this._password});default:pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yd(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _d(e,{idToken:n,email:this._email,oobCode:this._password});default:pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ft(t,e){return Bn(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
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
 */const Ed="http://localhost";class Ke extends Es{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=is(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ke(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ft(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ft(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ft(e,n)}buildRequest(){const e={requestUri:Ed,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xt(n)}return e}}/**
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
 */function Id(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Td(t){const e=Ft(Vt(t)).link,n=e?Ft(Vt(e)).deep_link_id:null,r=Ft(Vt(t)).deep_link_id;return(r?Ft(Vt(r)).link:null)||r||n||e||t}class Is{constructor(e){var n,r,s,i,o,a;const c=Ft(Vt(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Id((s=c.mode)!==null&&s!==void 0?s:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Td(e);try{return new Is(n)}catch(r){return null}}}/**
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
 */class pt{constructor(){this.providerId=pt.PROVIDER_ID}static credential(e,n){return Gt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Is.parseLink(n);return _(r,"argument-error"),Gt._fromEmailAndCode(e,r.code,r.tenantId)}}pt.PROVIDER_ID="password";pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kt extends Wo{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ne extends Kt{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch(n){return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
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
 */class De extends Kt{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return De.credential(n,r)}catch(s){return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
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
 */class Oe extends Kt{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch(n){return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
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
 */class Pe extends Kt{constructor(){super("twitter.com")}static credential(e,n){return Ke._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pe.credential(n,r)}catch(s){return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
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
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ge._fromIdTokenResponse(e,r,s),o=Xo(r);return new gt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xo(r);return new gt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zn extends qe{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,this.name="FirebaseError",Object.setPrototypeOf(this,zn.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(i=e.tenantId)!==null&&i!==void 0?i:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,s){return new zn(e,n,r,s)}}function Yo(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zn._fromErrorAndOperation(t,i,e,r):i})}async function Sd(t,e,n=!1){const r=await Ht(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gt._forOperation(t,"link",r)}/**
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
 */async function bd(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ht(t,Yo(r,s,e,t),n);_(i.idToken,r,"internal-error");const o=vs(i.idToken);_(o,r,"internal-error");const{sub:a}=o;return _(t.uid===a,r,"user-mismatch"),gt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pe(r,"user-mismatch"),i}}/**
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
 */async function Jo(t,e,n=!1){const r="signIn",s=await Yo(t,r,e),i=await gt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ad(t,e){return Jo(_s(t),e)}function kd(t,e,n){return Ad(B(t),pt.credential(e,n))}function Rd(t,e,n,r){return B(t).onAuthStateChanged(e,n,r)}function Cd(t){return B(t).signOut()}const Gn="__sak";/**
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
 */class Qo{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gn,"1"),this.storage.removeItem(Gn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function Nd(){const t=j();return ws(t)||Hn(t)}const Dd=1e3,Od=10;class Zo extends Qo{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nd()&&gd(),this.fallbackToPolling=zo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Od):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zo.type="LOCAL";const Pd=Zo;/**
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
 */class ea extends Qo{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ea.type="SESSION";const ta=ea;/**
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
 */function Ld(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Kn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Ld(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kn.receivers=[];/**
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
 */function Ts(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Md{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ts("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ye(){return window}function Ud(t){ye().location.href=t}/**
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
 */function na(){return typeof ye().WorkerGlobalScope!="undefined"&&typeof ye().importScripts=="function"}async function xd(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function Fd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vd(){return na()?self:null}/**
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
 */const ra="firebaseLocalStorageDb",$d=1,Wn="firebaseLocalStorage",sa="fbase_key";class Wt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xn(t,e){return t.transaction([Wn],e?"readwrite":"readonly").objectStore(Wn)}function Bd(){const t=indexedDB.deleteDatabase(ra);return new Wt(t).toPromise()}function Ss(){const t=indexedDB.open(ra,$d);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wn,{keyPath:sa})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wn)?e(r):(r.close(),await Bd(),e(await Ss()))})})}async function ia(t,e,n){const r=Xn(t,!0).put({[sa]:e,value:n});return new Wt(r).toPromise()}async function jd(t,e){const n=Xn(t,!1).get(e),r=await new Wt(n).toPromise();return r===void 0?null:r.value}function oa(t,e){const n=Xn(t,!0).delete(e);return new Wt(n).toPromise()}const qd=800,Hd=3;class aa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ss(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hd)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kn._getInstance(Vd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xd(),!this.activeServiceWorker)return;this.sender=new Md(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ss();return await ia(e,Gn,"1"),await oa(e,Gn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ia(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xn(s,!1).getAll();return new Wt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aa.type="LOCAL";const zd=aa;/**
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
 */function Gd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kd(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=me("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Gd().appendChild(r)})}function Wd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Bt(3e4,6e4);/**
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
 */function Xd(t,e){return e?Te(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bs extends Es{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ft(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yd(t){return Jo(t.auth,new bs(t),t.bypassAuthState)}function Jd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),bd(n,new bs(t),t.bypassAuthState)}async function Qd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Sd(n,new bs(t),t.bypassAuthState)}/**
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
 */class ca{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yd;case"linkViaPopup":case"linkViaRedirect":return Qd;case"reauthViaPopup":case"reauthViaRedirect":return Jd;default:pe(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zd=new Bt(2e3,1e4);class mt extends ca{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,mt.currentPopupAction&&mt.currentPopupAction.cancel(),mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=Ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zd.get())};e()}}mt.currentPopupAction=null;/**
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
 */const ef="pendingRedirect",ua=new Map;class tf extends ca{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const r=await nf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nf(t,e){const n=rf(e),r=await la(t)._get(n)==="true";return await la(t)._remove(n),r}function la(t){return Te(t._redirectPersistence)}function rf(t){return qn(ef,t.config.apiKey,t.name)}async function sf(t,e,n=!1){const r=_s(t),s=Xd(r,e),o=await new tf(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const of=10*60*1e3;class af{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!da(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(me(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=of&&this.cachedEventUids.clear(),this.cachedEventUids.has(ha(e))}saveEventToCache(e){this.cachedEventUids.add(ha(e)),this.lastProcessedEventTime=Date.now()}}function ha(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function da({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return da(t);default:return!1}}/**
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
 */async function uf(t,e={}){return jt(t,"GET","/v1/projects",e)}/**
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
 */const lf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hf=/^https?/;async function df(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uf(t);for(const n of e)try{if(ff(n))return}catch(r){}pe(t,"unauthorized-domain")}function ff(t){const e=fs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hf.test(n))return!1;if(lf.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pf=new Bt(3e4,6e4);function fa(){const t=ye().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gf(t){return new Promise((e,n)=>{var r,s,i;function o(){fa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fa(),n(me(t,"network-request-failed"))},timeout:pf.get()})}if((s=(r=ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=ye().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Wd("iframefcb");return ye()[a]=()=>{gapi.load?o():n(me(t,"network-request-failed"))},Kd(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Yn=null,e})}let Yn=null;function mf(t){return Yn=Yn||gf(t),Yn}/**
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
 */const yf=new Bt(5e3,15e3),vf="__/auth/iframe",wf="emulator/auth/iframe",_f={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Ef=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function If(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ps(e,wf):`https://${t.config.authDomain}/${vf}`,r={apiKey:e.apiKey,appName:t.name,v:ht},s=Ef.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xt(r).slice(1)}`}async function Tf(t){const e=await mf(t),n=ye().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:If(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_f,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ye().setTimeout(()=>{i(o)},yf.get());function c(){ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Sf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bf=500,Af=600,kf="_blank",Rf="http://localhost";class pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Cf(t,e,n,r=bf,s=Af){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sf),{width:r.toString(),height:s.toString(),top:i,left:o}),u=j().toLowerCase();n&&(a=$o(u)?kf:n),Vo(u)&&(e=e||Rf,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(fd(u)&&a!=="_self")return Nf(e||"",a),new pa(null);const h=window.open(e||"",a,l);_(h,t,"popup-blocked");try{h.focus()}catch(d){}return new pa(h)}function Nf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Df="__/auth/handler",Of="emulator/auth/handler";function ga(t,e,n,r,s,i){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ht,eventId:s};if(e instanceof Wo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",th(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Kt){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Pf(t)}?${xt(a).slice(1)}`}function Pf({config:t}){return t.emulator?ps(t,Of):`https://${t.authDomain}/${Df}`}/**
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
 */const As="webStorageSupport";class Lf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ta,this._completeRedirectFn=sf}async _openPopup(e,n,r,s){var i;Ie((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ga(e,n,r,fs(),s);return Cf(e,o,Ts())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Ud(ga(e,n,r,fs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ie(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Tf(e),r=new af(e);return n.register("authEvent",s=>(_(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(As,{type:As},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[As];o!==void 0&&n(!!o),pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=df(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zo()||ws()||Hn()}}const Mf=Lf;var Uf="@firebase/auth",xf="0.18.2";/**
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
 */class Ff{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $f(t){lt(new He("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{_(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),_(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Go(t)},c=new md(o,a);return Yh(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lt(new He("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(r=>new Ff(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(Uf,xf,Vf(t))}/**
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
 */function Bf(t=hs()){const e=xn(t,"auth");return e.isInitialized()?e.getImmediate():Xh(t,{popupRedirectResolver:Mf,persistence:[zd,Pd,ta]})}$f("Browser");var jf={apiKey:"AIzaSyBnhgdczxRfn9aCH0NJz0tzI1aOnR_E-Dw",authDomain:"my-blog-a3adb.firebaseapp.com",projectId:"my-blog-a3adb",storageBucket:"my-blog-a3adb.appspot.com",messagingSenderId:"537552324296",appId:"1:537552324296:web:88caa00997d01d1e8d07fd",measurementId:"G-HGF1L6M6GC"};/**
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
 */var We;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(We||(We={}));/**
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
 */const ma="firebasestorage.googleapis.com",ya="storageBucket",qf=2*60*1e3,Hf=10*60*1e3;class x extends qe{constructor(e,n){super(ks(e),`Firebase Storage: ${n} (${ks(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,x.prototype)}_codeEquals(e){return ks(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ks(t){return"storage/"+t}function Rs(){const t="An unknown error occurred, please check the error payload for server response.";return new x("unknown",t)}function zf(t){return new x("object-not-found","Object '"+t+"' does not exist.")}function Gf(t){return new x("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kf(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new x("unauthenticated",t)}function Wf(){return new x("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Xf(t){return new x("unauthorized","User does not have permission to access '"+t+"'.")}function Yf(){return new x("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Jf(){return new x("canceled","User canceled the upload/download.")}function Qf(t){return new x("invalid-url","Invalid URL '"+t+"'.")}function Zf(t){return new x("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function ep(){return new x("no-default-bucket","No default bucket found. Did you set the '"+ya+"' property when initializing the app?")}function tp(){return new x("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function np(){return new x("no-download-url","The given file does not have any download URLs.")}function Cs(t){return new x("invalid-argument",t)}function va(){return new x("app-deleted","The Firebase app was deleted.")}function rp(t){return new x("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xt(t,e){return new x("invalid-format","String does not match format '"+t+"': "+e)}function Jn(t){throw new x("internal-error","Internal error: "+t)}/**
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
 */class sp{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=We.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=We.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=We.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Jn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jn("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw Jn("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function ip(){return new sp}/**
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
 */class op{createConnection(){return ip()}}/**
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
 */class le{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=le.makeFromUrl(e,n)}catch(s){return new le(e,"")}if(r.path==="")return r;throw Zf(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},b=n===ma?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",L=new RegExp(`^https?://${b}/${s}/${C}`,"i"),z=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<z.length;U++){const _e=z[U],ge=_e.regex.exec(e);if(ge){const On=ge[_e.indices.bucket];let Mt=ge[_e.indices.path];Mt||(Mt=""),r=new le(On,Mt),_e.postModify(r);break}}if(r==null)throw Qf(e);return r}}class ap{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function cp(t,e,n){let r=1,s=null,i=!1,o=0;function a(){return o===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function l(g){s=setTimeout(()=>{s=null,t(h,a())},g)}function h(g,...b){if(c)return;if(g){u.call(null,g,...b);return}if(a()||i){u.call(null,g,...b);return}r<64&&(r*=2);let L;o===1?(o=2,L=0):L=(r+Math.random())*1e3,l(L)}let d=!1;function p(g){d||(d=!0,!c&&(s!==null?(g||(o=2),clearTimeout(s),l(0)):g||(o=1)))}return l(0),setTimeout(()=>{i=!0,p(!0)},n),p}function up(t){t(!1)}/**
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
 */function lp(t){return t!==void 0}function hp(t){return typeof t=="object"&&!Array.isArray(t)}function Ns(t){return typeof t=="string"||t instanceof String}function wa(t){return Ds()&&t instanceof Blob}function Ds(){return typeof Blob!="undefined"}function _a(t,e,n,r){if(r<e)throw Cs(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cs(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Os(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ea(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */class dp{constructor(e,n,r,s,i,o,a,c,u,l,h){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=c,this.progressCallback_=l,this.timeout_=u,this.pool_=h,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=this;function n(s,i){if(i){s(!1,new Qn(!1,null,!0));return}const o=e.pool_.createConnection();e.pendingConnection_=o;function a(c){const u=c.loaded,l=c.lengthComputable?c.total:-1;e.progressCallback_!==null&&e.progressCallback_(u,l)}e.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{e.progressCallback_!==null&&o.removeUploadProgressListener(a),e.pendingConnection_=null;const c=o.getErrorCode()===We.NO_ERROR,u=o.getStatus();if(!c||e.isRetryStatusCode_(u)){const h=o.getErrorCode()===We.ABORT;s(!1,new Qn(!1,null,h));return}const l=e.successCodes_.indexOf(u)!==-1;s(!0,new Qn(l,o))})}function r(s,i){const o=e.resolve_,a=e.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=e.callback_(c,c.getResponseText());lp(u)?o(u):o()}catch(u){a(u)}else if(c!==null){const u=Rs();u.serverResponse=c.getResponseText(),e.errorCallback_?a(e.errorCallback_(c,u)):a(u)}else if(i.canceled){const u=e.appDelete_?va():Jf();a(u)}else{const u=Yf();a(u)}}this.canceled_?r(!1,new Qn(!1,null,!0)):this.backoffId_=cp(n,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&up(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class Qn{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fp(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pp(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function gp(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mp(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function yp(t,e,n,r,s,i){const o=Ea(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return gp(c,e),fp(c,n),pp(c,i),mp(c,r),new dp(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
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
 */function vp(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function wp(...t){const e=vp();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ds())return new Blob(t);throw new x("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function _p(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Ep(t){return atob(t)}/**
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
 */const ve={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ps{constructor(e,n){this.data=e,this.contentType=n||null}}function Ip(t,e){switch(t){case ve.RAW:return new Ps(Ia(e));case ve.BASE64:case ve.BASE64URL:return new Ps(Ta(t,e));case ve.DATA_URL:return new Ps(Sp(e),bp(e))}throw Rs()}function Ia(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Tp(t){let e;try{e=decodeURIComponent(t)}catch(n){throw Xt(ve.DATA_URL,"Malformed data URL.")}return Ia(e)}function Ta(t,e){switch(t){case ve.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xt(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ve.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xt(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ep(e)}catch(s){throw Xt(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Sa{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xt(ve.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Ap(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function Sp(t){const e=new Sa(t);return e.base64?Ta(ve.BASE64,e.rest):Tp(e.rest)}function bp(t){return new Sa(t).contentType}function Ap(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Le{constructor(e,n){let r=0,s="";wa(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(wa(this.data_)){const r=this.data_,s=_p(r,e,n);return s===null?null:new Le(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Le(r,!0)}}static getBlob(...e){if(Ds()){const n=e.map(r=>r instanceof Le?r.data_:r);return new Le(wp.apply(null,n))}else{const n=e.map(o=>Ns(o)?Ip(ve.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Le(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ba(t){let e;try{e=JSON.parse(t)}catch(n){return null}return hp(e)?e:null}/**
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
 */function kp(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Rp(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Aa(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Cp(t,e){return e}class te{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Cp}}let Zn=null;function Np(t){return!Ns(t)||t.length<2?t:Aa(t)}function ka(){if(Zn)return Zn;const t=[];t.push(new te("bucket")),t.push(new te("generation")),t.push(new te("metageneration")),t.push(new te("name","fullPath",!0));function e(i,o){return Np(o)}const n=new te("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new te("size");return s.xform=r,t.push(s),t.push(new te("timeCreated")),t.push(new te("updated")),t.push(new te("md5Hash",null,!0)),t.push(new te("cacheControl",null,!0)),t.push(new te("contentDisposition",null,!0)),t.push(new te("contentEncoding",null,!0)),t.push(new te("contentLanguage",null,!0)),t.push(new te("contentType",null,!0)),t.push(new te("metadata","customMetadata",!0)),Zn=t,Zn}function Dp(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new le(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Op(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return Dp(r,t),r}function Ra(t,e,n){const r=ba(e);return r===null?null:Op(t,r,n)}function Pp(t,e,n,r){const s=ba(e);if(s===null||!Ns(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=Os(d,n,r),g=Ea({alt:"media",token:u});return p+g})[0]}function Lp(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ca{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Na(t){if(!t)throw Rs()}function Mp(t,e){function n(r,s){const i=Ra(t,s,e);return Na(i!==null),i}return n}function Up(t,e){function n(r,s){const i=Ra(t,s,e);return Na(i!==null),Pp(i,s,t.host,t._protocol)}return n}function Da(t){function e(n,r){let s;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?s=Wf():s=Kf():n.getStatus()===402?s=Gf(t.bucket):n.getStatus()===403?s=Xf(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function xp(t){const e=Da(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zf(t.path)),i.serverResponse=s.serverResponse,i}return n}function Fp(t,e,n){const r=e.fullServerUrl(),s=Os(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ca(s,i,Up(t,n),o);return a.errorHandler=xp(e),a}function Vp(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $p(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Vp(null,e)),r}function Bp(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let z="";for(let U=0;U<2;U++)z=z+Math.random().toString().slice(2);return z}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=$p(e,r,s),l=Lp(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Le.getBlob(h,r,d);if(p===null)throw tp();const g={name:u.fullPath},b=Os(i,t.host,t._protocol),C="POST",L=t.maxUploadRetryTime,ie=new Ca(b,C,Mp(t,n),L);return ie.urlParams=g,ie.headers=o,ie.body=p.uploadData(),ie.errorHandler=Da(e),ie}/**
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
 */class Xe{constructor(e,n){this._service=e,n instanceof le?this._location=n:this._location=le.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xe(e,n)}get root(){const e=new le(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Aa(this._location.path)}get storage(){return this._service}get parent(){const e=kp(this._location.path);if(e===null)return null;const n=new le(this._location.bucket,e);return new Xe(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rp(e)}}function jp(t,e,n){t._throwIfRoot("uploadBytes");const r=Bp(t.storage,t._location,ka(),new Le(e,!0),n);return t.storage.makeRequestWithTokens(r).then(s=>s.getPromise()).then(s=>({metadata:s,ref:t}))}async function qp(t){t._throwIfRoot("getDownloadURL");const e=Fp(t.storage,t._location,ka());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw np();return n})}function Hp(t,e){const n=Rp(t._location.path,e),r=new le(t._location.bucket,n);return new Xe(t.storage,r)}/**
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
 */function zp(t){return/^[A-Za-z]+:\/\//.test(t)}function Gp(t,e){return new Xe(t,e)}function Oa(t,e){if(t instanceof Ls){const n=t;if(n._bucket==null)throw ep();const r=new Xe(n,n._bucket);return e!=null?Oa(r,e):r}else return e!==void 0?Hp(t,e):t}function Kp(t,e){if(e&&zp(e)){if(t instanceof Ls)return Gp(t,e);throw Cs("To use ref(service, url), the first argument must be a Storage instance.")}else return Oa(t,e)}function Pa(t,e){const n=e==null?void 0:e[ya];return n==null?null:le.makeFromBucketSpec(n,t)}class Ls{constructor(e,n,r,s,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._pool=s,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=ma,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qf,this._maxUploadRetryTime=Hf,this._requests=new Set,i!=null?this._bucket=le.makeFromBucketSpec(i,this._host):this._bucket=Pa(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=le.makeFromBucketSpec(this._url,e):this._bucket=Pa(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_a("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_a("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xe(this,e)}_makeRequest(e,n,r){if(this._deleted)return new ap(va());{const s=yp(e,this._appId,n,r,this._pool,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r)}}const Wp="@firebase/storage",Xp="0.8.3";/**
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
 */const La="storage";/**
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
 */function Yp(t,e,n){return t=B(t),jp(t,e,n)}function Jp(t){return t=B(t),qp(t)}function er(t,e){return t=B(t),Kp(t,e)}function Qp(t=hs(),e){return t=B(t),xn(t,La).getImmediate({identifier:e})}function Zp(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ls(n,r,s,new op,e,ht)}function eg(){lt(new He(La,Zp,"PUBLIC").setMultipleInstances(!0)),$t(Wp,Xp)}eg();var tg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,Ms=Ms||{},E=tg||self;function tr(){}function Us(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ng(t){return Object.prototype.hasOwnProperty.call(t,xs)&&t[xs]||(t[xs]=++rg)}var xs="closure_uid_"+(1e9*Math.random()>>>0),rg=0;function sg(t,e,n){return t.call.apply(t.bind,arguments)}function ig(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function G(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=sg:G=ig,G.apply(null,arguments)}function nr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function K(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Me(){this.s=this.s,this.o=this.o}var og=0,ag={};Me.prototype.s=!1;Me.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),og!=0)){var t=ng(this);delete ag[t]}};Me.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ma=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ua=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function cg(t){e:{var e=Zg;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function xa(t){return Array.prototype.concat.apply([],arguments)}function Fs(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rr(t){return/^[\s\xa0]*$/.test(t)}var Fa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ne(t,e){return t.indexOf(e)!=-1}function Vs(t,e){return t<e?-1:t>e?1:0}var re;e:{var Va=E.navigator;if(Va){var $a=Va.userAgent;if($a){re=$a;break e}}re=""}function $s(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ba(t){const e={};for(const n in t)e[n]=t[n];return e}var ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qa(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ja.length;i++)n=ja[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bs(t){return Bs[" "](t),t}Bs[" "]=tr;function ug(t){var e=dg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lg=ne(re,"Opera"),yt=ne(re,"Trident")||ne(re,"MSIE"),Ha=ne(re,"Edge"),js=Ha||yt,za=ne(re,"Gecko")&&!(ne(re.toLowerCase(),"webkit")&&!ne(re,"Edge"))&&!(ne(re,"Trident")||ne(re,"MSIE"))&&!ne(re,"Edge"),hg=ne(re.toLowerCase(),"webkit")&&!ne(re,"Edge");function Ga(){var t=E.document;return t?t.documentMode:void 0}var sr;e:{var qs="",Hs=function(){var t=re;if(za)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ha)return/Edge\/([\d\.]+)/.exec(t);if(yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hg)return/WebKit\/(\S+)/.exec(t);if(lg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hs&&(qs=Hs?Hs[1]:""),yt){var zs=Ga();if(zs!=null&&zs>parseFloat(qs)){sr=String(zs);break e}}sr=qs}var dg={};function fg(){return ug(function(){let t=0;const e=Fa(String(sr)).split("."),n=Fa("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Vs(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Vs(s[2].length==0,i[2].length==0)||Vs(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Gs;if(E.document&&yt){var Ka=Ga();Gs=Ka||parseInt(sr,10)||void 0}else Gs=void 0;var pg=Gs,gg=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",tr,e),E.removeEventListener("test",tr,e)}catch(n){}return t}();function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};function Jt(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(za){e:{try{Bs(e.nodeName);var s=!0;break e}catch(i){}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jt.Z.h.call(this)}}K(Jt,J);var mg={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),yg=0;function vg(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++yg,this.ca=this.fa=!1}function ir(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function or(t){this.src=t,this.g={},this.h=0}or.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ws(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new vg(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Ks(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ma(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ir(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ws(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Xs="closure_lm_"+(1e6*Math.random()|0),Ys={};function Wa(t,e,n,r,s){if(r&&r.once)return Ya(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wa(t,e[i],n,r,s);return null}return n=ei(n),t&&t[Qt]?t.N(e,n,Yt(r)?!!r.capture:!!r,s):Xa(t,e,n,!1,r,s)}function Xa(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Yt(s)?!!s.capture:!!s,a=Qs(t);if(a||(t[Xs]=a=new or(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=wg(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)gg||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Qa(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wg(){function t(n){return e.call(t.src,t.listener,n)}var e=_g;return t}function Ya(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ya(t,e[i],n,r,s);return null}return n=ei(n),t&&t[Qt]?t.O(e,n,Yt(r)?!!r.capture:!!r,s):Xa(t,e,n,!0,r,s)}function Ja(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ja(t,e[i],n,r,s);else r=Yt(r)?!!r.capture:!!r,n=ei(n),t&&t[Qt]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ws(i,n,r,s),-1<n&&(ir(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ws(e,n,r,s)),(n=-1<t?e[t]:null)&&Js(n))}function Js(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Qt])Ks(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Qa(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qs(e))?(Ks(n,t),n.h==0&&(n.src=null,e[Xs]=null)):ir(t)}}}function Qa(t){return t in Ys?Ys[t]:Ys[t]="on"+t}function _g(t,e){if(t.ca)t=!0;else{e=new Jt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Js(t),t=n.call(r,e)}return t}function Qs(t){return t=t[Xs],t instanceof or?t:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ei(t){return typeof t=="function"?t:(t[Zs]||(t[Zs]=function(e){return t.handleEvent(e)}),t[Zs])}function q(){Me.call(this),this.i=new or(this),this.P=this,this.I=null}K(q,Me);q.prototype[Qt]=!0;q.prototype.removeEventListener=function(t,e,n,r){Ja(this,t,e,n,r)};function W(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var s=e;e=new J(r,t),qa(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ar(o,r,!0,e)&&s}if(o=e.g=t,s=ar(o,r,!0,e)&&s,s=ar(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ar(o,r,!1,e)&&s}q.prototype.M=function(){if(q.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ir(n[r]);delete t.g[e],t.h--}}this.I=null};q.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};q.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ar(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ks(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ti=E.JSON.stringify;function Eg(){var t=ec;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ig{constructor(){this.h=this.g=null}add(e,n){const r=Za.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Za=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tg,t=>t.reset());class Tg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sg(t){E.setTimeout(()=>{throw t},0)}function ni(t,e){ri||bg(),si||(ri(),si=!0),ec.add(t,e)}var ri;function bg(){var t=E.Promise.resolve(void 0);ri=function(){t.then(Ag)}}var si=!1,ec=new Ig;function Ag(){for(var t;t=Eg();){try{t.h.call(t.g)}catch(n){Sg(n)}var e=Za;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}si=!1}function cr(t,e){q.call(this),this.h=t||1,this.g=e||E,this.j=G(this.kb,this),this.l=Date.now()}K(cr,q);y=cr.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),W(this,"tick"),this.da&&(ii(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ii(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){cr.Z.M.call(this),ii(this),delete this.g};function oi(t,e,n){if(typeof t=="function")n&&(t=G(t,n));else if(t&&typeof t.handleEvent=="function")t=G(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function tc(t){t.g=oi(()=>{t.g=null,t.i&&(t.i=!1,tc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kg extends Me{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tc(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(t){Me.call(this),this.h=t,this.g={}}K(Zt,Me);var nc=[];function rc(t,e,n,r){Array.isArray(n)||(n&&(nc[0]=n.toString()),n=nc);for(var s=0;s<n.length;s++){var i=Wa(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function sc(t){$s(t.g,function(e,n){this.g.hasOwnProperty(n)&&Js(e)},t),t.g={}}Zt.prototype.M=function(){Zt.Z.M.call(this),sc(this)};Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ur(){this.g=!0}ur.prototype.Aa=function(){this.g=!1};function Rg(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Cg(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function vt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Dg(t,n)+(r?" "+r:"")})}function Ng(t,e){t.info(function(){return"TIMEOUT: "+e})}ur.prototype.info=function(){};function Dg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ti(n)}catch(a){return e}}var Ye={},ic=null;function lr(){return ic=ic||new q}Ye.Ma="serverreachability";function oc(t){J.call(this,Ye.Ma,t)}K(oc,J);function en(t){const e=lr();W(e,new oc(e,t))}Ye.STAT_EVENT="statevent";function ac(t,e){J.call(this,Ye.STAT_EVENT,t),this.stat=e}K(ac,J);function se(t){const e=lr();W(e,new ac(e,t))}Ye.Na="timingevent";function cc(t,e){J.call(this,Ye.Na,t),this.size=e}K(cc,J);function tn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var hr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},uc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ai(){}ai.prototype.h=null;function lc(t){return t.h||(t.h=t.i())}function hc(){}var nn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ci(){J.call(this,"d")}K(ci,J);function ui(){J.call(this,"c")}K(ui,J);var li;function dr(){}K(dr,ai);dr.prototype.g=function(){return new XMLHttpRequest};dr.prototype.i=function(){return{}};li=new dr;function rn(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Zt(this),this.P=Og,t=js?125:void 0,this.W=new cr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}var Og=45e3,hi={},fr={};y=rn.prototype;y.setTimeout=function(t){this.P=t};function di(t,e,n){t.K=1,t.v=vr(Se(e)),t.s=n,t.U=!0,fc(t,null)}function fc(t,e){t.F=Date.now(),sn(t),t.A=Se(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ic(n.h,"t",r),t.C=0,n=t.l.H,t.h=new dc,t.g=zc(t.l,n?e:null,!t.s),0<t.O&&(t.L=new kg(G(t.Ia,t,t.g),t.O)),rc(t.V,t.g,"readystatechange",t.gb),e=t.H?Ba(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),en(1),Rg(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&be(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=be(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||js||this.g&&(this.h.h||this.g.ga()||Lc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?en(3):en(2)),pr(this);var n=this.g.ba();this.N=n;t:if(pc(this)){var r=Lc(this.g);t="";var s=r.length,i=be(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Je(this),on(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Cg(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rr(a)){var u=a;break t}}u=null}if(n=u)vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fi(this,n);else{this.i=!1,this.o=3,se(12),Je(this),on(this);break e}}this.U?(gc(this,l,o),js&&this.i&&l==3&&(rc(this.V,this.W,"tick",this.fb),this.W.start())):(vt(this.j,this.m,o,null),fi(this,o)),l==4&&Je(this),this.i&&!this.I&&(l==4?Bc(this.l,this):(this.i=!1,sn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,se(12)):(this.o=0,se(13)),Je(this),on(this)}}}catch(l){}finally{}};function pc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function gc(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=Pg(t,n),s==fr){e==4&&(t.o=4,se(14),r=!1),vt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==hi){t.o=4,se(15),vt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vt(t.j,t.m,s,null),fi(t,s);pc(t)&&s!=fr&&s!=hi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,se(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(e),e.L=!0,se(11))):(vt(t.j,t.m,n,"[Invalid Chunked Response]"),Je(t),on(t))}y.fb=function(){if(this.g){var t=be(this.g),e=this.g.ga();this.C<e.length&&(pr(this),gc(this,t,e),this.i&&t!=4&&sn(this))}};function Pg(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?fr:(n=Number(e.substring(n,r)),isNaN(n)?hi:(r+=1,r+n>e.length?fr:(e=e.substr(r,n),t.C=r+n,e)))}y.cancel=function(){this.I=!0,Je(this)};function sn(t){t.Y=Date.now()+t.P,mc(t,t.P)}function mc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tn(G(t.eb,t),e)}function pr(t){t.B&&(E.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ng(this.j,this.A),this.K!=2&&(en(3),se(17)),Je(this),this.o=2,on(this)):mc(this,this.Y-t)};function on(t){t.l.G==0||t.I||Bc(t.l,t)}function Je(t){pr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ii(t.W),sc(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function fi(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||mi(n.i,t))){if(n.I=t.N,!t.J&&mi(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Sr(n),Ir(n);else break e;Ti(n),se(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=tn(G(n.ab,n),6e3));if(1>=bc(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else et(n,11)}else if((t.J||n.g==t)&&Sr(n),!rr(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;!i.g&&(ne(g,"spdy")||ne(g,"quic")||ne(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(yi(i,i.h),i.h=null))}if(r.D){const b=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.sa=b,P(r.F,r.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Hc(r,r.H?r.la:null,r.W),o.J){Ac(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(pr(a),sn(a)),r.g=o}else Vc(r);0<n.l.length&&Tr(n)}else u[0]!="stop"&&u[0]!="close"||et(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?et(n,7):Ei(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}en(4)}catch(u){}}function Lg(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Us(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function pi(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Us(t)||typeof t=="string")Ua(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Us(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Lg(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function wt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof wt)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}y=wt.prototype;y.R=function(){gi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return gi(this),this.g.concat()};function gi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Qe(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}y.get=function(t,e){return Qe(this.h,t)?this.h[t]:e};y.set=function(t,e){Qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var yc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Mg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ze){this.g=e!==void 0?e:t.g,gr(this,t.j),this.s=t.s,mr(this,t.i),yr(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new wt(e.g),n.h=e.h),vc(this,n),this.o=t.o}else t&&(n=String(t).match(yc))?(this.g=!!e,gr(this,n[1]||"",!0),this.s=an(n[2]||""),mr(this,n[3]||"",!0),yr(this,n[4]),this.l=an(n[5]||"",!0),vc(this,n[6]||"",!0),this.o=an(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}Ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cn(e,wc,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cn(e,wc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cn(n,n.charAt(0)=="/"?$g:Vg,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cn(n,jg)),t.join("")};function Se(t){return new Ze(t)}function gr(t,e,n){t.j=n?an(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function mr(t,e,n){t.i=n?an(e,!0):e}function yr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vc(t,e,n){e instanceof un?(t.h=e,qg(t.h,t.g)):(n||(e=cn(e,Bg)),t.h=new un(e,t.g))}function P(t,e,n){t.h.set(e,n)}function vr(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ug(t){return t instanceof Ze?Se(t):new Ze(t,void 0)}function xg(t,e,n,r){var s=new Ze(null,void 0);return t&&gr(s,t),e&&mr(s,e),n&&yr(s,n),r&&(s.l=r),s}function an(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wc=/[#\/\?@]/g,Vg=/[#\?:]/g,$g=/[#\?]/g,Bg=/[#\?@]/g,jg=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ue(t){t.g||(t.g=new wt,t.h=0,t.i&&Mg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=un.prototype;y.add=function(t,e){Ue(this),this.i=null,t=_t(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _c(t,e){Ue(t),e=_t(t,e),Qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&gi(t)))}function Ec(t,e){return Ue(t),e=_t(t,e),Qe(t.g.h,e)}y.forEach=function(t,e){Ue(this),this.g.forEach(function(n,r){Ua(n,function(s){t.call(e,s,r,this)},this)},this)};y.T=function(){Ue(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};y.R=function(t){Ue(this);var e=[];if(typeof t=="string")Ec(this,t)&&(e=xa(e,this.g.get(_t(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=xa(e,t[n])}return e};y.set=function(t,e){return Ue(this),this.i=null,t=_t(this,t),Ec(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Ic(t,e,n){_c(t,e),0<n.length&&(t.i=null,t.g.set(_t(t,e),Fs(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function _t(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qg(t,e){e&&!t.j&&(Ue(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(_c(this,r),Ic(this,s,n))},t)),t.j=e}var Hg=class{constructor(t,e){this.h=t,this.g=e}};function Tc(t){this.l=t||zg,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zg=10;function Sc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bc(t){return t.h?1:t.g?t.g.size:0}function mi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function yi(t,e){t.g?t.g.add(e):t.h=e}function Ac(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function kc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Fs(t.i)}function vi(){}vi.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};vi.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function Gg(){this.g=new vi}function Kg(t,e,n){const r=n||"";try{pi(t,function(s,i){let o=s;Yt(s)&&(o=ti(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Wg(t,e){const n=new ur;if(E.Image){const r=new Image;r.onload=nr(wr,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nr(wr,n,r,"TestLoadImage: error",!1,e),r.onabort=nr(wr,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nr(wr,n,r,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wr(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function ln(t){this.l=t.$b||null,this.j=t.ib||!1}K(ln,ai);ln.prototype.g=function(){return new _r(this.l,this.j)};ln.prototype.i=function(t){return function(){return t}}({});function _r(t,e){q.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=wi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(_r,q);var wi=0;y=_r.prototype;y.open=function(t,e){if(this.readyState!=wi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dn(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=wi};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Rc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hn(this):dn(this),this.readyState==3&&Rc(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,hn(this))};y.Ta=function(t){this.g&&(this.response=t,hn(this))};y.ha=function(){this.g&&hn(this)};function hn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dn(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Xg=E.JSON.parse;function F(t){q.call(this),this.headers=new wt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Cc,this.K=this.L=!1}K(F,q);var Cc="",Yg=/^https?$/i,Jg=["POST","PUT"];y=F.prototype;y.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():li.g(),this.C=this.u?lc(this.u):lc(li),this.g.onreadystatechange=G(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Nc(this,i);return}t=n||"";const s=new wt(this.headers);r&&pi(r,function(i,o){s.set(o,i)}),r=cg(s.T()),n=E.FormData&&t instanceof E.FormData,!(0<=Ma(Jg,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pc(this),0<this.B&&((this.K=Qg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.pa,this)):this.A=oi(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nc(this,i)}};function Qg(t){return yt&&fg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Zg(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof Ms!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function Nc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Dc(t),Er(t)}function Dc(t){t.D||(t.D=!0,W(t,"complete"),W(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,W(this,"complete"),W(this,"abort"),Er(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Er(this,!0)),F.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?Oc(this):this.cb())};y.cb=function(){Oc(this)};function Oc(t){if(t.h&&typeof Ms!="undefined"&&(!t.C[1]||be(t)!=4||t.ba()!=2)){if(t.v&&be(t)==4)oi(t.Fa,0,t);else if(W(t,"readystatechange"),be(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(yc)[1]||null;if(!s&&E.self&&E.self.location){var i=E.self.location.protocol;s=i.substr(0,i.length-1)}r=!Yg.test(s?s.toLowerCase():"")}n=r}if(n)W(t,"complete"),W(t,"success");else{t.m=6;try{var o=2<be(t)?t.g.statusText:""}catch(c){o=""}t.j=o+" ["+t.ba()+"]",Dc(t)}}finally{Er(t)}}}}function Er(t,e){if(t.g){Pc(t);const n=t.g,r=t.C[0]?tr:null;t.g=null,t.C=null,e||W(t,"ready");try{n.onreadystatechange=r}catch(s){}}}function Pc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function be(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<be(this)?this.g.status:-1}catch(t){return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Xg(e)}};function Lc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Cc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function em(t){let e="";return $s(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function _i(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=em(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}function fn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mc(t){this.za=0,this.l=[],this.h=new ur,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=fn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=fn("baseRetryDelayMs",5e3,t),this.$a=fn("retryDelaySeedMs",1e4,t),this.Ya=fn("forwardChannelMaxRetries",2,t),this.ra=fn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Tc(t&&t.concurrentRequestLimit),this.Ca=new Gg,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=Mc.prototype;y.ma=8;y.G=1;function Ei(t){if(Uc(t),t.G==3){var e=t.V++,n=Se(t.F);P(n,"SID",t.J),P(n,"RID",e),P(n,"TYPE","terminate"),pn(t,n),e=new rn(t,t.h,e,void 0),e.K=2,e.v=vr(Se(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=zc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),sn(e)}qc(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}};function Ir(t){t.g&&(Si(t),t.g.cancel(),t.g=null)}function Uc(t){Ir(t),t.u&&(E.clearTimeout(t.u),t.u=null),Sr(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function Ii(t,e){t.l.push(new Hg(t.Za++,e)),t.G==3&&Tr(t)}function Tr(t){Sc(t.i)||t.m||(t.m=!0,ni(t.Ha,t),t.C=0)}function tm(t,e){return bc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=tn(G(t.Ha,t,e),jc(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new rn(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ba(i),qa(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Fc(this,s,e),n=Se(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),pn(this,n),this.o&&i&&_i(n,this.o,i),yi(this.i,s),this.Ra&&P(n,"TYPE","init"),this.ja?(P(n,"$req",e),P(n,"SID","null"),s.$=!0,di(s,n,null)):di(s,n,e),this.G=2}}else this.G==3&&(t?xc(this,t):this.l.length==0||Sc(this.i)||xc(this))};function xc(t,e){var n;e?n=e.m:n=t.V++;const r=Se(t.F);P(r,"SID",t.J),P(r,"RID",n),P(r,"AID",t.U),pn(t,r),t.o&&t.s&&_i(r,t.o,t.s),n=new rn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Fc(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),yi(t.i,n),di(n,r,e)}function pn(t,e){t.j&&pi({},function(n,r){P(e,r,n)})}function Fc(t,e,n){n=Math.min(t.l.length,n);var r=t.j?G(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{Kg(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Vc(t){t.g||t.u||(t.Y=1,ni(t.Ga,t),t.A=0)}function Ti(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=tn(G(t.Ga,t),jc(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,$c(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=tn(G(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,se(10),Ir(this),$c(this))};function Si(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function $c(t){t.g=new rn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Se(t.oa);P(e,"RID","rpc"),P(e,"SID",t.J),P(e,"CI",t.N?"0":"1"),P(e,"AID",t.U),pn(t,e),P(e,"TYPE","xmlhttp"),t.o&&t.s&&_i(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=vr(Se(e)),n.s=null,n.U=!0,fc(n,t)}y.ab=function(){this.v!=null&&(this.v=null,Ir(this),Ti(this),se(19))};function Sr(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function Bc(t,e){var n=null;if(t.g==e){Sr(t),Si(t),t.g=null;var r=2}else if(mi(t.i,e))n=e.D,Ac(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=lr(),W(r,new cc(r,n,e,s)),Tr(t)}else Vc(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&tm(t,e)||r==2&&Ti(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:et(t,5);break;case 4:et(t,10);break;case 3:et(t,6);break;default:et(t,2)}}}function jc(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function et(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=G(t.jb,t);n||(n=new Ze("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||gr(n,"https"),vr(n)),Wg(n.toString(),r)}else se(2);t.G=0,t.j&&t.j.va(e),qc(t),Uc(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),se(2)):(this.h.info("Failed to ping google.com"),se(1))};function qc(t){t.G=0,t.I=-1,t.j&&((kc(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Fs(t.l),t.l.length=0),t.j.ua())}function Hc(t,e,n){let r=Ug(n);if(r.i!="")e&&mr(r,e+"."+r.i),yr(r,r.m);else{const s=E.location;r=xg(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&$s(t.aa,function(s,i){P(r,i,s)}),e=t.D,n=t.sa,e&&n&&P(r,e,n),P(r,"VER",t.ma),pn(t,r),r}function zc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new F(new ln({ib:!0})):new F(t.qa),e.L=t.H,e}function Gc(){}y=Gc.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function br(){if(yt&&!(10<=Number(pg)))throw Error("Environmental error: no available transport.")}br.prototype.g=function(t,e){return new he(t,e)};function he(t,e){q.call(this),this.g=new Mc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!rr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rr(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Et(this)}K(he,q);he.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ni(G(t.hb,t,e))),se(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Hc(t,null,t.W),Tr(t)};he.prototype.close=function(){Ei(this.g)};he.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ii(this.g,e)}else this.v?(e={},e.__data__=ti(t),Ii(this.g,e)):Ii(this.g,t)};he.prototype.M=function(){this.g.j=null,delete this.j,Ei(this.g),delete this.g,he.Z.M.call(this)};function Kc(t){ci.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}K(Kc,ci);function Wc(){ui.call(this),this.status=1}K(Wc,ui);function Et(t){this.g=t}K(Et,Gc);Et.prototype.xa=function(){W(this.g,"a")};Et.prototype.wa=function(t){W(this.g,new Kc(t))};Et.prototype.va=function(t){W(this.g,new Wc(t))};Et.prototype.ua=function(){W(this.g,"b")};br.prototype.createWebChannel=br.prototype.g;he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;hr.NO_ERROR=0;hr.TIMEOUT=8;hr.HTTP_ERROR=6;uc.COMPLETE="complete";hc.EventType=nn;nn.OPEN="a";nn.CLOSE="b";nn.ERROR="c";nn.MESSAGE="d";q.prototype.listen=q.prototype.N;F.prototype.listenOnce=F.prototype.O;F.prototype.getLastError=F.prototype.La;F.prototype.getLastErrorCode=F.prototype.Da;F.prototype.getStatus=F.prototype.ba;F.prototype.getResponseJson=F.prototype.Qa;F.prototype.getResponseText=F.prototype.ga;F.prototype.send=F.prototype.ea;var nm=function(){return new br},rm=function(){return lr()},bi=hr,sm=uc,im=Ye,Xc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},om=ln,Ar=hc,am=F;/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let It="9.1.0";/**
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
 */const tt=new cs("@firebase/firestore");function Yc(){return tt.logLevel}function w(t,...e){if(tt.logLevel<=k.DEBUG){const n=e.map(Ai);tt.debug(`Firestore (${It}): ${t}`,...n)}}function xe(t,...e){if(tt.logLevel<=k.ERROR){const n=e.map(Ai);tt.error(`Firestore (${It}): ${t}`,...n)}}function Jc(t,...e){if(tt.logLevel<=k.WARN){const n=e.map(Ai);tt.warn(`Firestore (${It}): ${t}`,...n)}}function Ai(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch(n){return t}/**
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
*/var e}/**
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
 */function T(t="Unexpected state"){const e=`FIRESTORE (${It}) INTERNAL ASSERTION FAILED: `+t;throw xe(e),new Error(e)}function D(t,e){t||T()}function S(t,e){return t}/**
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
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ae{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class um{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(oe.UNAUTHENTICATED))}shutdown(){}}class lm{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ae,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{w("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ae)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(w("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(D(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new oe(e)}}class hm{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=oe.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class dm{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hm(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class ki{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function fm(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */ki.T=-1;class Qc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function N(t,e){return t<e?-1:t>e?1:0}function Tt(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class de{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new de(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(e){this.timestamp=e}static fromTimestamp(e){return new R(e)}static min(){return new R(new de(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Zc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function nt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&T(),r===void 0?r=e.length-n:r>e.length-n&&T(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class M extends gn{construct(e,n,r){return new M(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new v(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const pm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends gn{construct(e,n,r){return new ae(e,n,r)}static isValidIdentifier(e){return pm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new v(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new v(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new v(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(n)}static emptyPath(){return new ae([])}}/**
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
 */class mn{constructor(e){this.fields=e,e.sort(ae.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Tt(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Q{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Q(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Q(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const gm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fe(t){if(D(!!t),typeof t=="string"){let e=0;const n=gm.exec(t);if(D(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:V(t.seconds),nanos:V(t.nanos)}}function V(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function St(t){return typeof t=="string"?Q.fromBase64String(t):Q.fromUint8Array(t)}/**
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
 */function tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nu(t){const e=t.mapValue.fields.__previous_value__;return tu(e)?nu(e):e}function yn(t){const e=Fe(t.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */function bt(t){return t==null}function kr(t){return t===0&&1/t==-1/0}function mm(t){return typeof t=="number"&&Number.isInteger(t)&&!kr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(M.fromString(e))}static fromName(e){return new I(M.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return M.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new M(e.slice()))}}/**
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
 */function rt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tu(t)?4:10:T()}function we(t,e){const n=rt(t);if(n!==rt(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yn(t).isEqual(yn(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Fe(r.timestampValue),o=Fe(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return St(r.bytesValue).isEqual(St(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return V(r.geoPointValue.latitude)===V(s.geoPointValue.latitude)&&V(r.geoPointValue.longitude)===V(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return V(r.integerValue)===V(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=V(r.doubleValue),o=V(s.doubleValue);return i===o?kr(i)===kr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Tt(t.arrayValue.values||[],e.arrayValue.values||[],we);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Zc(i)!==Zc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!we(i[a],o[a])))return!1;return!0}(t,e);default:return T()}}function vn(t,e){return(t.values||[]).find(n=>we(n,e))!==void 0}function At(t,e){const n=rt(t),r=rt(e);if(n!==r)return N(n,r);switch(n){case 0:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=V(s.integerValue||s.doubleValue),a=V(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ru(t.timestampValue,e.timestampValue);case 4:return ru(yn(t),yn(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(s,i){const o=St(s),a=St(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=N(V(s.latitude),V(i.latitude));return o!==0?o:N(V(s.longitude),V(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=At(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=At(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(t.mapValue,e.mapValue);default:throw T()}}function ru(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=Fe(t),r=Fe(e),s=N(n.seconds,r.seconds);return s!==0?s:N(n.nanos,r.nanos)}function Ri(t){return Ci(t)}function Ci(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Fe(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?St(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Ci(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Ci(r.fields[a])}`;return i+"}"}(t.mapValue):T();var e,n}function Ni(t){return!!t&&"integerValue"in t}function Di(t){return!!t&&"arrayValue"in t}function su(t){return!!t&&"nullValue"in t}function iu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rr(t){return!!t&&"mapValue"in t}function wn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return nt(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class fe{constructor(e){this.value=e}static empty(){return new fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wn(n)}setAll(e){let n=ae.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=wn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Rr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){nt(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new fe(wn(this.value))}}function ou(t){const e=[];return nt(t.fields,(n,r)=>{const s=new ae([n]);if(Rr(r)){const i=ou(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
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
 */class Z{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Z(e,0,R.min(),fe.empty(),0)}static newFoundDocument(e,n,r){return new Z(e,1,n,r,0)}static newNoDocument(e,n){return new Z(e,2,n,fe.empty(),0)}static newUnknownDocument(e,n){return new Z(e,3,n,fe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Z(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ym{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function au(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ym(t,e,n,r,s,i,o)}function Oi(t){const e=S(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),bt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Cr(e.startAt)),e.endAt&&(n+="|ub:",n+=Cr(e.endAt)),e.A=n}return e.A}function vm(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ri(r.value)}`;var r}).join(", ")}]`),bt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Cr(t.startAt)),t.endAt&&(e+=", endAt: "+Cr(t.endAt)),`Target(${e})`}function Pi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!km(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!we(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lu(t.startAt,e.startAt)&&lu(t.endAt,e.endAt)}function Li(t){return I.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ce extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new _m(e,n,r):n==="array-contains"?new Tm(e,r):n==="in"?new Sm(e,r):n==="not-in"?new bm(e,r):n==="array-contains-any"?new Am(e,r):new ce(e,n,r)}static R(e,n,r){return n==="in"?new Em(e,r):new Im(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(At(n,this.value)):n!==null&&rt(this.value)===rt(n)&&this.P(At(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function wm(t){return t.field.canonicalString()+t.op.toString()+Ri(t.value)}class _m extends ce{constructor(e,n,r){super(e,n,r),this.key=I.fromName(r.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.P(n)}}class Em extends ce{constructor(e,n){super(e,"in",n),this.keys=cu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Im extends ce{constructor(e,n){super(e,"not-in",n),this.keys=cu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>I.fromName(r.referenceValue))}class Tm extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Di(n)&&vn(n.arrayValue,this.value)}}class Sm extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vn(this.value.arrayValue,n)}}class bm extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vn(this.value.arrayValue,n)}}class Am extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Di(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vn(this.value.arrayValue,r))}}class Mi{constructor(e,n){this.position=e,this.before=n}}function Cr(t){return`${t.before?"b":"a"}:${t.position.map(e=>Ri(e)).join(",")}`}class _n{constructor(e,n="asc"){this.field=e,this.dir=n}}function km(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function uu(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),n.key):r=At(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function lu(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!we(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function Rm(t,e,n,r,s,i,o,a){return new Nr(t,e,n,r,s,i,o,a)}function Ui(t){return new Nr(t)}function Dr(t){return!bt(t.limit)&&t.limitType==="F"}function Or(t){return!bt(t.limit)&&t.limitType==="L"}function Cm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nm(t){for(const e of t.filters)if(e.v())return e.field;return null}function Dm(t){return t.collectionGroup!==null}function En(t){const e=S(t);if(e.V===null){e.V=[];const n=Nm(e),r=Cm(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new _n(n)),e.V.push(new _n(ae.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new _n(ae.keyField(),i))}}}return e.V}function st(t){const e=S(t);if(!e.S)if(e.limitType==="F")e.S=au(e.path,e.collectionGroup,En(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of En(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new _n(i.field,o))}const r=e.endAt?new Mi(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Mi(e.startAt.position,!e.startAt.before):null;e.S=au(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function Om(t,e,n){return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pr(t,e){return Pi(st(t),st(e))&&t.limitType===e.limitType}function hu(t){return`${Oi(st(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${vm(st(t))}; limitType=${t.limitType})`}function Lr(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):I.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!uu(n.startAt,En(n),r)||n.endAt&&uu(n.endAt,En(n),r))}(t,e)}function du(t){return(e,n)=>{let r=!1;for(const s of En(t)){const i=Pm(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Pm(t,e,n){const r=t.field.isKeyField()?I.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?At(a,c):T()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
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
 */function fu(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(e)?"-0":e}}function pu(t){return{integerValue:""+t}}function Lm(t,e){return mm(e)?pu(e):fu(t,e)}/**
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
 */class Mr{constructor(){this._=void 0}}function Mm(t,e,n){return t instanceof Ur?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof In?mu(t,e):t instanceof Tn?yu(t,e):function(r,s){const i=gu(r,s),o=vu(i)+vu(r.C);return Ni(i)&&Ni(r.C)?pu(o):fu(r.N,o)}(t,e)}function Um(t,e,n){return t instanceof In?mu(t,e):t instanceof Tn?yu(t,e):n}function gu(t,e){return t instanceof xr?Ni(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ur extends Mr{}class In extends Mr{constructor(e){super(),this.elements=e}}function mu(t,e){const n=wu(e);for(const r of t.elements)n.some(s=>we(s,r))||n.push(r);return{arrayValue:{values:n}}}class Tn extends Mr{constructor(e){super(),this.elements=e}}function yu(t,e){let n=wu(e);for(const r of t.elements)n=n.filter(s=>!we(s,r));return{arrayValue:{values:n}}}class xr extends Mr{constructor(e,n){super(),this.N=e,this.C=n}}function vu(t){return V(t.integerValue||t.doubleValue)}function wu(t){return Di(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xm(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof In&&r instanceof In||n instanceof Tn&&r instanceof Tn?Tt(n.elements,r.elements,we):n instanceof xr&&r instanceof xr?we(n.C,r.C):n instanceof Ur&&r instanceof Ur}(t.transform,e.transform)}class Fm{constructor(e,n){this.version=e,this.transformResults=n}}class Ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vr{}function Vm(t,e,n){t instanceof $r?function(r,s,i){const o=r.value.clone(),a=Tu(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof it?function(r,s,i){if(!Fr(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Tu(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Iu(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Fi(t,e,n){t instanceof $r?function(r,s,i){if(!Fr(r.precondition,s))return;const o=r.value.clone(),a=Su(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Eu(s),o).setHasLocalMutations()}(t,e,n):t instanceof it?function(r,s,i){if(!Fr(r.precondition,s))return;const o=Su(r.fieldTransforms,i,s),a=s.data;a.setAll(Iu(r)),a.setAll(o),s.convertToFoundDocument(Eu(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Fr(r.precondition,s)&&s.convertToNoDocument(R.min())}(t,e)}function $m(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gu(r.transform,s||null);i!=null&&(n==null&&(n=fe.empty()),n.set(r.field,i))}return n||null}function _u(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Tt(n,r,(s,i)=>xm(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Eu(t){return t.isFoundDocument()?t.version:R.min()}class $r extends Vr{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class it extends Vr{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Iu(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tu(t,e,n){const r=new Map;D(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Um(o,a,n[s]))}return r}function Su(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Mm(i,o,e))}return r}class bu extends Vr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Bm extends Vr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class jm{constructor(e){this.count=e}}/**
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
 */var $,A;function qm(t){switch(t){case f.OK:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0;default:return T()}}function Au(t){if(t===void 0)return xe("GRPC error has no .code"),f.UNKNOWN;switch(t){case $.OK:return f.OK;case $.CANCELLED:return f.CANCELLED;case $.UNKNOWN:return f.UNKNOWN;case $.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case $.INTERNAL:return f.INTERNAL;case $.UNAVAILABLE:return f.UNAVAILABLE;case $.UNAUTHENTICATED:return f.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case $.NOT_FOUND:return f.NOT_FOUND;case $.ALREADY_EXISTS:return f.ALREADY_EXISTS;case $.PERMISSION_DENIED:return f.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case $.ABORTED:return f.ABORTED;case $.OUT_OF_RANGE:return f.OUT_OF_RANGE;case $.UNIMPLEMENTED:return f.UNIMPLEMENTED;case $.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(A=$||($={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ee{constructor(e,n){this.comparator=e,this.root=n||X.EMPTY}insert(e,n){return new ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:X.RED,this.left=s!=null?s:X.EMPTY,this.right=i!=null?i:X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new X(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return X.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,n,r,s){return this}insert(t,e,n){return new X(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Y{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ku(this.data.getIterator())}getIteratorFrom(e){return new ku(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Y)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Y(this.comparator);return n.data=e,n}}class ku{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Hm=new ee(I.comparator);function ot(){return Hm}const zm=new ee(I.comparator);function Vi(){return zm}const Gm=new ee(I.comparator);function Km(){return Gm}const Wm=new Y(I.comparator);function O(...t){let e=Wm;for(const n of t)e=e.add(n);return e}const Xm=new Y(N);function Ru(){return Xm}/**
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
 */class jr{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Sn.createSynthesizedTargetChangeForCurrentChange(e,n)),new jr(R.min(),r,Ru(),ot(),O())}}class Sn{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Sn(Q.EMPTY_BYTE_STRING,n,O(),O(),O())}}/**
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
 */class qr{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class Cu{constructor(e,n){this.targetId=e,this.O=n}}class Nu{constructor(e,n,r=Q.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Du{constructor(){this.F=0,this.M=Pu(),this.L=Q.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=O(),n=O(),r=O();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:T()}}),new Sn(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=Pu()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ym{constructor(e){this.tt=e,this.et=new Map,this.nt=ot(),this.st=Ou(),this.it=new Y(N)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:T()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(Li(i))if(r===0){const o=new I(i.path);this.at(n,o,Z.newNoDocument(o,R.min()))}else D(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Li(a.target)){const c=new I(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.at(o,c,Z.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=O();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new jr(e,n,this.it,this.nt,r);return this.nt=ot(),this.st=Ou(),this.it=new Y(N),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Du,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Y(N),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||w("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new Du),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Ou(){return new ee(I.comparator)}function Pu(){return new ee(I.comparator)}/**
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
 */const Jm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Zm{constructor(e,n){this.databaseId=e,this.D=n}}function Hr(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lu(t,e){return t.D?e.toBase64():e.toUint8Array()}function ey(t,e){return Hr(t,e.toTimestamp())}function ke(t){return D(!!t),R.fromTimestamp(function(e){const n=Fe(e);return new de(n.seconds,n.nanos)}(t))}function $i(t,e){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Mu(t){const e=M.fromString(t);return D(Bu(e)),e}function Bi(t,e){return $i(t.databaseId,e.path)}function ji(t,e){const n=Mu(e);if(n.get(1)!==t.databaseId.projectId)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new v(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new I(Uu(n))}function qi(t,e){return $i(t.databaseId,e)}function ty(t){const e=Mu(t);return e.length===4?M.emptyPath():Uu(e)}function Hi(t){return new M(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uu(t){return D(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xu(t,e,n){return{name:Bi(t,e),fields:n.value.mapValue.fields}}function ny(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.D?(D(u===void 0||typeof u=="string"),Q.fromBase64String(u||"")):(D(u===void 0||u instanceof Uint8Array),Q.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Au(c.code);return new v(u,c.message||"")}(o);n=new Nu(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ji(t,r.document.name),i=ke(r.document.updateTime),o=new fe({mapValue:{fields:r.document.fields}}),a=Z.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new qr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ji(t,r.document),i=r.readTime?ke(r.readTime):R.min(),o=Z.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ji(t,r.document),i=r.removedTargetIds||[];n=new qr([],i,s,null)}else{if(!("filter"in e))return T();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new jm(s),o=r.targetId;n=new Cu(o,i)}}return n}function ry(t,e){let n;if(e instanceof $r)n={update:xu(t,e.key,e.value)};else if(e instanceof bu)n={delete:Bi(t,e.key)};else if(e instanceof it)n={update:xu(t,e.key,e.data),updateMask:fy(e.fieldMask)};else{if(!(e instanceof Bm))return T();n={verify:Bi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ur)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof In)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Tn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),increment:o.C};throw T()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:ey(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(t,e.precondition)),n}function sy(t,e){return t&&t.length>0?(D(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?ke(r.updateTime):ke(s);return i.isEqual(R.min())&&(i=ke(s)),new Fm(i,r.transformResults||[])}(n,e))):[]}function iy(t,e){return{documents:[qi(t,e.path)]}}function oy(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=qi(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qi(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(iu(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NAN"}};if(su(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(iu(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NOT_NAN"}};if(su(l.value))return{unaryFilter:{field:kt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kt(l.field),op:ly(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:kt(u.field),direction:uy(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||bt(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Vu(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Vu(e.endAt)),n}function ay(t){let e=ty(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){D(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Fu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new _n(Rt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,bt(h)?null:h}(n.limit));let c=null;n.startAt&&(c=$u(n.startAt));let u=null;return n.endAt&&(u=$u(n.endAt)),Rm(e,s,o,i,a,"F",c,u)}function cy(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fu(t){return t?t.unaryFilter!==void 0?[dy(t)]:t.fieldFilter!==void 0?[hy(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Fu(e)).reduce((e,n)=>e.concat(n)):T():[]}function Vu(t){return{before:t.before,values:t.position}}function $u(t){const e=!!t.before,n=t.values||[];return new Mi(n,e)}function uy(t){return Jm[t]}function ly(t){return Qm[t]}function kt(t){return{fieldPath:t.canonicalString()}}function Rt(t){return ae.fromServerFormat(t.fieldPath)}function hy(t){return ce.create(Rt(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return T()}}(t.fieldFilter.op),t.fieldFilter.value)}function dy(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rt(t.unaryFilter.field);return ce.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rt(t.unaryFilter.field);return ce.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Rt(t.unaryFilter.field);return ce.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Rt(t.unaryFilter.field);return ce.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return T()}}function fy(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const py="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,r)=>{n(e)})}static reject(e){return new m((n,r)=>{r(e)})}static waitFor(e){return new m((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=m.resolve(!1);for(const r of e)n=n.next(s=>s?m.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function bn(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class my{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vm(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Fi(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Fi(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(R.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),O())}isEqual(e){return this.batchId===e.batchId&&Tt(this.mutations,e.mutations,(n,r)=>_u(n,r))&&Tt(this.baseMutations,e.baseMutations,(n,r)=>_u(n,r))}}class zi{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){D(e.mutations.length===r.length);let s=Km();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zi(e,n,r,s)}}/**
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
 */class at{constructor(e,n,r,s,i=R.min(),o=R.min(),a=Q.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new at(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class yy{constructor(e){this.Wt=e}}function vy(t){const e=ay({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Om(e,e.limit,"L"):e}/**
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
 */class wy{constructor(){this.Gt=new _y}addToCollectionParentIndex(e,n){return this.Gt.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Gt.getEntries(n))}}class _y{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Y(M.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Y(M.comparator)).toArray()}}/**
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
 */class Ct{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Ct(0)}static ie(){return new Ct(-1)}}/**
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
 */async function An(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==py)throw t;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class kn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){nt(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return eu(this.inner)}}/**
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
 */class Ey{constructor(){this.changes=new kn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:R.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Z.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ju{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):Dm(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new I(n)).next(r=>{let s=Vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Vi();return this.Ht.getCollectionParents(e,s).next(o=>m.forEach(o,a=>{const c=function(u,l){return new Nr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const u of c.mutations){const l=u.key;let h=s.get(l);h==null&&(h=Z.newInvalidDocument(l),s=s.insert(l,h)),Fi(u,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(l))}}))).next(()=>(s.forEach((o,a)=>{Lr(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=O();for(const o of n)for(const a of o.mutations)a instanceof it&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class Gi{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=O(),s=O();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gi(e,n.fromCache,r,s)}}/**
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
 */class Iy{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(R.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(Dr(n)||Or(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(Yc()<=k.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xi(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new Y(du(e));return n.forEach((s,i)=>{Lr(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Yc()<=k.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",xi(n)),this.On.getDocumentsMatchingQuery(e,n,R.min())}}/**
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
 */class Ty{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new ee(N),this.qn=new kn(i=>Oi(i),Pi),this.Kn=R.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new ju(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Sy(t,e,n,r){return new Ty(t,e,n,r)}async function qu(t,e){const n=S(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new ju(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=O();for(const d of a){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of c){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return s.Pn(o,h).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function by(t,e){const n=S(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=m.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const b=c.docVersions.get(p);D(b!==null),g.version.compareTo(b)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function Hu(t){const e=S(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Ay(t,e){const n=S(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(n.ze.removeMatchingKeys(i,u.removedDocuments,l).next(()=>n.ze.addMatchingKeys(i,u.addedDocuments,l)));const d=u.resumeToken;if(d.approximateByteSize()>0){const p=h.withResumeToken(d,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(l,p),function(g,b,C){return D(b.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(h,p,u)&&a.push(n.ze.updateTargetData(i,p))}});let c=ot();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ky(i,o,e.documentUpdates,r,void 0).next(u=>{c=u})),!r.isEqual(R.min())){const u=n.ze.getLastRemoteSnapshotVersion(i).next(l=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function ky(t,e,n,r,s){let i=O();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=ot();return n.forEach((c,u)=>{const l=o.get(c),h=(s==null?void 0:s.get(c))||r;u.isNoDocument()&&u.version.isEqual(R.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):w("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function Ry(t,e){const n=S(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Cy(t,e){const n=S(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,m.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new at(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Ki(t,e,n){const r=S(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bn(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function zu(t,e,n){const r=S(t);let s=R.min(),i=O();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=S(a),h=l.qn.get(u);return h!==void 0?m.resolve(l.Un.get(h)):l.ze.getTargetData(c,u)}(r,o,st(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:R.min(),n?i:O())).next(a=>({documents:a,Gn:i})))}/**
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
 */class Ny{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return m.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:ke(r.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:vy(r.bundledQuery),readTime:ke(r.readTime)}}(n)),m.resolve()}}/**
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
 */class Wi{constructor(){this.Zn=new Y(H.ts),this.es=new Y(H.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new H(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new H(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new I(new M([])),r=new H(n,e),s=new H(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new I(new M([])),r=new H(n,e),s=new H(n,e+1);let i=O();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new H(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class H{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return I.comparator(e.key,n.key)||N(e.ls,n.ls)}static ns(e,n){return N(e.ls,n.ls)||I.comparator(e.key,n.key)}}/**
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
 */class Dy{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Y(H.ts)}checkEmpty(e){return m.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new my(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new H(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return m.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return m.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new H(n,0),s=new H(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Y(N);return n.forEach(s=>{const i=new H(s,0),o=new H(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),m.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new H(new I(i),0);let a=new Y(N);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ls)),!0)},o),m.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){D(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return m.forEach(n.mutations,s=>{const i=new H(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new H(n,0),s=this.ds.firstAfterOrEqual(r);return m.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,m.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class Oy{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ee(I.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return m.resolve(r?r.document.clone():Z.newInvalidDocument(n))}getEntries(e,n){let r=ot();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():Z.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=ot();const i=new I(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||Lr(n,c)&&(s=s.insert(c.key,c.clone()))}return m.resolve(s)}Es(e,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Py(this)}getSize(e){return m.resolve(this.size)}}class Py extends Ey{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),m.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class Ly{constructor(e){this.persistence=e,this.Ts=new kn(n=>Oi(n),Pi),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Is=0,this.As=new Wi,this.targetCount=0,this.Rs=Ct.se()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),m.resolve()}ae(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ct(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.ae(n),m.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return m.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),m.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),m.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return m.resolve(r)}containsKey(e,n){return m.resolve(this.As.containsKey(n))}}/**
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
 */class My{constructor(e,n){this.bs={},this.Le=new ki(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Ly(this),this.Ht=new wy,this.He=function(r,s){return new Oy(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new yy(n),this.Je=new Ny(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Dy(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){w("MemoryPersistence","Starting transaction:",e);const s=new Uy(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return m.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Uy extends gy{constructor(e){super(),this.currentSequenceNumber=e}}class Xi{constructor(e){this.persistence=e,this.Ds=new Wi,this.Cs=null}static Ns(e){return new Xi(e)}get xs(){if(this.Cs)return this.Cs;throw T()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),m.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),m.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.xs,r=>{const s=I.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return m.or([()=>m.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Gu{constructor(){this.activeTargetIds=Ru()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xy{constructor(){this.yi=new Gu,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Gu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Fy{Ei(e){}shutdown(){}}/**
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
 */class Ku{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Vy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class $y{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class By extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);w("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>(w("RestConnection","Received: ",a),a),a=>{throw Jc("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+It,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=Vy[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new am;a.listenOnce(sm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case bi.NO_ERROR:const u=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(u)),i(u);break;case bi.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new v(f.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const l=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(g)>=0?g:f.UNKNOWN}(h.status);o(new v(d,h.message))}else o(new v(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nm(),i=rm(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new om({})),this.Ui(o.initMessageHeaders,n),Eo()||To()||Yl()||So()||Jl()||Io()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");w("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new $y({vi:p=>{l?w("Connection","Not sending because WebChannel is closed:",p):(u||(w("Connection","Opening WebChannel transport."),c.open(),u=!0),w("Connection","WebChannel sending:",p),c.send(p))},Vi:()=>c.close()}),d=(p,g,b)=>{p.listen(g,C=>{try{b(C)}catch(L){setTimeout(()=>{throw L},0)}})};return d(c,Ar.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),d(c,Ar.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),h.$i())}),d(c,Ar.EventType.ERROR,p=>{l||(l=!0,Jc("Connection","WebChannel transport errored:",p),h.$i(new v(f.UNAVAILABLE,"The operation could not be completed")))}),d(c,Ar.EventType.MESSAGE,p=>{var g;if(!l){const b=p.data[0];D(!!b);const C=b,L=C.error||((g=C[0])===null||g===void 0?void 0:g.error);if(L){w("Connection","WebChannel received error:",L);const ie=L.status;let z=function(_e){const ge=$[_e];if(ge!==void 0)return Au(ge)}(ie),U=L.message;z===void 0&&(z=f.INTERNAL,U="Unknown error status: "+ie+" with message "+L.message),l=!0,h.$i(new v(z,U)),c.close()}else w("Connection","WebChannel received:",b),h.Oi(b)}}),d(i,im.STAT_EVENT,p=>{p.stat===Xc.PROXY?w("Connection","Detected buffering proxy"):p.stat===Xc.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Yi(){return typeof document!="undefined"?document:null}/**
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
 */function zr(t){return new Zm(t,!0)}class Wu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class Xu{constructor(e,n,r,s,i,o){this.Oe=e,this.er=r,this.nr=s,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Wu(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(xe(n.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===f.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const s=new v(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(s)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jy extends Xu{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,i),this.N=s}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=ny(this.N,e),r=function(s){if(!("targetChange"in s))return R.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?R.min():i.readTime?ke(i.readTime):R.min()}(e);return this.listener.Tr(n,r)}Ir(e){const n={};n.database=Hi(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=Li(a)?{documents:iy(s,a)}:{query:oy(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Lu(s,i.resumeToken):i.snapshotVersion.compareTo(R.min())>0&&(o.readTime=Hr(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=cy(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Hi(this.N),n.removeTarget=e,this.wr(n)}}class qy extends Xu{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,i),this.N=s,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=sy(e.writeResults,e.commitTime),r=ke(e.commitTime);return this.listener.vr(r,n)}return D(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Hi(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ry(this.N,r))};this.wr(n)}}/**
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
 */class Hy extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new v(f.UNKNOWN,s.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(s=>this.nr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new v(f.UNKNOWN,s.toString())})}terminate(){this.Dr=!0}}class zy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(xe(n),this.$r=!1):w("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
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
 */class Gy{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(o=>{r.enqueueAndForget(async()=>{ct(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.Kr.add(4),await Rn(c),c.Wr.set("Unknown"),c.Kr.delete(4),await Gr(c)}(this))})}),this.Wr=new zy(r,s)}}async function Gr(t){if(ct(t))for(const e of t.jr)await e(!0)}async function Rn(t){for(const e of t.jr)await e(!1)}function Yu(t,e){const n=S(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Zi(n)?Qi(n):Nt(n).cr()&&Ji(n,e))}function Ju(t,e){const n=S(t),r=Nt(n);n.qr.delete(e),r.cr()&&Qu(n,e),n.qr.size===0&&(r.cr()?r.lr():ct(n)&&n.Wr.set("Unknown"))}function Ji(t,e){t.Gr.Y(e.targetId),Nt(t).Ir(e)}function Qu(t,e){t.Gr.Y(e),Nt(t).Ar(e)}function Qi(t){t.Gr=new Ym({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Nt(t).start(),t.Wr.Or()}function Zi(t){return ct(t)&&!Nt(t).ar()&&t.qr.size>0}function ct(t){return S(t).Kr.size===0}function Zu(t){t.Gr=void 0}async function Ky(t){t.qr.forEach((e,n)=>{Ji(t,e)})}async function Wy(t,e){Zu(t),Zi(t)?(t.Wr.Lr(e),Qi(t)):t.Wr.set("Unknown")}async function Xy(t,e,n){if(t.Wr.set("Online"),e instanceof Nu&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kr(t,r)}else if(e instanceof qr?t.Gr.rt(e):e instanceof Cu?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(R.min()))try{const r=await Hu(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Gr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.qr.get(c);u&&s.qr.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.qr.get(a);if(!c)return;s.qr.set(a,c.withResumeToken(Q.EMPTY_BYTE_STRING,c.snapshotVersion)),Qu(s,a);const u=new at(c.target,a,1,c.sequenceNumber);Ji(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){w("RemoteStore","Failed to raise snapshot:",r),await Kr(t,r)}}async function Kr(t,e,n){if(!bn(e))throw e;t.Kr.add(1),await Rn(t),t.Wr.set("Offline"),n||(n=()=>Hu(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Gr(t)})}function el(t,e){return e().catch(n=>Kr(t,n,e))}async function Wr(t){const e=S(t),n=$e(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Yy(e);)try{const s=await Ry(e.localStore,r);if(s===null){e.Ur.length===0&&n.lr();break}r=s.batchId,Jy(e,s)}catch(s){await Kr(e,s)}tl(e)&&nl(e)}function Yy(t){return ct(t)&&t.Ur.length<10}function Jy(t,e){t.Ur.push(e);const n=$e(t);n.cr()&&n.br&&n.Pr(e.mutations)}function tl(t){return ct(t)&&!$e(t).ar()&&t.Ur.length>0}function nl(t){$e(t).start()}async function Qy(t){$e(t).Sr()}async function Zy(t){const e=$e(t);for(const n of t.Ur)e.Pr(n.mutations)}async function ev(t,e,n){const r=t.Ur.shift(),s=zi.from(r,e,n);await el(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wr(t)}async function tv(t,e){e&&$e(t).br&&await async function(n,r){if(s=r.code,qm(s)&&s!==f.ABORTED){const i=n.Ur.shift();$e(n).hr(),await el(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Wr(n)}var s}(t,e),tl(t)&&nl(t)}async function nv(t,e){const n=S(t);e?(n.Kr.delete(2),await Gr(n)):e||(n.Kr.add(2),await Rn(n),n.Wr.set("Unknown"))}function Nt(t){return t.zr||(t.zr=function(e,n,r){const s=S(e);return s.Cr(),new jy(n,s.nr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:Ky.bind(null,t),Ci:Wy.bind(null,t),Tr:Xy.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Zi(t)?Qi(t):t.Wr.set("Unknown")):(await t.zr.stop(),Zu(t))})),t.zr}function $e(t){return t.Hr||(t.Hr=function(e,n,r){const s=S(e);return s.Cr(),new qy(n,s.nr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:Qy.bind(null,t),Ci:tv.bind(null,t),Vr:Zy.bind(null,t),vr:ev.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Wr(t)):(await t.Hr.stop(),t.Ur.length>0&&(w("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
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
 */class eo{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new eo(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function to(t,e){if(xe("AsyncQueue",`${e}: ${t}`),bn(t))return new v(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Dt{constructor(e){this.comparator=e?(n,r)=>e(n,r)||I.comparator(n.key,r.key):(n,r)=>I.comparator(n.key,r.key),this.keyedMap=Vi(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new Dt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Dt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class rl{constructor(){this.Jr=new ee(I.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):T():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ot{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ot(e,n,Dt.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rv{constructor(){this.Xr=void 0,this.listeners=[]}}class sv{constructor(){this.queries=new kn(e=>hu(e),Pr),this.onlineState="Unknown",this.Zr=new Set}}async function sl(t,e){const n=S(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new rv),s)try{i.Xr=await n.onListen(r)}catch(o){const a=to(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.eo(n.onlineState),i.Xr&&e.no(i.Xr)&&no(n)}async function il(t,e){const n=S(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function iv(t,e){const n=S(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.no(s)&&(r=!0);o.Xr=s}}r&&no(n)}function ov(t,e,n){const r=S(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function no(t){t.Zr.forEach(e=>{e.next()})}class ol{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ot(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Ot.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
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
 */class al{constructor(e){this.key=e}}class cl{constructor(e){this.key=e}}class av{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=O(),this.mutatedKeys=O(),this.po=du(e),this.Eo=new Dt(this.po)}get To(){return this._o}Io(e,n){const r=n?n.Ao:new rl,s=n?n.Eo:this.Eo;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Dr(this.query)&&s.size===this.query.limit?s.last():null,u=Or(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=Lr(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),b=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let C=!1;d&&p?d.data.isEqual(p.data)?g!==b&&(r.track({type:3,doc:p}),C=!0):this.Ro(d,p)||(r.track({type:2,doc:p}),C=!0,(c&&this.po(p,c)>0||u&&this.po(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),C=!0):d&&!p&&(r.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(p?(o=o.add(p),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),Dr(this.query)||Or(this.query))for(;o.size>this.query.limit;){const l=Dr(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Eo:o,Ao:r,Ln:a,mutatedKeys:i}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return p(h)-p(d)}(u.type,l.type)||this.po(u.doc,l.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,c=a!==this.mo;return this.mo=a,i.length!==0||c?{snapshot:new Ot(this.query,e.Eo,s,i,e.mutatedKeys,a===0,c,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new rl,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=O(),this.Eo.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new cl(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new al(r))}),n}So(e){this._o=e.Gn,this.yo=O();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Ot.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class cv{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uv{constructor(e){this.key=e,this.Co=!1}}class lv{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new kn(a=>hu(a),Pr),this.ko=new Map,this.$o=new Set,this.Oo=new ee(I.comparator),this.Fo=new Map,this.Mo=new Wi,this.Lo={},this.Bo=new Map,this.Uo=Ct.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function hv(t,e){const n=Ev(t);let r,s;const i=n.xo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Do();else{const o=await Cy(n.localStore,st(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await dv(n,e,r,a==="current"),n.isPrimaryClient&&Yu(n.remoteStore,o)}return s}async function dv(t,e,n,r){t.Ko=(l,h,d)=>async function(p,g,b,C){let L=g.view.Io(b);L.Ln&&(L=await zu(p.localStore,g.query,!1).then(({documents:U})=>g.view.Io(U,L)));const ie=C&&C.targetChanges.get(g.targetId),z=g.view.applyChanges(L,p.isPrimaryClient,ie);return pl(p,g.targetId,z.vo),z.snapshot}(t,l,h,d);const s=await zu(t.localStore,e,!0),i=new av(e,s.Gn),o=i.Io(s.documents),a=Sn.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);pl(t,n,c.vo);const u=new cv(e,n,i);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function fv(t,e){const n=S(t),r=n.xo.get(e),s=n.ko.get(r.targetId);if(s.length>1)return n.ko.set(r.targetId,s.filter(i=>!Pr(i,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ki(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ju(n.remoteStore,r.targetId),ro(n,r.targetId)}).catch(An)):(ro(n,r.targetId),await Ki(n.localStore,r.targetId,!0))}async function pv(t,e,n){const r=Iv(t);try{const s=await function(i,o){const a=S(i),c=de.now(),u=o.reduce((h,d)=>h.add(d.key),O());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(d=>{l=d;const p=[];for(const g of o){const b=$m(g,l.get(g.key));b!=null&&p.push(new it(g.key,b,ou(b.value.mapValue),Ve.exists(!0)))}return a.In.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.Lo[i.currentUser.toKey()];c||(c=new ee(N)),c=c.insert(o,a),i.Lo[i.currentUser.toKey()]=c}(r,s.batchId,n),await Cn(r,s.changes),await Wr(r.remoteStore)}catch(s){const i=to(s,"Failed to persist write");n.reject(i)}}async function ul(t,e){const n=S(t);try{const r=await Ay(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fo.get(i);o&&(D(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Co=!0:s.modifiedDocuments.size>0?D(o.Co):s.removedDocuments.size>0&&(D(o.Co),o.Co=!1))}),await Cn(n,r,e)}catch(r){await An(r)}}function ll(t,e,n){const r=S(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xo.forEach((i,o)=>{const a=o.view.eo(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.eo(o)&&(c=!0)}),c&&no(a)}(r.eventManager,e),s.length&&r.No.Tr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gv(t,e,n){const r=S(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fo.get(e),i=s&&s.key;if(i){let o=new ee(I.comparator);o=o.insert(i,Z.newNoDocument(i,R.min()));const a=O().add(i),c=new jr(R.min(),new Map,new Y(N),o,a);await ul(r,c),r.Oo=r.Oo.remove(i),r.Fo.delete(e),so(r)}else await Ki(r.localStore,e,!1).then(()=>ro(r,e,n)).catch(An)}async function mv(t,e){const n=S(t),r=e.batch.batchId;try{const s=await by(n.localStore,e);dl(n,r,null),hl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(n,s)}catch(s){await An(s)}}async function yv(t,e,n){const r=S(t);try{const s=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(l=>(D(l!==null),u=l.keys(),a.In.removeMutationBatch(c,l))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(r.localStore,e);dl(r,e,n),hl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Cn(r,s)}catch(s){await An(s)}}function hl(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function dl(t,e,n){const r=S(t);let s=r.Lo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Lo[r.currentUser.toKey()]=s}}function ro(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||fl(t,r)})}function fl(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(Ju(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),so(t))}function pl(t,e,n){for(const r of n)r instanceof al?(t.Mo.addReference(r.key,e),vv(t,r)):r instanceof cl?(w("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||fl(t,r.key)):T()}function vv(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(w("SyncEngine","New document in limbo: "+n),t.$o.add(r),so(t))}function so(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new I(M.fromString(e)),r=t.Uo.next();t.Fo.set(r,new uv(n)),t.Oo=t.Oo.insert(n,r),Yu(t.remoteStore,new at(st(Ui(n.path)),r,2,ki.T))}}async function Cn(t,e,n){const r=S(t),s=[],i=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,c)=>{o.push(r.Ko(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=Gi.kn(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.No.Tr(s),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Nn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>m.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!bn(l))throw l;w("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Un.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Un=u.Un.insert(h,g)}}}(r.localStore,i))}async function wv(t,e){const n=S(t);if(!n.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const r=await qu(n.localStore,e);n.currentUser=e,function(s,i){s.Bo.forEach(o=>{o.forEach(a=>{a.reject(new v(f.CANCELLED,i))})}),s.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cn(n,r.Wn)}}function _v(t,e){const n=S(t),r=n.Fo.get(e);if(r&&r.Co)return O().add(r.key);{let s=O();const i=n.ko.get(e);if(!i)return s;for(const o of i){const a=n.xo.get(o);s=s.unionWith(a.view.To)}return s}}function Ev(t){const e=S(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ul.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_v.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gv.bind(null,e),e.No.Tr=iv.bind(null,e.eventManager),e.No.jo=ov.bind(null,e.eventManager),e}function Iv(t){const e=S(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yv.bind(null,e),e}class Tv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=zr(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Sy(this.persistence,new Iy,e.initialUser,this.N)}Go(e){return new My(Xi.Ns,this.N)}Wo(e){return new xy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ll(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wv.bind(null,this.syncEngine),await nv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sv}createDatastore(e){const n=zr(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new By(s));var s;return function(i,o,a){return new Hy(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>ll(this.syncEngine,a,0),o=Ku.bt()?new Ku:new Fy,new Gy(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new lv(r,s,i,o,a,c);return u&&(l.qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=S(e);w("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await Rn(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
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
 */class gl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bv{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=Qc.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{w("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=to(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Av(t,e){t.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qu(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Rv(t);w("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=S(i);a.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const c=ct(a);a.Kr.add(3),await Rn(a),c&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Gr(a)}(e.remoteStore,s)),t.onlineComponents=e}async function Rv(t){return t.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await Av(t,new Tv)),t.offlineComponents}async function ml(t){return t.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await kv(t,new Sv)),t.onlineComponents}function Cv(t){return ml(t).then(e=>e.syncEngine)}async function yl(t){const e=await ml(t),n=e.eventManager;return n.onListen=hv.bind(null,e.syncEngine),n.onUnlisten=fv.bind(null,e.syncEngine),n}function Nv(t,e,n={}){const r=new Ae;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new gl({next:h=>{i.enqueueAndForget(()=>il(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new v(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ol(Ui(o.path),u,{includeMetadataChanges:!0,uo:!0});return sl(s,l)}(await yl(t),t.asyncQueue,e,n,r)),r.promise}function Dv(t,e,n={}){const r=new Ae;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new gl({next:h=>{i.enqueueAndForget(()=>il(s,l)),h.fromCache&&a.source==="server"?c.reject(new v(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new ol(o,u,{includeMetadataChanges:!0,uo:!0});return sl(s,l)}(await yl(t),t.asyncQueue,e,n,r)),r.promise}class Ov{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Nn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vl=new Map;/**
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
 */function wl(t,e,n){if(!n)throw new v(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pv(t,e,n,r){if(e===!0&&r===!0)throw new v(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _l(t){if(!I.isDocumentKey(t))throw new v(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function El(t){if(I.isDocumentKey(t))throw new v(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function io(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":T()}function Re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new v(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=io(t);throw new v(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Il{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new v(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Pv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class oo{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1,e instanceof Nn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new v(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(r.options.projectId)}(e))}get app(){if(!this._app)throw new v(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new um;switch(n.type){case"gapi":const r=n.client;return D(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new dm(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(f.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vl.get(e);n&&(w("ComponentProvider","Removing Datastore"),vl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Be(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}}class Xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class Be extends Xr{constructor(e,n,r){super(e,n,Ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new I(e))}withConverter(e){return new Be(this.firestore,e,this._path)}}function Lv(t,e,...n){if(t=B(t),wl("collection","path",e),t instanceof oo){const r=M.fromString(e,...n);return El(r),new Be(t,null,r)}{if(!(t instanceof ue||t instanceof Be))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(M.fromString(e,...n));return El(r),new Be(t.firestore,null,r)}}function ut(t,e,...n){if(t=B(t),arguments.length===1&&(e=Qc.I()),wl("doc","path",e),t instanceof oo){const r=M.fromString(e,...n);return _l(r),new ue(t,null,new I(r))}{if(!(t instanceof ue||t instanceof Be))throw new v(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(M.fromString(e,...n));return _l(r),new ue(t.firestore,t instanceof Be?t.converter:null,new I(r))}}/**
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
 */class Mv{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Wu(this,"async_queue_retry"),this.Ea=()=>{const n=Yi();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=Yi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=Yi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new Ae;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!bn(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{throw this.ma=r,this.ga=!1,xe("INTERNAL UNHANDLED ERROR: ",function(s){let i=s.message||"";return s.stack&&(i=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),i}(r)),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ta(),this.pa.indexOf(e)>-1&&(n=0);const s=eo.createAndSchedule(this,e,n,r,i=>this.Ra(i));return this._a.push(s),s}Ta(){this.ma&&T()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}class Pt extends oo{constructor(e,n){super(e,n),this.type="firestore",this._queue=new Mv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Tl(this),this._firestoreClient.terminate()}}function Uv(t=hs()){return xn(t,"firestore").getImmediate()}function ao(t){return t._firestoreClient||Tl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Tl(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new Ov(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bv(t._credentials,t._queue,r)}/**
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
 */class Yr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new v(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Q.fromBase64String(e))}catch(n){throw new v(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Q.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class co{constructor(e){this._methodName=e}}/**
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
 */class uo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new v(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new v(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
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
 */const xv=/^__.*__$/;class Fv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new it(e,this.data,this.fieldMask,n,this.fieldTransforms):new $r(e,this.data,n,this.fieldTransforms)}}class Sl{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new it(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class lo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Ca({path:r,xa:!1});return s.ka(e),s}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Ca({path:r,xa:!1});return s.Sa(),s}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Zr(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(bl(this.Da)&&xv.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class Vv{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||zr(e)}Ba(e,n,r,s=!1){return new lo({Da:e,methodName:n,La:r,path:ae.emptyPath(),xa:!1,Ma:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Al(t){const e=t._freezeSettings(),n=zr(t._databaseId);return new Vv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $v(t,e,n,r,s,i={}){const o=t.Ba(i.merge||i.mergeFields?2:0,e,n,s);ho("Data must be an object, but it was:",o,r);const a=kl(r,o);let c,u;if(i.merge)c=new mn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=fo(e,h,n);if(!o.contains(d))throw new v(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Cl(l,d)||l.push(d)}c=new mn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Fv(new fe(a),c,u)}class Jr extends co{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jr}}function Bv(t,e,n,r){const s=t.Ba(1,e,n);ho("Data must be an object, but it was:",s,r);const i=[],o=fe.empty();nt(r,(c,u)=>{const l=po(e,c,n);u=B(u);const h=s.$a(l);if(u instanceof Jr)i.push(l);else{const d=Qr(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new mn(i);return new Sl(o,a,s.fieldTransforms)}function jv(t,e,n,r,s,i){const o=t.Ba(1,e,n),a=[fo(e,r,n)],c=[s];if(i.length%2!=0)throw new v(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(fo(e,i[d])),c.push(i[d+1]);const u=[],l=fe.empty();for(let d=a.length-1;d>=0;--d)if(!Cl(u,a[d])){const p=a[d];let g=c[d];g=B(g);const b=o.$a(p);if(g instanceof Jr)u.push(p);else{const C=Qr(g,b);C!=null&&(u.push(p),l.set(p,C))}}const h=new mn(u);return new Sl(l,h,o.fieldTransforms)}function Qr(t,e){if(Rl(t=B(t)))return ho("Unsupported field value:",e,t),kl(t,e);if(t instanceof co)return function(n,r){if(!bl(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Qr(o,r.Oa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Lm(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=de.fromDate(n);return{timestampValue:Hr(r.N,s)}}if(n instanceof de){const s=new de(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Hr(r.N,s)}}if(n instanceof uo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lt)return{bytesValue:Lu(r.N,n._byteString)};if(n instanceof ue){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$i(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${io(n)}`)}(t,e)}function kl(t,e){const n={};return eu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):nt(t,(r,s)=>{const i=Qr(s,e.Na(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Rl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof uo||t instanceof Lt||t instanceof ue||t instanceof co)}function ho(t,e,n){if(!Rl(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=io(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function fo(t,e,n){if((e=B(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return po(t,e);throw Zr("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const qv=new RegExp("[~\\*/\\[\\]]");function po(t,e,n){if(e.search(qv)>=0)throw Zr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yr(...e.split("."))._internalPath}catch(r){throw Zr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zr(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new v(f.INVALID_ARGUMENT,a+t+c)}function Cl(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Nl{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hv extends Nl{data(){return super.data()}}function Dl(t,e){return typeof e=="string"?po(t,e):e instanceof Yr?e._internalPath:e._delegate._internalPath}/**
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
 */class Dn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ol extends Nl{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new es(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class es extends Ol{data(e={}){return super.data(e)}}class zv{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Dn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new es(this._firestore,this._userDataWriter,r.key,r,new Dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new es(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Dn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new es(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Dn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:Gv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Gv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
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
 */function Kv(t){if(Or(t)&&t.explicitOrderBy.length===0)throw new v(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class Wv{convertValue(e,n="none"){switch(rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return V(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw T()}}convertObject(e,n){const r={};return nt(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new uo(V(e.latitude),V(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yn(e));default:return null}}convertTimestamp(e){const n=Fe(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=M.fromString(e);D(Bu(r));const s=new Nn(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(n)||xe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Xv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */function Pl(t){t=Re(t,ue);const e=Re(t.firestore,Pt);return Nv(ao(e),t._key).then(n=>Qv(e,t,n))}class Ll extends Wv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,n)}}function Yv(t){t=Re(t,Xr);const e=Re(t.firestore,Pt),n=ao(e),r=new Ll(e);return Kv(t._query),Dv(n,t._query).then(s=>new zv(e,r,t,s))}function Ml(t,e,n){t=Re(t,ue);const r=Re(t.firestore,Pt),s=Xv(t.converter,e,n);return go(r,[$v(Al(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ve.none())])}function Ul(t,e,n,...r){t=Re(t,ue);const s=Re(t.firestore,Pt),i=Al(s);let o;return o=typeof(e=B(e))=="string"||e instanceof Yr?jv(i,"updateDoc",t._key,e,n,r):Bv(i,"updateDoc",t._key,e),go(s,[o.toMutation(t._key,Ve.exists(!0))])}function Jv(t){return go(Re(t.firestore,Pt),[new bu(t._key,Ve.none())])}function go(t,e){return function(n,r){const s=new Ae;return n.asyncQueue.enqueueAndForget(async()=>pv(await Cv(n),r,s)),s.promise}(ao(t),e)}function Qv(t,e,n){const r=n.docs.get(e._key),s=new Ll(t);return new Ol(t,s,e._key,r,new Dn(n.hasPendingWrites,n.fromCache),e.converter)}var Zv;(function(t){It=t})(ht),lt(new He("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Pt(n,new lm(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),$t("@firebase/firestore","3.1.0",Zv);const ew=zh(jf),je=Uv(),ts=Qp(ew),mo=Bf();er(ts,"posts");function sw(){let t;return ss.subscribe(e=>{t=e}),Rd(mo,e=>{e?(ss.set(e),t=e):(ss.set(null),t=null)}),t}function iw(t,e){kd(mo,t,e).then(n=>{typeof window!="undefined"&&window.location.reload()}).catch(n=>{console.log(n)})}function ow(){let t;return Cd(mo).then(e=>{t=e,typeof window!="undefined"&&window.location.reload()}).catch(e=>t=e),console.log(t,"result"),t}async function aw(){const t=[];return(await Yv(Lv(je,"posts"))).forEach(n=>{t.push({id:n.id,data:n.data()})}),t}async function cw(t,e){const n=new Date,r=`post-${n.getMonth()+1}${n.getDate()}${n.getFullYear()}${n.getUTCHours()}${n.getUTCMinutes()}`,s=er(ts,`posts/${r}`);try{return await Ml(ut(je,"posts",r),rs(Pn({},t),{imgSrc:`posts/${r}`})),await yo(e,s),!0}catch(i){return i}}async function yo(t,e){console.log(e.name,e.bucket),Yp(e,t).then(n=>{console.log(n)}).catch(n=>console.log(n))}async function uw(t){let e;return await Jp(er(ts,t)).then(n=>{e=n}),e}async function lw(t){try{return await Jv(ut(je,"posts",t)),!0}catch(e){return!1}}async function hw(t,e){const n=ut(je,"posts",t);try{return await Ul(n,{featured:!e}),!0}catch(r){return r}}async function dw(t){const e=ut(je,"posts",t);try{const n=await Pl(e);return{id:n.id,data:n.data()}}catch(n){return n}}async function fw(t,e,n){const r=ut(je,"posts",t);try{return await Ul(r,Pn({},e)),await yo(n,t),!0}catch(s){return s}}async function pw(t,e){const n=new Date,r=`user-${n.getMonth()+1}${n.getDate()}${n.getFullYear()}${n.getUTCHours()}${n.getUTCMinutes()}`,s=er(ts,`admin/${r}`);try{return await Ml(ut(je,"user","admin"),rs(Pn({},t),{imgSrc:`admin/${r}`})),await yo(e,s),!0}catch(i){return i}}async function gw(){const t=ut(je,"user","admin");try{const e=await Pl(t);return{id:e.id,data:e.data()}}catch(e){return e}}export{lw as deletePost,uw as getImageUrl,dw as getPost,aw as getPosts,gw as getProfile,iw as loginAdmin,hw as makeFeatured,cw as submitPost,fw as updatePost,pw as updateUserProfile,yo as uploadImage,sw as useAuthListener,ow as userSignout};
