import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-gray-200 text-black p-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with 10% margin from the left */}
        <Link to="/" className="text-5xl font-bold ml-[10%]">LAW-MINDS</Link>
        
        {/* Navigation links group for desktop */}
        <ul className="hidden md:flex space-x-4 ml-auto mr-8">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick('/')}
              className={`text-2xl font-bold ${
                activeLink === '/' ? 'text-gray-900 underline underline-offset-8' : 'text-gray-700'
              } hover:text-gray-900`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => handleLinkClick('/products')}
              className={`text-2xl font-bold ${
                activeLink === '/products' ? 'text-gray-900 underline underline-offset-8' : 'text-gray-700'
              } hover:text-gray-900`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/security"
              onClick={() => handleLinkClick('/security')}
              className={`text-2xl font-bold ${
                activeLink === '/security' ? 'text-gray-900 underline underline-offset-8' : 'text-gray-700'
              } hover:text-gray-900`}
            >
              Security
            </Link>
          </li>
        </ul>

        {/* Button group for desktop */}
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

      {/* Mobile menu toggle */}
      <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
        <button
          className="relative flex items-center px-4 py-2 border-2 border-gray-500 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 hover:border-gray-600 transition duration-300"
          style={{ boxShadow: '-5px 5px 15px rgba(0, 0, 0, 0.3), -5px 5px 10px rgba(0, 0, 0, 0.2)' }}
        >
          <FaUser className="mr-2 text-gray-800" />
          Waitlist
        </button>
        <button
          className="relative flex items-center px-4 py-2 border-2 border-gray-500 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 hover:border-gray-600 transition duration-300"
          style={{ boxShadow: '-5px 5px 15px rgba(0, 0, 0, 0.3), -5px 5px 10px rgba(0, 0, 0, 0.2)' }}
        >
          Contact Sales
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
