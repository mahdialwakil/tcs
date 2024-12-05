import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">TCS</span>
            </Link>
            <p className="text-gray-400 text-base">
              Empowering students in Bangladesh through personalized mentoring and skill development programs.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/mahdialwakil" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/programs" className="text-base text-gray-300 hover:text-white">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-base text-gray-300 hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="text-base text-gray-300 hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-base text-gray-300 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} The Cognitive Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}