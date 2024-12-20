import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Users,
  Calendar,
  Target,
  TrendingUp,
  Shield,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import Button from '../components/common/Button';

const Landing = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-2xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 mb-8">
                <Sparkles className="w-4 h-4 text-primary-600 mr-2" />
                <span className="text-sm font-medium text-primary-700">
                  Join 10,000+ students already learning
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Exchange Skills,{' '}
                <span className="text-primary-600">Learn Together</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto">
                A peer-to-peer learning platform where students exchange skills,
                collaborate on projects, and help each other grow.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Started For Free
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Skills
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              ['10K+', 'Active Students'],
              ['50+', 'Universities'],
              ['100K+', 'Skills Exchanged'],
              ['4.9/5', 'Student Satisfaction'],
            ].map(([stat, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-primary-600">{stat}</div>
                <div className="mt-1 text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything You Need to Learn and Grow
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform provides all the tools and features needed for effective
              peer-to-peer learning.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Skill Matching',
                description:
                  'Find students with complementary skills and learning goals.',
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: 'Flexible Scheduling',
                description:
                  'Schedule sessions that work with your academic timetable.',
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Goal Tracking',
                description:
                  'Set learning objectives and track your progress over time.',
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Skill Analytics',
                description:
                  'Get insights into your learning journey and skill development.',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Safe Learning',
                description:
                  'Verified university students only, with safety measures in place.',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Community Support',
                description:
                  'Join study groups and connect with like-minded learners.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-primary-100 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-xl">
                  {React.cloneElement(feature.icon, {
                    className: 'w-6 h-6 text-primary-600',
                  })}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <Link to="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How PeerLearn Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start your learning journey in three simple steps
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-14 left-16 right-16 h-0.5 bg-gray-200"></div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Create Your Profile',
                  description: 'Sign up and list the skills you want to learn and teach. Add your availability and preferences.',
                },
                {
                  step: '02',
                  title: 'Find Your Match',
                  description: 'Browse through verified students or let our matching system find the perfect learning partner for you.',
                },
                {
                  step: '03',
                  title: 'Start Learning',
                  description: 'Schedule sessions, exchange skills, and track your progress as you learn and grow together.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 text-center">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 text-center max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular Skills to Exchange
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Browse through our most popular skill categories
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: 'Programming & Tech',
                skills: ['Python', 'JavaScript', 'Data Science', 'Web Development', 'Machine Learning'],
                count: '2,500+ Students',
              },
              {
                category: 'Languages',
                skills: ['English', 'Spanish', 'Mandarin', 'French', 'German'],
                count: '3,200+ Students',
              },
              {
                category: 'Academic Subjects',
                skills: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics'],
                count: '1,800+ Students',
              },
              {
                category: 'Creative Skills',
                skills: ['Graphic Design', 'UI/UX Design', 'Video Editing', 'Digital Art', 'Photography'],
                count: '1,500+ Students',
              },
              {
                category: 'Business Skills',
                skills: ['Marketing', 'Finance', 'Project Management', 'Public Speaking', 'Leadership'],
                count: '2,100+ Students',
              },
              {
                category: 'Music & Arts',
                skills: ['Piano', 'Guitar', 'Drawing', 'Painting', 'Music Theory'],
                count: '900+ Students',
              },
            ].map((category) => (
              <div key={category.category} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-soft transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category.count}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="#" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:underline">
                    Explore category
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Students Trust PeerLearn
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Join a trusted community of learners from top universities worldwide.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Verified university students only',
                  'Safe and secure learning environment',
                  'Quality-assured exchanges',
                  'Fair and transparent system',
                  'Active community support',
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ready to start learning?
                </h3>
                <p className="mt-2 text-gray-600">
                  Join thousands of students already exchanging skills on PeerLearn
                </p>
                <div className="mt-8 flex flex-col space-y-4">
                  <Button variant="primary" size="lg" className="w-full">
                    Sign Up Now
                  </Button>
                  <p className="text-sm text-gray-500">
                    No credit card required · Free for students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600">
        <div className="max-w-8xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Your Learning Journey Today
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Join the community of students helping students. Exchange skills,
              learn together, and grow faster.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-secondary-600 text-white hover:bg-secondary-700"
              >
                Get Started For Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-primary-700"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;