import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-blue-100 text-lg">
            We're here to help you with all your tax & compliance needs.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">
              Contact Information
            </h2>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-700 text-xl" />
              <p className="text-gray-700">
                jmraoassociates@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-700 text-xl" />
              <p className="text-gray-700">
                +91 88012 21088 / +91 94914 68423
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-700 text-xl" />
              <p className="text-gray-700">
                Narasapuram & Palakolu, Andhra Pradesh
              </p>
            </div>

            {/* QUICK ACTIONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="tel:+918801221088"
                className="bg-blue-700 text-white px-5 py-3 rounded-full hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918801221088"
                className="border border-blue-700 text-blue-700 px-5 py-3 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Immediate Assistance?
        </h2>

        <p className="mb-6 text-blue-100">
          Call us directly and get expert guidance instantly.
        </p>

        <a
          href="tel:+918801221088"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Call Now
        </a>
      </section>

    </div>
  );
}