
import './contact.css'
import React, { useRef, useState } from 'react';
import  {sendMessage} from '../../services/email.js'




function Contact () {

  const form = useRef();
  const [isFormVisible, setIsFormVisible] = useState(true)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: e.target.user_name.value,
      reply_to: e.target.user_email.value,
      message: e.target.message.value,
    }
    try {
      const response = sendMessage(templateParams)
      console.log("Message sent", response)
      setIsFormVisible(false)

    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
    
  return (
  <>
  <div className='contact-component'>
    <h2>Let's Get In Touch</h2>
    <div className='contact-div hidden'>
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
        {
          isFormVisible?
          <form ref={form} className='form' onSubmit={handleSubmit}>
            <label className='form-name'>Name</label>
            <input className="form-name-input"type="text" name="user_name" autoComplete='no'/>
            <label className='form-email'>Email</label>
            <input className='form-email-input' type="email" name="user_email"  autoComplete='no'/>
            <label className='form-message'>Message</label>
            <textarea className='form-message-input' name="message" autoComplete='no'/>
            <input type="submit" value="Send" className='btn-send'/>
          </form>
          :
          <>
          <h4>Thanks For your message</h4>
          <p>We'll be in touch soon!</p>
          </>
        }
      </div>
        {/* <div></div> */}
      </div>
    </div>
  </>
  )
}


export default Contact