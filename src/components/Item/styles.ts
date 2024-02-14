import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import Button from '../Button'
import { ButtonLink } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  position: relative;
  padding: 8px;

  img {
    width: 100%;
    height: 150px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  margin-top: 8px;
  font-weight: bold;
  font-size: 16px;
  display: block;

  color: ${cores.branco};
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 18px;
  display: block;
  color: ${cores.branco};
  margin-top: 12px;
  margin-bottom: 12px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Conteudo = styled.div`
  ${ButtonLink} {
    margin-top: 12px;
  }
`
export const LinkButton = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.vermelho};
  background-color: ${cores.fundo};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  display: block;
  text-align: center;
`
