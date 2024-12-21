import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../validations/signupSchema';
import BasicInfoStep from './steps/BasicInfoStep';
import AcademicInfoStep from './steps/AcademicInfoStep';
import SettingsStep from './steps/SettingsStep';
import SkillsStep from './steps/SkillsStep';
import AvailabilityStep from './steps/AvailabilityStep';
import StepIndicator from '../../components/StepIndicator';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();
	const { userRegister, loading, registerError : error } = useAuth();
	const [currentStep, setCurrentStep] = useState(1);
	const totalSteps = 5;

	const methods = useForm({
		resolver: yupResolver(signupSchema),
		mode: 'onChange',
		defaultValues: {
			settings: { language: 'en' },
			skillsToTeach: [{ name: '', proficiencyLevel: 'beginner', category: '', description: '' }],
			skillsToLearn: [{ name: '', currentLevel: 'none', targetLevel: 'intermediate', category: '', description: '' }],
			availability: [],
		}
	});

	const { handleSubmit, trigger } = methods;

	const onSubmit = async (data) => {
		console.log('Form submitted:', data);
		// Send data to backend
		const success = await userRegister(data);
		if (success) {
			navigate('/login');
		}
	};

	const nextStep = async () => {
		let fieldsToValidate = [];
		switch (currentStep) {
			case 1:
				fieldsToValidate = ['email', 'password', 'profile'];
				break;
			case 2:
				fieldsToValidate = ['academic'];
				break;
			case 3:
				fieldsToValidate = ['settings'];
				break;
			case 4:
				fieldsToValidate = ['skillsToTeach', 'skillsToLearn'];
				break;
			default:
				fieldsToValidate = ['availability'];
		}

		const isStepValid = await trigger(fieldsToValidate);
		if (isStepValid) {
			setCurrentStep(prev => Math.min(prev + 1, totalSteps));
		}
	};

	const prevStep = () => {
		setCurrentStep(prev => Math.max(prev - 1, 1));
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Create your account
				</h2>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

							{currentStep === 1 && <BasicInfoStep />}
							{currentStep === 2 && <AcademicInfoStep />}
							{currentStep === 3 && <SettingsStep />}
							{currentStep === 4 && <SkillsStep />}
							{currentStep === 5 && <AvailabilityStep />}

							<div className="flex justify-between pt-4">
								{currentStep > 1 && (
									<button
										type="button"
										onClick={prevStep}
										className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
									>
										Previous
									</button>
								)}
								
								{currentStep < totalSteps ? (
									<button
										type="button"
										onClick={nextStep}
										className="ml-auto inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
									>
										Next
									</button>
								) : (
									<button
										type="submit"
										className="ml-auto inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
									>
										Complete Registration
									</button>
								)}
							</div>
						</form>
					</FormProvider>
				</div>
			</div>
		</div>
	);
};

export default SignUp;