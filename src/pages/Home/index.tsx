import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { useEffect, useState } from 'react'
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
  name: string
  description: string
  porcao: string
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
