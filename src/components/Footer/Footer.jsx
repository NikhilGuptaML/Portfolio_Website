import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>© 2026 Nikhil Gupta</p>
        <p>Built from scratch · Deployed on Vercel</p>
      </div>
    </footer>
  )
}