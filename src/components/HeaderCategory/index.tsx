import { Conteudo, Imagem, Logo, Titulo } from './styles'
import bannerImg from '../../assets/banner.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const HeaderCategory = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Conteudo>
          <Titulo>Restaurantes</Titulo>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Titulo onClick={openCart}>
            {items.length} produto(s) no carrinho
          </Titulo>
        </Conteudo>
      </div>
    </Imagem>
  )
}

export default HeaderCategory

//banner finalizado
