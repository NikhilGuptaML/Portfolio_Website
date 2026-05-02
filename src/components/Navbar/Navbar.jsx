import styles from './Navbar.module.css'

export default function Navbar({ links }) {
  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logo} aria-label="Nikhil Gupta home">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
          <path d="M7 8V30M7 8L20 30M20 8V30" stroke="#f0f0f0" strokeWidth="2.8" strokeLinecap="square" />
          <rect x="25" y="22" width="9" height="9" fill="#f0f0f0" />
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

      <a href="mailto:nikhilg.vips@gmail.com" className={styles.cta}>
        Hire Me
      </a>
    </nav>
  )
}