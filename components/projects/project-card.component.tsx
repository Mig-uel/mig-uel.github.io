import Image from 'next/image'

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
    <div className=' md:w-[350px] h-[200px] outline'>
      {/* <div>
        <Image src={imageUrl} alt={title} height={50} width={50} />
      </div> */}
    </div>
  )
}
export default ProjectCard
