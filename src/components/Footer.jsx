import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { academy, navigation } from '../data/academyData.js'
import Logo from './Logo.jsx'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M13.6 21v-8.2h2.7l.4-3.2h-3.1V7.6c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.3 1.5-4.3 4.4V9.6H7.2v3.2h2.9V21h3.5Z" />
    </svg>
  )
}

export default function Footer() {
  const whatsappDigits = academy.whatsappNumber.replace(/\D/g, '')
  const whatsappUrl = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Hello L² Academy, I would like to enquire about tuition.')}`
    : null

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo variant="light" />
          <p className="footer-desc">
            Personalized one-to-one online tuition—and offline support where applicable—focused on concept clarity, calm guidance, and student confidence.
          </p>
        </div>

        <div className="footer-links-col">
          <h3>Quick Links</h3>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-social-col">
          <h3>Connect With Us</h3>
          <p className="footer-contact-note">
            {academy.email ? academy.email : 'Contact details & WhatsApp can be updated in academyData.js'}
          </p>
          <div className="footer-socials">
            {academy.instagram ? (
              <a href={academy.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            ) : (
              <span className="social-badge" title="Instagram link placeholder">
                <InstagramIcon />
              </span>
            )}
            {academy.facebook ? (
              <a href={academy.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            ) : (
              <span className="social-badge" title="Facebook link placeholder">
                <FacebookIcon />
              </span>
            )}
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={17} />
              </a>
            ) : (
              <Link to="/contact" aria-label="Enquire via Contact page" title="WhatsApp placeholder — go to Contact">
                <MessageCircle size={17} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {academy.legalName}. All rights reserved.</span>
        <span>One-to-One Online &amp; Offline Tuition</span>
      </div>
    </footer>
  )
}
