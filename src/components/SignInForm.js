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

      <hr className='sign-in-line'></hr>

      <div className='sign-in-block'>

        <div className='sign-in-inner-block'>
          <input className='username-info' id='info-1' placeholder="Username or Email" type="text" name="user_name" />
        </div>

        <div className='sign-in-block'>
          <input className='email-info' id='info-2' placeholder="Password" type="email" name="user_email" />
        </div>
        
        <div className='button-block'>

          <button className='log-in-button'>Log In</button>

        </div>

        <div className='sign-in-lower-block'>
          <div className='forgot-password'>Forgot Password?</div>
            

          <div className='alternate-sign-in'>
            <div className='alternate-sign-in-title'>Dont have an account?</div>
            
            <div className='sign-in-extras'> 
              <div className='create'>Create Account</div>
              <div className='guest'>Log In As Guest</div>
            </div>
          </div>
        </div>
        


      </div>



    </div>
  )
}

export default SignInForm