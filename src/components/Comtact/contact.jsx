import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
  }
  return (
    <>
    <div className='contact-component'>
      <h3>Lets's Get In Touch</h3>
      <div className='contact-div'>
        <div className='call'>
          <h4>Call Us</h4>
          <p>7727727722</p>
          <button>English</button>
          or
          <p>7727727722</p>
          <button>Spanish</button>
        </div>
        <div className='email'>
          <h4>Email Us</h4>
        <form ref={form} className='form' onSubmit={sendEmail}>
          <label className='form-name'>Name</label>
          <input className="form-name-input"type="text" name="user_name" />
          <label className='form-email'>Email</label>
          <input className='form-email-input' type="email" name="user_email" />
          <label className='form-message'>Message</label>
          <textarea className='form-message-input' name="message" />
          <input type="submit" value="Send" />
        </form>
        </div>
        {/* <div></div> */}
      </div>
    </div>
    </>
  )
}

export default Contact