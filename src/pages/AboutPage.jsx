import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Compass, HeartHandshake, UserRound } from 'lucide-react'
import { academyStory, founderProfile } from '../data/aboutData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <span className="page-kicker">Our Story &amp; Leadership</span>
          <h1>About L² Academy &amp; Founder</h1>
          <p>
            A personal, concept-focused educational institution dedicated to helping students learn with clarity, patience, and confidence.
          </p>
        </div>
      </section>

      {/* Academy Introduction & Philosophy */}
      <section className="section-block">
        <div className="container about-intro-grid">
          <Reveal className="about-story-copy">
            <SectionHeading title="Who We Are" />
            <h3>{academyStory.introTitle}</h3>
            {academyStory.introParagraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about-photo-frame" delay={0.08}>
            <img
              src="/images/learning-students.jpg"
              alt="Students engaged in focused textbook reading"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission, Vision & Philosophy */}
      <section className="section-block section-tinted">
        <div className="container">
          <div className="two-col-grid mission-grid">
            <Reveal className="surface-card">
              <span className="icon-circle"><Compass size={20} /></span>
              <h3>Our Mission</h3>
              <p className="card-muted">{academyStory.mission}</p>
            </Reveal>
            <Reveal className="surface-card" delay={0.06}>
              <span className="icon-circle"><BookOpen size={20} /></span>
              <h3>Our Vision</h3>
              <p className="card-muted">{academyStory.vision}</p>
            </Reveal>
          </div>

          <div className="three-col-grid philosophy-grid">
            {academyStory.philosophyPoints.map((pt, i) => (
              <Reveal key={pt.title} delay={i * 0.05} className="surface-card">
                <h4>{pt.title}</h4>
                <p className="card-muted">{pt.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile (Placeholders) */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            title="Meet the Founder"
            subtitle="Dedicated sections below are structured as placeholders to be updated with the founder’s real background and journey."
          />

          <Reveal className="founder-header-card">
            <div className="founder-avatar-placeholder" aria-hidden="true">
              <UserRound size={42} />
            </div>
            <div>
              <span className="placeholder-chip">Founder Profile Placeholder</span>
              <h3>{founderProfile.name}</h3>
              <p className="founder-role">{founderProfile.role}</p>
              <p className="card-muted">{founderProfile.summary}</p>
            </div>
          </Reveal>

          <div className="two-col-grid founder-details-grid">
            {founderProfile.sections.map((section) => (
              <Reveal key={section.id} className="surface-card placeholder-card">
                <div className="placeholder-header">
                  <HeartHandshake size={16} />
                  <span>To Be Updated</span>
                </div>
                <h4>{section.title}</h4>
                <p className="card-muted">{section.placeholder}</p>
              </Reveal>
            ))}
          </div>

          <div className="inline-cta-box">
            <div>
              <strong>Would you like to speak directly about your child’s learning needs?</strong>
              <span>Reach out through our enquiry form or WhatsApp contact page.</span>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
