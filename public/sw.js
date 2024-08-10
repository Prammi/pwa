
//refer to sw as self
//with self get access to service worker for background process    
// only special set of events unlike click on key press --- why --- not manipulation dom with SW

self.addEventListener('install', function (event) {
    console.log('[serive worker] Installing service Worker')
});


self.addEventListener('activate', function (event) {
    console.log('[serive worker] Activation service Worker')
    return self.clients.claim(); // cheat code for solving freq issues with SW.. can work without it but can be added as a preventive measure 
});

//evetn emitted when any call is made html/css/ imgage/any other api req
//any fetch request now goes throught the sw
// respondWith acts on the response ...override the respond 
self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] logging fetch event')
    // event.respondWith(event.request);
    //event.respondWith(null);

});