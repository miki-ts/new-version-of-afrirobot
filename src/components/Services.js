import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Services = ({ onOrderClick }) => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '60px',
      duration: 1800,
      delay: 200
    });

    
  }, []);

  const services = [
    {
      key: 'graphic-design',
      
      title: 'Graphic Design',
      priceLabel: '$20',
      priceUnit: 'per design',
      bundleNote: 'Bundle from $200 / 15 designs',
      description: 'Custom creative visuals that enhance your brand and make you truly stand out.',
      ctaLabel: 'Order Design',
      features: [
        'Logo Design & Branding',
        'YouTube Thumbnail Design',
        'Ad & Social Media Design',
        'Bundle packages available',
      ],
      featured: false,
    },
    {
      key: 'video-editing',
      
      title: 'Video Editing',
      priceLabel: '$30',
      priceUnit: 'per video',
      bundleNote: 'Bundle from $300 / 15 videos',
      description: 'Dynamic video edits that elevate your brand and drive audience engagement.',
      ctaLabel: 'Order Video Edit',
      features: [
        'Short Form (Reels, TikTok, Shorts)',
        'Long Form (YouTube, Documentaries)',
        'Fast turnaround',
        'Bundle packages available',
      ],
      featured: false,
    },
    {
      key: 'tech-development',
      
      title: 'Tech Dev',
      priceLabel: '$500',
      priceUnit: 'per project',
      bundleNote: 'AI & Security from $1,000+',
      description: 'Custom innovative tech solutions that elevate your business to new heights.',
      ctaLabel: 'Start a Project',
      features: [
        'Web Development',
        'Mobile App Development',
        'AI Development',
        'Security Development',
      ],
      featured: false,
    },
    {
      key: 'unlimited-service',
      
      title: 'Unlimited Plan',
      priceLabel: '$700',
      priceUnit: 'per month',
      bundleNote: 'Yearly plan from $6,000',
      description: 'Unlimited design & video editing on a simple monthly or yearly subscription.',
      ctaLabel: 'Subscribe Now',
      features: [
        'Unlimited Graphic Designs',
        'Unlimited Video Edits',
        'Monthly & Yearly plans',
        'Priority support',
      ],
      featured: true,
      badge: 'Most Popular',
    },
  ];

  const handleOrderClick = (e, serviceKey) => {
    e.preventDefault();
    onOrderClick(serviceKey);
  };

  return (
    <section className="services" id="services">
      <div className="services-heading-block">
        <h2 className="heading">Our <span>Services</span></h2>
        
      </div>

      <div className="services-pricing-grid">
        {services.map((service) => (
          <div
            key={service.key}
            className={`service-pricing-card ${service.featured ? 'service-pricing-card--featured' : ''}`}
          >
            {service.badge && (
              <div className="service-badge">{service.badge}</div>
            )}

            <div className="service-card-header">
              <div className="service-card-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
            </div>

            <div className="service-card-price">
              <span className="price-amount">{service.priceLabel}</span>
              <span className="price-unit">{service.priceUnit}</span>
            </div>

            <p className="service-card-description">{service.description}</p>
            <p className="service-bundle-note">{service.bundleNote}</p>

            <a
              href="#"
              className={`service-cta-btn ${service.featured ? 'service-cta-btn--featured' : ''}`}
              onClick={(e) => handleOrderClick(e, service.key)}
            >
              {service.ctaLabel}
            </a>

            <ul className="service-feature-list">
              {service.features.map((feature, idx) => (
                <li key={idx} className="service-feature-item">
                  <i className="bx bx-check service-check-icon"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
