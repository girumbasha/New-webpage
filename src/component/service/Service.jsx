import React from 'react'
import './Service.css';
function   Service() {
  return (
    <div>
    

    <section className="services section" id="services">
        <div className="service-container">
          <div className="section-header">
            <h3 className="service-title" data-title="What I Do">Services</h3>
            <p className="service-text">
            I offer a range of services to meet your web development needs. 
            Whether you're looking for a stunning website, a responsive design, 
            or custom web solutions,
             I've got you covered. Take a look at some of the services I provide:
            </p>
          </div>

          <div className="cards">
            <div className="card-wrap">
              <img
                src="./img/shapes/points3.png"
                className="points points1 points-sq"
                alt=""
              />
              <div className="card" data-card="UI/UX">
                <div className="card-content z-index">
                  <img src="./img/design-icon.png" class="icon" alt="" />
                  <h3 className="title-sm">Web Design</h3>
                  <p className="text">
                  When it comes to creating visually stunning websites, I've got you
                   covered. I specialize in
                   web design and can bring your ideas to life with beautiful and 
                   engaging designs. I pay attention to every detail, ensuring that 
                   your website not only looks great but also provides an intuitive user 
                   experience.
                  </p>
                  <a href="https://www.interaction-design.org/literature/topics/web-design" class="btn small">Read more</a>
                </div>
              </div>
            </div>

            <div className="card-wrap">
              <div className="card" data-card="Code">
                <div className="card-content z-index">
                  <img src="./img/code-icon.png" class="icon" alt="" />
                  <h3 className="title-sm">Web Development</h3>
                  <p className="text">
                  I am a frontend web developer with a passion for creating cool
                   and responsive websites. With 3 years of experience in web development,
                    I have gained proficiency in HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap.
                  </p>
                  <a href="https://brainstation.io/career-guides/what-is-web-development" class="btn small">Read more</a>
                </div>
              </div>
            </div>



            <div className="card-wrap">
              <div className="card" data-card="Code">
                <div className="card-content z-index">
                  <img src="./img/code-icon.png" class="icon" alt="" />
                  <h3 className="title-sm">Marketing</h3>
                  <p className="text">
                  Effective marketing is crucial for the success of any business. 
                  I offer marketing solutions to help you reach your target audience 
                  and boost your online presence. From strategic planning to implementation,
                   I can assist you in creating effective 
                  marketing campaigns that drive results and enhance brand awareness.
                  </p>
                  <a href="https://www.ama.org/the-definition-of-marketing-what-is-marketing/" class="btn small">Read More </a>
                </div>
              </div>
            </div>


            <div className="card-wrap">
              <div className="card" data-card="Code">
                <div className="card-content z-index">
                  <img src="./img/code-icon.png" class="icon" alt="" />
                  <h3 className="title-sm">UI Design</h3>
                  <p className="text">
                  User Interface (UI) design plays a vital role in creating
                   visually appealing and intuitive digital experiences. 
                   I specialize in UI design, combining creativity and 
                   user-centric principles to craft engaging interfaces. 
                   Whether it's designing wireframes, mockups, or interactive prototypes,
                   I strive to create 
                  seamless and visually appealing designs that enhance user interactions.
                  </p>
                  <a href="https://www.coursera.org/articles/ui-design" class="btn small">Read more</a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


         


    </div>
  ) 
}
export default   Service;