import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style.css';
import mailIcon from '../icons/mail-icon-1.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqea5rq', 'template_qbpz3sw', form.current, 'KVZihQg63PHcWqxi_')
      .then((result) => {
        console.log(result.text);
        console.log("message sent!")
      }, (error) => {
        console.log(error.text);
        console.log("you fail")
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="section-block">
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
                  <input className='name-info' placeholder="Name" type="text" name="user_name" />
                </div>
                <div className='contact-form-inner-block'>
                  <div className='contact-info'>Email Address</div>
                  <input className='email-info' placeholder="Email" type="email" name="user_email" />
                </div>

              </div>
            </div>

            <div className='contact-form-bottom-block'>
              <div className='contact-info'>Message</div>
              <textarea className='message-info' placeholder="Message" name="message" />
            </div>

            <div className='button-block'>
              
              <input className='contact-button' type="submit" value="Send" placeholder='Send Message' />
            </div>

          </div>

        </div>




      </div>

    </form>
  )
}

export default Contact