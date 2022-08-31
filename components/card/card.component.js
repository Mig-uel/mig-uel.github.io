import { CardContainer } from './card.styles'

const Card = ({ obj: { title, description, id, imageUrl } }) => {
  // console.log(title, description, id)
  return (
    <CardContainer image={imageUrl}>
      <div>{title}</div>
      <div>{description}</div>
    </CardContainer>
  )
}
export default Card
