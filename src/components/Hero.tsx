import React, { useState } from 'react';
import { CODE_SNIPPETS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'profile' | 'theme'>('portfolio');
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildTime, setBuildTime] = useState('0.42s');
  const [copied, setCopied] = useState(false);

  const handleSimulateBuild = () => {
    setIsBuilding(true);
    setTimeout(() => {
      const time = (0.35 + Math.random() * 0.15).toFixed(2);
      setBuildTime(`${time}s`);
      setIsBuilding(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="overview" className="relative w-full overflow-hidden px-4 sm:px-8 py-12 lg:py-28 pt-24 lg:pt-32">
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#4cd7f6]/10 blur-[130px] rounded-full"></div>
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[400px] h-[350px] bg-[#3131c0]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Highlighting Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262a33] shadow-md border border-[#3d494c]/30">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4fdbc8] animate-pulse"></span>
            <span className="font-['JetBrains_Mono',monospace] text-[11px] uppercase tracking-wider text-[#4fdbc8] font-semibold">
              3rd-Year B.Tech CSE • Android Specialist
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.12] font-extrabold tracking-tight text-[#dfe2ee]">
            Building Resilient Mobile Experiences.
            <span className="block bg-gradient-to-r from-[#4cd7f6] via-[#06b6d4] to-[#4fdbc8] bg-clip-text text-transparent">
              Rajababu Shah
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] text-[16px] sm:text-[18px] leading-[1.65] text-[#bcc9cd] max-w-2xl">
            Crafting performant native Android architectures and robust software systems with modern reactive toolchains in Kotlin, Jetpack Compose, Coroutines, and Python.
          </p>

          {/* Metric Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
            <div className="bg-[#1c2028] p-4 rounded-xl shadow-sm border border-[#3d494c]/30 flex flex-col transition-all hover:border-[#4cd7f6]/40">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[28px] font-bold text-[#4cd7f6]">
                3+
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bcc9cd] uppercase tracking-wider mt-1">
                Production Apps
              </span>
            </div>

            <div className="bg-[#1c2028] p-4 rounded-xl shadow-sm border border-[#3d494c]/30 flex flex-col transition-all hover:border-[#4fdbc8]/40">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[28px] font-bold text-[#4fdbc8]">
                15+
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bcc9cd] uppercase tracking-wider mt-1">
                Shipped Projects
              </span>
            </div>

            <div className="bg-[#1c2028] p-4 rounded-xl shadow-sm border border-[#3d494c]/30 flex flex-col transition-all hover:border-[#c0c1ff]/40">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[28px] font-bold text-[#c0c1ff]">
                Top 5%
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bcc9cd] uppercase tracking-wider mt-1">
                Univ. Coders
              </span>
            </div>

            <div className="bg-[#1c2028] p-4 rounded-xl shadow-sm border border-[#3d494c]/30 flex flex-col transition-all hover:border-[#dfe2ee]/40">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[28px] font-bold text-[#dfe2ee]">
                OS • CI
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#bcc9cd] uppercase tracking-wider mt-1">
                OSS Contributor
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4 w-full sm:w-auto">
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#06b6d4] text-[#00424f] font-semibold text-sm transition-all duration-300 hover:bg-[#4cd7f6] shadow-lg hover:shadow-cyan-500/25 cursor-pointer active:scale-95"
              href="#featured-projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#featured-projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View Projects</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>

            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#262a33] text-[#dfe2ee] font-medium text-sm transition-all hover:bg-[#353942] border border-[#3d494c]/40 cursor-pointer active:scale-95"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>Contact Me</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#1c2028] text-[#bcc9cd] font-medium text-sm transition-all hover:text-[#dfe2ee] hover:bg-[#262a33] border border-[#3d494c]/20 cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Android Compose IDE Card */}
        <div className="lg:col-span-5 w-full mt-8 lg:mt-0">
          <div className="relative rounded-2xl bg-[#0a0e16] p-4 sm:p-6 shadow-2xl overflow-hidden border border-[#3d494c]/40 group">
            {/* Ambient card spotlight */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#4cd7f6]/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Window Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#3d494c]/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#4fdbc8] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#4cd7f6] inline-block"></span>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center gap-1 bg-[#1c2028] p-0.5 rounded-lg border border-[#3d494c]/30">
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-['JetBrains_Mono',monospace] transition-colors ${
                    activeTab === 'portfolio'
                      ? 'bg-[#262a33] text-[#4cd7f6] font-semibold'
                      : 'text-[#869397] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[13px]">smartphone</span>
                  <span>Portfolio.kt</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-['JetBrains_Mono',monospace] transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-[#262a33] text-[#c0c1ff] font-semibold'
                      : 'text-[#869397] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span>Profile.kt</span>
                </button>
                <button
                  onClick={() => setActiveTab('theme')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-['JetBrains_Mono',monospace] transition-colors ${
                    activeTab === 'theme'
                      ? 'bg-[#262a33] text-[#4fdbc8] font-semibold'
                      : 'text-[#869397] hover:text-[#dfe2ee]'
                  }`}
                >
                  <span>Theme.kt</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="p-1 text-[#869397] hover:text-[#dfe2ee] transition-colors text-xs"
                  title="Copy code"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                </button>
                <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#869397] font-semibold">
                  API 34
                </span>
              </div>
            </div>

            {/* Kotlin Code Block */}
            <div className="relative">
              <pre className="font-['JetBrains_Mono',monospace] text-[12px] sm:text-[13px] text-[#bcc9cd] overflow-x-auto leading-relaxed selection:bg-[#4cd7f6]/30 max-h-[340px] p-2 bg-[#0f131c]/50 rounded-lg">
                {activeTab === 'portfolio' ? (
                  <code>
                    <span className="text-[#4fdbc8]">@Composable</span>{'\n'}
                    <span className="text-[#4cd7f6]">fun</span> <span className="text-[#c0c1ff]">RajababuPortfolio</span>() {'{'}{'\n'}
                    {'    '}<span className="text-[#869397]">// Declarative Reactive State</span>{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> engineerState <span className="text-[#4cd7f6]">by</span> remember {'{'}{'\n'}
                    {'        '}mutableStateOf({'\n'}
                    {'            '}EngineerProfile({'\n'}
                    {'                '}name = <span className="text-[#4fdbc8]">"Rajababu Shah"</span>,{'\n'}
                    {'                '}role = <span className="text-[#4fdbc8]">"Android Engineer"</span>,{'\n'}
                    {'                '}stack = listOf(<span className="text-[#4fdbc8]">"Compose"</span>, <span className="text-[#4fdbc8]">"Coroutines"</span>, <span className="text-[#4fdbc8]">"Hilt"</span>),{'\n'}
                    {'                '}openToWork = <span className="text-[#c0c1ff]">true</span>{'\n'}
                    {'            '}){'\n'}
                    {'        '}){'\n'}
                    {'    '}{'}'}{'\n\n'}
                    {'    '}Scaffold({'\n'}
                    {'        '}topBar = {'{'} GlassmorphicHeader(engineerState.name) {'}'}{'\n'}
                    {'    '}) {'{'} innerPadding -&gt;{'\n'}
                    {'        '}LazyColumn({'\n'}
                    {'            '}modifier = Modifier.padding(innerPadding),{'\n'}
                    {'            '}verticalArrangement = Arrangement.spacedBy(<span className="text-[#4cd7f6]">16.dp</span>){'\n'}
                    {'        '}) {'{'}{'\n'}
                    {'            '}items(engineerState.stack) {'{'} tech -&gt;{'\n'}
                    {'                '}TechBadge(label = tech, status = <span className="text-[#4fdbc8]">"Mastered"</span>){'\n'}
                    {'            '}{'}'}{'\n'}
                    {'        '}{'}'}{'\n'}
                    {'    '}{'}'}{'\n'}
                    {'}'}
                  </code>
                ) : activeTab === 'profile' ? (
                  <code>
                    <span className="text-[#4cd7f6]">data class</span> <span className="text-[#c0c1ff]">EngineerProfile</span>({'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> name: <span className="text-[#4fdbc8]">String</span>,{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> role: <span className="text-[#4fdbc8]">String</span>,{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> stack: <span className="text-[#4fdbc8]">List&lt;String&gt;</span>,{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> openToWork: <span className="text-[#c0c1ff]">Boolean</span> = <span className="text-[#4cd7f6]">true</span>,{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> cgpa: <span className="text-[#c0c1ff]">Double</span> = <span className="text-[#4fdbc8]">8.8</span>,{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> solvedProblems: <span className="text-[#c0c1ff]">Int</span> = <span className="text-[#4fdbc8]">450</span>{'\n'}
                    ){'\n\n'}
                    <span className="text-[#4cd7f6]">val</span> Rajababu = EngineerProfile({'\n'}
                    {'    '}name = <span className="text-[#4fdbc8]">"Rajababu Shah"</span>,{'\n'}
                    {'    '}role = <span className="text-[#4fdbc8]">"Android &amp; Systems Developer"</span>,{'\n'}
                    {'    '}stack = listOf({'\n'}
                    {'        '}<span className="text-[#4fdbc8]">"Jetpack Compose"</span>,{'\n'}
                    {'        '}<span className="text-[#4fdbc8]">"Coroutines &amp; Flow"</span>,{'\n'}
                    {'        '}<span className="text-[#4fdbc8]">"Dagger Hilt"</span>,{'\n'}
                    {'        '}<span className="text-[#4fdbc8]">"Room DB"</span>{'\n'}
                    {'    '}){'\n'}
                    )
                  </code>
                ) : (
                  <code>
                    <span className="text-[#4fdbc8]">@Composable</span>{'\n'}
                    <span className="text-[#4cd7f6]">fun</span> <span className="text-[#c0c1ff]">ObsidianCyberTheme</span>({'\n'}
                    {'    '}content: <span className="text-[#4fdbc8]">@Composable</span> () -&gt; <span className="text-[#c0c1ff]">Unit</span>{'\n'}
                    ) {'{'}{'\n'}
                    {'    '}<span className="text-[#4cd7f6]">val</span> colorScheme = darkColorScheme({'\n'}
                    {'        '}primary = Color(<span className="text-[#4cd7f6]">0xFF4CD7F6</span>),{'\n'}
                    {'        '}secondary = Color(<span className="text-[#c0c1ff]">0xFFC0C1FF</span>),{'\n'}
                    {'        '}tertiary = Color(<span className="text-[#4fdbc8]">0xFF4FDBC8</span>),{'\n'}
                    {'        '}background = Color(<span className="text-[#869397]">0xFF0F131C</span>),{'\n'}
                    {'        '}surface = Color(<span className="text-[#869397]">0xFF1C2028</span>){'\n'}
                    {'    '}){'\n\n'}
                    {'    '}MaterialTheme({'\n'}
                    {'        '}colorScheme = colorScheme,{'\n'}
                    {'        '}content = content{'\n'}
                    {'    '}){'\n'}
                    {'}'}
                  </code>
                )}
              </pre>
            </div>

            {/* Emulator Status Bar Footer with simulate build button */}
            <div className="mt-4 pt-3 flex items-center justify-between bg-[#181c24] px-4 py-2 rounded-lg border border-[#3d494c]/20">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isBuilding ? 'bg-[#ffb4ab] animate-spin' : 'bg-[#4fdbc8] animate-pulse'
                  }`}
                ></span>
                <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#4fdbc8] font-medium">
                  {isBuilding ? 'Building APK...' : `Build Successful (${buildTime})`}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSimulateBuild}
                  disabled={isBuilding}
                  className="px-2 py-0.5 rounded text-[11px] bg-[#262a33] text-[#4cd7f6] hover:bg-[#31353e] transition-colors font-['JetBrains_Mono',monospace] flex items-center gap-1 cursor-pointer"
                  title="Trigger Compose Rebuild"
                >
                  <span className="material-symbols-outlined text-[13px]">refresh</span>
                  <span>Sync</span>
                </button>
                <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#869397]">
                  Gradle 8.5 • Kotlin 2.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
