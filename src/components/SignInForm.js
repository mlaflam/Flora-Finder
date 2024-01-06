import React from 'react'
import plantIcon from '../icons/leaf-icon-3.png';

import { HashLink as Link } from 'react-router-hash-link';


const SignInForm = () => {
  return (
    <div id="sign-in-container">
      <div className="sign-in-title-container">
        <img className="explore-icon" src={plantIcon} alt="Compass Icon" />

        <div className="explore-title">Sign In</div>
      </div>

      <hr className='line'></hr>

      <div className='contact-form-top-block'>

        <div className='contact-form-inner-block'>
          <input className='username-info' id='info-1' placeholder="Username or Email" type="text" name="user_name" />
        </div>

        <div className='contact-form-inner-block'>
          <input className='email-info' id='info-2' placeholder="Password" type="email" name="user_email" />
        </div>
        
        <div className='button-block'>

          <button className='contact-button'>Log In</button>

        </div>

        <div>
          <div>Forgot Password</div>
          <div>Create Account</div>
        </div>
        
        <div className='button-block'>

          <button className='contact-button'>Log In As Guest</button>

        </div>


      </div>



    </div>
  )
}

export default SignInForm