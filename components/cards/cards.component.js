import { useState, useEffect, CSSProperties } from 'react'

/* ---- COMPONENTS ---- */
import Card from '../card/card.component'
import { FadeLoader } from 'react-spinners'

/* ---- UTILS ---- */
import { getProjects } from '../../utils/firebase.utils'

/* ------- STYLED COMPONENTS -------*/
import { CardsContainer } from './cards.styles'

const override = {
  display: 'block',
  margin: '0 auto',
  marginTop: '100px',
  position: 'relative',
}

const Cards = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getProjects().then((i) => {
      setProjects(i)
      setLoading(false)
    })
  }, [])

  return loading ? (
    <FadeLoader color='#fff' loading={loading} cssOverride={override} />
  ) : (
    <CardsContainer>
      {projects.map((project) => (
        <Card key={project.id} obj={project} />
      ))}
    </CardsContainer>
  )
}

export default Cards
