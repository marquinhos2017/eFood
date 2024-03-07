import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'
import { ButtonLink } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  position: relative;
  text-decoration: none;

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
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 18px;
  display: block;
  color: ${cores.vermelho};
  margin-top: 12px;
  margin-bottom: 12px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Conteudo = styled.div`
  padding: 12px;

  ${ButtonLink} {
    margin-top: 12px;
  }
`
export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Score = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 21px;
    width: 21px;
  }

  p {
    font-weight: bold;
    font-size: 16px;
    color: ${cores.vermelho};
    margin-right: 8px;
  }
`
