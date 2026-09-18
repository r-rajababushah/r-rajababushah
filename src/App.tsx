/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechnicalArsenal } from './components/TechnicalArsenal';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Timeline } from './components/Timeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'overview', el: document.getElementById('overview') },
        { id: 'about', el: document.getElementById('about') },
        { id: 'skills', el: document.getElementById('skills') },
        { id: 'projects', el: document.getElementById('featured-projects') },
        { id: 'experience', el: document.getElementById('experience') },
        { id: 'contact', el: document.getElementById('contact') },
      ];

      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el && sec.el.offsetTop <= scrollPosition) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0f131c] text-[#dfe2ee] min-h-screen flex flex-col selection:bg-[#4cd7f6] selection:text-[#003640]">
      {/* Fixed Navigation Header */}
      <Header onOpenResume={() => setResumeOpen(true)} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero Viewport with Interactive Kotlin Compose IDE */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Section 2: Technical Arsenal & About Me */}
        <TechnicalArsenal />

        {/* Section 3: Featured Works & Mobile Applications */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 4: Journey & Milestones Timeline */}
        <Timeline />

        {/* Section 5: Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
