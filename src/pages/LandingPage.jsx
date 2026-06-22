import { Link } from 'react-router-dom'
import {
  Clock,
  Zap,
  TrendingUp,
  Folder,
  Sparkles,
  Bot,
  MessageCircleQuestion,
  ArrowRight,
  CheckCircle2,
  Settings2,
  FileBarChart2,
  ShieldCheck,
  Rocket,
  Award,
  FileText,
} from 'lucide-react'
import { modulesData } from '../data/modulesData'
import { useInView } from '../hooks/useInView'
import './LandingPage.css'

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView(0.2)
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'reveal-in' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

function ModuleCard({ mod }) {
  const [ref, inView] = useInView(0.15)
  return (
    <Link
      to={`/module/${mod.id}/1`}
      ref={ref}
      className={`module-card module-${mod.color} reveal ${inView ? 'reveal-in' : ''}`}
    >
      <span className="module-icon-badge">
        <mod.icon size={20} />
      </span>
      <div className="module-header">
        <span className="module-number">{mod.number}</span>
        <div>
          <div className="module-label">Module</div>
          <div className="module-name">{mod.name}</div>
        </div>
      </div>
      {mod.blocks.map((block) => (
        <div className="module-block" key={block.title}>
          <div className="module-block-title">
            <span className="module-block-icon-badge">
              <block.icon size={16} />
            </span>
            {block.title}
          </div>
          <ul className="module-block-list">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="module-output">
        <FileText size={14} />
        <span>OUTPUT:</span> {mod.output.toUpperCase()}
      </div>
      <div className="module-cta">
        Lihat Detail Module <ArrowRight size={14} />
      </div>
    </Link>
  )
}

const valueProps = [
  { icon: Clock, title: 'Save Time', desc: 'Automate repetitive tasks' },
  { icon: Zap, title: 'Reduce Effort', desc: 'Let AI handle the heavy lifting' },
  { icon: TrendingUp, title: 'Increase Impact', desc: 'Deliver better results with confidence' },
]

const workshopFlow = [
  { icon: Folder, label: 'Project Documents' },
  { icon: Sparkles, label: 'ChatGPT AI Engine' },
  { icon: Bot, label: 'AI Project Assistant' },
  { icon: MessageCircleQuestion, label: 'Ask Anything' },
]

const exampleQuestions = [
  'Apa risiko terbesar proyek?',
  'Apa action item yang belum diselesai?',
  'Buatkan laporan mingguan.',
  'Ringkas rapat terakhir.',
  'Apa isu kritis minggu ini?',
]

const benefits = [
  { icon: Settings2, title: 'Praktis & Langsung', desc: 'Bisa diterapkan di pekerjaan sehari-hari' },
  { icon: Clock, title: 'Hemat Waktu & Tenaga', desc: 'Selesai lebih cepat, fokus pada hal penting' },
  { icon: FileBarChart2, title: 'Laporan Lebih Cepat & Akurat', desc: 'Hasil rapi, data jelas, mudah dipahami' },
  { icon: ShieldCheck, title: 'Tingkatkan Produktivitas', desc: 'Kerja lebih efisien, hasil lebih berkualitas' },
  { icon: Rocket, title: 'Siap Future-Ready', desc: 'Kuasai AI, tingkatkan daya saing karier Anda' },
]

function LandingPage() {
  return (
    <>
      {/* HERO + HEADER (shared background) */}
      <section className="hero">
        <div className="hero-header container backdrop-blur-md bg-linear-to-r from-white via-white/60 to-transparent border-b border-white/40 shadow-lg">
          <div className="hero-brand">
            <div className="img-logo-container">

            <img src="/images/logo_airde.png" alt="AIRDE Academy" className="hero-brand-mark" />
            </div>
            <div>
              <div className="hero-brand-name">AIRDE ACADEMY</div>
              <div className="hero-brand-tagline">Engineering Excellence Through Intelligence</div>
            </div>
          </div>
          <div className="hero-powered-badge">
            <img src="/images/ChatGPT_logo.svg.png" alt="ChatGPT logo" className="hero-powered-badge-logo" />
            Powered by ChatGPT
          </div>
        </div>

        <div className="hero-content container">
          <div className="hero-copy-col">
            <div className="hero-copy">
              <h1>
                CHATGPT
                <br />
                FOR PROJECT
                <br />
                MANAGERS
              </h1>
              <p className="hero-subtitle">Plan Faster. Communicate Better. Report Smarter.</p>
              <p className="hero-program">Professional Certification Program</p>
            </div>
          </div>
          <div className="hero-image-col">
            <div className="hero-image" />
          </div>
        </div>

        <div className="container value-props-grid">
          {valueProps.map((item) => (
            <div className="value-prop" key={item.title}>
              <item.icon className="value-prop-icon" strokeWidth={2} />
              <div>
                <div className="value-prop-title">{item.title}</div>
                <div className="value-prop-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="modules section" id="modules">
        <div className="container">
          <div className="modules-grid">
            {modulesData.map((mod) => (
              <ModuleCard mod={mod} key={mod.number} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL WORKSHOP */}
      <section className="final-workshop section">
        <div className="container final-workshop-grid">
          <Reveal className="final-workshop-copy">
            <span className="eyebrow">Final Workshop</span>
            <h2 className="section-title">
              Build Your
              <br />
              AI Project Assistant
              <br />
              with ChatGPT
            </h2>
            <div className="flow">
              {workshopFlow.map((step, idx) => (
                <div className="flow-step" key={step.label}>
                  <div className="flow-node">
                    <step.icon size={20} />
                  </div>
                  <span className="flow-label">{step.label}</span>
                  {idx < workshopFlow.length - 1 && <ArrowRight className="flow-arrow" size={18} />}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="example-questions">
            <div className="example-questions-title">Example Questions</div>
            <ul>
              {exampleQuestions.map((q) => (
                <li key={q}>
                  <CheckCircle2 className="check" size={16} /> {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits section-tight">
        <div className="container benefits-grid">
          {benefits.map((b) => (
            <div className="benefit" key={b.title}>
              <b.icon className="benefit-icon" />
              <div className="benefit-title">{b.title}</div>
              <div className="benefit-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / CTA */}
      <footer className="footer" id="daftar">
        <div className="container footer-grid">
          <div className="footer-block">
            <Award className="footer-badge" />
            <div className="footer-title">Sertifikat Resmi</div>
            <div className="footer-desc">AIRDE Academy Certified ChatGPT for Project Managers</div>
          </div>
          <div className="footer-block">
            <div className="footer-title">Untuk Siapa?</div>
            <div className="footer-desc">
              Project Manager, Site Manager, Project Engineer, Site Engineer, Supervisor, Konsultan,
              Owner Representative, dan Profesional Proyek lainnya.
            </div>
          </div>
          <div className="footer-block">
            <div className="footer-title">Durasi</div>
            <div className="footer-desc footer-desc-strong">2 Hari Intensif</div>
            <div className="footer-desc">09.00 – 17.00 WIB</div>
          </div>
          <div className="footer-cta">
            <div className="footer-cta-title">Upgrade Your Project Skills.</div>
            <div className="footer-cta-desc">Let ChatGPT work for you.</div>
            <a target='_blank' href="https://forms.gle/ixrJBbR8jpZcDDPC8" className="footer-cta-btn">
              Daftar Sekarang!
            </a>
          </div>
        </div>
        <div className="container footer-bottom">airde-project-manager.vercel.app/</div>
      </footer>
    </>
  )
}

export default LandingPage
