import styled from 'styled-components'

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
`
