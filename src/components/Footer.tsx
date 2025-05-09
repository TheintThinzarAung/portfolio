import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            &copy; {new Date().getFullYear()} Theint Thinzar Aung. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-pink-500" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;