import React from 'react';

const RectangleWithBoxes = ({ className, heading }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main Rectangle with Fixed Width and Height */}
      <div className="relative w-60 h-30 sm:w-96 sm:h-32   rounded-lg bg-white p-2 z-10">
        {/* Heading with Divider */}
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl text-gray-500 font-semibold mb-2">{heading}</h2>
          <div className="w-3/4 h-1 bg-gray-400 mx-auto"></div>
        </div>

        {/* Small Gray Rectangles */}
        <div className="flex flex-col space-y-2 h-full">
          {/* First Row: Two Rectangles with 30% and 70% Widths */}
          <div className="flex w-full h-[20%] space-x-2">
            <div className="bg-gray-300 h-full w-[30%] rounded-lg"></div>
            <div className="bg-gray-300 h-full w-[70%] rounded-lg"></div>
          </div>

          {/* Second Row: Three Rectangles with 20%, 50%, and 30% Widths */}
          <div className="flex w-full h-[20%] space-x-2">
            <div className="bg-gray-300 h-full w-[20%] rounded-lg"></div>
            <div className="bg-gray-300 h-full w-[50%] rounded-lg"></div>
            <div className="bg-gray-300 h-full w-[30%] rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleWithBoxes;
