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
}
export const Item = ({ description, image, infos, title, id }: Props) => (
  <Card>
    <img src={image} alt={title} />

    <Conteudo>
      <Titulo>{title}</Titulo>

      <Descricao>{description}</Descricao>
      <LinkButton to={`/Item:${id}`}>Adicionar Carrinho</LinkButton>
    </Conteudo>
  </Card>
)
