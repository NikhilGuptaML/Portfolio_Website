import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero({ roles, stats }) {
  const canvasRef = useRef(null)
  const [roleText, setRoleText] = useState('')

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
      if (!isMounted) {
        return
      }

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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return undefined
    }

    let width = 0
    let height = 0
    let animationFrame = 0
    const particleCount = 120
    const maxDistance = 155
    const mouse = { x: -9999, y: -9999 }
    const particles = []

    class Particle {
      constructor() {
        this.respread()
      }

      respread() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.radius = Math.random() * 1.4 + 0.5
      }

      move() {
        const deltaX = mouse.x - this.x
        const deltaY = mouse.y - this.y
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        if (distance > 0 && distance < 200) {
          this.vx += (deltaX / distance) * 0.018
          this.vy += (deltaY / distance) * 0.018
        }

        this.vx *= 0.994
        this.vy *= 0.994
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }
    }

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      particles.forEach((particle) => particle.respread())
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (let i = 0; i < particleCount; i += 1) {
        for (let j = i + 1; j < particleCount; j += 1) {
          const deltaX = particles[i].x - particles[j].x
          const deltaY = particles[i].y - particles[j].y
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

          if (distance < maxDistance) {
            context.beginPath()
            context.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / maxDistance) * 0.35})`
            context.lineWidth = 0.55
            context.moveTo(particles[i].x, particles[i].y)
            context.lineTo(particles[j].x, particles[j].y)
            context.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(255, 255, 255, 0.75)'
        context.fill()
        particle.move()
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    for (let i = 0; i < particleCount; i += 1) {
      particles.push(new Particle())
    }

    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', handleMouseMove)
    animationFrame = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="hero" className={styles.heroSection}>
      <canvas ref={canvasRef} className={styles.heroCanvas} aria-hidden="true" />
      <div className={styles.heroVeil} aria-hidden="true" />

      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            AI Engineer · Open to Remote Roles
          </p>

          <h1 className={styles.title}>
            Nikhil<span className={styles.titleAccent}>Gupta.</span>
          </h1>

          <p className={styles.role}>
            <span>{roleText}</span>
            <span className={styles.cursor} />
          </p>

          <p className={styles.bio}>
            I build <strong>AI systems that actually ship</strong> - VLM finetuning,
            agentic pipelines, and production APIs. CS undergrad, self-taught,
            obsessed with the gap between research and real deployment.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryButton}>
              View Work
            </a>
            <a
              href="https://github.com/NikhilGuptaML"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              GitHub →
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard} data-cursor="hover">
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}