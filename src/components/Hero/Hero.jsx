import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero({ roles, stats }) {
  const videoRef = useRef(null)
  const [roleText, setRoleText] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 900)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRoleText(roles[0])
      return undefined
    }

    let isMounted = true
    let timeoutId = 0
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      if (!isMounted) return
      const currentRole = roles[roleIndex]

      if (!isDeleting) {
        charIndex += 1
        setRoleText(currentRole.slice(0, charIndex))
        if (charIndex === currentRole.length) {
          isDeleting = true
          timeoutId = window.setTimeout(type, 2200)
          return
        }
      } else {
        charIndex -= 1
        setRoleText(currentRole.slice(0, charIndex))
        if (charIndex === 0) {
          isDeleting = false
          roleIndex = (roleIndex + 1) % roles.length
          timeoutId = window.setTimeout(type, 400)
          return
        }
      }
      timeoutId = window.setTimeout(type, isDeleting ? 45 : 68)
    }

    timeoutId = window.setTimeout(type, 1200)
    return () => {
      isMounted = false
      window.clearTimeout(timeoutId)
    }
  }, [roles])

  return (
    <section id="hero" className={styles.hero}>
      {/* Video Background */}
      {!isMobile && (
        <>
          <video
            ref={videoRef}
            className={styles.video}
            src="/videos/hero-ink.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className={styles.veil} aria-hidden="true" />
        </>
      )}

      {/* Centered Hero Content — Apple-style */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} />
          Available for Work
        </p>

        <h1 className={styles.name}>
          Nikhil Gupta
        </h1>

        <p className={styles.role}>
          <span>{roleText}</span>
          <span className={styles.cursor} />
        </p>

        <p className={styles.bio}>
          I build <strong>AI systems that actually ship</strong> — VLM finetuning,
          agentic pipelines, and production APIs.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View Work
          </a>
          <a
            href="https://github.com/NikhilGuptaML"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* Stats Bar — bottom of hero */}
      <div className={styles.statsBar}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat} data-cursor="hover">
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}