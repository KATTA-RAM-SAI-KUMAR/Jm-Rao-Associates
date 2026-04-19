import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {

  const footerLinks = [
    {
      title: "GST Services",
      items: [
        { name: "GST Registration", path: "/gst-registration" },
        { name: "GST Returns Filing", path: "/gst-return-filing" },
        { name: "GST Modifications", path: "/gst-modifications" },
      ],
    },
    {
      title: "Tax Services",
      items: [
        { name: "Income Tax Filing", path: "/income-tax-filing" },
        { name: "Tax Audit", path: "/income-tax-audit" },
        { name: "TDS Returns", path: "/tds-returns" },
      ],
    },
    {
      title: "Food License",
      items: [
        { name: "FSSAI Registration", path: "/fssai-registration" },
        { name: "State License", path: "/fssai-state-license" },
        { name: "Central License", path: "/fssai-central-license" },
      ],
    },
    {
      title: "Registrations",
      items: [
        { name: "PAN Registration", path: "/pan-registration" },
        { name: "TAN Registration", path: "/tan-registration" },
        { name: "MSME Registration", path: "/msme-registration" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-700 text-white pt-16 pb-10 relative overflow-hidden">

      {/* Background Glow */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* Links Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 inline-block">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.path}
                      className="hover:text-gray-200 transition"
                    >
                      → {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              JM Rao Associates
            </h2>

            <p className="text-blue-100 mb-6">
              Trusted tax consultants in Narasapuram & Palakolu providing GST,
              Income Tax, TDS, and accounting services with professionalism and accuracy.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center">
                <FaRegEnvelope className="mr-3" />
                <span>your@email.com</span>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
                <span>Narasapuram & Palakolu</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex space-x-4 mt-5">
              <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
              <a href="#" className="hover:text-gray-200"><FaLinkedin /></a>
              <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            </div>
          </div>

          {/* Map + Timing */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Office Timings</h3>

            <p className="text-blue-100 text-sm mb-2">
              🕒 Mon - Sat: 9:30 AM - 7:00 PM
            </p>
            <p className="text-blue-100 text-sm mb-4">
              Sunday: Closed
            </p>

            {/* Map */}
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Narasapuram&output=embed"
              className="w-full h-40 rounded-lg"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-10 text-sm text-blue-200 border-t border-blue-500 pt-4">
          © {new Date().getFullYear()} JM Rao Associates. All rights reserved.
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          💬
        </a>

        {/* Call */}
        <a
          href="tel:+91XXXXXXXXXX"
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          📞
        </a>

        {/* Location */}
        <a
          href="https://maps.google.com"
          target="_blank"
          className="bg-purple-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          📍
        </a>
      </div>
    </footer>
  );
};

export default Footer;