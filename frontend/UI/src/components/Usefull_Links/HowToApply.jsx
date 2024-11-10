// src/pages/HowToApply.jsx

const HowToApply = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold mb-10 text-blue-900 text-center">How to Apply</h1>

      <div className="space-y-10 text-gray-800 text-lg">
        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 1: Start Your Application</h2>
          <p className="leading-relaxed">
            Click on the <strong>&quot;Fresh Applicant&quot;</strong> button in the navigation bar or the <strong>&quot;Start Your Application&quot;</strong> button on the landing page. This will take you to the registration page where you can create an account with a valid email address and password. After registering, check your email to verify your account.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 2: Fill in Basic Details</h2>
          <p className="leading-relaxed">
            Once logged in, you&apos;ll begin the application form by filling out your basic details, including personal information like your full name, date of birth, and contact information. Review these details carefully before proceeding to the next section.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 3: Provide Educational Information</h2>
          <p className="leading-relaxed">
            In this step, enter your academic qualifications, including details about your Class 12 marks, school name, and any additional academic achievements. Ensure that all information is accurate as it may impact your eligibility for the scholarship.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 4: Upload Important Documents</h2>
          <p className="leading-relaxed">
            Prepare and upload all required documents, such as proof of identity, academic transcripts, income certificate, domicile certificate, and a recent passport-sized photograph. Documents should be in PDF or JPEG format and should meet the size and clarity requirements specified on the portal.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 5: Enter Bank Details</h2>
          <p className="leading-relaxed">
            In this final step, enter your bank details, including the bank name, branch, account number, and IFSC code. These details are essential for disbursement if you are selected for the scholarship. Double-check the accuracy of this information to avoid any issues.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 6: Review and Submit</h2>
          <p className="leading-relaxed">
            Before submitting your application, review all entered information and uploaded documents. Note that you won&apos;t be able to edit the application after submission. Once you are confident that all information is accurate, click on <strong>&quot&quot;Submit Application&quot;</strong> to finalize your application.
          </p>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="font-bold text-2xl text-blue-700 mb-4">Step 7: Confirmation and Tracking</h2>
          <p className="leading-relaxed">
            After submission, you&apos;ll receive an email confirmation with your application number. Use this number to track the status of your application on the portal. You will also be notified of any updates regarding your application via email.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowToApply;
