import Subtitle from '../general/subtitle.component'

type SkillsType = string[]

const Skill = ({ skill }: { skill: string }) => {
  return <span className='rounded-xl bg-muted  px-4'>{skill}</span>
}

const Skills = () => {
  const technicalSkills: SkillsType = [
    'Agile Methodologies',
    'RESTful API Development',
    'ORM/ODM',
    'JSON Web Token (JWT)',
    'Responsive Design',
    'Mobile-First Development',
  ]

  const softSkills: SkillsType = [
    'Customer Engagement',
    'Inventory Optimization',
    'Problem-Solving',
    'Analytical Thinking',
    'Collaboration',
    'Communication',
    'Time-Management',
    'Adaptability',
  ]

  return (
    <>
      <div>
        <Subtitle text='Technical Skills' />

        <div className='mt-4 flex flex-wrap gap-2'>
          {technicalSkills.map((skill) => (
            <Skill
              skill={skill}
              key={skill}
            />
          ))}
        </div>
      </div>

      <div className='mt-10'>
        <Subtitle text='Soft Skills' />

        <div className='mt-4 flex flex-wrap gap-2'>
          {softSkills.map((skill) => (
            <Skill
              skill={skill}
              key={skill}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default Skills
