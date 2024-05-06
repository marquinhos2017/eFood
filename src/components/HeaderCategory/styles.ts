import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 120px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: bold;
  max-width: 600px;
  align-items: center;

  text-align: center;
  color: ${cores.vermelho};
`

export const CardButton = styled.a`
  display: flex;
  color: ${cores.vermelho};
  font-weight: bold;

  img {
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Logo = styled.img`
  max-width: 100px;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const Conteudo = styled.div`
  display: flex;
  padding: 40px 0px;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  span {
    margin-bottom: 4px;
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.vermelho};
  }
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
