import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Contact.module.css'

export default function Contact({ items }) {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={`reveal ${styles.left}`}>
            <SectionHeading label="Contact" title="Let's work." className={styles.headingWrap} />
            <p className={styles.subtext}>
              Got a hard problem and no one to throw at it? I'm the person who says yes and figures it out.
            </p>
          </div>

          <div className={`reveal ${styles.items}`}>
            {items.map((item) => (
              <a key={item.label} href={item.href} className={styles.item} data-cursor="hover">
                <span className={styles.itemLabel}>{item.label}</span>
                <span className={styles.itemValue}>
                  {item.value} <span className={styles.arrow}>→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}