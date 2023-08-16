import React from 'react'
import './HeaderContent.css';
function HeaderContent() {
  return (
    <div>
      <header id="header">
    <div class="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 id="header-title">Girum Basha</h1>
              <p id="text-header">
         Hey there! I am Girum, I'm Freelance web designer<br/> and developer.
              
              </p>
        
            </div>

            <div className="column-2 image">
              <img
                src="./img/shapes/points2.png"
                className="points points2"
                alt=""
              />
              <img src="./img/person.png" className="img-element z-index" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default HeaderContent;