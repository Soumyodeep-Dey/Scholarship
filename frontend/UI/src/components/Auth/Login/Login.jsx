import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [securityCode, setSecurityCode] = useState(generateSecurityCode());
  const navigate = useNavigate();

  // Function to generate a random security code with exactly 6 characters
  function generateSecurityCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const length = 6;
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  // Handle the change of security code
  const handleChangeCode = () => {
    setSecurityCode(generateSecurityCode());
  };

  // Handle form submission
  const onSubmit = (data) => {
    if (data.securityCode !== securityCode) {
      alert("Security code doesn't match. Please try again.");
    } else {
      console.log("Login successful:", data);
      navigate('/dashboard'); // Navigate to dashboard upon successful login
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Applicant Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Applicant ID */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="applicantId">
              Applicant ID
            </label>
            <input
              type="text"
              id="applicantId"
              placeholder="Enter your Applicant ID"
              {...register("applicantId", { required: "Applicant ID is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.applicantId ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                }`}
            />
            {errors.applicantId && (
              <p className="text-red-500 text-sm mt-1">{errors.applicantId.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Security Code */}
          <div className="mb-6 flex items-center">
            <div className="bg-gray-200 px-4 py-2 rounded-lg mr-4 text-lg font-mono">
              {securityCode}
            </div>
            <button
              type="button"
              onClick={handleChangeCode}
              className="text-blue-600 hover:underline"
              aria-label="Generate a new security code"
            >
              Change
            </button>
            <div className="ml-4 w-full">
              <input
                type="text"
                placeholder="Enter security code"
                {...register("securityCode", {
                  required: "Security code is required",
                  validate: (value) =>
                    /^[A-Za-z0-9!@#$%^&*]+$/.test(value) || "Invalid characters in security code",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.securityCode ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
              />
              {errors.securityCode && (
                <p className="text-red-500 text-sm mt-1">{errors.securityCode.message}</p>
              )}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          New applicant?{' '}
          <a href="/register" className="text-orange-600 font-bold hover:underline">
            Register
          </a>
        </p>
        {/* Forgot Password or Application ID */}
        <p className="text-center text-gray-600 mt-6">
          Forgot Application ID or password?{' '}
          <a href="/" className="text-orange-600 font-bold hover:underline">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
