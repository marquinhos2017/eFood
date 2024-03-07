import { Game } from '../../pages/Home'
import { Product } from '../Product'
import { Container, List } from './styles'

export type Props = {
  games: Game[]
}
export const ProductsList = ({ games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.destacado) {
      tags.push(`Destaque da semana`)
    }

    if (game.tipo) {
      tags.push(game.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.titulo}
              description={game.descricao}
              image={game.capa}
              score={game.avaliacao}
              infos={getGameTags(game)}
              id={game.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}
