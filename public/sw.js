if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-e739d0df"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Jj82RmKzg-yfHJ9uNHZu6/_buildManifest.js",revision:"39c5ef6f1e60112ba93cf27f76fbfa83"},{url:"/_next/static/Jj82RmKzg-yfHJ9uNHZu6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/134.4a58632285d4c26b.js",revision:"4a58632285d4c26b"},{url:"/_next/static/chunks/276-5f90e6b8d339374d.js",revision:"5f90e6b8d339374d"},{url:"/_next/static/chunks/507.cdc80f8b513fa820.js",revision:"cdc80f8b513fa820"},{url:"/_next/static/chunks/5c111887-7443028aa4d5b068.js",revision:"7443028aa4d5b068"},{url:"/_next/static/chunks/818-33733723a71f12b7.js",revision:"33733723a71f12b7"},{url:"/_next/static/chunks/framework-459be5f469f4cb14.js",revision:"459be5f469f4cb14"},{url:"/_next/static/chunks/main-6d79109d258cf7a7.js",revision:"6d79109d258cf7a7"},{url:"/_next/static/chunks/pages/_app-6e41e43877616275.js",revision:"6e41e43877616275"},{url:"/_next/static/chunks/pages/_error-730ffe4102d122c3.js",revision:"730ffe4102d122c3"},{url:"/_next/static/chunks/pages/blog-ae9a6bb9b7a69011.js",revision:"ae9a6bb9b7a69011"},{url:"/_next/static/chunks/pages/blog/category/%5Bcategory%5D-abde758b0f07d914.js",revision:"abde758b0f07d914"},{url:"/_next/static/chunks/pages/blog/posts/%5Bid%5D-ce148392ba5a3b5b.js",revision:"ce148392ba5a3b5b"},{url:"/_next/static/chunks/pages/index-a9cdccda0ad2cd93.js",revision:"a9cdccda0ad2cd93"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-618401c660321339.js",revision:"618401c660321339"},{url:"/_next/static/css/27d177a30947857b.css",revision:"27d177a30947857b"},{url:"/blog/images/code-review/thumb_nail.png",revision:"73ec44b6567bf8e06d57d10ff3f08601"},{url:"/blog/images/javascript-runtime/thumb_nail.png",revision:"1554fc05a575a1527fa58a7daf96bf80"},{url:"/blog/images/javascript-runtime/v8.png",revision:"2c47070334a46e245ca2b5669ae09845"},{url:"/blog/images/window-open/test1.png",revision:"f77b6f33c62767713d06d5257dc2fde6"},{url:"/blog/images/window-open/test2.png",revision:"8c2fcd1b49ea7fad08119955e5260b4a"},{url:"/blog/images/window-open/test3.png",revision:"1049c01f0ad9a446fee0c7ed2b0c74e7"},{url:"/blog/posts/code-review.md",revision:"761384b0a667eb70a5d0d49ae467ded3"},{url:"/blog/posts/javascript-runtime.md",revision:"8fd48935358926698e1bcaa6e77d108a"},{url:"/blog/posts/window-open.md",revision:"21483f28ed65f8333e7843b6ed840ba4"},{url:"/devwoods-logo.svg",revision:"d69e970c66190b04530743d265055ce0"},{url:"/favicon.ico",revision:"55e6acb34fca1de71b91cb10c84e51fd"},{url:"/icon-192x192.png",revision:"5e5e644eb1323e3586be121c1d51304e"},{url:"/icon-256x256.png",revision:"cc632d890c3c244dcc7acb382feb55f9"},{url:"/icon-384x384.png",revision:"28628a3d4a3d322e93e4a3d0209f8e7a"},{url:"/icon-512x512.png",revision:"7b45fcef272440044c7b2424f196f36f"},{url:"/images/devwoods-logo.png",revision:"0913f997f1c257e956fc9e42975df5e7"},{url:"/manifest.json",revision:"918f6af62b6e7b3884fd7250be4c2185"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
