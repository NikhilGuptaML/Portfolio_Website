import { useEffect, useCallback } from 'react'
import styles from './ResumeModal.module.css'

const RESUME_URL = '/resume.pdf'

export default function ResumeModal({ isOpen, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!isOpen) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          type="button"
          onClick={onClose}
          aria-label="Close resume dialog"
        >
          ×
        </button>

        <span className={styles.badge}>Resume</span>
        <h2 id="resume-modal-title" className={styles.title}>
          View or download my resume
        </h2>
        <p className={styles.subtitle}>
          Open the PDF in a new tab or download a local copy.
        </p>

        <div className={styles.actions}>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            View Resume
          </a>
          <a href={RESUME_URL} download className={styles.btnGhost}>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
