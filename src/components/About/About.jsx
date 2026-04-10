import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './About.module.css'

export default function About({ paragraphs, meta }) {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading label="About" title="The Short Version" />

        <div className={styles.aboutGrid}>
          <div className={`reveal ${styles.aboutText}`}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className={styles.links}>
              <a
                href="https://linkedin.com/in/nikhil-gupta-827b3b31a/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/NikhilGuptaML"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className={`reveal ${styles.meta}`}>
            {meta.map((item) => (
              <div key={item.label} className={styles.metaItem} data-cursor="hover">
                <span className={styles.metaKey}>{item.label}</span>
                <span className={item.accent ? `${styles.metaValue} ${styles.accent}` : styles.metaValue}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}