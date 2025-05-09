import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-purple-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex space-x-2 justify-center items-center mb-6">
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-xl font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;