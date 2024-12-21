import { useState, useEffect } from 'react';
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
import { useUser } from '../hooks/useUser';

const SkillMatching = () => {
	const { getUsers, users } = useUser();
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
	const [sessionRequest, setSessionRequest] = useState({
		date: '',
		time: '',
		duration: '60',
		notes: ''
	});

	useEffect(() => {
		getUsers();
	}, []);

	console.log("users", users);

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

	// Transform API user data to match the display format
	const transformUserData = (user) => ({
		id: user.id,
		name: `${user.profile.firstName} ${user.profile.lastName}`,
		avatar: user.profile.avatar,
		university: user.academic.university,
		matchPercentage: 95, // You might want to calculate this based on some criteria
		skills: user.skillsToTeach.map(skill => ({
			name: skill.skillId.name,
			level: skill.proficiencyLevel,
			rating: user.stats.averageRating || 0
		})),
		availability: user.availability.map(slot => 
			slot.slots.map(time => {
				const hour = parseInt(time.startTime.split(':')[0]);
				if (hour >= 8 && hour < 12) return 'Morning';
				if (hour >= 12 && hour < 16) return 'Afternoon';
				if (hour >= 16 && hour < 20) return 'Evening';
				return 'Night';
			})
		).flat(),
		languages: user.profile.languages,
		location: "Not specified", // Add location to user profile if needed
		rating: user.stats.averageRating || 0,
		totalReviews: user.stats.totalReviews,
		teachingHours: user.stats.totalTeachingHours
	});

	// Replace the searchResults with transformed user data
	const displayResults = users?.map(transformUserData) || [];

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
		console.log('Session Request:', { teacherId, ...sessionRequest });
		setSelectedUser(null);
		setSessionRequest({ date: '', time: '', duration: '60', notes: '' });
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
								Showing <span className="font-medium">{displayResults.length}</span> results
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
						{displayResults.map(result => (
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
			{displayResults.length === 0 && (
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
						<div className="relative bg-white rounded-xl max-w-4xl w-full z-10 overflow-hidden">
							{/* Close Button */}
							<button 
								onClick={() => setSelectedUser(null)}
								className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10"
							>
								<X className="w-5 h-5" />
							</button>

							<div className="flex flex-col h-full">
								<div className="flex flex-1">
									{/* Left Column - Profile Details */}
									<div className="w-1/2 p-6 border-r border-gray-100">
										{/* User Header */}
										<div className="flex items-center mb-6">
											<div className="w-16 h-16 bg-gray-200 rounded-full" />
											<div className="ml-4">
												<h3 className="text-xl font-semibold text-gray-900">{selectedUser.name}</h3>
												<p className="text-sm text-gray-600">{selectedUser.university}</p>
											</div>
										</div>

										{/* Skills Section */}
										<div className="mb-6">
											<h4 className="text-sm font-medium text-gray-900 mb-3">Teaching Skills</h4>
											<div className="space-y-2">
												{selectedUser.skills.map(skill => (
													<div 
														key={skill.name} 
														className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
													>
														<span className="text-sm text-gray-700">{skill.name}</span>
														<div className="flex items-center space-x-2">
															<span className="text-sm text-gray-500">{skill.level}</span>
															<div className="flex items-center text-sm">
																<span className="font-medium text-gray-700">{skill.rating}</span>
																<Star className="w-4 h-4 text-yellow-400 ml-1" />
															</div>
														</div>
													</div>
												))}
											</div>
										</div>

										{/* Availability Section */}
										<div className="mb-6">
											<h4 className="text-sm font-medium text-gray-900 mb-3">Available Times</h4>
											<div className="grid grid-cols-1 gap-2">
												{selectedUser.availability.map((time, index) => (
													<div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
														<Clock className="w-4 h-4 text-gray-400 mr-3" />
														<span className="text-sm text-gray-700">
															{time === 'Morning' && '8 AM - 12 PM'}
															{time === 'Afternoon' && '12 PM - 4 PM'}
															{time === 'Evening' && '4 PM - 8 PM'}
															{time === 'Night' && '8 PM - 12 AM'}
														</span>
													</div>
												))}
											</div>
										</div>

										{/* Teaching Experience */}
										<div>
											<h4 className="text-sm font-medium text-gray-900 mb-3">Teaching Experience</h4>
											<div className="grid grid-cols-2 gap-4">
												<div className="p-3 bg-gray-50 rounded-lg">
													<div className="text-2xl font-semibold text-gray-900">{selectedUser.teachingHours}</div>
													<div className="text-sm text-gray-600">Hours taught</div>
												</div>
												<div className="p-3 bg-gray-50 rounded-lg">
													<div className="text-2xl font-semibold text-gray-900">{selectedUser.totalReviews}</div>
													<div className="text-sm text-gray-600">Reviews</div>
												</div>
											</div>
										</div>
									</div>

									{/* Right Column - Session Proposal */}
									<div className="w-1/2 p-6 bg-gray-50">
										<h3 className="text-lg font-semibold text-gray-900 mb-6">Request Study Session</h3>
										
										<div className="space-y-5">
											{/* Date and Time */}
											<div className="grid grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														Date
													</label>
													<input
														type="date"
														value={sessionRequest.date}
														onChange={(e) => setSessionRequest(prev => ({...prev, date: e.target.value}))}
														className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
														min={new Date().toISOString().split('T')[0]}
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-1">
														Time
													</label>
													<input
														type="time"
														value={sessionRequest.time}
														onChange={(e) => setSessionRequest(prev => ({...prev, time: e.target.value}))}
														className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
													/>
												</div>
											</div>

											{/* Session Duration */}
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Session Duration
												</label>
												<select
													value={sessionRequest.duration}
													onChange={(e) => setSessionRequest(prev => ({...prev, duration: e.target.value}))}
													className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												>
													<option value="30">30 minutes</option>
													<option value="60">1 hour</option>
													<option value="90">1.5 hours</option>
													<option value="120">2 hours</option>
												</select>
											</div>

											{/* Additional Notes */}
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Additional Notes (Optional)
												</label>
												<textarea
													value={sessionRequest.notes}
													onChange={(e) => setSessionRequest(prev => ({...prev, notes: e.target.value}))}
													rows={4}
													className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
														placeholder="Add any specific topics or questions you'd like to cover..."
												/>
											</div>
										</div>
									</div>
								</div>

								{/* Action Buttons - Now at the bottom */}
								<div className="border-t border-gray-100 px-6 py-4 bg-white">
									<div className="flex justify-end space-x-3">
										<button
											onClick={() => {
												setSelectedUser(null);
												setSessionRequest({ date: '', time: '', duration: '60', notes: '' });
											}}
											className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800"
										>
											Cancel
										</button>
										<button
											onClick={() => handleRequestSession(selectedUser.id)}
											disabled={!sessionRequest.date || !sessionRequest.time}
											className={`
												px-6 py-2 rounded-lg text-sm font-medium text-white
												flex items-center
												${!sessionRequest.date || !sessionRequest.time 
													? 'bg-blue-400 cursor-not-allowed' 
													: 'bg-blue-600 hover:bg-blue-700'}
											`}
										>
											<Calendar className="w-4 h-4 mr-2" />
											Request Session
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</PageWrapper>
	);
};

export default SkillMatching;