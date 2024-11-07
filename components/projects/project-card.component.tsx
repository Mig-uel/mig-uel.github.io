import Subtitle from '../general/subtitle.component'
import Link from 'next/link'

// types
import { Project } from '@/types'

const ProjectCard = ({ id, imageUrl, title }: Project) => {
  return (
    <>
      <Link href={`/projects/${id}`}>
        <div
          className='flex flex-col items-center justify-center h-[250px] md:opacity-80 md:hover:opacity-100 group relative'
          style={{
            background: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='md:absolute md:hidden group-hover:block'>
            <Subtitle text={title} className='text-white pt-0' />
          </div>
        </div>
      </Link>
    </>
  )
}
export default ProjectCard
