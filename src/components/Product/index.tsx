import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Conteudo,
  HeaderTitle,
  Score,
  Buttonsaibamais
} from './styles'
import star from '../../assets/estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  score: number
  id: number
}
export const Product = ({
  description,
  image,
  infos,
  title,
  score,
  id
}: Props) => (
  <Card to={`/product/${id}`}>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Conteudo>
      <HeaderTitle>
        <Titulo>{title}</Titulo>
        <Score>
          <p> {score}</p>
          <img src={star} alt="" />
        </Score>
      </HeaderTitle>

      <Descricao>{description}</Descricao>
      <Buttonsaibamais to={`/product/${id}`}>Saiba mais</Buttonsaibamais>
    </Conteudo>
  </Card>
)
