import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageWrapper = ({
	children,
	title,
	subtitle,
	breadcrumbs = [],
	actions,
	className = '',
}) => {
	return (
		<div className={`space-y-6 ${className}`}>
			{/* Page Header */}
			<div className="space-y-4">
				{/* Breadcrumbs */}
				{breadcrumbs.length > 0 && (
					<nav className="flex" aria-label="Breadcrumb">
						<ol className="flex items-center space-x-2 text-sm text-gray-500">
							{breadcrumbs.map((crumb, index) => (
								<li key={crumb.path || index} className="flex items-center">
									{index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
									{index === breadcrumbs.length - 1 ? (
										<span className="text-gray-900">{crumb.name}</span>
									) : (
										<Link
											to={crumb.path}
											className="hover:text-primary-600 transition-colors"
										>
											{crumb.name}
										</Link>
									)}
								</li>
							))}
						</ol>
					</nav>
				)}

				{/* Title and Actions */}
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
						{subtitle && (
							<p className="mt-1 text-sm text-gray-500">{subtitle}</p>
						)}
					</div>
					{actions && <div className="flex items-center space-x-3">{actions}</div>}
				</div>
			</div>

			{/* Page Content */}
			<div>{children}</div>
		</div>
	);
};

export default PageWrapper;