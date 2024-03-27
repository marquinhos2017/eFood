import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled(Link)<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.vermelho : cores.branco)};
  color: ${cores.branco};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.vermelho : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px;
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: 24px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.vermelho};
  background-color: black;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
