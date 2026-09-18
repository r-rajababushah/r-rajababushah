import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/portfolioData';
import myimg from './me.jpeg';

interface HeaderProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#featured-projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#0f131c]/95 backdrop-blur-xl border-b border-[#3d494c]/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
        : 'bg-[#0f131c]/80 backdrop-blur-xl border-b border-[#3d494c]/20'
        }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Logo & Identity */}
        <a
          href="#overview"
          onClick={(e) => handleScrollTo(e, '#overview')}
          className="flex items-center gap-3.5 group"
        >
          <img
            alt="Rajababu Shah Developer Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src={myimg}
            style={{ borderRadius: "15" }}
          />
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold tracking-tight text-[#dfe2ee] group-hover:text-[#4cd7f6] transition-colors">
              Rajababu Shah
            </span>
            <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#4cd7f6] tracking-wider uppercase font-semibold">
              Android • B.Tech CSE
            </span>
          </div>
        </a>

        {/* Availability Badge */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#181c24] border border-[#3d494c]/30 shadow-[0_0_12px_rgba(6,182,212,0.1)]">
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fdbc8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4fdbc8]"></span>
          </span>
          <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#4fdbc8] font-medium px-1">
            Available for Summer 2025 Internships
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[#0a0e16]/60 border border-[#3d494c]/20"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href.replace('#', '') ||
              (item.href === '#featured-projects' && activeSection === 'projects');

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${isActive
                  ? 'bg-[#06b6d4] text-[#00424f] shadow-[0_0_16px_rgba(6,182,212,0.3)] font-semibold'
                  : 'text-[#bcc9cd] hover:text-[#dfe2ee] hover:bg-[#262a33]'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenResume}
            id="inspect-resume-btn"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#262a33] border border-[#3d494c]/40 text-[#dfe2ee] text-sm font-medium hover:border-[#4cd7f6] hover:text-[#4cd7f6] transition-all shadow-[0_0_12px_rgba(76,215,246,0.15)] cursor-pointer active:scale-95"
            title="Inspect formatted resume"
          >
            <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6] font-semibold">$</span>
            <span className="hidden sm:inline">Inspect Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-8 h-8 rounded-full bg-[#4cd7f6] flex items-center justify-center text-[#003640] hover:bg-[#acedff] transition-colors shadow-sm"
            title="Contact Rajababu"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#bcc9cd] hover:text-[#dfe2ee] hover:bg-[#262a33]"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181c24] border-b border-[#3d494c]/40 px-6 py-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 py-1 mb-2 text-xs text-[#4fdbc8] font-['JetBrains_Mono',monospace]">
            <span className="w-2 h-2 rounded-full bg-[#4fdbc8] animate-pulse"></span>
            Available for Summer 2025 Internships
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="px-3 py-2 rounded-lg text-[#bcc9cd] hover:text-[#dfe2ee] hover:bg-[#262a33] text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#4cd7f6] text-[#003640] font-semibold text-sm"
          >
            <span className="font-['JetBrains_Mono',monospace]">$</span>
            <span>View Full Resume</span>
          </button>
        </div>
      )}
    </header>
  );
};
