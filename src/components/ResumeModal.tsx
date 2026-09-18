import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'formatted' | 'plaintext' | 'json'>('formatted');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawMarkdown = `# ${RESUME_DATA.name}
${RESUME_DATA.contact.phone} | ${RESUME_DATA.contact.email} | ${RESUME_DATA.contact.githubHandle} | ${RESUME_DATA.contact.linkedinHandle}

## PROFESSIONAL SUMMARY
${RESUME_DATA.summary}

## TECHNICAL SKILLS
- Languages: ${RESUME_DATA.skills.languages.join(', ')}
- Frontend: ${RESUME_DATA.skills.frontend.join(', ')}
- Backend: ${RESUME_DATA.skills.backend.join(', ')}
- Database: ${RESUME_DATA.skills.database.join(', ')}
- Tools: ${RESUME_DATA.skills.tools.join(', ')}

## EXPERIENCE
${RESUME_DATA.experience
  .map(
    (exp) => `### ${exp.role} — ${exp.company} (${exp.period})
${exp.type}
${exp.points.map((p) => `- ${p}`).join('\n')}`
  )
  .join('\n\n')}

## EDUCATION
${RESUME_DATA.education
  .map(
    (edu) => `### ${edu.degree}
${edu.institution} (${edu.period}) — ${edu.score}`
  )
  .join('\n\n')}

## CERTIFICATIONS
${RESUME_DATA.certifications.map((c) => `- ${c}`).join('\n')}
`;

  const handleCopy = () => {
    const content = activeTab === 'json' ? JSON.stringify(RESUME_DATA, null, 2) : rawMarkdown;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f131c] rounded-2xl border border-[#3d494c]/60 shadow-2xl flex flex-col overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#3d494c]/40 bg-[#181c24]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#4cd7f6]/15 text-[#4cd7f6] flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-sm">
              $
            </span>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[20px] font-bold text-[#dfe2ee]">
                Inspect Resume
              </h3>
              <p className="font-['JetBrains_Mono',monospace] text-xs text-[#bcc9cd]">
                Verified Credentials • Rajababu Shah
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="hidden sm:flex items-center bg-[#0a0e16] p-1 rounded-lg border border-[#3d494c]/30 mr-2">
              <button
                onClick={() => setActiveTab('formatted')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'formatted'
                    ? 'bg-[#262a33] text-[#4cd7f6] font-semibold'
                    : 'text-[#869397] hover:text-[#dfe2ee]'
                }`}
              >
                Document
              </button>
              <button
                onClick={() => setActiveTab('plaintext')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'plaintext'
                    ? 'bg-[#262a33] text-[#4cd7f6] font-semibold'
                    : 'text-[#869397] hover:text-[#dfe2ee]'
                }`}
              >
                Markdown
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  activeTab === 'json'
                    ? 'bg-[#262a33] text-[#4cd7f6] font-semibold'
                    : 'text-[#869397] hover:text-[#dfe2ee]'
                }`}
              >
                JSON
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-[#262a33] text-[#dfe2ee] hover:text-[#4cd7f6] transition-colors border border-[#3d494c]/30 text-xs font-['JetBrains_Mono',monospace] flex items-center gap-1.5 cursor-pointer"
              title="Copy to clipboard"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span className="hidden md:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#262a33] text-[#dfe2ee] hover:text-[#4cd7f6] transition-colors border border-[#3d494c]/30 text-xs font-['JetBrains_Mono',monospace] flex items-center gap-1.5 cursor-pointer"
              title="Print document"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span className="hidden md:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#262a33] text-[#bcc9cd] hover:text-[#dfe2ee] hover:bg-[#353942] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(90vh-140px)] bg-[#0f131c]">
          {activeTab === 'formatted' ? (
            <div className="max-w-3xl mx-auto bg-[#181c24] p-6 sm:p-10 rounded-xl border border-[#3d494c]/30 shadow-inner space-y-6 text-[#dfe2ee]">
              {/* Header */}
              <div className="text-center pb-4 border-b border-[#3d494c]/40">
                <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl font-bold tracking-tight text-[#dfe2ee]">
                  {RESUME_DATA.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6]">
                  <span>{RESUME_DATA.contact.phone}</span>
                  <span className="text-[#3d494c]">•</span>
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline">
                    {RESUME_DATA.contact.email}
                  </a>
                  <span className="text-[#3d494c]">•</span>
                  <a
                    href={RESUME_DATA.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {RESUME_DATA.contact.githubHandle}
                  </a>
                  <span className="text-[#3d494c]">•</span>
                  <a
                    href={RESUME_DATA.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {RESUME_DATA.contact.linkedinHandle}
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#4cd7f6] font-bold mb-2 pb-1 border-b border-[#3d494c]/30">
                  Professional Summary
                </h2>
                <p className="font-['Inter',sans-serif] text-sm text-[#bcc9cd] leading-relaxed">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#4cd7f6] font-bold mb-2 pb-1 border-b border-[#3d494c]/30">
                  Technical Skills
                </h2>
                <div className="space-y-1.5 font-['Inter',sans-serif] text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-[#dfe2ee]">Languages: </span>
                    <span className="text-[#bcc9cd]">{RESUME_DATA.skills.languages.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#dfe2ee]">Frontend: </span>
                    <span className="text-[#bcc9cd]">{RESUME_DATA.skills.frontend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#dfe2ee]">Backend: </span>
                    <span className="text-[#bcc9cd]">{RESUME_DATA.skills.backend.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#dfe2ee]">Database: </span>
                    <span className="text-[#bcc9cd]">{RESUME_DATA.skills.database.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#dfe2ee]">Tools &amp; Platforms: </span>
                    <span className="text-[#bcc9cd]">{RESUME_DATA.skills.tools.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#4cd7f6] font-bold mb-3 pb-1 border-b border-[#3d494c]/30">
                  Work Experience
                </h2>
                <div className="space-y-4">
                  {RESUME_DATA.experience.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                        <span className="font-semibold text-[#dfe2ee]">
                          {exp.role} — <span className="text-[#4fdbc8]">{exp.company}</span>
                        </span>
                        <span className="font-['JetBrains_Mono',monospace] text-xs text-[#869397]">
                          {exp.period}
                        </span>
                      </div>
                      <div className="font-['Inter',sans-serif] text-xs text-[#c0c1ff] mb-1.5">
                        {exp.type}
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#bcc9cd]">
                        {exp.points.map((p, pIdx) => (
                          <li key={pIdx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#4cd7f6] font-bold mb-3 pb-1 border-b border-[#3d494c]/30">
                  Education
                </h2>
                <div className="space-y-3 text-sm">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <div>
                        <div className="font-semibold text-[#dfe2ee]">{edu.degree}</div>
                        <div className="text-xs text-[#bcc9cd]">{edu.institution}</div>
                        {edu.details && (
                          <div className="text-xs text-[#4fdbc8] mt-0.5">{edu.details}</div>
                        )}
                      </div>
                      <div className="font-['JetBrains_Mono',monospace] text-xs text-right sm:text-right shrink-0">
                        <span className="text-[#869397]">{edu.period}</span>
                        <span className="block text-[#4cd7f6] font-medium">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#4cd7f6] font-bold mb-2 pb-1 border-b border-[#3d494c]/30">
                  Certifications
                </h2>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#bcc9cd]">
                  {RESUME_DATA.certifications.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : activeTab === 'plaintext' ? (
            <pre className="font-['JetBrains_Mono',monospace] text-xs text-[#bcc9cd] p-4 bg-[#181c24] rounded-xl border border-[#3d494c]/30 overflow-x-auto leading-relaxed whitespace-pre-wrap">
              {rawMarkdown}
            </pre>
          ) : (
            <pre className="font-['JetBrains_Mono',monospace] text-xs text-[#4cd7f6] p-4 bg-[#181c24] rounded-xl border border-[#3d494c]/30 overflow-x-auto leading-relaxed">
              {JSON.stringify(RESUME_DATA, null, 2)}
            </pre>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#3d494c]/40 bg-[#181c24] flex items-center justify-between">
          <span className="font-['JetBrains_Mono',monospace] text-xs text-[#869397]">
            Status: Summer 2025 Internship Ready
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#06b6d4] text-[#00424f] font-semibold text-xs hover:bg-[#4cd7f6] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
