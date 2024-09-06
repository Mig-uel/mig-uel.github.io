import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className='flex flex-col justify-center items-center h-auto'>
      <h1 className='uppercase text-3xl font-bold pt-10 pl-5 w-full self-start text-left'>
        About
      </h1>

      <Image
        src='https://raw.githubusercontent.com/Mig-uel/mig-uel.github.io/0a9fcf0bfdc3b3ab163d553c49e9f4f9d849e76e/assets/memoji.svg'
        alt='avatar'
        width={200}
        height={200}
        className='rounded-full shadow-lg mt-16 max-w-[150px] md:max-w-[180px]'
      />

      <h1 className='text-xl md:text-2xl font-medium pt-10 uppercase tracking-wide md:tracking-wider'>
        Miguel Castillo
      </h1>

      <div className='flex flex-col md:flex-row gap-3 items-center justify-center uppercase font-normal mt-5 text-gray-500'>
        <div className='flex gap-2 justify-center items-center'>
          <GraduationCap fill='gray' size='1rem' />
          <p>Brooklyn College</p>
        </div>
        <div className='flex gap-1 justify-center items-center'>
          <MapPin fill='gray' size='1rem' />
          <p>Brooklyn</p>
        </div>
      </div>

      <p className='self-start uppercase mt-10 w-full px-5 md:px-20 text-center'>
        Hello, world! I am Miguel, a full-stack developer. I graduated from
        Brooklyn College with a Bachelors in Computer Science. Since graduating,
        I've been specializing in full-stack development. I enjoy coding and
        creating websites.
      </p>
      <p className='self-start uppercase mt-10 w-full px-5 md:px-20 text-center'>
        Hello, world! I am Miguel, a full-stack developer. I graduated from
        Brooklyn College with a Bachelors in Computer Science. Since graduating,
        I've been specializing in full-stack development. I enjoy coding and
        creating websites.
      </p>
    </section>
  )
}
export default AboutPage
