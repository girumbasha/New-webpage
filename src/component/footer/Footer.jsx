import React from 'react';
import './Footer.css';
import { FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';



function Footer() {
  return (

    //Map 
    <footer id="footer">
    <div className="container">
     
      <div className="bottom-footer">
        

        <div id="footer-contact">
          <div className="followme">
            <h3 className='followme-title'>Contact Me</h3>
            <span className="footer-line"></span>
      <div className="social-media">
        <a href="#">
          <i className="phonenumber">Phone Number: +251993449344.</i>
        </a>
        <p className='email-text' style={{color:'white'}}>Email:  girumbasha0@gmail.com</p>
        <p>
          <i style={{ color: 'white' }}>Social Media:</i>
          
          <a href="https://twitter.com/@Billy_girum">
            <FaTwitter className="social-icon" /> @Billy_girum
          </a>
          <a href="https://www.instagram.com/gura.billy">
            <FaInstagram className="social-icon" /> instagram
          </a>
          <p><a href="https://t.me/@ethan084">
            <FaTelegram className="social-icon" /> @ethan084
          </a>     <a href="https://www.linkedin.com/in/girum-basha" target="_blank" rel="noopener noreferrer">Check My LinkedIn</a></p>
         
        </p>
     
              <div className="copyright">
          <p className="text">
    Copyright&copy;2023 All rights reserved | Made by<span className='https://www.linkedin.com/in/girum-basha'> <a href='#'>Girum Basha</a></span>
          </p>
         
        </div>
       

            </div>
          </div>

          
        </div>
      </div>
    </div>
  </footer>
    
  )
}
export default Footer;