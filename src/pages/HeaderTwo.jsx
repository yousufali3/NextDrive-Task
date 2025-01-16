import React from 'react';
import { ArrowRight, Star, Trophy, Zap } from 'lucide-react';

const HeaderTwo = () => {
  return (
    <div className="relative h-[95vh] w-full overflow-hidden bg-black">
      {/* Modern gradient background with animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-violet-800 via-indigo-900 to-black"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      >
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          {/* Main content section */}
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm text-gray-200">Rated #1 Digital Agency 2025</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your 
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> Digital Presence</span>
              <span className="block mt-2">Beyond Imagination</span>
            </h1>

            {/* Enhanced value proposition */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We craft exceptional digital experiences that transform brands, drive growth, 
              and create meaningful connections with your audience.
            </p>

            {/* CTA section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white rounded-lg transition-all duration-200 hover:scale-105">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200">
                Watch Showreel
              </button>
            </div>

            {/* Stats and social proof */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <div>
                  <div className="text-2xl font-bold text-white">250+</div>
                  <div className="text-gray-400">Awards Won</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-cyan-400" />
                <div>
                  <div className="text-2xl font-bold text-white">1.2K+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-violet-400" />
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating design elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-400 text-sm mb-2">Scroll to explore</div>
        <div className="w-1 h-12 rounded-full bg-white/20">
          <div className="w-full h-1/3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;