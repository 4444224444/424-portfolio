// src/pages/Portfolio.jsx
import projects from '../data/projects'
import ProjectCard from '../components/common/ProjectCard.jsx'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <section className={styles.portfolioPage}>
      <div className={styles.inner}>
        <h1 className={styles.title}>PROJECTS</h1>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
