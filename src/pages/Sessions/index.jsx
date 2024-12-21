import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
	Calendar,
	Clock,
	Video,
	Users,
	Monitor,
	History,
	ChevronRight,
	Star,
	Download
} from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import Button from '../../components/common/Button';
import ActiveSession from './ActiveSession';
import ScheduleSession from './ScheduleSession';
import SessionRequests from './SessionRequests';

const SessionsPage = () => {
	const location = useLocation();
	const [activeTab, setActiveTab] = useState('upcoming');

	const tabs = [
		{ id: 'upcoming', label: 'Upcoming', count: 3 },
		{ id: 'active', label: 'Active Now', count: 1 },
		{ id: 'requests', label: 'Requests', count: 3 },
		{ id: 'completed', label: 'Completed', count: 24 },
	];

	return (
		<PageWrapper
			title="Sessions"
			className="p-4"
		>
			{/* Tabs Navigation */}
			<div className="mb-6">
				<div className="border-b border-gray-200">
					<nav className="flex space-x-8">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`
                  py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm
                  ${activeTab === tab.id
										? 'border-blue-500 text-blue-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
									}
                `}
							>
								{tab.label}
								{tab.count > 0 && (
									<span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${activeTab === tab.id
											? 'bg-blue-100 text-blue-600'
											: 'bg-gray-100 text-gray-600'
										}
                  `}>
										{tab.count}
									</span>
								)}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* Content */}
			{activeTab === 'requests' ? (
				<SessionRequests />
			) : (
				<Routes>
					<Route path="/" element={<SessionsList activeTab={activeTab} />} />
					<Route path="/schedule" element={<ScheduleSession />} />
					<Route path="/active/:id" element={<ActiveSession />} />
					<Route path="/history" element={<SessionHistory />} />
				</Routes>
			)}
		</PageWrapper>
	);
};

const SessionHistory = () => {
  return (
    <div>
      {/* Implement session history UI */}
    </div>
  );
};


// Sessions List Component
const SessionsList = ({ activeTab }) => {
	const sessions = {
		upcoming: [
			{
				id: 1,
				title: 'Python Programming Basics',
				student: 'Sarah Wilson',
				date: '2024-03-22',
				time: '14:00',
				duration: 60,
				type: 'teaching',
				mode: 'online',
				status: 'confirmed'
			},
			// Add more sessions
		],
		active: [
			{
				id: 2,
				title: 'Spanish Conversation Practice',
				student: 'Miguel Rodriguez',
				startTime: '13:00',
				elapsed: 25,
				mode: 'online',
				type: 'learning'
			}
		],
		completed: [
			{
				id: 3,
				title: 'Data Structures Tutorial',
				student: 'Alex Chen',
				date: '2024-03-20',
				duration: 90,
				rating: 4.8,
				type: 'teaching',
				mode: 'online',
				status: 'completed'
			}
		]
	};

	const renderSession = (session) => {
		const isActive = activeTab === 'active';
		const isUpcoming = activeTab === 'upcoming';

		return (
			<div key={session.id} className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-100 transition-colors">
				<div className="flex items-center justify-between">
					<div>
						<div className="flex items-center">
							<h3 className="text-lg font-medium text-gray-900">
								{session.title}
							</h3>
							<span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${session.type === 'teaching' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
              `}>
								{session.type === 'teaching' ? 'Teaching' : 'Learning'}
							</span>
						</div>
						<div className="mt-1 flex items-center text-sm text-gray-500">
							with {session.student}
						</div>
					</div>
					{session.status === 'completed' && (
						<div className="flex items-center">
							<Star className="w-4 h-4 text-yellow-400" />
							<span className="ml-1 text-sm font-medium text-gray-900">
								{session.rating}
							</span>
						</div>
					)}
				</div>

				<div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
					<div className="flex items-center">
						<Calendar className="w-4 h-4 mr-2" />
						{isActive ? (
							<span className="text-green-600 font-medium">In Progress</span>
						) : (
							<span>{new Date(session.date).toLocaleDateString()}</span>
						)}
					</div>
					<div className="flex items-center">
						<Clock className="w-4 h-4 mr-2" />
						{isActive ? (
							<span>{session.elapsed} mins elapsed</span>
						) : (
							<span>{session.time} • {session.duration} mins</span>
						)}
					</div>
					<div className="flex items-center">
						{session.mode === 'online' ? (
							<Video className="w-4 h-4 mr-2" />
						) : (
							<Users className="w-4 h-4 mr-2" />
						)}
						<span className="capitalize">{session.mode}</span>
					</div>
				</div>

				<div className="mt-6">
					{isActive && (
						<Link to={`/sessions/active/${session.id}`}>
							<Button variant="primary" className="w-full">
								Join Session
							</Button>
						</Link>
					)}
					{isUpcoming && (
						<div className="flex space-x-3">
							<Button variant="outline" className="flex-1">
								Reschedule
							</Button>
							<Button variant="primary" className="flex-1">
								View Details
							</Button>
						</div>
					)}
					{!isActive && !isUpcoming && (
						<div className="flex space-x-3">
							<Button variant="outline" className="flex-1">
								View Notes
							</Button>
							<Button variant="primary" className="flex-1">
								Leave Review
							</Button>
						</div>
					)}
				</div>
			</div>
		);
	};

	return (
		<div className="space-y-4 max-w-5xl">
			{sessions[activeTab].map(renderSession)}
		</div>
	);
};

export default SessionsPage;