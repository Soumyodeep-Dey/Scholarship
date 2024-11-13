import { useLocation, useNavigate } from 'react-router-dom';

function FormPreview() {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state?.userData || {};

    // Handle form submission
    const handleConfirmSubmit = () => {
        // Verify that formData is complete and navigate to dashboard with data
        if (Object.keys(formData).length > 0) {
            navigate('/dashboard', { state: { userData: formData } });
        } else {
            alert("Form data is incomplete. Please go back and complete the form.");
        }
    };

    return (
        <div className="p-8 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-blue-800 border-b-4 border-blue-500 pb-3">
                Review Your Details
            </h3>

            {/* Basic Details */}
            <div className="mb-8">
                <div className="mb-8">
                    <h4 className="text-2xl font-semibold mb-6 text-green-700 border-b-2 border-green-500 pb-2">
                        Basic Details
                    </h4>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Name: </strong> {formData.name}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Surname: </strong> {formData.surname}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Phone Number: </strong> {formData.phonenumber}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Email: </strong> {formData.email}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Permanent Address: </strong> {formData.permanentaddress}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Caste: </strong> {formData.caste}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Father&apos;s Name: </strong> {formData.fatherName}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Father&apos;s Occupation: </strong> {formData.fatherOccupation}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Mother&apos;s Name: </strong> {formData.motherName}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <p><strong>Mother&apos;s Occupation: </strong> {formData.motherOccupation}</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Education Details */}
            <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-6 text-green-700 border-b-2 border-green-500 pb-2">
                    Education Details
                </h4>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>10th School: </strong> {formData.school10th}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>10th Marks: </strong> {formData.marks10th}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>12th School: </strong> {formData.school12th}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>12th Marks: </strong> {formData.marks12th}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Graduation College: </strong> {formData.graduationCollege}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Graduation Marks: </strong> {formData.marksGraduation}</p>
                    </div>
                </div>
            </div>

            {/* Important Documents */}
            <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-6 text-green-700 border-b-2 border-green-500 pb-2">
                    Important Documents
                </h4>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Family Income: </strong> {formData.income}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Income Certificate: </strong> {formData.incomeCertificate ? "Uploaded" : "Not Provided"}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Domicile Certificate: </strong> {formData.domicileCertificate ? "Uploaded" : "Not Provided"}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Disability Certificate: </strong> {formData.disabilityCertificate ? "Uploaded" : "Not Provided"}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Identity Proof: </strong> {formData.identityProof ? "Uploaded" : "Not Provided"}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Passport Photo: </strong> {formData.passportPhoto ? "Uploaded" : "Not Provided"}</p>
                    </div>
                </div>
            </div>


            {/* Banking Details */}
            <div className="mb-8">
                <h4 className="text-2xl font-semibold mb-6 text-green-700 border-b-2 border-green-500 pb-2">
                    Banking Details
                </h4>
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Account Holder: </strong> {formData.accountHolderName}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Account Number: </strong> {formData.accountNumber}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Bank Name: </strong> {formData.bankName}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>Branch Name: </strong> {formData.branchName}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>IFSC Code: </strong> {formData.ifscCode}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><strong>First Page of Passbook: </strong> {formData.bankPassbook ? "Uploaded" : "Not Provided"}</p>
                    </div>
                </div>
            </div>


            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
                <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleConfirmSubmit}
                    className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Confirm & Submit
                </button>
            </div>
        </div>
    );
}

export default FormPreview;
