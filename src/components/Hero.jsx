import { useState } from "react";
import { motion } from "framer-motion";
export default function Hero() {
  const [type, setType] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#1e3a8a] to-[#3A7BD5]" />

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-30 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-[400px] h-[400px] bg-green-400 opacity-20 blur-3xl rounded-full bottom-10 right-10" />

      {/* Content */}
      <div className="relative z-10 text-white px-6">

        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-6xl font-extrabold leading-tight tracking-tight"
>
  Tax, But <span className="text-accent">Smarter</span>
</motion.h1>

        <p className="mt-4 text-lg text-gray-200">
          Smart tax solutions for individuals & businesses
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => setType("salary")}
            className="bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Salaried
          </button>

          <button
            onClick={() => setType("business")}
            className="bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Business
          </button>
        </div>

        {/* Recommendation Card */}
        {type && (
          <div className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl max-w-md mx-auto">

            <h3 className="text-xl font-semibold">
              {type === "salary"
                ? "Recommended: Income Tax Filing"
                : "Recommended: GST + Accounting"}
            </h3>

            <a
              href={`https://wa.me/919491468423?text=${
                type === "salary"
                  ? "I need help with ITR filing"
                  : "I need GST & Accounting services"
              }`}
              target="_blank"
              className="mt-4 inline-block bg-cta text-white px-6 py-2 rounded-lg hover:scale-105 transition"
            >
              Start Now →
            </a>
          </div>
        )}

      </div>
    </div>
  );
}