import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding: 50px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    column-gap: 36px;
    row-gap: 24px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    row-gap: 48px;
    grid-template-columns: 1fr;
  }
`
