// src/pages/DocumentUpload.jsx
const DocumentUpload = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Document Upload</h1>

      <p className="mb-8 text-lg text-gray-700">
        Please follow the instructions below to upload the necessary documents for your scholarship application. Make sure each document meets the specified requirements to ensure successful submission.
      </p>

      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li>
          <strong>Domicile Certificate:</strong> Upload a valid Domicile Certificate proving your residency status. Only PDF format is accepted, and the file size should not exceed 2MB.
        </li>
        <li>
          <strong>Income Certificate:</strong> Submit an income certificate of your family, issued within the last 6 months. This certificate verifies your eligibility for the scholarship based on income criteria.
        </li>
        <li>
          <strong>Academic Records:</strong> Include your latest academic mark sheets and certificates (such as Class 10 and Class 12 certificates). Make sure they are clear and in PDF format, under 2MB each.
        </li>
        <li>
          <strong>Bank Passbook:</strong> Upload a scanned copy of your bank passbook showing your account details for direct scholarship transfers. Ensure the image is clear and shows your account number, IFSC code, and bank branch.
        </li>
        <li>
          <strong>Aadhar Card:</strong> Attach a scanned copy of your Aadhar card as an identity proof. Make sure the details are visible and the file is in PDF format.
        </li>
      </ul>

      <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
        <p className="font-semibold">Document Format and Size Requirements:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>Accepted format: PDF only</li>
          <li>Maximum file size: 2MB per document</li>
          <li>Ensure all text and images are clear and readable</li>
        </ul>
      </div>

      <p className="mt-8 text-gray-700">
        Once all documents are uploaded successfully, you will be able to proceed to the next step. Make sure all information provided in the documents is accurate and up-to-date, as discrepancies may lead to application rejection.
      </p>
    </div>
  );
};

export default DocumentUpload;
