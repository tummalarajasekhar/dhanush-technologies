import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle, Globe, Smartphone, Wrench, Zap, DollarSign, Clock } from 'lucide-react';
import type { ProjectRequirement } from '../types';

interface ProjectWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectTypes = [
  {
    id: 'web-app',
    title: 'Web Application',
    description: 'Custom web applications with advanced functionality',
    icon: Globe,
    features: ['User Authentication', 'Database Integration', 'API Development', 'Admin Dashboard']
  },
  {
    id: 'website',
    title: 'Business Website',
    description: 'Professional websites for businesses and organizations',
    icon: Smartphone,
    features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'Contact Forms']
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance for existing applications',
    icon: Wrench,
    features: ['Bug Fixes', 'Security Updates', 'Performance Optimization', '24/7 Support']
  },
  {
    id: 'optimization',
    title: 'Performance Optimization',
    description: 'Speed up and optimize existing applications',
    icon: Zap,
    features: ['Code Optimization', 'Database Tuning', 'Caching', 'CDN Integration']
  }
];

const budgetRanges = [
  { id: 'under-5k', label: 'Under $5,000', icon: DollarSign },
  { id: '5k-15k', label: '$5,000 - $15,000', icon: DollarSign },
  { id: '15k-50k', label: '$15,000 - $50,000', icon: DollarSign },
  { id: 'over-50k', label: 'Over $50,000', icon: DollarSign }
];

const timelineOptions = [
  { id: '1-2-weeks', label: '1-2 weeks', icon: Clock },
  { id: '1-2-months', label: '1-2 months', icon: Clock },
  { id: '3-6-months', label: '3-6 months', icon: Clock },
  { id: 'over-6-months', label: 'Over 6 months', icon: Clock }
];

export default function ProjectWizard({ isOpen, onClose }: ProjectWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectData, setProjectData] = useState<Partial<ProjectRequirement>>({
    features: [],
    contactInfo: {
        name: '',
        email: ''
    }
  });

  const totalSteps = 5;

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleProjectTypeSelect = (typeId: string) => {
    setProjectData(prev => ({ ...prev, projectType: typeId }));
  };

  const handleFeatureToggle = (feature: string) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features?.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...(prev.features || []), feature]
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setProjectData({ features: [], contactInfo: {
        name: '',
        email: ''
    } });
    onClose();
  };

  const selectedProjectType = projectTypes.find(type => type.id === projectData.projectType);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Start Your Project
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Step {currentStep} of {totalSteps}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 min-h-[500px]">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your project requirements have been submitted. We&apos;ll review your information
                    and get back to you within 24 hours with a detailed proposal.
                  </p>
                </div>
                <button
                  onClick={resetWizard}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Start Another Project
                </button>
              </div>
            ) : (
              <>
                {/* Step 1: Project Type */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        What type of project do you need?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Select the type of service that best fits your requirements
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <div
                          key={type.id}
                          onClick={() => handleProjectTypeSelect(type.id)}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg ${
                            projectData.projectType === type.id
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${
                              projectData.projectType === type.id 
                                ? 'bg-blue-100 dark:bg-blue-900/30' 
                                : 'bg-gray-100 dark:bg-gray-800'
                            }`}>
                              <type.icon className={`h-6 w-6 ${
                                projectData.projectType === type.id 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {type.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                {type.description}
                              </p>
                              <ul className="space-y-1">
                                {type.features.map((feature, index) => (
                                  <li key={index} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                    <div className="h-1 w-1 bg-blue-500 rounded-full mr-2"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Features */}
                {currentStep === 2 && selectedProjectType && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Which features do you need?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Select all features that apply to your {selectedProjectType.title.toLowerCase()}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProjectType.features.map((feature) => (
                        <div
                          key={feature}
                          onClick={() => handleFeatureToggle(feature)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            projectData.features?.includes(feature)
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`h-5 w-5 rounded border-2 flex items-center justify-center ${
                              projectData.features?.includes(feature)
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}>
                              {projectData.features?.includes(feature) && (
                                <CheckCircle className="h-3 w-3 text-white" />
                              )}
                            </div>
                            <span className="text-gray-900 dark:text-white font-medium">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        What&apos;s your budget range?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        This helps us provide the most accurate proposal for your project
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {budgetRanges.map((budget) => (
                        <div
                          key={budget.id}
                          onClick={() => setProjectData(prev => ({ ...prev, budget: budget.id }))}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:-translate-y-1 ${
                            projectData.budget === budget.id
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${
                              projectData.budget === budget.id 
                                ? 'bg-blue-100 dark:bg-blue-900/30' 
                                : 'bg-gray-100 dark:bg-gray-800'
                            }`}>
                              <budget.icon className={`h-6 w-6 ${
                                projectData.budget === budget.id 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }`} />
                            </div>
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                              {budget.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Timeline */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        What&apos;s your preferred timeline?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        When would you like your project to be completed?
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timelineOptions.map((timeline) => (
                        <div
                          key={timeline.id}
                          onClick={() => setProjectData(prev => ({ ...prev, timeline: timeline.id }))}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:-translate-y-1 ${
                            projectData.timeline === timeline.id
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${
                              projectData.timeline === timeline.id 
                                ? 'bg-blue-100 dark:bg-blue-900/30' 
                                : 'bg-gray-100 dark:bg-gray-800'
                            }`}>
                              <timeline.icon className={`h-6 w-6 ${
                                projectData.timeline === timeline.id 
                                  ? 'text-blue-600 dark:text-blue-400' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }`} />
                            </div>
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                              {timeline.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Info & Submit */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Almost there! Tell us about yourself
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Please provide your contact information and project details
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                value={projectData.contactInfo?.name || ''}
                                onChange={(e) =>
                                    setProjectData(prev => ({
                                        ...prev,
                                        contactInfo: {
                                            ...prev.contactInfo,
                                            name: e.target.value,
                                            email: prev.contactInfo?.email ?? '',
                                            company: prev.contactInfo?.company ?? ''
                                        }
                                    }))
                                }
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={projectData.contactInfo?.email || ''}
                            onChange={(e) =>
                              setProjectData(prev => ({
                                ...prev,
                                contactInfo: {
                                  ...prev.contactInfo,
                                  name: prev.contactInfo?.name ?? '',
                                  company: prev.contactInfo?.company ?? '',
                                  email: e.target.value
                                }
                              }))
                            }
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Company (Optional)
                        </label>
                        <input
                            type="text"
                            value={projectData.contactInfo?.company || ''}
                            onChange={(e) =>
                                setProjectData(prev => ({
                                    ...prev,
                                    contactInfo: {
                                        ...prev.contactInfo,
                                        name: prev.contactInfo?.name ?? '',
                                        email: prev.contactInfo?.email ?? '',
                                        company: e.target.value
                                    }
                                }))
                            }
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                            placeholder="Your Company"
                        />
                    </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Description *
                        </label>
                        <textarea
                          value={projectData.description || ''}
                          onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                          placeholder="Please describe your project requirements, goals, and any specific functionality you need..."
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>

                  {currentStep < totalSteps ? (
                    <button
                      onClick={handleNext}
                      disabled={
                        (currentStep === 1 && !projectData.projectType) ||
                        (currentStep === 2 && (!projectData.features || projectData.features.length === 0)) ||
                        (currentStep === 3 && !projectData.budget) ||
                        (currentStep === 4 && !projectData.timeline)
                      }
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed"
                    >
                      <span>Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={
                        !projectData.contactInfo?.name ||
                        !projectData.contactInfo?.email ||
                        !projectData.description ||
                        isSubmitting
                      }
                      className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          <span>Submit Requirements</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}