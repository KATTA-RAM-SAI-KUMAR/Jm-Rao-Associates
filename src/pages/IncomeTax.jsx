import { motion } from "framer-motion";

export default function IncomeTax() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Income Tax Filing Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Accurate and hassle-free income tax return filing for individuals and businesses.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ Maximize Savings • Avoid Penalties • 100% Compliance
          </p>
        </motion.div>
      </section>

      {/* WHAT IS ITR */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            What is Income Tax Return (ITR)?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            An Income Tax Return (ITR) is a form used to report your income, expenses,
            tax deductions, and tax payments to the government. Filing ITR is mandatory
            for individuals and businesses whose income exceeds the prescribed limits.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY IMPORTANT */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why Income Tax Filing is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Mandatory as per Income Tax Act</li>
            <li>✔ Avoid penalties and legal notices</li>
            <li>✔ Claim refunds and deductions</li>
            <li>✔ Required for loans, visas, and financial proof</li>
            <li>✔ Maintain proper financial records</li>
          </ul>
        </div>
      </section>

      {/* WHO SHOULD FILE */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Should File ITR?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Salaried individuals</li>
            <li>✔ Business owners</li>
            <li>✔ Freelancers and professionals</li>
            <li>✔ Individuals with income above exemption limit</li>
            <li>✔ Those claiming tax refunds</li>
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
            <li>✔ Maximum tax savings guidance</li>
            <li>✔ Quick turnaround time</li>
            <li>✔ Expert tax professionals</li>
            <li>✔ Affordable pricing</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to File Your Income Tax Return?
        </h2>

        <p className="mb-6 text-blue-100">
          Let our experts handle your tax filing while you stay stress-free.
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