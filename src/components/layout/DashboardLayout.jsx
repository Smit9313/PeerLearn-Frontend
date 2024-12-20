import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  Users,
  MessageSquare,
  Calendar,
  Gift,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  LogOut
} from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Skills Exchange', icon: Users, path: '/skills' },
    { name: 'Messages', icon: MessageSquare, path: '/messages', badge: 3 },
    { name: 'Sessions', icon: Calendar, path: '/sessions' },
    { name: 'Favor Bank', icon: Gift, path: '/favor-bank' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-100 transition-all duration-300 ease-in-out z-30
          ${isCollapsed ? 'w-[60px]' : 'w-[240px]'}`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center px-4 border-b border-gray-100">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            {!isCollapsed && (
              <span className="ml-2 text-xl font-semibold text-gray-900">PeerLearn</span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <div className="space-y-1 px-3">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center h-10 px-3 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-blue-50 text-primary-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  {!isCollapsed && (
                    <>
                      <span className="ml-3 flex-1">{item.name}</span>
                      {item.badge && (
                        <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100">
          <div className="p-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
            {!isCollapsed && (
              <div className="ml-3 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john.doe@university.edu</p>
              </div>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-2 -right-4 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-50"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ease-in-out ${isCollapsed ? 'ml-[60px]' : 'ml-[240px]'}`}>
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sticky top-0 z-20">
          {/* Search */}
          <div className="max-w-lg w-full">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search skills, students..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-gray-200" />
            <button className="flex items-center text-gray-400 hover:text-gray-600">
              <LogOut className="w-5 h-5" />
              <span className="ml-2 text-sm">Sign out</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;