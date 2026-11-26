import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Laptop, Sparkles, Users } from 'lucide-react'
import { courseCategories, coursesList, mathStrengthPoints } from '../data/coursesData.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(
    courseCategories.includes(initialCategory) ? initialCategory : 'All'
  )

  useEffect(() => {
    const paramCat = searchParams.get('category')
    if (paramCat && courseCategories.includes(paramCat)) {
      setActiveCategory(paramCat)
    }
  }, [searchParams])

  const filteredCourses =
    activeCategory === 'All'
      ? coursesList
      : coursesList.filter((course) => course.category === activeCategory)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <span className="page-kicker">Subjects &amp; Tuition Details</span>
          <h1>Courses &amp; Tuition Details</h1>
          <p>
            Flexible one-to-one tuition across Mathematics, Sciences, English, Computer Science, and Higher Education Mathematics. All timings and schedules can be tailored to the student.
          </p>
        </div>
      </section>

      {/* Mathematics — Key Strength Highlight */}
      <section className="section-block section-tinted">
        <div className="container">
          <Reveal className="math-spotlight-card">
            <div className="math-spotlight-intro">
              <span className="pill-badge">
                <Sparkles size={14} /> Academy’s Key Strength
              </span>
              <h2>Making Mathematics Simple, Meaningful &amp; Interesting.</h2>
              <p>
                While L² Academy is committed to quality guidance across every subject we teach, Mathematics is our signature strength. Our founder specializes in helping students understand concepts clearly—so even learners who once disliked Mathematics can build real confidence.
              </p>
            </div>
            <div className="math-points-grid">
              {mathStrengthPoints.map((pt) => (
                <div key={pt.title} className="math-point-item">
                  <h3>{pt.title}</h3>
                  <p>{pt.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subject Categories & Tuition Details */}
      <section className="section-block">
        <div className="container">
          <SectionHeading
            title="Explore Subjects & Schedules"
            subtitle="Filter by subject category. Exact timings, batch options, and fee details are confirmed during enquiry."
          />

          <div className="category-filter-bar" role="tablist" aria-label="Filter courses by subject">
            {courseCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-pill ${activeCategory === category ? 'is-active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="courses-detail-grid">
            {filteredCourses.map((course) => (
              <Reveal key={course.id} className={`course-detail-card ${course.highlight ? 'is-featured' : ''}`}>
                <div className="course-detail-top">
                  <span className="course-cat-tag">{course.category}</span>
                  {course.highlight && <span className="core-tag">Core Strength</span>}
                </div>
                <h3>{course.title}</h3>
                <p className="course-grade">{course.gradeLevel}</p>
                <p className="course-desc">{course.description}</p>

                <dl className="course-specs">
                  <div>
                    <dt><Laptop size={14} /> Mode</dt>
                    <dd>{course.mode}</dd>
                  </div>
                  <div>
                    <dt><Users size={14} /> Format</dt>
                    <dd>{course.format}</dd>
                  </div>
                  <div>
                    <dt><Clock size={14} /> Duration &amp; Timings</dt>
                    <dd>{course.duration} · {course.timings}</dd>
                  </div>
                  <div>
                    <dt><Calendar size={14} /> Schedule &amp; Fees</dt>
                    <dd>{course.schedule} · {course.feeDetails}</dd>
                  </div>
                </dl>

                <Link
                  to={`/contact?course=${encodeURIComponent(course.title)}`}
                  className="btn btn-primary btn-sm course-enquire-btn"
                >
                  Enquire / Join <ArrowRight size={15} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
