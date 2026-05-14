import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Experience.module.css'

export default function Experience({ timeline }) {
  const [active, setActive] = useState(0)

  return (
    <section id="experience">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="The Journey So Far"
          centered
        />

        {/* ─── Constellation Timeline ─── */}
        <div className={`reveal ${styles.constellation}`}>
          {/* The connecting line */}
          <div className={styles.line} aria-hidden="true" />

          {/* Stars (dots) along the line */}
          <div className={styles.stars}>
            {timeline.map((entry, i) => (
              <button
                key={i}
                className={`${styles.star} ${i === active ? styles.starActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`${entry.role} at ${entry.company}`}
              >
                <span className={styles.starDot} />
                <span className={styles.starGlow} aria-hidden="true" />
                <span className={styles.starLabel}>{entry.period.split(' — ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Active Entry Detail ─── */}
        <div className={styles.detail} key={active}>
          <div className={styles.detailHeader}>
            <div>
              <span className={styles.type}>{timeline[active].type}</span>
              <h3 className={styles.role}>{timeline[active].role}</h3>
              <p className={styles.company}>
                {timeline[active].company} <span className={styles.period}>· {timeline[active].period}</span>
              </p>
            </div>
          </div>

          <p className={styles.detailText}>{timeline[active].description}</p>

          <div className={styles.skills}>
            {timeline[active].skills.map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
