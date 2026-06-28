importScripts('/scramjet.config.js');

// We use the system's underlying fetch mechanisms via bare-mux worker mappings
self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(self.location.origin + self.__scramjet$config.prefix)) {
        // Intercepts proxy web requests and offloads them to your mux worker over wisp
        event.respondWith(
            fetch(event.request)
        );
    }
});
