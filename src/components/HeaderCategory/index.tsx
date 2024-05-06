import {
  Conteudo,
  Imagem,
  Logo,
  Titulo,
  Hamburguer,
  CardButton
} from './styles'
import bannerImg from '../../assets/banner.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import cartIcon from '../../assets/carrinho.png'
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
          <CardButton onClick={openCart}>
            {items.length} <span>- produto(s) no carrinho</span>
            <img src={cartIcon} alt="cartIcon" />
          </CardButton>
        </Conteudo>
      </div>
    </Imagem>
  )
}

export default HeaderCategory

//banner finalizado
