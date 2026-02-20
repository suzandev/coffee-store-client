// Footer.jsx
import React from "react";
import footerLogo from "../assets/coffeeLogo.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-100 bg-opacity-90 pattern-bg pt-12 pb-5 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={footerLogo}
              alt="Espresso Logo"
              className="w-10 h-10 mr-2"
            />
            <h2 className="text-2xl font-bold text-brown-900">Suzan Chandra</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex space-x-4 mb-6 text-brown-900">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-brown-700" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 cursor-pointer hover:text-brown-700" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-brown-700" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-brown-700" />
            </a>
          </div>

          <h3 className="text-xl font-semibold text-brown-900 mb-3">
            Get in Touch
          </h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+88 01766 510 738</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <span>info@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-2xl font-bold text-brown-900 mb-6">
            Connect with Us
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"></textarea>
            <button className="btn btn-outline btn-sm w-32 mt-2 self-start text-brown-900 border-brown-900 hover:bg-brown-900 hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#331A15] text-white text-center py-3 mt-12">
        Copyright © Suzan Chandra | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
