import { Fingerprint } from 'lucide-react'
import {
  SiCloudinary,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

// types
import { Tag, TagWithIcon } from '@/types'
import { BiLogoPostgresql } from 'react-icons/bi'

const tagsWithIcons: TagWithIcon[] = [
  {
    tag: 'typescript',
    icon: <SiTypescript />,
  },
  {
    tag: 'styled-components',
    icon: <SiStyledcomponents />,
  },
  {
    tag: 'redux',
    icon: <SiRedux />,
  },
  {
    tag: 'react',
    icon: <SiReact />,
  },
  {
    tag: 'nextjs',
    icon: <SiNextdotjs />,
  },
  {
    tag: 'mongoose',
    icon: <SiMongoose />,
  },
  {
    tag: 'mongodb',
    icon: <SiMongodb />,
  },
  {
    tag: 'javascript',
    icon: <SiJavascript />,
  },
  {
    tag: 'html',
    icon: <SiHtml5 />,
  },
  {
    tag: 'firebase',
    icon: <SiFirebase />,
  },
  {
    tag: 'css',
    icon: <SiCss3 />,
  },
  {
    tag: 'api',
    icon: <TbApi />,
  },
  {
    tag: 'tailwindcss',
    icon: <SiTailwindcss />,
  },
  {
    tag: 'auth',
    icon: <Fingerprint />,
  },
  {
    tag: 'cloudinary',
    icon: <SiCloudinary />,
  },
  {
    tag: 'node',
    icon: <SiNodedotjs />,
  },
  {
    tag: 'express',
    icon: <SiExpress />,
  },
  {
    tag: 'leaflet',
    icon: <SiLeaflet />,
  },
  {
    tag: 'prisma',
    icon: <SiPrisma />,
  },
  {
    tag: 'shadcn',
    icon: <SiShadcnui />,
  },
  {
    tag: 'postgres',
    icon: <BiLogoPostgresql />,
  },
]

const ProjectTechIcon = ({ tag }: { tag: Tag }) => {
  const t: TagWithIcon[] = tagsWithIcons.reduce((acc, item) => {
    if (item.tag === tag) acc.push(item)

    return acc
  }, [] as TagWithIcon[])

  return (
    <div className='flex flex-col items-center gap-2 text-center'>
      {/* Icon */}
      <div>{t[0]?.icon}</div>

      {/* Icon Label */}
      <label
        className={`${
          tag !== 'css' && tag !== 'api' && tag !== 'html'
            ? 'capitalize'
            : 'uppercase'
        } text-md`}
      >
        {t[0]?.tag}
      </label>
    </div>
  )
}
export default ProjectTechIcon
