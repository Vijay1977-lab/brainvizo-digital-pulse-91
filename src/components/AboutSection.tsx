
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced gradient overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/70 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      {/* Floating orbs for enhanced background */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-600/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">About </span>
              <span className="text-white animate-bounce inline-block" style={{ animationDelay: '0s' }}>Ai Digital</span>
              <span className="text-yellow-400 animate-bounce inline-block" style={{ animationDelay: '0.2s' }}> BrainVizo</span>
            </h2>
            
            <p className={`text-xl text-gray-300 mb-6 leading-relaxed transform transition-all duration-1500 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              We are a passionate team of digital marketing experts, AI enthusiasts, and creative strategists 
              dedicated to helping businesses thrive in the digital landscape.
            </p>
            
            <p className={`text-lg text-gray-400 mb-8 leading-relaxed transform transition-all duration-1500 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our mission is to democratize digital marketing knowledge through cutting-edge AI tools and 
              comprehensive training programs. We believe every business deserves access to professional-grade 
              marketing strategies that drive real results.
            </p>
            
            <div className={`space-y-4 transform transition-all duration-1500 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Innovation-driven approach to marketing</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Transparent and results-focused methodology</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Continuous learning and adaptation</span>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div className={`transform transition-all duration-1500 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl hover:border-yellow-400/50 transition-all duration-500 group hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300 animate-fade-in">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-semibold group-hover:text-white transition-colors duration-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-yellow-400 font-semibold mb-4 animate-pulse">
                Our Vision
              </p>
              <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                To be the leading digital marketing education platform that empowers 
                individuals and businesses to achieve extraordinary growth through AI-powered strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
