// VBH crew clock: the smallest possible service worker. It stores nothing and changes no
// request; it exists only so Android Chrome will offer "Install" for the home screen app.
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function() {});
