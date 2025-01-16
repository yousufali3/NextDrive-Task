import React from 'react'
import { motion } from 'framer-motion';

const Cta = () => {
  return (
          <section className="py-20">
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
      </section>
  )
}

export default Cta
