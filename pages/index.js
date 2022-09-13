import Layout from '../components/layout/layout.component'
import Cards from '../components/cards/cards.component'

import { getProjects } from '../utils/firebase.utils'

const Home = ({ projects }) => {
  return (
    <Layout>
      <Cards projects={projects} />
    </Layout>
  )
}

export default Home

export async function getServerSideProps() {
  const projects = await getProjects()

  return { props: { projects } }
}
