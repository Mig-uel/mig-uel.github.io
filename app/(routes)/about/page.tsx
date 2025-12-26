import CredlyBadge from '@/components/about/credly-bade.component'
import Icon from '@/components/about/icon.component'
import Skills from '@/components/about/skills.component'
import Technologies from '@/components/about/technologies.component'
import Subtitle from '@/components/general/subtitle.component'
import Nav from '@/components/nav/nav.component'
import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFilePdf } from 'react-icons/fa6'

const AboutPage = () => {
  return (
    <div className='container'>
      <Nav
        title='About'
        className='pl-2 md:pl-0'
      />

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
          icon={
            <GraduationCap
              fill='gray'
              size='1rem'
            />
          }
          text='Brooklyn College'
        />
        <Icon
          icon={
            <MapPin
              fill='gray'
              size='1rem'
            />
          }
          text='New York'
        />
      </div>

      <div className='text-center my-8'>
        <Button
          asChild
          variant='link'
        >
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
        <Subtitle text='Description' />

        <p className='mt-4 self-start  w-full px-5 md:px-20 text-center bg-muted rounded p-2 md:p-4'>
          I’m Miguel, a full-stack developer and Brooklyn College graduate with
          a Bachelor’s degree in Computer Science. Since graduating, I’ve been
          focused on building end-to-end web applications, combining clean,
          functional design with solid backend logic. I enjoy coding, creating
          engaging websites, and unwinding by watching movies.
        </p>
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Technologies />
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Skills />
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Subtitle text='Experience' />

        <div className='flex flex-col mt-8 px-5 md:px-0 md:items-center bg-muted rounded p-5'>
          <div className='pb-5 md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize mb-1'>
                Aug 2025 - Nov 2025
              </p>
              <p className='font-medium capitalize text-lg'>Revature</p>
              <p className='capitalize'>Java Software Developer Trainee</p>
              <p className='py-5 text-sm'>
                Completed an intensive Java Full Stack Developer program focused
                on designing and building scalable, end-to-end web applications.
                Gained hands-on experience with Core Java, object-oriented
                programming, data structures, and multithreading while
                developing RESTful APIs using Spring and Spring Boot with
                database integration through Spring Data (JPA). Applied
                front-end fundamentals using HTML, CSS, JavaScript, and Angular
                to create responsive user interfaces, and collaborated in agile
                team environments using Git and code reviews to deliver
                production-ready full-stack projects.
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>

          <div className='pb-5 md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                Dec 2019 - Aug 2024
              </p>
              <p className='font-medium capitalize text-lg mt-1'>
                Whole Foods Market
              </p>
              <p className='capitalize'>Grocery Order Writer</p>
              <p className='py-5 text-sm'>
                Orders, replenishes and merchandises grocery products and
                participate in WFM program for purchasing and promotions.
                Monitors inventory control and replenishes product based upon
                WFM ordering standards. Assists in organizing and developing
                promotional displays and maintaining OTS standards.
              </p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>

          <div className='pb-5 md:w-[350px] h-fit border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                Mar 2021 - May 2021
              </p>
              <p className='font-medium capitalize text-lg mt-1'>
                Sector Software
              </p>
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
              <p className='text-md text-gray-400 capitalize'>
                Mar 2025 - May 2025
              </p>
              <p className='font-medium capitalize text-lg mt-1'>CUNY QCC</p>
              <p>Microcredential in Software Engineering</p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>

          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                Jun 2019 - Aug 2022
              </p>
              <p className='font-medium capitalize text-lg mt-1'>
                CUNY Brooklyn College
              </p>
              <p className='capitalize'>B.S. Computer Science</p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-1'></div>
          </div>

          <div className='md:w-[350px] h-[150px] border-l-4 border-black flex flex-col relative'>
            <div className='pl-4'>
              <p className='text-md text-gray-400 capitalize'>
                Jun 2017 - Jun 2022
              </p>
              <p className='font-medium capitalize text-lg mt-1'>CUNY BMCC</p>
              <p className='capitalize'>A.S. Computer Science</p>
            </div>
            <div className='rounded-full h-5 w-5 bg-black -left-3 absolute z-0'></div>
            <div className='h-5 w-5 bg-black -left-3 bottom-0 absolute z-0'></div>
          </div>
        </div>
      </div>

      <div className='mt-10 w-full p-2 md:p-0'>
        <Subtitle
          text='Badges & Certifications'
          className='mb-4'
        />

        <CredlyBadge />
      </div>
    </div>
  )
}
export default AboutPage
