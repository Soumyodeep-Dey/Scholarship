import { useLocation } from 'react-router-dom';

function ForgetIdPass() {
    const location = useLocation();
    const userData = location.state?.userData;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-blue-800 mb-4">Forgot ID or Password</h1>
                <p className="text-lg text-gray-700 mb-2">
                    <strong>User Name:</strong> {userData?.name || "Tamagno_____"}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                    <strong>User Applicant ID:</strong> {userData?.applicantId || "786"}
                </p>
                <p className="text-lg text-gray-700">
                    <strong>Password:</strong> {userData?.password || "123456789"}
                </p>
            </div>
        </div>
    );
}

export default ForgetIdPass;
