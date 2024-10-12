import { getProjectById } from '@/firebase/db'
import Image from 'next/image'

type Params = {
  params: { id: string }
}

interface Project {
  id: string
  description: string
  tags: string[]
  title: string
  imageUrl: string
  demoUrl: string
}

const ProjectPage = async ({ params: { id } }: Params) => {
  const project = (await getProjectById(id)) as Project

  console.log(project)

  return (
    <div className='pt-10 w-full'>
      <div
        className='w-full h-[300px]'
        style={{
          background: `url(${project.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  )
}
export default ProjectPage
