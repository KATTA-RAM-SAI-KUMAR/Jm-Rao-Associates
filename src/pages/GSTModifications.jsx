import { motion } from "framer-motion";

export default function GSTModifications() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            GST Modification Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Update and correct your GST details quickly with expert assistance.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Fast Updates with Minimal Hassle
          </p>
        </motion.div>
      </section>

      {/* WHAT IS GST MODIFICATION */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is GST Modification?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            GST modification refers to updating or correcting details in your GST registration.
            This may include changes in business name, address, contact details, bank information,
            or adding/removing business activities.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why GST Modification is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Keep your business details legally updated</li>
            <li>✔ Avoid penalties and compliance issues</li>
            <li>✔ Ensure smooth GST return filing</li>
            <li>✔ Maintain accurate government records</li>
            <li>✔ Build trust with clients and authorities</li>
          </ul>
        </div>
      </section>

      {/* TYPES OF MODIFICATIONS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Types of GST Modifications
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Business Name Change</li>
            <li>✔ Address Change</li>
            <li>✔ Mobile Number / Email Update</li>
            <li>✔ Bank Account Update</li>
            <li>✔ Addition or Removal of Business Activities</li>
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
            <li>✔ Quick and accurate updates</li>
            <li>✔ Expert GST consultants</li>
            <li>✔ Hassle-free documentation</li>
            <li>✔ Affordable pricing</li>
            <li>✔ End-to-end support</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need to Update Your GST Details?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates today for fast and reliable GST modification services.
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