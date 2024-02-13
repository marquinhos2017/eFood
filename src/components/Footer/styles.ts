import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: #ffebd9;
  text-align: center;

  img {
    margin-top: 24px;
    max-width: 100px;
    text-align: center;
  }

  p {
    margin-top: 24px;
    color: ${cores.vermelho};
    padding-bottom: 42px;
  }
`
export const Icons = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  text-align: center;

  li {
    padding: 4px;
  }
`
