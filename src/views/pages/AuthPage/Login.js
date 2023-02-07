import { useState } from 'react'
// import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { http } from '../../../common/httpRequest';
import PushNotification from '../../../services/pushNotification'


const Login = ({ nav, notify }) => {
    console.log('login', nav.navigate)
    const responseGoogle = (response) => {
        console.log(response);
    }
    const serverURL = 'http://localhost:5000';
    // const LoginToServer = async (gg_token) => {
    //     let option = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             uuid: '1237474382'

    //         },
    //         body: JSON.stringify({
    //             ggToken: gg_token,
    //         }),
    //     }
    //     fetch(`${serverURL}/auth/login/google`, option)
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((result) => {
    //             console.log('data...', result);
    //             console.log('accessToken...', result.data.accessToken)
    //             document.cookie = `access_token=${result.data['accessToken']}`
    //             document.cookie = `refresh_token=${result.data['accessToken']}`
    //             document.cookie = `user=${JSON.stringify(result.data.user)}`
    //             window.location.href = '/home'
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         })
    // };
    // const handleCredentialResponse = (response) => {
    //     console.log("Encoded JWT ID token: ", response);
    //     const ggToken = response.credential
    //     // await LoginToServer(ggToken);

    // }

   

    const [data, setData] = useState({ email_or_phone: '', password: '' })
    
    const submitLogin = async () => {
        const response = await http.post('/auth/login', data);
        if(response.code !== 201) {
            notify.setNoti({
                title: response.message,
                body: response.message,
                placement: 'top'
            })
            document.getElementById('push-noti-alert').click();
        }
        else {
            localStorage.setItem('access_token', response.data.accessToken)
            window.location.href = '/home'
        }
    }
    return (
        <div className="app">

            <div className="login">
                <div className="login-left">
                    <div className="login-left__img">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                    </div>
                    <div className="login-left__text">
                        Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                    </div>
                </div>
                <div className="login-right">
                    <div className="form-login">
                        <form action="home.html">
                            <input
                                onChange={(e) => { setData({ ...data, email_or_phone: e.target.value }) }}
                                id="TK" type="text" placeholder="Email or PhoneNumber" className="form-login__id"
                            />
                            <input
                                onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                                id="PW" type="password" placeholder="Password" className="form-login__pw"
                            />
                            <Button onClick={submitLogin} type="button" className="blue__btn btn">Login</Button>
                        </form>
                        <a href="#" className="form-login__text-forgetpw">Forgot Password?</a>
                        <div className="form-hr" />
                        <div className="or-login">
                            <div id="gglogin" />
                        </div>
                        <Button variant="success" className="btn_px30" onClick={nav.navigate}>Create New Account</Button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login