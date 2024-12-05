import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to Prepare for Math Olympiads',
    excerpt: 'Essential tips and strategies for succeeding in mathematics competitions.',
    author: 'Mahdi Al Wakil',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 2,
    title: 'The Importance of Research Skills',
    excerpt: 'Why developing research skills early can set you up for academic success.',
    author: 'Sarah Rahman',
    date: '2024-03-10',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 3,
    title: 'Coding Bootcamp Success Stories',
    excerpt: 'Real stories from students who transformed their careers through programming.',
    author: 'Karim Ahmed',
    date: '2024-03-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  },
];

export default function Blog() {
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
            Blog
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Latest Insights
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Educational resources, success stories, and expert advice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <User className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}