import React from 'react'
import './PeopleThink.css'
import BillGate from './BillGates.webp'
import braintracy from './braintracy.jpg'
import andrewtate from './andrewtate.jpg'
import justinwaller from './justinwaller.webp'

function PeopleThink() {
  return (
    <div>
    <div id="peoplethink-container">
          

          <div className="testi-content grid-2">
            <div className="column-1 reviews">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    
            <h3 className="peoplethink-title" data-title="What People Say">What people say about 
              having website for your business?</h3>
          
                    <p className="review-text">
                    "A Website is a window through which your business says hello to the world"
                    </p>

                    <div className="review-info">
                    <div className="review-avatar">
      <img src={braintracy} alt="Brain Tracy" />
    </div>
                      <h3 className="review-name">Brain Tracy</h3>
                      <h5 className="review-job"> Self-development author</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
  <i className="fas fa-quote-left quote"></i>
  <div className="rate">
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
    <i className="fas fa-star"></i>
  </div>

  <p className="review-text">
    "A website can make money for you while you are asleep"
  </p>

  <div className="review-info">
    <div className="review-avatar">
      <img src={BillGate} alt="Bill Gates" />
    </div>
    <div className="review-details">
      <h3 className="review-name">Bill Gates</h3>
      <h5 className="review-job">CO-founded the software giant Microsoft </h5>
    </div>
  </div>
</div>


                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                      
                      "Website promote you 24/7: No employee will do that"
                    </p>

                    <div className="review-info">
                    <div className="review-avatar">
            <img src={andrewtate} alt="Andrew tate" />
        </div>
                      <h3 className="review-name">Andrew Tate</h3>
                      <h5 className="review-job">Multi-Millionaire</h5>
                    </div>
                  </div>

                  <div className="swiper-slide review">
                    <i className="fas fa-quote-left quote"></i>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p className="review-text">
                    "If your business is not on the internet, then your business will be out on business"
                    </p>

                    <div className="review-info">
                    <div className="review-avatar">
            <img src={justinwaller} alt="Justin Waller" />
        </div>
                      <h3 className="review-name">Justin Waller</h3>
                      <h5 className="review-job">American entrepreneur</h5>
                    </div>
                  </div>
                </div>

                <div className="review-nav swiper-button-prev">
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="review-nav swiper-button-next">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>

            <div className="column-2 image">
              <img src="./img/testi.png" alt="" class="img-element" />
            </div>
          </div>
        </div>
        <div className="project-section">
      <h2>Projects I've Created</h2>
      <div className="project-link">
        <h3>Interactive Restaurant Hotel Website</h3>
        <p>A vibrant website for a restaurant hotel featuring interactive menus and reservations.</p>
        <a href="https://rori-restaurant-fawn.vercel.app/" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <div className="group-project-section">
      <div className="project-link">
      <h2>Group Projects</h2>
      
        <h3>Collaborative Portfolio Website for Websidia Group</h3>
        <p>
          Collaborated with a team to create a portfolio website showcasing our combined skills and projects.
          I focused on front-end development and UI/UX design. Our team also included members who contributed
          to backend development and content creation.
        </p>
        <a href="https://websidia.vercel.app/" target="_blank" rel="noopener noreferrer">
          View Group Project
        </a>
      </div>
      {/* Add more group project links here */}
    </div>
    </div>
    </div>
  )
}

export default PeopleThink

