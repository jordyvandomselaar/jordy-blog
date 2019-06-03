import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${props => props.theme.maxWidth}) 1fr;
  padding: 0 1rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0;
  }
`

export default Wrapper
