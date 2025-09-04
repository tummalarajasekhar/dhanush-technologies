import React from 'react';
import { Code, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' }
  ];

  const services = [
    { name: 'Web Development', href: '#web-development' },
    { name: 'Mobile Apps', href: '#mobile-apps' },
    { name: 'E-commerce', href: '#ecommerce' },
    { name: 'Maintenance', href: '#maintenance' },
    { name: 'Consulting', href: '#consulting' },
    { name: 'UI/UX Design', href: '#design' }
  ];

  const resources = [
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Documentation', href: '#docs' },
    { name: 'API Reference', href: '#api' },
    { name: 'Support Center', href: '#support' },
    { name: 'Knowledge Base', href: '#knowledge' },
    { name: 'Downloads', href: '#downloads' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'GDPR Compliance', href: '#gdpr' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'SLA Agreement', href: '#sla' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com', color: 'hover:text-gray-300' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest insights on web development, industry trends, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DevCraft Solutions</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming digital visions into reality through exceptional software development, 
              innovative web applications, and reliable maintenance services. We build the future, one line of code at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:hello@devcraftsolutions.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  hello@devcraftsolutions.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-400">San Francisco, CA 94102</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 dark:bg-gray-900 rounded-lg ${social.color} transition-all duration-200 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <button
                    onClick={() => scrollToSection(resource.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {resource.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center group">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-200">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Certified Developers</h4>
              <p className="text-sm text-gray-400">AWS, Google Cloud, Microsoft Azure</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex p-3 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-200">
                <Code className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">ISO 27001 Certified</h4>
              <p className="text-sm text-gray-400">Information Security Management</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-200">
                <Code className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-white mb-1">Industry Awards</h4>
              <p className="text-sm text-gray-400">Best Web Development Agency 2024</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {currentYear} DevCraft Solutions. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Built with passion and precision • Powered by cutting-edge technology
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </span>
              <span>•</span>
              <span>99.9% uptime</span>
              <span>•</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}