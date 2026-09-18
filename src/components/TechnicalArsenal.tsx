import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnicalArsenal: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-8 py-16 bg-[#181c24] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#4cd7f6] mb-1 font-semibold">
              Architecture &amp; Core Foundations
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#dfe2ee] tracking-tight">
              Technical Arsenal &amp; About Me
            </h2>
          </div>
          <div className="font-['JetBrains_Mono',monospace] text-[12px] sm:text-[13px] text-[#bcc9cd] flex items-center gap-2 bg-[#1c2028] px-3.5 py-1.5 rounded-lg border border-[#3d494c]/30">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">verified</span>
            <span>Computer Science Undergraduate • 8.8+ CGPA</span>
          </div>
        </div>

        {/* Bento Grid: Bio Card + 4 Tech Verticals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="skills">
          {/* Bio Card (5 columns) */}
          <div className="lg:col-span-5 bg-[#1c2028] rounded-2xl p-6 sm:p-8 shadow-md border border-[#3d494c]/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/10 flex items-center justify-center text-[#4cd7f6] border border-[#4cd7f6]/20">
                <span className="material-symbols-outlined text-[28px]">developer_mode_tv</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] sm:text-[24px] font-semibold text-[#dfe2ee]">
                Modern Native Specialization
              </h3>
              <p className="font-['Inter',sans-serif] text-[15px] leading-[1.65] text-[#bcc9cd]">
                Passionate about the internal mechanics of mobile runtimes, lifecycle state preservation, and low-latency reactive systems. My daily stack centers around declarative UI pipelines in Jetpack Compose, asynchronous stream dispatching via Coroutines and Flow, and modular MVVM/MVI architectures.
              </p>
              <p className="font-['Inter',sans-serif] text-[15px] leading-[1.65] text-[#bcc9cd]">
                Combining practical Android engineering with theoretical rigor in Operating Systems, Thread Safety, and Algorithm Optimization to architect resilient software.
              </p>
            </div>

            {/* Academic Badge Footer */}
            <div className="mt-8 p-4 rounded-xl bg-[#262a33] flex items-center justify-between border border-[#3d494c]/30">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4fdbc8] text-[22px]">school</span>
                <div className="flex flex-col">
                  <span className="font-['Inter',sans-serif] text-sm font-semibold text-[#dfe2ee]">
                    B.Tech in Computer Science
                  </span>
                  <span className="font-['JetBrains_Mono',monospace] text-xs text-[#bcc9cd]">
                    Class of 2026 • Lead DSC
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#4fdbc8]/15 font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8] font-semibold">
                Active
              </span>
            </div>
          </div>

          {/* Skills Grids (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat) => {
              const tagColorClass =
                cat.colorType === 'primary'
                  ? 'text-[#4cd7f6]'
                  : cat.colorType === 'secondary'
                  ? 'text-[#c0c1ff]'
                  : cat.colorType === 'tertiary'
                  ? 'text-[#4fdbc8]'
                  : 'text-[#dfe2ee]';

              const iconColorClass =
                cat.colorType === 'primary'
                  ? 'text-[#4cd7f6]'
                  : cat.colorType === 'secondary'
                  ? 'text-[#c0c1ff]'
                  : cat.colorType === 'tertiary'
                  ? 'text-[#4fdbc8]'
                  : 'text-[#4cd7f6]';

              const metricColorClass =
                cat.colorType === 'primary'
                  ? 'text-[#4cd7f6]'
                  : cat.colorType === 'secondary'
                  ? 'text-[#c0c1ff]'
                  : cat.colorType === 'tertiary'
                  ? 'text-[#4fdbc8]'
                  : 'text-[#4cd7f6]';

              return (
                <div
                  key={cat.id}
                  className="bg-[#1c2028] rounded-2xl p-6 shadow-sm border border-[#3d494c]/30 flex flex-col justify-between transition-all hover:bg-[#262a33] hover:border-[#3d494c]/60 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#dfe2ee]">
                        {cat.title}
                      </span>
                      <span className={`material-symbols-outlined ${iconColorClass} text-[20px]`}>
                        {cat.icon}
                      </span>
                    </div>
                    <p className="font-['Inter',sans-serif] text-[13px] text-[#bcc9cd] mb-4">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-md bg-[#262a33] ${tagColorClass} font-['JetBrains_Mono',monospace] text-[12px] font-medium border border-[#3d494c]/30 group-hover:border-[#3d494c]/50`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#3d494c]/30 flex items-center justify-between">
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#869397] uppercase">
                      {cat.metricLabel}
                    </span>
                    <span
                      className={`font-['JetBrains_Mono',monospace] text-[12px] font-semibold ${metricColorClass}`}
                    >
                      {cat.metricValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
