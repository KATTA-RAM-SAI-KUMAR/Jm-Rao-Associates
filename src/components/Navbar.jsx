import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed w-full top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LEFT: BRAND */}
        <h1 className="text-xl font-bold text-primary">
          J.M. Rao Associates
        </h1>

        {/* RIGHT: NAV + CTA */}
        <div className="flex items-center gap-6">

          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>

          <Link to="/login" className="text-gray-700 hover:text-primary font-medium">
            Login
          </Link>

          {/* CALL BUTTON */}
          <a
            href="tel:+919491468423"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <Phone size={16} /> Call
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/919491468423?text=Hi I need tax help"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
}