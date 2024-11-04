// src/components/Navbar.jsx

import { useEffect, useState } from 'react';

const Navbar = () => {
  const messages = [
    "Explore special scholarships tailored for talented students nationwide.",
    "Register to access exclusive financial aid opportunities.",
    "Submit your application to secure support for your education.",
    "Track your scholarship application status in real-time.",
    "Get 24/7 support throughout your scholarship journey.",
    "Achieve your educational goals with government-backed scholarships.",
    "No application or registration fees for eligible students.",
    "Secure funding for tuition, books, and living expenses.",
    "Join thousands of students benefiting from this scholarship program."
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <nav className="bg-blue-800 text-white p-4 flex items-center justify-between shadow-lg">
      {/* Icon and Title */}
      <div className="flex items-center space-x-4">
        <img
          src="/Images/ICON_or_LOGO.jpeg"
          alt="Scholarship Icon"
          className="w-10 h-10"
        />
        <h1 className="text-xl font-bold">Prime Minister Special Scholarship Scheme</h1>
      </div>

      {/* Cycling Message */}
      <div className="hidden md:block text-gray-200 italic text-xl transition-opacity duration-500 ease-in-out">
        {messages[currentMessageIndex]}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-white text-blue-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-400 transition duration-200">
          Applicant Login
        </button>
        <button className="bg-yellow-400 text-blue-800 py-2 px-4 rounded-full font-semibold 
        hover:bg-yellow-600 transition duration-200">
          Fresh Applicant
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
