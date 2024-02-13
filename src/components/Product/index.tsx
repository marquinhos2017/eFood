import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

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
    <Titulo>{title}</Titulo>

    <Descricao>{description}</Descricao>
  </Card>
)
