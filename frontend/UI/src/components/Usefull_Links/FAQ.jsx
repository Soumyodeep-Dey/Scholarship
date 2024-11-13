// src/pages/FAQ.jsx

const FAQ = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6 bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold mb-10 text-blue-900 text-center">Frequently Asked Questions</h1>

            <div className="space-y-8 text-gray-800 text-lg">
                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">1. Who is eligible to apply for this scholarship?</h2>
                    <p className="leading-relaxed">
                        Applicants must meet specific criteria, including minimum academic marks of 60%, age limits, family income thresholds, and residency status. For complete details, please see the <strong>Eligibility Criteria</strong> section.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">2. How do I apply for the scholarship?</h2>
                    <p className="leading-relaxed">
                        To apply, begin by registering on our online portal. After completing registration, fill out the application form, upload all required documents, and submit it before the deadline.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">3. What documents are required for the application?</h2>
                    <p className="leading-relaxed">
                        Required documents include proof of identity (e.g., Aadhar card), domicile certificate, family income certificate, academic transcripts, and a recent passport-sized photograph. Additional documents may apply based on specific eligibility requirements.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">4. Is there an application fee?</h2>
                    <p className="leading-relaxed">
                        No, the application and registration are entirely free for eligible applicants. There are no hidden charges associated with the application process.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">5. Can I edit my application after submission?</h2>
                    <p className="leading-relaxed">
                        Unfortunately, applications cannot be edited once submitted. Please review all information carefully to ensure accuracy before submitting.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">6. How will I know if I am selected for the scholarship?</h2>
                    <p className="leading-relaxed">
                        Selected applicants will be notified via email and can also check their application status on the portal. Notifications will include further instructions on verification and the next steps for scholarship disbursement.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">7. Can I apply for more than one scholarship?</h2>
                    <p className="leading-relaxed">
                        No, this scholarship is for students who are not receiving any other form of financial aid. Applicants already receiving other scholarships are not eligible.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                    <h2 className="font-bold text-2xl text-blue-700 mb-4">8. Who can I contact for help with my application?</h2>
                    <p className="leading-relaxed">
                        For assistance, please reach out to our support team through the <strong>Contact Us</strong> section on our website. Our team is available to provide guidance throughout the application process.
                    </p>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
