import { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  StopCircle,
  MessageSquare,
  Users,
  Settings,
  HelpCircle,
  X,
  Maximize,
  MinusCircle,
  PlusCircle,
  Edit3,
  Share2
} from 'lucide-react';
import Button from '../../components/common/Button';

const ActiveSession = () => {
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50">
      <div className="h-full flex flex-col">
        {/* Session Header */}
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-white font-medium">Python Programming Session</h1>
            <div className="ml-4 px-3 py-1 bg-green-600 rounded-full flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />
              <span className="text-xs text-white">{formatTime(elapsedTime)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support
            </Button>
            <Button variant="danger">
              End Session
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Video Grid */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Participant Video */}
              <div className="bg-gray-800 rounded-xl relative">
                <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900 bg-opacity-75 rounded-full">
                  <span className="text-sm text-white">Sarah Wilson</span>
                </div>
              </div>
              {/* Your Video */}
              <div className="bg-gray-800 rounded-xl relative">
                <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900 bg-opacity-75 rounded-full">
                  <span className="text-sm text-white">You</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Chat/Participants/Whiteboard */}
          {(showChat || showParticipants) && (
            <div className="w-80 bg-gray-800 border-l border-gray-700">
              {/* Sidebar Header */}
              <div className="h-12 border-b border-gray-700 flex items-center justify-between px-4">
                <h2 className="text-white font-medium">
                  {showChat ? 'Chat' : 'Participants'}
                </h2>
                <button
                  onClick={() => {
                    setShowChat(false);
                    setShowParticipants(false);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Content */}
              {showChat && (
                <div className="flex flex-col h-[calc(100%-48px)]">
                  <div className="flex-1 p-4 overflow-y-auto">
                    {/* Chat messages would go here */}
                  </div>
                  <div className="p-4 border-t border-gray-700">
                    <div className="relative">
                      <textarea
                        rows="3"
                        placeholder="Type a message..."
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="absolute right-2 bottom-2 text-blue-500 hover:text-blue-400">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {showParticipants && (
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-600 rounded-full" />
                        <span className="ml-3">Sarah Wilson</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-white">
                          <MicOff className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <VideoOff className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-600 rounded-full" />
                        <span className="ml-3">You</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-white">
                          <Mic className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <Video className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Control Bar */}
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-full ${
                isMuted ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-3 rounded-full ${
                isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className={`p-3 rounded-full ${
                isScreenSharing ? 'bg-green-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              <Monitor className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setShowChat(true);
                setShowParticipants(false);
              }}
              className={`p-3 rounded-full ${
                showChat ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setShowParticipants(true);
                setShowChat(false);
              }}
              className={`p-3 rounded-full ${
                showParticipants ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              <Users className="w-5 h-5" />
            </button>
            <button
              className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600"
            >
              <Settings className="w-5 h-5" />
            </button>
            <Button 
              variant="danger" 
              className="flex items-center"
              onClick={() => {/* Handle end session */}}
            >
              <StopCircle className="w-5 h-5 mr-2" />
              End Session
            </Button>
          </div>
        </div>

        {/* Whiteboard Component */}
        {isScreenSharing && (
          <div className="absolute inset-0 bg-white">
            <div className="h-full flex flex-col">
              {/* Whiteboard Header */}
              <div className="bg-gray-100 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center">
                  <h3 className="font-medium text-gray-900">Screen Sharing</h3>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    Live
                  </span>
                </div>
                <button
                  onClick={() => setIsScreenSharing(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Whiteboard Tools */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 space-y-2">
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded">
                  <Edit3 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded">
                  <PlusCircle className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded">
                  <MinusCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Screen Share Area */}
              <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Screen sharing is active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Support Modal */}
        {/* Add emergency support modal here */}
        <div className="fixed bottom-4 right-4">
          <Button
            variant="danger"
            className="shadow-lg"
            onClick={() => {/* Handle emergency support */}}
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            Emergency Support
          </Button>
        </div>

        {/* Settings Modal */}
        {/* Add settings modal here */}
        <div className="hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl w-96">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Session Settings</h3>
              </div>
              <div className="p-6">
                {/* Settings content */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Audio Input
                    </label>
                    <select className="w-full border-gray-300 rounded-lg">
                      <option>Default Microphone</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Video Input
                    </label>
                    <select className="w-full border-gray-300 rounded-lg">
                      <option>Default Camera</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="text-blue-600 rounded" />
                      <span className="ml-2 text-sm text-gray-600">Enable noise cancellation</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
                <Button variant="primary">Save Settings</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Session Notes Panel */}
        <div className="fixed bottom-4 left-4">
          <div className="bg-white rounded-lg shadow-lg w-80">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Session Notes</h3>
            </div>
            <div className="p-4">
              <textarea
                rows="4"
                placeholder="Take notes during your session..."
                className="w-full border-gray-300 rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Connection Status Indicator */}
        <div className="fixed top-4 right-4">
          <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-green-800">Connection Stable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSession;