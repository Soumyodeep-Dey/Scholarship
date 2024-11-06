import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

function ImpDocs({ prevStep, nextStep }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-400 pb-2">
                Uploaded Documents
            </h3>

            <div className="mb-6">

                {/* Family Net Income */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold mb-2">Family Net Income</label>
                    <input
                        type="text"
                        {...register("income", { required: "Family Net Income is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your Family Net Income"
                    />
                    {errors.income && <p className="error text-red-500 mt-1">{errors.income.message}</p>}
                </div>

                {/* Income Certificate */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">Income Certificate</label>
                    <input
                        type="file"
                        {...register("incomeCertificate", {
                            required: "Income certificate is required",
                            validate: {
                                fileType: (value) => (
                                    value[0] && value[0].type !== "application/pdf"
                                        ? "Only PDF files are allowed."
                                        : true
                                ),
                                fileSize: (value) => (
                                    value[0] && value[0].size > 2 * 1024 * 1024
                                        ? "File size should not exceed 2MB."
                                        : true
                                )
                            }
                        })}
                        accept="application/pdf"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.incomeCertificate && <p className="error text-red-500 mt-1">{errors.incomeCertificate.message}</p>}
                </div>

                {/* Domicile Certificate Field */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">Domicile Certificate</label>
                    <input
                        type="file"
                        {...register("domicileCertificate", {
                            required: "Domicile certificate is required",
                            validate: {
                                fileType: (value) => (
                                    value[0] && value[0].type !== "application/pdf"
                                        ? "Only PDF files are allowed."
                                        : true
                                ),
                                fileSize: (value) => (
                                    value[0] && value[0].size > 2 * 1024 * 1024
                                        ? "File size should not exceed 2MB."
                                        : true
                                )
                            }
                        })}
                        accept="application/pdf"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.domicileCertificate && <p className="error text-red-500 mt-1">{errors.domicileCertificate.message}</p>}
                </div>

                {/* Disability Certificate */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">Disability Certificate (if applicable)</label>
                    <input
                        type="file"
                        {...register("disabilityCertificate", {
                            validate: {
                                fileType: (value) => (
                                    value[0] && value[0].type !== "application/pdf"
                                        ? "Only PDF files are allowed."
                                        : true
                                ),
                                fileSize: (value) => (
                                    value[0] && value[0].size > 2 * 1024 * 1024
                                        ? "File size should not exceed 2MB."
                                        : true
                                )
                            }
                        })}
                        accept="application/pdf"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.disabilityCertificate && <p className="error text-red-500 mt-1">{errors.disabilityCertificate.message}</p>}
                </div>

                {/* Identity Proof */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">Identity Proof (Aadhaar, Passport, Voter ID, or Driving License)</label>
                    <input
                        type="file"
                        {...register("identityProof", {
                            required: "Identity proof is required",
                            validate: {
                                fileType: (value) => (
                                    value[0] && !["application/pdf", "image/jpeg", "image/png"].includes(value[0].type)
                                        ? "Only PDF or image files are allowed."
                                        : true
                                ),
                                fileSize: (value) => (
                                    value[0] && value[0].size > 2 * 1024 * 1024
                                        ? "File size should not exceed 2MB."
                                        : true
                                )
                            }
                        })}
                        accept="application/pdf, image/jpeg, image/png"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.identityProof && <p className="error text-red-500 mt-1">{errors.identityProof.message}</p>}
                </div>


                {/* Passport-sized Photograph */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">Passport-sized Photograph</label>
                    <input
                        type="file"
                        {...register("passportPhoto", {
                            required: "Passport-sized photograph is required",
                            validate: {
                                fileType: (value) => (
                                    value[0] && !["image/jpeg", "image/png"].includes(value[0].type)
                                        ? "Only image files are allowed."
                                        : true
                                ),
                                fileSize: (value) => (
                                    value[0] && value[0].size > 1 * 1024 * 1024
                                        ? "File size should not exceed 1MB."
                                        : true
                                )
                            }
                        })}
                        accept="image/jpeg, image/png"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.passportPhoto && <p className="error text-red-500 mt-1">{errors.passportPhoto.message}</p>}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

// PropTypes for the component
ImpDocs.propTypes = {
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
};

export default ImpDocs;
