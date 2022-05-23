import { BsGithub, BsTwitter, BsInstagram, BsFileEarmarkPdf } from 'react-icons/bs';
import memoji from '../assets/memoji.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-pfp">
        <img src={memoji} alt="A Apple Memoji of myself" />
      </div>

      <div className="header-info-container">
        <h1 className="main-text">Miguel Castillo</h1>
        <h2 className="sub-text">Aspiring Developer</h2>
        <h3 className="sub-text">New York</h3>
      </div>

      <div className="header-social-container">
        <a href="https://github.com/mig-uel">
          <BsGithub />
        </a>
        <a href="https://twitter.com/whitesauce" >
          <BsTwitter />
        </a>
        <a href="https://instagram.com/m.ig.l">
          <BsInstagram />
        </a>
        <a href="https://dropbox.com/s/fwgt3v02zg2owni/Miguel_Castillo_CV.pdf?dl=0" target='_blank' rel='noopener noreferrer'>
          <BsFileEarmarkPdf />
        </a>
      </div>
    </div>
  );
}

export default Header;