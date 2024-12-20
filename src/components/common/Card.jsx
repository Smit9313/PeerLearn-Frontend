const Card = ({ children, className = '' }) => {
	return (
		<div className={`bg-white rounded-xl shadow-soft p-6 ${className}`}>
			{children}
		</div>
	);
};

export default Card;
