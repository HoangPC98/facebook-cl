// import { getMessaging, getToken } from 'firebase/messaging';


// const messaging = getMessaging();

// export const requestForToken = () => {
//     return getToken(messaging, { vapidKey: 'BGv2shQvtAKz_Pl7-Ny8SHTPYYml2glip_6ys7y7rbBgASMpaD-owx0bLdhCWDCPoSMggLnuU8P0NK4UTKqT0bE' })
//         .then((currentToken) => {
//             if (currentToken) {
//                 console.log('current token for client: ', currentToken);
//                 // Perform any other neccessary action with the token
//             } else {
//                 // Show permission request UI
//                 console.log('No registration token available. Request permission to generate one.');
//             }
//         })
//         .catch((err) => {
//             console.log('An error occurred while retrieving token. ', err);
//         });

// };
