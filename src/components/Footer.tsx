import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0a0e16] border-t border-[#3d494c]/30 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4cd7f6]/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_rgba(76,215,246,0.6)]"></div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#dfe2ee]">
                Rajababu Shah
              </span>
            </div>
            <p className="font-['Inter',sans-serif] text-sm text-[#bcc9cd] max-w-md mt-1 leading-relaxed">
              Android Developer and Computer Science undergraduate building resilient, native mobile experiences, scalable architectural foundations, and modern high-performance tools.
            </p>
          </div>

          <div>
            <div className="font-['JetBrains_Mono',monospace] text-[11px] text-[#dfe2ee] uppercase tracking-wider mb-4 font-semibold">
              Architecture
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => scrollTo('#overview')}
                  className="text-sm text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer text-left"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#skills')}
                  className="text-sm text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer text-left"
                >
                  Technical Stack
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#featured-projects')}
                  className="text-sm text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer text-left"
                >
                  Native Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#experience')}
                  className="text-sm text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer text-left"
                >
                  Experience Log
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-['JetBrains_Mono',monospace] text-[11px] text-[#dfe2ee] uppercase tracking-wider mb-4 font-semibold">
              Connect
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="text-sm text-[#bcc9cd] hover:text-[#4fdbc8] flex items-center gap-1.5 transition-colors"
                  href="https://github.com/r-rajababushah"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">gh/</span>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-[#bcc9cd] hover:text-[#4fdbc8] flex items-center gap-1.5 transition-colors"
                  href="https://linkedin.com/in/rajababu-shah"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">in/</span>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-[#bcc9cd] hover:text-[#4fdbc8] flex items-center gap-1.5 transition-colors"
                  href="https://x.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">x/</span>
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors"
                  href="mailto:rajababushah.in@gmail.com"
                >
                  Encrypted Mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#3d494c]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-['JetBrains_Mono',monospace] text-xs text-[#bcc9cd]">
            © 2025 Rajababu Shah. Engineered with Kotlin &amp; Compose mindset.
          </span>
          <div className="flex items-center gap-4">
            <span className="font-['JetBrains_Mono',monospace] text-xs text-[#869397]">
              B.Tech CSE • Class of 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
