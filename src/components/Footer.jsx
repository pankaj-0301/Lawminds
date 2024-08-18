import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-black text-center w-full min-h-[50vh] p-32 mb-16 flex items-center">
      <div className="container mx-auto max-w-7xl flex flex-col justify-between items-center h-full">
        {/* Top Row: LAW-MINDS and Marketing Line */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="md:w-2/3 flex justify-center md:justify-start items-center">
            <h2 className="text-7xl font-bold">LAW-MINDS</h2>
          </div>
          <div className="md:w-2/3 flex justify-center md:justify-end items-center">
            <p className="text-3xl">
              <span className="text-gray-400">AI </span>
              <span className="">Platform for Smarter </span>
              <span className="text-gray-400">Legal </span>
              <span className="">Outcomes</span>
            </p>
          </div>
        </div>

        {/* Bottom Row: Company and Resource sections */}
        <div className="w-full flex flex-col md:flex-row justify-end items-start space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col space-y-2">
            <h3 className="text-4xl font-bold mb-4">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products" className="text-2xl hover:text-gray-400">Product</Link>
              </li>
              <li>
                <Link to="/security" className="text-2xl hover:text-gray-400">Security</Link>
              </li>
              <li>
                <Link to="/blog" className="text-2xl hover:text-gray-400">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-4xl font-bold mb-4">Resource</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-2xl hover:text-gray-400">Legal</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
