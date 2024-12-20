const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
	const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 ease-in-out';

	const variants = {
		primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300',
		secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-4 focus:ring-secondary-300',
		outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-4 focus:ring-primary-300',
		ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-4 focus:ring-primary-300',
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg',
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
