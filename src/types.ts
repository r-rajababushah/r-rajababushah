export interface Project {
  id: string;
  title: string;
  version: string;
  category: 'all' | 'native' | 'compose' | 'fullstack';
  categoryLabel: string;
  image: string;
  altText: string;
  badges: { label: string; type: 'primary' | 'secondary' | 'tertiary' }[];
  ratingOrStat: { icon: string; text: string };
  description: string;
  architectureDetails?: string[];
  techStack: string[];
  repoUrl: string;
  liveDemoTitle: string;
  liveDemoType: 'playstore' | 'apk' | 'sandbox' | 'architecture';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  colorType: 'primary' | 'secondary' | 'tertiary' | 'neutral';
  description: string;
  skills: string[];
  metricLabel: string;
  metricValue: string;
}

export interface Milestone {
  id: string;
  title: string;
  period: string;
  periodBadgeColor?: 'tertiary' | 'secondary' | 'neutral';
  subtitle: string;
  subtitleColor?: 'primary' | 'secondary' | 'tertiary';
  description: string;
  tags: string[];
  nodeColor: 'primary' | 'secondary' | 'tertiary';
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    location: string;
  };
  summary: string;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  experience: {
    role: string;
    company: string;
    type: string;
    period: string;
    points: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    score: string;
    details?: string;
  }[];
  certifications: string[];
}
