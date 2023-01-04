// Service Worker
// Install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('static')
      .then(cache => {
        return cache.addAll([
          '/index.html',
          '/manifest.json',
          '/favicon.ico',
          '/logo192.png',
          '/logo512.png',
        ])
      })
  )
})

// Fetch event and return requests
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => {
        console.log('Cache hit - return response')
        console.log(response);

        if (response) {
          return response
        }

        console.log(e.request);
        return fetch(e.request);
      })
  )
})
