// @flow strict

import React from 'react';

const LoadingSpinner = ({ size = "md", className = "", text = null }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#16f2b3] animate-spin"></div>
      </div>
      {text && (
        <p className="text-gray-400 text-sm animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
