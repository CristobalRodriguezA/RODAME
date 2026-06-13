/* Service worker — caché para que RODAME funcione sin conexión.
   La app es de un solo archivo (index.html con todo incrustado), así que
   solo cacheamos el shell, el manifiesto y los íconos. Al publicar en un
   servidor HTTPS (GitHub Pages, Netlify…) la app queda instalable y offline. */
const CACHE = 'rodame-v2';
const ASSETS = [
  './', 'index.html', 'manifest.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-512-maskable.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // Red primero (para fuentes y CDNs); caché como respaldo para el shell.
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('index.html')))
  );
});
