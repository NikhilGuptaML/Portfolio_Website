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
    <section id="stack" className={styles.section}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionHeading
          label="Tech Stack"
          title="Tools I Work With"
          subtitle="Hover any item to see how I've actually used it."
          centered
        />

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.title} className={`reveal ${styles.category}`}>
              <p className={styles.categoryLabel}>{category.title}</p>
              <div className={styles.row} data-stagger-row>
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