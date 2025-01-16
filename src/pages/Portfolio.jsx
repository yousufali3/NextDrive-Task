import { motion } from 'framer-motion';
import { FaSchool, FaHospital, FaHotel, FaCut, FaShoppingCart, FaDumbbell } from 'react-icons/fa';

function Portfolio() {
  const projects = [
    {
      icon: <FaSchool size={40} />,
      title: 'School Management System',
      description: 'A comprehensive digital platform for educational institutions.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800',
    },
    {
      icon: <FaHospital size={40} />,
      title: 'Hospital Management Portal',
      description: 'Digital healthcare solution for patient management.',
      technologies: ['React', 'Express', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800',
    },
    {
      icon: <FaHotel size={40} />,
      title: 'Hotel Booking Platform',
      description: 'Modern booking system for hospitality sector.',
      technologies: ['Next.js', 'Prisma', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800',
    },
    {
      icon: <FaCut size={40} />,
      title: 'Salon Appointment System',
      description: 'Streamlined booking platform for beauty services.',
      technologies: ['Vue.js', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800',
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: 'E-commerce Platform',
      description: 'Feature-rich online shopping solution.',
      technologies: ['React', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800',
    },
    {
      icon: <FaDumbbell size={40} />,
      title: 'Gym Management System',
      description: 'Complete fitness center management solution.',
      technologies: ['React', 'GraphQL', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800',
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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Showcasing our expertise across diverse industries
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-full text-blue-600">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </motion.button>
        </div>
      </section> */}
    </div>
  );
}

export default Portfolio;