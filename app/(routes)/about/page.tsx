import Icon from '@/components/about/icon.component'
import Image from 'next/image'
import { GraduationCap, MapPin } from 'lucide-react'
import Subtitle from '@/components/general/subtitle.component'
import Nav from '@/components/nav/nav.component'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaRegFilePdf } from 'react-icons/fa6'
import Skills from '@/components/about/skills.component'

const AboutPage = () => {
  return (
    <div className='container'>
      <Nav title='About' className='pl-2 md:pl-0' />

      <div className='text-center'>
        <Image
          src='https://raw.githubusercontent.com/Mig-uel/mig-uel.github.io/0a9fcf0bfdc3b3ab163d553c49e9f4f9d849e76e/assets/memoji.svg'
          alt='avatar'
          width={200}
          height={200}
          className='rounded-full shadow-lg mt-16 max-w-[150px] md:max-w-[180px] m-auto'
        />

        <Subtitle text='Miguel Castillo' />
      </div>

      <div className='flex gap-3 items-center justify-center capitalize font-normal mt-5 text-gray-500 text-md'>
        <Icon
          icon={<GraduationCap fill='gray' size='1rem' />}
          text='Brooklyn College'
        />
        <Icon icon={<MapPin fill='gray' size='1rem' />} text='Brooklyn' />
      </div>

      <div className='text-center my-8'>
        <Button asChild variant='link'>
          <Link
            target='_blank'
            href='https://www.dropbox.com/scl/fi/u16h22v1xynn2ortdbhlg/Miguel-Castillo-Software-Engineer.pdf?rlkey=2dpys3yg1v43t73hmox71zqf1&st=z2mfh1rv&dl=0'
          >
            <div className='flex items-center justify-center gap-2'>
              <FaRegFilePdf />
              Download Resume
            </div>
          </Link>
        </Button>
      </div>

      <div className='p-2 md:p-0'>
        <p className='self-start  w-full px-5 md:px-20 text-center bg-muted rounded p-2 md:p-4'>
          I am Miguel, a full-stack developer. I graduated from Brooklyn College
          with a Bachelors in Computer Science. Since graduating, I've been
          specializing in full-stack development. I enjoy coding, creating
          websites, and watching movies.
        </p>
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Skills />
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Subtitle text='Experience' />

        <div className='flex flex-col mt-8 px-5 md:px-0 md:items-center bg-muted rounded p-5'>
          <div className='md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium capitalize text-lg'>
                Whole Foods Market
              </p>
              <p className='capitalize'>Grocery Buyer</p>
              <p className='py-5 text-sm'>
                Orders, replenishes and merchandises grocery products and
                participate in WFM program for purchasing and promotions.
                Monitors inventory control and replenishes product based upon
                WFM ordering standards. Assists in organizing and developing
                promotional displays and maintaining OTS standards.
              </p>
            </div>
            <div className='pl-4 pb-5'>
              <p className='text-md text-gray-400 capitalize'>
                December 2019 - Present
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>

          <div className='md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium capitalize text-lg'>Sector Software</p>
              <p className='capitalize'>Backend Intern</p>
              <p className='py-5 text-sm'>
                Integrates with a useful technical jobs board or technical
                resource site via an existing API OR ethically scrapes public
                resources, stores data in a relational database, including a
                data table model, allows for a POST or GET request to a RESTful
                API, is deployed on a free instance via Heroku, EC2 or Digital
                Ocean and has a home page view and Sector's basic UI branding.
              </p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize pb-5'>
                September 2013 - June 2017
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
            <div className='h-5 w-5 bg-black -left-3 bottom-0 absolute z-0'></div>
          </div>
        </div>
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Subtitle text='Education' />

        <div className='flex flex-col mt-10 px-5 md:px-0 md:items-center bg-muted rounded p-5'>
          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium capitalize text-lg'>Brooklyn College</p>
              <p className='capitalize'>B.S. Computer Science</p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                June 2019 - August 2022
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>
          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium capitalize text-lg'>
                Borough of Manhattan Community College
              </p>
              <p className='capitalize'>A.S. Computer Science</p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                June 2017 - June 2022
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
          </div>
          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='font-medium capitalize text-lg'>
                Franklin D. Roosevelt High School
              </p>
              <p className='capitalize'>High School Diploma</p>
            </div>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                September 2013 - June 2017
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
            <div className='h-5 w-5 bg-black -left-3 bottom-0 absolute z-0'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutPage
