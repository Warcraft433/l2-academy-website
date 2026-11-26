import { Link } from 'react-router-dom'
import { ArrowRight, Award, Camera, CheckCircle2, Image as ImageIcon, MessageSquareQuote } from 'lucide-react'
import {
  classesOfferedSummary,
  galleryItems,
  progressPlaceholders,
  teachingModes,
  testimonialPlaceholders,
} from '../data/resultsData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function ClassesResultsPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <span className="page-kicker">Classes &amp; Evidence of Teaching</span>
          <h1>Classes &amp; Student Results</h1>
          <p>
            An overview of how classes are conducted at L² Academy, along with dedicated spaces for real teaching photos, student progress, and parent feedback.
          </p>
        </div>
      </section>

      {/* Teaching Modes (Online & Offline) */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            title="How Classes Are Conducted"
            subtitle="Structured one-to-one online tuition, plus offline support where applicable."
          />
          <div className="two-col-grid">
            {teachingModes.map((mode) => (
              <Reveal key={mode.title} className="surface-card">
                <span className="pill-badge">{mode.badge}</span>
                <h3>{mode.title}</h3>
                <p className="card-muted">{mode.description}</p>
                <ul className="check-list">
                  {mode.points.map((pt) => (
                    <li key={pt}>
                      <CheckCircle2 size={16} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Offered Summary */}
      <section className="section-block section-tinted">
        <div className="container">
          <SectionHeading
            title="Classes Offered"
            subtitle="Supporting students across school stages and higher education mathematics."
            actionLabel="View Subject Details"
            actionTo="/courses"
          />
          <div className="four-col-grid">
            {classesOfferedSummary.map((item, i) => (
              <Reveal key={item.stage} delay={i * 0.05} className="surface-card">
                <span className="stage-tag">{item.stage}</span>
                <h3>{item.grades}</h3>
                <p className="card-muted">{item.focus}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom & Online Class Gallery */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            title="Classroom & Online Session Gallery"
            subtitle="Sample placeholders ready to be replaced with real online class screenshots and classroom photos."
          />
          <div className="three-col-grid">
            {galleryItems.map((item) => (
              <Reveal key={item.id} className="gallery-card">
                <div className="gallery-image-wrap">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  {item.isPlaceholder && (
                    <span className="placeholder-chip">
                      <Camera size={13} /> Sample Placeholder
                    </span>
                  )}
                </div>
                <div className="gallery-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Progress & Achievements (Placeholders) */}
      <section className="section-block section-tinted">
        <div className="container">
          <SectionHeading
            title="Student Progress & Achievements"
            subtitle="We do not publish fabricated marks or statistics. Real student milestones will be added here as they are documented."
          />
          <div className="three-col-grid">
            {progressPlaceholders.map((item) => (
              <Reveal key={item.id} className="surface-card placeholder-card">
                <div className="placeholder-header">
                  <Award size={18} />
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="card-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parent & Student Feedback (Placeholders) */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            title="Parent & Student Feedback"
            subtitle="Genuine testimonials will appear here once shared and approved by families."
          />
          <div className="two-col-grid">
            {testimonialPlaceholders.map((t) => (
              <Reveal key={t.id} className="surface-card testimonial-card">
                <MessageSquareQuote size={24} className="quote-icon" />
                <p className="testimonial-quote">“{t.quote}”</p>
                <div className="testimonial-meta">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="inline-cta-box">
            <div className="inline-cta-copy">
              <ImageIcon size={22} />
              <div>
                <strong>Want to see if L² Academy fits your child?</strong>
                <span>Schedule a conversation or introductory demo session.</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Book an Enquiry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
