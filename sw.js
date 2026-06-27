/* Bond Mortgage Solutions — Service Worker
   v3 — bump this when shipping major asset changes to force-update clients.
   Strategy:
     - HTML: network-first with cache fallback (always fresh when online)
     - Static (css/js/images/videos/fonts): cache-first with background refresh
     - Cross-origin (fonts.googleapis, fonts.gstatic): cache-first
*/
const VERSION = "v3";
const STATIC_CACHE = `bp-static-${VERSION}`;
const HTML_CACHE = `bp-html-${VERSION}`;

const PRECACHE = [
  "/",
  "/index.html",
  "/styles.css?v=32",
  "/script.js",
  "/manifest.json",
  "/Bond%20Peter%20Logo.jpeg",
  "/404.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k.startsWith("bp-") && !k.endsWith(VERSION))
            .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

function isHTML(request) {
  if (request.mode === "navigate") return true;
  const accept = request.headers.get("accept") || "";
  return accept.includes("text/html");
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Never intercept POST/form submissions or external analytics
  if (url.origin !== self.location.origin &&
      !url.host.includes("fonts.googleapis.com") &&
      !url.host.includes("fonts.gstatic.com")) {
    return;
  }

  if (isHTML(req)) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(HTML_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/404.html")))
    );
    return;
  }

  // Static assets — cache-first, refresh in background
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetcher = fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetcher;
    })
  );
});
