// ហ្វាល sw.js សម្រាប់ដើរនៅ Background
self.addEventListener('push', function(event) {
    const title = 'MATIN TOPUP: កម្មង់ថ្មី!';
    const options = {
        body: 'មានការកម្មង់ចូលថ្មី សូមពិនិត្យមើល!',
        icon: 'matin3-removebg-preview.png',
        badge: 'matin3-removebg-preview.png',
        vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40],
        data: { url: './index.html' },
        tag: 'order-notification',
        renotify: true
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
