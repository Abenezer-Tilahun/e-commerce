import React from 'react';

const Contactus = () => (
  <div className="Contactus-container">
    <div className="Contactus-left">
      <h1 className="Contactus-title">Contact Us</h1>
      <p className="Contactus-detail">Kindly reach out to us</p>
      <div className="Contactus-info">
        <div className="Contactus-info-item">
          <span className="info-icon">📞</span>
          <div>
            <h3>Call Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p className="info-phone">Phone: +251910101010</p>
          </div>
        </div>
        <div className="Contactus-info-item">
          <span className="info-icon">✉️</span>
          <div>
            <h3>Write To Us</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="info-email">Emails: customer@geexclusive.com</p>
            <p className="info-email">Emails: support@geexclusive.com</p>
          </div>
        </div>
      </div>
    </div>
    <div className="Contactus-right">
      <form className="Contactus-form">
        <input type="text" placeholder="Your Name *" className="Contactus-input" required />
        <input type="email" placeholder="Your Email *" className="Contactus-input" required />
        <input type="tel" placeholder="Your Number *" className="Contactus-input" required />
        <textarea placeholder="Your Message" className="Contactus-textarea" required />
        <button type="submit" className="Contactus-btn">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contactus;
