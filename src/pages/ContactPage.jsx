import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone, QrCode, Send } from 'lucide-react'
import { academy } from '../data/academyData.js'
import { coursesList } from '../data/coursesData.js'
import Reveal from '../components/Reveal.jsx'

function SampleQrSvg() {
  return (
    <svg
      viewBox="0 0 120 120"
      width="160"
      height="160"
      className="sample-qr-svg"
      role="img"
      aria-label="Sample placeholder QR code"
    >
      <rect width="120" height="120" rx="8" fill="#ffffff" />
      <rect x="10" y="10" width="30" height="30" rx="3" fill="none" stroke="#1b3b60" strokeWidth="5" />
      <rect x="19" y="19" width="12" height="12" fill="#1b3b60" />
      <rect x="80" y="10" width="30" height="30" rx="3" fill="none" stroke="#1b3b60" strokeWidth="5" />
      <rect x="89" y="19" width="12" height="12" fill="#1b3b60" />
      <rect x="10" y="80" width="30" height="30" rx="3" fill="none" stroke="#1b3b60" strokeWidth="5" />
      <rect x="19" y="89" width="12" height="12" fill="#1b3b60" />
      <path
        d="M50 12h8v8h-8zM64 12h8v14h-8zM50 28h8v12h-8zM12 50h14v8H12zM34 50h12v8H34zM54 48h14v14H54zM76 50h12v8H76zM96 50h14v14H96zM50 70h10v10H50zM68 70h14v8H68zM88 68h10v14H88zM50 88h14v14H50zM72 88h12v10H72zM92 90h16v16H92zM72 104h14v6H72z"
        fill="#1b3b60"
      />
    </svg>
  )
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const preselectedCourse = searchParams.get('course') || ''

  const [form, setForm] = useState({
    parentName: '',
    phone: '',
    grade: '',
    course: preselectedCourse,
    mode: 'Online Tuition',
    message: '',
  })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (preselectedCourse) {
      setForm((prev) => ({ ...prev, course: preselectedCourse }))
    }
  }, [preselectedCourse])

  const whatsappDigits = academy.whatsappNumber.replace(/\D/g, '')
  const whatsappHref = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
        'Hello L² Academy, I would like to enquire about tuition.'
      )}`
    : null

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    setStatus(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return

    if (!academy.email) {
      setStatus({
        type: 'info',
        text: 'Enquiry details validated. Direct email delivery is not configured yet—add the academy email or WhatsApp number in src/data/academyData.js to enable instant sending.',
      })
      return
    }

    const subject = encodeURIComponent(`L² Academy Enquiry — ${form.parentName}`)
    const body = encodeURIComponent(
      `Parent Name: ${form.parentName}\nContact Number: ${form.phone}\nStudent Class/Grade: ${form.grade}\nCourse / Subject: ${form.course || 'General Enquiry'}\nPreferred Mode: ${form.mode}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${academy.email}?subject=${subject}&body=${body}`
    setStatus({
      type: 'success',
      text: 'Your email app should open with this enquiry prefilled. Please send the draft there to reach L² Academy.',
    })
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <span className="page-kicker">Parents &amp; Students</span>
          <h1>Contact &amp; Enquiry</h1>
          <p>
            Designed for quick mobile enquiries. Reach out to discuss classes, timings, online or offline tuition, and a free introductory demo.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container contact-page-grid">
          {/* Left Column: Direct Contact & QR */}
          <Reveal className="contact-info-stack">
            <div className="surface-card whatsapp-highlight-card">
              <span className="pill-badge">Fastest on Mobile</span>
              <h2>Chat on WhatsApp</h2>
              <p className="card-muted">
                Have a quick question about class timings, Mathematics tuition, or demo availability?
              </p>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-full"
                >
                  <MessageCircle size={18} /> Message on WhatsApp
                </a>
              ) : (
                <div className="placeholder-notice">
                  <MessageCircle size={18} />
                  <span>{academy.whatsappDisplay} (Update in academyData.js)</span>
                </div>
              )}
            </div>

            <div className="surface-card contact-details-card">
              <h3>Academy Contact Details</h3>
              <ul className="contact-detail-list">
                <li>
                  <Phone size={18} />
                  <div>
                    <small>Phone</small>
                    <strong>{academy.phone || academy.phoneDisplay}</strong>
                  </div>
                </li>
                <li>
                  <Mail size={18} />
                  <div>
                    <small>Email</small>
                    <strong>{academy.email || academy.emailDisplay}</strong>
                  </div>
                </li>
                <li>
                  <MapPin size={18} />
                  <div>
                    <small>Location</small>
                    <strong>{academy.location}</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="surface-card qr-card">
              <div className="qr-header">
                <QrCode size={18} />
                <span>Quick Contact QR Code</span>
              </div>
              <div className="qr-box">
                {academy.qrCodeImage ? (
                  <img src={academy.qrCodeImage} alt="L² Academy Contact QR Code" width="160" height="160" />
                ) : (
                  <SampleQrSvg />
                )}
              </div>
              <span className="placeholder-chip">
                {academy.isSampleQr ? 'SAMPLE QR CODE — Replace with your actual WhatsApp / Enquiry QR' : 'Scan to Connect'}
              </span>
            </div>
          </Reveal>

          {/* Right Column: Parent-Friendly Enquiry Form */}
          <Reveal className="surface-card enquiry-form-card" delay={0.08}>
            <h2>Send an Enquiry</h2>
            <p className="card-muted">
              Fill in a few details below and we will get back to you regarding the student’s class and learning needs.
            </p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <label className="form-field">
                  <span>Parent / Guardian Name *</span>
                  <input
                    name="parentName"
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={form.parentName}
                    onChange={handleChange}
                  />
                </label>

                <label className="form-field">
                  <span>Contact Number *</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    pattern="[+0-9\\s.\\-\\(\\)]{7,20}"
                    title="Enter a valid phone number"
                    placeholder="Mobile / WhatsApp number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="form-row-2">
                <label className="form-field">
                  <span>Student Class / Grade *</span>
                  <input
                    name="grade"
                    type="text"
                    required
                    placeholder="e.g. Class 8, +1, Engineering"
                    value={form.grade}
                    onChange={handleChange}
                  />
                </label>

                <label className="form-field">
                  <span>Tuition Mode</span>
                  <select name="mode" value={form.mode} onChange={handleChange}>
                    <option value="Online Tuition">Online Tuition</option>
                    <option value="Offline Tuition (where applicable)">Offline Tuition (where applicable)</option>
                    <option value="Open to Either">Open to Either</option>
                  </select>
                </label>
              </div>

              <label className="form-field">
                <span>Course / Subject of Interest</span>
                <select name="course" value={form.course} onChange={handleChange}>
                  <option value="">Select a subject or course</option>
                  {coursesList.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="General Enquiry">General Enquiry / Multiple Subjects</option>
                </select>
              </label>

              <label className="form-field">
                <span>Message (Optional)</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share preferred timings, syllabus/board, or any specific learning goals..."
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <button type="submit" className="btn btn-primary btn-full">
                Submit Enquiry <Send size={16} />
              </button>

              {status && (
                <p className={`form-feedback form-feedback--${status.type}`} role="status">
                  {status.text}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
