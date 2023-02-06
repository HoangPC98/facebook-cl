import React, { useState } from "react";
import { FirebaseProvider } from "@useweb/use-firebase";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { firebaseConfig, vapidKey } from "./config";

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

const envIsDev = process.env.NODE_ENV === "development";

const fcmToken = (setTokenFound) => {
  return getToken(messaging, { vapidKey: vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

function Firebase({ children }) {
  return (
    <FirebaseProvider
      firebaseConfig={firebaseConfig}
      firebaseApp={firebaseApp}
      envIsDev={envIsDev}
      messaging={messaging}
      messagingOptions={{
        vapidKey,
      }}
    >
      {children}
    </FirebaseProvider>
  );
}

export { fcmToken, Firebase };
