(()=>{"use strict";var t={28:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(81),o=r.n(n),s=r(645),i=r.n(s)()(o());i.push([t.id,".test{\r\n    color: red;\r\n}",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);n&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var s={},i=[],a=0;a<t.length;a++){var c=t[a],l=n.base?c[0]+n.base:c[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var h=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=o(p,n);n.byIndex=a,e.splice(a,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var s=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=r(s[i]);e[a].references--}for(var c=n(t,o),l=0;l<s.length;l++){var u=r(s[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}s=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={id:n,exports:{}};return t[n](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(379),e=r.n(t),n=r(795),o=r.n(n),s=r(569),i=r.n(s),a=r(565),c=r.n(a),l=r(216),u=r.n(l),d=r(589),h=r.n(d),p=r(28),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=document.querySelector("body"),m=document.createElement("h1");m.textContent="hello",m.classList.add("test"),null==v||v.appendChild(m);let g=new class{constructor(){this.board=[],this.createBoard(),this.hits=[],this.misses=[]}createBoard(){let t=0;for(let e=0;e<10;e++){this.board[e]=[];for(let r=0;r<10;r++)t++,this.board[e][r]=t}}placeShip(t,e,r){if(r)for(let r=0;r<t.length;r++){for(let t=0;t<this.board.length;t++)if(this.board[t].includes(e)){let r=this.board[t].indexOf(e);this.board[t][r]=0}e+=10}else for(let r=0;r<t.length;r++){for(let t=0;t<this.board.length;t++)if(this.board[t].includes(e)){let r=this.board[t].indexOf(e);this.board[t][r]=0}e+=1}}recieveAttack(t){let e,r=t.toString();r.length<2?e=t-1:(r.slice(1,1),e=parseInt(r)-1);let n=parseInt(r.slice(0,1))-1;console.log(e,n),0===this.board[n][e]?this.hits.push(t):this.misses.push(t)}},b=new class{constructor(t){this.length=t,this.isHit=[],this.sunk=!1}hit(t){if(!this.isHit.includes(t)&&this.isHit.length<this.length)return this.isHit.push(t),this.isHit}isSunk(){return this.isHit.length===this.length&&(this.sunk=!0,!0)}}(5);g.placeShip(b,10,!0),g.recieveAttack(10),g.recieveAttack(9),console.log(g.hits),console.log(g.misses),console.log(g.board)})()})();