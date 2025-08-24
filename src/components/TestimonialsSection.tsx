
import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Startup",
      rating: 5,
      text: "Digital BrainVizo transformed our online presence completely. Their AI-driven approach increased our sales by 300% in just 4 months!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Tech Solutions",
      rating: 5,
      text: "The team's expertise in digital marketing is unmatched. They helped us scale from a local business to a national brand.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      company: "Fashion Brand",
      rating: 5,
      text: "Professional, creative, and results-driven. The certification program gave me all the skills needed to launch my own agency.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-500/20 rounded-3xl p-8 text-center">
                    <div className="mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-500/30"
                      />
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gray-500' : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
