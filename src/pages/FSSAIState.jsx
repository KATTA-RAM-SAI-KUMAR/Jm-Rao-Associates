import { motion } from "framer-motion";

export default function FSSAIState() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            FSSAI State License Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get your State FSSAI License for medium-sized food businesses and operate legally within your state.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Quick Processing • Hassle-Free • Complete Compliance
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ Ideal for Growing Food Businesses
          </p>
        </motion.div>
      </section>

      {/* WHAT IS STATE LICENSE */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is FSSAI State License?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            FSSAI State License is required for medium-sized food businesses operating within a single state.
            It is suitable for businesses whose turnover exceeds the basic registration limit but does not
            qualify for a Central License.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHO NEEDS */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs FSSAI State License?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Medium-sized food manufacturers</li>
            <li>✔ Restaurants, hotels, and cafes</li>
            <li>✔ Food distributors and suppliers</li>
            <li>✔ Businesses with turnover between ₹12 lakhs and ₹20 crores</li>
          </ul>
        </div>
      </section>

      {/* WHY IMPORTANT */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why State License is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for medium-scale food businesses</li>
            <li>✔ Ensures food safety compliance</li>
            <li>✔ Builds customer trust and brand value</li>
            <li>✔ Required for smooth business operations</li>
            <li>✔ Avoid penalties and legal complications</li>
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
            <li>✔ PAN Card of business/owner</li>
            <li>✔ Address proof of premises</li>
            <li>✔ Business registration proof</li>
            <li>✔ List of food products</li>
            <li>✔ Passport size photograph</li>
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
            <li>✔ Expert guidance for correct license category</li>
            <li>✔ Fast and accurate application processing</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Affordable pricing</li>
            <li>✔ End-to-end support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need FSSAI State License?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates to get your State License quickly and run your food business legally.
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