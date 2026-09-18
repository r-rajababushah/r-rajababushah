import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'compose' | 'fullstack'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'compose') return p.category === 'compose';
    if (activeFilter === 'fullstack') return p.category === 'fullstack';
    return true;
  });

  return (
    <section id="featured-projects" className="w-full px-4 sm:px-8 py-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        {/* Section Title & Filter Indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#4cd7f6] mb-1 font-semibold">
              Engineered Applications
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#dfe2ee] tracking-tight">
              Featured Works &amp; Mobile Applications
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#1c2028] border border-[#3d494c]/30 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded text-xs font-semibold font-['Inter',sans-serif] transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#06b6d4] text-[#00424f] shadow-sm'
                  : 'text-[#bcc9cd] hover:text-[#dfe2ee]'
              }`}
            >
              All Native
            </button>
            <button
              onClick={() => setActiveFilter('compose')}
              className={`px-3 py-1 rounded text-xs font-semibold font-['Inter',sans-serif] transition-all cursor-pointer ${
                activeFilter === 'compose'
                  ? 'bg-[#06b6d4] text-[#00424f] shadow-sm'
                  : 'text-[#bcc9cd] hover:text-[#dfe2ee]'
              }`}
            >
              Jetpack Compose
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1 rounded text-xs font-semibold font-['Inter',sans-serif] transition-all cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-[#06b6d4] text-[#00424f] shadow-sm'
                  : 'text-[#bcc9cd] hover:text-[#dfe2ee]'
              }`}
            >
              Full-Stack
            </button>
          </div>
        </div>

        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#1c2028] rounded-2xl overflow-hidden shadow-lg border border-[#3d494c]/30 flex flex-col transition-all duration-300 hover:shadow-cyan-500/10 hover:border-[#4cd7f6]/40 group"
              >
                {/* Media Header */}
                <div className="relative h-64 w-full bg-[#0a0e16] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={project.altText}
                    src={project.image}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c2028] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.badges.map((b, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full bg-[#0f131c]/90 backdrop-blur-md font-['JetBrains_Mono',monospace] text-[11px] sm:text-[12px] font-semibold border border-[#3d494c]/40 ${
                          b.type === 'primary'
                            ? 'text-[#4cd7f6]'
                            : b.type === 'secondary'
                            ? 'text-[#c0c1ff]'
                            : 'text-[#4fdbc8]'
                        }`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>

                  {/* Bottom-right Metric Tag */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#0a0e16]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[#dfe2ee] font-['JetBrains_Mono',monospace] text-[12px] border border-[#3d494c]/30 font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#4fdbc8]">
                      {project.ratingOrStat.icon}
                    </span>
                    <span>{project.ratingOrStat.text}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] sm:text-[24px] font-semibold text-[#dfe2ee] group-hover:text-[#4cd7f6] transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#869397] font-medium px-2 py-0.5 rounded bg-[#262a33]">
                        {project.version}
                      </span>
                    </div>

                    <p className="font-['Inter',sans-serif] text-[15px] leading-[1.65] text-[#bcc9cd]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#262a33] text-[#4cd7f6] font-['JetBrains_Mono',monospace] text-[12px] border border-[#3d494c]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="mt-8 pt-4 border-t border-[#3d494c]/30 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 font-['Inter',sans-serif] text-sm font-semibold text-[#4cd7f6] hover:underline cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      <span>Code Repository</span>
                    </button>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#262a33] text-[#dfe2ee] font-['Inter',sans-serif] text-sm font-medium hover:bg-[#353942] hover:text-[#4cd7f6] border border-[#3d494c]/40 transition-all cursor-pointer active:scale-95 shadow-sm"
                    >
                      <span>{project.liveDemoTitle}</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
