import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, Atom, BadgeCheck,
  BookMarked, BookOpen, Check, ChevronDown, CircleHelp, Clock3, Compass, Heart,
  HeartHandshake, Languages, Laptop, Lightbulb, Menu, MessageCircle,
  MessageCircleMore, MoveUpRight, Orbit, Plus, Puzzle, Rocket, Send, Sigma,
  Sparkles, Target, TrendingUp, UsersRound, UserRoundCheck, X,
} from 'lucide-react'
import { academy, courses, faqs, features, navigation, reasons, steps, subjects } from './data/academyData.js'

const iconMap = { UsersRound, HeartHandshake, BookOpen, Sparkles, Puzzle, Compass, Target, Orbit, Rocket, Sigma, Atom, Languages, Plus, UserRoundCheck, BookMarked, MessageCircleMore, Laptop, Lightbulb, TrendingUp }

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="L² Academy home">
    <span className="brand-mark" aria-hidden="true"><span>L</span><sup>2</sup></span>
    <span className="brand-copy"><strong>{academy.name}</strong><small>{academy.tagline}</small></span>
  </a>
}

function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduce ? 0 : 0.55, delay }} {...props}>{children}</motion.div>
}

function SectionTitle({ eyebrow, title, text, align = 'center' }) {
  return <div className={`section-title title-${align}`}>
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function Button({ href, children, variant = 'primary', className = '', ...props }) {
  return <a className={`button button-${variant} ${className}`} href={href} {...props}>{children}</a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = event => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])
  const close = () => setOpen(false)
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="header-inner"><Brand />
      <nav id="main-navigation" className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigation.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
        <a className="mobile-demo button button-primary" href="#contact" onClick={close}>Book a free demo <ArrowRight size={16} /></a>
      </nav>
      <Button className="header-cta" href="#contact">Book a free demo <ArrowRight size={16} /></Button>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
  </header>
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-noise" aria-hidden="true" />
    <div className="hero-inner">
      <Reveal className="hero-copy">
        <div className="hero-kicker"><span className="kicker-stars">✳</span> LEARNING, MADE PERSONAL</div>
        <h1>Personal attention.<br /><span>Powerful learning.</span></h1>
        <p className="hero-lead">A little more one-to-one. A lot more room to grow. Discover online tuition built around each student’s pace, questions and goals.</p>
        <div className="hero-actions"><Button href="#contact">Book a free demo <ArrowRight size={17} /></Button><Button href="#courses" variant="text">Explore our courses <ArrowDownRight size={17} /></Button></div>
        <div className="hero-note"><span className="note-avatars"><i>L</i><i>²</i><i>+</i></span><span>For Classes 1–10, +1 &amp; +2<br /><strong>One student. One learning journey.</strong></span></div>
      </Reveal>
      <Reveal className="hero-visual" delay={0.12}>
        <div className="hero-image-wrap"><img src="/images/student-learning.jpg" alt="A student working through a lesson in a bright study space" fetchPriority="high" />
          <div className="image-corner-label"><span className="corner-icon"><BookOpen size={18} /></span><span><strong>Curiosity comes first</strong><small>Learn at your own pace</small></span></div>
        </div>
        <div className="floating-note note-top"><span className="float-icon float-yellow"><Sparkles size={17} /></span><span><strong>Made for you</strong><small>Personal attention</small></span></div>
        <div className="floating-note note-bottom"><span className="float-icon float-green"><BadgeCheck size={18} /></span><span><strong>Concept by concept</strong><small>NCERT-based learning</small></span></div>
        <span className="hero-orbit orbit-one" aria-hidden="true" /><span className="hero-orbit orbit-two" aria-hidden="true" />
      </Reveal>
    </div>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /><span className="hero-bottom-line" /></div>
  </section>
}

function Highlights() {
  return <section className="highlights section-pad" aria-label="How L² Academy supports students"><div className="highlight-grid">
    {features.map(({ icon, number, title, text }, index) => { const Icon = iconMap[icon]; return <Reveal className="highlight-card" key={title} delay={index * 0.06}>
      <div className={`feature-icon feature-${index}`}><Icon size={21} strokeWidth={1.8} /></div><span className="feature-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="feature-rule" />
    </Reveal> })}
  </div></section>
}

function Courses({ onEnquire }) {
  return <section className="courses-section section-pad" id="courses"><div className="section-shell">
    <SectionTitle eyebrow="LEARNING FOR EVERY STAGE" title={<>The right support for<br /><em>what comes next.</em></>} text="Every stage brings something new. Find one-to-one learning for the class your student is in today." />
    <div className="course-grid">{courses.map(({ title, eyebrow, text, icon, color }, i) => { const Icon = iconMap[icon]; return <Reveal className={`course-card course-${color}`} key={title} delay={i * 0.05}>
      <div className="course-card-top"><span className="course-icon"><Icon size={22} strokeWidth={1.75} /></span><span className="course-index">0{i + 1}</span></div>
      <span className="course-eyebrow">{eyebrow}</span><h3>{title}</h3><p>{text}</p>
      <button type="button" className="arrow-link" onClick={() => onEnquire(title)}>Ask about this class <ArrowRight size={16} /></button>
    </Reveal> })}</div>
    <div className="course-footnote"><span className="footnote-mark">i</span>Not sure which option fits? <a href="#contact">Let’s talk it through <ArrowRight size={14} /></a></div>
  </div></section>
}

function Subjects() {
  return <section className="subjects-section section-pad" id="subjects"><div className="section-shell subjects-layout">
    <Reveal className="subjects-intro"><span className="eyebrow"><span className="eyebrow-dot" />SUBJECTS TO EXPLORE</span><h2>Big ideas start<br />with <em>good questions.</em></h2><p>Build understanding in the subjects students meet in class, with room to slow down and get curious.</p><Button href="#contact" variant="outline">Ask about a subject <ArrowRight size={16} /></Button></Reveal>
    <div className="subject-grid">{subjects.map(({ title, text, icon, tint }, i) => { const Icon = iconMap[icon]; return <Reveal key={title} className={`subject-card subject-${tint}`} delay={i * 0.06}><span className="subject-icon"><Icon size={23} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Enquire about ${title}`}><ArrowUpRightIcon /></a></Reveal> })}</div>
  </div></section>
}

function ArrowUpRightIcon() { return <MoveUpRight size={17} /> }

function InstagramGlyph() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.8" r=".8" fill="currentColor" stroke="none"/></svg> }
function FacebookGlyph() { return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M13.55 21v-8.2h2.76l.42-3.2h-3.18V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14c-.3-.04-1.35-.14-2.57-.14-2.55 0-4.3 1.56-4.3 4.43V9.6H7.1v3.2h2.87V21h3.58Z"/></svg> }

function About() {
  return <section className="about-section section-pad" id="about"><div className="section-shell about-layout">
    <Reveal className="about-visual"><div className="about-image-frame"><img src="/images/learning-students.jpg" alt="Students reading and learning together in a classroom" loading="lazy" /><span className="image-sticker"><Heart size={15} fill="currentColor" /> Learn with confidence</span></div><span className="about-doodle" aria-hidden="true">✳</span><div className="about-caption"><span className="caption-number">L²</span><span>Curiosity is a<br /><strong>great place to start.</strong></span></div></Reveal>
    <Reveal className="about-copy"><span className="eyebrow"><span className="eyebrow-dot" />A LITTLE ABOUT US</span><h2>Every student has<br />their own <em>way forward.</em></h2><p>At L² Academy, we believe every student deserves individual attention and a learning experience that matches their pace. Our one-to-one online tuition approach focuses on understanding concepts, building confidence and encouraging academic growth.</p><p>With NCERT-based learning and interactive sessions, students get the space to ask questions, practise thoughtfully and take the next step with confidence.</p><Button href="#contact">Get to know us <ArrowRight size={16} /></Button></Reveal>
  </div></section>
}

function WhyChooseUs() {
  return <section className="why-section section-pad" id="why-us"><div className="section-shell"><SectionTitle eyebrow="THE L² DIFFERENCE" title={<>A learning experience that<br /><em>starts with the student.</em></>} text="Good learning feels personal. Here are a few ways our approach helps make that happen." />
    <div className="reasons-grid">{reasons.map(([icon, title, text], i) => { const Icon = iconMap[icon]; return <Reveal className="reason-item" key={title} delay={i * 0.04}><span className="reason-icon"><Icon size={20} strokeWidth={1.8} /></span><div><h3>{title}</h3><p>{text}</p></div></Reveal> })}</div>
  </div></section>
}

function Process() {
  return <section className="process-section section-pad"><div className="section-shell"><div className="process-heading"><SectionTitle align="left" eyebrow="A SIMPLE START" title={<>From first hello<br />to <em>first lesson.</em></>} text="A straightforward way to find out if one-to-one tuition is the right fit." /><div className="process-decoration" aria-hidden="true"><span>✳</span><small>LET’S LEARN<br />TOGETHER</small></div></div>
    <div className="steps-grid">{steps.map(([number, title, text], i) => <Reveal key={number} className="step-card" delay={i * 0.07}><span className="step-number">{number}</span><span className="step-dot" /><h3>{title}</h3><p>{text}</p>{i < steps.length - 1 && <ArrowRight className="step-arrow" size={19} />}</Reveal>)}</div>
  </div></section>
}

function Activities() {
  return <section className="activities-section section-pad" id="activities"><div className="section-shell"><Reveal className="activity-banner"><div className="activity-pattern" aria-hidden="true"><span>?</span><span>+</span><span>∑</span></div><div className="activity-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" />A LITTLE FRIENDLY CHALLENGE</span><h2>Practice can be<br /><em>playful, too.</em></h2><p>From NCERT-based MCQ quizzes to timed challenges, interactive activities and leaderboard events, there are more ways to bring learning to life.</p><Button href="#contact" variant="white">Ask about upcoming quizzes <ArrowRight size={16} /></Button><small className="activity-note">Quiz activities are shared by the academy. No quiz application is included on this page.</small></div><div className="activity-art"><div className="quiz-card quiz-card-back"><span className="quiz-dot" /><span className="quiz-dot" /><span className="quiz-dot" /></div><div className="quiz-card quiz-card-main"><div className="quiz-card-top"><span className="quiz-mini-icon"><Sparkles size={17} /></span><span className="quiz-live"><i /> LEARNING TIME</span></div><div className="quiz-question">Which way will<br />you solve it?</div><div className="quiz-option quiz-option-active"><span>A</span> One step at a time <Check size={14} /></div><div className="quiz-option"><span>B</span> Try another approach</div><div className="quiz-progress"><i /></div><div className="quiz-bottom"><span><Clock3 size={13} /> TIMED CHALLENGE</span><span>02 / 05</span></div></div><div className="quiz-spark spark-one">✳</div><div className="quiz-spark spark-two">✦</div></div></Reveal></div></section>
}

function Testimonials() {
  return <section className="testimonials-section section-pad"><div className="section-shell"><SectionTitle eyebrow="KIND WORDS, COMING SOON" title={<>The best part is<br /><em>still being written.</em></>} text="We’ll share genuine feedback here once parents and students have given permission. For now, we’d love to hear what matters to your family." />
    <Reveal className="testimonial-placeholder"><div className="quote-mark">“</div><div className="placeholder-message"><span className="placeholder-label"><span /> FEEDBACK PLACEHOLDER</span><p>Parent and student experiences will appear here after they are collected and approved.</p><span className="placeholder-credit">L² Academy · One-to-One Online Tuition</span></div><div className="placeholder-side"><MessageCircle size={24} /><span>Have a question?</span><a href="#contact">Let’s talk <ArrowRight size={14} /></a></div></Reveal>
  </div></section>
}

function FAQ() {
  const [active, setActive] = useState(0)
  return <section className="faq-section section-pad" id="faq"><div className="section-shell faq-layout"><Reveal className="faq-intro"><span className="eyebrow"><span className="eyebrow-dot" />GOOD TO KNOW</span><h2>A few things<br />you might be<br /><em>wondering.</em></h2><p>Still have a question? We’re happy to help you find an answer.</p><a className="faq-contact-link" href="#contact">Ask us directly <ArrowRight size={15} /></a><CircleHelp className="faq-doodle" size={94} strokeWidth={0.8} /></Reveal><div className="faq-list" role="list">{faqs.map(([question, answer], i) => <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={question} role="listitem"><button type="button" className="faq-question" aria-expanded={active === i} aria-controls={`faq-answer-${i}`} onClick={() => setActive(active === i ? -1 : i)}><span className="faq-index">0{i + 1}</span><span>{question}</span><span className="faq-chevron"><ChevronDown size={18} /></span></button><AnimatePresence initial={false}>{active === i && <motion.div id={`faq-answer-${i}`} className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
}

function Contact({ selectedClass, setSelectedClass }) {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', class: selectedClass || '', subject: '', message: '' })
  useEffect(() => setForm(previous => ({ ...previous, class: selectedClass || previous.class })), [selectedClass])
  const phone = academy.phone.replace(/\D/g, '')
  const whatsapp = phone ? `https://wa.me/${phone}?text=${encodeURIComponent('Hello L² Academy, I would like to enquire about one-to-one tuition.')}` : '#contact-form'
  function update(event) { setForm({ ...form, [event.target.name]: event.target.value }); setStatus(null) }
  function submit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    if (!academy.email) {
      setStatus({ type: 'error', text: 'Enquiry delivery is not configured yet. Please contact the academy directly once its email or WhatsApp details are added.' })
      return
    }
    const subject = encodeURIComponent(`Tuition enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nClass: ${form.class}\nSubject: ${form.subject || 'Not specified'}\n\n${form.message}`)
    window.location.href = `mailto:${academy.email}?subject=${subject}&body=${body}`
    setStatus({ type: 'success', text: 'Your email app should open with this enquiry ready to review. Please send the draft there to contact the academy.' })
  }
  return <section className="contact-section section-pad" id="contact"><div className="section-shell contact-layout"><Reveal className="contact-copy"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" />LET’S START A CONVERSATION</span><h2>Every big step<br />starts with <em>hello.</em></h2><p>Tell us what your student needs. We’ll help you explore the next step together.</p>
    <div className="contact-option"><span className="contact-option-icon"><MessageCircle size={20} /></span><div><small>QUICK QUESTION?</small><a href={whatsapp} target={phone ? '_blank' : undefined} rel={phone ? 'noreferrer' : undefined}>{phone ? 'Chat with us on WhatsApp' : 'WhatsApp contact coming soon'} <ArrowUpRightIcon /></a></div></div>
    <div className="contact-scribble" aria-hidden="true">Let’s learn<br /><span>together.</span><ArrowDownRight size={28} /></div>
  </Reveal><Reveal className="contact-form-wrap" delay={0.12}><form id="contact-form" className="contact-form" onSubmit={submit}>
    <div className="form-heading"><div><span className="form-kicker">YOUR FIRST STEP</span><h3>Book a free demo</h3></div><span className="form-star">✳</span></div>
    <p className="form-description">A few details will help us understand how to support your student.</p>
    <div className="form-grid"><label>Your name<input name="name" autoComplete="name" placeholder="Parent or student name" required minLength="2" value={form.name} onChange={update} /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" required pattern="[+0-9() .-]{7,20}" title="Enter a phone number with at least 7 digits." value={form.phone} onChange={update} /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={form.email} onChange={update} /></label><label>Class<select name="class" required value={form.class} onChange={event => { update(event); setSelectedClass(event.target.value) }}><option value="">Select a class</option>{courses.map(course => <option key={course.title}>{course.title}</option>)}</select></label>
      <label className="field-full">Subject of interest<input name="subject" placeholder="e.g. Mathematics" value={form.subject} onChange={update} /></label><label className="field-full">Anything else we should know?<textarea name="message" rows="3" placeholder="Tell us a little about the student's learning goals…" value={form.message} onChange={update} /></label></div>
    <button className="button button-primary form-submit" type="submit">Send an enquiry <Send size={16} /></button>
    {status && <p className={`form-status status-${status.type}`} role="status">{status.text}</p>}
    <p className="form-privacy">Your details are used only to respond to this enquiry.</p>
  </form></Reveal></div></section>
}

function Footer() {
  const socials = [['Instagram', academy.instagram, InstagramGlyph], ['Facebook', academy.facebook, FacebookGlyph]]
  return <footer className="site-footer"><div className="footer-main section-shell"><div className="footer-about"><Brand light /><p>One-to-one online tuition with room to learn, ask questions and grow with confidence.</p><a className="footer-top-link" href="#home">Back to the top <ArrowUp size={14} /></a></div><div className="footer-column"><h3>EXPLORE</h3><a href="#about">About L² Academy</a><a href="#courses">Classes &amp; courses</a><a href="#subjects">Subjects</a><a href="#activities">Learning activities</a><a href="#faq">FAQs</a></div><div className="footer-column"><h3>LEARNING FOR</h3>{courses.map(({ title }) => <a href="#courses" key={title}>{title}</a>)}</div><div className="footer-column footer-contact"><h3>GET IN TOUCH</h3><a href="#contact">Book a free demo <ArrowRight size={14} /></a>{academy.email ? <a href={`mailto:${academy.email}`}>{academy.email}</a> : <span>Email details coming soon</span>}{academy.phone ? <a href={`tel:${academy.phone}`}>{academy.phone}</a> : <span>WhatsApp details coming soon</span>}<div className="social-row">{socials.filter(([, href]) => href).map(([label, href, Icon]) => <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={16} /></a>)}</div></div></div><div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} L² Academy. All rights reserved.</span><span>One-to-One Online Tuition <span className="footer-spark">✳</span></span></div></footer>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <button type="button" className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}><ArrowUp size={18} /></button>
}

export default function App() {
  const [selectedClass, setSelectedClass] = useState('')
  function enquire(classTitle) { setSelectedClass(classTitle); document.getElementById('contact')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }) }
  return <><Header /><main><Hero /><Highlights /><Courses onEnquire={enquire} /><Subjects /><About /><WhyChooseUs /><Process /><Activities /><Testimonials /><FAQ /><Contact selectedClass={selectedClass} setSelectedClass={setSelectedClass} /></main><Footer /><BackToTop /></>
}
