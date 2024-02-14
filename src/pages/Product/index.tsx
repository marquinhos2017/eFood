import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderCategory from '../../components/HeaderCategory'

import BannerCategory from '../../components/BannerCategory'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <HeaderCategory />
      <BannerCategory />
    </>
  )
}

export default Product
