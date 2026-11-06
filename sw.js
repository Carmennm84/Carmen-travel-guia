var C="autoguia-v7",F=["./","index.html","manifest.webmanifest","icon-180.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}))});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}));
});
