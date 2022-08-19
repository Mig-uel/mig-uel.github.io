import Head from '../head/head.component'
import Header from '../header/header.component'

const Layout = ({ children }) => {
  return (
    <>
      <Head title='Miguel | Home' />
      <div>
        <Header />
        <>{children}</>
      </div>
    </>
  )
}

export default Layout
