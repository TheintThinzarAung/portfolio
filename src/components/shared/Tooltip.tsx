import React, { useState, ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  position = 'top' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };
  
  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-purple-500',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-purple-500',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-purple-500',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-purple-500'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className={`absolute z-10 ${positionClasses[position]}`}>
          <div className="bg-purple-500 text-white text-sm rounded-md py-1 px-3 whitespace-nowrap">
            {content}
            <div className={`absolute w-2 h-2 ${arrowClasses[position]} border-8 border-transparent`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
