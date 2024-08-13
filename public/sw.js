
// //refer to sw as self
// //with self get access to service worker for background process    
var cache_static_name = 'static-v1';
var cache_dynamic_name = 'dynamic-v1';
self.addEventListener("install", (event) => {
    console.log('[serive worker] Installing service Workers')
    event.waitUntil(
        caches.open(cache_static_name).then(function (cache) {
            cache.add('/');
            // cache.add('/offline.html');
        })
    )

});

self.addEventListener('activate', function (event) {
    //self activate wgeb user closes all pages and opens again .. alternative is to skip wait and start
    console.log('[serive worker] Activation service Worker');
    //perfect palce to remove all the caches 
    // cannot remove in install as the app will be still running 
    // where as for active all the pages will be closed and then the app is not dependat on the cache hence perfect place to delete the cacje 
    event.waitUntil(caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (key !== cache_dynamic_name && key !== cache_static_name) {
                console.log('[serive worker] removing all cache ', key);
                return caches.delete(key)
            }
        }));

    }))
    return self.clients.claim(); // cheat code for solving freq issues with SW.. can work without it but can be added as a preventive measure 
});

//evetn emitted when any call is made html/css/ imgage/any other api req
//any fetch request now goes throught the sw
// respondWith acts on the response ...override the respond 
self.addEventListener('fetch', function (event) {
    // console.log('[Service Worker] logging fetch event')
    // event.respondWith(event.request);
    //event.respondWith(null);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request).then(function (res) {
                        return caches.open(cache_dynamic_name).then(function (cache) {
                            cache.put(event.request.url, res.clone()) // explain the difference between put and add 
                        })
                    })
                }
            })
    )

});

// //caches only
// self.addEventListener('fetch', function (event) {
//     event.respondWith(caches.match(event.request))
// })


// //Network only
// self.addEventListener('fetch', function (event) {
//     event.respondWith(fetch(event.request))
// })

// //Network with cache fall  back  only
// self.addEventListener('fetch', function (event) {
//     event.respondWith(fetch(event.request)
//         .catch(function (err) { return caches.match(event.request) }))
// })