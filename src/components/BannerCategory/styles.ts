import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  padding: 24px;
  position: relative;
  display: block;
  height: 360px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    p {
      color: white;
      font-size: 36px;
      font-style: italic;
    }
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
`

export const Infos = styled.div`
  font-weight: bold;
  color: white;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-thought;
    }
  }
`
