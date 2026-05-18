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
          <div className="contact-details text-sm space-y-2">
            <p className="flex items-start">
              <span className="font-semibold mr-2">📞 Phone: </span>
              <span> +91 88060 31241, +91 79885 06110</span>
            </p>

            <p className="flex items-start">
              <span className="font-semibold mr-2">📧 Email: </span>
              <span> contact@vyralai.com</span>
            </p>

            <p className="flex items-start">
              <span className="font-semibold mr-2">📍 Address: </span>
              <span>
                Plot No. 24, Rachana Society, Chinchbhawan,<br />
                Nagpur, Maharashtra, India
              </span>
            </p>
          </div>
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
        src="https://www.google.com/maps?q=Chinchbhawan,%20Nagpur,%20Maharashtra,%20India&output=embed"
        className="w-full h-full border-0"
      ></iframe>
    </div>

  </div>
);

export default Contactus;