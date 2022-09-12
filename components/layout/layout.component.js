import Footer from '../footer/footer.component'
import Head from '../head/head.component'
import Header from '../header/header.component'

const Layout = ({ children }) => {
  return (
    <>
      <Head title='Miguel | Home' />
      <div>
        <Header />
        <>{children}</>
        <Footer />
      </div>
    </>
  )
}

export default Layout
