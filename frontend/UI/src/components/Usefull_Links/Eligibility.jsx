// src/pages/EligibilityCriteria.jsx
const EligibilityCriteria = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Eligibility Criteria</h1>

      <p className="mb-8 text-lg text-gray-700">
        Below are the eligibility criteria for applicants interested in the scholarship. Please review each criterion carefully to ensure you meet the requirements before applying.
      </p>

      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li>
          <strong>Residency:</strong> The applicant must be a resident of India with a valid domicile certificate from their respective state.
        </li>
        <li>
          <strong>Academic Qualifications:</strong> Applicants should have completed their Class 12 examination with at least 60% marks. Preference may be given to students with a strong academic record.
        </li>
        <li>
          <strong>Family Income:</strong> The annual family income of the applicant should not exceed INR 8 lakh. An income certificate from a competent authority is required to verify this.
        </li>
        <li>
          <strong>Age Limit:</strong> Applicants must be between 17 and 25 years of age at the time of application submission.
        </li>
        <li>
          <strong>Course of Study:</strong> This scholarship is available for students pursuing undergraduate courses in India. Medical, engineering, arts, and commerce streams are eligible.
        </li>
        <li>
          <strong>Special Category Reservations:</strong> Reserved quotas apply as per government regulations for SC/ST, OBC, and PwD candidates. Relevant certificates are required for verification.
        </li>
        <li>
          <strong>Previous Scholarship Restriction:</strong> Students who have already received or are receiving another scholarship are not eligible to apply for this program.
        </li>
      </ul>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
        <p className="font-semibold">Important Note:</p>
        <p>
          Meeting the eligibility criteria does not guarantee a scholarship, as the selection process is competitive and based on merit, available funds, and reservation policies.
        </p>
      </div>

      <p className="mt-8 text-gray-700">
        For any questions regarding the eligibility criteria, please contact our support team. We are here to help ensure you meet all necessary requirements for a successful application.
      </p>
    </div>
  );
};

export default EligibilityCriteria;
