if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const c=e=>n(e,a),t={module:{uri:a},exports:o,require:c};i[a]=Promise.all(s.map((e=>t[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-C_M0oajx.js",revision:null},{url:"assets/index-QsGgnKyU.css",revision:null},{url:"index.html",revision:"5742869e1370d6acf6bd4e3ae8583c6c"},{url:"registerSW.js",revision:"ecc3f51da8f3a20048f984e8a5f2eb22"},{url:"apple-touch-icon.png",revision:"2af51e512dda9b0259300766b1f4ce62"},{url:"favicon.ico",revision:"0a2fe357e73975b0ccdba8ee34bc4413"},{url:"pwa-192x192.png",revision:"f03c5b818de5d9b181046755612c58c6"},{url:"pwa-512x512.png",revision:"09a088472e50a5571a5d2232ad99a391"},{url:"pwa-maskable-192x192.png",revision:"111d915b65395ba39a0dfe8ec3abbc0d"},{url:"pwa-maskable-512x512.png",revision:"a1377ed1ed01fb858f1baacf4e99a51f"},{url:"manifest.webmanifest",revision:"36991370122fad645241a622158f175e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
