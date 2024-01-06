import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success("Message Sent!");
      }, (error) => {
        console.log(error.text);
        console.log("message failed to send")
        toast.error("Message failed to send");
      });
  }; 

  const clearInput = () => {
    document.getElementById("info-1").value = "";
    document.getElementById("info-2").value = "";
    document.getElementById("info-3").value = "";
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
                  <input className='name-info' id='info-1' placeholder="Name" type="text" name="user_name" />
                </div>
                <div className='contact-form-inner-block'>
                  <div className='contact-info'>Email Address</div>
                  <input className='email-info' id='info-2' placeholder="Email" type="email" name="user_email" />
                </div>

              </div>
            </div>

            <div className='contact-form-bottom-block'>
              <div className='contact-info'>Message</div>
              <textarea className='message-info' id='info-3' placeholder="Message" name="message" />
            </div>

            <div className='button-block'>
              
              <input className='contact-button'
                 value="Send" type='submit' placeholder='Send Message' 
                onClick={clearInput} />
              
            </div>
            

          </div>

        </div>


      </div>
      <ToastContainer />
    </form>
  )
}

export default Contact