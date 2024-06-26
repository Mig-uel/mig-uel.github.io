import Link from 'next/link'
import { IProject } from '@/types'

// components
import { FaCircleArrowRight } from 'react-icons/fa6'

const ProjectCard = ({ project }: { project: IProject }) => {
  const {
    images: { cover },
  } = project || '/assets/image-not-found.png'

  return (
    <Link
      href={`/projects/${project._id}`}
      className={`flex flex-col rounded my-10 gap-2 h-[30rem] sm:max-w-[25rem justify-center`}
      style={{ backgroundImage: `url('${cover}')` }}
    >
      <div className='text-center h-fit px-4'>
        <div className='text-2xl font-bold'>{project.title}</div>
        <p className='mt-2'>{`${project.description.substring(0, 100)}...`}</p>
      </div>
      <Link
        href={`/projects/${project._id}`}
        className='flex flex-col justify-center items-center h-20'
      >
        <span className=' bg-gray-950 rounded-3xl px-4 py-3'>
          View more <FaCircleArrowRight className='inline ml-1' />
        </span>
      </Link>
    </Link>
  )
}

export default ProjectCard
