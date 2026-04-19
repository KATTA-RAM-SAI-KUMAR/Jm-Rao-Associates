import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaBuilding,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-28 text-center px-6 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Simplifying Tax & Compliance
          </h1>

          <p className="text-lg md:text-xl mb-6 text-blue-100">
            GST • Income Tax • TDS • Accounting Solutions
          </p>

          <Link to="/contact-us" className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition ">
            Get Free Consultation
          </Link>
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            { number: "150+", label: "Happy Clients" },
            { number: "8+", label: "Years Experience" },
            { number: "4", label: "Experts Team" },
            { number: "100%", label: "Compliance Rate" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-blue-50 p-6 rounded-2xl shadow-md text-center border border-blue-100 hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-blue-700">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              About JM Rao Associates
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Established in 2017, JM Rao Associates is a trusted tax consultancy firm
              delivering GST, Income Tax, TDS, and accounting services.
            </p>

            <p className="text-gray-600 mb-6">
              Serving 150+ clients across Narasapuram & Palakolu with professionalism and accuracy.
            </p>

            <Link
              to="/about-us"
              className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-700 text-white p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Us
            </h3>

            <ul className="space-y-3">
              <li>✔ Personalized Support</li>
              <li>✔ Fast & Accurate Filings</li>
              <li>✔ GST Experts</li>
              <li>✔ Affordable Pricing</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              icon: <FaFileInvoiceDollar size={30} />,
              title: "GST Services",
              desc: "Registration, returns, compliance & amendments",
              link: "/gst-registration",
            },
            {
              icon: <FaBalanceScale size={30} />,
              title: "Tax Services",
              desc: "Income tax filing, audits & TDS solutions",
              link: "/income-tax-filing",
            },
            {
              icon: <FaBuilding size={30} />,
              title: "Registrations",
              desc: "PAN, TAN, MSME & business registrations",
              link: "/pan-registration",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition text-center"
            >
              <div className="text-blue-700 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">{item.desc}</p>

              <Link
                to={item.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Need Expert Tax Assistance?
          </h2>

          <p className="mb-8 text-blue-100">
            Contact JM Rao Associates for fast and reliable service.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">

            <Link
              to="/contact-us"
              className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Call Now
            </a>

          </div>
        </motion.div>
      </section>

    </div>
  );
}