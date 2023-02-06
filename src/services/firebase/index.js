import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyDQsoqOpDnTrTZsYfFJSpp3pc1IyGmLmO4",
  authDomain: "myfb-efb67.firebaseapp.com",
  projectId: "myfb-efb67",
  storageBucket: "myfb-efb67.appspot.com",
  messagingSenderId: "745191204509",
  appId: "1:745191204509:web:48e42b38b58b1563a39674",
  measurementId: "G-XL7QM1Q433"
};

// const componentDidMount = () => {
initializeApp(firebaseConfig);
// }

const messaging = getMessaging();

const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: 'BGv2shQvtAKz_Pl7-Ny8SHTPYYml2glip_6ys7y7rbBgASMpaD-owx0bLdhCWDCPoSMggLnuU8P0NK4UTKqT0bE' });
    if (currentToken) {
      console.log('current token for client: ', currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
};

export { requestForToken, messaging }