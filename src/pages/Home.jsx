import { motion } from 'framer-motion';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import WhyChooseUs from './WhyChooseUs';
import Contact from './Contact';
import Header from './Header';
import HeaderTwo from './HeaderTwo';
function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Innovative Digital Solutions
            </motion.h1>
            <motion.p 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-xl md:text-2xl mb-8"
            >
              Transforming businesses through cutting-edge technology
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.section> */}
      <HeaderTwo/>
 

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Modern Technology</h3>
              <p className="text-gray-600">Using the latest technologies to build scalable solutions</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">Dedicated professionals with years of experience</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help you achieve your goals</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </motion.button>
        </div>
      </section> */}
      <Services />
      <Portfolio />
      <Blog />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}

export default Home;