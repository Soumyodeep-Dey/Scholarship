import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router';
import BasicDetails from './Basic';
import Education from './Education';
import ImpDocs from './ImpDocs';
import Bank from './Bank';

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // State to store all form data
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phonenumber: '',
        email: '',
        permanentaddress: '',
        caste: '',
        fathername: '',
        mothername: '',
        school10th: '',
        marks10th: '',
        school12th: '',
        marks12th: '',
        graduationCollege: '',
        marksGraduation: '',
        income: '',
        incomeCertificate: null,
        domicileCertificate: null,
        disabilityCertificate: null,
        identityProof: null,
        passportPhoto: null,
        accountHolderName: '',
        accountNumber: '',
    });

    const methods = useForm({
        mode: 'onTouched',
        defaultValues: formData,
    });

    const { handleSubmit } = methods;

    const nextStep = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const onSubmit = (data) => {
        const finalData = { ...formData, ...data };
        console.log('Final Submission Data:', finalData);
        navigate('/form-preview', { state: { userData: finalData } });
    };
    

    return (
        <FormProvider {...methods}>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
                    <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Fresh Application</h2>
                    
                    <form onSubmit={handleSubmit(step === 4 ? onSubmit : nextStep)}>
                        {step === 1 && (
                            <BasicDetails
                                nextStep={handleSubmit(nextStep)}
                                prevStep={prevStep}
                                step={step}
                            />
                        )}
                        {step === 2 && (
                            <Education
                                nextStep={handleSubmit(nextStep)}
                                prevStep={prevStep}
                                step={step}
                            />
                        )}
                        {step === 3 && (
                            <ImpDocs
                                nextStep={handleSubmit(nextStep)}
                                prevStep={prevStep}
                                step={step}
                            />
                        )}
                        {step === 4 && (
                            <Bank
                                onSubmit={onSubmit}
                                prevStep={prevStep}
                                step={step}
                            />
                        )}
                    </form>
                </div>
            </div>
        </FormProvider>
    );
};

export default Register;
