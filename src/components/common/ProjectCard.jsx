// src/components/common/ProjectCard.jsx
import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const toolText =
    project.tools && project.tools.length > 0
      ? project.tools.join(' · ')
      : project.tags
      ? project.tags.join(' · ')
      : ''

  return (
    <article className="project-card">
      <Link to={`/portfolio/${project.id}`} className="project-card__link">
        <div className="project-card__thumb">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} />
          ) : (
            <div className="project-card__thumb--empty" />
          )}
        </div>

        <div className="project-card__body">
          {toolText && <p className="project-card__tags">{toolText}</p>}
          <h3 className="project-card__title">{project.title}</h3>
        </div>
      </Link>
    </article>
  )
}

export default ProjectCard
