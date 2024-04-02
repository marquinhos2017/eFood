import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    height: 300px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 600px;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    top: 15%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 26px;
    top: 20%;
  }
`

export const Logo = styled.img`
  max-width: 100px;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
`
