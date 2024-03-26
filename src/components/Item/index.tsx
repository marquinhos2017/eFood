import Button from '../Button'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, Conteudo, LinkButton } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  id: number
  onClick: () => void
}
export const Item = ({
  description,
  image,
  infos,
  title,
  id,
  onClick
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 240) {
      return descricao.slice(0, 240) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={image} alt={title} />

      <Conteudo>
        <Titulo>{title}</Titulo>

        <Descricao>{getDescricao(description)}</Descricao>
        <LinkButton onClick={onClick}>Adicionar Carrinho</LinkButton>
      </Conteudo>
    </Card>
  )
}
