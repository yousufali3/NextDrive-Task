import { useState } from 'react';
import { motion } from 'framer-motion';

function Blog() {
  const [blogs] = useState([
    {
      id: 1,
      title: 'The Future of Web Development',
      author: 'John Doe',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      tags: ['Web Development', 'Technology', 'Future'],
    },
    {
      id: 2,
      title: 'Mobile App Development Trends',
      author: 'Jane Smith',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?auto=format&fit=crop&w=800',
      excerpt: 'Discover the most important mobile app development trends for 2024.',
      tags: ['Mobile', 'Development', 'Trends'],
    },
    {
      id: 3,
      title: 'The Impact of AI in Modern Business',
      author: 'Mike Johnson',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
      excerpt: 'How artificial intelligence is transforming business operations and decision-making.',
      tags: ['AI', 'Business', 'Technology'],
    },
  ]);

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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Insights and updates from the world of technology
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest tech insights
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
}

export default Blog;