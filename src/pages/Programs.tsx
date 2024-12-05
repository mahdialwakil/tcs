import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Brain, Rocket, Code } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Olympiad Mentorship',
    description: 'Expert guidance for Math, Physics, and Chemistry Olympiads with personalized coaching and practice sessions.',
    icon: Award,
  },
  {
    id: 2,
    title: 'Research Guidance',
    description: 'Learn research methodologies and participate in research projects with experienced mentors.',
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'Skill Development',
    description: 'Practical workshops in programming, public speaking, and leadership development.',
    icon: Brain,
  },
  {
    id: 4,
    title: 'Competition Preparation',
    description: 'Structured training for national and international academic competitions.',
    icon: Rocket,
  },
  {
    id: 5,
    title: 'Coding Bootcamps',
    description: 'Intensive programming courses in various languages and technologies.',
    icon: Code,
  },
  {
    id: 6,
    title: 'Peer Learning Groups',
    description: 'Collaborative learning environments where students can share knowledge and experiences.',
    icon: Users,
  },
];

export default function Programs() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Programs</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Comprehensive Learning Solutions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Discover our range of programs designed to help students excel in academics and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {program.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {program.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}