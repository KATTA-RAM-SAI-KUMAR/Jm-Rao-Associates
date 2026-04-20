import { motion } from "framer-motion";

export default function TDS() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            TDS Return Filing Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Accurate and timely TDS return filing to ensure full compliance and avoid penalties.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ On-Time Filing • Zero Errors • Complete Compliance
          </p>

          <p className="text-green-300 text-sm mt-1">
            ✔ Quarterly TDS Filing Support Available
          </p>
        </motion.div>
      </section>

      {/* WHAT IS TDS */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is TDS?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            TDS (Tax Deducted at Source) is a system where tax is deducted at the time of making
            payments such as salary, rent, commission, or professional fees. The deducted tax is
            then deposited with the government and reported through TDS returns.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why TDS Return Filing is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory for entities deducting TDS</li>
            <li>✔ Avoid heavy penalties and interest charges</li>
            <li>✔ Ensures compliance with Income Tax rules</li>
            <li>✔ Helps in proper tax credit for deductees</li>
            <li>✔ Maintains accurate financial records</li>
          </ul>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Types of TDS Returns
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Form 24Q – TDS on Salary</li>
            <li>✔ Form 26Q – TDS on Non-Salary Payments</li>
            <li>✔ Form 27Q – TDS for Non-Residents</li>
            <li>✔ Form 27EQ – TCS Returns</li>
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
            <li>✔ Timely and accurate filing</li>
            <li>✔ Expert tax professionals</li>
            <li>✔ Complete compliance support</li>
            <li>✔ Affordable pricing</li>
            <li>✔ End-to-end TDS management</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Help with TDS Returns?
        </h2>

        <p className="mb-6 text-blue-100">
          Let our experts handle your TDS compliance while you focus on your business.
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