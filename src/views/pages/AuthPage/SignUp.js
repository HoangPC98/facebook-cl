import  { useState, useEffect } from 'react'
import { http } from '../../../common/httpRequest'
import DatePicker from '../../components/Datepicker/DatePicker'
// import facebook_text from '../../img/svgs/facebook-text.svg'
import { Button } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import OtpVerification from './OtpVerification';

// import DatePicker from "react-datepicker";
import pushNotification from '../../../services/pushNotification'
const SignUp = ({ nav, notify }) => {
    const [data, setData] = useState({ first_name: '', last_name: '', email_or_phone: '', gender: 'male', dob: '', password: '' })
    const dataHandler = { data, setData }
    const submitSignUp = async (e) => {
        e.preventDefault();
        console.log('submitSignUp', data)
        const response = await http.post('/auth/signup/fillout-data', data)
        if (response.status === 201 || 200) {
            const mpage = document.getElementById('mpage')
            ReactDOM.render(
                <OtpVerification otp_type={'verify_email_phone'} email_or_phone={data.email_or_phone}/>,
                mpage
            )

        }
        else {
            notify.setNoti({
                title: 'Sign Up Failure !!',
                message: response.message || 'Sign Up Failure',
                placement: 'top'
            })
            document.getElementById('push-noti').click();
        }
    }

    return (
        <div className="app">
            <div className="sign-up center-item">
                {/* <div className="sign-up__head">
                    <img src={facebook_text} className="" alt="facebook_text" />
                </div> */}
                <div className="sign-up__head">
                    <div className="sign-up__heading">Sign Up</div>
                    <p className="sign-up__sub-heading">Fastly and Simply</p>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="" className="sign-up__close" />
                </div>
                <div className="form-hr" />
                <form onSubmit={submitSignUp} className="sign-up__action" action="home.html">
                    <div className="sign-up__name">
                        <input onChange={e => setData({ ...data, first_name: e.target.value })} type="text" className="sign-up__first-name" placeholder="First Name" required />
                        <input onChange={e => setData({ ...data, last_name: e.target.value })} type="text" className="sign-up__last-name" placeholder="Last Name" required />
                    </div>
                    <input onChange={e => setData({ ...data, email_or_phone: e.target.value })} type="text" className="sign-up__phone" placeholder="Email or Phone" required />
                    <input onChange={e => setData({ ...data, password: e.target.value })} type="password" className="sign-up__pw" placeholder="New Password" required />
                    <div className="sign-up__gender">
                        <div className="sign-up__gender-head">Gender</div>
                        <span className="sign-up__gender-icon" />
                        <div className="sign-up__gender-radio">
                            <label htmlFor="male" className="gender-radio__male">
                                Male
                                <input
                                    id="gender-male"
                                    checked={data.gender === 'male'}
                                    defaultChecked type="radio" name="gender"
                                    onClick={() => setData({ ...data, gender: 'male' })}
                                />
                            </label>
                            <label htmlFor="female" className="gender-radio__female">
                                Female
                                <input
                                    id="gender-female"
                                    checked={data.gender === 'female'}
                                    type="radio" name="gender"
                                    onClick={() => setData({ ...data, gender: 'female' })}
                                />
                            </label>
                        </div>
                    </div>
                    <DatePicker dataHandler={dataHandler} />
                    <div className="sign-up__policy">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với
                        <span> Điều khoản, Chính sách dữ liệu </span> và <span>Chính sách cookie</span> của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                    </div>
                    {/* <button type="submit" className="btn btn_px30">Submit</button> */}
                    <Button onClick={submitSignUp} variant="success" className="btn_px30" >Submit</Button>
                    <div>
                        <p className="form-login__text-forgetpw" onClick={nav.navigate}>Already have an account? Login Now</p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUp