import React from 'react';
import { MILESTONES } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="w-full px-4 sm:px-8 py-16 bg-[#181c24] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto flex flex-col space-y-10">
        {/* Section Header */}
        <div className="text-center md:text-left">
          <div className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#4cd7f6] mb-1 font-semibold">
            Track Record &amp; Academic Rigor
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#dfe2ee] tracking-tight">
            Journey &amp; Milestones
          </h2>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative pl-6 sm:pl-8 space-y-10 before:content-[''] before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#31353e]">
          {MILESTONES.map((milestone) => {
            const isPrimary = milestone.nodeColor === 'primary';
            const isSecondary = milestone.nodeColor === 'secondary';

            return (
              <div key={milestone.id} className="relative group">
                {/* Glowing Node Anchor */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-[#262a33] flex items-center justify-center border border-[#3d494c]/50">
                  {isPrimary ? (
                    <div className="w-3 h-3 rounded-full bg-[#4cd7f6] ring-4 ring-[#4cd7f6]/20 animate-pulse"></div>
                  ) : isSecondary ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#c0c1ff]"></div>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4fdbc8]"></div>
                  )}
                </div>

                <div className="bg-[#1c2028] rounded-2xl p-6 sm:p-7 shadow-md border border-[#3d494c]/30 transition-all group-hover:bg-[#262a33] group-hover:border-[#3d494c]/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[20px] font-semibold text-[#dfe2ee]">
                      {milestone.title}
                    </span>
                    <span
                      className={`font-['JetBrains_Mono',monospace] text-[11px] px-2.5 py-0.5 rounded self-start sm:self-auto font-medium ${
                        milestone.periodBadgeColor === 'tertiary'
                          ? 'text-[#4fdbc8] bg-[#4fdbc8]/15 border border-[#4fdbc8]/20'
                          : 'text-[#bcc9cd] bg-[#262a33] border border-[#3d494c]/30'
                      }`}
                    >
                      {milestone.period}
                    </span>
                  </div>

                  <div
                    className={`font-['Inter',sans-serif] text-sm font-semibold mb-3 ${
                      milestone.subtitleColor === 'primary'
                        ? 'text-[#4cd7f6]'
                        : milestone.subtitleColor === 'secondary'
                        ? 'text-[#c0c1ff]'
                        : 'text-[#4fdbc8]'
                    }`}
                  >
                    {milestone.subtitle}
                  </div>

                  <p className="font-['Inter',sans-serif] text-[15px] leading-[1.65] text-[#bcc9cd] mb-4">
                    {milestone.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded bg-[#262a33] font-['JetBrains_Mono',monospace] text-[12px] text-[#bcc9cd] border border-[#3d494c]/30"
                      >
                        {tag}
                      </span>
                    ))}
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
