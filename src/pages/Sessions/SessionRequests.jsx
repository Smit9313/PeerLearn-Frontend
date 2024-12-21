import { useState } from 'react';
import {
  Calendar,
  Clock,
  Video,
  Users,
  X,
  Check,
  AlertCircle,
  RotateCcw,
  ChevronDown
} from 'lucide-react';
import Button from '../../components/common/Button';

const SessionRequests = () => {
  // Sample data for session requests
  const [requests, setRequests] = useState([
    {
      id: 1,
      student: {
        name: 'Alex Chen',
        avatar: 'https://avatar.iran.liara.run/public/boy?username=Ash',
        university: 'MIT'
      },
      subject: 'Python Programming',
      type: 'teaching',
      proposedDateTime: '2024-03-25T14:00:00',
      duration: 60,
      mode: 'online',
      status: 'pending',
      notes: 'Would like to focus on data structures and algorithms',
      alternateSlots: [
        '2024-03-25T16:00:00',
        '2024-03-26T14:00:00',
        '2024-03-26T16:00:00'
      ]
    },
    {
      id: 2,
      student: {
        name: 'Emma Watson',
        avatar: 'https://avatar.iran.liara.run/public/69',
        university: 'Stanford University'
      },
      subject: 'Machine Learning',
      type: 'learning',
      proposedDateTime: '2024-03-24T10:00:00',
      duration: 90,
      mode: 'online',
      status: 'pending',
      notes: 'Need help with neural networks concepts',
      alternateSlots: [
        '2024-03-24T15:00:00',
        '2024-03-25T10:00:00'
      ]
    },
    {
      id: 3,
      student: {
        name: 'Michael Brown',
        avatar: 'https://avatar.iran.liara.run/public/8',
        university: 'UC Berkeley'
      },
      subject: 'Web Development',
      type: 'teaching',
      proposedDateTime: '2024-03-23T11:00:00',
      duration: 120,
      mode: 'in-person',
      status: 'rescheduled',
      notes: 'Looking to learn React and Next.js',
      alternateSlots: []
    }
  ]);

  const handleAccept = (requestId) => {
    setRequests(requests.map(req => 
      req.id === requestId ? { ...req, status: 'accepted' } : req
    ));
  };

  const handleReject = (requestId) => {
    setRequests(requests.map(req => 
      req.id === requestId ? { ...req, status: 'rejected' } : req
    ));
  };

  const handleReschedule = (requestId, newTime) => {
    setRequests(requests.map(req => 
      req.id === requestId ? { ...req, proposedDateTime: newTime, status: 'rescheduled' } : req
    ));
  };

  return (
    <div className="max-w-5xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Session Requests</h2>
        <p className="mt-1 text-sm text-gray-500">
          Manage your incoming session requests and proposals
        </p>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-blue-100 transition-colors"
          >
            {/* Request Header */}
            <div className="p-6 flex items-start justify-between border-b border-gray-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={request.student.avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {request.student.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {request.student.university}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    request.status === 'accepted' ? 'bg-green-100 text-green-800' :
                    request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'}
                `}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${request.type === 'teaching' ? 'bg-purple-100 text-purple-800' : 'bg-indigo-100 text-indigo-800'}
                `}>
                  {request.type === 'teaching' ? 'Teaching' : 'Learning'}
                </span>
              </div>
            </div>

            {/* Request Details */}
            <div className="p-6 grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Session Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {new Date(request.proposedDateTime).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {new Date(request.proposedDateTime).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })} ({request.duration} minutes)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      {request.mode === 'online' ? (
                        <Video className="w-4 h-4 mr-2 text-gray-400" />
                      ) : (
                        <Users className="w-4 h-4 mr-2 text-gray-400" />
                      )}
                      {request.mode === 'online' ? 'Online Session' : 'In-Person Session'}
                    </div>
                  </div>
                </div>

                {request.notes && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Additional Notes</h4>
                    <p className="text-sm text-gray-600">
                      {request.notes}
                    </p>
                  </div>
                )}
              </div>

              {/* Alternate Slots */}
              {request.alternateSlots.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Alternative Time Slots</h4>
                  <div className="space-y-2">
                    {request.alternateSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleReschedule(request.id, slot)}
                        className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-600">
                            {new Date(slot).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          {new Date(slot).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {request.status === 'pending' && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => handleReject(request.id)}
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <X className="w-4 h-4 mr-2" />
                  Decline
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleAccept(request.id)}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Accept
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionRequests; 