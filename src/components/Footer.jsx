import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TechSolutions</h3>
            <p className="text-gray-400">
              Delivering innovative digital solutions for modern businesses.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Email: contact@techsolutions.com</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} TechSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;