import styled from 'styled-components'

const primaryColor = '#fff'
const secondaryColor = '#D2D2CF'
const tertiaryColor = '#FFC0CB'

export const HeaderContainer = styled.div`
  margin-top: 100px;
`

export const ImageContainer = styled.picture`
  display: flex;
  justify-content: center;

  width: 100%;

  img {
    border-radius: 50%;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 25px;

  & span:nth-child(1) {
    color: ${primaryColor};
    font-size: 2rem;
    font-weight: bold;
    padding-bottom: 5px;
  }

  & span:nth-child(2),
  & span:nth-child(3) {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${secondaryColor};
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 30px;

  width: 100%;
  margin-top: 30px;
  padding: 20px 0;

  font-size: 25px;

  a:hover {
    color: ${tertiaryColor};
  }
`
