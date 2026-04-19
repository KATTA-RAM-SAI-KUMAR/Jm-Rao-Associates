import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState({
    gst: false,
    tax: false,
    food: false,
    reg: false,
  });

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-0.5">
          <img src={logo} alt="JM Rao Associates" className="h-14 w-auto object-contain" />
          <span className="text-xl font-bold">
            <span className="text-blue-700">JM RAO</span>{" "}
            <span className="text-gray-800">ASSOCIATES</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">

          <Link to="/" className="hover:text-blue-600">Home</Link>

          <Link to="/about-us" className="hover:text-blue-600">
            About Us
          </Link>

          {/* GST */}
          <div className="relative group">
            <button className="hover:text-blue-600">GST ▾</button>
            <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-lg w-56 p-4 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/gst-registration" className="block hover:text-blue-600">GST Registration</Link>
              <Link to="/gst-return-filing" className="block hover:text-blue-600">GST Returns Filing</Link>
              <Link to="/gst-modifications" className="block hover:text-blue-600">GST Modifications</Link>
            </div>
          </div>

          {/* TAX */}
          <div className="relative group">
            <button className="hover:text-blue-600">Tax ▾</button>
            <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-lg w-56 p-4 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/income-tax-filing" className="block hover:text-blue-600">Income Tax Filing</Link>
              <Link to="/income-tax-audit" className="block hover:text-blue-600">Tax Audit</Link>
              <Link to="/tds-returns" className="block hover:text-blue-600">TDS Returns</Link>
              <Link to="/professional-tax-registration" className="block hover:text-blue-600">Professional Tax</Link>
            </div>
          </div>

          {/* FOOD LICENSE */}
          <div className="relative group">
            <button className="hover:text-blue-600">Food License ▾</button>
            <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-lg w-56 p-4 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/fssai-registration" className="block hover:text-blue-600">FSSAI Registration</Link>
              <Link to="/fssai-state-license" className="block hover:text-blue-600">State License</Link>
              <Link to="/fssai-central-license" className="block hover:text-blue-600">Central License</Link>
            </div>
          </div>

          {/* REGISTRATION */}
          <div className="relative group">
            <button className="hover:text-blue-600">Registration ▾</button>
            <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-lg w-56 p-4 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/pan-registration" className="block hover:text-blue-600">PAN Registration</Link>
              <Link to="/tan-registration" className="block hover:text-blue-600">TAN Registration</Link>
              <Link to="/msme-registration" className="block hover:text-blue-600">MSME Registration</Link>
            </div>
          </div>

          <Link to="/contact-us" className="hover:text-blue-600">
            Contact Us
          </Link>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-blue-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-700 font-medium">

          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/about-us" className="block hover:text-blue-600">About Us</Link>

          {/* GST */}
          <div>
            <p onClick={() => setMobileOpen({...mobileOpen, gst: !mobileOpen.gst})} className="cursor-pointer hover:text-blue-600">GST ▾</p>
            {mobileOpen.gst && (
              <div className="ml-4 space-y-2">
                <Link to="/gst-registration" className="block hover:text-blue-600" >GST Registration</Link>
                <Link to="/gst-return-filing" className="block hover:text-blue-600">GST Returns</Link>
                <Link to="/gst-modifications" className="block hover:text-blue-600">GST Modifications</Link>
              </div>
            )}
          </div>

          {/* TAX */}
          <div>
            <p onClick={() => setMobileOpen({...mobileOpen, tax: !mobileOpen.tax})} className="cursor-pointer hover:text-blue-600">Tax ▾</p>
            {mobileOpen.tax && (
              <div className="ml-4 space-y-2">
                <Link to="/income-tax-filing" className="block hover:text-blue-600">Income Tax Filing</Link>
                <Link to="/income-tax-audit" className="block hover:text-blue-600">Tax Audit</Link>
                <Link to="/tds-returns" className="block hover:text-blue-600">TDS Returns</Link>
                <Link to="/professional-tax-registration" className="block hover:text-blue-600">Professional Tax</Link>
              </div>
            )}
          </div>

          {/* FOOD LICENSE */}
          <div>
            <p onClick={() => setMobileOpen({...mobileOpen, food: !mobileOpen.food})} className="cursor-pointer hover:text-blue-600">Food License ▾</p>
            {mobileOpen.food && (
              <div className="ml-4 space-y-2">
                <Link to="/fssai-registration" className="block hover:text-blue-600">FSSAI Registration</Link>
                <Link to="/fssai-state-license" className="block hover:text-blue-600">State License</Link>
                <Link to="/fssai-central-license" className="block hover:text-blue-600">Central License</Link>
              </div>
            )}
          </div>

          {/* REGISTRATION */}
          <div>
            <p onClick={() => setMobileOpen({...mobileOpen, reg: !mobileOpen.reg})} className="cursor-pointer hover:text-blue-600">Registration ▾</p>
            {mobileOpen.reg && (
              <div className="ml-4 space-y-2">
                <Link to="/pan-registration" className="block hover:text-blue-600">PAN Registration</Link>
                <Link to="/tan-registration" className="block hover:text-blue-600">TAN Registration</Link>
                <Link to="/msme-registration" className="block hover:text-blue-600">MSME Registration</Link>
              </div>
            )}
          </div>

          <Link to="/contact-us" className="block hover:text-blue-600">
            Contact Us
          </Link>

        </div>
      )}
    </nav>
  );
}