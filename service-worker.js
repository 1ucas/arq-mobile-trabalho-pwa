'use strict';

const CACHE_NAME = 'static-cache-v1';
 
const FILES_TO_CACHE = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];
 
self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Instalando');
 
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Fazendo cache da página estática');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
 
    self.skipWaiting();
});