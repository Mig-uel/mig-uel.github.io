import Nav from '@/components/nav/nav.component'
import ProjectsContainer from '@/components/projects/projects-container.component'

const ProjectsPage = () => {
  return (
    <div className='container'>
      <Nav title='Projects' />

      <p className='pt-10 text-center text-muted-foreground'>
        These are all of my projects that I've worked on throughout my learning
        experience.
      </p>
      <ProjectsContainer />
    </div>
  )
}
export default ProjectsPage
