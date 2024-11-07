import { getProjects } from '@/firebase/db'
import ProjectCard from './project-card.component'

// types
import { Project } from '@/types'

const ProjectsContainer = async () => {
  const projects = (await getProjects()) as Project[]

  return (
    <div className='pt-10 md:pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-y-10'>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
export default ProjectsContainer
