import { AiFillHeart } from 'react-icons/ai'
import { RiCodeBoxFill } from 'react-icons/ri'
import { FooterContainer, FooterIconsContainer } from './footer.styles'

const Footer = () => {
  const tertiaryColor = '#FFC0CB'

  return (
    <FooterContainer>
      Made with
      <FooterIconsContainer>
        <AiFillHeart color={tertiaryColor} />
      </FooterIconsContainer>
    </FooterContainer>
  )
}

export default Footer
