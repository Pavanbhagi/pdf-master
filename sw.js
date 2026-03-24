const CACHE_NAME = 'pdf-master-v1';
// List every file your app needs to run offline
const assets = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js'
];

// 1. Install Event: Save files to the browser cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching Assets');
      return cache.addAll(assets);
    })
  );
});

// 2. Activate Event: Cleanup old versions of the app
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 3. Fetch Event: Serve from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});