import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400"
        aria-hidden="true"
      >
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-black opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <div className="max-w-3xl">
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Digital Presence 
              <span className="block text-cyan-300">With Expert Strategy</span>
            </h1>

            {/* Value proposition */}
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              We blend creativity and technology to build powerful digital experiences 
              that drive real business results.
            </p>

            {/* CTA button */}
            <button className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-cyan-500 hover:bg-cyan-400 rounded-lg transition-colors duration-150 shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;