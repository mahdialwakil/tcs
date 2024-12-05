import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 2999,
    features: [
      'Access to basic learning resources',
      'Monthly group mentoring sessions',
      'Basic practice materials',
      'Community forum access',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 4999,
    isPopular: true,
    features: [
      'All Basic features',
      'Weekly 1-on-1 mentoring',
      'Advanced study materials',
      'Mock tests and assessments',
      'Priority support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 7999,
    features: [
      'All Pro features',
      'Daily 1-on-1 mentoring',
      'Customized study plan',
      'Research guidance',
      'Competition preparation',
      'Career counseling',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Plan
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Flexible plans designed to meet your learning needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative ${
                plan.isPopular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-32 h-32 overflow-hidden">
                  <div className="absolute top-0 right-0 transform rotate-45 w-20 h-20 bg-blue-500">
                    <span className="absolute bottom-4 right-1 text-xs text-white font-semibold transform rotate-45">
                      Popular
                    </span>
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ৳{plan.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /month
                  </span>
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200 focus:ring-blue-400'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}