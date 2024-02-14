import Button from '../Button'
import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, Conteudo } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}
export const Product = ({ description, image, infos, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Conteudo>
      <Titulo>{title}</Titulo>

      <Descricao>{description}</Descricao>
      <Button title="Clique aqui e saiba mais" type="button" variant="primary">
        Saiba mais
      </Button>
    </Conteudo>
  </Card>
)
