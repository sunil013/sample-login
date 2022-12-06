import {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {HiMail} from 'react-icons/hi'
import {MdVpnKey} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const SignUp = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [showPass, changeShow] = useState(false)
  const [password, setPassword] = useState('')
  const onChangeName = event => setName(event.target.value)
  const onChangeMail = event => setMail(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)
  const onChangeShow = () => changeShow(prevVal => !prevVal)
  const onClickSignUp = event => {
    event.preventDefault()
  }
  return (
    <div className="sign-page">
      <div className="signup-container">
        <img
          //   src="https://res.cloudinary.com/sunil013/image/upload/v1669979267/7070629_3293465_wianis.jpg"
          //   src="https://nilgiricollege.ac.in/app/app-files/images/userlog.png"
          //   src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
          src="https://applian.com/img/login.svg"
          alt="password"
          className="password-image"
        />
        <div className="card-container">
          <form className="form-signup-section" onSubmit={onClickSignUp}>
            <h1 className="sign-up-heading">Create your account</h1>
            <div className="social-icons-container">
              <a className="fb-icon icons-container">
                <FaFacebookF size={20} />
              </a>
              <a className="mail-icon icons-container">
                <SiGmail size={20} />
              </a>
              <a className="twitter-icon icons-container">
                <AiOutlineTwitter size={22} />
              </a>
            </div>
            <p className="sign-up-message">
              or use your email for registration
            </p>
            <div className="signup-input-box">
              <CgProfile className="icons" />
              <input
                type="text"
                className="user-input"
                value={name}
                onChange={onChangeName}
                placeholder="Name"
              />
            </div>
            <div className="signup-input-box">
              <HiMail className="icons" />
              <input
                type="email"
                className="user-input"
                value={mail}
                onChange={onChangeMail}
                placeholder="example@gmail.com"
              />
            </div>
            <div className="signup-input-box">
              <MdVpnKey className="icons" />
              <input
                type={showPass ? 'text' : 'password'}
                className="user-input"
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={onChangeShow}
                className="show-button"
              >
                {showPass ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="label-box-text">
              <input type="checkbox" id="remember" className="check-box" />
              <label htmlFor="remember" className="signup-label-text">
                I agree to the Terms & Conditions
              </label>
            </div>
            <button className="sign-in-button" type="submit">
              Create my account
            </button>
          </form>
          <p className="sign-in-msg">
            Already have an account?{' '}
            <Link to="/signIn" className="link">
              <span className="sign-forgot">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
