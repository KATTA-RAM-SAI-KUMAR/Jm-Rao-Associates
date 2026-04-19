import { useState } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(null);

  const calculate = () => {
    if (!income) return;
    setTax(income * 0.1);
  };

  return (
    <div className="py-20 px-6 bg-white text-center"> {/* ✅ section separation */}

      <h2 className="text-3xl font-bold mb-6">
        Estimate Your Tax
      </h2>

      <input
        type="number"
        placeholder="Enter Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="p-3 border rounded-lg w-64"
      />

      <br />

      <button
        onClick={calculate}
        className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg hover:scale-105 transition"
      >
        Calculate
      </button>

      {tax !== null && (
        <p className="mt-4 text-lg font-semibold">
          Estimated Tax: ₹{tax}
        </p>
      )}

    </div>
  );
}