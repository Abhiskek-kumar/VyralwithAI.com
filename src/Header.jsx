import logoVyralwithAI from "./assets/logoVyralwithAI.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link to="/">
          <img src={logoVyralwithAI} className="logo" alt="logo" />
        </Link>


        {/* NAV LINKS */}
        <div className="nav-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* BUTTON */}
        <button className="download-btn">Download App</button>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/about">About Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      )}
    </div>
  );
}