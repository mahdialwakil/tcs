import React from 'react';
import { Users, Award, BookOpen, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    id: 1,
    stat: '1000+',
    emphasis: 'Students Mentored',
    icon: Users,
  },
  {
    id: 2,
    stat: '50+',
    emphasis: 'Competition Winners',
    icon: Trophy,
  },
  {
    id: 3,
    stat: '100+',
    emphasis: 'Workshops Conducted',
    icon: BookOpen,
  },
  {
    id: 4,
    stat: '25+',
    emphasis: 'National Awards',
    icon: Award,
  },
];

export default function ImpactMetrics() {
  return (
    <div className="bg-blue-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Transforming education and empowering students across Bangladesh
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.id} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <div className="text-4xl font-bold text-gray-900">{metric.stat}</div>
                  <div className="text-sm font-medium text-gray-500">{metric.emphasis}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}