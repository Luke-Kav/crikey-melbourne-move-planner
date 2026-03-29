const CACHE = 'crikey-v1';
const ASSETS = [
  '/crikey-melbourne-move-planner/',
  '/crikey-melbourne-move-planner/index.html',
  '/crikey-melbourne-move-planner/steve.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
