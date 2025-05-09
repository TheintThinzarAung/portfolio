import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;