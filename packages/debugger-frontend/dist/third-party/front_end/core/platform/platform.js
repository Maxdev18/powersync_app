function e(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function t(r,n,o,i,s,a){if(i<=o)return;const l=function(t,r,n,o,i){const s=t[i];e(t,o,i);let a=n;for(let i=n;i<o;++i)r(t[i],s)<0&&(e(t,a,i),++a);return e(t,o,a),a}(r,n,o,i,Math.floor(Math.random()*(i-o))+o);s<l&&t(r,n,o,l-1,s,a),l<a&&t(r,n,l+1,i,s,a)}function r(e,t,r,n){const o=[];let i=0,s=0;for(;i<e.length&&s<t.length;){const a=r(e[i],t[s]);!n&&a||o.push(a<=0?e[i]:t[s]),a<=0&&i++,a>=0&&s++}if(n){for(;i<e.length;)o.push(e[i++]);for(;s<t.length;)o.push(t[s++])}return o}function n(e,t,r,n,o){let i=n||0,s=void 0!==o?o:e.length;for(;i<s;){const n=i+s>>1;r(t,e[n])>0?i=n+1:s=n}return s}function o(e,t,r){const n="END"===r;if(0===e.length)return null;let o=0,i=e.length-1,s=0,a=!1,l=!1,u=0;do{u=o+(i-o)/2,s=n?Math.ceil(u):Math.floor(u),a=t(e[s]),l=a===n,l?o=Math.min(i,s+(o===s?1:0)):i=Math.max(o,s+(i===s?-1:0))}while(i!==o);return t(e[o])?o:null}var i=Object.freeze({__proto__:null,removeElement:(e,t,r)=>{let n=e.indexOf(t);if(-1===n)return!1;if(r)return e.splice(n,1),!0;for(let r=n+1,o=e.length;r<o;++r)e[r]!==t&&(e[n++]=e[r]);return e.length=n,!0},sortRange:function(e,r,n,o,i,s){return 0===n&&o===e.length-1&&0===i&&s>=o?e.sort(r):t(e,r,n,o,i,s),e},binaryIndexOf:(e,t,r)=>{const o=n(e,t,r);return o<e.length&&0===r(t,e[o])?o:-1},intersectOrdered:(e,t,n)=>r(e,t,n,!1),mergeOrdered:(e,t,n)=>r(e,t,n,!0),DEFAULT_COMPARATOR:(e,t)=>e<t?-1:e>t?1:0,lowerBound:n,upperBound:function(e,t,r,n,o){let i=n||0,s=void 0!==o?o:e.length;for(;i<s;){const n=i+s>>1;r(t,e[n])>=0?i=n+1:s=n}return s},nearestIndexFromBeginning:function(e,t){return o(e,t,"BEGINNING")},nearestIndexFromEnd:function(e,t){return o(e,t,"END")},arrayDoesNotContainNullOrUndefined:function(e){return!e.includes(null)&&!e.includes(void 0)}}),s=Object.freeze({__proto__:null});var a=Object.freeze({__proto__:null,isValid:e=>!isNaN(e.getTime()),toISO8601Compact:e=>{function t(e){return(e>9?"":"0")+e}return e.getFullYear()+t(e.getMonth()+1)+t(e.getDate())+"T"+t(e.getHours())+t(e.getMinutes())+t(e.getSeconds())}});var l=Object.freeze({__proto__:null,EmptyUrlString:"",EmptyRawPathString:"",EmptyEncodedPathString:""});var u=Object.freeze({__proto__:null,deepActiveElement:function(e){let t=e.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t},getEnclosingShadowRootForNode:function(e){let t=e.parentNodeOrShadowHost();for(;t;){if(t instanceof ShadowRoot)return t;t=t.parentNodeOrShadowHost()}return null},rangeOfWord:function(e,t,r,n,o){let i,s,a=0,l=0;if(n||(n=e),o&&"backward"!==o&&"both"!==o)i=e,a=t;else{let o=e;for(;o;){if(o===n){i||(i=n);break}if(o.nodeType===Node.TEXT_NODE&&null!==o.nodeValue){for(let n=o===e?t-1:o.nodeValue.length-1;n>=0;--n)if(-1!==r.indexOf(o.nodeValue[n])){i=o,a=n+1;break}}if(i)break;o=o.traversePreviousNode(n)}i||(i=n,a=0)}if(o&&"forward"!==o&&"both"!==o)s=e,l=t;else{let o=e;for(;o;){if(o===n){s||(s=n);break}if(o.nodeType===Node.TEXT_NODE&&null!==o.nodeValue){for(let n=o===e?t:0;n<o.nodeValue.length;++n)if(-1!==r.indexOf(o.nodeValue[n])){s=o,l=n;break}}if(s)break;o=o.traverseNextNode(n)}s||(s=n,l=n.nodeType===Node.TEXT_NODE?n.nodeValue?.length||0:n.childNodes.length)}if(!e.ownerDocument)throw new Error("No `ownerDocument` found for rootNode");const u=e.ownerDocument.createRange();return u.setStart(i,a),u.setEnd(s,l),u}});const c=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);var f=Object.freeze({__proto__:null,ENTER_KEY:"Enter",ESCAPE_KEY:"Escape",TAB_KEY:"Tab",ARROW_KEYS:c,keyIsArrowKey:function(e){return c.has(e)},isEscKey:function(e){return"Escape"===e.key},isEnterOrSpaceKey:function(e){return"Enter"===e.key||" "===e.key}});class d{map=new Map;set(e,t){let r=this.map.get(e);r||(r=new Set,this.map.set(e,r)),r.add(t)}get(e){return this.map.get(e)||new Set}has(e){return this.map.has(e)}hasValue(e,t){const r=this.map.get(e);return!!r&&r.has(t)}get size(){return this.map.size}delete(e,t){const r=this.get(e);if(!r)return!1;const n=r.delete(t);return r.size||this.map.delete(e),n}deleteAll(e){this.map.delete(e)}keysArray(){return[...this.map.keys()]}valuesArray(){const e=[];for(const t of this.map.values())e.push(...t.values());return e}clear(){this.map.clear()}}var h=Object.freeze({__proto__:null,inverse:function(e){const t=new d;for(const[r,n]of e.entries())t.set(n,r);return t},Multimap:d,getWithDefault:function(e,t,r){let n=e.get(t);return n||(n=r(t),e.set(t,n)),n}});const p=new Set(["application/ecmascript","application/javascript","application/json","application/vnd.dart","application/xml","application/x-aspx","application/x-javascript","application/x-jsp","application/x-httpd-php"]);function g(e,t,r=0){for(let n=r;n<e.length;n++)if(t.includes(e[n]))return n;return-1}function m(e,t,r=0){for(let n=r;n<e.length;n++)if(!t.includes(e[n]))return n;return-1}var b=Object.freeze({__proto__:null,isTextType:function(e){return e.startsWith("text/")||e.endsWith("+json")||e.endsWith("+xml")||p.has(e)},parseContentType:function(e){if("*/*"===e)return{mimeType:null,charset:null};const{mimeType:t,params:r}=function(e){e=e.trim();let t=g(e," \t;(");t<0&&(t=e.length);const r=e.indexOf("/");if(r<0||r>t)return{mimeType:null,params:new Map};const n=e.substring(0,t).toLowerCase(),o=new Map;let i=e.indexOf(";",t);for(;i>=0&&i<e.length;){if(++i,i=m(e," \t",i),i<0)continue;const t=i;if(i=g(e,";=",i),i<0||";"===e[i])continue;const r=e.substring(t,i).toLowerCase();++i,i=m(e," \t",i);let n="";if(!(i<0||";"===e[i])){if('"'!==e[i]){const t=i;i=e.indexOf(";",i);const r=i>=0?i:e.length;n=e.substring(t,r).trimEnd()}else{for(++i;i<e.length&&'"'!==e[i];)"\\"===e[i]&&i+1<e.length&&++i,n+=e[i],++i;i=e.indexOf(";",i)}o.has(r)||o.set(r,n)}}return{mimeType:n,params:o}}(e);return{mimeType:t,charset:r.get("charset")?.toLowerCase().trim()??null}}});const _=(e,t)=>{for(e=Math.round(e),t=Math.round(t);0!==t;){const r=t;t=e%t,e=r}return e},x=new Map([["8∶5","16∶10"]]);var w=Object.freeze({__proto__:null,clamp:(e,t,r)=>{let n=e;return e<t?n=t:e>r&&(n=r),n},mod:(e,t)=>(e%t+t)%t,bytesToString:e=>{if(e<1e3)return`${e.toFixed(0)} B`;const t=e/1e3;if(t<100)return`${t.toFixed(1)} kB`;if(t<1e3)return`${t.toFixed(0)} kB`;const r=t/1e3;return r<100?`${r.toFixed(1)} MB`:`${r.toFixed(0)} MB`},toFixedIfFloating:e=>{if(!e||Number.isNaN(Number(e)))return e;const t=Number(e);return t%1?t.toFixed(3):String(t)},floor:(e,t=0)=>{const r=Math.pow(10,t);return Math.floor(e*r)/r},greatestCommonDivisor:_,aspectRatio:(e,t)=>{const r=_(e,t);0!==r&&(e/=r,t/=r);const n=`${e}∶${t}`;return x.get(n)||n},withThousandsSeparator:function(e){let t=String(e);const r=/(\d+)(\d{3})/;for(;t.match(r);)t=t.replace(r,"$1 $2");return t}});var E=Object.freeze({__proto__:null,promiseWithResolvers:function(){let e,t;return{promise:new Promise(((r,n)=>{e=r,t=n})),resolve:e,reject:t}}});var S=Object.freeze({__proto__:null,addAll:function(e,t){for(const r of t)e.add(r)},isEqual:function(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}});const N=(e,t)=>{let r=!1;for(let n=0;n<t.length;++n)if(-1!==e.indexOf(t.charAt(n))){r=!0;break}if(!r)return String(e);let n="";for(let r=0;r<e.length;++r)-1!==t.indexOf(e.charAt(r))&&(n+="\\"),n+=e.charAt(r);return n},O=(e,t)=>e.toString(16).toUpperCase().padStart(t,"0"),v=new Map([["\b","\\b"],["\f","\\f"],["\n","\\n"],["\r","\\r"],["\t","\\t"],["\v","\\v"],["'","\\'"],["\\","\\\\"],["\x3c!--","\\x3C!--"],["<script","\\x3Cscript"],["</script","\\x3C/script"]]),C=(e,t)=>{const r=[];let n=e.indexOf(t);for(;-1!==n;)r.push(n),n=e.indexOf(t,n+t.length);return r},A=/^([a-z0-9]+(?:-[a-z0-9]+)*\.)*[a-z0-9]+(?:-[a-z0-9]+)*$/,T="^[]{}()\\.^$*+?|-,",y=function(){return T},z=function(e,t){let r="";for(let t=0;t<e.length;++t){const n=e.charAt(t);-1!==y().indexOf(n)&&(r+="\\"),r+=n}return new RegExp(r,t||"")};const R=/[A-Z]{2,}(?=[A-Z0-9][a-z0-9]+|\b|_)|[A-Za-z][0-9]+[a-z]|[A-Z]?[a-z]+|[0-9][A-Za-z]+|[A-Z]|[0-9]+|[.]/g,M=function(e){return e.match?.(R)?.map((e=>e.toLowerCase())).join("-").replaceAll("-.-",".")||e};var j=Object.freeze({__proto__:null,escapeCharacters:N,formatAsJSLiteral:e=>{const t=/(\\|<(?:!--|\/?script))|(\p{Control})|(\p{Surrogate})/gu,r=/(\\|'|<(?:!--|\/?script))|(\p{Control})|(\p{Surrogate})/gu,n=(e,t,r,n)=>{if(r){if(v.has(r))return v.get(r);return"\\x"+O(r.charCodeAt(0),2)}if(n){return"\\u"+O(n.charCodeAt(0),4)}return t?v.get(t)||"":e};let o="",i="";return e.includes("'")?e.includes('"')?e.includes("`")||e.includes("${")?(i="'",o=e.replaceAll(r,n)):(i="`",o=e.replaceAll(t,n)):(i='"',o=e.replaceAll(t,n)):(i="'",o=e.replaceAll(t,n)),`${i}${o}${i}`},sprintf:(e,...t)=>{let r=0;return e.replaceAll(/%(?:(\d+)\$)?(?:\.(\d*))?([%dfs])/g,((e,n,o,i)=>{if("%"===i)return"%";if(void 0!==n&&(r=parseInt(n,10)-1,r<0))throw new RangeError(`Invalid parameter index ${r+1}`);if(r>=t.length)throw new RangeError(`Expected at least ${r+1} format parameters, but only ${t.length} where given.`);if("s"===i){const e=String(t[r++]);return void 0!==o?e.substring(0,Number(o)):e}let s=Number(t[r++]);return isNaN(s)&&(s=0),"d"===i?String(Math.floor(s)).padStart(Number(o),"0"):void 0!==o?s.toFixed(Number(o)):String(s)}))},toBase64:e=>{function t(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}const r=(new TextEncoder).encode(e.toString()),n=r.length;let o,i="";if(0===n)return i;let s=0;for(let e=0;e<n;e++)o=e%3,s|=r[e]<<(16>>>o&24),2===o&&(i+=String.fromCharCode(t(s>>>18&63),t(s>>>12&63),t(s>>>6&63),t(63&s)),s=0);return 0===o?i+=String.fromCharCode(t(s>>>18&63),t(s>>>12&63),61,61):1===o&&(i+=String.fromCharCode(t(s>>>18&63),t(s>>>12&63),t(s>>>6&63),61)),i},findIndexesOfSubString:C,findLineEndingIndexes:e=>{const t=C(e,"\n");return t.push(e.length),t},isWhitespace:e=>/^\s*$/.test(e),trimURL:(e,t)=>{let r=e.replace(/^(https|http|file):\/\//i,"");return t&&r.toLowerCase().startsWith(t.toLowerCase())&&(r=r.substr(t.length)),r},collapseWhitespace:e=>e.replace(/[\s\xA0]+/g," "),reverse:e=>e.split("").reverse().join(""),replaceControlCharacters:e=>e.replace(/[\0-\x08\x0B\f\x0E-\x1F\x80-\x9F]/g,"�"),countWtf8Bytes:e=>{let t=0;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(n<=127)t++;else if(n<=2047)t+=2;else if(n<55296||57343<n)t+=3;else{if(n<=56319&&r+1<e.length){const n=e.charCodeAt(r+1);if(56320<=n&&n<=57343){t+=4,r++;continue}}t+=3}}return t},stripLineBreaks:e=>e.replace(/(\r)?\n/g,""),isExtendedKebabCase:e=>A.test(e),toTitleCase:e=>e.substring(0,1).toUpperCase()+e.substring(1),removeURLFragment:e=>{const t=new URL(e);return t.hash="",t.toString()},regexSpecialCharacters:y,filterRegex:function(e){let t="^(?:.*\\0)?";for(let r=0;r<e.length;++r){let n=e.charAt(r);-1!==T.indexOf(n)&&(n="\\"+n),t+="[^\\0"+n+"]*"+n}return new RegExp(t,"i")},createSearchRegex:function(e,t,r,n=!1){const o=t?"g":"gi";let i;if(r)try{i=new RegExp(e,o)}catch(e){}return i||(i=z(e,o)),n&&i&&(i=new RegExp(`\\b${i.source}\\b`,o)),i},caseInsensetiveComparator:function(e,t){return(e=e.toUpperCase())===(t=t.toUpperCase())?0:e>t?1:-1},hashCode:function(e){if(!e)return 0;const t=4294967291;let r=0,n=1;for(let o=0;o<e.length;o++){r=(r+n*(1506996573*e.charCodeAt(o)))%t,n=1345575271*n%t}return r=(r+n*(t-1))%t,Math.abs(0|r)},compare:(e,t)=>e>t?1:e<t?-1:0,trimMiddle:(e,t)=>{if(e.length<=t)return String(e);let r=t>>1,n=t-r-1;return e.codePointAt(e.length-n-1)>=65536&&(--n,++r),r>0&&e.codePointAt(r-1)>=65536&&--r,e.substr(0,r)+"…"+e.substr(e.length-n,n)},trimEndWithMaxLength:(e,t)=>e.length<=t?String(e):e.substr(0,t-1)+"…",escapeForRegExp:e=>N(e,T),naturalOrderComparator:(e,t)=>{const r=/^\d+|^\D+/;let n,o,i,s;for(;;){if(!e)return t?-1:0;if(!t)return 1;if(n=e.match(r)[0],o=t.match(r)[0],i=!Number.isNaN(Number(n)),s=!Number.isNaN(Number(o)),i&&!s)return-1;if(s&&!i)return 1;if(i&&s){const e=Number(n)-Number(o);if(e)return e;if(n.length!==o.length)return Number(n)||Number(o)?o.length-n.length:n.length-o.length}else if(n!==o)return n<o?-1:1;e=e.substring(n.length),t=t.substring(o.length)}},base64ToSize:function(e){if(!e)return 0;let t=3*e.length/4;return"="===e[e.length-1]&&t--,e.length>1&&"="===e[e.length-2]&&t--,t},SINGLE_QUOTE:"'",DOUBLE_QUOTE:'"',findUnclosedCssQuote:function(e){let t="";for(let r=0;r<e.length;++r){const n=e[r];"\\"!==n?"'"!==n&&'"'!==n||(t===n?t="":""===t&&(t=n)):r++}return t},countUnmatchedLeftParentheses:e=>{let t=0;for(const r of e)"("===r?t++:")"===r&&t>0&&t--;return t},createPlainTextSearchRegex:z,toLowerCaseString:function(e){return e.toLowerCase()},toKebabCase:M,toKebabCaseKeys:function(e){const t={};for(const[r,n]of Object.entries(e))t[M(r)]=n;return t},replaceLast:function(e,t,r){const n=e.lastIndexOf(t);return-1===n?e:e.slice(0,n)+e.slice(n).replace(t,r)},stringifyWithPrecision:function(e,t=2){if(0===t)return e.toFixed(0);const r=e.toFixed(t).replace(/\.?0*$/,"");return"-0"===r?"0":r},concatBase64:function(e,t){if(0===e.length||!e.endsWith("="))return e+t;const r=e.substring(0,e.length-4),n=e.substring(e.length-4);return r+window.btoa(window.atob(n)+window.atob(t))}});var $=Object.freeze({__proto__:null,secondsToMilliSeconds:function(e){return 1e3*e},milliSecondsToSeconds:function(e){return e/1e3},microSecondsToMilliSeconds:function(e){return e/1e3}});function L(e,t){if(null==e)throw new Error(`Expected given value to not be null/undefined but it was: ${e}${t?`\n${t}`:""}`)}function U(e,t){throw new Error(t)}function F(e){return e}var k=Object.freeze({__proto__:null,assertNotNullOrUndefined:L,assertNever:U,assertUnhandled:F});var B=Object.freeze({__proto__:null,LocalizedEmptyString:""});class D extends Error{message;constructor(e){super(e),this.message=e}}var I=Object.freeze({__proto__:null,UserVisibleError:D,isUserVisibleError:function(e){return"object"==typeof e&&null!==e&&e instanceof D}});export{i as ArrayUtilities,s as Brand,u as DOMUtilities,a as DateUtilities,l as DevToolsPath,f as KeyboardUtilities,h as MapUtilities,b as MimeType,w as NumberUtilities,E as PromiseUtilities,S as SetUtilities,j as StringUtilities,$ as Timing,k as TypeScriptUtilities,B as UIString,I as UserVisibleError,U as assertNever,L as assertNotNullOrUndefined,F as assertUnhandled};