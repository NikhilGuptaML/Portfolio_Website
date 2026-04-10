import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './Projects.module.css'

function ProjectFeatureCard({ project }) {
  return (
    <article className={styles.featuredCard} data-cursor="hover">
      <div className={styles.featuredNumber}>{project.id}</div>

      <div className={styles.featuredBody}>
        <span className={styles.badge}>{project.badge}</span>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectLine}>{project.line}</p>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.projectFooter}>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`${styles.projectCard} ${styles.dimmed}`} data-cursor="hover">
      <span className={styles.cardNumber}>{project.id}</span>
      <span className={styles.badge}>{project.badge}</span>
      <h3 className={styles.smallTitle}>{project.title}</h3>
      <p className={styles.projectLine}>{project.line}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects({ featuredProjects, secondaryProjects }) {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading label="Selected Work" title="Things I've Built" />

        {featuredProjects.map((project) => (
          <ProjectFeatureCard key={project.id} project={project} />
        ))}

        <div className={styles.projectsGrid}>
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}