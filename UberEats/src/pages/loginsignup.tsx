import Loginnav from '../components/loginnav'
import './loginsignup.css'
import googlelogo from '../assets/images/google.png'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
        <Loginnav/>
        <div className="body">
            <h3>What's your phone number or email?</h3>
            <input type="text" name="" id="contact" placeholder='Enter phone number or email'/>
            <button className='black'>Continue</button>
            <div className="divider">
                <hr className="rule-left"/>
                <span className="or">or</span>
                <hr className="rule-right"/>
            </div>
            <button className='grey'><img src={googlelogo} alt="googleiscon" width={15}/>  Continue with Google</button>
            {/* <button className='grey'><i className='bx bxl-google'> Continue with Google</i></button> */}
            <button className='grey'><i className='bx bxl-apple'></i>  Continue with Apple</button>
            <button className='grey'><i className='bx bxl-facebook'></i>  Continue with Facebook</button>
            <div className="divider">
                <hr className="rule-left"/>
                <span className="or">or</span>
                <hr className="rule-right"/>
            </div>
            <button className='qr'>Login with QR code</button>
            {/* <span>Login with QR code</span> */}
            <p>By proceeding, you consent to get calls, WhatsApp</p>
        </div>
    </div>
  )
}

export default Loginsignup