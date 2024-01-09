import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';
import '../style.css';
import mailIcon from '../icons/mail-icon-1.png';

const Contact = () => {
  const form = useRef();


  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.user_name) {
      errors.user_name = "Required";
    }
    if (!values.user_email) {
      errors.user_email = "Required";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xqea5rq', 'template_qbpz3sw', form.current, 'KVZihQg63PHcWqxi_')
      .then((result) => {
        console.log(result.text);
        console.log("message sent!");
        toast.success("Message Sent!");
        clearInput(); // Clear input fields after successful submission
      })
      .catch((error) => {
        console.log(error.text);
        console.log("message failed to send");
        toast.error("Message failed to send");
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Call the sendEmail function here
      sendEmail(e); // <-- Pass the event here
      console.log("HELLO"); // You can keep this line if needed
    }
  };


  const clearInput = () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      document.getElementById("info-1").value = "";
      document.getElementById("info-2").value = "";
      document.getElementById("info-3").value = "";
    }
  };


  return (
    <form ref={form} onSubmit={handleFormSubmit} className="section-block">
      
      <div className='about-page-contact-section' >
        <div className='another-one'>
          <div className="section-container-two">
            <img className="contact-section-icon" src={mailIcon} alt="Mail Icon" />
            <div className="section-title">Contact Us</div>
          </div>

          <div className='contact-block'>
            <div className='contact-form-block'>

              <div className='contact-form-top-block'>

                <div className='contact-form-inner-block'>
                  <div className='contact-info'> Full Name
                    <p className='errors'>{formErrors.user_name}</p>
                  </div>
                  <input className='name-info' id='info-1' placeholder="Name" type="text" name="user_name"
                    value={formValues.user_name} onChange={handleChange} />
                </div>

                <div className='contact-form-inner-block'>
                  <div className='contact-info'>Email Address
                    <p className='errors'>{formErrors.user_email}</p>
                  </div>
                  <input className='email-info' id='info-2' placeholder="Email" type="email" name="user_email"
                    value={formValues.user_email} onChange={handleChange} />

                </div>
              </div>

              <div className='contact-form-bottom-block'>
                <div className='contact-info'>Message
                  <p className='errors'>{formErrors.message}</p>
                </div>
                <textarea className='message-info' id='info-3' placeholder="Message" name="message"
                  value={formValues.message} onChange={handleChange} />
              </div>

              <div className='button-block'>

                <input className='contact-button'
                  value="Send" type='submit' placeholder='Send Message' />

              </div>


            </div>

          </div>

        </div>


      </div>
      <ToastContainer />
    </form>
  )
}

export default Contact