import { motion } from "framer-motion";

export default function MSME() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            MSME Registration Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Register your business under MSME and unlock government benefits, subsidies, and financial support.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Free Government Registration • Quick Process • Lifetime Benefits
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ For Startups, Small & Medium Businesses
          </p>
        </motion.div>
      </section>

      {/* WHAT IS MSME */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is MSME Registration?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            MSME (Micro, Small, and Medium Enterprises) registration is a government initiative
            that provides recognition and benefits to small businesses. It helps businesses access
            financial support, subsidies, and protection under various government schemes.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* BENEFITS */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Benefits of MSME Registration
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Easy access to bank loans at lower interest rates</li>
            <li>✔ Government subsidies and schemes</li>
            <li>✔ Protection against delayed payments</li>
            <li>✔ Eligibility for government tenders</li>
            <li>✔ Tax and financial benefits</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Should Register Under MSME?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Startups and new businesses</li>
            <li>✔ Small and medium enterprises</li>
            <li>✔ Manufacturers and service providers</li>
            <li>✔ Freelancers and entrepreneurs</li>
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
            <li>✔ PAN Card</li>
            <li>✔ Business details</li>
            <li>✔ Bank account information</li>
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
            <li>✔ Quick and hassle-free registration</li>
            <li>✔ Expert guidance on MSME benefits</li>
            <li>✔ Accurate documentation support</li>
            <li>✔ Affordable service charges</li>
            <li>✔ End-to-end assistance</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want to Register Your Business as MSME?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates and start enjoying MSME benefits today.
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