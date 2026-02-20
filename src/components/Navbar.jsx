// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaCoffee, FaInstagram } from "react-icons/fa";
import footerLogo from "../assets/coffeeLogo.webp";

export default function Navbar() {
  return (
    <div className="navbar bg-[#331A15] text-white shadow-lg px-4 md:px-8 flex items-center justify-center">
      <Link to="/" className="flex items-center gap-2">
        <img src={footerLogo} alt="Espresso Logo" className="w-10 h-10" />
        <span className="font-bold text-lg md:text-2xl tracking-wide">
          Coffee With Suzan
        </span>
      </Link>
    </div>
  );
}
