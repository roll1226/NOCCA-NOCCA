(()=>{var e,t={6567:(e,t,n)=>{"use strict";function c(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}n(9554),n(1539),n(4747),n(2772),n(9070);var r="block",o="none";const a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"style",value:function(e,t){e.forEach((function(e,n){e.style.display=t[n]}))}}],null&&c(t.prototype,null),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var l=function(e){return e+5},i=function(e){return e+6},s=function(e){return e+1},f=function(e){return e-4},u=function(e){return e-5},y=function(e){return e-6},d=function(e){return e-1},p=function(e){return e+4};function x(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var v="one",m="twe",b="three",k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"one",value:function(){return["block__white--1","block__white--2","block__white--3","block__white--4","block__white--5","","","","","","","","","","","","","","","","","","","","","block__black--1","block__black--2","block__black--3","block__black--4","block__black--5"]}},{key:"twe",value:function(){return["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]}},{key:"three",value:function(){return["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]}},{key:"nowLevel",value:function(e,t,n,c){return~e.indexOf(c)?v:~t.indexOf(c)?m:~n.indexOf(c)?b:""}},{key:"blockIndex",value:function(e,t,n,c){var r=~e.indexOf(c)?e.indexOf(c):0;return r=~t.indexOf(c)?t.indexOf(c):r,r=~n.indexOf(c)?n.indexOf(c):r}}],null&&x(t.prototype,null),n&&x(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const h=k;function O(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var w=22,_=102,q=60,S=120,g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"front",value:function(e,t,n,c,r){var o,a=null;return r===v?(a=document.querySelector("#".concat(e[c])),o=e[c]):r===m?(a=document.querySelector("#".concat(t[c])),o=t[c]):r===b&&(a=document.querySelector("#".concat(n[c])),o=n[c]),""===e[l(c)]?(e[l(c)]=o,a.style.top="".concat(_*~~(l(c)/5)+w,"px"),a.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[l(c)]&&""===t[l(c)]?(t[l(c)]=o,a.style.top="".concat(_*~~(l(c)/5)+w,"px"),a.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[l(c)]&&""!==t[l(c)]&&""===n[l(c)]?(n[l(c)]=o,a.style.top="".concat(_*~~(l(c)/5)+w,"px"),a.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"frontRight",value:function(e,t,n,c,r){var o,a=null;return r===v?(a=document.querySelector("#".concat(e[c])),o=e[c]):r===m?(a=document.querySelector("#".concat(t[c])),o=t[c]):r===b&&(a=document.querySelector("#".concat(n[c])),o=n[c]),""===e[i(c)]?(e[i(c)]=o,a.style.top="".concat(_*~~(i(c)/5)+w,"px"),a.style.left="".concat(_*(c%5+1)+w,"px"),a.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[i(c)]&&""===t[i(c)]?(t[i(c)]=o,a.style.top="".concat(_*~~(i(c)/5)+w,"px"),a.style.left="".concat(_*(c%5+1)+w,"px"),a.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[i(c)]&&""!==t[i(c)]&&""===n[i(c)]?(n[i(c)]=o,a.style.top="".concat(_*~~(i(c)/5)+w,"px"),a.style.left="".concat(_*(c%5+1)+w,"px"),a.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"right",value:function(e,t,n,c,r){var o=null,a="";return r===v?(o=document.querySelector("#".concat(e[c])),a=e[c]):r===m?(o=document.querySelector("#".concat(t[c])),a=t[c]):r===b&&(o=document.querySelector("#".concat(n[c])),a=n[c]),""===e[s(c)]?(e[s(c)]=a,o.style.top="".concat(_*~~(s(c)/5)+w,"px"),o.style.left="".concat(_*(c%5+1)+w,"px"),o.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[s(c)]&&""===t[s(c)]?(t[s(c)]=a,o.style.top="".concat(_*~~(s(c)/5)+w,"px"),o.style.left="".concat(_*(c%5+1)+w,"px"),o.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[s(c)]&&""!==t[s(c)]&&""===n[s(c)]?(n[s(c)]=a,o.style.top="".concat(_*~~(s(c)/5)+w,"px"),o.style.left="".concat(_*(c%5+1)+w,"px"),o.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"backRight",value:function(e,t,n,c,r){var o=null,a="";return r===v?(o=document.querySelector("#".concat(e[c])),a=e[c]):r===m?(o=document.querySelector("#".concat(t[c])),a=t[c]):r===b&&(o=document.querySelector("#".concat(n[c])),a=n[c]),""===e[f(c)]?(e[f(c)]=a,o.style.top="".concat(_*~~(f(c)/5)+w,"px"),o.style.left="".concat(_*(c%5+1)+w,"px"),o.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[f(c)]&&""===t[f(c)]?(t[f(c)]=a,o.style.top="".concat(_*~~(f(c)/5)+w,"px"),o.style.left="".concat(_*(c%5+1)+w,"px"),o.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[f(c)]&&""!==t[f(c)]&&""===n[f(c)]?(n[f(c)]=a,o.style.top="".concat(_*~~(f(c)/5)+w,"px"),o.style.left="".concat(_*(c%5+1)+w,"px"),o.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"back",value:function(e,t,n,c,r){var o,a=null;return r===v?(a=document.querySelector("#".concat(e[c])),o=e[c]):r===m?(a=document.querySelector("#".concat(t[c])),o=t[c]):r===b&&(a=document.querySelector("#".concat(n[c])),o=n[c]),""===e[u(c)]?(e[u(c)]=o,a.style.top="".concat(_*~~(u(c)/5)+w,"px"),a.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[u(c)]&&""===t[u(c)]?(t[u(c)]=o,a.style.top="".concat(_*~~(u(c)/5)+w,"px"),a.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[u(c)]&&""!==t[u(c)]&&""===n[u(c)]?(n[u(c)]=o,a.style.top="".concat(_*~~(u(c)/5)+w,"px"),a.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"backLeft",value:function(e,t,n,c,r){var o=null,a="";return r===v?(o=document.querySelector("#".concat(e[c])),a=e[c]):r===m?(o=document.querySelector("#".concat(t[c])),a=t[c]):r===b&&(o=document.querySelector("#".concat(n[c])),a=n[c]),""===e[y(c)]?(e[y(c)]=a,o.style.top="".concat(_*~~(y(c)/5)+w,"px"),o.style.left="".concat(_*(c%5-1)+w,"px"),o.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[y(c)]&&""===t[y(c)]?(t[y(c)]=a,o.style.top="".concat(_*~~(y(c)/5)+w,"px"),o.style.left="".concat(_*(c%5-1)+w,"px"),o.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[y(c)]&&""!==t[y(c)]&&""===n[y(c)]?(n[y(c)]=a,o.style.top="".concat(_*~~(y(c)/5)+w,"px"),o.style.left="".concat(_*(c%5-1)+w,"px"),o.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"left",value:function(e,t,n,c,r){var o=null,a="";return r===v?(o=document.querySelector("#".concat(e[c])),a=e[c]):r===m?(o=document.querySelector("#".concat(t[c])),a=t[c]):r===b&&(o=document.querySelector("#".concat(n[c])),a=n[c]),""===e[d(c)]?(e[d(c)]=a,o.style.top="".concat(_*~~(d(c)/5)+w,"px"),o.style.left="".concat(_*(c%5-1)+w,"px"),o.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[d(c)]&&""===t[d(c)]?(t[d(c)]=a,o.style.top="".concat(_*~~(d(c)/5)+w,"px"),o.style.left="".concat(_*(c%5-1)+w,"px"),o.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[d(c)]&&""!==t[d(c)]&&""===n[d(c)]?(n[d(c)]=a,o.style.top="".concat(_*~~(d(c)/5)+w,"px"),o.style.left="".concat(_*(c%5-1)+w,"px"),o.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}},{key:"frontLeft",value:function(e,t,n,c,r){var o,a=null;return r===v?(a=document.querySelector("#".concat(e[c])),o=e[c]):r===m?(a=document.querySelector("#".concat(t[c])),o=t[c]):r===b&&(a=document.querySelector("#".concat(n[c])),o=n[c]),""===e[p(c)]?(e[p(c)]=o,a.style.top="".concat(_*~~(p(c)/5)+w,"px"),a.style.left="".concat(_*(c%5-1)+w,"px"),a.style.transform="translateZ(".concat(1,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[p(c)]&&""===t[p(c)]?(t[p(c)]=o,a.style.top="".concat(_*~~(p(c)/5)+w,"px"),a.style.left="".concat(_*(c%5-1)+w,"px"),a.style.transform="translateZ(".concat(q,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):""!==e[p(c)]&&""!==t[p(c)]&&""===n[p(c)]?(n[p(c)]=o,a.style.top="".concat(_*~~(p(c)/5)+w,"px"),a.style.left="".concat(_*(c%5-1)+w,"px"),a.style.transform="translateZ(".concat(S,"px)"),r===v?e[c]="":r===m?t[c]="":r===b&&(n[c]=""),[e,t,n]):void 0}}],null&&O(t.prototype,null),n&&O(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const Z=g;n(7327),n(4916),n(4723);var L="white",E="black",j=function(e,t,n,c){var r=t.filter((function(e){return e.match(/.*white.*/)})).length>=5;if(r)return{isWinner:!0,player:L};var o=t.filter((function(e){return e.match(/.*black.*/)})).length>=5;return o?{isWinner:!0,player:E}:c===L?{isWinner:!1,player:E}:c===E?{isWinner:!1,player:L}:void 0},A=(n(2564),function(e){setTimeout((function(){document.querySelector(".main").style.display="none",document.querySelector("#camera-horizontal").style.display="none";var t;t=e===L?"白駒の勝ち":"黒駒の勝ち",document.querySelector(".winner__player--container").dataset.show="true",document.querySelector(".winner__player").innerHTML=t}),300)}),P="front",T="front__right",R="right",W="back__right",C="back",z="back__left",I="left",N="front__left",X=h.one(),Y=h.twe(),F=h.three(),H=L;document.querySelectorAll(".block__white").forEach((function(e){e.addEventListener("click",(function(){if(H===L){document.querySelectorAll(".arrow").forEach((function(e){e.style.display="none"}));var t=document.querySelectorAll(".".concat(e.id,"--arrow"));t.forEach((function(n){n.style.display="block";var c=~X.indexOf(e.id)?X.indexOf(e.id):0;c=~Y.indexOf(e.id)?Y.indexOf(e.id):c,c=~F.indexOf(e.id)?F.indexOf(e.id):c;var l=h.nowLevel(X,Y,F,e.id);if(l!==v||""===Y[c])if(l!==m||""===F[c])switch(c){case 0:a.style(t,[r,r,r,o,o,o,o,o]);break;case 1:case 2:case 3:a.style(t,[r,r,r,o,o,o,r,r]);break;case 4:a.style(t,[r,o,o,o,o,o,r,r]);break;case 5:case 10:case 15:case 20:case 25:a.style(t,[r,r,r,r,r,o,o,o]);break;case 9:case 14:case 19:case 24:case 29:a.style(t,[r,o,o,o,r,r,r,r]);break;default:a.style(t,[r,r,r,r,r,r,r,r])}else a.style(t,[o,o,o,o,o,o,o,o]);else a.style(t,[o,o,o,o,o,o,o,o])}))}}))}));for(var M=function(e){var t=document.querySelectorAll(".block__white--".concat(e,"--arrow"));t.forEach((function(n){n.addEventListener("click",(function(){var c=n.className,r="block__white--".concat(e),l=h.nowLevel(X,Y,F,r),i=h.blockIndex(X,Y,F,r),s=0;if(~c.indexOf(P)&&!~c.indexOf(T)&&!~c.indexOf(N)&&(s=i+5)<30){var f=Z.front(X,Y,F,i,l);X=f[0],Y=f[1],F=f[2]}if(~c.indexOf(T)&&(s=i+6)<30){var u=Z.frontRight(X,Y,F,i,l);X=u[0],Y=u[1],F=u[2]}if(~c.indexOf(R)&&!~c.indexOf(T)&&!~c.indexOf(W)){var y=Z.right(X,Y,F,i,l);X=y[0],Y=y[1],F=y[2]}if(~c.indexOf(W)){var d=Z.backRight(X,Y,F,i,l);X=d[0],Y=d[1],F=d[2]}if(~c.indexOf(C)&&!~c.indexOf(W)&&!~c.indexOf(z)){var p=Z.back(X,Y,F,i,l);X=p[0],Y=p[1],F=p[2]}if(~c.indexOf(z)){var x=Z.backLeft(X,Y,F,i,l);X=x[0],Y=x[1],F=x[2]}if(~c.indexOf(I)&&!~c.indexOf(N)&&!~c.indexOf(z)){var v=Z.left(X,Y,F,i,l);X=v[0],Y=v[1],F=v[2]}if(~c.indexOf(N)&&(s=i+4)<30){var m=Z.frontLeft(X,Y,F,i,l);X=m[0],Y=m[1],F=m[2]}var b=j(0,Y,0,L);b.isWinner?(A(b.player),H=""):H=b.player,console.log(s),s>=30&&(A(L),H=""),a.style(t,[o,o,o,o,o,o,o,o])}))}))},B=1;B<=5;B++)M(B);document.querySelectorAll(".block__black").forEach((function(e){e.addEventListener("click",(function(){if(H===E){document.querySelectorAll(".arrow").forEach((function(e){e.style.display="none"}));var t=document.querySelectorAll(".".concat(e.id,"--arrow"));t.forEach((function(n){n.style.display="block";var c=~X.indexOf(e.id)?X.indexOf(e.id):0;c=~Y.indexOf(e.id)?Y.indexOf(e.id):c,c=~F.indexOf(e.id)?F.indexOf(e.id):c;var l=h.nowLevel(X,Y,F,e.id);if(l!==v||""===Y[c])if(l!==m||""===F[c])switch(c){case 29:a.style(t,[o,o,o,o,r,r,r,o]);break;case 28:case 27:case 26:a.style(t,[o,o,r,r,r,r,r,o]);break;case 25:a.style(t,[o,o,r,r,r,o,o,o]);break;case 5:case 10:case 15:case 20:case 0:a.style(t,[r,r,r,r,r,o,o,o]);break;case 9:case 14:case 19:case 24:case 4:a.style(t,[r,o,o,o,r,r,r,r]);break;default:a.style(t,[r,r,r,r,r,r,r,r])}else a.style(t,[o,o,o,o,o,o,o,o]);else a.style(t,[o,o,o,o,o,o,o,o])}))}}))}));for(var D=function(e){var t=document.querySelectorAll(".block__black--".concat(e,"--arrow"));t.forEach((function(n){n.addEventListener("click",(function(){var c=n.className,r="block__black--".concat(e),l=h.nowLevel(X,Y,F,r),i=h.blockIndex(X,Y,F,r),s=0;if(~c.indexOf(P)&&!~c.indexOf(T)&&!~c.indexOf(N)&&(s=i-5)>=0){var f=Z.back(X,Y,F,i,l);X=f[0],Y=f[1],F=f[2]}if(~c.indexOf(T)&&(s=i-4)>=0){var u=Z.backRight(X,Y,F,i,l);X=u[0],Y=u[1],F=u[2]}if(~c.indexOf(R)&&!~c.indexOf(T)&&!~c.indexOf(W)){var y=Z.right(X,Y,F,i,l);X=y[0],Y=y[1],F=y[2]}if(~c.indexOf(W)){var d=Z.frontRight(X,Y,F,i,l);X=d[0],Y=d[1],F=d[2]}if(~c.indexOf(C)&&!~c.indexOf(W)&&!~c.indexOf(z)){var p=Z.front(X,Y,F,i,l);X=p[0],Y=p[1],F=p[2]}if(~c.indexOf(z)){var x=Z.frontLeft(X,Y,F,i,l);X=x[0],Y=x[1],F=x[2]}if(~c.indexOf(I)&&!~c.indexOf(N)&&!~c.indexOf(z)){var v=Z.left(X,Y,F,i,l);X=v[0],Y=v[1],F=v[2]}if(~c.indexOf(N)&&(s=i-6)>=0){var m=Z.backLeft(X,Y,F,i,l);X=m[0],Y=m[1],F=m[2]}var b=j(0,Y,0,E);b.isWinner?(A(b.player),H=""):H=b.player,s<0&&A(E),a.style(t,[o,o,o,o,o,o,o,o])}))}))},G=1;G<=5;G++)D(G);n(8859),n(9391)},8859:()=>{var e=document.querySelector(".sheet");e.style.transform="rotateX(60deg) rotateY(0deg) rotateZ(40deg)",document.querySelector("#camera-horizontal").addEventListener("input",(function(t){e.style.transform="rotateX(60deg) rotateY(0deg) rotateZ(".concat(t.target.value,"deg)")}))},9391:()=>{document.querySelector(".start").addEventListener("click",(function(){document.querySelector(".top").classList.add("top--close"),document.querySelector("#camera-horizontal").classList.add("start--game"),document.querySelector(".main").classList.add("start--game")}))}},n={};function c(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,c),o.exports}c.m=t,e=[],c.O=(t,n,r,o)=>{if(!n){var a=1/0;for(f=0;f<e.length;f++){for(var[n,r,o]=e[f],l=!0,i=0;i<n.length;i++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](n[i])))?n.splice(i--,1):(l=!1,o<a&&(a=o));if(l){e.splice(f--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};c.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,l,i]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in l)c.o(l,r)&&(c.m[r]=l[r]);if(i)var f=i(c)}for(t&&t(n);s<a.length;s++)o=a[s],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(f)},n=self.webpackChunknocca_nocca=self.webpackChunknocca_nocca||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=c.O(void 0,[736],(()=>c(6567)));r=c.O(r)})();