import { useState, useRef, useEffect, useCallback } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import StarBorder from '../StarBorder/StarBorder'
import styles from './Projects.module.css'

export default function Projects({ projects }) {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [modalProject, setModalProject] = useState(null)
  const [resumeOnClose, setResumeOnClose] = useState(false)
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

  const openProject = (targetProject) => {
    setModalProject(targetProject)
    setResumeOnClose(!isPaused)
    if (!isPaused) {
      setIsPaused(true)
    }
    clearInterval(intervalRef.current)
  }

  const closeProject = useCallback(() => {
    setModalProject(null)
    if (resumeOnClose) {
      setIsPaused(false)
    }
  }, [resumeOnClose])

  const handleCardKeyDown = (event, targetProject) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(targetProject)
    }
  }

  useEffect(() => {
    if (!modalProject) return undefined
    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeProject()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [modalProject, closeProject])

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
          <StarBorder
            as="div"
            className={styles.cardShell}
            color="rgba(196, 167, 250, 0.9)"
            speed="5s"
            thickness={2}
            onClick={() => openProject(project)}
            onKeyDown={(event) => handleCardKeyDown(event, project)}
            role="button"
            tabIndex={0}
            aria-label={`Open ${project.title} case study`}
            aria-haspopup="dialog"
            data-cursor="hover"
          >
            <article className={styles.card}>
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
                    onClick={(event) => event.stopPropagation()}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </article>
          </StarBorder>

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

      {modalProject && (
        <div className={styles.modalOverlay} onClick={closeProject}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              type="button"
              onClick={closeProject}
              aria-label="Close project details"
            >
              ×
            </button>

            <header className={styles.modalHeader}>
              <span className={styles.modalBadge}>
                {modalProject.caseStudy?.label || modalProject.badge}
              </span>
              <h2 id="project-modal-title" className={styles.modalTitle}>
                {modalProject.title}
              </h2>
              <p className={styles.modalSubtitle}>{modalProject.line}</p>
            </header>

            <div className={styles.modalGrid}>
              <section className={styles.modalPanel}>
                <h3 className={styles.modalLabel}>Vision</h3>
                <p className={styles.modalText}>
                  {modalProject.caseStudy?.vision || modalProject.description || modalProject.line}
                </p>
              </section>

              <section className={styles.modalPanel}>
                <h3 className={styles.modalLabel}>Program Flow</h3>
                {modalProject.caseStudy?.flow?.length ? (
                  <ol className={styles.modalList}>
                    {modalProject.caseStudy.flow.map((step, index) => (
                      <li key={`${modalProject.id}-step-${index}`} className={styles.modalListItem}>
                        <span className={styles.modalStep}>{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className={styles.modalText}>Case study steps are being finalized.</p>
                )}
                {modalProject.caseStudy?.flowNote && (
                  <p className={styles.modalHint}>{modalProject.caseStudy.flowNote}</p>
                )}
              </section>

              <section className={styles.modalPanel}>
                <h3 className={styles.modalLabel}>Tech Stack</h3>
                <div className={styles.modalTags}>
                  {modalProject.tags.map((tag) => (
                    <span key={tag} className={styles.modalTag}>{tag}</span>
                  ))}
                </div>
              </section>

              <section className={styles.modalPanel}>
                <h3 className={styles.modalLabel}>Build Notes</h3>
                <p className={styles.modalText}>
                  {modalProject.caseStudy?.buildNotes || modalProject.description}
                </p>
              </section>
            </div>

            {modalProject.caseStudy?.screenshots?.length ? (
              <section className={styles.modalScreenshots}>
                <h3 className={styles.modalLabel}>Screenshots</h3>
                <div className={styles.modalShotsGrid}>
                  {modalProject.caseStudy.screenshots.map((shot) => (
                    <div key={shot.src} className={styles.modalShot}>
                      <img src={shot.src} alt={shot.alt || `${modalProject.title} screenshot`} />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <div className={styles.modalActions}>
              {modalProject.link && (
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  View Github
                </a>
              )}
              <button className={styles.modalDismiss} type="button" onClick={closeProject}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}