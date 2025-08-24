
import React, { useState } from 'react';
import { Facebook } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-emerald-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-emerald-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-emerald-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400">📧</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">connect@digitalbrainvizo.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400">📱</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+91-8427170754</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400">📍</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">Ludhiana, Punjab, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
              <div className="w-full h-64 bg-slate-700/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <div className="text-gray-300">Ludhiana</div>
                  <div className="text-sm text-gray-400">Punjab, India</div>
                </div>
              </div>
            </div>

            {/* Social Media & WhatsApp */}
            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="flex gap-4 mb-6">
                <button className="w-12 h-12 bg-emerald-500/20 hover:bg-emerald-500/40 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <Facebook className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </button>
                {['📷', '🐦', '💼'].map((icon, index) => (
                  <button key={index} className="w-12 h-12 bg-emerald-500/20 hover:bg-emerald-500/40 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </span>
                  </button>
                ))}
              </div>
              
              <button className="w-full bg-green-500 hover:bg-green-400 text-white py-3 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center gap-2">
                <span>💬</span>
                WhatsApp - Instant Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
