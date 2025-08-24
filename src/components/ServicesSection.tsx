import React from 'react';
const ServicesSection = () => {
  const services = [{
    title: "SEO Optimization",
    description: "Boost your search rankings with AI-powered SEO strategies",
    icon: "🎯"
  }, {
    title: "Paid Advertising",
    description: "Maximize ROI with data-driven Google & Facebook ads",
    icon: "📈"
  }, {
    title: "Social Media Marketing",
    description: "Build engaging communities across all platforms",
    icon: "📱"
  }, {
    title: "Brand Strategy",
    description: "Create compelling brand identities that resonate",
    icon: "🎨"
  }, {
    title: "Content Strategy",
    description: "Develop content that converts and engages",
    icon: "✍️"
  }, {
    title: "Analytics & Insights",
    description: "Make informed decisions with comprehensive reporting",
    icon: "📊"
  }];
  return <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive digital marketing solutions powered by Ai and creativity</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/5 to-gray-900/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 w-full h-0.5 bg-gradient-to-r from-gray-500/0 via-gray-500/50 to-gray-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;