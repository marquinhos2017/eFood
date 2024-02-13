import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  position: relative;

  img {
    width: 100%;
    height: 250px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;

  color: ${cores.vermelho};
  padding: 12px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 18px;
  display: block;
  color: ${cores.vermelho};
  padding: 12px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
