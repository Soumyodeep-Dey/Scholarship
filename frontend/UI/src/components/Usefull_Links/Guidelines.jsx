// src/pages/Guidelines.jsx

const Guidelines = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-10 text-blue-900 text-center">Scholarship Guidelines</h1>

      <div className="space-y-8 text-gray-800 text-lg">
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">1. Application Process</h2>
          <p className="leading-relaxed">
            Complete the online application form on the official portal, ensuring all sections are filled accurately. Incomplete applications will not be considered.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">2. Document Submission</h2>
          <p className="leading-relaxed">
            Upload all required documents in PDF or JPEG format, making sure they are clear and legible. Incorrect or unreadable documents may lead to disqualification.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">3. Deadlines</h2>
          <p className="leading-relaxed">
            Adhere strictly to application deadlines. Late submissions will not be accepted. Regularly check the portal for any updates or changes to deadlines.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">4. Document Verification</h2>
          <p className="leading-relaxed">
            All submitted documents must be valid and current. Any discrepancy or invalid documentation will result in disqualification. Applicants may be asked to present original documents for verification if necessary.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">5. Misconduct and Disqualification</h2>
          <p className="leading-relaxed">
            Providing false information, engaging in plagiarism, or committing fraud will lead to immediate disqualification. Applicants are expected to follow all rules set by the scholarship committee.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">6. Contact for Support</h2>
          <p className="leading-relaxed">
            For questions or assistance, contact the support team via the <strong>Contact Us</strong> page. Please allow 1-2 business days for a response.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Guidelines;
