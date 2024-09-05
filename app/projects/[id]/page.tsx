type Params = {
  params: { id: string }
}

const ProjectPage = ({ params: { id } }: Params) => {
  return <div>{id}</div>
}
export default ProjectPage
