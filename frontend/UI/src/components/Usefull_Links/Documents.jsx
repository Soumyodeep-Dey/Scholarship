// src/pages/DocumentUpload.jsx

const DocumentUpload = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-10 text-blue-900 text-center">Document Upload for Scholarship Application</h1>

      <p className="mb-10 text-lg text-gray-700 text-center">
        Welcome to the scholarship document submission portal. Upload all required documents as per the guidelines below to ensure successful application processing.
      </p>

      <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-10 border border-blue-200">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Indian Government Scholarships Requirements</h2>
        <p className="text-gray-700 mb-6">
          For government-funded scholarships, specific documents are essential. Ensure each document meets the criteria below:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Domicile Certificate:</strong> Valid proof of residency is required, in PDF format, under 2MB.
          </li>
          <li>
            <strong>Income Certificate:</strong> Family income certificate issued within 6 months, verifying eligibility based on income criteria.
          </li>
          <li>
            <strong>Academic Records:</strong> Include recent academic mark sheets (such as Class 10, 12). Clear PDFs under 2MB each.
          </li>
          <li>
            <strong>Bank Passbook:</strong> Upload a scanned bank passbook image showing account details (account number, IFSC code, and bank branch).
          </li>
          <li>
            <strong>Aadhar Card:</strong> A clear PDF of your Aadhar card for identity verification.
          </li>
        </ul>
      </div>

      <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 mb-8">
        <p className="font-semibold text-xl">Document Format and Size Requirements:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Accepted format: PDF only</li>
          <li>Maximum file size: 2MB per document</li>
          <li>Ensure all text and images are clear and readable</li>
        </ul>
      </div>

      <p className="mt-8 text-gray-700 text-lg text-center">
        Once all documents are uploaded, proceed to the next step. Make sure the information is accurate; discrepancies may lead to application rejection.
      </p>
    </div>
  );
};

export default DocumentUpload;
