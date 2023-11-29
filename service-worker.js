
const CACHE_NAME = 'housie-cache';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/style.css',
  '/index.js',
  '/images/letter-h.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
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
