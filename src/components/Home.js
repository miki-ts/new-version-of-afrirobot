import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = ({ onOrderClick }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Graphic Design", "Video Editing", "Tech Dev", "Unlimited Service"],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        
        <h1>Design, Edit, Develop.<br />Hire Top Talent Today.</h1>
       <h3>Offering <span className="multiple-text" ref={typedRef}></span></h3>

        <div className="home-ctas" style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <a 
            href="#" 
            className="btn primary order-now-btn" 
            onClick={(e) => {
              e.preventDefault();
              onOrderClick();
            }}
          >
            Order Now
          </a>
          <a 
            href="#services" 
            className="btn secondary explore-services-btn" 
            onClick={handleScrollToServices}
          >
            Explore Services
          </a>
        </div>

        <div className="social-media" style={{ marginBottom: '0' }}>
          <a href="https://www.linkedin.com/company/afrirobot" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://www.instagram.com/afrirobot" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram-alt'></i>
          </a>
          <a href="https://www.youtube.com/@Afrirobot" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-youtube'></i>
          </a>
          <a href="https://x.com/Afrirobot1" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src="logos/logo1.avif" alt="Afrirobot Logo" />
      </div>
    </section>
  );
};

export default Home;
