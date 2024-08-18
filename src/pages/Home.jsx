import { FaUser } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Half: Marketing Line and Buttons */}
      <div className="flex-1 flex flex-col justify-center items-center  p-32">
        {/* Marketing Line */}
        <div className="text-center mb-8 w-[60%]">
          <p className="text-8xl font-semibold leading-tight">
            <span className="text-gray-400 mx-2">AI </span>
            <span className="text-6xl mx-2">Platform for Smarter </span>
            <span className="text-gray-400 mx-2">Legal </span>
            <span className="text-6xl mx-2">Outcomes</span>
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

      {/* Bottom Half: Product Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 bg-white mt-28">
        <h2 className="text-7xl font-bold text-gray-400 mb-6">Product</h2>
        <p className="text-3xl text-center w-[60%] mt-4 mb-28">
          The Law-Minds Platform provides a suite of products tailored to
          lawyers and law firms across all practice areas and workflows.
        </p>
      </div>
{/* Additional Section: Legal Domain and FAQ Box */}
<div className="flex ">
  <div className="flex flex-col  md:flex-row  ">
    {/* Left Side: Heading */}
    <div className="flex-1 md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center pl-40 "> {/* Added pl-4 for left padding and pr-2 for right padding */}
      <h2 className="text-5xl font-bold mb-2">Legal Domain</h2>
      <h3 className="text-5xl font-semibold text-gray-400">Specific Models</h3>
    </div>

    {/* Right Side: Box */}
    <div className="flex-  mr-16 md:w-1/2">
      <div className="border-2 border-gray-500 max-w-140 rounded-3xl p-6 bg-transparent mx-4 mr-20 my-6">
        <div className="border-2 border-gray-500 rounded-3xl p-6 bg-gray-200 shadow-lg">
          <h4 className="text-3xl font-bold pb-8">Lawminds.AI</h4>
          <p className="text-2xl pb-8 font-bold">What is the Indian Constitution?</p>
          <p className="text-base mb-4 font-medium">
            The Constitution of India is the supreme law of the country. It is a written
            document that lays down the framework demarcating fundamental
            political code, structure, procedures, powers, and duties of government
            institutions and sets out fundamental rights, directive principles, and the
            duties of citizens.
          </p>
          <p className="text-base font-medium">Some key facts about the Indian Constitution:</p>
          <ul className="list-disc list-inside pl-5 mt-2 font-medium">
            <li>It was adopted by the Constituent Assembly on November 26, 1949
              and came into effect on January 26, 1950.</li>
            <li>At the time of adoption, it had 395 articles in 22 parts and 8 schedules,
              making it the longest constitution for a sovereign nation.</li>
            <li>It declares India a sovereign, socialist, secular, and democratic republic,
              assuring justice, equality, and liberty to its citizens.</li>
            <li>It provides for a parliamentary system of government that is federal in
              structure with unitary features.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="flex justify-around   mt-6 mb-6 p-24">
  {/* Left Side: Security Text */}
  <div className="  mb-8 md:mb-0 flex flex-col  pl-4 pr-2">
    <h2 className="text-5xl font-bold mb-6 text-black">Security</h2>
    <h3 className="text-2xl font-semibold text-gray-400">Deployed on Microsoft Azure</h3>
  </div>

  {/* Right Side: Logos */}
  <div className=" flex justify-center items-center">
    <img src="soc2.png" alt="Logo 1" className="h-16 mx-4" /> {/* Adjust height as needed */}
    <img src="iso.png" alt="Logo 2" className="h-16 mx-4" />
     <img src="gdpr.png" alt="Logo 3" className="h-16 mx-4" />
    <img src="ccpa.png" alt="Logo 3" className="h-16 mx-4" />
    {/* Add more logos as needed */}
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

export default Home;
