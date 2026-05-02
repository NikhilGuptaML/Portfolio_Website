import { useState, useRef, useEffect, useCallback } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Projects.module.css'

export default function Projects({ projects }) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef(null)
  const intervalRef = useRef(null)
  const total = projects.length

  // Auto-advance
  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total)
    }, 5000)
  }, [total])

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay()
    }
    return () => clearInterval(intervalRef.current)
  }, [isPaused, startAutoPlay])

  const goTo = (index) => {
    setActive(index)
    if (!isPaused) startAutoPlay()
  }

  const goNext = () => goTo((active + 1) % total)
  const goPrev = () => goTo((active - 1 + total) % total)

  const togglePause = () => {
    setIsPaused((p) => {
      if (!p) clearInterval(intervalRef.current)
      return !p
    })
  }

  const project = projects[active]

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionHeading
          label="Selected Work"
          title="Things I've Built"
          subtitle="Real projects. Real constraints. Shipping actual software."
          centered
        />
      </div>

      {/* ─── Carousel ─── */}
      <div className={styles.carousel}>
        <div className={styles.stage} ref={trackRef}>
          {/* Navigation Arrows */}
          <button className={styles.arrow} onClick={goPrev} aria-label="Previous project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Active Project Card */}
          <article className={styles.card} key={project.id}>
            <div className={styles.cardHeader}>
              <span className={styles.number}>{project.id}</span>
              <span className={styles.badge}>{project.badge}</span>
            </div>

            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.oneLiner}>{project.line}</p>
            {project.description && (
              <p className={styles.description}>{project.description}</p>
            )}

            <div className={styles.meta}>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Project →
                </a>
              )}
            </div>
          </article>

          <button className={styles.arrow} onClick={goNext} aria-label="Next project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* ─── Pagination Bar (Apple-style) ─── */}
        <div className={styles.controls}>
          <div className={styles.pagination}>
            {projects.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.pauseBtn}
            onClick={togglePause}
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="4" width="4" height="16" rx="1" />
                <rect x="15" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}