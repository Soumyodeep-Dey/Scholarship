import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import BasicDetails from './Basic';
import Education from './Education';
import ImpDocs from './ImpDocs';
import Bank from './Bank';
import FormPreview from './FormPreview'; // Import FormPreview component

const Register = () => {
    const [step, setStep] = useState(1);
    const methods = useForm({
        mode: 'onTouched',
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1); // This is the function to go back to the previous step

    const onSubmit = (data) => {
        console.log('Final Submission Data:', data);
        alert('Form submitted successfully!');
    };

    return (
        <FormProvider {...methods}> {/* Provide the form context */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
                    <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Fresh Application</h2>

                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {/* Render different steps based on the current step */}
                        {step === 1 && <BasicDetails nextStep={nextStep} prevStep={prevStep} step={step} />}
                        {step === 2 && <Education nextStep={nextStep} prevStep={prevStep} step={step} />}
                        {step === 3 && <ImpDocs nextStep={nextStep} prevStep={prevStep} step={step} />}
                        {step === 4 && <Bank nextStep={nextStep} prevStep={prevStep} step={step} />}
                        {step === 5 && <FormPreview prevStep={prevStep} />} {/* Pass prevStep to FormPreview */}
                    </form>
                </div>
            </div>
        </FormProvider>
    );
};

export default Register;
