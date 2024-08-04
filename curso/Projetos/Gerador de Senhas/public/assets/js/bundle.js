(()=>{"use strict";var r={958:(r,n,e)=>{e.d(n,{A:()=>c});var o=e(354),t=e.n(o),a=e(314),i=e.n(a)()(t());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([r.id,":root {\n    --primary-color: rgb(13, 106, 134);\n    --primary-color-darker: rgb(6, 62, 79);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 20px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    margin-top: 30px;\n    cursor: pointer;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n    font-size: 2em;\n    color: var(--primary-color);\n    margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    display: block;\n    margin: auto;\n    font-size: 1em;\n    cursor: pointer;\n    border-radius: 8px;\n    text-align: center;\n    border: 2px solid var(--primary-color-darker);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,kCAAkC;IAClC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,6CAA6C;AACjD",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n:root {\r\n    --primary-color: rgb(13, 106, 134);\r\n    --primary-color-darker: rgb(6, 62, 79);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n}\r\n\r\nform input,\r\nform label,\r\nform button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    margin-top: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    margin: 40px 0;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: auto;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n    text-align: center;\r\n    border: 2px solid var(--primary-color-darker);\r\n}"],sourceRoot:""}]);const c=i},314:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<r.length;A++){var u=[].concat(r[A]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),n.push(u))}},n}},354:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},72:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],A=o.base?s[0]+o.base:s[0],u=a[A]||0,p="".concat(A," ").concat(u);a[A]=u+1;var d=e(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(l);else{var f=t(l,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=o(r,t),A=0;A<a.length;A++){var u=e(a[A]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},659:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},56:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},825:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},113:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={id:o,exports:{}};return r[o](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0;var o=function(r,n){return Math.floor(Math.random()*(n-r)+r)},t=function(){return",.;/:?!@#$%¨&*={}[+-"[o(0,20)]},a=document.querySelector(".senha-gerada"),i=document.querySelector(".qtd-caracteres"),c=document.querySelector(".chk-maiusculas"),s=document.querySelector(".chk-minusculas"),A=document.querySelector(".chk-numeros"),u=document.querySelector(".chk-simbolos"),p=document.querySelector(".gerar-senha"),d=e(72),l=e.n(d),f=e(825),m=e.n(f),h=e(659),C=e.n(h),g=e(56),b=e.n(g),v=e(540),y=e.n(v),I=e(113),x=e.n(I),B=e(958),k={};k.styleTagTransform=x(),k.setAttributes=b(),k.insert=C().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=y(),l()(B.A,k),B.A&&B.A.locals&&B.A.locals,p.addEventListener("click",(function(){a.innerHTML=function(r,n,e,a,i){var c=[];r=Number(r);for(var s=0;s<r;s++)n&&c.push(String.fromCharCode(o(65,91))),e&&c.push(String.fromCharCode(o(97,123))),a&&c.push(String.fromCharCode(o(48,58))),i&&c.push(t());return c.join("").slice(0,r)}(i.value,c.checked,s.checked,A.checked,u.checked)||"Nada selecionado."}))})();
//# sourceMappingURL=bundle.js.map