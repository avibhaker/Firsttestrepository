/*! For license information please see main.65d1067862af1cdc9bf8.js.LICENSE.txt */
(()=>{"use strict";var e,t={953:(e,t,o)=>{o.d(t,{v:()=>j}),o(260);var n=o(248),r=o.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(r)?r:String(r)),n)}var r}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(h,Phaser.Scene);var t,o,n,c,l=(n=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(n);if(c){var o=u(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function h(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),l.call(this,{key:"LoadScene"})}return t=h,(o=[{key:"preload",value:function(){this.load.image("overlay","assets/SimAssets/overlay.png"),this.load.json("loading-anim","assets/loadAnims/cuemath_loading.json")}},{key:"create",value:function(){this.screenOverlay=this.add.image(0,0,"overlay").setOrigin(0),this.loadingAnim=this.addLoaderLottie(this.cameras.main.width/2,this.cameras.main.height/2),this.assetsLoad(),this.load.start(),this.load.on("progress",(function(e){this.loadingAnim.anim.playSegments([0,25],!0)}),this),this.load.on("complete",(function(){var e=this;console.log("complete"),this.loadingAnim.anim.loop=!1,this.loadingAnim.anim.playSegments([26,41],!0),this.loadingAnim.anim.addEventListener("complete",(function(){e.scene.start("StartScene")}))}),this)}},{key:"addLoaderLottie",value:function(e,t){var o=this.add.dom(e-this.cameras.main.width/2,t-this.cameras.main.height/2,"div").setScale(.7),n=o.node;return n.style.height="100%",n.style.width="100%",{anim:r().loadAnimation({container:n,renderer:"svg",loop:!0,autoplay:!1,animationData:this.cache.json.get("loading-anim")}),dom:o}}},{key:"assetsLoad",value:function(){this.load.image("bg","assets/SimAssets/bg.png"),this.load.image("overlay","assets/SimAssets/overlay.png"),this.load.image("play-button","assets/SimAssets/play-button.png"),this.load.image("play-button-hover","assets/SimAssets/play-button-hover.png"),this.load.image("controls-base","assets/SimAssets/controls-base.png"),this.load.image("video-play","assets/SimAssets/video-play.png"),this.load.image("video-pause","assets/SimAssets/video-pause.png"),this.load.image("video-mute","assets/SimAssets/video-mute.png"),this.load.image("video-volume","assets/SimAssets/video-volume.png"),this.load.image("video-maximize","assets/SimAssets/video-maximize.png"),this.load.image("video-minimize","assets/SimAssets/video-minimize.png"),this.load.image("question-mark","assets/SimAssets/question-mark.png"),this.load.video("test","assets/SimAssets/SpeedMathematicsMethod.mp4",!1)}}])&&s(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),h}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function h(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(r)?r:String(r)),n)}var r}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,Phaser.GameObjects.DOMElement);var t,o,n,r,i=(n=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(r){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(e,t,o,n,r,a,u,c,l,h){var d;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(d=i.call(this,e,h)).scene=e,d.hints=l,d.button=d.scene.add.image(1172,600,"next-arrow").setAlpha(0).setInteractive({useHandCursor:!0}),"singleBox"==t?d.singleBox(o,n,r,a,u,c):"fractionBox"==t?2==correctAns.length?d.fractionBox(o,n,r,a,c):console.log("add an array of correct answer with [numerator,denominator]"):console.log('typeOfBox either be "fractionBox" or "singleBox"'),d}return t=s,(o=[{key:"singleBox",value:function(e,t,o,n,r,i){this.incorrect=0,this.initiallizeSingleBox(e,t,o,n,r,i),this.initiallizeHint()}},{key:"initiallizeSingleBox",value:function(e,t,o,n,r,i){var s=this;this.box=this.scene.add.dom(e,t,"input","width:".concat(o,"px;height:").concat(n,"px;background-color: #ffffff00;margin: 0;padding: 0;border: 0;font-size:48px;text-align: center;color: #000000;outline: 2px solid #b3b3b3;border-radius: ").concat(r,"px;font-family: font1;caret-width: 4px;caret-color: black;")).setOrigin(0).setAlpha(0),this.box.node.type="text",this.box.node.maxLength=i,this.box.node.onkeypress=function(e){return 8!=e.charCode&&0==e.charCode||e.charCode>=48&&e.charCode<=57},this.box.addListener("focus"),this.box.addListener("blur"),this.box.on("focus",(function(){s.box.node.style.outlineColor="#000000",s.box.node.style.color="#000000"})),this.box.on("blur",(function(){s.box.node.style.outlineColor="#b3b3b3"}))}},{key:"initiallizeHint",value:function(){this.overlay=this.scene.add.dom(0,0,"div","background-color: #2B2B2BBF;width: 1280px;height: 720px;z-index: 5;opacity:1;").setOrigin(0).setAlpha(0),this.hint=this.scene.add.dom(200,52,"img","margin: 0;padding: 0;border: 0;").setAlpha(0).setOrigin(0),this.hint.node.src="assets/SimAssets/".concat(this.hints[0],".png"),this.close=this.scene.add.dom(1075.2,78.4,"img").setAlpha(0).setOrigin(0),this.close.node.src="assets/SimAssets/hintCloseButton.png",this.close.addListener("click"),this.close.node.style.cursor="pointer"}},{key:"checkCorrect",value:function(e,t){var o=this;this.box.node.disabled=!0,this.box.node.value==e?(this.box.node.style.outlineColor="#149A53",this.box.node.style.color="#149A53",this.scene.time.delayedCall(1e3,(function(){t()}))):(this.incorrect+=1,this.box.node.style.outlineColor="#C22300",this.box.node.style.color="#C22300",this.scene.time.delayedCall(1e3,(function(){o.overlay.setAlpha(1),o.setHint(),o.hint.setAlpha(1),o.close.setAlpha(1),o.close.on("click",(function(){o.box.node.disabled=!1,o.hint.setAlpha(0),o.overlay.setAlpha(0),o.close.setAlpha(0),o.box.node.value="",o.box.node.style.outlineColor="#B3B3B3",o.box.node.style.color="#000000"}))})))}},{key:"setHint",value:function(){this.hint.node.src="assets/SimAssets/".concat(this.hints[this.incorrect-1],".png"),this.incorrect==this.hints.length&&(this.incorrect=0)}},{key:"fractionBox",value:function(e,t,o,n,r){this.incorrect=0,this.initiallizeFractionBox(e,t,o,n,r),this.initiallizeHint()}},{key:"initiallizeFractionBox",value:function(e,t,o,n,r){var i=this;this.boxNumerator=this.scene.add.dom(e,t,"input","width:".concat(o,"px;height:").concat(n,"px;background-color: #ffffff;margin: 0;padding: 0;border: 0;font-size:48px;text-align: center;color: #000000;outline: 2px solid #B3B3B3;border-radius: 12.8px;font-family: font1;")).setOrigin(0).setAlpha(0),this.scene.load.image("bar","assets/SimAssets/bar.png"),this.bar=this.scene.add.image(e-10,t+80,"bar").setOrigin(0).setDepth(15).setAlpha(0),this.boxDenominator=this.scene.add.dom(e,t+95,"input","width:71px;height:71px;background-color: #ffffff;margin: 0;padding: 0;border: 0;font-size:48px;text-align: center;color: #000000;outline: 2px solid #B3B3B3;border-radius: 12.8px;font-family: font1;").setOrigin(0).setAlpha(0),this.boxNumerator.node.type="text",this.boxNumerator.node.maxLength=r,this.boxDenominator.node.type="text",this.boxDenominator.node.maxLength=r,this.boxNumerator.node.onkeyPress=function(e){return 8!=e.charCode&&0==e.charCode||e.charCode>=48&&e.charCode<=57},this.boxDenominator.node.onkeyPress=function(e){return 8!=e.charCode&&0==e.charCode||e.charCode>=48&&e.charCode<=57},this.boxNumerator.addListener("focus"),this.boxNumerator.addListener("blur"),this.boxDenominator.addListener("focus"),this.boxDenominator.addListener("blur"),this.boxNumerator.on("focus",(function(){i.boxNumerator.node.style.outlineColor="#000000"})),this.boxNumerator.on("blur",(function(){i.boxNumerator.node.style.outlineColor="#B3B3B3"})),this.boxDenominator.on("focus",(function(){i.box2.node.style.outlineColor="#000000"})),this.box2.on("blur",(function(){i.boxDenominator.node.style.outlineColor="#B3B3B3"}))}},{key:"checkCorrectFraction",value:function(e,t){var o=this;this.boxNumerator.node.disabled=!0,this.boxDenominator.node.disabled=!0,this.boxNumerator.node.value==e[0]&&this.boxDenominator.node.value==e[1]?(this.boxNumerator.node.style.outlineColor="#149A53",this.boxNumerator.node.style.color="#149A53",this.boxDenominator.node.style.outlineColor="#149A53",this.boxDenominator.node.style.color="#149A53",this.scene.time.delayedCall(1e3,(function(){t()}))):(this.incorrect+=1,this.boxNumerator.node.style.outlineColor="#C22300",this.boxNumerator.node.style.color="#C22300",this.boxDenominator.node.style.outlineColor="#C22300",this.boxDenominator.node.style.color="#C22300",this.scene.time.delayedCall(1e3,(function(){o.setHint(),o.overlay.setAlpha(1),o.hint.setAlpha(1),o.close.setAlpha(1),o.close.on("click",(function(){o.boxNumerator.node.disabled=!1,o.boxDenominator.node.disabled=!1,o.hint.setAlpha(0),o.overlay.setAlpha(0),o.close.setAlpha(0),o.boxNumerator.node.value="",o.boxDenominator.node.value="",o.boxNumerator.node.style.outlineColor="#B3B3B3",o.boxNumerator.node.style.color="#000000",o.boxDenominator.node.style.outlineColor="#B3B3B3",o.boxDenominator.node.style.color="#000000"}))})))}}])&&h(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(){m=function(){return t};var e,t={},o=Object.prototype,n=o.hasOwnProperty,r=Object.defineProperty||function(e,t,o){e[t]=o.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(e,t,o){return Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,o){return e[t]=o}}function l(e,t,o,n){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),a=new L(n||[]);return r(s,"_invoke",{value:j(e,o,a)}),s}function h(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",y="completed",b={};function g(){}function x(){}function w(){}var S={};c(S,s,(function(){return this}));var k=Object.getPrototypeOf,O=k&&k(k(_([])));O&&O!==o&&n.call(O,s)&&(S=O);var P=w.prototype=g.prototype=Object.create(S);function B(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function o(r,i,s,a){var u=h(e[r],e,i);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==v(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){o("next",e,s,a)}),(function(e){o("throw",e,s,a)})):t.resolve(l).then((function(e){c.value=e,s(c)}),(function(e){return o("throw",e,s,a)}))}a(u.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function j(t,o,n){var r=d;return function(i,s){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===i)throw s;return{value:e,done:!0}}for(n.method=i,n.arg=s;;){var a=n.delegate;if(a){var u=A(a,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=h(t,o,n);if("normal"===c.type){if(r=n.done?y:f,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}function A(t,o){var n=o.method,r=t.iterator[n];if(r===e)return o.delegate=null,"throw"===n&&t.iterator.return&&(o.method="return",o.arg=e,A(t,o),"throw"===o.method)||"return"!==n&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=h(r,t.iterator,o.arg);if("throw"===i.type)return o.method="throw",o.arg=i.arg,o.delegate=null,b;var s=i.arg;return s?s.done?(o[t.resultName]=s.value,o.next=t.nextLoc,"return"!==o.method&&(o.method="next",o.arg=e),o.delegate=null,b):s:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,b)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function _(t){if(t||""===t){var o=t[s];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function o(){for(;++r<t.length;)if(n.call(t,r))return o.value=t[r],o.done=!1,o;return o.value=e,o.done=!0,o};return i.next=i}}throw new TypeError(v(t)+" is not iterable")}return x.prototype=w,r(P,"constructor",{value:w,configurable:!0}),r(w,"constructor",{value:x,configurable:!0}),x.displayName=c(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,u,"GeneratorFunction")),e.prototype=Object.create(P),e},t.awrap=function(e){return{__await:e}},B(C.prototype),c(C.prototype,a,(function(){return this})),t.AsyncIterator=C,t.async=function(e,o,n,r,i){void 0===i&&(i=Promise);var s=new C(l(e,o,n,r),i);return t.isGeneratorFunction(o)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},B(P),c(P,u,"Generator"),c(P,s,(function(){return this})),c(P,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),o=[];for(var n in t)o.push(n);return o.reverse(),function e(){for(;o.length;){var n=o.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function r(n,r){return a.type="throw",a.arg=t,o.next=n,r&&(o.method="next",o.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),E(o),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc===e){var n=o.completion;if("throw"===n.type){var r=n.arg;E(o)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,o,n){return this.delegate={iterator:_(t),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}function y(e,t,o,n,r,i,s){try{var a=e[i](s),u=a.value}catch(e){return void o(e)}a.done?t(u):Promise.resolve(u).then(n,r)}function b(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var i=e.apply(t,o);function s(e){y(i,n,r,s,a,"next",e)}function a(e){y(i,n,r,s,a,"throw",e)}s(void 0)}))}}function g(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==v(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(r)?r:String(r)),n)}var r}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(c,Phaser.Scene);var t,o,n,r,i,s,a,u=(s=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(s);if(a){var o=w(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),u.call(this,{key:"GameScene"})}return t=c,o=[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this;this.initiallizeVlaues().then((function(){console.log(e),e.test.video.controls=!0,e.setupControls(),e.test.video.addEventListener("timeupdate",(function(){e.videoSlider1.setSize(1280*e.test.getProgress(),20),e.videoKnob.setPosition(1280*e.test.getProgress(),642),e.test.video.currentTime>=e.markers[e.markerIndex].end&&!e.questionDisplayed?(e.test.setPaused(!0),e.test.video.currentTime=e.markers[e.markerIndex].end,e.videoSlider1.setSize(1280*e.test.getProgress(),20),e.videoKnob.setPosition(1280*e.test.getProgress(),642),e.markers[e.markerIndex].question(),e.questionDisplayed=!0,e.play.setTexture("video-play"),e.play.disableInteractive()):e.questionDisplayed&&e.test.video.currentTime<=e.markers[e.markerIndex].end-1?(e.a.box.setAlpha(0),e.play.setInteractive({useHandCursor:!0})):e.questionDisplayed&&e.test.video.currentTime>=e.markers[e.markerIndex].end-1&&e.markerIndex<e.markers.length-1&&(e.a.box.setAlpha(1),e.test.video.currentTime=e.markers[e.markerIndex].end,e.play.disableInteractive(),e.videoKnob.setPosition(1280*e.test.getProgress(),642))}))}))}},{key:"initiallizeVlaues",value:(i=b(m().mark((function e(){var t=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.t=this.add.text(10,10,"",{font:"16px Courier",fill:"#00ff00"}).setShadow(1,1).setDepth(20),this.test.video.currentTime=0,this.test.setPaused(!0),this.questionDisplayed=!1,this.markers=[{name:"section1",start:0,end:66,question:function(){t.firstQuestion()}},{name:"section2",start:63,end:86.5,question:function(){t.secondQuestion()}},{name:"section3",start:86,end:101.5,question:function(){t.thirdQuestion()}},{name:"section4",start:96,end:133,question:function(){t.fourthQuestion()}},{name:"section5",start:133,end:140.56,question:function(){t.fifthQuestion()}},{name:"section6",start:140,end:156,question:function(){t.sixthQuestion()}},{name:"section7",start:145,end:166,question:function(){t.seventhQuestion()}}],window.addEventListener("focus",(function(){t.test.setPaused(!0)})),this.markerIndex=0;case 7:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"firstQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",687,233,70,70,35,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(4,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"secondQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",780,152.5,50,50,2,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(4,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"thirdQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",822.3,152.5,50,50,2,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(8,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"fourthQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",423,273,70,70,35,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(3,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"fifthQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",588,273,70,70,35,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(2,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"sixthQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",760,195,50,50,2,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(5,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"seventhQuestion",value:function(){var e=this;this.a=new p(this,"singleBox",800,195,50,50,2,1,["hint1"]),this.figureAppear(this.a.box,100),this.a.box.node.addEventListener("keydown",(function(t){13===t.keyCode&&e.a.checkCorrect(6,(function(){e.restart(),e.figureDisappear(e.a.box,600)}))}))}},{key:"restart",value:function(){this.test.setPaused(!1),this.play.setTexture("video-pause"),this.play.setInteractive({useHandCursor:!0}),this.markerIndex<this.markers.length-1&&(this.markerIndex+=1,this.questionDisplayed=!1)}},{key:"setupControls",value:(r=b(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.footer=this.add.image(0,642,"controls-base").setOrigin(0).setDepth(10),this.addVolumeButton(),this.addPlayButton(),this.addMaximizeButton(),this.videoSeek();case 5:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"addVolumeButton",value:function(){var e=this;this.volume=this.add.image(565,682,"video-volume").setOrigin(.5,.5).setDepth(18),this.volumeBar=this.add.rectangle(565,652,20,100,16752492,1).setOrigin(.5,1).setDepth(15).setScale(1,0),this.volumeBar1=this.add.rectangle(565,652,20,100,10366720,1).setOrigin(.5,1).setDepth(16).setScale(1,0),this.volumeKnob=this.add.circle(565,662,10,0,1).setOrigin(.5,.5).setDepth(17).setAlpha(1),this.volume.setInteractive({useHandCursor:!0}),this.volumeBar.setInteractive({useHandCursor:!0}),this.volumeBar1.setInteractive({useHandCursor:!0}),this.volumeKnob.setInteractive({useHandCursor:!0,draggable:!0}),this.volume.on("pointerover",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,1,300),e.figureAppear(e.volumeKnob,100),e.moveSprite(e.volumeKnob,565,652-100*e.test.video.volume,300)})),this.volumeKnob.on("pointerover",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,1,300),e.moveSprite(e.volumeKnob,565,652-100*e.test.video.volume,300)})),this.volumeBar.on("pointerover",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,1,300),e.moveSprite(e.volumeKnob,565,652-100*e.test.video.volume,300)})),this.volumeBar1.on("pointerover",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,1,300),e.moveSprite(e.volumeKnob,565,652-100*e.test.video.volume,300)})),this.volume.on("pointerout",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,0,300),e.moveSprite(e.volumeKnob,565,662,300)})),this.volumeKnob.on("pointerout",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,0,300),e.moveSprite(e.volumeKnob,565,662,300)})),this.volumeBar1.on("pointerout",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,0,300),e.moveSprite(e.volumeKnob,565,662,300)})),this.volumeBar.on("pointerout",(function(){e.scaleSprite([e.volumeBar,e.volumeBar1],1,0,300),e.moveSprite(e.volumeKnob,565,662,300)})),this.volumeKnob.on("drag",(function(t,o,n){e.volumeKnob.y=Phaser.Math.Clamp(n,552,652),e.volumeBar1.setSize(20,652-e.volumeKnob.y),e.test.setVolume((652-e.volumeKnob.y)/100)})),this.volumeBar1.on("pointerdown",(function(t){e.volumeKnob.y=t.y,e.volumeBar1.setSize(20,652-e.volumeKnob.y),e.test.setVolume((652-e.volumeKnob.y)/100)})),this.volumeBar.on("pointerdown",(function(t){e.volumeKnob.y=t.y,e.volumeBar1.setSize(20,652-e.volumeKnob.y),e.test.setVolume((652-e.volumeKnob.y)/100)})),this.volume.on("pointerup",(function(){e.test.video.volume>0?(e.volumeKnob.y=652,e.volume.setTexture("video-mute"),e.volumeBar1.setSize(20,0),e.test.setVolume(0)):(e.volumeKnob.y=552,e.volume.setTexture("video-volume"),e.volumeBar1.setSize(20,100),e.test.setVolume(1))}))}},{key:"addPlayButton",value:(n=b(m().mark((function e(){var t=this;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.play=this.add.image(610,651,"video-play").setOrigin(0).setDepth(10),this.play.setInteractive({useHandCursor:!0}),this.play.on("pointerup",(function(){t.test.isPlaying()?(t.play.setTexture("video-play"),t.test.setPaused(!0)):t.test.isPaused()?(t.play.setTexture("video-pause"),t.test.setPaused(!1)):t.test.play()}));case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"addMaximizeButton",value:function(){var e=this;this.maximize=this.add.image(685,651,"video-maximize").setOrigin(0).setDepth(10),this.maximize.setInteractive({useHandCursor:!0}),this.maximize.on("pointerup",(function(){e.scale.isFullscreen?(e.maximize.setTexture("video-maximize"),e.scale.stopFullscreen()):(e.maximize.setTexture("video-minimize"),e.scale.startFullscreen())})),this.scale.on("fullscreenchange",(function(){e.isFullscreen?e.test.setSize(e.scale.width,e.scale.height):e.test.setSize(j.width,j.height)}))}},{key:"videoSeek",value:function(){var e=this;this.markers.length,this.markerPoints=[],this.markers.forEach((function(t){e.markerPoints.push(e.add.rectangle(t.end/e.test.getDuration()*1280,642,5,20,0,1).setOrigin(0,1).setDepth(13).setScale(1,0)),e.markerPoints.push(e.add.image(t.end/e.test.getDuration()*1280+2,622,"question-mark").setOrigin(.5,1).setDepth(13).setScale(1,0))})),this.videoKnob=this.add.circle(0,642,10,16777215,1).setOrigin(.5,1).setDepth(14).setScale(1,0),this.videoSlider=this.add.rectangle(0,642,1280,20,8421504,1).setOrigin(0,1).setDepth(10).setScale(1,0),this.videoSlider1=this.add.rectangle(0,642,0,20,4052849,1).setOrigin(0,1).setDepth(10).setScale(1,0),this.videoSlider.setInteractive({useHandCursor:!0}),this.videoKnob.setInteractive({useHandCursor:!0,draggable:!0}),this.footer.setInteractive(),this.input.on("pointermove",(function(){e.scaleSprite([e.videoSlider,e.videoSlider1,e.videoKnob],1,1,200),e.scaleSprite(e.markerPoints,1,1,200),e.collapseTime=e.time.now+5e3})),this.videoKnob.on("pointerover",(function(){e.scaleSprite([e.videoSlider,e.videoSlider1,e.videoKnob],1,1,200),e.scaleSprite(e.markerPoints,1,1,200)})),this.videoSlider.on("pointerover",(function(){e.scaleSprite([e.videoSlider,e.videoSlider1,e.videoKnob],1,1,200),e.scaleSprite(e.markerPoints,1,1,200)})),this.videoSlider.on("pointerdown",(function(t){e.videoSlider1.setSize(t.x,20),e.videoKnob.setPosition(t.x,642),e.test.video.currentTime=t.x/1280*e.test.getDuration()})),this.videoSlider1.on("pointerdown",(function(t){e.videoSlider1.setSize(t.x,20),e.videoKnob.setPosition(t.x,642),e.test.video.currentTime=t.x/1280*e.test.getDuration()})),this.videoKnob.on("drag",(function(t,o,n){e.videoKnob.x=Phaser.Math.Clamp(o,0,1280),e.videoSlider1.setSize(t.x,20),e.test.video.currentTime=t.x/1280*e.test.getDuration()}))}},{key:"scaleSprite",value:function(e,t,o,n){this.tweens.add({targets:e,scaleX:t,scaleY:o,duration:n})}},{key:"figureAppear",value:function(e,t){this.tweens.add({targets:e,alpha:1,ease:"Power 3",delay:t,duration:200})}},{key:"figureDisappear",value:function(e,t){this.tweens.add({targets:e,alpha:0,ease:"Power 3",delay:t,duration:200})}},{key:"moveSprite",value:function(e,t,o,n){this.tweens.add({targets:e,x:t,y:o,ease:"Power 3",duration:n})}},{key:"update",value:function(){this.t.setText(this.test.getProgress()*this.test.getDuration()),this.time.now>=this.collapseTime&&(this.scaleSprite([this.videoSlider,this.videoSlider1,this.videoKnob],1,0,200),this.scaleSprite(this.markerPoints,1,0,200))}}],o&&g(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),c}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function O(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==k(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(r)?r:String(r)),n)}var r}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(s,Phaser.Scene);var t,o,n,r,i=(n=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(r){var o=B(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this,{key:"StartScene"})}return t=s,(o=[{key:"preload",value:function(){}},{key:"create",value:function(){var e=this;this.game.scene.scenes[2].test=this.game.scene.scenes[2].add.video(0,0,"test").setOrigin(0).setDepth(3).setScale(1280/1920,720/1080),this.events.on("focus",(function(){e.game.scene.scenes[2].test.setPaused(!0),console("resume")})),window.addEventListener("focus",(function(){e.game.scene.scenes[2].test.setPaused(!0)})),this.add.image(0,0,"bg").setOrigin(0,0),this.add.image(0,0,"overlay").setOrigin(0,0),this.playButton=this.add.image(j.width/2,j.height/2,"play-button").setInteractive({cursor:"pointer"}),this.playButton.on("pointerover",(function(){e.playButton.setTexture("play-button-hover")})),this.playButton.on("pointerout",(function(){e.playButton.setTexture("play-button")})),this.playButton.on("pointerdown",(function(){e.game.scene.scenes[2].test.play(),e.scene.stop("StartScene"),e.scene.start("GameScene"),e.game.scene.scenes[2].test.setPaused(!0)}),this)}},{key:"update",value:function(){}}])&&O(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(),j={type:Phaser.AUTO,parent:"game-container",width:1280,height:720,scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},zoom:1,fps:{target:60},backgroundColor:"ffffff",physics:{default:"arcade"},scene:[c,C,S],audio:{disableWebAudio:!0},dom:{createContainer:!0}};new Phaser.Game(j)}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,n.amdO={},e=[],n.O=(t,o,r,i)=>{if(!o){var s=1/0;for(l=0;l<e.length;l++){for(var[o,r,i]=e[l],a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](o[u])))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[s,a,u]=o,c=0;if(s.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self.webpackChunkphaser_webpack=self.webpackChunkphaser_webpack||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[426],(()=>n(953)));r=n.O(r)})();