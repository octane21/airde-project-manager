import {
  ClipboardList,
  BarChart3,
  ShieldAlert,
  Bot,
  FileText,
  AlertTriangle,
  Activity,
  RefreshCw,
  Scale,
  BookOpen,
} from 'lucide-react'

export const modulesData = [
  {
    id: 'planning',
    number: '01',
    name: 'Planning',
    color: 'green',
    icon: ClipboardList,
    tagline: ['Plan Faster.', 'Communicate Better.', 'Report Smarter.'],
    description:
      'Master AI-powered planning to build better Project Plans, Timelines, and Risk Assessments.',
    coverIcons: ['Practical Exercises', 'AI Prompts Library', 'Quality Checklists', 'Real-World Application'],
    quote: 'AI does not replace Project Managers.\nAI helps Project Managers create better plans faster.',
    blocks: [
      {
        icon: FileText,
        title: 'ChatGPT for Project Plans & Timelines',
        items: ['Project Plan', 'Work Plan', 'Timeline', 'Milestone', 'Project Brief'],
      },
      {
        icon: AlertTriangle,
        title: 'ChatGPT for Risk Assessment & Briefs',
        items: ['Risk Register', 'Risk Matrix', 'Executive Risk Summary', 'Risk Brief'],
      },
    ],
    output: 'Project Planning Package',
    welcomeMessage:
      'Selamat datang di Program ChatGPT for Project Managers yang diselenggarakan oleh AIRDE Academy. Dunia Project Management sedang mengalami perubahan besar. Tugas-tugas yang sebelumnya membutuhkan waktu berjam-jam bahkan berhari-hari kini dapat diselesaikan dalam hitungan menit dengan bantuan Artificial Intelligence (AI). Namun demikian, AI bukanlah pengganti Project Manager. AI adalah alat bantu yang membantu Project Manager bekerja lebih cepat, lebih konsisten, dan lebih produktif. Melalui Module 01 — Planning, Anda akan mempelajari bagaimana memanfaatkan ChatGPT untuk mempercepat proses perencanaan proyek, mulai dari penyusunan Project Plan, Work Breakdown Structure (WBS), Timeline, Risk Register, hingga Executive Risk Brief.',
    learningObjectives: [
      'Membuat Project Plan menggunakan ChatGPT',
      'Menyusun Scope Definition secara sistematis',
      'Menghasilkan Work Breakdown Structure (WBS)',
      'Membuat Timeline dan Milestone Project',
      'Menyusun Risk Register secara cepat',
      'Membuat Executive Risk Brief untuk manajemen',
      'Mengintegrasikan seluruh output menjadi Project Planning Package',
    ],
    buildPackage: ['Project Plan', 'Scope Definition', 'Work Breakdown Structure (WBS)', 'Timeline & Milestone', 'Risk Register', 'Executive Risk Brief'],
    trainingPhilosophy: [
      { title: 'AI Generate', desc: 'AI membuat draft dengan cepat' },
      { title: 'Human Review', desc: 'Manusia melakukan review, validasi, dan perbaikan' },
      { title: 'Human Approve', desc: 'Manusia memberikan persetujuan akhir' },
    ],
    philosophyNote: 'AI membantu menghasilkan draft. Manusia tetap bertanggung jawab terhadap keputusan akhir.',
    keyMessage: 'Planning better today means fewer problems tomorrow.',
    footerTags: ['Plan Faster', 'Communicate Better', 'Report Smarter', 'Deliver Success'],
  },
  {
    id: 'monitoring-control',
    number: '02',
    name: 'Monitoring & Control',
    color: 'navy',
    icon: BarChart3,
    tagline: ['Monitor Smarter.', 'Control Better.', 'Deliver Results.'],
    description:
      'Master AI-powered project monitoring to improve visibility, manage performance, track issues, and support better project decisions.',
    coverIcons: ['Progress Tracking', 'KPI Dashboard', 'Issue Management', 'Change Control', 'Executive Reporting'],
    quote: 'AI does not manage projects.\nAI helps Project Managers see more, understand better, and decide faster.',
    blocks: [
      {
        icon: Activity,
        title: 'ChatGPT for Progress & KPI Tracking',
        items: ['Progress Tracking Framework', 'KPI Dashboard', 'Issue Register'],
      },
      {
        icon: RefreshCw,
        title: 'ChatGPT for Reporting & Change Control',
        items: ['Change Register', 'Weekly Project Report', 'Executive Project Brief'],
      },
    ],
    output: 'Project Monitoring Package',
    welcomeMessage:
      'Selamat datang di Module 02 — Monitoring & Control. Setelah pada Module 01 peserta berhasil membangun Project Planning Package, langkah berikutnya adalah memastikan proyek tetap berjalan sesuai target selama fase pelaksanaan. Pada modul ini, Anda akan mempelajari bagaimana memanfaatkan ChatGPT untuk melakukan monitoring proyek, mengendalikan KPI proyek, mengelola issue dan perubahan, serta menghasilkan laporan manajemen secara lebih cepat dan konsisten. AI bukanlah pengganti Project Manager — AI membantu Project Manager melihat lebih cepat, memahami lebih baik, dan mengambil keputusan lebih tepat.',
    learningObjectives: [
      'Melakukan Progress Monitoring menggunakan ChatGPT',
      'Mengidentifikasi aktivitas yang terlambat',
      'Membuat KPI Dashboard Project',
      'Mengembangkan Issue Register',
      'Melakukan Change Request Analysis',
      'Membuat Weekly Project Report',
      'Menyusun Executive Project Brief',
    ],
    buildPackage: ['Progress Tracking Framework', 'KPI Dashboard', 'Issue Register', 'Change Register', 'Weekly Project Report', 'Executive Project Brief'],
    trainingPhilosophy: [
      { title: 'Project Data', desc: 'Mengumpulkan dan memproses data proyek' },
      { title: 'AI Analysis', desc: 'AI menganalisis dan menghasilkan insight' },
      { title: 'Human Decision', desc: 'Manusia mengambil keputusan berdasarkan insight terbaik' },
    ],
    philosophyNote: 'AI membantu mengubah data menjadi insight yang lebih cepat dan lebih mudah dipahami. Project Manager tetap menjadi pengambil keputusan.',
    keyMessage: 'Monitoring better today means fewer surprises tomorrow.',
    footerTags: ['Track Progress', 'Control Performance', 'Manage Issues', 'Deliver Results'],
  },
  {
    id: 'risk-decision-support',
    number: '03',
    name: 'Risk & Decision Support',
    color: 'gold',
    icon: ShieldAlert,
    tagline: ['Anticipate Risks.', 'Make Better Decisions.', 'Drive Project Success.'],
    description:
      'Master AI-powered risk management and decision support to identify, assess, and mitigate risks while making smarter project decisions.',
    coverIcons: ['Risk Identification', 'Risk Assessment', 'Risk Heat Map & Prioritization', 'Mitigation Planning', 'Decision Support'],
    quote: 'AI does not replace Project Managers.\nAI helps Project Managers anticipate risks and make better decisions.',
    blocks: [
      {
        icon: ShieldAlert,
        title: 'ChatGPT for Risk Identification & Assessment',
        items: ['Risk Register', 'Risk Assessment Matrix', 'Risk Heat Map'],
      },
      {
        icon: Scale,
        title: 'ChatGPT for Mitigation & Decision Support',
        items: ['Mitigation Action Plan', 'Decision Analysis Framework', 'Executive Decision Brief'],
      },
    ],
    output: 'Risk & Decision Support Package',
    welcomeMessage:
      'Selamat datang di Module 03 — Risk & Decision Support. Pada Module 01, Anda telah mempelajari bagaimana menggunakan ChatGPT untuk mempercepat proses perencanaan proyek. Pada Module 02, Anda mempelajari bagaimana memanfaatkan ChatGPT untuk melakukan monitoring and control selama pelaksanaan proyek. Melalui Module 03 ini, Anda akan mempelajari bagaimana menggunakan ChatGPT untuk mengidentifikasi risiko, menganalisis dampak, mengevaluasi alternatif solusi, dan mendukung pengambilan keputusan yang lebih cepat dan tepat. AI bukanlah pengambil keputusan — AI membantu Project Manager memahami risiko dan konsekuensi keputusan sebelum tindakan diambil.',
    learningObjectives: [
      'Mengidentifikasi risiko proyek secara sistematis',
      'Mengembangkan Risk Register yang lebih komprehensif',
      'Melakukan Risk Assessment menggunakan AI',
      'Membuat Risk Matrix & Risk Heat Map',
      'Mengembangkan Mitigation Plan',
      'Mengevaluasi alternatif keputusan',
      'Menyusun Executive Decision Brief',
    ],
    buildPackage: ['Risk Register', 'Risk Assessment Matrix', 'Risk Heat Map', 'Mitigation Action Plan', 'Decision Analysis Framework', 'Executive Decision Brief'],
    trainingPhilosophy: [
      { title: 'Project Data', desc: 'Mengumpulkan data proyek secara lengkap' },
      { title: 'Risk Analysis', desc: 'AI menganalisis risiko dan potensi dampak' },
      { title: 'Option Evaluation', desc: 'AI mengevaluasi berbagai alternatif solusi' },
      { title: 'Human Decision', desc: 'Manusia mengambil keputusan terbaik untuk proyek' },
    ],
    philosophyNote: 'AI membantu menganalisis berbagai kemungkinan. Project Manager tetap bertanggung jawab terhadap keputusan akhir.',
    keyMessage: 'Better risk visibility today leads to better decisions tomorrow.',
    footerTags: ['Identify Risks', 'Assess Impacts', 'Evaluate Options', 'Make Better Decisions'],
  },
  {
    id: 'ai-pm-assistant',
    number: '04',
    name: 'AI Project Management Assistant',
    color: 'green',
    icon: Bot,
    tagline: ['Automate Smarter.', 'Assist Better.', 'Lead the Future.'],
    description:
      'Build your AI Project Management Assistant with ChatGPT to automate tasks, streamline workflows, and become a more productive and strategic Project Manager.',
    coverIcons: ['AI Assistant Setup', 'Workflow Automation', 'Document Generation', 'Smart Prompts', 'Insights & Analytics', 'Productivity Booster'],
    quote: 'AI does not replace Project Managers.\nAI empowers Project Managers to achieve more, every day.',
    blocks: [
      {
        icon: Bot,
        title: 'ChatGPT for Assistant Setup & Automation',
        items: ['AI Assistant Framework', 'Project Prompt Library', 'Workflow Automation Map'],
      },
      {
        icon: BookOpen,
        title: 'ChatGPT for Knowledge & Reporting',
        items: ['Knowledge Base Structure', 'Reporting Assistant', 'AI PM Operating Model'],
      },
    ],
    output: 'AI Project Management Assistant Package',
    welcomeMessage:
      'Selamat datang di Module 04 — AI Project Management Assistant. Pada tiga modul sebelumnya, Anda telah mempelajari bagaimana menggunakan ChatGPT untuk perencanaan proyek, monitoring, dan pengambilan keputusan. Namun Project Manager modern tidak hanya menggunakan AI untuk tugas individual — Project Manager modern membangun sistem kerja yang menyeluruh dan menjadikan AI sebagai asisten kerja sehari-hari. Melalui Module 04 ini, Anda akan mempelajari bagaimana mengembangkan AI Project Management Assistant yang membantu menghasilkan dokumen proyek, menganalisis dampak, dan memberikan rekomendasi kepada Project Manager. AI tidak menggantikan Project Manager — AI membantu Project Manager bekerja lebih cepat, lebih konsisten, dan lebih strategis.',
    learningObjectives: [
      'Mendesain AI Project Management Assistant',
      'Mengembangkan Prompt Library Profesional',
      'Membuat Workflow Automation',
      'Mengintegrasikan AI dengan Dokumen Proyek',
      'Mengembangkan Knowledge Base Project',
      'Menghasilkan Laporan Otomatis',
      'Membangun AI-Assisted Project Management System',
    ],
    buildPackage: ['AI Assistant Framework', 'Project Prompt Library', 'Workflow Automation Map', 'Knowledge Base Structure', 'Reporting Assistant', 'AI PM Operating Model'],
    trainingPhilosophy: [
      { title: 'Project Data', desc: 'Mengumpulkan data proyek dari berbagai sumber' },
      { title: 'AI Assistant', desc: 'AI memproses dan memahami informasi secara cepat' },
      { title: 'Recommendation', desc: 'AI memberikan insight dan rekomendasi yang relevan' },
      { title: 'Decision', desc: 'Project Manager memilih tindakan yang akan diambil' },
    ],
    philosophyNote: 'AI membantu mengelola informasi. Project Manager tetap memimpin proyek.',
    keyMessage: 'Build your AI Assistant today. Lead smarter projects tomorrow.',
    footerTags: ['Automate Tasks', 'Generate Documents', 'Create Insights', 'Lead with AI'],
  },
]

export const getModuleById = (id) => modulesData.find((mod) => mod.id === id)
