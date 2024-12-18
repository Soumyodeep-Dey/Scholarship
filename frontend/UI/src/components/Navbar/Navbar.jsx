import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const messages = [
    "Explore special scholarships tailored for talented students nationwide.",
    "Register to access exclusive financial aid opportunities.",
    "Submit your application to secure support for your education.",
    "Track your scholarship application status in real-time.",
    "Get 24/7 support throughout your scholarship journey.",
    "Achieve your educational goals with PMSSS scholarship.",
    "No application or registration fees for eligible students.",
    "Secure funding for tuition, books, and living expenses.",
    "Join thousands of students benefiting from this scholarship program."
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <nav className="bg-blue-800 text-white p-2 flex items-center justify-between shadow-lg">
      {/* Icon and Title */}
      <div className="flex items-center space-x-3">
        <img
          onClick={() => navigate('/')}
          src="/Images/ICON_or_LOGO.jpeg"
          alt="Scholarship Icon"
          className="w-10 h-10 cursor-pointer"
        />
        <h1 className="text-lg md:text-xl font-bold">Prime Minister Special Scholarship Scheme</h1>
      </div>

      {/* Cycling Message */}
      <div className="hidden md:block text-gray-200 italic text-lg transition-opacity duration-500 ease-in-out">
        {messages[currentMessageIndex]}
      </div>

      {/* Buttons */}
      <div className="flex space-x-3">
        {/* Hide "Applicant Login" and "Fresh Applicant" if on the /dashboard route */}
        {location.pathname !== '/dashboard' && location.pathname !== '/form-preview'&& (
          <>
            {location.pathname !== '/login' && (
              <button
                onClick={() => navigate('/login')}
                className="bg-white text-blue-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition duration-200"
              >
                Applicant Login
              </button>
            )}
            {location.pathname !== '/register' && (
              <button
                onClick={() => navigate('/register')}
                className="bg-orange-400 text-blue-800 py-2 px-4 rounded-full font-semibold hover:bg-orange-600 transition duration-200"
              >
                Fresh Applicant
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
