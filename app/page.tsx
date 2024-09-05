import SocialButtons from '@/components/social-buttons.component'
import { Mouse } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <section className='h-screen flex flex-col justify-center items-center text-center gap-y-10 relative'>
        <div className='flex flex-col gap-4 w-fit h-fit'>
          <h1 className='uppercase text-4xl md:text-6xl font-bold tracking-wide md:tracking-wider'>
            MIGUEL CASTILLO
          </h1>
          <p className='uppercase font-medium tracking-wide'>
            Full Stack Engineer
          </p>
        </div>

        <div>
          <SocialButtons />
        </div>

        <div className='flex gap-2 w-fit justify-center items-center absolute bottom-10 opacity-50 hover:opacity-100 transition-opacity duration-300'>
          <Mouse size='1rem' />
          <p className='uppercase font-light'>scroll down</p>
        </div>
      </section>
    </>
  )
}
