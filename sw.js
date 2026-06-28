/* อ่าน — Learn Thai service worker */
const CACHE = 'aan-thai-v5-4';
const ASSETS = ['./', './index.html', './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* network-first for the app shell (so updates land), cache fallback offline;
   cache-first for everything else (icons, fonts) */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isShell = url.origin === location.origin &&
    (url.pathname.endsWith('/') || url.pathname.endsWith('index.html'));
  if (isShell) {
    e.respondWith(
      fetch(e.request)
        .then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; })
        .catch(() => caches.match(e.request).then(m => m || caches.match('./index.html')))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(m => m || fetch(e.request).then(r => {
        if (r.ok && url.protocol.startsWith('http')) {
          const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp));
        }
        return r;
      }).catch(() => m))
    );
  }
});
