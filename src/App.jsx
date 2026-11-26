import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MobileBottomNav from './components/MobileBottomNav.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import ClassesResultsPage from './pages/ClassesResultsPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/classes-results" element={<ClassesResultsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </BrowserRouter>
  )
}
