import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Rahman',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'TCS helped me win the National Math Olympiad. The mentors are exceptional!',
    achievement: 'National Math Olympiad Gold Medalist',
  },
  {
    id: 2,
    name: 'Karim Ahmed',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The programming bootcamp completely transformed my career path.',
    achievement: 'Software Engineer at Google',
  },
  {
    id: 3,
    name: 'Nadia Islam',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'TCS provided me with the guidance I needed to excel in research.',
    achievement: 'Published Researcher',
  },
];

export default function Testimonials() {
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
            Testimonials
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Success Stories
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Hear from our students who have achieved remarkable success with TCS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600">{testimonial.achievement}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}