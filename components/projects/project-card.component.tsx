import Image from 'next/image'
import Subtitle from '../general/subtitle.component'
import Link from 'next/link'

interface Project {
  id: string
  description: string
  tags: string[]
  title: string
  imageUrl: string
  demoUrl: string
}

const ProjectCard = ({
  id,
  demoUrl,
  description,
  tags,
  imageUrl,
  title,
}: Project) => {
  return (
    <>
      <Link href={`/projects/${id}`}>
        <div
          className='flex flex-col items-center justify-center h-[250px] opacity-80 hover:opacity-100 group relative'
          style={{
            background: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='absolute hidden group-hover:block'>
            <Subtitle text={title} className='text-white pt-0' />
          </div>
        </div>
      </Link>
    </>
  )
}
export default ProjectCard
