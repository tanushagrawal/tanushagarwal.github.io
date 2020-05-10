'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6e9d159bea854be178c61faa18323cda",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/dice1.png": "fc44976da29e60d963a697479601bf88",
"assets/images/dice2.png": "75fa6f7b0b972a55a477fbe64423ff1e",
"assets/images/dice3.png": "d6fabb0278f5595d914b7c96dd54d36f",
"assets/images/dice4.png": "403131adef0c626b72898da2a5e97205",
"assets/images/dice5.png": "347730e93343d133bfb520f082e0b703",
"assets/images/dice6.png": "dfa1f894b70b9e9d8a6b1df6f57bd750",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "71e71813240b5e92f1d32b080a92a990",
"/": "71e71813240b5e92f1d32b080a92a990",
"main.dart.js": "504a58e8b337fa08ca6ffdd7bffb7299",
"manifest.json": "3cbfcb964ab21b34a8fdfaee7573f445"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
