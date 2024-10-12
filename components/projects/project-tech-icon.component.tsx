import {
  SiTypescript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiFirebase,
  SiMongodb,
  SiMongoose,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiJavascript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

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
]

const ProjectTechIcon = ({ tag }: { tag: Tag }) => {
  console.log(tag)
  const t: TagWithIcon[] = tagsWithIcons.reduce((acc, item) => {
    if (item.tag === tag) acc.push(item)

    return acc
  }, [] as TagWithIcon[])

  console.log(t)

  return (
    <div className='text-center items-center grid text-xl justify-center'>
      <div className='flex justify-center'>{t[0]?.icon}</div>

      <p
        className={`${
          tag !== 'css' && tag !== 'api' && tag !== 'html'
            ? 'capitalize'
            : 'uppercase'
        }`}
      >
        {t[0]?.tag}
      </p>
    </div>
  )
}
export default ProjectTechIcon