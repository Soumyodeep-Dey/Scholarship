// src/pages/FAQ.jsx

const FAQ = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-6 text-blue-800">Frequently Asked Questions</h1>

            <div className="space-y-8 text-gray-700 text-lg">
                <div>
                    <h2 className="font-semibold text-xl">1. Who is eligible to apply for this scholarship?</h2>
                    <p>
                        Eligibility criteria include academic qualifications, age limits, family income, and residency requirements. Please refer to the <strong>Eligibility Criteria</strong> section for detailed information.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">2. How do I apply for the scholarship?</h2>
                    <p>
                        To apply, first complete the online registration on our portal. After registration, fill out the application form, upload the required documents, and submit before the deadline.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">3. What documents are required for the application?</h2>
                    <p>
                        Required documents typically include proof of identity, domicile certificate, income certificate, academic transcripts, and recent passport-size photographs. Additional documents may be required based on specific eligibility criteria.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">4. Is there an application fee?</h2>
                    <p>
                        No, there is no application or registration fee for eligible students. Applications are completely free of charge.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">5. Can I edit my application after submission?</h2>
                    <p>
                        Once submitted, the application cannot be edited. Please ensure all information is accurate before final submission.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">6. How will I know if I am selected for the scholarship?</h2>
                    <p>
                        Selected applicants will be notified via email and can also check their application status through the portal. Notifications will include further instructions for verification and disbursement.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">7. Can I apply for more than one scholarship?</h2>
                    <p>
                        No, students who are currently receiving another scholarship are not eligible for this program. The scholarship aims to support students who are not benefiting from any other financial aid.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl">8. Who can I contact for help with my application?</h2>
                    <p>
                        For assistance, please contact our support team through the <strong>Contact Us</strong> section on our website. We are available to answer any questions regarding the application process.
                    </p>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
