const Input = ({ label, error, className = '', ...props }) => {
	return (
		<div className="space-y-1">
			{label && (
				<label className="block text-sm font-medium text-gray-700">
					{label}
				</label>
			)}
			<input
				className={`w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 ${error ? 'border-red-500' : ''
					} ${className}`}
				{...props}
			/>
			{error && (
				<p className="text-sm text-red-600">{error}</p>
			)}
		</div>
	);
};

export default Input;
