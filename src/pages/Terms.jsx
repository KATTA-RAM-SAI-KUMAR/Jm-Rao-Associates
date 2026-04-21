import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">

      <Helmet>
        <title>Terms & Conditions | JM Rao Associates</title>
        <meta
          name="description"
          content="Terms and Conditions for JM Rao Associates. Read our service terms for GST, Income Tax, and consultancy services."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 mb-6">
        These Terms and Conditions govern the use of services provided by JM Rao Associates.
        By engaging with our services, you agree to comply with these terms.
      </p>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Services</h2>
        <p className="text-gray-600">
          JM Rao Associates provides tax consultancy, GST services, income tax filing, TDS compliance,
          and accounting services. All services are provided based on the information submitted by clients.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Client Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide accurate and complete information</li>
          <li>Submit required documents on time</li>
          <li>Review submitted filings before final approval</li>
        </ul>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Fees & Payments</h2>
        <p className="text-gray-600">
          Service fees must be paid as agreed before or during service delivery.
          Government fees, penalties, or additional charges are separate and payable by the client.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-600">
          JM Rao Associates shall not be liable for any losses arising due to incorrect or incomplete
          information provided by the client or delays from government authorities.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Service Timelines</h2>
        <p className="text-gray-600">
          While we strive to provide timely services, actual timelines may vary based on government processing.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Confidentiality</h2>
        <p className="text-gray-600">
          We maintain strict confidentiality of all client information as per professional standards.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
        <p className="text-gray-600">
          We reserve the right to terminate services if terms are violated or required information is not provided.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
        <p className="text-gray-600">
          These terms shall be governed by the laws of India.
        </p>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-600">
          JM Rao Associates<br />
          Andhra Pradesh<br />
          📞 +91 8801221088<br />
          📧 jmraoassociates@gmail.com
        </p>
      </section>

    </div>
  );
}