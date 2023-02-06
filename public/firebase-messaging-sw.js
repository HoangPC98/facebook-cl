importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyDQsoqOpDnTrTZsYfFJSpp3pc1IyGmLmO4",
    authDomain: "myfb-efb67.firebaseapp.com",
    projectId: "myfb-efb67",
    storageBucket: "myfb-efb67.appspot.com",
    messagingSenderId: "745191204509",
    appId: "1:745191204509:web:48e42b38b58b1563a39674",
    measurementId: "G-XL7QM1Q433"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action)
  }
  event.notification.close()
})