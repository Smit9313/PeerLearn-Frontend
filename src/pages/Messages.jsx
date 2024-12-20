import { useState } from 'react';
import {
	Search,
	MoreVertical,
	Send,
	Paperclip,
	Image,
	Calendar,
	Clock,
	Star,
	ChevronDown,
	Filter,
	X,
	Check,
	Phone,
	Video,
	Info,
	MessageSquare
} from 'lucide-react';
import Button from '../components/common/Button';

const Messages = () => {
	const [selectedChat, setSelectedChat] = useState(null);
	const [showUserInfo, setShowUserInfo] = useState(true);
	const [messageText, setMessageText] = useState('');

	const conversations = [
		{
			id: 1,
			user: {
				name: 'Sarah Wilson',
				avatar: '/avatar1.jpg',
				status: 'online',
				lastSeen: 'Active now',
				university: 'Stanford University',
				course: 'Computer Science',
				rating: 4.9,
				teachingHours: 156,
			},
			lastMessage: {
				text: 'That sounds great! Should we schedule the Python session for tomorrow?',
				time: '2:34 PM',
				unread: true,
			},
			skill: 'Python Programming',
			upcoming: {
				date: 'Tomorrow',
				time: '3:00 PM',
			},
		},
		{
			id: 2,
			user: {
				name: 'Mark Taylor',
				avatar: '/avatar2.jpg',
				status: 'offline',
				lastSeen: 'Yesterday at 8:00 PM',
				university: 'MIT',
				course: 'Software Engineering',
				rating: 4.8,
				teachingHours: 112,
			},
			lastMessage: {
				text: 'I’ve shared the resources for ReactJS. Let me know if you need more help.',
				time: '4:12 PM',
				unread: false,
			},
			skill: 'ReactJS',
			upcoming: {
				date: 'Friday',
				time: '5:00 PM',
			},
		},
		{
			id: 3,
			user: {
				name: 'Emily Johnson',
				avatar: '/avatar3.jpg',
				status: 'online',
				lastSeen: 'Active now',
				university: 'Harvard University',
				course: 'Artificial Intelligence',
				rating: 4.8,
				teachingHours: 145,
			},
			lastMessage: {
				text: 'We can go over the basics of Machine Learning tomorrow.',
				time: '11:45 AM',
				unread: true,
			},
			skill: 'Machine Learning',
			upcoming: {
				date: 'Tomorrow',
				time: '10:00 AM',
			},
		},
		{
			id: 4,
			user: {
				name: 'Sophia Martinez',
				avatar: '/avatar4.jpg',
				status: 'online',
				lastSeen: 'Active now',
				university: 'University of Toronto',
				course: 'Mobile Development',
				rating: 4.9,
				teachingHours: 123,
			},
			lastMessage: {
				text: 'Could you clarify your question about React Native components?',
				time: '1:15 PM',
				unread: false,
			},
			skill: 'React Native',
			upcoming: {
				date: 'Saturday',
				time: '2:00 PM',
			},
		},
		{
			id: 5,
			user: {
				name: 'Michael Brown',
				avatar: '/avatar5.jpg',
				status: 'offline',
				lastSeen: 'Today at 10:00 AM',
				university: 'UC Berkeley',
				course: 'Cybersecurity',
				rating: 4.6,
				teachingHours: 98,
			},
			lastMessage: {
				text: 'Remember to review the materials on network security.',
				time: '9:30 AM',
				unread: true,
			},
			skill: 'Networking',
			upcoming: {
				date: 'Monday',
				time: '4:00 PM',
			},
		},
		{
			id: 6,
			user: {
				name: 'James Lopez',
				avatar: '/avatar6.jpg',
				status: 'online',
				lastSeen: 'Active now',
				university: 'Carnegie Mellon University',
				course: 'Database Systems',
				rating: 4.5,
				teachingHours: 102,
			},
			lastMessage: {
				text: 'Sure, I’ll prepare examples for SQL queries for our session.',
				time: '5:20 PM',
				unread: false,
			},
			skill: 'SQL',
			upcoming: {
				date: 'Tomorrow',
				time: '6:00 PM',
			},
		},
		{
			id: 7,
			user: {
				name: 'Olivia White',
				avatar: '/avatar7.jpg',
				status: 'offline',
				lastSeen: 'Yesterday at 7:30 PM',
				university: 'University of Oxford',
				course: 'Artificial Intelligence',
				rating: 4.9,
				teachingHours: 180,
			},
			lastMessage: {
				text: 'Don’t forget to complete the exercises I sent earlier.',
				time: '7:15 PM',
				unread: true,
			},
			skill: 'Artificial Intelligence',
			upcoming: {
				date: 'Wednesday',
				time: '11:00 AM',
			},
		},
		{
			id: 8,
			user: {
				name: 'Daniel Rodriguez',
				avatar: '/avatar8.jpg',
				status: 'online',
				lastSeen: 'Active now',
				university: 'Georgia Tech',
				course: 'Cloud Computing',
				rating: 4.8,
				teachingHours: 135,
			},
			lastMessage: {
				text: 'Let’s focus on AWS services in our next session.',
				time: '3:50 PM',
				unread: false,
			},
			skill: 'Cloud Computing',
			upcoming: {
				date: 'Thursday',
				time: '9:30 AM',
			},
		},
	];


	const messages = [
		{
			id: 1,
			sender: 'them',
			text: "Hi! I saw that you're teaching Python.I'd love to schedule a session!",
			time: '2:30 PM',
		},
		{
			id: 2,
			sender: 'me',
			text: "Hello! Yes, I'd be happy to help.What specific topics would you like to cover?",
			time: '2:32 PM',
		},
		{
			id: 3,
			sender: 'them',
			text: "I'm working on data structures and algorithms.Specifically struggling with binary trees.",
			time: '2:33 PM',
		},
		{
			id: 4,
			sender: 'me',
			text: 'That sounds great! Should we schedule the Python session for tomorrow?',
			time: '2:34 PM',
		},
	];

	return (
		<div className="h-[calc(100vh-94px)] flex">
			{/* Conversations List */}
			<div className="w-96 border-r border-gray-100 bg-white flex flex-col">
				<div className="p-4 border-b border-gray-100">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-semibold text-gray-900">Messages</h2>
						<button className="p-2 hover:bg-gray-50 rounded-lg">
							<MoreVertical className="w-5 h-5 text-gray-500" />
						</button>
					</div>
					<div className="relative">
						<input
							type="text"
							placeholder="Search messages..."
							className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
					</div>
					<div className="flex items-center mt-4">
						<button className="flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
							<Filter className="w-4 h-4 mr-2" />
							Filter
						</button>
						<select className="ml-2 text-sm text-gray-600 border-none focus:ring-0">
							<option>All Messages</option>
							<option>Unread</option>
							<option>Archived</option>
						</select>
					</div>
				</div>

				{/* Conversations */}
				<div className="flex-1 overflow-y-auto">
					{conversations.map((conversation) => (
						<button
							key={conversation.id}
							onClick={() => setSelectedChat(conversation)}
							className={`w-full p-4 flex items-start hover:bg-gray-50 ${selectedChat?.id === conversation.id ? 'bg-blue-50' : ''
								}`}
						>
							<div className="relative">
								<div className="w-12 h-12 bg-gray-200 rounded-full" />
								{conversation.user.status === 'online' && (
									<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
								)}
							</div>
							<div className="ml-3 flex-1 min-w-0">
								<div className="flex items-center justify-between">
									<h3 className="text-sm font-medium text-gray-900 truncate">
										{conversation.user.name}
									</h3>
									<span className="text-xs text-gray-500">{conversation.lastMessage.time}</span>
								</div>
								<p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
								<div className="mt-1 flex items-center">
									<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
										{conversation.skill}
									</span>
									{conversation.upcoming && (
										<span className="ml-2 flex items-center text-xs text-gray-500">
											<Calendar className="w-3 h-3 mr-1" />
											{conversation.upcoming.date} {conversation.upcoming.time}
										</span>
									)}
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Chat Area */}
			{selectedChat ? (
				<div className="flex-1 flex flex-col bg-gray-50">
					{/* Chat Header */}
					<div className="h-16 px-6 flex items-center justify-between bg-white border-b border-gray-100">
						<div className="flex items-center">
							<div className="relative">
								<div className="w-10 h-10 bg-gray-200 rounded-full" />
								{selectedChat.user.status === 'online' && (
									<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
								)}
							</div>
							<div className="ml-3">
								<h2 className="text-sm font-medium text-gray-900">{selectedChat.user.name}</h2>
								<p className="text-xs text-gray-500">{selectedChat.user.status === 'online' ? 'Online' : selectedChat.user.lastSeen}</p>
							</div>
						</div>
						<div className="flex items-center space-x-3">
							<button className="p-2 hover:bg-gray-50 rounded-lg">
								<Phone className="w-5 h-5 text-gray-500" />
							</button>
							<button className="p-2 hover:bg-gray-50 rounded-lg">
								<Video className="w-5 h-5 text-gray-500" />
							</button>
							<button
								className="p-2 hover:bg-gray-50 rounded-lg"
								onClick={() => setShowUserInfo(!showUserInfo)}
							>
								<Info className="w-5 h-5 text-gray-500" />
							</button>
						</div>
					</div>

					{/* Messages Area */}
					<div className="flex-1 overflow-y-auto p-6 space-y-4">
						{messages.map((message) => (
							<div
								key={message.id}
								className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
							>
								<div
									className={`max-w-sm rounded-2xl px-4 py-2 ${message.sender === 'me'
										? 'bg-blue-600 text-white'
										: 'bg-white text-gray-900'
										}`}
								>
									<p className="text-sm">{message.text}</p>
									<span
										className={`text-xs mt-1 block ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
											}`}
									>
										{message.time}
									</span>
								</div>
							</div>
						))}
					</div>

					{/* Message Input */}
					<div className="p-4 bg-white border-t border-gray-100">
						<div className="flex items-end space-x-4">
							<div className="flex-1 relative">
								<textarea
									value={messageText}
									onChange={(e) => setMessageText(e.target.value)}
									placeholder="Type your message..."
									rows="1"
									className="w-full resize-none border border-gray-200 rounded-lg px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<div className="absolute right-2 bottom-2 flex items-center space-x-1">
									<button className="p-1.5 hover:bg-gray-100 rounded-lg">
										<Paperclip className="w-5 h-5 text-gray-400" />
									</button>
									<button className="p-1.5 hover:bg-gray-100 rounded-lg">
										<Image className="w-5 h-5 text-gray-400" />
									</button>
								</div>
							</div>
							<Button variant="primary" className="h-10">
								<Send className="w-5 h-5" />
							</Button>
						</div>
					</div>
				</div>
			) : (
				// Empty State
				<div className="flex-1 flex items-center justify-center bg-gray-50">
					<div className="text-center">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<MessageSquare className="w-8 h-8 text-blue-600" />
						</div>
						<h3 className="text-lg font-medium text-gray-900 mb-2">
							Select a conversation
						</h3>
						<p className="text-sm text-gray-600">
							Choose a conversation from the list to start messaging
						</p>
					</div>
				</div>
			)}

			{/* User Info Sidebar */}
			{selectedChat && showUserInfo && (
				<div className="w-80 border-l border-gray-100 bg-white">
					<div className="p-6 text-center border-b border-gray-100">
						<div className="w-20 h-20 bg-gray-200 rounded-full mx-auto" />
						<h3 className="mt-4 text-lg font-medium text-gray-900">
							{selectedChat.user.name}
						</h3>
						<p className="text-sm text-gray-600">{selectedChat.user.university}</p>
						<p className="text-sm text-gray-600">{selectedChat.user.course}</p>
					</div>

					<div className="p-6 border-b border-gray-100">
						<h4 className="text-sm font-medium text-gray-900 mb-4">About</h4>
						<div className="space-y-4">
							<div>
								<div className="text-sm text-gray-600 mb-1">Teaching</div>
								<div className="flex items-center">
									<Star className="w-4 h-4 text-yellow-400 mr-1" />
									<span className="text-sm font-medium text-gray-900">
										{selectedChat.user.rating} rating
									</span>
									<span className="mx-2 text-gray-300">•</span>
									<span className="text-sm text-gray-600">
										{selectedChat.user.teachingHours} hours
									</span>
								</div>
							</div>
							<div>
								<div className="text-sm text-gray-600 mb-1">Next Session</div>
								{selectedChat.upcoming ? (
									<div className="flex items-center text-sm text-gray-900">
										<Calendar className="w-4 h-4 mr-2 text-gray-400" />
										{selectedChat.upcoming.date} at {selectedChat.upcoming.time}
									</div>
								) : (
									<Button variant="outline" size="sm" className="w-full">
										Schedule Session
									</Button>
								)}
							</div>
						</div>
					</div>

					<div className="p-6">
						<h4 className="text-sm font-medium text-gray-900 mb-4">Shared Files</h4>
						<div className="space-y-2">
							{/* Add shared files list here */}
							<p className="text-sm text-gray-600">No files shared yet</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Messages;