import { motion } from "framer-motion";

export default function FSSAIRegistration() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            FSSAI Registration Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get your food business registered with FSSAI and operate legally with confidence.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Quick Approval • Hassle-Free Process • Full Compliance
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ For Small Food Businesses & Startups
          </p>
        </motion.div>
      </section>

      {/* WHAT IS FSSAI */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is FSSAI Registration?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            FSSAI (Food Safety and Standards Authority of India) registration is a mandatory
            license required for all food-related businesses. It ensures that food products are
            safe, hygienic, and meet quality standards set by the government.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why FSSAI Registration is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for all food businesses</li>
            <li>✔ Ensures food safety and hygiene standards</li>
            <li>✔ Builds customer trust and brand credibility</li>
            <li>✔ Required for online food platforms</li>
            <li>✔ Avoid penalties and legal issues</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs FSSAI Registration?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Small food vendors and home-based businesses</li>
            <li>✔ Restaurants, cafes, and bakeries</li>
            <li>✔ Food delivery and cloud kitchens</li>
            <li>✔ Food manufacturers and traders</li>
          </ul>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Documents Required
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Aadhaar Card / PAN Card</li>
            <li>✔ Business address proof</li>
            <li>✔ Passport size photograph</li>
            <li>✔ Business details</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose JM Rao Associates?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Quick and smooth registration process</li>
            <li>✔ Expert guidance on food licensing</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Affordable pricing</li>
            <li>✔ End-to-end support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need FSSAI Registration?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates to get your food license quickly and start your business legally.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="/contact-us"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>

          <a
            href="https://wa.me/918801221088"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition"
          >
            WhatsApp Now
          </a>

        </div>
      </section>

    </div>
  );
}