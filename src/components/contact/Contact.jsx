import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j59p2mb', 'template_h3v4veb', form.current, 'EW_7klMlF6N-IMOeq')
      .then((result) => {
          alert('email send successfully !')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    
  };
  return (
    <div className='section contact container' id='contact'>
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">
            Let's talk about work!
          </h3>
          <p className="contact_details">
            Don't like forms? Send an Email
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text" className='contact_form-input' placeholder='Insert your name' />
            </div>
            <div className="contact_form-div">
              <input type="email" className='contact_form-input' placeholder='Insert your email' />
            </div>
          </div>
          <div className="contact_form-div">
          <input type="text" className='contact_form-input' placeholder='Insert your subject' />
          </div>

          <div className="contact_form-div contact_form-area">
          <textarea name='' id='' cols={30} rows={10} type="text" className='contact_form-input' placeholder='Write your message'></textarea>
          </div>
          <button className='btn'>Send Message</button>

        </form>
      </div>
    </div>
  )
}

export default Contact