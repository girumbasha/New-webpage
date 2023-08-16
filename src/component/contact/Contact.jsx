import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r8k7xap', 'template_ccdp105', form.current, 'Sdt8h6NMxAN6pnrkG')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  emailjs.init('Sdt8h6NMxAN6pnrkG');

  return (
    <div className='container-fluid contact-page'>
      <h2 className='contact-text'>Text Me</h2>
      <form ref={form} onSubmit={sendEmail} className='contact-form card flex-center dir-column border-0' style={{ backgroundColor: '#0C0C0C'}}>
       <div className='form-group'>
        <p className='form-text' style={{color:'#fff'}}>Enter your name</p>
  <input
    type='text'
   
    name='user_name'
    required
    className='form-control mb-3'
    style={{
      backgroundColor: 'black',
      fontFamily: "'Cormorant Upright', serif",
      color: 'white'
    }}
  />
</div>
<div className='form-group'>
<p className='form-text' style={{color:'#fff'}}>Enter your email</p>
  <input
    type='email'
  
    name='user_email'
    required
    className='form-control mb-3'
    style={{
      backgroundColor: 'black',
      fontFamily: "'Cormorant Upright', serif",
      color: 'white'
    }}
  />
</div>
<div className='form-group'>
<p className='form-text' style={{color:'#fff'}}>Title   (optional)</p>
  <input
    type='text'
    
    name='subject'
    className='form-control mb-3'
    style={{
      backgroundColor: 'black',
      fontFamily: "'Cormorant Upright', serif",
      color: 'white'
    }}
  />
</div>
<div className='form-group'>
<p className='form-text' style={{color:'#fff'}}>write your message</p>
  <textarea
    name='message'
    cols='30'
    rows='10'
    className='form-control mb-3'
    style={{
      backgroundColor: 'black',
      fontFamily: "'Cormorant Upright', serif",
      color: 'white',
      '::placeholder': {
        color: 'red' // Change the placeholder color here
      }
    }}
  ></textarea>
</div>

        <button
          type='submit'
          className='btn btn-primary text-center'
          style={{
            width: '140px',
            backgroundColor: 'white',
            color: 'black',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
