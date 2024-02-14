import Button from '../Button'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Conteudo,
  HeaderTitle,
  Score
} from './styles'
import { Link } from 'react-router-dom'
import star from '../../assets/estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  score: number
}
export const Product = ({ description, image, infos, title, score }: Props) => (
  <Card>
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
      <Button title="Clique aqui e saiba mais" type="button" variant="primary">
        Saiba mais
      </Button>
    </Conteudo>
  </Card>
)
