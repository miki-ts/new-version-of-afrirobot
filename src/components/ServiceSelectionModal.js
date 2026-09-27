import React from 'react';
import { servicePricing } from '../config/servicePricing';

const ServiceSelectionModal = ({ isOpen, onClose, onSelectService }) => {
  if (!isOpen) return null;

  const services = [
    { key: 'graphic-design', name: 'Graphic Design', price: 'From $20/design' },
    { key: 'video-editing', name: 'Video Editing', price: 'From $30/video' },
    { key: 'tech-development', name: 'Tech Development', price: 'From $500/project' },
    { key: 'unlimited-service', name: 'Unlimited Service', price: 'Monthly & Yearly Subscription' }
  ];

  const handleServiceClick = (serviceKey) => {
    onSelectService(serviceKey);
    onClose();
  };

  return (
    <>
      <div className="modal-overlay active" onClick={onClose}></div>
      <div className="service-selection-modal active" id="serviceSelectionModal">
        <div className="service-selection-content">
          <div className="service-selection-header">
            <h3>Choose a Service</h3>
            <span className="close-service-modal" onClick={onClose}>&times;</span>
          </div>
          <div className="service-options">
            {services.map((service) => (
              <div
                key={service.key}
                className="service-option"
                data-service={service.key}
                onClick={() => handleServiceClick(service.key)}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.name}</h4>
                <p>{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSelectionModal;

