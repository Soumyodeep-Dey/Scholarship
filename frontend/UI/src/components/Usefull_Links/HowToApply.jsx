// src/pages/HowToApply.jsx

const HowToApply = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">How to Apply</h1>

      <div className="space-y-6 text-gray-700 text-lg">
        <section>
          <h2 className="font-semibold text-2xl mb-3">Step 1: Register on the Portal</h2>
          <p>
            Begin by registering an account on the scholarship portal. Use a valid email address and create a secure password. You will receive a confirmation email to verify your account.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">Step 2: Complete the Application Form</h2>
          <p>
            Log in to your account and access the application form. Fill in all required details accurately, including personal information, academic history, and financial background. Double-check each section before moving forward.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">Step 3: Upload Required Documents</h2>
          <p>
            Ensure that all necessary documents are ready for upload. Typical documents include proof of identity, academic transcripts, income certificate, and a recent photograph. All documents should be in PDF or JPEG format and should meet the size and clarity requirements mentioned on the portal.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">Step 4: Review and Submit</h2>
          <p>
            Before submitting your application, carefully review all entered information and uploaded documents. Once submitted, no further edits can be made. Click on the &quot;Submit Application&quot; button to finalize your application.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-2xl mb-3">Step 5: Confirmation and Tracking</h2>
          <p>
            After submission, you will receive an email confirmation with your application number. Use this number to track the status of your application through the portal.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowToApply;
