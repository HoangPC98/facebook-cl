import  { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import PushNotification from '../../../services/pushNotification'

import './login.css'
const Auth = () => {
    var [page, setPage] = useState('login')
    const [noti, setNoti] = useState({
        title: '',
        body: '',
        placement: 'top'
    })
    const notify = {noti: noti, setNoti: setNoti}
    const navigate = () => {
        setPage(page === 'login' ? 'signup' : 'login');
    }
    let nav = { page, setPage, navigate }
    return (
        <>
            {page === 'login' ? <Login nav={nav} notify={notify} /> : <SignUp nav={nav} notify={notify}/>}
            <PushNotification id='push-noti' title={noti.title} body={noti.body} placement={noti.placement} />
        </>
    )
}

export default Auth
