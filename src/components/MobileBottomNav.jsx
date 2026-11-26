import { NavLink } from 'react-router-dom'
import { BookOpen, Home, Info, PhoneCall } from 'lucide-react'

const mobileTabs = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Courses', path: '/courses', icon: BookOpen },
  { label: 'About', path: '/about', icon: Info },
  { label: 'Contact', path: '/contact', icon: PhoneCall },
]

export default function MobileBottomNav() {
  return (
    <div className="mobile-bottom-wrap">
      <nav className="mobile-bottom-nav" aria-label="Quick mobile navigation">
        {mobileTabs.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) => `mobile-tab ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={18} strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
