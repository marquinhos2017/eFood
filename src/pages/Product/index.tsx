import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderCategory from '../../components/HeaderCategory'

import BannerCategory from '../../components/BannerCategory'
import { ItemList } from '../../components/ItemList'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <HeaderCategory />
      <BannerCategory />
      <ItemList />
    </>
  )
}

export default Product
