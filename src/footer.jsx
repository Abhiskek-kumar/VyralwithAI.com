import footerimage from "./assets/footerimage.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full min-h-[300px] bg-gradient-to-br from-[#2e2e2e] to-[#1f1f1f] text-white mt-20 flex flex-col justify-between">
      <div className="max-w-full mx-auto px-6 py-12 grid gap-10 md:grid-cols-4" style={{ margin: "20px" }}>
        {/* Brand */}
          <div>
            <Link to="/">
              <img
                src={footerimage}
                alt="logo"
                className="w-[140px] mb-5 hover:scale-105 transition"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>

            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>

            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>📞 9967377618</li>
              <li>📧 contact@VyralAI.com</li>
              <li>📍 India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">For help</h3>

            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400">Our Services</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Why VyralwithAI?</Link></li>
              <li><Link to="/" className="hover:text-blue-400">User Guide</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Support</Link></li>
            </ul>
          </div>
      </div>
      {/* Bottom */}
      <div className="border-t border-gray-600 text-center py-4 text-sm text-gray-400">
        © 2026 VYRALWITHAI. All rights reserved.
      </div>

    </footer>
  );
} 