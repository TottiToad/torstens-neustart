self.addEventListener('install', function(event) {
  console.log('Service Worker installiert.');
});

self.addEventListener('push', function(event) {
  const title = 'Torstens Neustart';
  const options = {
    body: 'Zeit für deinen Moment: Loslassen, atmen, dich erinnern.',
    icon: 'assets/icon.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
