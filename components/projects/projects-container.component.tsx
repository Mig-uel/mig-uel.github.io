import { getProjects } from '@/firebase/db'
import ProjectCard from './project-card.component'

interface Project {
  id: string
  description: string
  tags: string[]
  title: string
  imageUrl: string
  demoUrl: string
}

const ProjectsContainer = async () => {
  const projects = (await getProjects()) as Project[]

  return (
    <div className='mt-10 grid  md:grid-cols-3 lg:grid-cols-4 gap-y-10 '>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  )
}
export default ProjectsContainer
