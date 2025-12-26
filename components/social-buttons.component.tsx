import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import AnimatedDiv from './motion/animated-div'
import { Button } from './ui/button'

type SocialLinks = {
  icon: React.ReactNode
  label: string
  href: string
}

const socialLinks: SocialLinks[] = [
  {
    icon: <Github fill='black' />,
    label: 'Github',
    href: 'https://github.com/mig-uel',
  },
  {
    icon: <Linkedin fill='black' />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/miglcastillo',
  },
]

const SocialButtons = () => {
  return (
    <AnimatedDiv className='flex gap-4'>
      {socialLinks.map((link, index) => (
        <Button
          key={index}
          variant='ghost'
          size='icon'
          className='rounded-full'
        >
          <Link href={link.href}>{link.icon}</Link>
        </Button>
      ))}
    </AnimatedDiv>
  )
}
export default SocialButtons
