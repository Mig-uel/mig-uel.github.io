import { Linkedin, Github, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

type SocialLinks = {
  icon: React.ReactNode
  label: string
  href: string
}

const socialLinks: SocialLinks[] = [
  {
    icon: <Github />,
    label: 'Github',
    href: 'https://github.com/mig-uel',
  },
  {
    icon: <Linkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/miglcastillo',
  },
  {
    icon: <Twitter />,
    label: 'Twitter',
    href: 'https://x.com/whitesauce',
  },
]

const SocialButtons = () => {
  return (
    <div className='flex gap-5'>
      {socialLinks.map((link) => (
        <Button variant='ghost' size='icon' className='rounded-full'>
          <Link href={link.href}>{link.icon}</Link>
        </Button>
      ))}
    </div>
  )
}
export default SocialButtons
