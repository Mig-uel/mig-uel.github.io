import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section className='flex flex-col items-center py-10'>
      <h1 className='uppercase text-3xl font-bold pl-5 w-full self-start text-left'>
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

      <div className='mt-12 w-full'>
        <h1 className='text-left font-medium text-xl md:text-2xl pl-5 uppercase'>
          Experience
        </h1>

        <div className='flex flex-col mt-10 px-5 md:px-0 md:items-center'>
          <div className='md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium uppercase text-lg'>
                Whole Foods Market
              </p>
              <p className='uppercase'>Grocery Buyer</p>
              <p className='uppercase py-5 text-sm'>
                Orders, replenishes and merchandises grocery products and
                participate in WFM program for purchasing and promotions.
                Monitors inventory control and replenishes product based upon
                WFM ordering standards. Assists in organizing and developing
                promotional displays and maintaining OTS standards.
              </p>
            </div>
            <div className='pl-4 pb-5'>
              <p className='text-md text-gray-400 uppercase'>
                December 2019 - Present
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>

          <div className='md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium uppercase text-lg'>Sector Software</p>
              <p className='uppercase'>Backend Intern</p>
              <p className='uppercase py-5 text-sm'>
                Integrates with a useful technical jobs board or technical
                resource site via an existing API OR ethically scrapes public
                resources, stores data in a relational database, including a
                data table model, allows for a POST or GET request to a RESTful
                API, is deployed on a free instance via Heroku, EC2 or Digital
                Ocean and has a home page view and Sector's basic UI branding.
              </p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 uppercase pb-5'>
                SEPTEMBER 2013 - JUNE 2017
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
            <div className='h-5 w-5 bg-black -left-3 bottom-0 absolute z-0'></div>
          </div>
        </div>
      </div>

      <div className='mt-12 w-full'>
        <h1 className='text-left font-medium text-xl md:text-2xl pl-5 uppercase'>
          EDUCATION
        </h1>

        <div className='flex flex-col mt-10 px-5 md:px-0 md:items-center'>
          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium uppercase text-lg'>Brooklyn College</p>
              <p className='uppercase'>B.S. in Computer Science</p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 uppercase'>
                JUNE 2019 - AUGUST 2022
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>
          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium uppercase text-lg'>
                Borough of Manhattan Community College
              </p>
              <p className='uppercase'>A.S. in Computer Science</p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 uppercase'>
                JUNE 2017 - JUNE 2022
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
          </div>
          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium uppercase text-lg'>
                Franklin D. Roosevelt High School
              </p>
              <p className='uppercase'>High School Diploma</p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 uppercase'>
                SEPTEMBER 2013 - JUNE 2017
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
            <div className='h-5 w-5 bg-black -left-3 bottom-0 absolute z-0'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutPage
