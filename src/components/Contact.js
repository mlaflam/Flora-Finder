import React from 'react'
import '../style.css';
import mailIcon from '../icons/mail-icon-1.png';

const contact = () => {
  return (
    <div className="section-block">
      <div className='about-page-contact-section' >


        <div className="section-container-two">
          <img className="contact-section-icon" src={mailIcon} alt="Mail Icon" />
          <div className="section-title">Contact Us</div>
        </div>

        <div className='contact-block'>
          <div className='contact-form-block'>

            <div className='contact-form-top-block'>
              <div className='contact-form-top-block-two'>
                <div className='contact-form-inner-block'>
                  <div className='contact-info'>Full Name</div>
                  <input className='name-info' type="text" placeholder="Name" />
                </div>
                <div className='contact-form-inner-block'>
                  <div className='contact-info'>Email Address</div>
                  <input className='email-info' type="text" placeholder="Email" />
                </div>

              </div>
            </div>

            <div className='contact-form-bottom-block'>
              <div className='contact-info'>Message</div>
              <textarea className='message-info' placeholder="Message" />
            </div>

            <div className='button-block'>
              <button className='contact-button'>Send Message</button>
            </div>

          </div>

        </div>




      </div>

    </div>
  )
}

export default contact