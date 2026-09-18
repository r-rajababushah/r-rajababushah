import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [interactiveTab, setInteractiveTab] = useState<'overview' | 'simulator'>('overview');

  // Simulator state for HomeCare
  const [selectedService, setSelectedService] = useState('AC Deep Clean & Repair');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Simulator state for Dice Roller
  const [diceValues, setDiceValues] = useState<number[]>([4, 6]);
  const [isRolling, setIsRolling] = useState(false);

  // Simulator state for AlgoVisualizer
  const [arrayBars, setArrayBars] = useState<number[]>([45, 12, 85, 32, 64, 91, 23, 76]);
  const [algoStep, setAlgoStep] = useState(0);

  if (!project) return null;

  const handleRollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      setDiceValues([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]);
      setIsRolling(false);
    }, 400);
  };

  const handleSortStep = () => {
    const arr = [...arrayBars];
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        break;
      }
    }
    if (!swapped) {
      // Reset if sorted
      setArrayBars([52, 19, 88, 31, 67, 95, 24, 73]);
      setAlgoStep(0);
    } else {
      setArrayBars(arr);
      setAlgoStep((prev) => prev + 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0f131c] rounded-2xl border border-[#3d494c]/60 shadow-2xl flex flex-col overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#3d494c]/40 bg-[#181c24]">
          <div className="flex items-center gap-3">
            <span className="font-['JetBrains_Mono',monospace] text-xs px-2.5 py-1 rounded bg-[#06b6d4] text-[#00424f] font-semibold">
              {project.categoryLabel}
            </span>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[20px] font-bold text-[#dfe2ee]">
                {project.title}
              </h3>
              <p className="font-['JetBrains_Mono',monospace] text-xs text-[#869397]">
                {project.version} • {project.ratingOrStat.text}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-[#0a0e16] p-1 rounded-lg border border-[#3d494c]/30">
              <button
                onClick={() => setInteractiveTab('overview')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  interactiveTab === 'overview'
                    ? 'bg-[#262a33] text-[#4cd7f6] font-semibold'
                    : 'text-[#869397] hover:text-[#dfe2ee]'
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setInteractiveTab('simulator')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  interactiveTab === 'simulator'
                    ? 'bg-[#262a33] text-[#4fdbc8] font-semibold'
                    : 'text-[#869397] hover:text-[#dfe2ee]'
                }`}
              >
                Live Preview
              </button>
            </div>

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
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-140px)] bg-[#0f131c] space-y-6">
          {/* Media Header */}
          <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden border border-[#3d494c]/40 bg-[#0a0e16]">
            <img
              src={project.image}
              alt={project.altText}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
              {project.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-[#0a0e16]/80 backdrop-blur-md text-xs font-['JetBrains_Mono',monospace] text-[#4cd7f6] border border-[#3d494c]/40"
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {interactiveTab === 'overview' ? (
            <div className="space-y-5">
              <div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-semibold text-[#dfe2ee] mb-1.5">
                  System Architecture &amp; Implementation
                </h4>
                <p className="font-['Inter',sans-serif] text-sm text-[#bcc9cd] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.architectureDetails && (
                <div className="bg-[#181c24] p-4 sm:p-5 rounded-xl border border-[#3d494c]/30 space-y-2.5">
                  <span className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold block">
                    Engineering Highlights
                  </span>
                  <ul className="space-y-2">
                    {project.architectureDetails.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dfe2ee]"
                      >
                        <span className="material-symbols-outlined text-[#4fdbc8] text-[16px] mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="font-['JetBrains_Mono',monospace] text-xs uppercase tracking-wider text-[#869397] font-semibold block mb-2">
                  Integrated Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-[#181c24] text-[#4cd7f6] font-['JetBrains_Mono',monospace] text-xs border border-[#3d494c]/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#181c24] p-4 sm:p-6 rounded-xl border border-[#3d494c]/30 space-y-4">
              {project.id === 'homecare' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30">
                    <span className="text-sm font-semibold text-[#dfe2ee]">
                      Compose Booking Flow Simulator
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">
                      Offline-First Room Sync: Active
                    </span>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-['JetBrains_Mono',monospace] text-[#bcc9cd]">
                      Select Required Service:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['AC Deep Clean & Repair', 'Washing Machine Motor', 'Plumbing Diagnostics', 'Electrical Safety'].map(
                        (srv) => (
                          <button
                            key={srv}
                            onClick={() => {
                              setSelectedService(srv);
                              setBookingSuccess(false);
                            }}
                            className={`p-2.5 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                              selectedService === srv
                                ? 'bg-[#06b6d4]/20 border-[#4cd7f6] text-[#4cd7f6]'
                                : 'bg-[#0f131c] border-[#3d494c]/30 text-[#bcc9cd]'
                            }`}
                          >
                            {srv}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setBookingSuccess(true)}
                    className="w-full py-2.5 rounded-lg bg-[#4cd7f6] text-[#003640] font-semibold text-xs hover:bg-[#acedff] transition-colors cursor-pointer"
                  >
                    Simulate Instant Room DB Dispatch
                  </button>
                  {bookingSuccess && (
                    <div className="p-3 rounded-lg bg-[#4fdbc8]/15 border border-[#4fdbc8]/30 font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>Dispatched &amp; Cached in SQLite Room DAO: {selectedService}</span>
                    </div>
                  )}
                </div>
              )}

              {project.id === 'dice-roller' && (
                <div className="text-center space-y-4 py-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30">
                    <span className="text-sm font-semibold text-[#dfe2ee]">
                      Canvas API Physics Loop Simulator
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">
                      60 FPS Vector DrawScope
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-6 py-4">
                    {diceValues.map((v, i) => (
                      <div
                        key={i}
                        className={`w-20 h-20 rounded-2xl bg-[#0f131c] border-2 border-[#c0c1ff] shadow-[0_0_20px_rgba(192,193,255,0.25)] flex items-center justify-center text-3xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#c0c1ff] transition-transform duration-300 ${
                          isRolling ? 'rotate-180 scale-90' : 'rotate-0 scale-100'
                        }`}
                      >
                        {v}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleRollDice}
                    disabled={isRolling}
                    className="px-6 py-2.5 rounded-lg bg-[#3131c0] text-[#e1e0ff] font-semibold text-xs hover:bg-[#2f2ebe] transition-all cursor-pointer shadow-lg"
                  >
                    {isRolling ? 'Simulating Collision...' : 'Trigger Kinetic Dice Roll'}
                  </button>
                  <p className="font-['JetBrains_Mono',monospace] text-xs text-[#869397]">
                    Accelerometer Haptic Waveform Dispatched • Sum: {diceValues[0] + diceValues[1]}
                  </p>
                </div>
              )}

              {project.id === 'algovisualizer' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30">
                    <span className="text-sm font-semibold text-[#dfe2ee]">
                      Coroutine Frame-by-Frame Sorting Execution
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">
                      Step {algoStep} • State Rollback Ready
                    </span>
                  </div>
                  <div className="h-32 flex items-end justify-center gap-2 bg-[#0f131c] p-3 rounded-lg border border-[#3d494c]/30">
                    {arrayBars.map((val, idx) => (
                      <div
                        key={idx}
                        style={{ height: `${val}%` }}
                        className="w-8 rounded-t bg-gradient-to-t from-[#06b6d4] to-[#4fdbc8] flex items-center justify-center text-[10px] font-['JetBrains_Mono',monospace] text-[#003640] font-bold transition-all duration-300"
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={handleSortStep}
                      className="px-4 py-2 rounded-lg bg-[#4cd7f6] text-[#003640] font-semibold text-xs hover:bg-[#acedff] transition-colors cursor-pointer"
                    >
                      Step BubbleSort Execution
                    </button>
                    <button
                      onClick={() => {
                        setArrayBars([85, 45, 91, 12, 64, 32, 76, 23]);
                        setAlgoStep(0);
                      }}
                      className="px-3 py-2 rounded-lg bg-[#262a33] text-[#bcc9cd] font-semibold text-xs hover:text-[#dfe2ee] transition-colors cursor-pointer"
                    >
                      Randomize State
                    </button>
                  </div>
                </div>
              )}

              {project.id === 'smartcampus' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[#3d494c]/30">
                    <span className="text-sm font-semibold text-[#dfe2ee]">
                      Python FastAPI Academic Companion Demo
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-xs text-[#4fdbc8]">
                      JWT Auth Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#0f131c] p-3 rounded-lg border border-[#3d494c]/30">
                      <span className="text-[11px] font-['JetBrains_Mono',monospace] text-[#869397] uppercase block mb-1">
                        Upcoming Lab Deadline
                      </span>
                      <span className="text-sm font-semibold text-[#dfe2ee] block">
                        Distributed Systems Lab #4
                      </span>
                      <span className="text-xs text-[#4cd7f6]">Due Tomorrow at 11:59 PM</span>
                    </div>
                    <div className="bg-[#0f131c] p-3 rounded-lg border border-[#3d494c]/30">
                      <span className="text-[11px] font-['JetBrains_Mono',monospace] text-[#869397] uppercase block mb-1">
                        Projected CGPA
                      </span>
                      <span className="text-xl font-bold text-[#4fdbc8]">8.84 / 10.0</span>
                      <span className="text-xs text-[#bcc9cd]">Semester 6 Forecast</span>
                    </div>
                  </div>
                  <p className="font-['Inter',sans-serif] text-xs text-[#bcc9cd]">
                    Microservice scrapes syllabus portal in background daemon, syncing calendars with Android AlarmManager.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#3d494c]/40 bg-[#181c24] flex items-center justify-between">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4cd7f6] hover:underline"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            <span>Browse GitHub Repo</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#262a33] text-[#dfe2ee] font-semibold text-xs hover:bg-[#353942] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
