import Link from 'next/link'

// components
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaFilePdf,
} from 'react-icons/fa6'

const SocialLinks = () => {
  return (
    <div className='flex flex-row justify-center lg:justify-start gap-5 text-2xl p-5 lg:p-0'>
      <Link href='https://linkedin.com/in/miglcastillo' target='_blank'>
        <FaLinkedinIn />
      </Link>
      <Link href='http://github.com/mig-uel' target='_blank'>
        <FaGithubAlt />
      </Link>
      <Link href='https://x.com/whitesauce' target='_blank'>
        <FaTwitter />
      </Link>
      <Link href='' target='_blank'>
        <FaFilePdf />
      </Link>
    </div>
  )
}

export default SocialLinks
