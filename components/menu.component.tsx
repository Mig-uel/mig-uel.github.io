import Link from 'next/link'

const Menu = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center absolute gap-5 uppercase font-medium bg-white z-1'>
      <Link href='/about'>About</Link>
      <Link href='/projects'>Projects</Link>
    </div>
  )
}
export default Menu
