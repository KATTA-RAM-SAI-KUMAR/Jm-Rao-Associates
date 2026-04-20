import { motion } from "framer-motion";

export default function FSSAICentral() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            FSSAI Central License Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get your Central FSSAI License for large-scale food businesses, import/export, and multi-state operations.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Fast Processing • Expert Guidance • Full Compliance
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ For Large Businesses & Interstate Operations
          </p>
        </motion.div>
      </section>

      {/* WHAT IS CENTRAL LICENSE */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is FSSAI Central License?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            FSSAI Central License is mandatory for large food businesses operating at a national level.
            It is required for companies involved in import/export, large-scale manufacturing, or
            operating in multiple states. This license is issued by the Central Government.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHO NEEDS */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs FSSAI Central License?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Large food manufacturers</li>
            <li>✔ Importers and exporters of food products</li>
            <li>✔ Businesses operating in multiple states</li>
            <li>✔ Food operators with turnover above ₹20 crores</li>
            <li>✔ E-commerce food businesses</li>
          </ul>
        </div>
      </section>

      {/* WHY IMPORTANT */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why Central License is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for large-scale food operations</li>
            <li>✔ Required for import/export activities</li>
            <li>✔ Ensures national-level compliance</li>
            <li>✔ Builds strong brand credibility</li>
            <li>✔ Avoid heavy penalties and legal risks</li>
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
            <li>✔ PAN Card of business</li>
            <li>✔ Business registration certificate</li>
            <li>✔ Address proof of premises</li>
            <li>✔ List of food products</li>
            <li>✔ Authority letter / NOC</li>
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
            <li>✔ Expert handling of complex applications</li>
            <li>✔ End-to-end documentation support</li>
            <li>✔ Quick and accurate processing</li>
            <li>✔ Compliance-focused approach</li>
            <li>✔ Affordable and transparent pricing</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need FSSAI Central License?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates for professional assistance in obtaining your Central License.
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