import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ title, subtitle, actionLabel, actionTo }) {
  return (
    <div className="section-heading-row">
      <div className="section-heading-copy">
        <div className="section-heading-bar-wrap">
          <span className="heading-accent-bar" aria-hidden="true" />
          <h2>{title}</h2>
        </div>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="section-action-link">
          {actionLabel} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  )
}
