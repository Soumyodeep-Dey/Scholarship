import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function FormPreview() {
    const { getValues } = useFormContext(); // Get all form values for preview
    const navigate = useNavigate();

    // Fetch all form data to display
    const formData = getValues();

    return (
        <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-400 pb-2">
                Review Your Details
            </h3>

            {/* Display all the steps' data */}
            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Basic Details</h4>
                {formData.name && <p><strong>Name:</strong> {formData.name}</p>}
                {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                {/* Add other fields from 'Basic' step as needed */}
            </div>

            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Education Details</h4>
                {formData.institution && <p><strong>Institution:</strong> {formData.institution}</p>}
                {/* Add other fields from 'Education' step as needed */}
            </div>

            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Important Documents</h4>
                {formData.familyNetIncome && <p><strong>Family Income:</strong> {formData.familyNetIncome}</p>}
                {/* Add other fields from 'Important Documents' step as needed */}
            </div>

            <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Banking Details</h4>
                {formData.accountHolderName && <p><strong>Account Holder:</strong> {formData.accountHolderName}</p>}
                {formData.accountNumber && <p><strong>Account Number:</strong> {formData.accountNumber}</p>}
                {/* Add other fields from 'Bank' step as needed */}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                {/* "Previous" Button */}
                <button
                    type="button"
                    onClick={() => navigate('/register')} // Go back to the register page
                    className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Previous
                </button>

                {/* "Confirm & Submit" Button */}
                <button
                    type="button"
                    onClick={() => navigate("/dashboard")} // Navigate to the dashboard on form submission
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg active:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Confirm & Submit
                </button>
            </div>
        </div>
    );
}

export default FormPreview;