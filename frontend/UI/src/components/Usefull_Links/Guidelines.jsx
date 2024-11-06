// src/pages/Guidelines.jsx

const Guidelines = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Scholarship Guidelines</h1>

      <div className="space-y-6 text-gray-700 text-lg">
        <section>
          <h2 className="font-semibold text-2xl mb-3">1. Application Process</h2>
          <p>
            Applicants are required to complete the online application form on the official portal. Ensure that all sections of the form are completed accurately. Any incomplete applications will not be considered.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">2. Document Submission</h2>
          <p>
            All supporting documents must be uploaded in PDF or JPEG format. Ensure that the documents are clear and legible. Uploading incorrect or unreadable documents may lead to disqualification.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">3. Deadlines</h2>
          <p>
            Please adhere strictly to the application deadlines. Late submissions will not be accepted under any circumstances. Check the portal frequently for any updates or changes to the deadlines.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">4. Document Verification</h2>
          <p>
            All documents provided by the applicant must be valid and up-to-date. Any discrepancy or invalid documentation will result in disqualification. Applicants may be required to present original documents for verification if requested.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">5. Misconduct and Disqualification</h2>
          <p>
            Any form of false information, plagiarism, or fraud will result in immediate disqualification. Applicants are expected to abide by all rules and regulations set forth by the scholarship committee.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">6. Contact for Support</h2>
          <p>
            For any queries or issues regarding the application, applicants can reach out to the support team via the <strong>Contact Us</strong> page on our website. Please allow 1-2 business days for responses.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Guidelines;
