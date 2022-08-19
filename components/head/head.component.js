import * as H from 'next/head'

const Head = ({ title }) => {
  return (
    <H>
      <title>{title}</title>
    </H>
  )
}

export default Head
