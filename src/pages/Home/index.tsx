import Banner from '../../components/Banner'
import { ProductsList } from '../../components/ProductList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { useEffect, useState } from 'react'

export type Game = {
  id: number
  titulo: string
  capa: string
  descricao: string
  tipo: string
  avaliacao: number
  destacado: boolean
}
const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} />
    </>
  )
}

export default Home
