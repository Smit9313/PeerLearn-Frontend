import { useFormContext, Controller } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import Select from 'react-select';

const LANGUAGE_OPTIONS = [
	{ value: 'english', label: 'English' },
	{ value: 'hindi', label: 'Hindi' },
	{ value: 'gujarati', label: 'Gujarati' },
];

const BasicInfoStep = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { register, formState: { errors }, control } = useFormContext();

	return (
		<div className="space-y-6">
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
					Email address
				</label>
				<div className="mt-1">
					<input
						id="email"
						type="email"
						{...register('email')}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
					)}
				</div>
			</div>

			<div>
				<label htmlFor="password" className="block text-sm font-medium text-gray-700">
					Password
				</label>
				<div className="mt-1 relative">
					<input
						id="password"
						type={showPassword ? 'text' : 'password'}
						{...register('password')}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 right-0 pr-3 flex items-center"
					>
						{showPassword ? (
							<EyeOff className="h-5 w-5 text-gray-400" />
						) : (
							<Eye className="h-5 w-5 text-gray-400" />
						)}
					</button>
					{errors.password && (
						<p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
					)}
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div>
					<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
						First name
					</label>
					<div className="mt-1">
						<input
							id="firstName"
							type="text"
							{...register('profile.firstName')}
							className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
						{errors.profile?.firstName && (
							<p className="mt-1 text-sm text-red-600">{errors.profile.firstName.message}</p>
						)}
					</div>
				</div>

				<div>
					<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
						Last name
					</label>
					<div className="mt-1">
						<input
							id="lastName"
							type="text"
							{...register('profile.lastName')}
							className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
						{errors.profile?.lastName && (
							<p className="mt-1 text-sm text-red-600">{errors.profile.lastName.message}</p>
						)}
					</div>
				</div>
			</div>

			<div>
				<label htmlFor="languages" className="block text-sm font-medium text-gray-700">
					Languages
				</label>
				<div className="mt-1">
					<Controller
						name="profile.languages"
						control={control}
						render={({ field: { onChange, value, ref } }) => (
							<Select
								inputRef={ref}
								isMulti
								options={LANGUAGE_OPTIONS}
								value={LANGUAGE_OPTIONS.filter(option => value?.includes(option.value))}
								onChange={(selectedOptions) => {
									onChange(selectedOptions.map(option => option.value));
								}}
								classNames={{
									control: (state) =>
										`block w-full rounded-md border-gray-300 shadow-sm 
                    ${state.isFocused ? 'border-blue-500 ring-1 ring-blueP' : ''}`,
									menu: () => "bg-white shadow-lg rounded-md mt-1",
									option: (state) =>
										`px-3 py-2 ${state.isFocused ? 'bg-blue-50' : ''} 
                    ${state.isSelected ? 'bg-blue-100' : ''}`,
								}}
								placeholder="Select languages..."
							/>
						)}
					/>
					{errors.profile?.languages && (
						<p className="mt-1 text-sm text-red-600">{errors.profile.languages.message}</p>
					)}
				</div>
				<p className="mt-2 text-sm text-gray-500">
					Select all languages you can communicate in
				</p>
			</div>

			<div>
				<label htmlFor="bio" className="block text-sm font-medium text-gray-700">
					Bio
				</label>
				<div className="mt-1">
					<textarea
						id="bio"
						rows={3}
						{...register('profile.bio')}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						placeholder="Tell us about yourself..."
					/>
				</div>
			</div>
		</div>
	);
};

export default BasicInfoStep; 