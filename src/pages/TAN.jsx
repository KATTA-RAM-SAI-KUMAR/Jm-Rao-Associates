import { motion } from "framer-motion";

export default function TAN() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            TAN Registration Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get your TAN (Tax Deduction and Collection Account Number) quickly and stay compliant with TDS regulations.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Fast Processing • Easy Documentation • 100% Compliance
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ Required for TDS Deductors & Businesses
          </p>
        </motion.div>
      </section>

      {/* WHAT IS TAN */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is TAN?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number
            issued by the Income Tax Department. It is mandatory for individuals or entities
            responsible for deducting or collecting tax at source (TDS/TCS).
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why TAN Registration is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for TDS and TCS transactions</li>
            <li>✔ Required for filing TDS returns</li>
            <li>✔ Avoid penalties and legal issues</li>
            <li>✔ Ensures compliance with Income Tax rules</li>
            <li>✔ Required for businesses deducting tax</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs TAN?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Companies and firms deducting TDS</li>
            <li>✔ Employers deducting TDS on salaries</li>
            <li>✔ Individuals making specified payments</li>
            <li>✔ Businesses handling tax deductions</li>
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
            <li>✔ PAN Card of applicant</li>
            <li>✔ Address proof</li>
            <li>✔ Business registration proof (if applicable)</li>
            <li>✔ Identity proof</li>
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
            <li>✔ Expert guidance on TDS compliance</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Affordable pricing</li>
            <li>✔ End-to-end support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need TAN Registration?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates for fast and reliable TAN registration services.
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