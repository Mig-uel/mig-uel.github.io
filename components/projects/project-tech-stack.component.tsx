import { Button } from '../ui/button'
import ProjectTechIcon from './project-tech-icon.component'

// types
import { Tag } from '@/types'

const ProjectTechStack = ({ tags }: { tags: Tag[] }) => {
  tags = tags.sort((a, b) => a.localeCompare(b))

  return (
    <div
      className={`grid grid-cols-2 gap-4 mt-8 place-items-center md:grid-cols-4 lg:grid-cols-6 px-4 md:px-0`}
    >
      {tags.map((tag) => (
        <Button
          asChild
          key={tag}
          variant='secondary'
          className='p-10'
        >
          <div className='w-full'>
            <ProjectTechIcon tag={tag} />
          </div>
        </Button>
      ))}
    </div>
  )
}
export default ProjectTechStack
