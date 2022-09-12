import styled from 'styled-components'

const tertiaryColor = '#FFC0CB'

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;

  margin-bottom: 10px;
`
export const FooterIconsContainer = styled.div`
  display: flex;
  gap: 5px;

  padding: 0 4px;

  align-items: center;

  a {
    display: flex;

    gap: 5px;
    align-items: center;

    &:hover {
      color: ${tertiaryColor};
    }
  }
`
