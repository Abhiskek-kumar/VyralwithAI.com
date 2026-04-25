import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import AboutUs from "./aboutUs";
import PrivacyPolicy from "./Privacy-policy";
import TermsConditions from "./Terms-conditions";
import Contactus from "./Contact-us";
import "./App.css";
import Footer from "./footer";

export default function RootLayout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />  
        <Route path="/contact-us" element={<Contactus/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}