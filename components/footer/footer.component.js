import { AiFillHeart } from 'react-icons/ai'
import { RiCodeBoxFill } from 'react-icons/ri'
import { FooterContainer, FooterIconsContainer } from './footer.styles'

const Footer = () => {
  const tertiaryColor = '#FFC0CB'

  return (
    <FooterContainer>
      Made with
      <FooterIconsContainer>
        <AiFillHeart color={tertiaryColor} /> |
        <a href='https://github.com/Mig-uel/mig-uel.github.io'>
          Source Code <RiCodeBoxFill />
        </a>
      </FooterIconsContainer>
    </FooterContainer>
  )
}

export default Footer
