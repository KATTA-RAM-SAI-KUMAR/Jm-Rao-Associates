import { motion } from "framer-motion";

export default function ProfessionalTax() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Professional Tax Registration Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get your Professional Tax registration done quickly and stay compliant with state regulations.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Quick Registration • Hassle-Free Process • Full Compliance
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ For Businesses, Employers & Professionals
          </p>
        </motion.div>
      </section>

      {/* WHAT IS PT */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is Professional Tax?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Professional Tax is a state-level tax imposed on individuals earning income through employment,
            profession, or business. Employers are required to deduct and pay this tax on behalf of employees,
            while self-employed individuals must register and pay it directly.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why Professional Tax Registration is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory under state laws</li>
            <li>✔ Avoid penalties and legal issues</li>
            <li>✔ Required for employers hiring staff</li>
            <li>✔ Ensures smooth business operations</li>
            <li>✔ Maintains proper compliance records</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs Professional Tax Registration?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Employers with staff</li>
            <li>✔ Business owners</li>
            <li>✔ Freelancers and professionals</li>
            <li>✔ Individuals earning income from profession or trade</li>
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
            <li>✔ Quick and accurate registration</li>
            <li>✔ Expert compliance guidance</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Affordable pricing</li>
            <li>✔ Ongoing support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Professional Tax Registration?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates for quick and reliable registration services.
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