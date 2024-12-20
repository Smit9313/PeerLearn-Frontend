import { useState } from 'react';
import {
  User,
  Bell,
  Lock,
  Globe,
  Calendar,
  CreditCard,
  HelpCircle,
  Shield,
  Mail,
  Smartphone,
  Monitor,
  Eye,
  Clock,
  Languages
} from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/common/Button';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');
  
  const navigationItems = [
    { id: 'profile', label: 'Profile Settings', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Lock },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'availability', label: 'Availability', icon: Calendar },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'support', label: 'Help & Support', icon: HelpCircle },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'privacy':
        return <PrivacySettings />;
      case 'preferences':
        return <PreferenceSettings />;
      case 'availability':
        return <AvailabilitySettings />;
      case 'billing':
        return <BillingSettings />;
      case 'support':
        return <SupportSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <PageWrapper
      title="Settings"
      subtitle="Manage your account settings and preferences"
			className="p-4"
    >
      <div className="flex space-x-8">
        {/* Navigation Sidebar */}
        <div className="w-64 flex-shrink-0">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg
                  ${activeSection === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <item.icon className={`w-5 h-5 mr-3 
                  ${activeSection === item.id ? 'text-blue-700' : 'text-gray-400'}`} 
                />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-xl border border-gray-100">
            {renderContent()}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// Profile Settings Component
const ProfileSettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              defaultValue="John"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="john.doe@university.edu"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+1 (555) 000-0000"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              rows="4"
              className="w-full border-gray-300 rounded-lg"
              defaultValue="Computer Science student passionate about teaching programming..."
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Photo</h2>
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full bg-gray-200" />
          <div>
            <Button variant="outline">Change Photo</Button>
            <p className="mt-2 text-sm text-gray-500">
              JPG, GIF or PNG. Max size of 2MB.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Academic Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              University
            </label>
            <input
              type="text"
              defaultValue="Stanford University"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course/Major
            </label>
            <input
              type="text"
              defaultValue="Computer Science"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student ID
            </label>
            <input
              type="text"
              defaultValue="ST123456789"
              className="w-full border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-end">
          <div className="flex space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Notification Settings Component
const NotificationSettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Session Notifications</h3>
            <div className="space-y-4">
              {[
                { label: 'Session reminders', description: 'Get notified before your scheduled sessions' },
                { label: 'Session requests', description: 'Receive notifications for new session requests' },
                { label: 'Session updates', description: 'Get notified about changes to your scheduled sessions' },
              ].map((item, index) => (
                <label key={index} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-900">{item.label}</span>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Marketing Notifications</h3>
            <div className="space-y-4">
              {[
                { label: 'News and updates', description: 'Latest features and improvements' },
                { label: 'Tips and tutorials', description: 'Learning resources and best practices' },
                { label: 'Credit promotions', description: 'Special offers and bonus credit opportunities' },
              ].map((item, index) => (
                <label key={index} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      defaultChecked={index === 0}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <span className="text-sm font-medium text-gray-900">{item.label}</span>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Channels</h2>
        <div className="space-y-6">
          {[
            { icon: Mail, title: 'Email Notifications', description: 'Receive notifications via email' },
            { icon: Smartphone, title: 'Push Notifications', description: 'Receive notifications on your device' },
            { icon: Monitor, title: 'Browser Notifications', description: 'Receive notifications in your browser' },
          ].map((channel, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <channel.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">{channel.title}</h3>
                  <p className="text-sm text-gray-500">{channel.description}</p>
                </div>
              </div>
              <div className="ml-4">
                <select className="text-sm border-gray-300 rounded-lg">
                  <option>All notifications</option>
                  <option>Important only</option>
                  <option>None</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-end">
          <div className="flex space-x-3">
            <Button variant="outline">Reset to Default</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Privacy Settings Component
const PrivacySettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Profile Visibility</h3>
            <div className="space-y-4">
              {[
                { icon: Eye, title: 'Profile visibility', description: 'Control who can see your profile' },
                { icon: Globe, title: 'Search visibility', description: 'Control who can find you in search' },
                { icon: Clock, title: 'Online status', description: 'Show when you are online' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <select className="text-sm border-gray-300 rounded-lg">
                    <option>Everyone</option>
                    <option>Students Only</option>
                    <option>Connections Only</option>
                    <option>Nobody</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Account Security</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
                  <p className="text-sm text-gray-500">Update your password regularly</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Login History</h4>
                  <p className="text-sm text-gray-500">View your recent login activity</p>
                </div>
                <Button variant="outline">View History</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-end">
          <div className="flex space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Preference Settings Component
const PreferenceSettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Language & Region</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Platform Language
              </label>
              <select className="w-full border-gray-300 rounded-lg">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Zone
              </label>
              <select className="w-full border-gray-300 rounded-lg">
                <option>Pacific Time (PT)</option>
                <option>Eastern Time (ET)</option>
                <option>Central European Time (CET)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Theme Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color Theme
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button className="border border-gray-200 rounded-lg p-3 text-center hover:border-blue-500">
                <div className="w-full h-8 bg-white border border-gray-200 rounded mb-2" />
                Light
              </button>
              <button className="border border-gray-200 rounded-lg p-3 text-center hover:border-blue-500">
                <div className="w-full h-8 bg-gray-900 rounded mb-2" />
                Dark
              </button>
              <button className="border border-gray-200 rounded-lg p-3 text-center hover:border-blue-500">
                <div className="w-full h-8 bg-gradient-to-r from-white to-gray-900 rounded mb-2" />
                System
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Availability Settings Component
const AvailabilitySettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Schedule</h2>
        <div className="space-y-6">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <div key={day} className="flex items-center justify-between">
              <div className="w-32">
                <span className="text-sm font-medium text-gray-900">{day}</span>
              </div>
              <div className="flex-1 ml-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select className="w-full border-gray-300 rounded-lg text-sm">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full border-gray-300 rounded-lg text-sm">
                      <option>5:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <label className="flex items-center">
                  <input type="checkbox" className="text-blue-600 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Available</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Session Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Sessions per Day
            </label>
            <select className="w-full border-gray-300 rounded-lg">
              <option>2 sessions</option>
              <option>3 sessions</option>
              <option>4 sessions</option>
              <option>5 sessions</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Break Between Sessions
            </label>
            <select className="w-full border-gray-300 rounded-lg">
              <option>15 minutes</option>
              <option>30 minutes</option>
              <option>45 minutes</option>
              <option>1 hour</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

// Billing Settings Component
const BillingSettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Methods</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-6 bg-blue-600 rounded"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">•••• 4242</span>
              </div>
              <Button variant="outline" size="sm">Remove</Button>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Add Payment Method
          </Button>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Billing History</h2>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">Mar 21, 2024</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">Credit Purchase</td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">$50.00</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// Support Settings Component
const SupportSettings = () => {
  return (
    <div className="divide-y divide-gray-100">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Help & Support</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-500 mb-4">
                Read our comprehensive guides and documentation
              </p>
              <Button variant="outline" size="sm">View Documentation</Button>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Contact Support</h3>
              <p className="text-sm text-gray-500 mb-4">
                Get help from our support team
              </p>
              <Button variant="outline" size="sm">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              question: 'How do I earn credits?',
              answer: 'You can earn credits by teaching other students, completing challenges, and participating in the community.'
            },
            {
              question: 'How do I schedule a session?',
              answer: 'You can schedule a session by visiting the profile of a tutor and clicking the "Schedule Session" button.'
            },
            {
              question: 'What if I need to cancel a session?',
              answer: 'You can cancel a session up to 24 hours before the scheduled time without any penalty.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{item.question}</h3>
              <p className="text-sm text-gray-500">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;