import React from 'react';
import RectangleWithBoxes from '../components/RectangleWithBoxes';
import { FaUser } from 'react-icons/fa';

const Products = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex-1 flex flex-col justify-center p-28 items-start  ">
        {/* Marketing Line */}
        <div className="flex justify-start pt-16">
          <p className="text-5xl font-medium text-gray-700 text-left w-[60%] mt-2 mb-16">
            A suite of products for all practice areas & Jurisdiction
          </p>
        </div>

        {/* Buttons */}
        <div className="hidden text-2xl font-semibold md:flex space-x-4">
  <button
    className="relative flex items-center px-4 py-2 border-2 border-gray-500 bg-black text-white rounded-lg hover:bg-green-600 hover:border-green-700 transition duration-300"
    style={{ boxShadow: '-5px 5px 15px rgba(0, 0, 0, 0.3), -5px 5px 10px rgba(0, 0, 0, 0.2)' }}
  >
    Waitlist
    <FaUser className="ml-2 text-white" /> {/* Changed to white to contrast with green background */}
  </button>
  <button
    className="relative flex items-center px-4 py-2 border-2 border-gray-500 bg-black text-white rounded-lg hover:bg-gray-300 hover:border-gray-600 transition duration-300"
    style={{ boxShadow: '-5px 5px 15px rgba(0, 0, 0, 0.3), -5px 5px 10px rgba(0, 0, 0, 0.2)' }}
  >
    Contact Sales
  </button>
</div>
      </div>

      <div className="flex justify-center p-8">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl w-full">
        {/* Left Side: Box */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative border-2 border-gray-400 rounded-3xl p-4 bg-white shadow-lg max-w-4xl max-h-[800px] overflow-hidden">
            <img
              src="/Assistant.png"
              alt="Law Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Heading */}
        <div className="flex-1 md:w-1/2 flex flex-col justify-center pl-4 md:pl-20">
          <h2 className="text-8xl  font-custom-bold mb-24 text-gray-800">Assistant</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Assistance provides expert guidance and representation, ensuring individuals and businesses navigate the law effectively and achieve fair outcomes.
          </p>
        </div>
      </div>
    </div>


      <div className=" py-16">
        {/* Container for both Upper and Lower sections */}
        <div className="flex flex-col items-center">

          {/* Upper Section: Research Heading and Image Box */}
          <div className="flex w-full justify-center ">
            {/* Left: Research Heading */}
            <div className="flex-1 flex flex-col justify-center pl-8 pr-4 lg:pl-32 lg:pr-0">
              <h2 className="text-8xl font-custom-bold text-gray-800 mb-16">Research</h2>
              <p className="lg:text-xl w-full lg:w-[100%] mt-6">
                Get precise analysis of laws, precedents, and regulations to inform legal strategies and decision-making.
              </p>
            </div>

            {/* Right: Image Box and Boundary with Rectangles */}
            <div className="relative min-h-screen w-full p-4 lg:p-6">
              {/* New Outer Boundary */}
              <div className="relative border-2 border-gray-400 rounded-3xl  p-5  overflow-hidden max-w-[600px]  mx-auto">
                {/* Existing Outer Boundary */}
                <div className="relative border-2 border-gray-400 rounded-3xl bg-gray-100 p-4 lg:p-8 overflow-hidden max-w-[550px] max-h-[550px] mx-auto">
                  <div className="relative flex px-2 py-4 items-end w-3/4 h-3/4">
                    <div className="relative">
                      {/* First Rectangle */}
                      <RectangleWithBoxes className="absolute left-0 bottom-0 sm:bottom-2" heading="Research" />

                      {/* Second Rectangle (Partially Overlapping the First) */}
                      <RectangleWithBoxes className="absolute left-1/4 sm:left-20 bottom-10 sm:bottom-12" heading="Research" />

                      {/* Third Rectangle (With a Different Heading) */}
                      <RectangleWithBoxes className="absolute left-0 bottom-14 sm:bottom-16" heading="Source" />
                      <RectangleWithBoxes className="absolute left-1/4 sm:left-20 bottom-10 sm:bottom-12" heading="Data" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section: Tickboxes and Text */}
          <div className="flex w-full justify-center">
            {/* Left: Empty space (for alignment purposes) */}
            <div className="flex-1 lg:pl-32"></div>

            {/* Right: Tickboxes Grid */}
            <div className="flex-1 mr-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {[
                  "US Case Law",
                  "Indian Case Law",
                  "EDGAR",
                  "Tax",
                  "EUR-Lex",
                  "Memos",
                  "More coming soon",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* Tickbox Design */}
                    <div className="w-6 h-6 border-2 border-gray-200 rounded-md bg-gray-300 mr-4 flex-shrink-0"></div>
                    {/* Text */}
                    <p className="text-sm lg:text-base font-semibold text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-4">
        <p className="text-7xl font-bold text-gray-700 text-center w-[70%] mt-4 mb-28">
          Join now and be among the leading firms using Lawminds
        </p>
      </div>

      {/* Divider */}
      <div className="flex justify-center mt-8 mb-8">
        <div className="w-full max-w-screen-xl h-1.5 bg-gradient-to-r from-gray-400 bg-gradient-to-r from-gray-500 via-black to-gray-300 to-gray-500"></div>
      </div>
    </div>
  );
};

export default Products;
