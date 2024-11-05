import { Button } from '../ui/button'
import ProjectTechIcon from './project-tech-icon.component'

const ProjectTechStack = ({ tags }: { tags: Tag[] }) => {
  return (
    <div
      className={`grid gap-y-10 mt-8 ${
        tags.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'
      }  place-items-center`}
    >
      {tags.map((tag) => (
        <Button asChild key={tag} variant='secondary' className='p-10'>
          <div className='w-[250px]'>
            <ProjectTechIcon tag={tag} />
          </div>
        </Button>
      ))}
    </div>
  )
}
export default ProjectTechStack
