import ProjectCard from '@/components/project-card/project-card.component'
import { connectDB } from '@/config/db.config'
import Project from '@/models/project.model'
import { IProject } from '@/types'
import Link from 'next/link'
import { Key } from 'react'

const getProjects = async (): Promise<IProject[]> => {
  try {
    connectDB()

    const projects: IProject[] = await Project.find({}).lean()

    if (!projects) throw new Error('Cannot fetch projects.')

    return projects
  } catch (error) {
    console.log((error as Error).message)
    return []
  }
}

const ProjectsPage = async () => {
  const projects = await getProjects()

  return !projects || !projects.length ? (
    <p className='text-center text-2xl'>No projects available.</p>
  ) : (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4  my-30'>
        {projects.map((project) => (
          <ProjectCard key={project._id as string} project={project} />
        ))}
      </section>
    </>
  )
}

export default ProjectsPage
