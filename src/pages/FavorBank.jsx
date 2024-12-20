import { useState } from 'react';
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Gift,
  TrendingUp,
  History,
  Award,
  ChevronRight,
  Clock,
  Filter,
  Download,
  Star
} from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/common/Button';

const FavorBank = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const creditStats = {
    balance: 156,
    earned: 245,
    spent: 89,
    pending: 12,
  };

  const transactions = [
    {
      id: 1,
      type: 'earned',
      amount: 10,
      description: 'Python Programming Session with Sarah Wilson',
      date: '2024-03-21',
      status: 'completed',
      skill: 'Python Programming',
      duration: '1 hour',
    },
    {
      id: 2,
      type: 'spent',
      amount: 15,
      description: 'Spanish Language Practice with Miguel Rodriguez',
      date: '2024-03-20',
      status: 'completed',
      skill: 'Spanish Language',
      duration: '1.5 hours',
    },
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Help 3 Beginners',
      credits: 30,
      description: 'Earn bonus credits by helping new students',
      deadline: '5 days left',
      progress: 1,
      total: 3,
    },
    {
      id: 2,
      title: 'Weekend Warrior',
      credits: 20,
      description: 'Complete 5 sessions over the weekend',
      deadline: 'Weekends only',
      progress: 2,
      total: 5,
    },
  ];

  return (
    <PageWrapper
      title="Favor Bank"
      subtitle="Manage your teaching and learning credits"
      actions={
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export History
          </Button>
          <Button variant="primary">Send Credits</Button>
        </div>
      }
			className="p-4"
    >
      <div className="space-y-6">
        {/* Credit Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Current Balance
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{creditStats.balance}</h3>
              <p className="mt-1 text-sm text-gray-500">Total Credits Available</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-green-600" />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Earned
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{creditStats.earned}</h3>
              <p className="mt-1 text-sm text-gray-500">Total Credits Earned</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                <ArrowDownLeft className="w-6 h-6 text-orange-600" />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                Spent
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{creditStats.spent}</h3>
              <p className="mt-1 text-sm text-gray-500">Total Credits Spent</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Pending
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-gray-900">{creditStats.pending}</h3>
              <p className="mt-1 text-sm text-gray-500">Pending Credits</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transactions Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Transaction History</h2>
                  <div className="flex items-center space-x-3">
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Time</option>
                      <option value="month">This Month</option>
                      <option value="week">This Week</option>
                    </select>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          transaction.type === 'earned' 
                            ? 'bg-green-50' 
                            : 'bg-orange-50'
                        }`}>
                          {transaction.type === 'earned' ? (
                            <ArrowUpRight className={`w-5 h-5 text-green-600`} />
                          ) : (
                            <ArrowDownLeft className={`w-5 h-5 text-orange-600`} />
                          )}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {transaction.description}
                          </h3>
                          <div className="mt-1 flex items-center text-xs text-gray-500">
                            <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>{transaction.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-medium ${
                          transaction.type === 'earned'
                            ? 'text-green-600'
                            : 'text-orange-600'
                        }`}>
                          {transaction.type === 'earned' ? '+' : '-'}{transaction.amount} credits
                        </span>
                        <div className="mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {transaction.skill}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-gray-100">
                <Button variant="outline" className="w-full">
                  View All Transactions
                </Button>
              </div>
            </div>

            {/* Credit Rules and Guidelines */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Credit Rules & Guidelines
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Credit Earning</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Earn 1 credit for each minute of teaching. Bonus credits for high ratings and helping beginners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Credit Spending</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Use credits to book learning sessions. Different skills may require different credit amounts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Gift className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Pay It Forward</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Donate credits to help students in need. Receive recognition and badges for your generosity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Credit Opportunities */}
            <div className="bg-white rounded-xl border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Earning Opportunities</h2>
                <p className="mt-1 text-sm text-gray-500">Complete challenges to earn bonus credits</p>
              </div>
              <div className="divide-y divide-gray-100">
                {opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{opportunity.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{opportunity.description}</p>
                        <div className="mt-2 flex items-center text-xs text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {opportunity.deadline}
                        </div>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        +{opportunity.credits} credits
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{opportunity.progress}/{opportunity.total}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(opportunity.progress / opportunity.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Gift className="w-4 h-4 mr-3" />
                  Donate Credits
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <History className="w-4 h-4 mr-3" />
                  Request Credits
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-3" />
                  Download Statement
                </Button>
              </div>
            </div>

            {/* Credit Level & Benefits */}
            <div className="bg-white rounded-xl border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Credit Level</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Gold Level
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>Progress to Platinum</span>
                    <span>750/1000 credits</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>
                
                <h3 className="text-sm font-medium text-gray-900 mb-3">Current Benefits</h3>
                <div className="space-y-2">
                  {[
                    '10% bonus credits on teaching',
                    'Priority matching with students',
                    'Extended session duration',
                    'Premium support access'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Next Level Benefits</h3>
                  <div className="space-y-2">
                    {[
                      '15% bonus credits on teaching',
                      'Custom session scheduling',
                      'Verified tutor badge',
                      'Featured profile placement'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-500">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        </div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Credit Statistics */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Credit Statistics</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Average earnings/week</span>
                    <span className="font-medium text-gray-900">25 credits</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-100 rounded-full h-1">
                    <div className="bg-green-500 h-1 rounded-full" style={{ width: '65%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Average spending/week</span>
                    <span className="font-medium text-gray-900">18 credits</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-100 rounded-full h-1">
                    <div className="bg-orange-500 h-1 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Donation rate</span>
                    <span className="font-medium text-gray-900">5 credits</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-100 rounded-full h-1">
                    <div className="bg-purple-500 h-1 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FavorBank;