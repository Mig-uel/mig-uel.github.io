import Subtitle from '@/components/general/subtitle.component'
import Nav from '@/components/nav/nav.component'
import ProjectTechStack from '@/components/projects/project-tech-stack.component'
import { Button } from '@/components/ui/button'
import { getProjectById } from '@/firebase/db'
import Link from 'next/link'
import { FaGithub, FaGlobe } from 'react-icons/fa'

import type { Project } from '@/types'

type Params = {
  params: Promise<{ id: string }>
}

const ProjectPage = async (props: Params) => {
  const params = await props.params

  const { id } = params

  const project = (await getProjectById(id)) as Project

  return (
    <div className='grid  py-2 md:px-3 rounded'>
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
        <Subtitle text='Built With' />

        <ProjectTechStack tags={project.tags} />
      </div>

      {/* LINKS */}
      <div className='mt-3 pb-10'>
        <Subtitle text='Links' />

        <div className='grid grid-cols-2 md:grid-cols-6 mt-8 place-items-center md:place-items-start'>
          {/* GitHub Link */}
          <div>
            <Button
              asChild
              variant='link'
              className='bg-muted p-8'
            >
              <Link href={project?.githubUrl || ''}>
                <div className='flex items-center gap-x-2'>
                  <FaGithub />
                  <p>Repo</p>
                </div>
              </Link>
            </Button>
          </div>

          {/* Demo Link */}
          <div>
            <Button
              asChild
              variant='link'
              className='bg-muted p-8'
            >
              <Link href={project?.demoUrl || ''}>
                <div className='flex items-center gap-x-2'>
                  <FaGlobe />
                  <p>Live Demo</p>
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
