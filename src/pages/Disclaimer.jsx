import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">

      <Helmet>
        <title>Disclaimer | JM Rao Associates</title>
        <meta
          name="description"
          content="Disclaimer for JM Rao Associates. Important legal information about our tax consultancy services."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Disclaimer
      </h1>

      <p className="text-gray-600 mb-6">
        The information provided by JM Rao Associates on this website is for general informational
        purposes only and should not be considered professional legal or financial advice.
      </p>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. No Professional Advice</h2>
        <p className="text-gray-600">
          While we strive to provide accurate information, all services and advice should be verified
          with proper documentation and consultation.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Accuracy of Information</h2>
        <p className="text-gray-600">
          We make no guarantees about the completeness or accuracy of the information on this website.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. External Links</h2>
        <p className="text-gray-600">
          Our website may contain links to third-party websites. We are not responsible for their content or policies.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-600">
          JM Rao Associates shall not be liable for any losses or damages arising from the use of this website or services.
        </p>
      </section>

      {/* SECTION */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Service Outcomes</h2>
        <p className="text-gray-600">
          Results such as approvals, registrations, or filings depend on government authorities and cannot be guaranteed.
        </p>
      </section>

      {/* SECTION */}
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