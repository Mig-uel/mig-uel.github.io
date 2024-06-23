import Link from 'next/link'

// components
import { FaHeart } from 'react-icons/fa6'

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className='flex flex-row justify-center items-center gap-2 h-20 opacity-70 hover:opacity-100'>
      <div>Made with </div>
      <FaHeart color='#F33A6A' />
      <div>|</div>
      <div>Miguel &copy; {date}</div>
    </footer>
  )
}

export default Footer
