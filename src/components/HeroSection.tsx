
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <ParticleBackground />
      
      {/* Enhanced gradient overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/70 to-black/80 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
      
      {/* Floating orbs for enhanced background */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-600/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight font-inter animate-pulse">
            <span className="text-white animate-bounce inline-block" style={{ animationDelay: '0s' }}>Digital</span>
            <span className="text-yellow-400 animate-bounce inline-block" style={{ animationDelay: '0.2s' }}> BrainVizo</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-12 font-light font-inter transform transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Your Digital Growth Partner
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1500 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg font-inter transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-transparent border-2 border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg font-inter transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              View Services
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
