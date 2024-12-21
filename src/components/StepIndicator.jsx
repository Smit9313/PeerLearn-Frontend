const StepIndicator = ({ currentStep, totalSteps }) => {
	const steps = [
		{ number: 1, title: 'Basic Info' },
		{ number: 2, title: 'Academic' },
		{ number: 3, title: 'Settings' },
		{ number: 4, title: 'Skills' },
		{ number: 5, title: 'Availability' },
	];

	return (
		<div className="py-4">
			<div className="flex items-center justify-between w-full">
				{steps.map((step) => (
					<div key={step.number} className="flex flex-col items-center">
						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${currentStep === step.number
									? 'bg-blue-600 text-white'
									: currentStep > step.number
										? 'bg-green-500 text-white'
										: 'bg-gray-200 text-gray-700'}`}
						>
							{currentStep > step.number ? '✓' : step.number}
						</div>
						<span className="mt-2 text-xs text-gray-500">{step.title}</span>
					</div>
				))}
			</div>
			<div className="mt-4 h-2 bg-gray-200 rounded-full">
				<div
					className="h-full bg-blue-600 rounded-full transition-all duration-300"
					style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
				/>
			</div>
		</div>
	);
};

export default StepIndicator;