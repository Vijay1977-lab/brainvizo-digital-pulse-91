
import React from 'react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Growth",
      client: "Fashion Brand",
      metrics: { increase: "300%", metric: "Sales" },
      description: "Transformed online presence with AI-driven strategies"
    },
    {
      title: "Local Business Boost",
      client: "Restaurant Chain",
      metrics: { increase: "150%", metric: "Foot Traffic" },
      description: "Increased local visibility and customer engagement"
    },
    {
      title: "SaaS Lead Generation",
      client: "Tech Startup",
      metrics: { increase: "400%", metric: "Qualified Leads" },
      description: "Built comprehensive funnel optimization system"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Case Studies & Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results for real businesses - see how we've transformed our clients' digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/5 to-gray-900/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-gray-400 mb-2">
                      +{project.metrics.increase}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wider">
                      {project.metrics.metric}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="text-gray-400 font-semibold mb-4">
                  {project.client}
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-6 flex items-center justify-between">
                  <button className="text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-300">
                    View Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
