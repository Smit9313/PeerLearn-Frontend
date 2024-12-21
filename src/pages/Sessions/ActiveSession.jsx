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
    <div className="fixed inset-0 bg-gray-50 z-50">
      <div className="h-full flex flex-col">
        {/* Session Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <h1 className="text-gray-900 font-display text-xl">Python Programming Session</h1>
            <div className="px-3 py-1.5 bg-primary-50 border border-primary-100 rounded-full flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse mr-2" />
              <span className="text-sm text-primary-700">{formatTime(elapsedTime)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gray-200 hover:bg-gray-50"
            >
              <HelpCircle className="w-4 h-4 mr-2 text-primary-600" />
              Support
            </Button>
            <Button 
              variant="danger"
              className="bg-red-50 text-red-600 border-red-100 hover:bg-red-100"
            >
              End Session
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* Video Grid */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 gap-6 h-full">
              {/* Participant Video */}
              <div className="bg-white rounded-xl relative overflow-hidden shadow-soft border border-gray-100">
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 rounded-full backdrop-blur-sm border border-gray-100">
                  <span className="text-sm text-gray-900 font-medium">Sarah Wilson</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-50 rounded-full">
                  <span className="text-xs text-green-600">HD</span>
                </div>
              </div>
              
              {/* Your Video */}
              <div className="bg-white rounded-xl relative overflow-hidden shadow-soft border border-gray-100">
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 rounded-full backdrop-blur-sm border border-gray-100">
                  <span className="text-sm text-gray-900 font-medium">You</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-50 rounded-full">
                  <span className="text-xs text-green-600">HD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          {(showChat || showParticipants) && (
            <div className="w-96 bg-white border-l border-gray-100">
              {/* Sidebar Header */}
              <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6">
                <h2 className="text-gray-900 font-medium text-lg">
                  {showChat ? 'Chat' : 'Participants'}
                </h2>
                <button
                  onClick={() => {
                    setShowChat(false);
                    setShowParticipants(false);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Content */}
              {showChat && (
                <div className="flex flex-col h-[calc(100%-56px)]">
                  <div className="flex-1 p-6 overflow-y-auto">
                    {/* Chat messages would go here */}
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <div className="relative">
                      <textarea
                        rows="3"
                        placeholder="Type a message..."
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      />
                      <button className="absolute right-3 bottom-3 text-primary-600 hover:text-primary-700 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Participants Content */}
              {showParticipants && (
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Participant Item */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-medium">SW</span>
                        </div>
                        <span className="ml-3 font-medium text-gray-900">Sarah Wilson</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                          <MicOff className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                          <VideoOff className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Your Item */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-medium">You</span>
                        </div>
                        <span className="ml-3 font-medium text-gray-900">You</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                          <Mic className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                          <Video className="w-5 h-5" />
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
        <div className="bg-white px-8 py-6 border-t border-gray-100">
          <div className="w-full mx-auto flex items-center justify-between">
            {/* Left section */}
            <div className="w-72"></div>

            {/* Center section - main controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-4 rounded-xl transition-all ${
                  isMuted 
                    ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
              </button>
              
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-4 rounded-xl transition-all ${
                  isVideoOff 
                    ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
              </button>

              <button
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className={`p-4 rounded-xl transition-all ${
                  isScreenSharing 
                    ? 'bg-secondary-50 text-secondary-600 hover:bg-secondary-100' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Monitor className="w-6 h-6" />
              </button>
            </div>

            {/* Right section - additional controls */}
            <div className="flex items-center space-x-4 w-72 justify-end">
              <button
                onClick={() => {
                  setShowChat(true);
                  setShowParticipants(false);
                }}
                className={`p-4 rounded-xl transition-all ${
                  showChat 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MessageSquare className="w-6 h-6" />
              </button>

              <button
                onClick={() => {
                  setShowParticipants(true);
                  setShowChat(false);
                }}
                className={`p-4 rounded-xl transition-all ${
                  showParticipants 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="w-6 h-6" />
              </button>

              <button className="p-4 rounded-xl bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSession;