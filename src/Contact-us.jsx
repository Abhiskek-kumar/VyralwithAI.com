import React from "react";
import './Contactus.css';

const Contactus = () => (
  <div className="contact-container">

    <div className="top-bar"></div>

    <div className="page-title">
      <div className="page-title-box">
        <h1>CONTACT US</h1>
      </div>
    </div>

    <div className="main-wrapper">

      {/* Left */}
      <div className="info-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions or need help? Fill out the form or reach us directly.
        </p>

        <div className="contact-details">
          <p><strong>📞 Phone:</strong> +91 9967377618</p>
          <p><strong>📧 Email:</strong> contact@VyralAI.com</p>
          <p><strong>📍 Address:</strong> Your Office Address Here</p>
        </div>

        <div className="social-buttons">
          <button className="facebook">Facebook</button>
          <button className="instagram">Instagram</button>
          <button className="twitter">Twitter</button>
        </div>
      </div>

      {/* Right */}
      <div className="form-box">
        <h2>Send Message</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button className="submit-btn">Send Message</button>
        </form>
      </div>

    </div>

    <div className="map">
      <iframe

        src="https://www.google.com/maps?q=Lalgarh%20Jattan,%20Sri%20Ganganagar,%20Rajasthan&output=embed"
        className="w-full h-full border-0"
      ></iframe>
    </div>

  </div>
);

export default Contactus;