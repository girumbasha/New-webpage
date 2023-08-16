import './App.css';
import React, { useState, useEffect } from "react";
import Nav from './component/Header/Nav';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeaderContent from './component/Header/HeaderContent';
import Service from './component/service/Service';
import AboutMe from './component/about/AboutMe';
import Blog from './component/blog/Blog';
import PeopleThink from './component/PeopleThink/PeopleThink';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show the button when scrolled 300px or more
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Nav />
      <HeaderContent />
      <Service />
      <AboutMe />
      <Blog />
      <PeopleThink />
      <Contact />
      <Footer />
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default App;
