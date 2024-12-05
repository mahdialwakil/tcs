import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from '../components/TeamMember';

export default function About() {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Mission</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Empowering Through Education
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            The Cognitive Society is dedicated to bridging the gap between academic excellence and practical skills
            through personalized mentoring and innovative learning programs.
          </p>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              To create a generation of innovative thinkers and problem solvers who will lead Bangladesh
              into a brighter future through education, technology, and practical skills.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Dedicated professionals committed to transforming education in Bangladesh.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <TeamMember
              name="Mahdi Al Wakil"
              role="Founder & CEO"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              linkedIn="https://linkedin.com/mahdialwakil"
              bio="Passionate educator and innovator dedicated to transforming education in Bangladesh through technology and personalized mentoring."
            />
            {/* Add more team members as needed */}
          </div>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <div className="mt-6 prose prose-blue prose-lg text-gray-500">
              <p>
                The Cognitive Society was founded with a vision to revolutionize education in Bangladesh.
                We recognized the need for a more comprehensive approach to learning that goes beyond
                traditional classroom education.
              </p>
              <p>
                Starting with a small group of passionate educators and mentors, we've grown into a
                community that supports students in their journey to academic and personal excellence.
                Our focus on practical skills, combined with academic rigor, has helped numerous students
                achieve success in national and international competitions.
              </p>
              <p>
                Today, we continue to expand our reach and impact, developing innovative programs that
                prepare students for the challenges of tomorrow while fostering creativity, critical
                thinking, and leadership skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}