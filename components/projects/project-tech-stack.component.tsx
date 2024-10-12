import ProjectTechIcon from './project-tech-icon.component'

const ProjectTechStack = ({ tags }: { tags: Tag[] }) => {
  return (
    <div
      className={`p-4 grid gap-y-10 mt-5 ${
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
