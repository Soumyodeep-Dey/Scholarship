// src/pages/LandingPage.jsx
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-6 text-center">
        <h1 className="text-6xl font-bold mb-4 text-orange-400">Prime Minister Special Scholarship Scheme</h1>
        <p className="text-2xl font-light">
          A scholarship initiative dedicated to empowering students across the nation
        </p>
        <p className="mt-4 text-xl font-light italic">
          &quot;Your pathway to a brighter future begins here.&quot;
        </p>
      </section>

      {/* Prime Minister's Picture Section */}
      <section className="flex justify-center py-8">
        <img
          src="https://cdn.narendramodi.in/cmsuploads/0.81964300_1438597086_0-49155900-1438155410-dsc-2927.jpg" // Replace with the actual picture URL
          alt="Prime Minister"
          className="w-1/2 h-auto shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </section>

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto py-12 px-4 sm:px-8 md:px-12">

        {/* About the Scholarship */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 mb-6">About the Scholarship</h2>
          <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed">
            The Prime Minister Special Scholarship Scheme provides financial support to deserving students from diverse backgrounds, including those from rural areas. Our aim is to create an inclusive education pathway that is fully paperless, making the application process as simple and accessible as possible.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Easy Application",
              description: "Apply from anywhere with a fully digital, paperless process.",
            },
            {
              title: "Real-Time Status",
              description: "Track your application progress with real-time updates.",
            },
            {
              title: "24/7 Support",
              description: "Access our 24/7 chatbot for any questions or support.",
            },
            {
              title: "Document Upload",
              description: "Upload necessary documents securely from your device.",
            },
            {
              title: "Inclusive for All",
              description: "Designed for students from every region and background.",
            },
            {
              title: "Secure and Trusted",
              description: "A reliable system built to protect your information.",
            },
          ].map((feature, index) => (
            <div key={index} className="p-10 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/register')}
            className="bg-orange-500 text-white py-5 px-14 rounded-full font-bold shadow-lg
            hover:bg-orange-600 hover:shadow-2xl transition duration-200 transform active:scale-95">
            Start Your Application
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
