import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const SignUp = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		university: '',
		studentId: '',
		course: '',
	});

	const [showPassword, setShowPassword] = useState(false);
	const [step, setStep] = useState(1);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (step === 1) {
			setStep(2);
		} else {
			// Handle signup logic
			console.log('Form submitted:', formData);
		}
	};

	// Password strength requirements
	const passwordRequirements = [
		{
			text: 'At least 8 characters',
			met: formData.password.length >= 8,
		},
		{
			text: 'At least one uppercase letter',
			met: /[A-Z]/.test(formData.password),
		},
		{
			text: 'At least one number',
			met: /\d/.test(formData.password),
		},
		{
			text: 'At least one special character',
			met: /[!@#$%^&*]/.test(formData.password),
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<Link to="/" className="flex items-center justify-center space-x-2">
					<div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-xl">P</span>
					</div>
					<span className="text-2xl font-semibold text-gray-900">PeerLearn</span>
				</Link>
				<h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
					{step === 1 ? 'Create your account' : 'Complete your profile'}
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					{step === 1 ? (
						<>
							Already have an account?{' '}
							<Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
								Sign in
							</Link>
						</>
					) : (
						'Tell us about your academic background'
					)}
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow-soft rounded-lg sm:px-10">
					<form className="space-y-6" onSubmit={handleSubmit}>
						{step === 1 ? (
							<>
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<div>
										<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
											First name
										</label>
										<input
											id="firstName"
											name="firstName"
											type="text"
											required
											value={formData.firstName}
											onChange={handleChange}
											className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										/>
									</div>
									<div>
										<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<input
											id="lastName"
											name="lastName"
											type="text"
											required
											value={formData.lastName}
											onChange={handleChange}
											className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										University email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										placeholder="your.name@university.edu"
									/>
								</div>

								<div>
									<label htmlFor="password" className="block text-sm font-medium text-gray-700">
										Password
									</label>
									<div className="mt-1 relative">
										<input
											id="password"
											name="password"
											type={showPassword ? 'text' : 'password'}
											required
											value={formData.password}
											onChange={handleChange}
											className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										/>
										<button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute inset-y-0 right-0 flex items-center pr-3"
										>
											{showPassword ? (
												<EyeOff className="h-5 w-5 text-gray-400" />
											) : (
												<Eye className="h-5 w-5 text-gray-400" />
											)}
										</button>
									</div>
									<div className="mt-2 space-y-2">
										{passwordRequirements.map((req, index) => (
											<div key={index} className="flex items-center space-x-2">
												{req.met ? (
													<CheckCircle className="h-4 w-4 text-green-500" />
												) : (
													<AlertCircle className="h-4 w-4 text-gray-300" />
												)}
												<span className={`text-sm ${req.met ? 'text-green-500' : 'text-gray-500'}`}>
													{req.text}
												</span>
											</div>
										))}
									</div>
								</div>
							</>
						) : (
							<>
								<div>
									<label htmlFor="university" className="block text-sm font-medium text-gray-700">
										University
									</label>
									<select
										id="university"
										name="university"
										required
										value={formData.university}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
									>
										<option value="">Select your university</option>
										<option value="university1">University 1</option>
										<option value="university2">University 2</option>
									</select>
								</div>

								<div>
									<label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
										Student ID
									</label>
									<input
										id="studentId"
										name="studentId"
										type="text"
										required
										value={formData.studentId}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
									/>
								</div>

								<div>
									<label htmlFor="course" className="block text-sm font-medium text-gray-700">
										Course/Major
									</label>
									<input
										id="course"
										name="course"
										type="text"
										required
										value={formData.course}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										placeholder="e.g., Computer Science"
									/>
								</div>
							</>
						)}

						<div>
							<Button type="submit" variant="primary" className="w-full">
								{step === 1 ? 'Continue' : 'Create Account'}
							</Button>
						</div>
					</form>

					<div className="mt-6">
						<p className="text-xs text-center text-gray-500">
							By creating an account, you agree to our{' '}
							<a href="#" className="font-medium text-primary-600 hover:text-primary-500">
								Terms of Service
							</a>{' '}
							and{' '}
							<a href="#" className="font-medium text-primary-600 hover:text-primary-500">
								Privacy Policy
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;