// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About the Scholarship</h2>
          <p className="text-sm text-gray-200">
            The Prime Minister Special Scholarship Scheme aims to support students from underprivileged and rural backgrounds with a paperless and accessible application process.
          </p>
        </div>
        
        {/* Useful Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Useful Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/guidelines" className="hover:text-yellow-400">Guidelines</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-yellow-400">FAQ</a>
            </li>
            <li>
              <a href="/eligibility" className="hover:text-yellow-400">Eligibility Criteria</a>
            </li>
            <li>
              <a href="/document-upload" className="hover:text-yellow-400">Document Upload</a>
            </li>
            <li>
              <a href="/application-status" className="hover:text-yellow-400">Application Status</a>
            </li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-200 mb-2">For any queries or support, please reach out to us:</p>
          <p className="text-sm text-gray-200">
            Phone: <a href="tel:+919876543210" className="hover:text-yellow-400">+91 9836545284</a>
          </p>
          <p className="text-sm text-gray-200">
            Email: <a href="mailto:support@scholarship.org" className="hover:text-yellow-400">support@scholarship.org</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Prime Minister Special Scholarship Scheme. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
