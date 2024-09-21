(function(){"use strict";var e={1964:function(e,t,n){var r=n(5130),o=n(6768);const a={id:"app"};function i(e,t,n,r,i,s){const c=(0,o.g2)("Header"),l=(0,o.g2)("Intro"),u=(0,o.g2)("Footer");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(c),(0,o.bF)(l),(0,o.bF)(u)])}var s=n(4232);const c=e=>((0,o.Qi)("data-v-28a93940"),e=e(),(0,o.jt)(),e),l={class:"container-fluid bg-dark text-white text-uppercase"},u={class:"d-flex align-items-center justify-content-between flex-column flex-md-row mb-4 py-2"},d={class:"mb-0"},f={class:"nav"},p=c((()=>(0,o.Lk)("span",{class:"flag-icon flag-icon-us"},null,-1))),v=c((()=>(0,o.Lk)("span",{class:"flag-icon flag-icon-fr"},null,-1)));function h(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("header",l,[(0,o.Lk)("div",u,[(0,o.Lk)("h3",d,(0,s.v_)(e.$t("header.title")),1),(0,o.Lk)("nav",f,[(0,o.Lk)("a",{class:(0,s.C4)(["nav-link text-white",["en"===r.locale?"active":""]]),onClick:t[0]||(t[0]=e=>r.switchLanguage("en"))},[p,(0,o.eW)(" "+(0,s.v_)(e.$t("header.english")),1)],2),(0,o.Lk)("a",{class:(0,s.C4)(["nav-link text-white",["fr"===r.locale?"active":""]]),onClick:t[1]||(t[1]=e=>r.switchLanguage("fr"))},[v,(0,o.eW)(" "+(0,s.v_)(e.$t("header.french")),1)],2)])])])}var g=n(5931),b={name:"Header",setup(){const{t:e,locale:t}=(0,g.s9)(),n=e=>{t.value=e};return{switchLanguage:n,t:e,locale:t}}},m=n(1241);const k=(0,m.A)(b,[["render",h],["__scopeId","data-v-28a93940"]]);var w=k;const x=e=>((0,o.Qi)("data-v-31bae105"),e=e(),(0,o.jt)(),e),y={class:"container-fluid background",id:"intro"},L={class:"my-5 d-flex flex-column justify-content-center align-items-center"},j=x((()=>(0,o.Lk)("img",{class:"d-block mx-auto mb-4 rounded-image",src:"https://avatars.githubusercontent.com/u/93445134"},null,-1))),_={class:"display-5 fw-bold text-center"},C={class:"col-lg-6 text-center"},O={class:"lead mb-4"},F={class:"d-flex gap-2 justify-content-center"},I={href:"https://github.com/mhss-dev/",target:"_blank",class:"btn btn-dark btn-lg gap-3 button-hover"},E=x((()=>(0,o.Lk)("i",{class:"link fab fa-github fa-3"},null,-1)));function H(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",y,[(0,o.Lk)("div",L,[j,(0,o.Lk)("h1",_,(0,s.v_)(e.$t("intro.title")),1),(0,o.Lk)("div",C,[(0,o.Lk)("p",O,(0,s.v_)(e.$t("intro.text")),1),(0,o.Lk)("div",F,[(0,o.Lk)("a",I,[E,(0,o.eW)(" "+(0,s.v_)(e.$t("intro.projects")),1)])])])])])}var A={name:"Intro",setup(){const{t:e}=(0,g.s9)();return{t:e}}};const $=(0,m.A)(A,[["render",H],["__scopeId","data-v-31bae105"]]);var J=$;const D={class:"bg-dark text-white text-center fixed-bottom py-2"},M={class:"container-fluid"},P={class:"mb-0"};function S(e,t,n,r,a,i){return(0,o.uX)(),(0,o.CE)("footer",D,[(0,o.Lk)("div",M,[(0,o.Lk)("p",P,"© "+(0,s.v_)(a.currentYear)+" HEDI MHSS",1)])])}var V={name:"Footer",data(){return{currentYear:(new Date).getFullYear()}}};const W=(0,m.A)(V,[["render",S],["__scopeId","data-v-a1089dc2"]]);var X=W,T={name:"App",components:{Header:w,Intro:J,Footer:X}};const Y=(0,m.A)(T,[["render",i]]);var Q=Y,q={header:{title:"Portfolio",english:"English",french:"French"},intro:{title:"I'm Hedi",text:"Junior Web Developer with a passion for learning and building modern web applications. I love exploring new technologies and continuously improving my skills in front-end and back-end development. This VueJS-powered portfolio marks my debut with Vue, and I'm already hooked!",projects:"My projects"}},U={header:{title:"Portfolio",english:"Anglais",french:"Français"},intro:{title:"Je suis Hedi",text:"Développeur web junior avec une passion pour l'apprentissage et la construction d'applications web modernes. J'aime explorer de nouvelles technologies et améliorer continuellement mes compétences en développement front-end et back-end. Ce portfolio basé sur VueJS marque mes débuts avec Vue, et je suis déjà fan !",projects:"Mes projets"}};const z={en:q,fr:U};var B=z;const G=(0,r.Ef)(Q),K=(0,g.hU)({locale:"en",messages:B});G.use(K),G.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1964)}));r=n.O(r)})();
//# sourceMappingURL=app.b25a59f9.js.map