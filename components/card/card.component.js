import { CardContainer, CardInfoContainer, TagsContainer } from './card.styles'

/* ---- React Icons ---- */
import { TbApi, TbDeviceMobile } from 'react-icons/tb' // API, Mobile
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiStyledcomponents,
} from 'react-icons/si' // HTML5, CSS3,JS, React, Redux, NextJS, TypeScript, Firebase

const Card = ({
  obj: { title, description, id, imageUrl, demoUrl, githubUrl, tags },
}) => {
  // console.log(title, description, id)
  return (
    <CardContainer image={imageUrl}>
      <CardInfoContainer>
        <div className='title'>{title}</div>
        <div className='desc'>{description}</div>
      </CardInfoContainer>

      <TagsContainer></TagsContainer>
    </CardContainer>
  )
}
export default Card
