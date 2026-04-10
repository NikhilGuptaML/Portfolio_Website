import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Stack.module.css'

function TechItem({ item }) {
  return (
    <div className={styles.techItem} data-cursor="hover">
      {item.icon ? <img className={styles.icon} src={item.icon} alt="" width="16" height="16" loading="lazy" /> : null}
      <span className={styles.name}>{item.name}</span>
      <span className={styles.tip}>{item.tip}</span>
    </div>
  )
}

export default function Stack({ categories }) {
  return (
    <section id="stack" className="sectionMuted">
      <div className="container">
        <SectionHeading label="Tech Stack" title="Tools I Work With" />
        <p className={`reveal ${styles.intro}`}>Hover any item to see how I&apos;ve actually used it.</p>

        <div className={`reveal ${styles.categories}`}>
          {categories.map((category) => (
            <div key={category.title} className={styles.category}>
              <p className={styles.categoryHeading}>{category.title}</p>
              <div className={styles.row}>
                {category.items.map((item) => (
                  <TechItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}