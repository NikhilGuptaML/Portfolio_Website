import styles from './SectionHeading.module.css'

export default function SectionHeading({ label, title, className = '' }) {
  return (
    <div className={className}>
      <p className={`reveal ${styles.label}`}>{label}</p>
      <h2 className={`reveal ${styles.title}`}>{title}</h2>
    </div>
  )
}