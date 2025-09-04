export interface ProjectRequirement {
  projectType: string;
  features: string[];
  budget: string;
  timeline: string;
  description: string;
  contactInfo: {
    name: string;
    email: string;
    company?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProjectStep {
  step: number;
  title: string;
  description: string;
}