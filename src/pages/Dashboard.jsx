
import { Link } from 'react-router-dom';
import {
  Clock,
  Users,
  TrendingUp,
  Calendar,
  BookOpen,
  Award,
  ChevronRight,
  Star,
  AlertCircle
} from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/common/Button';

const Dashboard = () => {
  // Sample data - Replace with real data from your backend
  const stats = [
    { name: 'Total Sessions', value: '24', icon: Calendar, trend: '+12% from last month' },
    { name: 'Skills Learning', value: '5', icon: BookOpen, trend: '2 near completion' },
    { name: 'Teaching Hours', value: '48', icon: Users, trend: '+8% from last month' },
    { name: 'Favor Credits', value: '156', icon: Award, trend: '+23 this week' },
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Python Basics',
      type: 'Teaching',
      student: 'Sarah Wilson',
      time: '2:00 PM Today',
      duration: '1 hour',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Spanish Conversation',
      type: 'Learning',
      student: 'Miguel Rodriguez',
      time: 'Tomorrow, 11:00 AM',
      duration: '45 mins',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Web Development',
      type: 'Teaching',
      student: 'Alex Chen',
      time: 'Wed, 3:00 PM',
      duration: '1.5 hours',
      status: 'pending',
    },
  ];

  const activeSkills = [
    {
      name: 'Python Programming',
      role: 'Teaching',
      progress: 85,
      rating: 4.8,
      students: 12,
    },
    {
      name: 'Spanish Language',
      role: 'Learning',
      progress: 60,
      rating: null,
      nextSession: 'Tomorrow',
    },
    {
      name: 'Data Science',
      role: 'Teaching',
      progress: 92,
      rating: 4.9,
      students: 8,
    },
  ];

  return (
    <PageWrapper
      title="Dashboard"
      subtitle="Welcome back, John"
      actions={
        <Button variant="primary">
          New Session
        </Button>
      }
    >
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:border-blue-100 transition-colors"
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600">{stat.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Sessions</h2>
                <Link
                  to="/sessions"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"
                >
                  View all
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">with {session.student}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${session.type === 'Teaching' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {session.type}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {session.time} • {session.duration}
                  </div>
                  {session.status === 'pending' && (
                    <div className="mt-4 flex items-center space-x-3">
                      <Button variant="primary" size="sm">Accept</Button>
                      <Button variant="outline" size="sm">Decline</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Skills */}
          <div className="bg-white rounded-xl border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Active Skills</h2>
                <Link
                  to="/skills"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"
                >
                  Manage skills
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {activeSkills.map((skill) => (
                <div key={skill.name} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{skill.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {skill.role === 'Teaching' ? (
                          <span className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            {skill.rating} • {skill.students} students
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Next session: {skill.nextSession}
                          </span>
                        )}
                      </p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${skill.role === 'Teaching' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {skill.role}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button
              variant="outline"
              className="justify-center py-4"
              onClick={() => {/* Handle action */}}
            >
              <Users className="w-5 h-5 mr-2" />
              Find Study Partner
            </Button>
            <Button
              variant="outline"
              className="justify-center py-4"
              onClick={() => {/* Handle action */}}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Session
            </Button>
            <Button
              variant="outline"
              className="justify-center py-4"
              onClick={() => {/* Handle action */}}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Add New Skill
            </Button>
            <Button
              variant="outline"
              className="justify-center py-4"
              onClick={() => {/* Handle action */}}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Progress
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="px-6">
            <div className="divide-y divide-gray-100">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="py-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-900">You earned 10 favor credits</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;