import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineCancel} from 'react-icons/md';
import './Nav.css';
function Nav() {
  const [toggleMenu,setToggleMenu] =useState(false)
  return (
    
      <nav>
          <div className="container" >
            <p className="header__logo">
             Billy
            </p>

            <div class="links">
              <ul>
                <li>
                  <a  className='active' href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
               
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#peoplethink-container">Testimony</a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
                
              </ul>
            </div>
           

            {/* <div className="hamburger-menu">
              <div className="bar"></div>
            </div> */}
          </div>

    {/* small screen */}

          <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27}  onClick={()=>setToggleMenu(true)}/>
     {toggleMenu && (

<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
  <MdOutlineCancel fontSize={27}className='overlay__close'onClick={()=>setToggleMenu(false)}/>

      <ul className='app__navbar-smallscreen_links'>
<li className='p__opensans'><a className='active'  href='#home'onClick={() => setToggleMenu(false)}>Home</a></li>
<li className='p__opensans'><a href='#services' onClick={() => setToggleMenu(false)}>Services</a></li>
<li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
<li className='p__opensans'><a href='#peoplethink-container'onClick={() => setToggleMenu(false)}>Testimony</a></li>
<li className='p__opensans'><a href='#footer'onClick={() => setToggleMenu(false)}>Contact</a></li>

    </ul>
    </div>)}
    </div>
        </nav> 

  )
}
export default Nav;