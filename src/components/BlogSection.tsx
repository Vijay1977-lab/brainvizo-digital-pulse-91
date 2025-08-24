
import React, { useState } from 'react';

const BlogSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'AI', 'Marketing Tips', 'Case Studies'];
  
  const articles = [
    {
      title: "10 AI Tools Every Marketer Should Use in 2024",
      category: "AI",
      excerpt: "Discover the latest AI tools that are revolutionizing digital marketing strategies...",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
    },
    {
      title: "How to Increase ROI with Data-Driven Marketing",
      category: "Marketing Tips",
      excerpt: "Learn proven strategies to maximize your marketing budget and drive better results...",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "E-commerce Brand Success Story: 300% Growth",
      category: "Case Studies",
      excerpt: "A detailed breakdown of how we helped a fashion brand triple their online sales...",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "The Future of Social Media Marketing",
      category: "Marketing Tips",
      excerpt: "Explore emerging trends and platforms that will shape social media marketing...",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "AI-Powered Content Creation Strategies",
      category: "AI",
      excerpt: "How artificial intelligence is transforming content creation and optimization...",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      title: "Local Restaurant Chain: 150% Traffic Increase",
      category: "Case Studies",
      excerpt: "See how we helped a restaurant chain dominate local search and increase foot traffic...",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
    }
  ];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Insights & Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with the latest trends, tips, and insights in digital marketing
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl overflow-hidden hover:border-gray-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                  <button className="text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
