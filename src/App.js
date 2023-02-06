import React, { useEffect, useState } from 'react'
import './App.css';

import Auth from './views/pages/AuthPage/index.js'
import { Routes, Route } from 'react-router-dom';
import OtpVerification from './views/pages/AuthPage/OtpVerification';
import HomePage from './views/pages/HomePage/index.js';
import SearchPage from './views/pages/Search/index';

// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'

import {Button, Row, Col, Toast} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [show, setShow] = useState(false);

    const access_token = document.cookie['access_token'];
    const session_otp = sessionStorage.getItem('otp');

    return (
        <div className="App">
            <div id="mpage">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                }}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">Notification</strong>
                        <small>12 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>There are some new updates that you might love!</Toast.Body>
                </Toast>
                <header className="App-header">
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </header>
            </div>
            <Routes>
                <Route path="/" element={access_token ? <HomePage /> : <Auth />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/otp-verification" element={!session_otp ? <OtpVerification /> : <Auth />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>

    );
}

export default App;
