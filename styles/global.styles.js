import { createGlobalStyle } from 'styled-components'

const tertiaryColor = '#FFC0CB'

export const GlobalStyle = createGlobalStyle`
::selection {
  background: #000;
  color: ${tertiaryColor}
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

html {
  padding: 0;
  margin: 0;

  body {
    display: flex;
    flex-direction: column;

    height: 100vh;
    max-width: 1200px;
    margin: 0 auto;

    outline: 2px solid #fff;

    position: relative;
  }
}

a {
  color: inherit;
  text-decoration: none;
}


@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: #fff;
    background: #000;
  }
}
`
