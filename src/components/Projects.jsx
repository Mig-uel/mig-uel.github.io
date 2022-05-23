import Card from './Card';
import projects from '../JSON/projects.json';

const Projects = () => {



  return (
    <div className="projects-container">
      {
        projects.map(project => {
          return (
            <Card
              key={project.id}
              githubLink={project.githubLink}
              livePreview={project.livePreview}
              name={project.name}
              description={project.description}
              bgImage={project.bgImage}
            />
          )
        })
      }
    </div>
  );
}

export default Projects;