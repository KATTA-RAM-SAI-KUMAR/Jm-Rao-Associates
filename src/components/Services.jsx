import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Calculator, Receipt, CreditCard, BookOpen, AlertCircle } from "lucide-react";

const services = [
  {
    title: "GST Services",
    desc: "Registration & Returns",
    icon: <Calculator size={30} />,
  },
  {
    title: "Income Tax Filing",
    desc: "ITR & Tax Planning",
    icon: <FileText size={30} />,
  },
  {
    title: "TDS Returns",
    desc: "TDS Filing",
    icon: <Receipt size={30} />,
  },
  {
    title: "PAN / TAN",
    desc: "Applications & Updates",
    icon: <CreditCard size={30} />,
  },
  {
    title: "Accounting",
    desc: "Bookkeeping & Tally",
    icon: <BookOpen size={30} />,
  },
  {
    title: "Notice Handling",
    desc: "Tax Notice Support",
    icon: <AlertCircle size={30} />,
  },
];

export default function Services() {
  return (
    <div className="py-20 px-6 bg-bg">

      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
          >

            <div className="text-secondary mb-3">
              {s.icon}
            </div>

            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>

          </motion.div>
        ))}

      </div>

    </div>
  );
}