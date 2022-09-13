import { GlobalStyle } from '../styles/global.styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

export async function getServerSideProps() {
  return { props: { data } }
}
