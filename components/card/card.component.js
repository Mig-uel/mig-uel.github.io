import Tech from '../tech/tech.component'
import { CardContainer, CardInfoContainer, TagsContainer } from './card.styles'

const Card = ({
  obj: { title, description, id, imageUrl, demoUrl, githubUrl, tags },
}) => {
  return (
    <CardContainer image={imageUrl}>
      <CardInfoContainer>
        <div className='title'>{title}</div>
        <div className='desc'>{description}</div>
      </CardInfoContainer>

      <TagsContainer>
        <Tech tags={tags} demoUrl={demoUrl} githubUrl={githubUrl} key={id} />
      </TagsContainer>
    </CardContainer>
  )
}
export default Card
