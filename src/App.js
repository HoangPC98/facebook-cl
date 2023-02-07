import React, { useEffect, useState } from "react";
import "./App.css";

import Auth from "./views/pages/AuthPage/index.js";
import { Routes, Route } from "react-router-dom";
import OtpVerification from "./views/pages/AuthPage/OtpVerification";
import HomePage from "./views/pages/HomePage/index.js";
import SearchPage from "./views/pages/Search/index";
import PushNotification from "./services/pushNotification";

import { Firebase, fcmToken, onMessageListener } from "./services/firebase/firebase";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: "", body: "" });
    const [isTokenFound, setTokenFound] = useState(false);
    fcmToken(setTokenFound);
    onMessageListener().then(payload => {
        setShow(true);
        setNotification({ title: 'notification fb', body: payload.data.message })
        console.log('incoming notification...', payload.data.message);
        document.getElementById('push-noti').click();
    }).catch(err => console.log('failed: ', err));


    const access_token = document.cookie["access_token"];
    const session_otp = sessionStorage.getItem("otp");

    // inside the jsx being returned:

    return (
        <div className="App">
            <div id="mpage">
                <PushNotification id='push-noti' title={notification.title} body={notification.body} placement={'top'} />
            </div>
            <Routes>
                <Route path="/" element={access_token ? <HomePage /> : <Auth />} />
                <Route path="/home" element={<HomePage />} />
                <Route
                    path="/otp-verification"
                    element={!session_otp ? <OtpVerification /> : <Auth />}
                />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;
