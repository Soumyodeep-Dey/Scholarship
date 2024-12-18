import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Bank({ prevStep, onSubmit }) {
    const { register, watch, formState: { errors }, handleSubmit } = useFormContext();
    const [reEnteredAccount, setReEnteredAccount] = useState("");
    const accountNumber = watch("accountNumber");

    // Handle form submission with validation
    const handleBankSubmit = (e) => {
        if (accountNumber !== reEnteredAccount) {
            alert("Account numbers do not match.");
        } else {
            onSubmit(e); // Call parent onSubmit function
        }
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-400 pb-2">Banking Details</h3>

            {/* Banking Details Section */}
            <div className="mb-6">
                {/* Account Holder Name Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Account Holder Name</label>
                    <input
                        type="text"
                        {...register("accountHolderName", { required: "Account holder name is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter account holder's name"
                    />
                    {errors.accountHolderName && <p className="error text-red-500 mt-1">{errors.accountHolderName.message}</p>}
                </div>

                {/* Account Number Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Account Number</label>
                    <input
                        type="text"
                        {...register("accountNumber", { required: "Account number is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter account number"
                    />
                    {errors.accountNumber && <p className="error text-red-500 mt-1">{errors.accountNumber.message}</p>}
                </div>

                {/* Re-enter Account Number Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Re-enter Account Number</label>
                    <input
                        type="text"
                        value={reEnteredAccount}
                        onChange={(e) => setReEnteredAccount(e.target.value)}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Re-enter account number"
                    />
                    {reEnteredAccount && reEnteredAccount !== accountNumber && (
                        <p className="error text-red-500 mt-1">Account numbers do not match.</p>
                    )}
                </div>

                {/* Bank Name Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Bank Name</label>
                    <input
                        type="text"
                        {...register("bankName", { required: "Bank name is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter bank name"
                    />
                    {errors.bankName && <p className="error text-red-500 mt-1">{errors.bankName.message}</p>}
                </div>

                {/* Branch Name Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Branch Name</label>
                    <input
                        type="text"
                        {...register("branchName", { required: "Branch name is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter branch name"
                    />
                    {errors.branchName && <p className="error text-red-500 mt-1">{errors.branchName.message}</p>}
                </div>

                {/* IFSC Code Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">IFSC Code</label>
                    <input
                        type="text"
                        {...register("ifscCode", { required: "IFSC code is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter IFSC code"
                    />
                    {errors.ifscCode && <p className="error text-red-500 mt-1">{errors.ifscCode.message}</p>}
                </div>

                {/*  1st page of passbook */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800"> First Page of Bank Passbook (PDF)</label>
                    <input
                        type="file"
                        {...register("bankPassbook", {
                            required: "Bank document is required",
                            validate: {
                                fileType: (value) =>
                                    value[0] && value[0].type !== "application/pdf"
                                        ? "Only PDF files are allowed."
                                        : true,
                                fileSize: (value) =>
                                    value[0] && value[0].size > 2 * 1024 * 1024
                                        ? "File size should not exceed 2MB."
                                        : true,
                            },
                        })}
                        accept="application/pdf"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.bankPassbook && <p className="error text-red-500 mt-1">{errors.bankPassbook.message}</p>}
                </div>

            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button type="button" className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={prevStep}>
                    Previous
                </button>

                <button
                    type="submit"
                    onClick={handleSubmit(handleBankSubmit)} // Use handleSubmit for validation and submission
                    className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg active:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                    Submit the form
                </button>
            </div>
        </div>
    );
}

// PropTypes for the component
Bank.propTypes = {
    prevStep: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Bank;
