import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Game = {
  id: number
  titulo: string
  capa: string
  descricao: string
  tipo: string
  avaliacao: number
  destacado: boolean
  cardapio: []
}

export type cardapio = {
  isVisible: boolean
  type: string
  url: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
  id_cardapio: number
}
const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()
  if (restaurantes) {
    return (
      <>
        <Banner />
        <ProductsList games={restaurantes} />
      </>
    )
  } else {
    return <h4>Carregando</h4>
  }
}

export default Home
