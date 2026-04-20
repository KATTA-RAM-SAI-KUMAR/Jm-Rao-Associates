import { motion } from "framer-motion";

export default function GSTReturns() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            GST Return Filing Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Accurate, timely GST return filing to keep your business compliant and penalty-free.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Monthly & Quarterly Filing Support Available
          </p>
        </motion.div>
      </section>

      {/* WHAT IS GST RETURN */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">What is GST Return?</h2>

          <p className="text-gray-600 leading-relaxed">
            A GST return is a document that contains details of your business income, sales,
            purchases, and tax collected. Registered businesses must file GST returns regularly
            (monthly or quarterly) to report their tax liability to the government.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why GST Return Filing is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for all GST registered businesses</li>
            <li>✔ Avoid penalties and late fees</li>
            <li>✔ Maintain proper financial records</li>
            <li>✔ Claim Input Tax Credit (ITC)</li>
            <li>✔ Ensures smooth business operations</li>
          </ul>
        </div>
      </section>

      {/* TYPES OF RETURNS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Types of GST Returns
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ GSTR-1 – Sales details</li>
            <li>✔ GSTR-3B – Summary return</li>
            <li>✔ GSTR-9 – Annual return</li>
            <li>✔ GSTR-4 – Composition scheme</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose JM Rao Associates?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Accurate and error-free filing</li>
            <li>✔ Timely submissions (no late fees)</li>
            <li>✔ Expert GST professionals</li>
            <li>✔ Affordable and transparent pricing</li>
            <li>✔ End-to-end compliance support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Help with GST Return Filing?
        </h2>

        <p className="mb-6 text-blue-100">
          Let our experts handle your GST returns while you focus on your business.
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