import { Link } from 'react-router-dom'
import { academy } from '../data/academyData.js'

export default function Logo({ variant = 'light', size = 'md' }) {
  const isLight = variant === 'light'
  return (
    <Link
      to="/"
      className={`brand-logo brand-logo--${variant} brand-logo--${size}`}
      aria-label={`${academy.name} — Home`}
    >
      <span className="brand-cap" aria-hidden="true">
        <svg viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 3L2 12L22 21L42 12L22 3Z"
            fill={isLight ? '#FFFFFF' : '#1b3b60'}
          />
          <path
            d="M11 17.5V26.2C11 29.2 15.9 32.5 22 32.5C28.1 32.5 33 29.2 33 26.2V17.5L22 22.5L11 17.5Z"
            fill={isLight ? '#DCEBFA' : '#2c6ea8'}
          />
          <path
            d="M38 14V26.5"
            stroke={isLight ? '#FFFFFF' : '#1b3b60'}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="38" cy="28" r="2.2" fill={isLight ? '#93C5FD' : '#3b73a8'} />
        </svg>
      </span>
      <span className="brand-text">
        <strong>
          L<sup>2</sup> ACADEMY
        </strong>
        <small>{academy.tagline}</small>
      </span>
    </Link>
  )
}
