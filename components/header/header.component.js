import {
  BsGithub,
  BsTwitter,
  BsFileEarmarkPdfFill,
  BsLinkedin,
} from 'react-icons/bs'

/* ------- STYLED COMPONENTS -------*/
import {
  HeaderContainer,
  ImageContainer,
  InfoContainer,
  LinksContainer,
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <ImageContainer>
        {/* <img src={memoji} alt='Profile picture' /> */}
      </ImageContainer>

      <InfoContainer>
        <span>Miguel Castillo</span>
        <span>Frontend Developer</span>
        <span>New York</span>
      </InfoContainer>

      <LinksContainer>
        <a href='https://linkedin.com/in/miglcastillo'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/mig-uel'>
          <BsGithub />
        </a>
        <a href='https://twitter.com/whitesauce'>
          <BsTwitter />
        </a>
        <a href='https://dropbox.com/s/fwgt3v02zg2owni/Miguel_Castillo_CV.pdf?dl=0'>
          <BsFileEarmarkPdfFill />
        </a>
      </LinksContainer>
    </HeaderContainer>
  )
}

export default Header
