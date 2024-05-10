import { Card, Descricao, Titulo, Conteudo, LinkButton } from './styles'

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

  title,

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
