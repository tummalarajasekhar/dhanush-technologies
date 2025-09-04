import React from 'react';
import { Globe, Smartphone, Wrench, Zap, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Custom web applications built with modern frameworks and technologies.',
    features: ['React/Vue/Angular', 'Node.js Backend', 'Database Integration', 'API Development']
  },
  {
    icon: Smartphone,
    title: 'Responsive Websites',
    description: 'Beautiful, fast, and mobile-optimized websites that convert visitors.',
    features: ['Mobile-First Design', 'SEO Optimization', 'Performance Tuning', 'CMS Integration']
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support for your applications.',
    features: ['Regular Updates', 'Bug Fixes', 'Performance Monitoring', 'Security Patches']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your existing applications and improve user experience.',
    features: ['Code Optimization', 'Database Tuning', 'CDN Integration', 'Caching Strategies']
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security reviews and implementation of best practices.',
    features: ['Vulnerability Assessment', 'Penetration Testing', 'Security Hardening', 'Compliance']
  },
  {
    icon: Headphones,
    title: 'Consultation',
    description: 'Strategic technology consultation to guide your digital transformation.',
    features: ['Technology Planning', 'Architecture Design', 'Team Training', 'Process Optimization']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment and beyond, we provide comprehensive software solutions 
            tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="mb-6">
                <div className="inline-flex p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}