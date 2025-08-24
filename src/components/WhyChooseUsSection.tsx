
import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "AI Tools",
      description: "Leverage cutting-edge AI technology for smarter marketing decisions",
      icon: "🤖"
    },
    {
      title: "Creative Team",
      description: "Talented designers and strategists crafting unique campaigns",
      icon: "👥"
    },
    {
      title: "ROI Focus",
      description: "Every strategy is designed to maximize your return on investment",
      icon: "💰"
    },
    {
      title: "Transparent Reporting",
      description: "Clear, detailed reports showing exactly how your campaigns perform",
      icon: "📋"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Why Choose Ai Digital BrainVizo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine innovation, creativity, and data-driven strategies to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-700/20 to-gray-900/20 rounded-full flex items-center justify-center text-4xl border border-gray-500/30 group-hover:border-gray-500/60 transition-all duration-500 group-hover:transform group-hover:scale-110">
                  {feature.icon}
                </div>
                
                <div className="absolute inset-0 bg-gray-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
