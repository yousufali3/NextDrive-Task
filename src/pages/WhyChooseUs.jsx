import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaUserClock, FaChartLine, FaShieldAlt, FaHeadset } from 'react-icons/fa';

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaRocket size={40} />,
      title: 'Modern Technology Stack',
      description: 'We use cutting-edge technologies like React, Node.js, and cloud services.',
    },
    {
      icon: <FaCode size={40} />,
      title: 'Custom Solutions',
      description: 'No WordPress or Shopify. We build tailored solutions for your unique needs.',
    },
    {
      icon: <FaUserClock size={40} />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on time, every time.',
    },
    {
      icon: <FaChartLine size={40} />,
      title: 'Scalable Solutions',
      description: 'Our solutions grow with your business, ensuring long-term success.',
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: 'Security First',
      description: 'We prioritize security in every aspect of development.',
    },
    {
      icon: <FaHeadset size={40} />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your technical needs.',
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
            Why Choose Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Discover what sets us apart in delivering exceptional digital solutions
          </motion.p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-blue-600 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL', 'TypeScript', 'Next.js'].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow text-center"
                >
                  <span className="text-lg font-semibold text-blue-600">{tech}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together using modern technologies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </motion.button>
        </div>
      </section> */}
    </div>
  );
}

export default WhyChooseUs;