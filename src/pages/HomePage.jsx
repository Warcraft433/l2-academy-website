import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Atom,
  BookOpen,
  BookOpenText,
  Calculator,
  ClipboardCheck,
  GraduationCap,
  Laptop,
  Layers,
  MessageCircleMore,
  PhoneCall,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from 'lucide-react'
import { heroHighlights, homeCoursePreviews, whyAcademy } from '../data/academyData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

const iconMap = {
  UsersRound,
  BookOpen,
  ClipboardCheck,
  MessageCircleMore,
  UserRoundCheck,
  Laptop,
  Layers,
  TrendingUp,
  Calculator,
  Atom,
  BookOpenText,
}

export default function HomePage() {
  return (
    <div className="page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <Reveal className="hero-content">
            <span className="hero-badge">
              <GraduationCap size={16} /> One-to-One Online Tuition
            </span>
            <h1>Building Confidence Through Personalized Learning</h1>
            <p className="hero-description">
              Personalized guidance, clear concepts, and dedicated support for school and higher education students—helping every learner progress with confidence.
            </p>
            <div className="hero-cta-row">
              <Link to="/courses" className="btn btn-white">
                Explore Courses <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero-media" delay={0.1}>
            <div className="hero-image-card">
              <img
                src="/images/student-learning.jpg"
                alt="Student learning in a calm, focused study environment"
                fetchPriority="high"
              />
              <div className="hero-image-overlay">
                <span className="overlay-title">L² Academy</span>
                <span className="overlay-sub">Concept Clarity · Calm Guidance</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container hero-highlights-bar">
          {heroHighlights.map(({ icon, title, subtitle }) => {
            const Icon = iconMap[icon]
            return (
              <div key={title} className="hero-highlight-item">
                <span className="hero-highlight-icon">
                  <Icon size={19} strokeWidth={1.9} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Main Subjects Preview */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            title="Our Courses"
            subtitle="Personalized tuition across school classes and higher education, with Mathematics as our core strength."
            actionLabel="View All Courses"
            actionTo="/courses"
          />

          <div className="preview-cards-grid">
            {homeCoursePreviews.map((item, idx) => {
              const Icon = iconMap[item.icon]
              return (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <Link
                    to={`/courses?category=${encodeURIComponent(item.category === 'Other' ? 'All' : item.category)}`}
                    className="course-preview-card"
                  >
                    <span className="preview-icon-box">
                      <Icon size={22} strokeWidth={1.85} />
                    </span>
                    <div className="preview-card-copy">
                      <h3>{item.title}</h3>
                      <span className="preview-sub">{item.subtitle}</span>
                    </div>
                    <span className="preview-arrow-circle" aria-hidden="true">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why L² Academy Banner */}
      <section className="section-block section-tight">
        <div className="container">
          <Reveal className="why-strip-card">
            <div className="why-strip-title">
              <span className="heading-accent-bar" aria-hidden="true" />
              <h2>Why L² Academy?</h2>
            </div>
            <div className="why-strip-items">
              {whyAcademy.map(({ icon, title, text }) => {
                const Icon = iconMap[icon]
                return (
                  <div key={title} className="why-strip-item" title={text}>
                    <span className="why-strip-icon">
                      <Icon size={20} strokeWidth={1.9} />
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compact Previews: About + Teaching Approach */}
      <section className="section-block">
        <div className="container home-split-grid">
          <Reveal className="info-preview-card">
            <span className="eyebrow-tag">About L² Academy</span>
            <h3>Education built around the individual student</h3>
            <p>
              We focus on patient, concept-first teaching in a one-to-one setting—so students feel comfortable asking questions and building lasting understanding.
            </p>
            <Link to="/about" className="btn btn-outline-navy btn-sm">
              Meet the Academy &amp; Founder <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Reveal className="info-preview-card info-preview-card--tint" delay={0.08}>
            <span className="eyebrow-tag">Classes &amp; Teaching Approach</span>
            <h3>Making Mathematics &amp; core subjects simple</h3>
            <p>
              Whether learning online from home or offline where applicable, every lesson connects concepts clearly rather than relying on rote memorization.
            </p>
            <Link to="/classes-results" className="btn btn-primary btn-sm">
              Explore Classes &amp; Results <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Parent Enquiry CTA */}
      <section className="section-block section-cta-bottom">
        <div className="container">
          <Reveal className="cta-banner">
            <div>
              <h2>Have a question about classes, timings, or subjects?</h2>
              <p>
                Speak with us directly to discuss your student’s class, learning goals, and a suitable schedule.
              </p>
            </div>
            <Link to="/contact" className="btn btn-white">
              <PhoneCall size={17} /> Enquire Now
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
