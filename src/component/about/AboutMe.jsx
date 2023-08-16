import React from 'react'
import './AboutMe.css';
import mypro from './mypro.jpg'
function AboutMe() {
  return (
    <div className="about-container">
  

  <section className="about section" id="about"> 
        
          <div className="section-header">
            <h3 className="about-title" data-title="Who Am I">About me</h3>
          </div>
          <div className="profile-image">
         <img src={mypro}alt='Profile'className='centered-image'/>
      </div>
          <div className="section-body grid-2">
            <div className="column-1">
             
              <p className="text">
      <span className='text-bold'>Hello There!</span>  I'm Girum Basha, and I'm currently working as a freelance Web developer and designer.<br/>
      If you need any kind of website for your business or personal use, you can contact me!</p>
<p className='text-paragraph-title'>I'm proficient in the following skills:</p>
             
             
                  <div className='skills-container'>
                  <p className="first-skill-title">HTML, CSS, JavaScript, React.js, TailwindCSS.</p>
                  
            
                <p  className="second-title"> </p>
                </div>
                {/* <div class="skill-bar">
                  <div class="skill-progress" data-progress="80%"></div>
                </div> */}
            
            </div>
      
            
             
             
         
          </div>
         
           
           
          </section>
     </div>
       
        
         

         
     



  
  )
}
export default AboutMe;