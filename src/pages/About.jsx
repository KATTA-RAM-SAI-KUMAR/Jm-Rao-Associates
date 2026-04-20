import { motion } from "framer-motion";
import {
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-28 text-center px-6 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About JM Rao Associates
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Simplifying tax, compliance, and financial clarity for individuals and businesses.
          </p>
        </motion.div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              JM Rao Associates, established in 2017, is a professional tax consultancy firm
              offering GST, Income Tax, TDS, and accounting services.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We have successfully served 150+ clients across Narasapuram and Palakolu,
              delivering accurate, timely, and reliable compliance solutions.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-700 text-white p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Us
            </h3>

            <ul className="space-y-3 text-blue-100">
              <li>✔ Fast & Accurate Filings</li>
              <li>✔ Personalized Client Support</li>
              <li>✔ GST & Tax Experts</li>
              <li>✔ Affordable & Transparent Pricing</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            {
              icon: <FaShieldAlt size={28} />,
              title: "Trust",
              desc: "Reliable and transparent services",
            },
            {
              icon: <FaChartLine size={28} />,
              title: "Growth",
              desc: "Helping businesses scale smoothly",
            },
            {
              icon: <FaUsers size={28} />,
              title: "Client First",
              desc: "Your success is our priority",
            },
            {
              icon: <FaLightbulb size={28} />,
              title: "Innovation",
              desc: "Modern solutions for compliance",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-blue-700 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {[
            { number: "150+", label: "Clients" },
            { number: "8+", label: "Years Experience" },
            { number: "4", label: "Experts Team" },
            { number: "100%", label: "Compliance Rate" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-3xl font-bold text-blue-700">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Need Help With Taxes?
          </h2>

          <p className="mb-8 text-blue-100">
            Get expert assistance from professionals you can trust.
          </p>

          <a
            href="/contact-us"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

    </div>
  );
}