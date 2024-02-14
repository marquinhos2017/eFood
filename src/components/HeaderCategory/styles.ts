import styled from 'styled-components'
import { cores } from '../../styles'

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

export const Logo = styled.img`
  max-width: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
export const Conteudo = styled.div`
  display: flex;
  padding: 40px 0;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
