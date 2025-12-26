import Subtitle from '../general/subtitle.component'

const languages = [
  {
    name: 'HTML5',
    icon: '<i class="devicon-html5-plain"></i>',
  },
  {
    name: 'CSS3',
    icon: '<i class="devicon-css3-plain"></i>',
  },
  {
    name: 'JavaScript',
    icon: '<i class="devicon-javascript-plain"></i>',
  },
  {
    name: 'TypeScript',
    icon: '<i class="devicon-typescript-plain"></i>',
  },
  {
    name: 'Node.js',
    icon: '<i class="devicon-nodejs-plain"></i>',
  },
  {
    name: 'Python',
    icon: '<i class="devicon-python-plain"></i>',
  },
  {
    name: 'Java',
    icon: '<i class="devicon-java-plain"></i>',
  },
  {
    name: 'Rust',
    icon: '<i class="devicon-rust-plain"></i>',
  },
  {
    name: 'MySQL',
    icon: '<i class="devicon-mysql-plain"></i>',
  },
  {
    name: 'PostgreSQL',
    icon: '<i class="devicon-postgresql-plain"></i>',
  },
]

const frameworksAndLibraries = [
  {
    name: 'Tailwind',
    icon: '<i class="devicon-tailwindcss-original"></i>',
  },
  {
    name: 'HTMX',
    icon: '<i class="devicon-htmx-plain"></i>',
  },
  {
    name: 'Angular',
    icon: '<i class="devicon-angularjs-plain"></i>',
  },
  {
    name: 'React',
    icon: '<i class="devicon-react-original"></i>',
  },
  {
    name: 'Next.js',
    icon: '<i class="devicon-nextjs-plain"></i>',
  },
  {
    name: 'NestJS',
    icon: '<i class="devicon-nestjs-plain"></i>',
  },
  {
    name: 'Prisma',
    icon: '<i class="devicon-prisma-plain"></i>',
  },
  {
    name: 'Express',
    icon: '<i class="devicon-express-original"></i>',
  },
  {
    name: 'Flask',
    icon: '<i class="devicon-flask-plain"></i>',
  },
  {
    name: 'Spring',
    icon: '<i class="devicon-spring-plain"></i>',
  },
  {
    name: 'Hibernate',
    icon: '<i class="devicon-hibernate-plain"></i>',
  },
  {
    name: 'JUnit',
    icon: '<i class="devicon-junit-plain"></i>',
  },
  {
    name: 'Jest',
    icon: '<i class="devicon-jest-plain"></i>',
  },
]

const misc = [
  {
    name: 'AWS',
    icon: '<i class="devicon-amazonwebservices-plain"></i>',
  },
  {
    name: 'Docker',
    icon: '<i class="devicon-docker-plain"></i>',
  },
  {
    name: 'Firebase',
    icon: '<i class="devicon-firebase-plain"></i>',
  },
  {
    name: 'Git',
    icon: '<i class="devicon-git-plain"></i>',
  },
  {
    name: 'GitHub',
    icon: '<i class="devicon-github-original"></i>',
  },
  {
    name: 'Linux',
    icon: '<i class="devicon-linux-plain"></i>',
  },
  {
    name: 'MongoDB',
    icon: '<i class="devicon-mongodb-plain"></i>',
  },
  {
    name: 'Raspberry Pi',
    icon: '<i class="devicon-raspberrypi-plain"></i>',
  },
]

export default function Technologies() {
  return (
    <div className=''>
      <Subtitle
        text='Languages'
        className='mb-4'
      />

      <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 mb-8'>
        {languages.map((language) => (
          <div
            key={language.name}
            className='m-2 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center'
          >
            <div
              className='text-4xl mb-2'
              dangerouslySetInnerHTML={{ __html: language.icon }}
            />
            <div className='text-center text-sm font-medium'>
              {language.name}
            </div>
          </div>
        ))}
      </div>

      <Subtitle
        text='Frameworks & Libraries'
        className='mb-4'
      />
      <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 mb-8'>
        {frameworksAndLibraries.map((tech) => (
          <div
            key={tech.name}
            className='m-2 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center'
          >
            <div
              className='text-4xl mb-2'
              dangerouslySetInnerHTML={{ __html: tech.icon }}
            />
            <div className='text-center text-sm font-medium'>{tech.name}</div>
          </div>
        ))}
      </div>

      <Subtitle
        text='Tools & Misc.'
        className='mb-4'
      />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8'>
        {misc.map((item) => (
          <div
            key={item.name}
            className='m-2 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center'
          >
            <div
              className='text-4xl mb-2'
              dangerouslySetInnerHTML={{ __html: item.icon }}
            />
            <div className='text-center text-sm font-medium'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
