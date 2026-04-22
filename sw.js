// ហ្វាល sw.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// មុខងារនេះព្យាយាមទាញទិន្នន័យទោះបិទអែប (សម្រាប់ Android)
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-new-orders') {
        event.waitUntil(fetchNewOrders());
    }
});
