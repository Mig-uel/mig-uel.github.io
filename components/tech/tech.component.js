/* ---- React Icons ---- */
import { TbApi, TbDeviceMobile } from 'react-icons/tb' // API, Mobile
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiStyledcomponents,
} from 'react-icons/si' // HTML5, CSS3,JS, React, Redux, NextJS, TypeScript, Firebase

import { Tags, Links } from './tech.styles'

const Tech = ({ tags, githubUrl, demoUrl }) => {
  const tagsArr = tags.map((tag) => {
    if (tag === 'html') return <SiHtml5 />
    else if (tag === 'css') return <SiCss3 />
    else if (tag === 'javascript') return <SiJavascript />
    else if (tag === 'typescript') return <SiTypescript />
    else if (tag === 'react')
      return (
        <SiReact
          style={{ background: '#fff', borderRadius: '3px', padding: '1' }}
          color='black'
        />
      )
    else if (tag === 'nextjs') return <SiNextdotjs />
    else if (tag === 'redux')
      return (
        <SiRedux
          style={{ background: '#fff', borderRadius: '3px', padding: '1' }}
          color='black'
        />
      )
    else if (tag === 'styled-components')
      return (
        <SiStyledcomponents
          style={{ background: '#fff', borderRadius: '3px', padding: '1' }}
          color='black'
        />
      )
    else if (tag === 'firebase')
      return (
        <SiFirebase
          style={{ background: '#fff', borderRadius: '3px', padding: '1' }}
          color='black'
        />
      )
    else if (tag === 'api')
      return (
        <TbApi
          style={{ background: '#fff', borderRadius: '3px', padding: '1' }}
          color='black'
        />
      )
    else if (tag === 'mobile-ready')
      return (
        <TbDeviceMobile
          style={{ background: '#fff', borderRadius: '3px', padding: '1' }}
          color='black'
        />
      )
  })

  return (
    <>
      <Tags>{tagsArr}</Tags>
      <Links>
        <a href={githubUrl}>Source</a> | <a href={demoUrl}>Demo</a>
      </Links>
    </>
  )
}

export default Tech
