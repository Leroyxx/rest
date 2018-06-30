var cacheName = "restaurant-app-v1";

if(navigator.onLine) {self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                "/",
                "index.html",
                "restaurant.html",
                "img/0.jpg",
                "img/1.jpg",
                "img/2.jpg",
                "img/3.jpg",
                "img/4.jpg",
                "img/5.jpg",
                "img/6.jpg",
                "img/7.jpg",
                "img/8.jpg",
                "img/9.jpg",
                "img/10.jpg",
                "data/restaurants.json",
                "js/main.js",
                "js/dbhelper.js",
                "js/restaurant_info.js",
                "css/styles.css"
            ]);
        })
    );
});
}

self.addEventListener("fetch", function(event) {

    event.respondWith(
        caches.match(event.request, {ignoreSearch: true}).then(function(response) {
            return response || fetch(event.request);
        }).catch(err => console.log(err, event.request))
    )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
