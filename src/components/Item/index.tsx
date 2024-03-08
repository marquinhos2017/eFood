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
}: Props) => (
  <Card>
    <img onClick={onClick} src={image} alt={title} />

    <Conteudo>
      <Titulo>{title}</Titulo>

      <Descricao>{description}</Descricao>
      <LinkButton to={`item/${id}`}>Adicionar Carrinho</LinkButton>
    </Conteudo>
  </Card>
)
