import ColorBends from '../ColorBends/ColorBends'
import TextType from '../TextType/TextType'
import styles from './Hero.module.css'

export default function Hero({ roles, stats }) {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background Effects */}
      <div className={styles.colorBends} aria-hidden="true">
        <ColorBends
          colors={["#a78bfa", "#e879f9", "#fbbf24"]}
          rotation={92}
          speed={0.22}
          scale={1.05}
          frequency={1.05}
          warpStrength={1.05}
          mouseInfluence={0.9}
          parallax={0.55}
          noise={0.1}
          iterations={1}
          intensity={1.3}
          bandWidth={6}
          transparent
          className={styles.colorBendsCanvas}
        />
      </div>
      <div className={styles.veil} aria-hidden="true" />

      {/* Centered Hero Content — Apple-style */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          Nikhil Gupta
        </h1>

        <p className={styles.role}>
          <TextType
            as="span"
            text={roles}
            typingSpeed={68}
            deletingSpeed={45}
            pauseDuration={2200}
            initialDelay={1200}
            showCursor
            cursorCharacter=""
            cursorClassName={styles.cursor}
          />
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