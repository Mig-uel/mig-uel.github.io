import Card from '../card/card.component'

import projects from '../../projects.json'

/* ------- STYLED COMPONENTS -------*/
import { CardsContainer } from './cards.styles'

const Cards = () => {
  return (
    <CardsContainer>
      {projects.map((project) => (
        <Card key={project.id} obj={project} />
      ))}
    </CardsContainer>
  )
}

export default Cards
