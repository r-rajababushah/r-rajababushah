import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Summer 2025 Android Internship Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rajababushah.in@gmail.com');
    setCopyEmailSuccess(true);
    setTimeout(() => setCopyEmailSuccess(false), 2000);
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-8 py-16 relative overflow-hidden scroll-mt-20">
      {/* Ambient backdrops */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#4cd7f6]/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#4cd7f6] mb-1 font-semibold">
            Initiate Connection
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] sm:text-[36px] font-bold text-[#dfe2ee] tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="font-['Inter',sans-serif] text-[15px] leading-[1.65] text-[#bcc9cd] mt-2">
            Seeking impactful Summer 2025 engineering internships, Android contracting roles, or innovative open-source partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Direct Coordinates Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Availability Callout Card */}
            <div className="p-6 rounded-2xl bg-[#1c2028] shadow-md border border-[#3d494c]/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fdbc8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4fdbc8]"></span>
                </span>
                <span className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#4fdbc8] font-semibold">
                  Active Status
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-semibold text-[#dfe2ee] mb-2">
                Available for Summer 2025 Internships
              </h3>
              <p className="font-['Inter',sans-serif] text-[13px] leading-[1.6] text-[#bcc9cd]">
                Prepared to relocate or operate globally remote. Ready to contribute production Kotlin code from Day 1.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="p-6 rounded-2xl bg-[#1c2028] shadow-md border border-[#3d494c]/30 flex flex-col space-y-4">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#262a33] flex items-center justify-center text-[#4cd7f6] shrink-0 border border-[#3d494c]/30">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#869397] uppercase font-semibold">
                      Direct Email
                    </span>
                    <a
                      href="mailto:rajababushah.in@gmail.com"
                      className="font-['Inter',sans-serif] text-sm text-[#dfe2ee] truncate hover:text-[#4cd7f6] transition-colors"
                    >
                      rajababushah.in@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2 py-1 rounded bg-[#262a33] hover:bg-[#31353e] text-xs font-['JetBrains_Mono',monospace] text-[#bcc9cd] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copyEmailSuccess ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#262a33] flex items-center justify-center text-[#c0c1ff] shrink-0 border border-[#3d494c]/30">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#869397] uppercase font-semibold">
                    Location / Timezone
                  </span>
                  <span className="font-['Inter',sans-serif] text-sm text-[#dfe2ee]">
                    India (IST • UTC +5:30)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#262a33] flex items-center justify-center text-[#4fdbc8] shrink-0 border border-[#3d494c]/30">
                  <span className="material-symbols-outlined text-[20px]">link</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#869397] uppercase font-semibold">
                    Network Profiles
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <a
                      className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6] hover:underline"
                      href="https://github.com/r-rajababushah"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @rajababu-shah
                    </a>
                    <span className="text-[#869397]">•</span>
                    <a
                      className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6] hover:underline"
                      href="https://linkedin.com/in/rajababu-shah"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      /in/rajababu-shah
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Quote Card */}
            <div className="p-4 rounded-xl bg-[#181c24] border border-[#3d494c]/30 flex items-center gap-3 text-[#bcc9cd] font-['JetBrains_Mono',monospace] text-xs">
              <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">terminal</span>
              <span>“Clean code is not written by luck; it is drafted with discipline.”</span>
            </div>
          </div>

          {/* Interactive Contact Form (7 columns) */}
          <div className="lg:col-span-7">
            <form
              className="h-full p-6 sm:p-8 rounded-2xl bg-[#1c2028] shadow-xl border border-[#3d494c]/30 flex flex-col justify-between space-y-6"
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
            >
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[20px] sm:text-[22px] font-semibold text-[#dfe2ee] mb-1">
                  Send a Message
                </h3>
                <p className="font-['Inter',sans-serif] text-[13px] text-[#bcc9cd] mb-6">
                  Responses typically within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <label
                        className="font-['JetBrains_Mono',monospace] text-[11px] text-[#dfe2ee] uppercase tracking-wider font-medium"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0a0e16] text-[#dfe2ee] placeholder:text-[#869397] text-sm border border-[#3d494c]/30 focus:outline-none focus:border-[#4cd7f6] focus:bg-[#181c24] transition-all"
                        id="name"
                        placeholder="Sundar Pichai"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <label
                        className="font-['JetBrains_Mono',monospace] text-[11px] text-[#dfe2ee] uppercase tracking-wider font-medium"
                        htmlFor="email"
                      >
                        Your Email
                      </label>
                      <input
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0a0e16] text-[#dfe2ee] placeholder:text-[#869397] text-sm border border-[#3d494c]/30 focus:outline-none focus:border-[#4cd7f6] focus:bg-[#181c24] transition-all"
                        id="email"
                        placeholder="sundar@google.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label
                      className="font-['JetBrains_Mono',monospace] text-[11px] text-[#dfe2ee] uppercase tracking-wider font-medium"
                      htmlFor="subject"
                    >
                      Subject / Inquiry Type
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0a0e16] text-[#dfe2ee] text-sm border border-[#3d494c]/30 focus:outline-none focus:border-[#4cd7f6] focus:bg-[#181c24] transition-all"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option className="bg-[#0a0e16]" value="Summer 2025 Android Internship Inquiry">
                        Summer 2025 Android Internship Inquiry
                      </option>
                      <option className="bg-[#0a0e16]" value="Freelance / Mobile Project Contracting">
                        Freelance / Mobile Project Contracting
                      </option>
                      <option className="bg-[#0a0e16]" value="Open Source / Technical Collaboration">
                        Open Source / Technical Collaboration
                      </option>
                      <option className="bg-[#0a0e16]" value="General Networking">
                        General Networking
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label
                      className="font-['JetBrains_Mono',monospace] text-[11px] text-[#dfe2ee] uppercase tracking-wider font-medium"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0a0e16] text-[#dfe2ee] placeholder:text-[#869397] text-sm border border-[#3d494c]/30 focus:outline-none focus:border-[#4cd7f6] focus:bg-[#181c24] transition-all resize-none"
                      id="message"
                      placeholder="Hi Rajababu, we loved your HomeCare Solutions app and would like to discuss our upcoming Android engineering internship..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit CTA & Feedback */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4cd7f6] text-[#003640] font-semibold text-sm transition-all hover:bg-[#acedff] shadow-lg hover:shadow-cyan-500/30 cursor-pointer disabled:opacity-50 active:scale-95"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Message'}</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>

                {isSubmitted && (
                  <div
                    className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8] flex items-center gap-1.5 animate-pulse bg-[#4fdbc8]/10 px-3 py-1.5 rounded-lg border border-[#4fdbc8]/20"
                    id="form-feedback"
                  >
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Payload dispatched! Acknowledged.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
