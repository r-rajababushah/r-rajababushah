import { Project, SkillCategory, Milestone, ResumeData } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1XdX0xvoXBxS83ec3rmar0StMNsdpVnlLuufftlklkjDGyXZSE-jxXnYn7CRWiXLzgNkL9o5dI-jtAEoP8dNNFErgyxAqhBR1Kw-tdlHcQK0cdJY_w_SJkfnwC3XHI3pYkwQkXncDRPN7mqlPYJHJWsKc9JGWUEIS8S1NVoFO2hE5ZcXztrOYPZBpxzi_q0mOe6w7umE-fSJPemKHMyicfqIbItfKNpyjzyL_uiDDIlO13YwqJfUzbh384";

export const PROJECTS: Project[] = [
  {
    id: 'homecare',
    title: 'HomeCare Solutions App',
    version: 'v2.4.0',
    category: 'compose',
    categoryLabel: 'Jetpack Compose',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZcSw5BgOMbbMPXyCQzcmTVmCG1oWADVxD4UEE_Mzz97d2VXMUinP0q8K_cVl8IRWKDbGUtoQ7yr5-rsWDcSFnfdzatweNszg4cNJn5LhgbXIBpxWS6HKh_xe-BiV47Fr-p2AUWk1RSAt5Lft7kkq8a2FrmMHLinwYhKpByLdzwc0Cp_yyrYC91p1eEqeBsnrOUGSHr5xfUsjRyWEguCi6nBIQZJj5mICVyTpzWkGIpSv_u1ZnXJY6',
    altText: 'Modern smartphone interface showing a sleek healthcare and home nursing service scheduling application with clean dark slate background, cyan appointment cards, patient vitals graph, and bottom navigation bar.',
    badges: [
      { label: 'Production Ready', type: 'primary' },
      { label: 'Google Play', type: 'tertiary' }
    ],
    ratingOrStat: { icon: 'star', text: '4.9 / 5.0' },
    description: 'Comprehensive mobile healthcare and on-demand home nursing booking platform. Architected with MVVM pattern, offline-first sync engine using Room DB, Firebase Authentication, and zero-latency real-time booking updates via Kotlin StateFlow.',
    architectureDetails: [
      'Clean Architecture with MVVM + Kotlin StateFlow/SharedFlow streams',
      'Offline-first caching layer powered by Room DB with Room Coroutines DAO',
      'Real-time Firestore synchronization for technician dispatch updates',
      'Modular feature packaging by domain layer and dependency injection with Hilt',
      'End-to-end multi-step scheduling stepper and dynamic repair photo attachments'
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Firebase Auth', 'Room DB', 'MVVM'],
    repoUrl: 'https://github.com/r-rajababushah/homecare-solutions-android',
    liveDemoTitle: 'Play Store Demo',
    liveDemoType: 'playstore'
  },
  {
    id: 'dice-roller',
    title: 'Custom Dice Roller & Game Engine',
    version: 'v1.2.1',
    category: 'compose',
    categoryLabel: 'Jetpack Compose',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW_HffiraIErfzXEgDPgch2vFMWwsvBivaOWDLIryCXIdqIIB9yC48a7Ws3TWW0g9fmc_le-nrqX3bnTFdwOW_AP_ofljV75sxwcS_786o_i9KJnub6NgpUmhPFNnHXC67HaQy5BmJju86TAt5DsQZ02UFrQq-D6VGrrW-lfAXVCsE2LzBgheZWNwuNfqJ8xc0C_YaB6hyq8I3cOcD8UdORs3SRMLrS7IwzEcuKWzkkWNqj-Seuuk8',
    altText: 'Physics simulation mobile screen rendering low poly glowing neon dice tumbling across a dark canvas with custom particle trails, vibration kinetic feedback indicators, and real-time velocity meters.',
    badges: [
      { label: 'Custom Canvas API', type: 'secondary' },
      { label: 'Physics Engine', type: 'tertiary' }
    ],
    ratingOrStat: { icon: 'star', text: '4.8 / 5.0' },
    description: 'High-performance 60fps mobile simulation engine utilizing Jetpack Compose Canvas API. Incorporates accelerometer-driven haptic feedback, custom synthesized spatial audio buffers, and collision physics vectors for tabletop gamers.',
    architectureDetails: [
      'Jetpack Compose Canvas DrawScope render loop locked at 60–120 FPS',
      'Kinetic rigid-body physics simulator with restitution and angular momentum',
      'SensorManager accelerometer listener dispatching via hardware vibration waveforms',
      'Custom spatial audio cues synchronized with contact vector points',
      'Zero external graphics libraries — 100% native Kotlin vector math'
    ],
    techStack: ['Kotlin', 'Canvas API', 'Hardware Haptics', 'Material 3'],
    repoUrl: 'https://github.com/r-rajababushah/compose-dice-physics-engine',
    liveDemoTitle: 'Interactive APK',
    liveDemoType: 'apk'
  },
  {
    id: 'algovisualizer',
    title: 'AlgoVisualizer Mobile',
    version: 'v3.0.1',
    category: 'native',
    categoryLabel: 'All Native',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVgCd35R5X5v1XEZHCHS4jXHENUv6VvFUx5bX1U7imCrdiYnTCyCRDl3fw9UzFOm5to2j_O9Th_Z4JWimtiD4hz7W_7KrVJGCCAfcdGTJrtA_2zkjlLmYMx8Dk-81iRvx4EWVe8ChhuBLx3CLpadpTbgttjkrh0fFW4Sd0lhEW0Ts7-8_ESrN1ieXJOxIW_nkEScmzYN_uoRZYhR6YRukwon0i3N3nAsfjo3_cm7_WQ-mg22WTWEFL',
    altText: 'High tech dark mode algorithm visualizer on a mobile screen displaying animated Dijkstra shortest path tree graph with cyan glowing nodes and dynamic sorting bar charts with step-by-step memory counter.',
    badges: [
      { label: 'Educational Tool', type: 'tertiary' },
      { label: 'Open Source', type: 'primary' }
    ],
    ratingOrStat: { icon: 'star', text: '1.2k Stars' },
    description: 'Interactive sorting, graph traversal (BFS/DFS, Dijkstra, A*), and dynamic programming visualizer engineered specifically for CSE students. Allows stepping through frame-by-frame executions with dynamic state rollback via Kotlin Coroutine dispatchers.',
    architectureDetails: [
      'Interactive visual runtime for Dijkstra, BFS/DFS, QuickSort, MergeSort & DP grids',
      'Frame-by-frame state history tree enabling instant rewind and forward stepping',
      'Coroutines cancellation and structured concurrency for thread-safe animation pausing',
      'Custom color-coded memory allocation trackers and complexity metrics (Time & Space)',
      'Community-contributed custom algorithm parser and benchmark comparisons'
    ],
    techStack: ['Kotlin', 'StateFlow', 'Coroutines', 'DSA Architecture'],
    repoUrl: 'https://github.com/r-rajababushah/algovisualizer-android',
    liveDemoTitle: 'View Web Sandbox',
    liveDemoType: 'sandbox'
  },
  {
    id: 'smartcampus',
    title: 'SmartCampus Assistant',
    version: 'v1.8.4',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbfDs1-LUXgFVrCmbL2MNjgMqAqpum4WNkcb9Ba0kP9GfDYearui06SosALOsPTNjBqGjIQia0-HQyqm7V7J4e6rAyPwC18vHC1tqqS9kyNndtXTNgf7vt8wgdWgNCuXFCzucIYqnxqc5aCjWEDu_3q8sM5eexV8KGYRhMZhT0z6aZJD2pcEW7bVWOB6i_kjwS1wJE8aCaVT2t8QrS7cUXLq0v1wUluwpV8Phmi3kCZzSgIZ8QKJuO',
    altText: 'Student university dashboard mobile application showing class timetable calendar, upcoming lab submissions countdown, grade prediction cards with circular radial progress meters in cyan and dark slate.',
    badges: [
      { label: 'Campus Deployment', type: 'primary' },
      { label: 'Python Backend', type: 'secondary' }
    ],
    ratingOrStat: { icon: 'group', text: '2.5k Users' },
    description: 'Full-stack university companion application featuring automated syllabus scraping, automated assignment calendar sync, and what-if CGPA forecasting. Built with a FastAPI Python microservice backend and high-efficiency native Android client.',
    architectureDetails: [
      'FastAPI asynchronous REST API with background task queues and JWT authentication',
      'Automated university portal syllabus parser with encrypted credential storage',
      'Native Android client with push notification alarms for imminent lab assignments',
      'Interactive grade simulation calculator with weighted credit point mathematics',
      'Deployed on high-reliability container runtime serving 2,500+ active students'
    ],
    techStack: ['Python FastAPI', 'Kotlin Client', 'SQLite', 'JWT Auth'],
    repoUrl: 'https://github.com/r-rajababushah/smartcampus-companion',
    liveDemoTitle: 'View Architecture',
    liveDemoType: 'architecture'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'android',
    title: 'Android Ecosystem',
    icon: 'android',
    colorType: 'primary',
    description: 'Production native tooling and declarative reactive frameworks.',
    skills: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'StateFlow', 'Room DB', 'Retrofit', 'Dagger Hilt', 'Material 3'],
    metricLabel: 'Proficiency',
    metricValue: '95% • Advanced'
  },
  {
    id: 'languages',
    title: 'Core Languages',
    icon: 'code',
    colorType: 'secondary',
    description: 'Object-oriented, functional, and systems execution paradigms.',
    skills: ['Kotlin (Primary)', 'Python', 'Java', 'C / C++', 'TypeScript', 'SQL / SQLite'],
    metricLabel: 'LeetCode Solved',
    metricValue: '450+ Problems'
  },
  {
    id: 'coursework',
    title: 'CSE Coursework',
    icon: 'memory',
    colorType: 'tertiary',
    description: 'Foundational computer science theory and systems architecture.',
    skills: ['DSA', 'OOP Principles', 'Operating Systems', 'DBMS & Indexing', 'Computer Networks'],
    metricLabel: 'University Standing',
    metricValue: '8.8 CGPA'
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: 'build',
    colorType: 'neutral',
    description: 'Deployment pipelines, profiling monitors, and collaboration tools.',
    skills: ['Git / GitHub Actions', 'Android Profiler', 'Firebase Cloud', 'Postman', 'Docker', 'Linux / Bash'],
    metricLabel: 'CI/CD Standard',
    metricValue: 'Automated Test Matrix'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'btech',
    title: 'B.Tech in Computer Science & Engineering',
    period: '2022 — Present',
    periodBadgeColor: 'tertiary',
    subtitle: 'Undergraduate Student • CGPA: 8.8+ / 10.0',
    subtitleColor: 'primary',
    description: 'Focusing on Advanced Data Structures, Operating Systems internals, Distributed Systems, and Mobile Software Architecture. Leading the Android Dev Track as Technical Lead at the University Developer Student Club; conducted 8+ hands-on technical workshops for over 200 student developers.',
    tags: ['Algorithms Lead', 'DSC Tech Lead', 'Class Top 5%'],
    nodeColor: 'primary'
  },
  {
    id: 'internship',
    title: 'Android Developer Intern • NexaTech Labs',
    period: 'Summer 2024',
    periodBadgeColor: 'neutral',
    subtitle: 'Mobile Engineering Division • Full-Time Internship',
    subtitleColor: 'secondary',
    description: 'Spearheaded the migration of legacy XML layout views into pure declarative Jetpack Compose composables, reducing total codebase footprint by 22%. Diagnosed performance regressions with Android Profiler, reducing cold application startup latency by 35% through lazy initializations and Coroutine optimizations.',
    tags: ['Jetpack Compose Migration', 'Startup Profiling (-35%)', 'Retrofit 2.0'],
    nodeColor: 'secondary'
  },
  {
    id: 'hackathon',
    title: 'Open Source Contributor & Hackathon Winner',
    period: '2023 — 2024',
    periodBadgeColor: 'neutral',
    subtitle: 'National Hackathon Circuit & Community Mentorship',
    subtitleColor: 'tertiary',
    description: 'Achieved 1st place at InnoHacks 2024 for architecting a decentralized disaster-response offline peer mesh app using Wi-Fi Direct and Kotlin. Regular contributor to prominent Android developer tooling repositories, documentation fixes, and mentoring junior CSE cohorts.',
    tags: ['InnoHacks Winner', 'Wi-Fi Direct Mesh', 'Mentorship'],
    nodeColor: 'tertiary'
  }
];

export const RESUME_DATA: ResumeData = {
  name: 'RAJABABU SHAH',
  contact: {
    phone: '+91 7319806300',
    email: 'rajababushah.in@gmail.com',
    github: 'https://github.com/r-rajababushah',
    githubHandle: 'github.com/r-rajababushah',
    linkedin: 'https://linkedin.com/in/rajababu-shah',
    linkedinHandle: 'linkedin.com/in/rajababu-shah',
    location: 'India (IST • UTC +5:30)'
  },
  summary: 'Computer Science Engineering student and aspiring software engineer with hands-on experience building performant, native Android applications and responsive web systems using Kotlin, Jetpack Compose, TypeScript, and Python. Experienced in developing real-world client-facing applications, integrating REST APIs, implementing booking workflows, and offline-first database architectures. Focused on writing clean, maintainable code and building practical, production-style software.',
  skills: {
    languages: ['Kotlin', 'Python', 'Java', 'TypeScript', 'C / C++', 'SQL / SQLite', 'HTML5 / CSS3'],
    frontend: ['Jetpack Compose', 'Material 3', 'React.js', 'Next.js', 'Responsive CSS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Python FastAPI', 'RESTful API Design', 'JWT Authentication'],
    database: ['Room DB', 'Firebase Firestore', 'PostgreSQL', 'SQLite', 'MongoDB'],
    tools: ['Git', 'GitHub Actions', 'Android Studio & Profiler', 'Postman', 'Docker', 'Vercel', 'VS Code']
  },
  experience: [
    {
      role: 'Android Developer Intern',
      company: 'NexaTech Labs',
      type: 'Mobile Engineering Division • Full-Time Internship',
      period: 'Summer 2024',
      points: [
        'Spearheaded the migration of legacy XML layout views into pure declarative Jetpack Compose composables, reducing total codebase footprint by 22%.',
        'Diagnosed performance regressions using Android Profiler, reducing cold application startup latency by 35% through lazy initializations and Coroutine optimizations.',
        'Engineered responsive networking data layers with Retrofit 2.0 and StateFlow, ensuring deterministic state emission across orientation and lifecycle events.'
      ]
    },
    {
      role: 'Freelance Web Developer',
      company: 'Home Care Solutions',
      type: 'Client Project',
      period: '2023 — 2024',
      points: [
        'Delivered a responsive home-services website and mobile booking flow for a home-repair business client, built with React and TypeScript.',
        'Built the service catalog (e.g., AC Repair, Washing Machine Repair) pulling dynamic backend listings with fallback offline datasets.',
        'Implemented a multi-step booking flow for selecting services, submitting contact/scheduling details, and uploading photo attachments of repair issues.'
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology, Computer Science Engineering — 3rd Year',
      institution: 'Maharishi University of Information Technology, Lucknow',
      period: '2022 — Expected 2028',
      score: 'CGPA: 8.8+ / 10.0',
      details: 'Technical Lead at University Developer Student Club (DSC). Class top 5% standing.'
    },
    {
      degree: 'Higher Secondary (PCM, Computer Science)',
      institution: 'Glacier International Secondary School — Kathmandu, Nepal',
      period: '2020 — 2022',
      score: '83.5%'
    }
  ],
  certifications: [
    'Responsive Web Design — freeCodeCamp',
    'JavaScript Algorithms and Data Structures — freeCodeCamp',
    'Front End Development Libraries — freeCodeCamp'
  ]
};

export const CODE_SNIPPETS = {
  portfolio: `@Composable
fun RajababuPortfolio() {
    // Declarative Reactive State
    val engineerState by remember {
        mutableStateOf(
            EngineerProfile(
                name = "Rajababu Shah",
                role = "Android Engineer",
                stack = listOf("Compose", "Coroutines", "Hilt"),
                openToWork = true
            )
        )
    }

    Scaffold(
        topBar = { GlassmorphicHeader(engineerState.name) }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier.padding(innerPadding),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(engineerState.stack) { tech ->
                TechBadge(label = tech, status = "Mastered")
            }
        }
    }
}`,
  profile: `data class EngineerProfile(
    val name: String,
    val role: String,
    val stack: List<String>,
    val openToWork: Boolean = true,
    val cgpa: Double = 8.8,
    val solvedProblems: Int = 450,
    val primaryLang: String = "Kotlin"
)

val Rajababu = EngineerProfile(
    name = "Rajababu Shah",
    role = "Android & Systems Developer",
    stack = listOf(
        "Jetpack Compose",
        "Coroutines & Flow",
        "Dagger-Hilt",
        "Room DB",
        "FastAPI"
    )
)`,
  theme: `@Composable
fun ObsidianCyberTheme(
    content: @Composable () -> Unit
) {
    val colorScheme = darkColorScheme(
        primary = Color(0xFF4CD7F6),
        secondary = Color(0xFFC0C1FF),
        tertiary = Color(0xFF4FDBC8),
        background = Color(0xFF0F131C),
        surface = Color(0xFF1C2028)
    )

    MaterialTheme(
        colorScheme = colorScheme,
        typography = CyberTypography,
        content = content
    )
}`
};
