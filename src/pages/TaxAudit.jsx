import { motion } from "framer-motion";

export default function TaxAudit() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Tax Audit Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ensure full compliance with expert tax audit services for your business.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Accurate Audit • Compliance Assurance • Zero Errors
          </p>
        </motion.div>
      </section>

      {/* WHAT IS TAX AUDIT */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is a Tax Audit?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            A Tax Audit is the examination of financial records and accounts of a business
            to ensure accuracy and compliance with the Income Tax Act. It verifies whether
            income, expenses, and deductions are properly reported.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHO NEEDS */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Requires a Tax Audit?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Businesses with turnover above ₹1 crore</li>
            <li>✔ Professionals with income above ₹50 lakhs</li>
            <li>✔ Businesses under presumptive taxation (in certain cases)</li>
            <li>✔ Entities required under Income Tax regulations</li>
          </ul>
        </div>
      </section>

      {/* WHY IMPORTANT */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why Tax Audit is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Ensures compliance with tax laws</li>
            <li>✔ Avoid penalties and legal issues</li>
            <li>✔ Improves financial accuracy</li>
            <li>✔ Builds credibility with authorities</li>
            <li>✔ Helps in better financial planning</li>
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
            <li>✔ Experienced tax professionals</li>
            <li>✔ Accurate and compliant audit process</li>
            <li>✔ Timely completion</li>
            <li>✔ Personalized support</li>
            <li>✔ Affordable pricing</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need a Tax Audit for Your Business?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates for reliable and professional tax audit services.
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