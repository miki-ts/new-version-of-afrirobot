import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-img-container">
        <div className="tech-animation">
          <img src="cf.avif" alt="About Afrirobot" className="about-image" />
        </div>
      </div>
      
    </section>
  );
};

export default About;
