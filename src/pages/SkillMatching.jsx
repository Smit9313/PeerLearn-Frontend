import { useState } from 'react';
import {
	Search,
	Filter,
	ChevronDown,
	Star,
	Clock,
	MapPin,
	MessageSquare,
	Calendar,
	Sliders,
	X,
	Check,
	ArrowUpDown
} from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/common/Button';

const SkillMatching = () => {
	const [selectedFilters, setSelectedFilters] = useState({
		skillCategories: [],
		availability: [],
		experienceLevel: [],
		languages: [],
		location: 'any',
	});
	const [sortBy, setSortBy] = useState('match');
	const [showFilters, setShowFilters] = useState(true);
	const [sentRequests, setSentRequests] = useState(new Set());
	const [selectedUser, setSelectedUser] = useState(null);

	// Sample data
	const skillCategories = [
		{ id: 'programming', name: 'Programming & Tech', count: 245 },
		{ id: 'languages', name: 'Languages', count: 189 },
		{ id: 'academics', name: 'Academic Subjects', count: 156 },
		{ id: 'design', name: 'Design & Creative', count: 92 },
		{ id: 'business', name: 'Business Skills', count: 78 },
	];

	const experienceLevels = [
		{ id: 'beginner', name: 'Beginner' },
		{ id: 'intermediate', name: 'Intermediate' },
		{ id: 'advanced', name: 'Advanced' },
		{ id: 'expert', name: 'Expert' },
	];

	const availabilitySlots = [
		{ id: 'morning', name: 'Morning (8 AM - 12 PM)' },
		{ id: 'afternoon', name: 'Afternoon (12 PM - 4 PM)' },
		{ id: 'evening', name: 'Evening (4 PM - 8 PM)' },
		{ id: 'night', name: 'Night (8 PM - 12 AM)' },
	];

	const languages = [
		{ id: 'en', name: 'English' },
		{ id: 'es', name: 'Spanish' },
		{ id: 'fr', name: 'French' },
		{ id: 'de', name: 'German' },
		{ id: 'zh', name: 'Mandarin' },
	];

	// Sample search results
	const searchResults = [
		{
			id: 1,
			name: 'Sarah Wilson',
			avatar: '/avatar1.jpg',
			university: 'Stanford University',
			matchPercentage: 95,
			skills: [
				{ name: 'Python Programming', level: 'Advanced', rating: 4.9 },
				{ name: 'Data Science', level: 'Intermediate', rating: 4.7 },
			],
			availability: ['Morning', 'Evening'],
			languages: ['English', 'Spanish'],
			location: 'California, USA',
			rating: 4.9,
			totalReviews: 48,
			teachingHours: 156,
		},
		{
			id: 2,
			name: 'Mark Taylor',
			avatar: '/avatar2.jpg',
			university: 'MIT',
			matchPercentage: 90,
			skills: [
				{ name: 'Web Development', level: 'Advanced', rating: 4.8 },
				{ name: 'ReactJS', level: 'Advanced', rating: 4.9 },
				{ name: 'Node.js', level: 'Intermediate', rating: 4.5 },
			],
			availability: ['Afternoon', 'Evening'],
			languages: ['English'],
			location: 'Massachusetts, USA',
			rating: 4.8,
			totalReviews: 35,
			teachingHours: 112,
		},
		{
			id: 3,
			name: 'Emily Johnson',
			avatar: '/avatar3.jpg',
			university: 'Harvard University',
			matchPercentage: 93,
			skills: [
				{ name: 'Artificial Intelligence', level: 'Advanced', rating: 4.7 },
				{ name: 'Machine Learning', level: 'Advanced', rating: 4.8 },
			],
			availability: ['Morning', 'Night'],
			languages: ['English', 'French'],
			location: 'Boston, USA',
			rating: 4.8,
			totalReviews: 42,
			teachingHours: 145,
		},
		{
			id: 4,
			name: 'Michael Brown',
			avatar: '/avatar4.jpg',
			university: 'UC Berkeley',
			matchPercentage: 88,
			skills: [
				{ name: 'Cybersecurity', level: 'Intermediate', rating: 4.6 },
				{ name: 'Networking', level: 'Advanced', rating: 4.5 },
			],
			availability: ['Morning', 'Afternoon'],
			languages: ['English', 'German'],
			location: 'California, USA',
			rating: 4.6,
			totalReviews: 27,
			teachingHours: 98,
		},
		{
			id: 5,
			name: 'Sophia Martinez',
			avatar: '/avatar5.jpg',
			university: 'University of Toronto',
			matchPercentage: 92,
			skills: [
				{ name: 'Mobile App Development', level: 'Advanced', rating: 4.8 },
				{ name: 'React Native', level: 'Advanced', rating: 4.9 },
			],
			availability: ['Evening'],
			languages: ['English', 'Spanish'],
			location: 'Toronto, Canada',
			rating: 4.8,
			totalReviews: 38,
			teachingHours: 123,
		},
		{
			id: 6,
			name: 'Olivia White',
			avatar: '/avatar6.jpg',
			university: 'University of Oxford',
			matchPercentage: 94,
			skills: [
				{ name: 'Artificial Intelligence', level: 'Expert', rating: 4.9 },
				{ name: 'Data Visualization', level: 'Advanced', rating: 4.7 },
			],
			availability: ['Morning', 'Evening'],
			languages: ['English'],
			location: 'London, UK',
			rating: 4.9,
			totalReviews: 50,
			teachingHours: 180,
		},
		{
			id: 7,
			name: 'James Lopez',
			avatar: '/avatar7.jpg',
			university: 'Carnegie Mellon University',
			matchPercentage: 89,
			skills: [
				{ name: 'Database Management', level: 'Intermediate', rating: 4.5 },
				{ name: 'SQL', level: 'Advanced', rating: 4.6 },
			],
			availability: ['Afternoon'],
			languages: ['English'],
			location: 'Pittsburgh, USA',
			rating: 4.5,
			totalReviews: 30,
			teachingHours: 102,
		},
		{
			id: 8,
			name: 'Daniel Rodriguez',
			avatar: '/avatar8.jpg',
			university: 'Georgia Tech',
			matchPercentage: 91,
			skills: [
				{ name: 'DevOps', level: 'Advanced', rating: 4.8 },
				{ name: 'Cloud Computing', level: 'Expert', rating: 4.9 },
			],
			availability: ['Morning', 'Night'],
			languages: ['English', 'Portuguese'],
			location: 'Atlanta, USA',
			rating: 4.8,
			totalReviews: 40,
			teachingHours: 135,
		},
	];


	const sortOptions = [
		{ value: 'match', label: 'Best Match' },
		{ value: 'rating', label: 'Highest Rated' },
		{ value: 'availability', label: 'Most Available' },
		{ value: 'experience', label: 'Most Experienced' },
	];

	const toggleFilter = (category, value) => {
		setSelectedFilters(prev => ({
			...prev,
			[category]: prev[category].includes(value)
				? prev[category].filter(item => item !== value)
				: [...prev[category], value]
		}));
	};

	const clearFilters = () => {
		setSelectedFilters({
			skillCategories: [],
			availability: [],
			experienceLevel: [],
			languages: [],
			location: 'any',
		});
	};

	const handleRequestSession = (teacherId) => {
		setSentRequests(prev => new Set([...prev, teacherId]));
		setSelectedUser(null); // Close popup after request
		// Here you would typically make an API call to send the request
	};

	const openRequestPopup = (user) => {
		setSelectedUser(user);
	};

	return (
		<PageWrapper
			title="Find Study Partners"
			subtitle="Connect with students who match your learning goals"
			actions={
				<div className="flex items-center space-x-4">
					<Button
						variant="outline"
						onClick={() => setShowFilters(!showFilters)}
						className="lg:hidden"
					>
						<Filter className="w-4 h-4 mr-2" />
						Filters
					</Button>
					<Button variant="primary">
						Share Your Skills
					</Button>
				</div>
			}
			className="p-4"
		>
			<div className="flex space-x-6">
				{/* Filters Sidebar */}
				<div className={`
          w-80 flex-shrink-0 bg-white rounded-xl border border-gray-100 h-fit
          ${showFilters ? 'block' : 'hidden lg:block'}
        `}>
					<div className="p-6 border-b border-gray-100">
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-semibold text-gray-900">Filters</h2>
							<button
								onClick={clearFilters}
								className="text-sm text-blue-600 hover:text-blue-700"
							>
								Clear all
							</button>
						</div>
					</div>

					{/* Search Input */}
					<div className="p-6 border-b border-gray-100">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
							<input
								type="text"
								placeholder="Search skills..."
								className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>

					{/* Skill Categories */}
					<div className="p-6 border-b border-gray-100">
						<h3 className="text-sm font-medium text-gray-900 mb-4">Skill Categories</h3>
						<div className="space-y-3">
							{skillCategories.map(category => (
								<label key={category.id} className="flex items-center">
									<input
										type="checkbox"
										checked={selectedFilters.skillCategories.includes(category.id)}
										onChange={() => toggleFilter('skillCategories', category.id)}
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">{category.name}</span>
									<span className="ml-auto text-xs text-gray-400">{category.count}</span>
								</label>
							))}
						</div>
					</div>

					{/* Experience Level */}
					<div className="p-6 border-b border-gray-100">
						<h3 className="text-sm font-medium text-gray-900 mb-4">Experience Level</h3>
						<div className="space-y-3">
							{experienceLevels.map(level => (
								<label key={level.id} className="flex items-center">
									<input
										type="checkbox"
										checked={selectedFilters.experienceLevel.includes(level.id)}
										onChange={() => toggleFilter('experienceLevel', level.id)}
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">{level.name}</span>
								</label>
							))}
						</div>
					</div>

					{/* Availability */}
					<div className="p-6 border-b border-gray-100">
						<h3 className="text-sm font-medium text-gray-900 mb-4">Availability</h3>
						<div className="space-y-3">
							{availabilitySlots.map(slot => (
								<label key={slot.id} className="flex items-center">
									<input
										type="checkbox"
										checked={selectedFilters.availability.includes(slot.id)}
										onChange={() => toggleFilter('availability', slot.id)}
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">{slot.name}</span>
								</label>
							))}
						</div>
					</div>

					{/* Languages */}
					<div className="p-6 border-b border-gray-100">
						<h3 className="text-sm font-medium text-gray-900 mb-4">Languages</h3>
						<div className="space-y-3">
							{languages.map(language => (
								<label key={language.id} className="flex items-center">
									<input
										type="checkbox"
										checked={selectedFilters.languages.includes(language.id)}
										onChange={() => toggleFilter('languages', language.id)}
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">{language.name}</span>
								</label>
							))}
						</div>
					</div>

					{/* Location */}
					<div className="p-6">
						<h3 className="text-sm font-medium text-gray-900 mb-4">Location</h3>
						<select
							value={selectedFilters.location}
							onChange={(e) => setSelectedFilters(prev => ({ ...prev, location: e.target.value }))}
							className="w-full border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="any">Any Location</option>
							<option value="nearby">Nearby (within 10 miles)</option>
							<option value="online">Online Only</option>
						</select>
					</div>
				</div>

				{/* Results Section */}
				<div className="flex-1">
					{/* Results Header */}
					<div className="bg-white rounded-xl border border-gray-100 p-4 mb-6">
						<div className="flex items-center justify-between">
							<p className="text-sm text-gray-600">
								Showing <span className="font-medium">67</span> results
							</p>
							<div className="flex items-center space-x-4">
								<select
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
									className="border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
								>
									{sortOptions.map(option => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>

					{/* Results Grid */}
					<div className="space-y-4">
						{searchResults.map(result => (
							<div
								key={result.id}
								className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-100 transition-colors"
							>
								<div className="flex items-start">
									{/* User Info */}
									<div className="flex-1">
										<div className="flex items-start justify-between">
											<div className="flex items-center">
												<div className="w-12 h-12 bg-gray-200 rounded-full" />
												<div className="ml-4">
													<h3 className="text-lg font-medium text-gray-900">
														{result.name}
													</h3>
													<p className="text-sm text-gray-600">{result.university}</p>
												</div>
											</div>
											<div className="text-right">
												<div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
													{result.matchPercentage}% Match
												</div>
											</div>
										</div>

										{/* Skills */}
										<div className="mt-4">
											<h4 className="text-sm font-medium text-gray-900 mb-2">Teaching Skills</h4>
											<div className="flex flex-wrap gap-2">
												{result.skills.map(skill => (
													<span
														key={skill.name}
														className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
													>
														{skill.name}
														<span className="mx-1">•</span>
														<span className="flex items-center">
															{skill.rating}
															<Star className="w-3 h-3 text-yellow-400 ml-0.5" />
														</span>
													</span>
												))}
											</div>
										</div>

										{/* Additional Info */}
										<div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
											<div className="flex items-center">
												<Clock className="w-4 h-4 mr-1" />
												{result.availability.join(', ')}
											</div>
											<div className="flex items-center">
												<MapPin className="w-4 h-4 mr-1" />
												{result.location}
											</div>
											<div className="flex items-center">
												<Star className="w-4 h-4 mr-1" />
												{result.rating} ({result.totalReviews} reviews)
											</div>
										</div>
									</div>
								</div>

								{/* Actions */}
								<div className="mt-6 flex items-center justify-end">
									{sentRequests.has(result.id) ? (
										<div className="flex items-center text-sm text-gray-600">
											<Clock className="w-4 h-4 mr-2" />
											Request Pending
										</div>
									) : (
										<Button 
											variant="primary"
											onClick={() => openRequestPopup(result)}
										>
											<Calendar className="w-4 h-4 mr-2" />
											Request Session
										</Button>
									)}
								</div>
							</div>
						))}
					</div>

					{/* Pagination */}
					<div className="mt-6 flex items-center justify-between bg-white rounded-xl border border-gray-100 p-4">
						<Button variant="outline" disabled>
							Previous
						</Button>
						<div className="flex items-center space-x-2">
							{[1, 2, 3, '...', 8].map((page, index) => (
								<button
									key={index}
									className={`px-4 py-2 text-sm rounded-lg ${page === 1
											? 'bg-blue-50 text-blue-600 font-medium'
											: 'text-gray-600 hover:bg-gray-50'
										}`}
								>
									{page}
								</button>
							))}
						</div>
						<Button variant="outline">
							Next
						</Button>
					</div>
				</div>
			</div>

			{/* No Results State */}
			{searchResults.length === 0 && (
				<div className="flex flex-col items-center justify-center py-12">
					<div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
						<Search className="w-8 h-8 text-blue-500" />
					</div>
					<h3 className="text-lg font-medium text-gray-900 mb-2">
						No matching study partners found
					</h3>
					<p className="text-sm text-gray-600 text-center max-w-md mb-6">
						Try adjusting your filters or search criteria to find more study partners that match your needs.
					</p>
					<Button variant="outline" onClick={clearFilters}>
						Clear All Filters
					</Button>
				</div>
			)}

			{/* Mobile Filter Drawer */}
			{showFilters && (
				<div className="lg:hidden fixed inset-0 z-50">
					<div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
						<div className="relative w-screen max-w-md">
							<div className="h-full flex flex-col bg-white shadow-xl">
								<div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
									<h2 className="text-lg font-medium text-gray-900">Filters</h2>
									<button
										onClick={() => setShowFilters(false)}
										className="rounded-md text-gray-400 hover:text-gray-500"
									>
										<X className="w-6 h-6" />
									</button>
								</div>
								<div className="flex-1 overflow-y-auto">
									{/* Filter content - Same as sidebar */}
								</div>
								<div className="border-t border-gray-200 px-4 py-6">
									<div className="flex space-x-3">
										<Button
											variant="outline"
											className="flex-1"
											onClick={clearFilters}
										>
											Clear All
										</Button>
										<Button
											variant="primary"
											className="flex-1"
											onClick={() => setShowFilters(false)}
										>
											Show Results
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Add Session Request Popup */}
			{selectedUser && (
				<div className="fixed inset-0 z-50 overflow-y-auto">
					<div className="flex items-center justify-center min-h-screen px-4">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedUser(null)} />
						<div className="relative bg-white rounded-xl max-w-lg w-full p-6 z-10">
							<button 
								onClick={() => setSelectedUser(null)}
								className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
							>
								<X className="w-6 h-6" />
							</button>

							<div className="flex items-center mb-6">
								<div className="w-16 h-16 bg-gray-200 rounded-full" />
								<div className="ml-4">
									<h3 className="text-xl font-medium text-gray-900">{selectedUser.name}</h3>
									<p className="text-sm text-gray-600">{selectedUser.university}</p>
								</div>
							</div>

							<div className="space-y-4 mb-6">
								<div>
									<h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
									<div className="flex flex-wrap gap-2">
										{selectedUser.skills.map(skill => (
											<span key={skill.name} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
												{skill.name} • {skill.level} • {skill.rating} <Star className="w-3 h-3 text-yellow-400 ml-1" />
											</span>
										))}
									</div>
								</div>

								<div>
									<h4 className="text-sm font-medium text-gray-900 mb-2">Availability</h4>
									<p className="text-sm text-gray-600">{selectedUser.availability.join(', ')}</p>
								</div>

								<div>
									<h4 className="text-sm font-medium text-gray-900 mb-2">Teaching Experience</h4>
									<p className="text-sm text-gray-600">{selectedUser.teachingHours} hours taught • {selectedUser.totalReviews} reviews</p>
								</div>
							</div>

							<div className="flex justify-end space-x-3">
								<Button 
									variant="outline" 
									onClick={() => setSelectedUser(null)}
								>
									Cancel
								</Button>
								<Button 
									variant="primary"
									onClick={() => handleRequestSession(selectedUser.id)}
								>
									<Calendar className="w-4 h-4 mr-2" />
									Request Session
								</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</PageWrapper>
	);
};

export default SkillMatching;