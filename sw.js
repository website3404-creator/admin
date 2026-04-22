const CACHE_NAME = 'matin-admin-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// មុខងារទាញទិន្នន័យនៅ Background (សម្រាប់ Android)
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-new-orders') {
        event.waitUntil(checkOrdersAndNotify());
    }
});

// មុខងារផ្ញើសារដែលរុញមកពី Server (Push Notification)
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.text() : 'មានការកម្មង់ថ្មី!';
    const options = {
        body: data,
        icon: 'matin3-removebg-preview.png',
        vibrate: [500, 100, 500, 100, 500],
        data: { url: './index.html' },
        tag: 'order-notif',
        renotify: true,
        requireInteraction: true // សារនឹងនៅជាប់លើអេក្រង់ទាល់តែយើងចុចបិទ
    };
    event.waitUntil(self.registration.showNotification('MATIN TOPUP', options));
});
