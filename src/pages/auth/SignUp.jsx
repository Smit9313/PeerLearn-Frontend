import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../../components/common/Button';

const SignUp = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		profile: {
			firstName: '',
			lastName: '',
			bio: '',
			university: {
				name: '',
				course: '',
				year: '',
			},
			languages: [{ language: '', proficiency: 'beginner' }],
		},
		skillsToTeach: [],
		skillsToLearn: [],
		preferences: {
			learningMode: ['online'],
			maxDistance: 0,
			location: {
				coordinates: [], // Will be set when we get user's location
			},
		},
	});

	const [step, setStep] = useState(1);
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			const newData = { ...prev };
			const fields = name.split('.');
			let current = newData;
			
			for (let i = 0; i < fields.length - 1; i++) {
				current = current[fields[i]];
			}
			current[fields[fields.length - 1]] = value;
			
			return newData;
		});

		// Real-time validation
		setErrors(prev => {
			const newErrors = { ...prev };
			const fieldName = name.split('.').pop();

			// Validate the changed field
			switch (fieldName) {
				case 'firstName':
					if (value.trim()) delete newErrors.firstName;
					break;
				case 'lastName':
					if (value.trim()) delete newErrors.lastName;
					break;
				case 'email':
					if (value.trim() && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
						delete newErrors.email;
					}
					break;
				case 'password':
					if (value && passwordRequirements.every(req => req.met)) {
						delete newErrors.password;
					}
					break;
				case 'name': // university name
					if (value.trim()) delete newErrors.universityName;
					break;
				case 'course':
					if (value.trim()) delete newErrors.course;
					break;
				case 'year':
					if (value) delete newErrors.year;
					break;
				case 'bio':
					if (value.trim()) delete newErrors.bio;
					break;
			}

			return newErrors;
		});
	};

	const validateStep1 = () => {
		const newErrors = {};
		
		if (!formData.profile.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}
		
		if (!formData.profile.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
		}
		
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
			newErrors.email = 'Invalid email address';
		}
		
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (!passwordRequirements.every(req => req.met)) {
			newErrors.password = 'Password does not meet all requirements';
		}
		
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const validateStep2 = () => {
		const newErrors = {};
		
		if (!formData.profile.university.name.trim()) {
			newErrors.universityName = 'University name is required';
		}
		
		if (!formData.profile.university.course.trim()) {
			newErrors.course = 'Course/Major is required';
		}
		
		if (!formData.profile.university.year) {
			newErrors.year = 'Year of study is required';
		}
		
		if (!formData.profile.bio.trim()) {
			newErrors.bio = 'Bio is required';
		}
		
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const validateStep3 = () => {
		const newErrors = {};
		
		if (formData.profile.languages.some(lang => !lang.language.trim())) {
			newErrors.languages = 'All language fields must be filled';
		}
		
		if (formData.preferences.learningMode.length === 0) {
			newErrors.learningMode = 'Select at least one learning mode';
		}
		
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (step === 1 && validateStep1()) {
			setStep(2);
		} else if (step === 2 && validateStep2()) {
			setStep(3);
		} else if (step === 3 && validateStep3()) {
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
											name="profile.firstName"
											type="text"
											// required
											value={formData.profile.firstName}
											onChange={handleChange}
											className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${
												errors.firstName ? 'border-red-500' : ''
											}`}
										/>
										{errors.firstName && (
											<p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
										)}
									</div>
									<div>
										<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<input
											id="lastName"
											name="profile.lastName"
											type="text"
											// required
											value={formData.profile.lastName}
											onChange={handleChange}
											className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										/>
										{errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
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
										// required
										value={formData.email}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										placeholder="your.name@university.edu"
									/>
									{errors.email && <p className="text-red-500">{errors.email}</p>}
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
											// required
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
									{errors.password && <p className="text-red-500">{errors.password}</p>}
								</div>
							</>
						) : step === 2 ? (
							<>
								<div>
									<label htmlFor="universityName" className="block text-sm font-medium text-gray-700">
										University
									</label>
									<input
										id="universityName"
										name="profile.university.name"
										type="text"
										required
										value={formData.profile.university.name}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
									/>
									{errors.universityName && <p className="text-red-500">{errors.universityName}</p>}
								</div>

								<div>
									<label htmlFor="course" className="block text-sm font-medium text-gray-700">
										Course/Major
									</label>
									<input
										id="course"
										name="profile.university.course"
										type="text"
										required
										value={formData.profile.university.course}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
									/>
									{errors.course && <p className="text-red-500">{errors.course}</p>}
								</div>

								<div>
									<label htmlFor="year" className="block text-sm font-medium text-gray-700">
										ear of Study
									</label>
									<select
										id="year"
										name="profile.university.year"
										required
										value={formData.profile.university.year}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
									>
										<option value="">Select year</option>
										{[1, 2, 3, 4, 5, 6].map((year) => (
											<option key={year} value={year}>
												Year {year}
											</option>
										))}
									</select>
									{errors.year && <p className="text-red-500">{errors.year}</p>}
								</div>

								<div>
									<label htmlFor="bio" className="block text-sm font-medium text-gray-700">
										Bio
									</label>
									<textarea
										id="bio"
										name="profile.bio"
										rows={4}
										required
										maxLength={500}
										value={formData.profile.bio}
										onChange={handleChange}
										className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
										placeholder="Tell us about yourself..."
									/>
									<p className="mt-2 text-sm text-gray-500">
										{formData.profile.bio.length}/500 characters
									</p>
									{errors.bio && <p className="text-red-500">{errors.bio}</p>}
								</div>
							</>
						) : (
							<>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Languages
									</label>
									{formData.profile.languages.map((lang, index) => (
										<div key={index} className="flex space-x-4 mb-4">
											<input
												type="text"
												value={lang.language}
												onChange={(e) => {
													const newLanguages = [...formData.profile.languages];
													newLanguages[index].language = e.target.value;
													setFormData({
														...formData,
														profile: { ...formData.profile, languages: newLanguages },
													});
												}}
												className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
												placeholder="Language"
											/>
											<select
												value={lang.proficiency}
												onChange={(e) => {
													const newLanguages = [...formData.profile.languages];
													newLanguages[index].proficiency = e.target.value;
													setFormData({
														...formData,
														profile: { ...formData.profile, languages: newLanguages },
													});
												}}
												className="w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
											>
												<option value="beginner">Beginner</option>
												<option value="intermediate">Intermediate</option>
												<option value="advanced">Advanced</option>
												<option value="native">Native</option>
											</select>
										</div>
									))}
									<button
										type="button"
										onClick={() => {
											setFormData({
												...formData,
												profile: {
													...formData.profile,
													languages: [
														...formData.profile.languages,
														{ language: '', proficiency: 'beginner' },
													],
												},
											});
										}}
										className="mt-2 text-sm text-primary-600 hover:text-primary-500"
									>
										+ Add another language
									</button>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Learning Preferences
									</label>
									<div className="space-y-4">
										<div>
											<label className="text-sm text-gray-600">Learning Mode</label>
											<div className="mt-2 space-x-4">
												{['online', 'in-person'].map((mode) => (
													<label key={mode} className="inline-flex items-center">
														<input
															type="checkbox"
															checked={formData.preferences.learningMode.includes(mode)}
															onChange={(e) => {
																const newModes = e.target.checked
																	? [...formData.preferences.learningMode, mode]
																	: formData.preferences.learningMode.filter((m) => m !== mode);
																setFormData({
																	...formData,
																	preferences: {
																		...formData.preferences,
																		learningMode: newModes,
																	},
																});
															}}
															className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
														/>
														<span className="ml-2 text-sm text-gray-700">
															{mode.charAt(0).toUpperCase() + mode.slice(1)}
														</span>
													</label>
												))}
											</div>
										</div>
									</div>
								</div>
							</>
						)}

						<div>
							<Button type="submit" variant="primary" className="w-full">
								{step === 3 ? 'Create Account' : 'Continue'}
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