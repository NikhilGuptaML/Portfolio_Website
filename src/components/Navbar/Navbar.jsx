import { useState } from 'react'
import ResumeModal from '../ResumeModal/ResumeModal'
import styles from './Navbar.module.css'

export default function Navbar({ links }) {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <a href="#hero" className={styles.logo} aria-label="Nikhil Gupta home">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="logoGrad" x1="7" y1="8" x2="34" y2="31" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f0f0f0" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path d="M7 8V30M7 8L20 30M20 8V30" stroke="url(#logoGrad)" strokeWidth="2.8" strokeLinecap="square" />
            <rect x="25" y="22" width="9" height="9" fill="url(#logoGrad)" />
          </svg>
        </a>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.resumeBtn}
            onClick={() => setResumeOpen(true)}
          >
            Resume
          </button>
          <a href="mailto:nikhilg.vips@gmail.com" className={styles.cta}>
            Hire Me
          </a>
        </div>
      </nav>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}