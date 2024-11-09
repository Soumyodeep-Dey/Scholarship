import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

function EducationDetails({ prevStep, nextStep }) {
    const { register, formState: { errors }, setValue } = useFormContext();

    const [show12thFields, setShow12thFields] = useState(true);
    const [showGraduationFields, setShowGraduationFields] = useState(true);

    // Handling change for 12th School Name
    const handle12thChange = (e) => {
        const value = e.target.value;
        if (value === "NA") {
            setShow12thFields(false);
            setValue("marks12th", "NA"); // Set the marks to 'NA' if school name is 'NA'
        } else {
            setShow12thFields(true);
        }
    };

    // Handling change for Graduation College Name
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

            {/* Upload 10th Certificate */}
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

            {/* 10th Board Marksheet */}
            <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Upload 10th Board Marksheet (PDF)</label>
                <input
                    type="file"
                    accept=".pdf"
                    {...register("boardMarksheet10th", {
                        required: "Please upload your 10th Board Marksheet.",
                        validate: {
                            size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                            type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                        }
                    })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.boardMarksheet10th && <p className="error text-red-500 mt-1">{errors.boardMarksheet10th.message}</p>}
            </div>





            {/* Conditional Rendering for 12th Fields */}
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

            {/* Show 12th Marks and Upload Fields Only if 12th School Name is Provided */}
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

                    {/* 12th Board Certificate */}
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

                    {/* 12th Board Marksheet */}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Upload 12th Board Marksheet (PDF)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register("boardMarksheet12th", {
                                required: "Please upload your 12th Board Marksheet.",
                                validate: {
                                    size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                    type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                }
                            })}
                            className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.boardMarksheet12th && <p className="error text-red-500 mt-1">{errors.boardMarksheet12th.message}</p>}
                    </div>
                </>
            )}





            {/* Graduation Fields */}
            <p className="text-m text-gray-500 p-2">Write &lsquo;NA&lsquo; if you haven&lsquo;t completed your graduation.</p>

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

            {/* Show Graduation Marks Only if College Name is Provided */}
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
                        <label className="block text-lg font-semibold mb-2">Result of ODD SEM (PDF)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register("resultofOddSem", {
                                required: "Please upload your result of Odd Sem.",
                                validate: {
                                    size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                    type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                }
                            })}
                            className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.resultofOddSem && <p className="error text-red-500 mt-1">{errors.resultofOddSem.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Result of EVEN SEM (PDF)</label>
                        <input
                            type="file"
                            accept=".pdf"
                            {...register("resultofEvenSem", {
                                required: "Please upload your result of Even Sem.",
                                validate: {
                                    size: (file) => file[0]?.size <= 2 * 1024 * 1024 || "File size must be under 2MB",
                                    type: (file) => file[0]?.type === "application/pdf" || "Only PDF files are allowed"
                                }
                            })}
                            className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.resultofEvenSem && <p className="error text-red-500 mt-1">{errors.resultofEvenSem.message}</p>}
                    </div>
                </>
            )}

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

EducationDetails.propTypes = {
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default EducationDetails;
