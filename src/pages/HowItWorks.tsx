import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, BookOpen, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create an Account',
    description: 'Sign up for free and complete your student profile with your academic interests and goals.',
    icon: Users,
  },
  {
    id: 2,
    title: 'Select Your Program',
    description: 'Browse our range of programs and choose the one that best fits your learning objectives.',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Start Learning',
    description: 'Get matched with expert mentors and begin your journey with personalized guidance.',
    icon: Award,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Get Started</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            How It Works
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Join TCS in three simple steps and begin your journey towards academic excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-100 hidden md:block" />

            {/* Steps */}
            <div className="space-y-16 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 text-center md:text-left md:px-8">
                      <div className="relative">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="absolute top-0 right-0 -mr-4 md:hidden">
                          <CheckCircle className="h-8 w-8 text-blue-500" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-500">{step.description}</p>
                    </div>

                    {/* Number Circle for Desktop */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl relative z-10">
                      {step.id}
                    </div>

                    <div className="flex-1 md:px-8" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="mt-24 bg-blue-50 rounded-2xl p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              What Makes Us Different
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Experience personalized learning like never before
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Mentors',
                description: 'Learn from experienced professionals and academics',
              },
              {
                title: 'Flexible Learning',
                description: 'Study at your own pace with both online and offline options',
              },
              {
                title: 'Proven Results',
                description: 'Join our community of successful students',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}