import { motion } from "framer-motion";

export default function PAN() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            PAN Card Registration Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Apply for a new PAN card quickly and easily with expert assistance.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Quick Processing • Easy Documentation • Reliable Service
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ For Individuals, Businesses & Firms
          </p>
        </motion.div>
      </section>

      {/* WHAT IS PAN */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is a PAN Card?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            PAN (Permanent Account Number) is a unique 10-digit alphanumeric number issued by the Income Tax Department.
            It is essential for financial transactions, tax filing, and identity verification in India.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why PAN Card is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for filing income tax returns</li>
            <li>✔ Required for opening bank accounts</li>
            <li>✔ Needed for financial transactions</li>
            <li>✔ Acts as identity proof</li>
            <li>✔ Required for business registrations</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs a PAN Card?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Individuals earning taxable income</li>
            <li>✔ Business owners and companies</li>
            <li>✔ Students and job seekers</li>
            <li>✔ Anyone doing financial transactions</li>
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
            <li>✔ Aadhaar Card</li>
            <li>✔ Address proof</li>
            <li>✔ Passport size photograph</li>
            <li>✔ Date of birth proof</li>
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
            <li>✔ Fast and smooth application process</li>
            <li>✔ Expert assistance</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Affordable service charges</li>
            <li>✔ Reliable support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need a PAN Card?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates for quick and hassle-free PAN registration.
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