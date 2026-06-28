importScripts('/scramjet.config.js');
importScripts('/scramjet.code.js');

const scramjet = new Scramjet(self.__scramjet$config);

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(self.location.origin + self.__scramjet$config.prefix)) {
        event.respondWith(scramjet.fetch(event));
    }
});
