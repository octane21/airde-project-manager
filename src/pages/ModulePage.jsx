import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
  NotebookPen,
  Bot,
  Search,
  ShieldCheck,
  Target,
  Package,
  Star,
  User,
  Database,
  Sparkles,
  Zap,
  MessageCircle,
  FileBarChart2,
  Award,
} from 'lucide-react'
import { getModuleById, modulesData } from '../data/modulesData'
import './ModulePage.css'

const coverIconSet = [CheckCircle2, Bot, ShieldCheck, FileBarChart2, Sparkles, Target]
const footerIconSet = [Zap, MessageCircle, FileBarChart2, Award]

function philosophyIcon(title) {
  if (/data/i.test(title)) return Database
  if (/generate|ai|analysis|assistant/i.test(title)) return Bot
  if (/review|evaluation/i.test(title)) return Search
  if (/approve|decision/i.test(title)) return ShieldCheck
  return Sparkles
}

function ModuleCover({ mod }) {
  const [quoteLine1, quoteLine2] = mod.quote.split('\n')

  return (
    <div className="module-page-grid">
      <div className="module-cover-header">
        <div className="module-cover-brand">
          <img src="/images/logo_airde.png" alt="AIRDE Academy" className="module-cover-brand-mark" />
          <div>
            <div className="module-cover-brand-name">AIRDE ACADEMY</div>
            <div className="module-cover-brand-tagline">Engineering Excellence Through Intelligence</div>
          </div>
        </div>
      </div>

      <div className="module-cover-hero">
        <div className="module-cover-copy">
          <h1 className="module-cover-title">
            <span>CHATGPT</span>
            <span className="module-cover-for">
              <i /> FOR <i />
            </span>
            <span>PROJECT MANAGERS</span>
          </h1>

          <p className="module-cover-tagline">{mod.tagline.join('  |  ')}</p>

          <div className="module-cover-ribbon">
            <NotebookPen size={26} />
            <div>
              <div className="module-cover-ribbon-label">PARTICIPANT</div>
              <div className="module-cover-ribbon-text">WORKBOOK</div>
            </div>
          </div>

          <div className="module-cover-heading">
            <div className="module-cover-number">
              <span className="module-cover-label">Module</span>
              <span className="module-cover-num">{mod.number}</span>
            </div>
            <div className="module-cover-divider" />
            <div>
              <div className="module-cover-name">{mod.name}</div>
              <p className="module-cover-desc">{mod.description}</p>
            </div>
          </div>
        </div>

        <div className="module-cover-media">
         <div className={`module-cover-media-img module-cover-media-img-${mod.number}`} aria-hidden="true" />
        </div>
      </div>

      <div className="module-cover-icons">
        {mod.coverIcons.map((icon, idx) => {
          const Icon = coverIconSet[idx % coverIconSet.length]
          return (
            <div className="module-cover-icon" key={icon}>
              <span className="module-cover-icon-badge">
                <Icon size={18} />
              </span>
              <span>{icon}</span>
            </div>
          )
        })}
      </div>

      <div className="module-cover-footer">
        <div className="module-cover-quote">
          <Quote className="module-cover-quote-mark" size={22} />
          <p>
            {quoteLine1}
            <br />
            <span className="quote-highlight">{quoteLine2}</span>
          </p>
        </div>
        <div className="module-cover-website">www.airdeacademy.com</div>
        <div className="module-cover-cert">
          <span className="cert-brand">AIRDE ACADEMY</span>
          <span className="cert-program">Professional Certification Program</span>
        </div>
      </div>
    </div>
  )
}


function ModuleDetail({ mod }) {
  return (
    <div className="module-detail-grid">
      <div className="module-detail-topbar">
        <div className="module-detail-page-badge">
          <span>02</span>
          PAGE
        </div>
        <div className="module-detail-topbar-title">
          CHATGPT FOR PROJECT MANAGERS
          <span>Participant Workbook</span>
        </div>
      </div>

      <div className="module-detail-intro">
        <span className="eyebrow">Welcome to</span>
        <h2 className="module-detail-heading">MODULE {mod.number}</h2>
        <div className="module-detail-subheading">{mod.name}</div>
        <p className="module-detail-tagline">ChatGPT for Project Managers</p>
      </div>

      <div className="module-detail-left">
        <div className="module-detail-block">
          <h3>
            <User className="block-icon" size={18} /> Welcome Message
          </h3>
          <p>{mod.welcomeMessage}</p>
        </div>

        <div className="module-detail-quote">
          <Quote className="module-cover-quote-mark" size={20} />
          <p>{mod.quote.split('\n').join(' ')}</p>
        </div>

        <div className="module-detail-block module-philosophy">
          <h3>
            <Sparkles className="block-icon" size={18} /> Training Philosophy
          </h3>
          <div className="philosophy-steps">
            {mod.trainingPhilosophy.map((step, idx) => {
              const Icon = philosophyIcon(step.title)
              return (
                <div className="philosophy-step" key={step.title}>
                  <div className="philosophy-step-icon">
                    <Icon size={22} />
                  </div>
                  <div className="philosophy-step-title">{step.title}</div>
                  <div className="philosophy-step-desc">{step.desc}</div>
                  {idx < mod.trainingPhilosophy.length - 1 && (
                    <ArrowRight className="philosophy-arrow" size={18} />
                  )}
                </div>
              )
            })}
          </div>
          <p className="philosophy-note">{mod.philosophyNote}</p>
        </div>
      </div>

      <div className="module-detail-right">
        <div className="module-detail-block">
          <h3>
            <Target className="block-icon" size={18} /> Learning Objectives
          </h3>
          <p className="module-detail-block-intro">
            Setelah menyelesaikan Module {mod.number}, peserta diharapkan mampu:
          </p>
          <ul className="check-list">
            {mod.learningObjectives.map((item) => (
              <li key={item}>
                <CheckCircle2 className="check" size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="module-detail-block">
          <h3>
            <Package className="block-icon" size={18} /> What You Will Build Today
          </h3>
          <p className="module-detail-block-intro">Pada akhir workshop, setiap peserta akan menghasilkan:</p>
          <div className="build-package-title">{mod.output}</div>
          <ol className="build-package-list">
            {mod.buildPackage.map((item, idx) => (
              <li key={item}>
                <span className="build-package-num">{idx + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="module-detail-block module-key-message">
          <h3>
            <Star className="block-icon" size={18} /> Key Message
          </h3>
          <p>“{mod.keyMessage}”</p>
          <div className="module-key-signature">
            <div>AIRDE Academy</div>
            <span>Engineering Excellence Through Intelligence</span>
          </div>
        </div>
      </div>

      <div className="module-detail-footer">
        {mod.footerTags.map((tag, idx) => {
          const Icon = footerIconSet[idx % footerIconSet.length]
          return (
            <span key={tag}>
              <Icon size={16} /> {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function ModulePage() {
  const { id, page } = useParams()
  const mod = getModuleById(id)

  if (!mod) {
    return <Navigate to="/" replace />
  }

  const currentPage = page === '2' ? '2' : '1'
  const moduleIndex = modulesData.findIndex((m) => m.id === id)
  const prevModule = modulesData[moduleIndex - 1]
  const nextModule = modulesData[moduleIndex + 1]

  return (
    <section className="module-page section">
      <div className="container">
        <Link to="/" className="module-back-link">
          <ArrowLeft size={16} /> Kembali ke Landing Page
        </Link>

        <div className="module-pager">
          <Link
            to={`/module/${id}/1`}
            className={`module-pager-tab ${currentPage === '1' ? 'active' : ''}`}
          >
            Halaman 1 — Cover
          </Link>
          <Link
            to={`/module/${id}/2`}
            className={`module-pager-tab ${currentPage === '2' ? 'active' : ''}`}
          >
            Halaman 2 — Detail
          </Link>
        </div>

        {currentPage === '1' ? <ModuleCover mod={mod} /> : <ModuleDetail mod={mod} />}

        <div className="module-nav">
          {prevModule ? (
            <Link to={`/module/${prevModule.id}/1`} className="module-nav-link">
              <ArrowLeft size={16} /> Module {prevModule.number} {prevModule.name}
            </Link>
          ) : (
            <span />
          )}
          {nextModule ? (
            <Link to={`/module/${nextModule.id}/1`} className="module-nav-link">
              Module {nextModule.number} {nextModule.name} <ArrowRight size={16} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  )
}

export default ModulePage
