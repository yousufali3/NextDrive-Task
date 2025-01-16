import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaPaintBrush, FaSearch, FaBullhorn } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'Custom, responsive, and scalable websites built with modern technologies.',
      features: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
    },
    {
      icon: <FaMobile size={40} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience.',
      features: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
    },
    {
      icon: <FaSearch size={40} />,
      title: 'SEO',
      description: 'Optimize your online presence for better search engine rankings.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
    },
    {
      icon: <FaBullhorn size={40} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies for business growth.',
      features: ['Social Media', 'Email Marketing', 'PPC', 'Content Marketing'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[rgba(243,244,246,1)] text-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and find the perfect solution for your business
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us Now
          </motion.button>
        </div>
      </section> */}
    </div>
  );
}

export default Services;