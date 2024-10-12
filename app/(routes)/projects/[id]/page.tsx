import Subtitle from '@/components/general/subtitle.component'
import Title from '@/components/general/title.component'
import ProjectTechStack from '@/components/projects/project-tech-stack.component'
import { getProjectById } from '@/firebase/db'

type Params = {
  params: { id: string }
}

interface Project {
  id: string
  description: string
  tags: Tag[]
  title: string
  imageUrl: string
  demoUrl: string
}

const ProjectPage = async ({ params: { id } }: Params) => {
  const project = (await getProjectById(id)) as Project

  console.log(project)

  return (
    <div className='grid'>
      <Title text={project.title} />

      <div
        className='h-[250px] mt-8'
        style={{
          background: `url(${project.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      <div>
        <Subtitle text='Description:' />
        <p className='mt-3'>{project.description}</p>
      </div>

      <div className='mt-3'>
        <Subtitle text='Built With:' />

        <ProjectTechStack tags={project.tags} />
      </div>
    </div>
  )
}
export default ProjectPage
