import { motion } from "framer-motion";

export default function GSTRegistration() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            GST Registration Services
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get your business GST registered quickly and stay compliant with ease.
          </p>

          <p className="text-yellow-300 mt-2 text-sm">
            ⚡ GST Registration in 2–3 Working Days
          </p>
        </motion.div>
      </section>

      {/* WHAT IS GST */}
      <section className="pt-10 pb-6 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">What is GST?</h2>

          <p className="text-gray-600 leading-relaxed">
            GST (Goods and Services Tax) is a unified indirect tax applied on goods and services across India.
            It replaces multiple taxes like VAT, Service Tax, and Excise Duty, making the tax system simpler,
            transparent, and more efficient for businesses.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto"></div>

      {/* WHY GST */}
      <section className="pt-6 pb-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Why GST Registration is Important?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Legal requirement for businesses above threshold turnover</li>
            <li>✔ Enables you to collect GST from customers</li>
            <li>✔ Claim Input Tax Credit (reduce tax burden)</li>
            <li>✔ Builds trust and credibility for your business</li>
            <li>✔ Mandatory for e-commerce sellers</li>
          </ul>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Key Benefits of GST Registration
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Avoid penalties and legal issues</li>
            <li>✔ Expand business across states</li>
            <li>✔ Work with large companies & marketplaces</li>
            <li>✔ Easier loan approvals & business growth</li>
          </ul>
        </div>
      </section>

      {/* WHO NEEDS GST */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Who Needs GST Registration?
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Businesses with turnover above ₹40 lakhs (₹20 lakhs for services)</li>
            <li>✔ Online sellers (Amazon, Flipkart, etc.)</li>
            <li>✔ Interstate suppliers</li>
            <li>✔ Freelancers and service providers</li>
            <li>✔ Businesses claiming Input Tax Credit</li>
          </ul>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">
            Documents Required
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>✔ PAN Card of the business/owner</li>
            <li>✔ Aadhaar Card</li>
            <li>✔ Business address proof</li>
            <li>✔ Bank account details</li>
            <li>✔ Passport size photographs</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need GST Registration?
        </h2>

        <p className="mb-6 text-blue-100">
          Contact JM Rao Associates today for quick and reliable GST registration services.
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