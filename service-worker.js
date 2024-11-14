const CACHE_NAME = 'aural-pwa-cache-v1';
const urlsToCache = [
    '/aural/',
    '/aural/index.html',
    '/aural/manifest.json',
    '/aural/icon-192x192.png',
    '/aural/icon-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});