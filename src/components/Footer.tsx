import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Courses", href: "#courses" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Digital Marketing",
    "AI-Powered Analytics",
    "Social Media Management",
    "SEO Optimization",
    "Content Creation",
    "Marketing Training"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-gray-400/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  <span className="text-white">Ai Digital</span>
                  <span className="text-yellow-400"> BrainVizo</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Empowering businesses with cutting-edge AI-driven digital marketing solutions and comprehensive training programs.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contact@aidigitalbrainvizo.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>123 Digital Avenue, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group cursor-pointer">
                      <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-yellow-400 transition-colors duration-300"></span>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Only */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Follow Us</h4>
              <p className="text-gray-300 mb-4">Connect with us on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 transform hover:scale-110 group"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2024 Ai Digital BrainVizo. All rights reserved.</p>
                <p className="text-sm mt-1">Innovating digital marketing through AI technology</p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-gray-400 to-yellow-400 opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;