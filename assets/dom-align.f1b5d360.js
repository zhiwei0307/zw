function t(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function e(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var r,i={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function a(){if(void 0!==r)return r;r="";var t=document.createElement("p").style;for(var e in i)e+"Transform"in t&&(r=e);return r}function f(){return a()?"".concat(a(),"TransitionProperty"):"transitionProperty"}function l(){return a()?"".concat(a(),"Transform"):"transform"}function u(t,e){var o=f();o&&(t.style[o]=e,"transitionProperty"!==o&&(t.style.transitionProperty=e))}function c(t,e){var o=l();o&&(t.style[o]=e,"transform"!==o&&(t.style.transform=e))}var s,p=/matrix\((.*)\)/,d=/matrix3d\((.*)\)/;function h(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function g(t,e,n){var r=n;if("object"!==o(e))return void 0!==r?("number"==typeof r&&(r="".concat(r,"px")),void(t.style[e]=r)):s(t,e);for(var i in e)e.hasOwnProperty(i)&&g(t,i,e[i])}function m(t,e){var o=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!=typeof o){var r=t.document;"number"!=typeof(o=r.documentElement[n])&&(o=r.body[n])}return o}function v(t){return m(t)}function y(t){return m(t,!0)}function w(t){var e=function(t){var e,o,n,r=t.ownerDocument,i=r.body,a=r&&r.documentElement;return o=(e=t.getBoundingClientRect()).left,n=e.top,{left:o-=a.clientLeft||i.clientLeft||0,top:n-=a.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,n=o.defaultView||o.parentWindow;return e.left+=v(n),e.top+=y(n),e}function b(t){return null!=t&&t==t.window}function x(t){return b(t)?t.document:9===t.nodeType?t:t.ownerDocument}var W=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),S=/^(top|right|bottom|left)$/;function O(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function P(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function j(t,e,o){"static"===g(t,"position")&&(t.style.position="relative");var n=-999,r=-999,i=O("left",o),a=O("top",o),l=P(i),c=P(a);"left"!==i&&(n=999),"top"!==a&&(r=999);var s,p="",d=w(t);("left"in e||"top"in e)&&(p=(s=t).style.transitionProperty||s.style[f()]||"",u(t,"none")),"left"in e&&(t.style[l]="",t.style[i]="".concat(n,"px")),"top"in e&&(t.style[c]="",t.style[a]="".concat(r,"px")),h(t);var m=w(t),v={};for(var y in e)if(e.hasOwnProperty(y)){var b=O(y,o),x="left"===y?n:r,W=d[y]-m[y];v[b]=b===y?x+W:x-W}g(t,v),h(t),("left"in e||"top"in e)&&u(t,p);var S={};for(var j in e)if(e.hasOwnProperty(j)){var T=O(j,o),C=e[j]-d[j];S[T]=j===T?v[T]+C:v[T]-C}g(t,S)}function T(t,e){var o=w(t),n=function(t){var e=window.getComputedStyle(t,null),o=e.getPropertyValue("transform")||e.getPropertyValue(l());if(o&&"none"!==o){var n=o.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),r={x:n.x,y:n.y};"left"in e&&(r.x=n.x+e.left-o.left),"top"in e&&(r.y=n.y+e.top-o.top),function(t,e){var o=window.getComputedStyle(t,null),n=o.getPropertyValue("transform")||o.getPropertyValue(l());if(n&&"none"!==n){var r,i=n.match(p);i?((r=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,r[5]=e.y,c(t,"matrix(".concat(r.join(","),")"))):((r=n.match(d)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,r[13]=e.y,c(t,"matrix3d(".concat(r.join(","),")")))}else c(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,r)}function C(t,e){for(var o=0;o<t.length;o++)e(t[o])}function M(t){return"border-box"===s(t,"boxSizing")}"undefined"!=typeof window&&(s=window.getComputedStyle?function(t,e,o){var n=o,r="",i=x(t);return(n=n||i.defaultView.getComputedStyle(t,null))&&(r=n.getPropertyValue(e)||n[e]),r}:function(t,e){var o=t.currentStyle&&t.currentStyle[e];if(W.test(o)&&!S.test(e)){var n=t.style,r=n.left,i=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,n.left="fontSize"===e?"1em":o||0,o=n.pixelLeft+"px",n.left=r,t.runtimeStyle.left=i}return""===o?"auto":o});var D=["margin","border","padding"];function H(t,e,o){var n,r={},i=t.style;for(n in e)e.hasOwnProperty(n)&&(r[n]=i[n],i[n]=e[n]);for(n in o.call(t),e)e.hasOwnProperty(n)&&(i[n]=r[n])}function V(t,e,o){var n,r,i,a=0;for(r=0;r<e.length;r++)if(n=e[r])for(i=0;i<o.length;i++){var f=void 0;f="border"===n?"".concat(n).concat(o[i],"Width"):n+o[i],a+=parseFloat(s(t,f))||0}return a}var X={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function Y(t,e,o){var n=o;if(b(t))return"width"===e?X.viewportWidth(t):X.viewportHeight(t);if(9===t.nodeType)return"width"===e?X.docWidth(t):X.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?t.getBoundingClientRect().width:t.getBoundingClientRect().height,a=M(t),f=0;(null==i||i<=0)&&(i=void 0,(null==(f=s(t,e))||Number(f)<0)&&(f=t.style[e]||0),f=parseFloat(f)||0),void 0===n&&(n=a?1:-1);var l=void 0!==i||a,u=i||f;return-1===n?l?u-V(t,["border","padding"],r):f:l?1===n?u:u+(2===n?-V(t,["border"],r):V(t,["margin"],r)):f+V(t,D.slice(n),r)}C(["Width","Height"],(function(t){X["doc".concat(t)]=function(e){var o=e.document;return Math.max(o.documentElement["scroll".concat(t)],o.body["scroll".concat(t)],X["viewport".concat(t)](o))},X["viewport".concat(t)]=function(e){var o="client".concat(t),n=e.document,r=n.body,i=n.documentElement[o];return"CSS1Compat"===n.compatMode&&i||r&&r[o]||i}}));var E={position:"absolute",visibility:"hidden",display:"block"};function L(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var n,r=e[0];return 0!==r.offsetWidth?n=Y.apply(void 0,e):H(r,E,(function(){n=Y.apply(void 0,e)})),n}function B(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t}C(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);X["outer".concat(e)]=function(e,o){return e&&L(e,t,o?0:1)};var o="width"===t?["Left","Right"]:["Top","Bottom"];X[t]=function(e,n){var r=n;return void 0!==r?e?(M(e)&&(r+=V(e,["padding","border"],o)),g(e,t,r)):void 0:e&&L(e,t,-1)}}));var F={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:x,offset:function(t,e,o){if(void 0===e)return w(t);!function(t,e,o){if(o.ignoreShake){var n=w(t),r=n.left.toFixed(0),i=n.top.toFixed(0),a=e.left.toFixed(0),f=e.top.toFixed(0);if(r===a&&i===f)return}o.useCssRight||o.useCssBottom?j(t,e,o):o.useCssTransform&&l()in document.body.style?T(t,e):j(t,e,o)}(t,e,o||{})},isWindow:b,each:C,css:g,clone:function(t){var e,o={};for(e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},mix:B,getWindowScrollLeft:function(t){return v(t)},getWindowScrollTop:function(t){return y(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)F.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};B(F,X);var R=F.getParent;function k(t){if(F.isWindow(t)||9===t.nodeType)return null;var e,o=F.getDocument(t).body,n=F.css(t,"position");if(!("fixed"===n||"absolute"===n))return"html"===t.nodeName.toLowerCase()?null:R(t);for(e=R(t);e&&e!==o&&9!==e.nodeType;e=R(e))if("static"!==(n=F.css(e,"position")))return e;return null}var z=F.getParent;function A(t,e){for(var o={left:0,right:1/0,top:0,bottom:1/0},n=k(t),r=F.getDocument(t),i=r.defaultView||r.parentWindow,a=r.body,f=r.documentElement;n;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||n===a||n===f||"visible"===F.css(n,"overflow")){if(n===a||n===f)break}else{var l=F.offset(n);l.left+=n.clientLeft,l.top+=n.clientTop,o.top=Math.max(o.top,l.top),o.right=Math.min(o.right,l.left+n.clientWidth),o.bottom=Math.min(o.bottom,l.top+n.clientHeight),o.left=Math.max(o.left,l.left)}n=k(n)}var u=null;F.isWindow(t)||9===t.nodeType||(u=t.style.position,"absolute"===F.css(t,"position")&&(t.style.position="fixed"));var c=F.getWindowScrollLeft(i),s=F.getWindowScrollTop(i),p=F.viewportWidth(i),d=F.viewportHeight(i),h=f.scrollWidth,g=f.scrollHeight,m=window.getComputedStyle(a);if("hidden"===m.overflowX&&(h=i.innerWidth),"hidden"===m.overflowY&&(g=i.innerHeight),t.style&&(t.style.position=u),e||function(t){if(F.isWindow(t)||9===t.nodeType)return!1;var e=F.getDocument(t),o=e.body,n=null;for(n=z(t);n&&n!==o&&n!==e;n=z(n))if("fixed"===F.css(n,"position"))return!0;return!1}(t))o.left=Math.max(o.left,c),o.top=Math.max(o.top,s),o.right=Math.min(o.right,c+p),o.bottom=Math.min(o.bottom,s+d);else{var v=Math.max(h,c+p);o.right=Math.min(o.right,v);var y=Math.max(g,s+d);o.bottom=Math.min(o.bottom,y)}return o.top>=0&&o.left>=0&&o.bottom>o.top&&o.right>o.left?o:null}function _(t){var e,o,n;if(F.isWindow(t)||9===t.nodeType){var r=F.getWindow(t);e={left:F.getWindowScrollLeft(r),top:F.getWindowScrollTop(r)},o=F.viewportWidth(r),n=F.viewportHeight(r)}else e=F.offset(t),o=F.outerWidth(t),n=F.outerHeight(t);return e.width=o,e.height=n,e}function I(t,e){var o=e.charAt(0),n=e.charAt(1),r=t.width,i=t.height,a=t.left,f=t.top;return"c"===o?f+=i/2:"b"===o&&(f+=i),"c"===n?a+=r/2:"r"===n&&(a+=r),{left:a,top:f}}function N(t,e,o,n,r){var i=I(e,o[1]),a=I(t,o[0]),f=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-f[0]+n[0]-r[0]),top:Math.round(t.top-f[1]+n[1]-r[1])}}function $(t,e,o){return t.left<o.left||t.left+e.width>o.right}function U(t,e,o){return t.top<o.top||t.top+e.height>o.bottom}function Z(t,e,o){var n=[];return F.each(t,(function(t){n.push(t.replace(e,(function(t){return o[t]})))})),n}function q(t,e){return t[e]=-t[e],t}function G(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function J(t,e){t[0]=G(t[0],e.width),t[1]=G(t[1],e.height)}function K(t,e,o,n){var r=o.points,i=o.offset||[0,0],a=o.targetOffset||[0,0],f=o.overflow,l=o.source||t;i=[].concat(i),a=[].concat(a);var u={},c=0,s=A(l,!(!(f=f||{})||!f.alwaysByViewport)),p=_(l);J(i,p),J(a,e);var d=N(p,e,r,i,a),h=F.merge(p,d);if(s&&(f.adjustX||f.adjustY)&&n){if(f.adjustX&&$(d,p,s)){var g=Z(r,/[lr]/gi,{l:"r",r:"l"}),m=q(i,0),v=q(a,0);(function(t,e,o){return t.left>o.right||t.left+e.width<o.left})(N(p,e,g,m,v),p,s)||(c=1,r=g,i=m,a=v)}if(f.adjustY&&U(d,p,s)){var y=Z(r,/[tb]/gi,{t:"b",b:"t"}),w=q(i,1),b=q(a,1);(function(t,e,o){return t.top>o.bottom||t.top+e.height<o.top})(N(p,e,y,w,b),p,s)||(c=1,r=y,i=w,a=b)}c&&(d=N(p,e,r,i,a),F.mix(h,d));var x=$(d,p,s),W=U(d,p,s);if(x||W){var S=r;x&&(S=Z(r,/[lr]/gi,{l:"r",r:"l"})),W&&(S=Z(r,/[tb]/gi,{t:"b",b:"t"})),r=S,i=o.offset||[0,0],a=o.targetOffset||[0,0]}u.adjustX=f.adjustX&&x,u.adjustY=f.adjustY&&W,(u.adjustX||u.adjustY)&&(h=function(t,e,o,n){var r=F.clone(t),i={width:e.width,height:e.height};return n.adjustX&&r.left<o.left&&(r.left=o.left),n.resizeWidth&&r.left>=o.left&&r.left+i.width>o.right&&(i.width-=r.left+i.width-o.right),n.adjustX&&r.left+i.width>o.right&&(r.left=Math.max(o.right-i.width,o.left)),n.adjustY&&r.top<o.top&&(r.top=o.top),n.resizeHeight&&r.top>=o.top&&r.top+i.height>o.bottom&&(i.height-=r.top+i.height-o.bottom),n.adjustY&&r.top+i.height>o.bottom&&(r.top=Math.max(o.bottom-i.height,o.top)),F.mix(r,i)}(d,p,s,u))}return h.width!==p.width&&F.css(l,"width",F.width(l)+h.width-p.width),h.height!==p.height&&F.css(l,"height",F.height(l)+h.height-p.height),F.offset(l,{left:h.left,top:h.top},{useCssRight:o.useCssRight,useCssBottom:o.useCssBottom,useCssTransform:o.useCssTransform,ignoreShake:o.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:u}}function Q(t,e,o){var n=o.target||e,r=_(n),i=!function(t,e){var o=A(t,e),n=_(t);return!o||n.left+n.width<=o.left||n.top+n.height<=o.top||n.left>=o.right||n.top>=o.bottom}(n,o.overflow&&o.overflow.alwaysByViewport);return K(t,r,o,i)}function tt(t,o,n){var r,i,a=F.getDocument(t),f=a.defaultView||a.parentWindow,l=F.getWindowScrollLeft(f),u=F.getWindowScrollTop(f),c=F.viewportWidth(f),s=F.viewportHeight(f),p={left:r="pageX"in o?o.pageX:l+o.clientX,top:i="pageY"in o?o.pageY:u+o.clientY,width:0,height:0},d=r>=0&&r<=l+c&&i>=0&&i<=u+s,h=[n.points[0],"cc"];return K(t,p,e(e({},n),{},{points:h}),d)}Q.__getOffsetParent=k,Q.__getVisibleRectForElement=A;export{Q as a,tt as b};
