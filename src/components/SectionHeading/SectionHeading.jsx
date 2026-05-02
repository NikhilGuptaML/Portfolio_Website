import styles from './SectionHeading.module.css'

export default function SectionHeading({ label, title, subtitle, className = '', centered = false }) {
  return (
    <div className={`${className} ${centered ? styles.centered : ''}`}>
      <p className={`reveal ${styles.label}`} data-heading-animate>{label}</p>
      <h2 className={`reveal ${styles.title}`}>{title}</h2>
      {subtitle && <p className={`reveal ${styles.subtitle}`}>{subtitle}</p>}
    </div>
  )
}