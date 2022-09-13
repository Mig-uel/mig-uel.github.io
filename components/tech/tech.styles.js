import styled from 'styled-components'

const tertiaryColor = '#FFC0CB'

export const Tags = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
  font-size: 1.3em;
`

export const Links = styled.div`
  outline: 1px solid white;

  padding: 5px;
  border-radius: 3px;

  background-color: white;
  color: black;

  font-size: 0.9em;
  font-weight: bold;

  a:hover {
    color: ${tertiaryColor};
  }
`
