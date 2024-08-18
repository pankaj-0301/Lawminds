import { FaUser } from 'react-icons/fa';

const Security = () => {
    return (
      <div className="container mx-auto p-4">
        <div className="flex-1 flex flex-col justify-center p-28 items-start ">
  {/* Marketing Line */}
  <div className="flex justify-start mt-2">
    <p className="text-5xl font-semibold text-gray-700 text-left w-[60%] mt-2 mb-16">
      The Secure Legal AI Platform
    </p>
  </div>

  {/* Paragraph */}
  <div className="flex justify-start mb-16">
    <p className="text-xl text-gray-700 w-[60%]">
      Our platform is covered by end-to-end multilayered security certified with the industry
      best practice standards and frameworks.
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


<div className=" py-16">
  {/* Security Advisors Section */}
  <div className="flex flex-col items-center ">
    {/* Heading */}
    <h2 className="text-7xl font-bold  mb-12 text-center max-w-4xl px-4">
      Law-minds Security Advisors
    </h2>

    {/* Cards Container */}
    <div className="flex justify-center gap-8 ">
      {/* Card 1 */}
      <div className="border-2 border-gray-500 bg-gray-200 rounded-3xl p-8  shadow-lg flex flex-col items-center max-w-md">
      <img src="user.png" alt="Advisor 3" className="w-64 h-64 mb-4" />
      </div>

      {/* Card 2 */}
      <div className="border-2 border-gray-500 bg-gray-200 rounded-3xl p-8  shadow-lg flex flex-col items-center max-w-md">
      <img src="user.png" alt="Advisor 3" className="w-64 h-64 mb-4" />
      </div>

      {/* Card 3 */}
      <div className="border-2 border-gray-500 bg-gray-200 rounded-3xl p-8  shadow-lg flex flex-col items-center max-w-md">
        <img src="user.png" alt="Advisor 3" className="w-64 h-64 mb-4" />
        </div>
    </div>
  </div>
</div>

<div className=" py-16">
  {/* Certificates & Standards Section */}
  <div className="flex flex-col items-center">
    {/* Heading */}
    <h2 className="text-7xl font-bold  mb-24 text-center">
      Certificates & Standards
    </h2>

    {/* Images Container */}
    
    <div className=" flex justify-center items-center">
    <img src="soc2.png" alt="Logo 1" className="h-48 mx-6" /> {/* Adjust height as needed */}
    <img src="iso.png" alt="Logo 2" className="h-48 mx-6" />
     <img src="gdpr.png" alt="Logo 3" className="h-48 mx-6" />
    <img src="ccpa.png" alt="Logo 3" className="h-48 mx-6" />
    {/* Add more logos as needed */}
  </div>
  </div>
</div>

<div className="flex justify-center mt-32">
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
  
  export default Security;
  