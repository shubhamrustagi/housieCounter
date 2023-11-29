// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('housie-cache').then((cache) => {
      return cache.addAll([
        '/',
        './index.html',
        './style.css',
        './index.js',
        '/images/image.png',
        
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
