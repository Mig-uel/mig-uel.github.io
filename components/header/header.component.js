import Image from 'next/image'

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
        <Image
          src='https://raw.githubusercontent.com/Mig-uel/mig-uel.github.io/0a9fcf0bfdc3b3ab163d553c49e9f4f9d849e76e/assets/memoji.svg'
          alt='Profile picture'
          height={200}
          width={200}
        />
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
