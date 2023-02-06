import  { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { http } from '../../../common/httpRequest';
import { otpttl } from '../../../constants/constant';
import './login.css'

const OtpVerification = ({otp_type, email_or_phone }) => {
    const [otpcount, setOtpCount] = useState(1)
    const [otpCode, setOtpCode] = useState(111333)
    useEffect(() => {
        const idTimer = otpcount > 0 && setInterval(() => {
            setOtpCount((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(idTimer)
    }, [otpcount])
    const resendOtp = async () => {
        const resendResult = await http.post('/auth/otp/get-new/na', { otp_type, email_or_phone: email_or_phone || 'anhgog1198@gmail.com' });
        if (resendResult.code === 200) {
            setOtpCount(otpttl)
        }
        else
            alert('Error when resend OTP')
    }

    const submitOtp = async () => {
        const verifyOtpResult = await http.post('/auth/otp/verify-submission', {otp_code: otpCode, otp_type, email_or_phone: email_or_phone || 'anhgog1198@gmail.com' })
        if(verifyOtpResult.code === 200){
            alert(`Verify ${otp_type} OTP successfully, Login Now`)
            window.location.href = '/'
        }
        else 
            alert(verifyOtpResult.message)
    }
    return (
        <div className="app">
            <div className="sign-up center-item">
                <div className="sign-up__head">
                    <div className="sign-up__heading">{otp_type} Verification</div>
                </div>
                <div className="form-hr" />
                <form className="sign-up__action" action="home.html">
                    <div className="sign-up__name">
                        <h5>An OTP code has been send to {email_or_phone || 'anhgog1198@gmail.com'}. Check the inbox and type OTP below</h5>
                    </div>
                    <input onChange={(e)=>setOtpCode(e.target.value)} id='otp-enter'  type="text" className="sign-up__phone" placeholder="Type OTP code here" required />

                    <div className="d-flex justify-content-around">
                        <Button type="button" className="btn_px30 bg-green" onClick={submitOtp}>Confirm</Button>
                        <Button variant="primary" disabled={otpcount === 0 ? false : true} type="button" className="btn_px30 bg-blue" onClick={resendOtp}>{otpcount === 0 ? 'Resend Otp' : 'Resend in ' + otpcount + 's'}</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default OtpVerification