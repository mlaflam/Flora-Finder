import React from 'react'
import '../style.css';

const contact = () => {
  return (
    <div className='help-2'>
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

      <div className='contact-form-inner-block'>
        <div className='contact-info'>Message</div>
        <textarea className='message-info' placeholder="Message" />
      </div>

    </div>
</div>
  )
}

export default contact