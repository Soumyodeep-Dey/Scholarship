import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

function EducationDetails({ prevStep, nextStep }) {
    const { register, formState: { errors }, setValue } = useFormContext();

    const [show12thFields, setShow12thFields] = useState(true);
    const [showGraduationFields, setShowGraduationFields] = useState(true);

    const handle12thChange = (e) => {
        const value = e.target.value;
        if (value === "NA") {
            setShow12thFields(false);
            setValue("marks12th", "NA"); // Set the marks to 'NA' if school name is 'NA'
        } else {
            setShow12thFields(true);
        }
    };

    const handleGraduationChange = (e) => {
        const value = e.target.value;
        if (value === "NA") {
            setShowGraduationFields(false);
            setValue("marksGraduation", "NA"); // Set the marks to 'NA' if college name is 'NA'
        } else {
            setShowGraduationFields(true);
        }
    };

    return (
        <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-400 pb-2">
                Educational Details
            </h3>

            {/* Educational Details Section */}
            <div className="mb-6">
                {/* 10th School Name */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">10th School Name</label>
                    <input
                        type="text"
                        {...register("school10th", { required: "10th school name is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your 10th school name"
                    />
                    {errors.school10th && <p className="error text-red-500 mt-1">{errors.school10th.message}</p>}
                </div>

                {/* 10th Marks */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">10th Marks</label>
                    <input
                        type="text"
                        {...register("marks10th", { required: "10th marks are required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your 10th marks"
                    />
                    {errors.marks10th && <p className="error text-red-500 mt-1">{errors.marks10th.message}</p>}
                </div>

                {/* 10th Board Certificate Upload */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Upload 10th Board Certificate</label>
                    <input
                        type="file"
                        accept=".pdf"
                        {...register("boardCertificate10th", {
                            required: "Please upload your 10th board certificate.",
                            validate: {
                                size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                            }
                        })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.boardCertificate10th && <p className="error text-red-500 mt-1">{errors.boardCertificate10th.message}</p>}
                </div>

                {/* 10th Board Marksheet Upload */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Upload 10th Board Marksheet</label>
                    <input
                        type="file"
                        accept=".pdf"
                        {...register("boardMarksheet10th", {
                            required: "Please upload your 10th board Marksheet.",
                            validate: {
                                size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                            }
                        })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.boardMarksheet10th && <p className="error text-red-500 mt-1">{errors.boardMarksheet10th.message}</p>}
                </div>




                {/* Showing 'NA' Here */}
                <p className="text-m text-gray-500 p-2">Write &lsquo;NA&lsquo; if you are below 12th grade.</p>




                {/* 12th School Name */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">12th School Name</label>
                    <input
                        type="text"
                        {...register("school12th", { required: "12th school name is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your 12th school name"
                        onChange={handle12thChange}
                    />
                    {errors.school12th && <p className="error text-red-500 mt-1">{errors.school12th.message}</p>}
                </div>
                
                {/* If 12th School Name is NA then these sections will be Disabled */}

                {/* 12th Marks (text) and Certificate */}
                {show12thFields && (
                    <>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2">12th Marks</label>
                            <input
                                type="text"
                                {...register("marks12th", { required: "12th marks are required" })}
                                className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your 12th marks"
                            />
                            {errors.marks12th && <p className="error text-red-500 mt-1">{errors.marks12th.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2">Upload 12th Board Certificate (PDF)</label>
                            <input
                                type="file"
                                accept=".pdf"
                                {...register("boardCertificate12th", {
                                    required: "Please upload your 12th board certificate.",
                                    validate: {
                                        size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                        type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                    }
                                })}
                                className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.boardCertificate12th && <p className="error text-red-500 mt-1">{errors.boardCertificate12th.message}</p>}
                        </div>
                    </>
                )}

                {/* 12th Makrs (PDF) */}
                {show12thFields && (
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Upload 12th Board Marksheet (PDF)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register("boardMarksheet12th", {
                                required: "Please upload your 12th board Marksheet.",
                                validate: {
                                    size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                    type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                }
                            })}
                            className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.boardMarksheet12th && <p className="error text-red-500 mt-1">{errors.boardMarksheet12th.message}</p>}
                    </div>
                )}



                {/* Showing 'NA' Here */}
                <p className="text-m text-gray-500 p-2">Write &lsquo;NA&lsquo; if you are not completed your graduation.</p>




                {/* Graduation College Name */}
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2">Graduation College Name</label>
                    <input
                        type="text"
                        {...register("graduationCollege", { required: "Graduation college name is required" })}
                        className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your graduation college name"
                        onChange={handleGraduationChange}
                    />
                    {errors.graduationCollege && <p className="error text-red-500 mt-1">{errors.graduationCollege.message}</p>}
                </div>

                {/* If College Name is NA then these sections will be Disabled */}

                {/* Graduation YGPA / CGPA */}
                {showGraduationFields && (
                    <>
                        <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2">Graduation YGPA / CGPA</label>
                            <input
                                type="text"
                                {...register("marksGraduation", { required: "Graduation marks are required" })}
                                className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your graduation marks"
                            />
                            {errors.marksGraduation && <p className="error text-red-500 mt-1">{errors.marksGraduation.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2">Proof of Admission (PDF)</label>
                            <input
                                type="file"
                                accept=".pdf"
                                {...register("proofOfAdmission", {
                                    required: "Proof of admission is required",
                                    validate: {
                                        size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                        type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                    }
                                })}
                                className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.proofOfAdmission && <p className="error text-red-500 mt-1">{errors.proofOfAdmission.message}</p>}
                        </div>
                    </>
                )}

                {/* Even Sem Result */}
                {showGraduationFields && (
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Odd Sem Result (PDF)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register("oddSemResult", {
                                required: "Odd Sem result is required",
                                validate: {
                                    size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                    type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                }
                            })}
                            className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.oddSemResult && <p className="error text-red-500 mt-1">{errors.oddSemResult.message}</p>}
                    </div>
                )}

                {/* Even Sem Result */}
                {showGraduationFields && (
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Even Sem Result (PDF)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register("evenSemResult", {
                                required: "Even Sem result is required",
                                validate: {
                                    size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                    type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                }
                            })}
                            className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.evenSemResult && <p className="error text-red-500 mt-1">{errors.evenSemResult.message}</p>}
                    </div>
                )}
            </div>



            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button type="button" className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={prevStep}>
                    Previous
                </button>
                <button type="button" className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-800 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={nextStep}>
                    Next
                </button>
            </div>
        </div>
    );
}

EducationDetails.propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
};

export default EducationDetails;
