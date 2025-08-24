
import React from 'react';

const AboutSection = () => {
  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Ai Digital BrainVizo
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of digital marketing experts, AI enthusiasts, and creative strategists 
              dedicated to helping businesses thrive in the digital landscape.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our mission is to democratize digital marketing knowledge through cutting-edge AI tools and 
              comprehensive training programs. We believe every business deserves access to professional-grade 
              marketing strategies that drive real results.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300">Innovation-driven approach to marketing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300">Transparent and results-focused methodology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300">Continuous learning and adaptation</span>
              </div>
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl hover:border-gray-500/50 transition-all duration-500 group"
                >
                  <div className="text-4xl font-bold text-gray-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-semibold">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-400 font-semibold mb-4">
                Our Vision
              </p>
              <p className="text-gray-300 leading-relaxed">
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
