import ProjectTechIcon from './project-tech-icon.component'

const ProjectTechStack = ({ tags }: { tags: Tag[] }) => {
  console.log(tags.length > 2)

  return (
    <div
      className={`grid  gap-10 mt-5 ${
        tags.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'
      }`}
    >
      {tags.map((tag) => (
        <ProjectTechIcon key={tag} tag={tag} />
      ))}
    </div>
  )
}
export default ProjectTechStack
