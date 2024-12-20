import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	User,
	Mail,
	Book,
	MapPin,
	Calendar,
	Star,
	Clock,
	Award,
	Edit,
	ChevronRight,
	MessageSquare,
	ExternalLink,
	Heart, ThumbsUp, Filter, ChevronDown
} from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/common/Button';

const Profile = () => {
	const { userId } = useParams();
	const [selectedFilter, setSelectedFilter] = useState('all');
	const [sortBy, setSortBy] = useState('recent');

	const [activeTab, setActiveTab] = useState('overview');
	const isOwnProfile = !userId;

	// Sample data - Replace with real data
	const userProfile = {
		name: 'John Doe',
		university: 'Stanford University',
		course: 'Computer Science',
		year: '3rd Year',
		location: 'California, USA',
		joinedDate: 'September 2023',
		favorCredits: 156,
		teachingHours: 48,
		rating: 4.8,
		totalReviews: 32,
		bio: 'Computer Science student passionate about teaching programming and learning new languages. Always excited to collaborate and help fellow students!',
		languages: ['English (Native)', 'Spanish (Intermediate)', 'Mandarin (Beginner)'],
		availability: [
			{ day: 'Monday', slots: ['2:00 PM - 4:00 PM', '7:00 PM - 9:00 PM'] },
			{ day: 'Wednesday', slots: ['3:00 PM - 6:00 PM'] },
			{ day: 'Saturday', slots: ['10:00 AM - 2:00 PM'] },
		]
	};

	const teachingSkills = [
		{
			name: 'Python Programming',
			level: 'Advanced',
			endorsements: 24,
			rating: 4.9,
			students: 15,
			totalHours: 36,
		},
		{
			name: 'Web Development',
			level: 'Intermediate',
			endorsements: 18,
			rating: 4.7,
			students: 10,
			totalHours: 28,
		}
	];

	const learningSkills = [
		{
			name: 'Spanish Language',
			level: 'Intermediate',
			progress: 65,
			hoursLearned: 24,
			nextSession: 'Tomorrow, 3:00 PM',
		},
		{
			name: 'Data Science',
			level: 'Beginner',
			progress: 30,
			hoursLearned: 12,
			nextSession: 'Friday, 5:00 PM',
		}
	];

	const achievements = [
		{
			title: 'Top Rated Python Tutor',
			description: 'Maintained 4.9+ rating for 3 months',
			date: 'December 2023',
			icon: Star,
		},
		{
			title: '50 Teaching Hours',
			description: 'Completed 50 hours of teaching',
			date: 'November 2023',
			icon: Clock,
		},
		{
			title: 'Language Explorer',
			description: 'Started learning a third language',
			date: 'October 2023',
			icon: Award,
		}
	];

	const reviewData = {
		averageRating: 4.8,
		totalReviews: 32,
		reviews: [
			{
				id: 1,
				author: 'Sarah Wilson',
				rating: 5,
				date: '2 weeks ago',
				skill: 'Python Programming',
				content: 'John is an excellent tutor! He explains complex concepts in a very understandable way. Really helped me grasp Python fundamentals.',
				helpful: 12,
			},
			{
				id: 2,
				author: 'Mark Taylor',
				rating: 4,
				date: '1 month ago',
				skill: 'Data Science',
				content: 'John is knowledgeable and patient. I enjoyed learning about data visualization, though I felt the pace was a bit fast at times.',
				helpful: 8,
			},
			{
				id: 3,
				author: 'Emily Johnson',
				rating: 5,
				date: '3 weeks ago',
				skill: 'Web Development',
				content: 'Amazing experience! John made JavaScript so much easier to understand. I now feel confident building dynamic websites.',
				helpful: 15,
			},
			{
				id: 6,
				author: 'David Clark',
				rating: 4.7,
				date: '3 weeks ago',
				skill: 'Cybersecurity',
				content: 'John helped me understand complex cybersecurity principles with ease. The real-world scenarios he shared were very insightful.',
				helpful: 11,
			},
			{
				id: 7,
				author: 'Sophia Martinez',
				rating: 5,
				date: '1 week ago',
				skill: 'Mobile App Development',
				content: 'Fantastic experience! John broke down React Native concepts so well, and I built my first app with his guidance.',
				helpful: 14,
			},
			{
				id: 8,
				author: 'James Lopez',
				rating: 4.3,
				date: '2 months ago',
				skill: 'Database Management',
				content: 'John is a skilled tutor. I learned a lot about SQL and database optimization. A bit more focus on NoSQL would have been great.',
				helpful: 6,
			},
			{
				id: 9,
				author: 'Olivia White',
				rating: 4.8,
				date: '3 weeks ago',
				skill: 'Artificial Intelligence',
				content: 'John’s AI sessions were incredibly engaging and informative. He made neural networks easy to understand.',
				helpful: 13,
			},
			{
				id: 10,
				author: 'Daniel Rodriguez',
				rating: 5,
				date: '2 days ago',
				skill: 'DevOps',
				content: 'Outstanding tutor! John’s DevOps training was detailed and practical. The CI/CD pipeline setup demo was my favorite.',
				helpful: 17,
			},
		],
	};
	

	const ratingBreakdown = [5, 4, 3, 2, 1].map(rating => ({
		rating,
		count: reviewData.reviews.filter(review => review.rating === rating).length,
		percentage: (reviewData.reviews.filter(review => review.rating === rating).length / reviewData.reviews.length) * 100
	}));

	return (
		<PageWrapper
			title={isOwnProfile ? 'My Profile' : userProfile.name}
			actions={
				isOwnProfile ? (
					<Button variant="primary">
						<Edit className="w-4 h-4 mr-2" />
						Edit Profile
					</Button>
				) : (
					<div className="flex items-center space-x-3">
						<Button variant="outline">
							<MessageSquare className="w-4 h-4 mr-2" />
							Message
						</Button>
						<Button variant="primary">
							Schedule Session
						</Button>
					</div>
				)
			}
		>
			<div className="space-y-6">
				{/* Profile Overview */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Column - User Info */}
					<div className="lg:col-span-1 space-y-6">
						{/* Basic Info Card */}
						<div className="bg-white rounded-xl border border-gray-100 p-6">
							<div className="flex items-center">
								<div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
									<User className="w-8 h-8 text-gray-500" />
								</div>
								<div className="ml-4">
									<h2 className="text-xl font-semibold text-gray-900">{userProfile.name}</h2>
									<p className="text-sm text-gray-500 mt-1">{userProfile.course}</p>
								</div>
							</div>

							<div className="mt-6 space-y-4">
								<div className="flex items-center text-sm text-gray-600">
									<Book className="w-4 h-4 mr-2" />
									{userProfile.university}
								</div>
								<div className="flex items-center text-sm text-gray-600">
									<MapPin className="w-4 h-4 mr-2" />
									{userProfile.location}
								</div>
								<div className="flex items-center text-sm text-gray-600">
									<Calendar className="w-4 h-4 mr-2" />
									Joined {userProfile.joinedDate}
								</div>
							</div>

							<div className="mt-6 pt-6 border-t border-gray-100">
								<h3 className="text-sm font-medium text-gray-900">Bio</h3>
								<p className="mt-2 text-sm text-gray-600">{userProfile.bio}</p>
							</div>

							<div className="mt-6 pt-6 border-t border-gray-100">
								<h3 className="text-sm font-medium text-gray-900">Languages</h3>
								<div className="mt-2 space-y-2">
									{userProfile.languages.map((language) => (
										<span
											key={language}
											className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2"
										>
											{language}
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Availability Card */}
						<div className="bg-white rounded-xl border border-gray-100 p-6">
							<h3 className="text-sm font-medium text-gray-900 mb-4">Availability</h3>
							<div className="space-y-4">
								{userProfile.availability.map((schedule) => (
									<div key={schedule.day} className="text-sm">
										<div className="font-medium text-gray-900">{schedule.day}</div>
										<div className="mt-1 space-y-1">
											{schedule.slots.map((slot) => (
												<div key={slot} className="text-gray-600">{slot}</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Skills & Activity */}
					<div className="lg:col-span-2 space-y-6">
						{/* Stats Grid */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
							<div className="bg-white rounded-xl border border-gray-100 p-4">
								<div className="text-sm font-medium text-gray-500">Teaching Hours</div>
								<div className="mt-1 text-2xl font-semibold text-gray-900">{userProfile.teachingHours}</div>
							</div>
							<div className="bg-white rounded-xl border border-gray-100 p-4">
								<div className="text-sm font-medium text-gray-500">Rating</div>
								<div className="mt-1 flex items-center">
									<span className="text-2xl font-semibold text-gray-900">{userProfile.rating}</span>
									<Star className="w-4 h-4 text-yellow-400 ml-1" />
								</div>
							</div>
							<div className="bg-white rounded-xl border border-gray-100 p-4">
								<div className="text-sm font-medium text-gray-500">Reviews</div>
								<div className="mt-1 text-2xl font-semibold text-gray-900">{userProfile.totalReviews}</div>
							</div>
							<div className="bg-white rounded-xl border border-gray-100 p-4">
								<div className="text-sm font-medium text-gray-500">Favor Credits</div>
								<div className="mt-1 text-2xl font-semibold text-gray-900">{userProfile.favorCredits}</div>
							</div>
						</div>

						{/* Teaching Skills */}
						<div className="bg-white rounded-xl border border-gray-100">
							<div className="p-6 border-b border-gray-100">
								<h2 className="text-lg font-semibold text-gray-900">Teaching Skills</h2>
							</div>
							<div className="divide-y divide-gray-100">
								{teachingSkills.map((skill) => (
									<div key={skill.name} className="p-6">
										<div className="flex items-center justify-between">
											<div>
												<h3 className="text-sm font-medium text-gray-900">{skill.name}</h3>
												<div className="mt-1 flex items-center">
													<span className="text-sm text-gray-600">
														{skill.rating}
														<Star className="w-4 h-4 text-yellow-400 inline ml-1 mr-2" />
													</span>
													<span className="text-sm text-gray-600">
														{skill.students} students • {skill.totalHours} hours taught
													</span>
												</div>
											</div>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
												{skill.level}
											</span>
										</div>
										<div className="mt-4 flex items-center text-sm">
											<span className="text-gray-600">
												{skill.endorsements} endorsements
											</span>
											{!isOwnProfile && (
												<Button variant="outline" size="sm" className="ml-4">
													Endorse
												</Button>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Learning Skills */}
						<div className="bg-white rounded-xl border border-gray-100">
							<div className="p-6 border-b border-gray-100">
								<h2 className="text-lg font-semibold text-gray-900">Learning Skills</h2>
							</div>
							<div className="divide-y divide-gray-100">
								{learningSkills.map((skill) => (
									<div key={skill.name} className="p-6">
										<div className="flex items-center justify-between">
											<div>
												<h3 className="text-sm font-medium text-gray-900">{skill.name}</h3>
												<div className="mt-1 flex items-center">
													<span className="text-sm text-gray-600">
														{skill.hoursLearned} hours learned
													</span>
												</div>
											</div>
											<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
												{skill.level}
											</span>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between text-sm text-gray-600">
												<span>Progress</span>
												<span>{skill.progress}%</span>
											</div>
											<div className="mt-1 w-full bg-gray-100 rounded-full h-2">
												<div
													className="bg-blue-600 h-2 rounded-full"
													style={{ width: `${skill.progress}%` }}
												/>
											</div>
										</div>
										{skill.nextSession && (
											<div className="mt-4 text-sm text-gray-600">
												Next session: {skill.nextSession}
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Achievements */}
						<div className="bg-white rounded-xl border border-gray-100">
							<div className="p-6 border-b border-gray-100">
								<h2 className="text-lg font-semibold text-gray-900">Achievements</h2>
							</div>
							<div className="divide-y divide-gray-100">
								{achievements.map((achievement) => (
									<div key={achievement.title} className="p-6 flex items-start">
										<div className="flex-shrink-0">
											<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
												<achievement.icon className="w-5 h-5 text-blue-600" />
											</div>
										</div>
										<div className="ml-4">
											<h3 className="text-sm font-medium text-gray-900">
												{achievement.title}
											</h3>
											<p className="mt-1 text-sm text-gray-600">
												{achievement.description}
											</p>
											<p className="mt-1 text-xs text-gray-500">
												{achievement.date}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="p-6 border-b border-gray-100">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between">
								<div>
									<h2 className="text-lg font-semibold text-gray-900">Student Reviews</h2>
									<p className="mt-1 text-sm text-gray-600">
										{reviewData.totalReviews} reviews • {reviewData.averageRating} average rating
									</p>
								</div>
								<div className="mt-4 md:mt-0 flex items-center space-x-3">
									<Button
										variant="outline"
										className="flex items-center"
										onClick={() => { }}
									>
										<Filter className="w-4 h-4 mr-2" />
										Filter
										<ChevronDown className="w-4 h-4 ml-2" />
									</Button>
									<select
										value={sortBy}
										onChange={(e) => setSortBy(e.target.value)}
										className="block w-full pl-3 pr-10 py-2 text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
									>
										<option value="recent">Most Recent</option>
										<option value="helpful">Most Helpful</option>
										<option value="highest">Highest Rated</option>
										<option value="lowest">Lowest Rated</option>
									</select>
								</div>
							</div>

							{/* Rating Breakdown */}
							<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Overall Rating */}
								<div className="flex items-center">
									<div className="text-5xl font-bold text-gray-900">{reviewData.averageRating}</div>
									<div className="ml-4">
										<div className="flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-5 h-5 ${i < Math.floor(reviewData.averageRating) ? 'text-yellow-400' : 'text-gray-200'
														}`}
													fill="currentColor"
												/>
											))}
										</div>
										<p className="mt-1 text-sm text-gray-600">{reviewData.totalReviews} total reviews</p>
									</div>
								</div>

								{/* Rating Distribution */}
								<div className="space-y-2">
									{ratingBreakdown.map((item) => (
										<div key={item.rating} className="flex items-center">
											<div className="w-12 text-sm text-gray-600">
												{item.rating} stars
											</div>
											<div className="flex-1 mx-3">
												<div className="w-full bg-gray-100 rounded-full h-2">
													<div
														className="bg-yellow-400 h-2 rounded-full"
														style={{ width: `${item.percentage}%` }}
													/>
												</div>
											</div>
											<div className="w-12 text-sm text-gray-600 text-right">
												{item.count}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Review List */}
						<div className="divide-y divide-gray-100">
							{reviewData.reviews.map((review) => (
								<div key={review.id} className="p-6">
									<div className="flex items-start">
										<div className="flex-1">
											<div className="flex items-center justify-between">
												<div>
													<div className="flex items-center">
														<div className="font-medium text-gray-900">{review.author}</div>
														<span className="mx-2 text-gray-300">•</span>
														<div className="flex items-center">
															{[...Array(5)].map((_, i) => (
																<Star
																	key={i}
																	className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'
																		}`}
																	fill="currentColor"
																/>
															))}
														</div>
													</div>
													<span className="text-sm text-gray-500">{review.date}</span>
												</div>
												<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
													{review.skill}
												</span>
											</div>
											<p className="mt-3 text-sm text-gray-600">{review.content}</p>
											<div className="mt-3 flex items-center space-x-4">
												<button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
													<ThumbsUp className="w-4 h-4 mr-1" />
													Helpful ({review.helpful})
												</button>
												<button className="text-sm text-gray-500 hover:text-gray-700">
													Report
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						{ reviewData.reviews.length < reviewData.totalReviews && (
							<div className="p-6 text-center border-t border-gray-100">
								<Button variant="outline">
									Load More Reviews
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default Profile;