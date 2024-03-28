import styled from 'styled-components'

export const Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vw;
  max-width: var(--container);
  margin: auto;
`
export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`
export const Body = styled.div`
  p {
    font-size: var(--medium);
    line-height: var(--medium);
  }
`
