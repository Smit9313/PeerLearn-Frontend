import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Button from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
	const { userLogin } = useAuth();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});

	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		setFormData({ ...formData, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle login logic
		userLogin(formData);
		console.log('Form submitted:', formData);
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<Link to="/" className="flex items-center justify-center space-x-2">
					<div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
						<span className="text-white font-bold text-xl">P</span>
					</div>
					<span className="text-2xl font-semibold text-gray-900">PeerLearn</span>
				</Link>
				<h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Welcome back</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					New to PeerLearn?{' '}
					<Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
						Create an account
					</Link>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow-soft rounded-lg sm:px-10">
					{error && (
						<div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200">
							<p className="text-sm text-red-600">{error}</p>
						</div>
					)}

					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Email address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
									autoComplete="current-password"
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
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="rememberMe"
									name="rememberMe"
									type="checkbox"
									checked={formData.rememberMe}
									onChange={handleChange}
									className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
								/>
								<label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<Link to="/forgot-password" className="font-medium text-primary-600 hover:text-primary-500">
									Forgot your password?
								</Link>
							</div>
						</div>

						<div>
							<Button type="submit" variant="primary" className="w-full">
								Sign in
							</Button>
						</div>
					</form>

					<div className="mt-6">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">Or continue with</span>
							</div>
						</div>

						<div className="mt-6 grid grid-cols-2 gap-3">
							<button
								type="button"
								className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
							>
								<span className="sr-only">Sign in with Google</span>
								<svg className="w-5 h-5" viewBox="0 0 24 24">
									<path
										d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
										fill="#4285F4"
									/>
								</svg>
							</button>

							<button
								type="button"
								className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
							>
								<span className="sr-only">Sign in with Microsoft</span>
								<svg className="w-5 h-5" viewBox="0 0 24 24">
									<path
										d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"
										fill="#00A4EF"
									/>
								</svg>
							</button>
						</div>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">Protected by reCAPTCHA</span>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<p className="text-xs text-center text-gray-500">
								By signing in, you agree to our{' '}
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

				{/* Help Section */}
				<div className="mt-6">
					<div className="bg-white py-6 px-4 shadow-soft rounded-lg sm:px-10">
						<div className="text-center">
							<h3 className="text-sm font-medium text-gray-900">Need help?</h3>
							<div className="mt-2 flex justify-center space-x-4">
								<a href="#" className="text-sm text-primary-600 hover:text-primary-500">
									Contact Support
								</a>
								<span className="text-gray-300">|</span>
								<a href="#" className="text-sm text-primary-600 hover:text-primary-500">
									FAQ
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;