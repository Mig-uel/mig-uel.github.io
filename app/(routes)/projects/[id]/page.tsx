import Subtitle from '@/components/general/subtitle.component'
import Nav from '@/components/nav/nav.component'
import ProjectTechStack from '@/components/projects/project-tech-stack.component'
import { Button } from '@/components/ui/button'
import { getProjectById } from '@/firebase/db'
import Link from 'next/link'
import { FaGlobe, FaGithub } from 'react-icons/fa'

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
  githubUrl: string
}

const ProjectPage = async ({ params: { id } }: Params) => {
  const project = (await getProjectById(id)) as Project

  return (
    <div className='grid py-2 md:px-3 rounded'>
      <Nav title={project.title} />

      <div
        className='h-[250px] mt-8'
        style={{
          background: `url(${project.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      <div>
        <Subtitle text='Description' />
        <div className='p-2 md:p-0'>
          <p className='mt-3 p-4 bg-muted rounded'>{project.description}</p>
        </div>
      </div>

      <div className='mt-3'>
        <Subtitle text='Technology Stack' />

        <ProjectTechStack tags={project.tags} />
      </div>

      {/* LINKS */}
      <div className='mt-3'>
        <Subtitle text='Links' />

        <div className='grid md:grid-cols-2 text-center mt-8 gap-y-3'>
          <div>
            <Button asChild variant='link'>
              <Link href={project?.githubUrl || ''}>
                <div className='flex items-center gap-x-2 text-lg'>
                  <FaGithub />
                  <p>Repo</p>
                </div>
              </Link>
            </Button>
          </div>

          <div>
            <Button asChild variant='link'>
              <Link href={project?.demoUrl || ''}>
                <div className='flex items-center gap-x-2 text-lg'>
                  <FaGlobe />
                  <p>Website</p>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectPage
