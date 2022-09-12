import styled from 'styled-components'
const tertiaryColor = '#FFC0CB'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 500px;

  border-radius: 10px;

  background-image: ${({ image }) =>
    image
      ? `url(${image})`
      : `url(https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png)`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
`
export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 70%;

  .title {
    text-align: center;
    font-size: 1.4em;
    font-weight: bold;

    color: ${tertiaryColor};
  }

  .desc {
    text-align: center;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-size: 20px;
`
