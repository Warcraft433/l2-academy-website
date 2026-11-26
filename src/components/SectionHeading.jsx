import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ kicker, title, subtitle, actionLabel, actionTo }) {
  return (
    <div className="section-heading-row">
      <div className="section-heading-copy">
        {kicker && <span className="section-kicker">{kicker}</span>}
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="section-action-link">
          {actionLabel} <ArrowRight size={15} />
        </Link>
      )}
    </div>
  )
}
