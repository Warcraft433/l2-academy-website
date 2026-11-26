import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Atom,
  BookOpenText,
  Calculator,
  GraduationCap,
  Laptop,
  Layers,
  MessageCircle,
  TrendingUp,
  UserRound,
  UserRoundCheck,
} from 'lucide-react'
import { homeCoursePreviews, whyAcademy } from '../data/academyData.js'
import ParticleWaveCanvas from '../components/ParticleWaveCanvas.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

const iconMap = {
  UserRoundCheck,
  Laptop,
  Layers,
  TrendingUp,
  Calculator,
  Atom,
  BookOpenText,
}

const heroPillars = [
  { icon: UserRound, title: 'One-to-One Focus', subtitle: 'Personal attention' },
  { icon: Laptop, title: 'Flexible Learning', subtitle: 'Online & Offline' },
  { icon: TrendingUp, title: 'Real Progress', subtitle: 'Build confidence' },
]

export default function HomePage() {
  return (
    <div className="page-home">
      {/* Typography-First Hero with Particle Wave */}
      <section className="hero-section">
        <ParticleWaveCanvas />
        <div className="hero-glow" aria-hidden="true" />

        <div className="container hero-centered">
          <Reveal className="hero-stack">
            <span className="hero-pill-badge">
              <GraduationCap size={15} /> Online &amp; Offline Tuition
            </span>

            <h1 className="hero-title">
              Personalized Learning.
              <span>Confidence That Lasts.</span>
            </h1>

            <p className="hero-subtitle">
              One-to-one guidance, clear concepts, and dedicated support for school and higher education students — online and offline.
            </p>

            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <MessageCircle size={16} /> Enquire Now
              </Link>
            </div>
          </Reveal>

          <Reveal className="hero-pillars" delay={0.08}>
            {heroPillars.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="hero-pillar-item">
                <span className="pillar-icon-box">
                  <Icon size={18} strokeWidth={1.9} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Core Subjects Preview */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            kicker="Subjects"
            title="Focused support across key subjects"
            subtitle="Mathematics is our core strength, alongside dedicated guidance for Science, English, and more."
            actionLabel="View All Courses"
            actionTo="/courses"
          />

          <div className="minimal-subject-grid">
            {homeCoursePreviews.map((item, idx) => {
              const Icon = iconMap[item.icon]
              return (
                <Reveal key={item.title} delay={idx * 0.04}>
                  <Link
                    to={`/courses?category=${encodeURIComponent(item.category === 'Other' ? 'All' : item.category)}`}
                    className="minimal-subject-item"
                  >
                    <span className="subject-icon-soft">
                      <Icon size={20} strokeWidth={1.85} />
                    </span>
                    <div className="subject-copy">
                      <h3>{item.title}</h3>
                      <span>{item.subtitle}</span>
                    </div>
                    <ArrowRight size={16} className="subject-arrow" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why L² Academy — Open Editorial Row */}
      <section className="section-block section-hairline">
        <div className="container">
          <SectionHeading
            kicker="The L² Approach"
            title="Designed for calm, clear understanding"
          />

          <div className="editorial-pillars-grid">
            {whyAcademy.map(({ icon, title, text }) => {
              const Icon = iconMap[icon]
              return (
                <div key={title} className="editorial-pillar">
                  <span className="pillar-icon-soft">
                    <Icon size={19} strokeWidth={1.85} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Concise Links to About & Classes/Results */}
      <section className="section-block section-hairline">
        <div className="container home-split-minimal">
          <Reveal className="editorial-callout">
            <span className="section-kicker">About Us</span>
            <h3>A personal approach to teaching</h3>
            <p>
              Built on patience and concept clarity—giving every student room to ask questions without hesitation.
            </p>
            <Link to="/about" className="text-link">
              About the Academy &amp; Founder <ArrowRight size={15} />
            </Link>
          </Reveal>

          <Reveal className="editorial-callout" delay={0.06}>
            <span className="section-kicker">Classes &amp; Proof</span>
            <h3>How our sessions work</h3>
            <p>
              Explore our online and offline tuition format, classes offered, and dedicated spaces for student progress.
            </p>
            <Link to="/classes-results" className="text-link">
              View Classes &amp; Results <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Minimal Enquiry CTA */}
      <section className="section-block">
        <div className="container">
          <Reveal className="minimal-cta-box">
            <div>
              <h2>Ready to discuss your student’s learning goals?</h2>
              <p>Reach out to ask about subjects, timings, or an introductory session.</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Enquire Now <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
