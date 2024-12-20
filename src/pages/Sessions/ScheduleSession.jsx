import { useState } from 'react';
import {
	Calendar as CalendarIcon,
	Clock,
	Video,
	Users,
	ChevronLeft,
	ChevronRight,
	Plus,
	X
} from 'lucide-react';
import Button from '../../components/common/Button';

const ScheduleSession = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [selectedSkill, setSelectedSkill] = useState(null);
	const [sessionMode, setSessionMode] = useState('online');
	const [duration, setDuration] = useState(60);
	const [notes, setNotes] = useState('');

	const timeSlots = [
		'09:00', '10:00', '11:00', '12:00', '13:00',
		'14:00', '15:00', '16:00', '17:00', '18:00'
	];

	const skills = [
		{ id: 1, name: 'Python Programming', type: 'teaching' },
		{ id: 2, name: 'Spanish Language', type: 'learning' },
		{ id: 3, name: 'Data Science', type: 'teaching' },
	];

	return (
		<div className="max-w-4xl mx-auto">
			<div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
				<div className="p-6 border-b border-gray-100">
					<h2 className="text-lg font-medium text-gray-900">Schedule New Session</h2>
					<p className="mt-1 text-sm text-gray-500">
						Select your preferred time and details for the learning session
					</p>
				</div>

				<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Left Column - Calendar & Time Selection */}
					<div className="space-y-6">
						{/* Calendar */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Select Date
							</label>
							<div className="bg-gray-50 rounded-lg p-4">
								{/* Calendar Component would go here */}
								<div className="text-center text-sm text-gray-500">
									Calendar implementation needed
								</div>
							</div>
						</div>

						{/* Time Slots */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Available Time Slots
							</label>
							<div className="grid grid-cols-3 gap-2">
								{timeSlots.map((time) => (
									<button
										key={time}
										onClick={() => setSelectedTime(time)}
										className={`py-2 px-4 text-sm rounded-lg border ${selectedTime === time
												? 'bg-blue-50 border-blue-200 text-blue-700'
												: 'border-gray-200 text-gray-700 hover:bg-gray-50'
											}`}
									>
										{time}
									</button>
								))}
							</div>
						</div>

						{/* Duration */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Session Duration
							</label>
							<div className="flex items-center space-x-4">
								{[30, 45, 60, 90, 120].map((mins) => (
									<button
										key={mins}
										onClick={() => setDuration(mins)}
										className={`py-2 px-4 text-sm rounded-lg border ${duration === mins
												? 'bg-blue-50 border-blue-200 text-blue-700'
												: 'border-gray-200 text-gray-700 hover:bg-gray-50'
											}`}
									>
										{mins} min
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Session Details */}
					<div className="space-y-6">
						{/* Skill Selection */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Select Skill
							</label>
							<div className="space-y-2">
								{skills.map((skill) => (
									<button
										key={skill.id}
										onClick={() => setSelectedSkill(skill)}
										className={`w-full p-3 text-left rounded-lg border ${selectedSkill?.id === skill.id
												? 'bg-blue-50 border-blue-200'
												: 'border-gray-200 hover:bg-gray-50'
											}`}
									>
										<div className="flex items-center justify-between">
											<span className="text-sm font-medium text-gray-900">
												{skill.name}
											</span>
											<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${skill.type === 'teaching' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                      `}>
												{skill.type === 'teaching' ? 'Teaching' : 'Learning'}
											</span>
										</div>
									</button>
								))}
							</div>
						</div>

						{/* Session Mode */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Session Mode
							</label>
							<div className="flex space-x-4">
								<button
									onClick={() => setSessionMode('online')}
									className={`flex-1 py-3 px-4 rounded-lg border flex items-center justify-center ${sessionMode === 'online'
											? 'bg-blue-50 border-blue-200 text-blue-700'
											: 'border-gray-200 text-gray-700 hover:bg-gray-50'
										}`}
								>
									<Video className="w-5 h-5 mr-2" />
									Online
								</button>
								<button
									onClick={() => setSessionMode('in-person')}
									className={`flex-1 py-3 px-4 rounded-lg border flex items-center justify-center ${sessionMode === 'in-person'
											? 'bg-blue-50 border-blue-200 text-blue-700'
											: 'border-gray-200 text-gray-700 hover:bg-gray-50'
										}`}
								>
									<Users className="w-5 h-5 mr-2" />
									In-Person
								</button>
							</div>
						</div>

						{/* Session Notes */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Session Notes
							</label>
							<textarea
								rows="4"
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
								placeholder="Add any specific topics you'd like to cover or requirements for the session..."
								className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
						</div>

						{/* Additional Requirements */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Additional Requirements
							</label>
							<div className="space-y-3">
								<label className="flex items-center">
									<input
										type="checkbox"
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">
										Screen sharing needed
									</span>
								</label>
								<label className="flex items-center">
									<input
										type="checkbox"
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">
										Whiteboard access required
									</span>
								</label>
								<label className="flex items-center">
									<input
										type="checkbox"
										className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
									/>
									<span className="ml-2 text-sm text-gray-600">
										Recording permission
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>

				{/* Session Summary */}
				{(selectedDate || selectedTime || selectedSkill) && (
					<div className="p-6 bg-gray-50 border-t border-gray-100">
						<h3 className="text-sm font-medium text-gray-900 mb-4">Session Summary</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="flex items-center text-sm text-gray-600">
								<CalendarIcon className="w-5 h-5 text-gray-400 mr-2" />
								{selectedDate ? selectedDate.toLocaleDateString() : 'Date not selected'}
							</div>
							<div className="flex items-center text-sm text-gray-600">
								<Clock className="w-5 h-5 text-gray-400 mr-2" />
								{selectedTime ? `${selectedTime} (${duration} minutes)` : 'Time not selected'}
							</div>
							<div className="flex items-center text-sm text-gray-600">
								{sessionMode === 'online' ? (
									<Video className="w-5 h-5 text-gray-400 mr-2" />
								) : (
									<Users className="w-5 h-5 text-gray-400 mr-2" />
								)}
								{sessionMode === 'online' ? 'Online Session' : 'In-Person Session'}
							</div>
						</div>
					</div>
				)}

				{/* Action Buttons */}
				<div className="px-6 py-4 border-t border-gray-100 flex justify-end space-x-4">
					<Button variant="outline">
						Cancel
					</Button>
					<Button
						variant="primary"
						disabled={!selectedDate || !selectedTime || !selectedSkill}
					>
						Schedule Session
					</Button>
				</div>
			</div>

			{/* Success State Modal */}
			{/* Add modal for successful scheduling */}
		</div>
	);
};

export default ScheduleSession;