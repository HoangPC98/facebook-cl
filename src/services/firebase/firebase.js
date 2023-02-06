// import React from 'react'
// import { FirebaseProvider } from '@useweb/use-firebase'
// import { initializeApp } from 'firebase/app'
// import { getMessaging } from 'firebase/messaging'
// import { firebaseConfig, vapidKey } from './config'

// const firebaseApp = initializeApp(firebaseConfig)
// const messaging = getMessaging(firebaseApp)

// const envIsDev = process.env.NODE_ENV === 'development'


// export default function Firebase({ children }) {
//   return (
//     <FirebaseProvider
//       firebaseConfig={firebaseConfig}
//       firebaseApp={firebaseApp}
//       envIsDev={envIsDev}
//       messaging={messaging}
//       messagingOptions={{
//         vapidKey,
//       }}
//     >
//       {children}
//     </FirebaseProvider>
//   )
// }


