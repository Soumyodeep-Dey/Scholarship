// src/pages/EligibilityCriteria.jsx

const EligibilityCriteria = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-10 text-blue-900 text-center">Eligibility Criteria for Scholarship</h1>

      <p className="mb-10 text-lg text-gray-700 text-center">
        Please review the following eligibility criteria carefully. Applicants must meet each requirement to qualify for the scholarship.
      </p>

      <ul className="list-disc pl-6 space-y-6 text-gray-800 text-lg">
        <li>
          <strong>Residency:</strong> The applicant must be a resident of India with a valid domicile certificate from their respective state.
        </li>
        <li>
          <strong>Academic Qualifications:</strong> Applicants must have completed their Class 12 examination with a minimum of 60% marks. Strong academic performance may enhance the likelihood of selection.
        </li>
        <li>
          <strong>Family Income:</strong> The annual family income should not exceed INR 8 lakh. An income certificate from a competent authority is required.
        </li>
        <li>
          <strong>Age Limit:</strong> Applicants must be between 17 and 25 years old at the time of application submission.
        </li>
        <li>
          <strong>Course of Study:</strong> This scholarship is available for students pursuing undergraduate courses in India in fields such as medical, engineering, arts, and commerce.
        </li>
        <li>
          <strong>Special Category Reservations:</strong> Reserved quotas are available as per government regulations for SC/ST, OBC, and PwD candidates. Relevant certificates are required for verification.
        </li>
        <li>
          <strong>Previous Scholarship Restriction:</strong> Students who are currently receiving or have previously received another scholarship are not eligible for this program.
        </li>
      </ul>

      <div className="mt-10 p-6 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800">
        <p className="font-semibold text-xl">Important Note:</p>
        <p className="mt-2">
          Meeting the eligibility criteria does not guarantee a scholarship, as the selection is based on merit, availability of funds, and reservation policies.
        </p>
      </div>

      <p className="mt-10 text-lg text-gray-700 text-center">
        For any questions regarding the eligibility criteria, please contact our support team. We’re here to assist you in understanding the requirements for a successful application.
      </p>
    </div>
  );
};

export default EligibilityCriteria;
