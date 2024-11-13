import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function BasicDetails({ nextStep }) {
    const { register, watch, formState: { errors } } = useFormContext();

    
    const navigate = useNavigate();
    const selectedCaste = watch("caste");


    // Function to handle copying the permanent address to current address
    const [permanentAddress, setPermanentAddress] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const handleCopyAddress = () => {
        setCurrentAddress(permanentAddress);
    };
    return (
        <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 border-blue-400 pb-2">Basic Details</h3>

            {/* Name */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Name</label>
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                />
                {errors.name && <p className="error text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            {/* SurName */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Surname</label>
                <input
                    type="text"
                    {...register("surname", { required: "Surname is required" })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your surname"
                />
                {errors.surname && <p className="error text-red-500 mt-1">{errors.surname.message}</p>}
            </div>

            {/* Phone Number */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Phone Number</label>
                <input
                    type="tel"
                    {...register("phonenumber", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Please enter a valid 10-digit phone number",
                        },
                    })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                />
                {errors.phonenumber && <p className="error text-red-500 mt-1">{errors.phonenumber.message}</p>}
            </div>

            {/* Date of Birth */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2 text-gray-800">Date of Birth</label>
                <input
                    type="date"
                    {...register("dob", {
                        required: "Date of birth is required",
                        validate: (value) => {
                            const selectedDate = new Date(value);
                            const maxDate = new Date();
                            maxDate.setFullYear(2100); // Set the year limit to 2100
                            if (selectedDate > maxDate) {
                                return "Birth Year cannot be more than 2100";
                            }
                            const minDate = new Date();
                            minDate.setFullYear(1900); // Set the year limit to 1900
                            if (selectedDate < minDate) {
                                return "Birth Year cannot be less than 1900";
                            }
                            return true;
                        }
                    })}
                    max="2100-12-31"  // This prevents selecting a date beyond December 31, 2100
                    min="1900-01-01" // This prevents selecting a date less than January 01, 1900
                    className="input-field border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                />
                {errors.dob && <p className="error text-red-500 mt-1">{errors.dob.message}</p>}
            </div>

            {/* Gender */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2 text-gray-800">Gender</label>
                <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="male"
                            {...register("gender", { required: "Gender is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="female"
                            {...register("gender", { required: "Gender is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">Female</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="other"
                            {...register("gender", { required: "Gender is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">Other</span>
                    </label>
                </div>
                {errors.gender && <p className="error text-red-500 mt-1">{errors.gender.message}</p>}
            </div>

            {/* Email */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address",
                        },
                    })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                />
                {errors.email && <p className="error text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            {/* Permanent Address */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Permanent Address</label>
                <textarea
                    {...register("permanentAddress", { required: "Permanent Address is required" })}
                    value={permanentAddress}
                    onChange={(e) => setPermanentAddress(e.target.value)}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your Permanent address"
                />
                {errors.permanentAddress && <p className="error text-red-500 mt-1">{errors.permanentAddress.message}</p>}
            </div>

            {/* Address Copy Button */}
            <div className="mb-6 flex items-center">
                <label className="block text-lg font-semibold mb-2 flex-1">Current Address</label>
                <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="text-blue-500 ml-4 p-2 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200"
                >
                    Same as Permanent Address
                </button>
            </div>

            {/* Current Address */}
            <div>
                <textarea
                    {...register("currentAddress", { required: "Current Address is required" })}
                    value={currentAddress}
                    onChange={(e) => setCurrentAddress(e.target.value)}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your Current address"
                />
                {errors.currentAddress && <p className="error text-red-500 mt-1">{errors.currentAddress.message}</p>}
            </div>


            {/* Caste of the Applicant*/}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2 text-gray-800">Caste</label>
                <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="sc"
                            {...register("caste", { required: "Caste selection is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">SC</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="st"
                            {...register("caste", { required: "Caste selection is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">ST</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="obc"
                            {...register("caste", { required: "Caste selection is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">OBC</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="ews"
                            {...register("caste", { required: "Caste selection is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">EWS</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
                        <input
                            type="radio"
                            value="general"
                            {...register("caste", { required: "Caste selection is required" })}
                            className="text-blue-600"
                        />
                        <span className="text-gray-700">General</span>
                    </label>
                </div>
                {errors.caste && <p className="error text-red-500 mt-1">{errors.caste.message}</p>}
            </div>

            {/* Caste Certificate Field - Only shown if caste is SC, ST, OBC, or EWS */}
            {selectedCaste !== "general" && (
                <div className="mb-4">
                    <label className="block text-lg font-semibold mb-2 text-gray-800">Caste Certificate</label>
                    <input
                        type="file"
                        {...register("casteCertificate", {
                            required: selectedCaste !== "general" ? "Caste certificate is required" : false,
                            validate: {
                                fileType: (value) =>
                                    value[0] && value[0].type !== "application/pdf"
                                        ? "Only PDF files are allowed."
                                        : true,
                                fileSize: (value) =>
                                    value[0] && value[0].size > 2 * 1024 * 1024 // 2MB in bytes
                                        ? "File size should not exceed 2MB."
                                        : true,
                            },
                        })}
                        accept="application/pdf"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                    />
                    {errors.casteCertificate && (
                        <p className="error text-red-500 mt-1">{errors.casteCertificate.message}</p>
                    )}
                </div>
            )}


            {/* Father's Name */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Father&apos;s Name</label>
                <input
                    type="text"
                    {...register("fatherName", { required: "Father's Name is required" })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your father's name"
                />
                {errors.fatherName && <p className="error text-red-500 mt-1">{errors.fatherName.message}</p>}
            </div>

            {/* Father's Occupation */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Father&apos;s Occupation</label>
                <input
                    type="text"
                    {...register("fatherOccupation", { required: "Father's Occupation is required" })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your father's occupation"
                />
                {errors.fatherOccupation && <p className="error text-red-500 mt-1">{errors.fatherOccupation.message}</p>}
            </div>

            {/* Mother's Name */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Mother&apos;s Name</label>
                <input
                    type="text"
                    {...register("motherName", { required: "Mother's Name is required" })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your mother's name"
                />
                {errors.motherName && <p className="error text-red-500 mt-1">{errors.motherName.message}</p>}
            </div>

            {/* Mother's Occupation */}
            <div className="mb-6">
                <label className="block text-lg font-semibold mb-2">Mother&apos;s Occupation</label>
                <input
                    type="text"
                    {...register("motherOccupation", { required: "Mother's Occupation is required" })}
                    className="input-field border border-gray-300 rounded-lg p-3 w-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your mother's occupation"
                />
                {errors.motherOccupation && <p className="error text-red-500 mt-1">{errors.motherOccupation.message}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Have an Account? Click Here
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


// PropTypes outside the component function
BasicDetails.propTypes = {
    nextStep: PropTypes.func.isRequired,
};

export default BasicDetails;