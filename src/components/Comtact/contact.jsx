
import './contact.css'
import React, { useRef } from 'react';
import  {sendMessage} from '../../services/email.js'

const API_URL = import.meta.env.VITE_API_URL;


function Contact () {

  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
    try {
      const response  =  sendMessage(templateParams)
      console.log("Message sent", response)
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
    
  return (
  <>
  <div className='contact-component'>
    <h3>Let's Get In Touch</h3>
    <div className='contact-div'>
      <div className='call'>
        <h4>Call Us</h4>
        <p>For English (559) 362-1049</p>
        <a href="tel:559-362-1049">
        <button className='call-btn'>Call Us</button>
        </a>
        or
        <p>Para Español (559) 362-1152</p>
        <a href="tel:559-362-1152">
        <button className='call-btn'>Llamanos</button>
        </a>
      </div>
      <div className='email'>
        <h4>Email Us</h4>
      <form ref={form} className='form' onSubmit={handleSubmit}>
        <label className='form-name'>Name</label>
        <input className="form-name-input"type="text" name="name" />
        <label className='form-email'>Email</label>
        <input className='form-email-input' type="email" name="email" />
        <label className='form-message'>Message</label>
        <textarea className='form-message-input' name="message" />
        <input type="submit" value="Send" className='btn-send'/>
      </form>
      </div>
        {/* <div></div> */}
      </div>
    </div>
  </>
  )
}


export default Contact