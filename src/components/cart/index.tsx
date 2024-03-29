import { useDispatch, useSelector } from 'react-redux'
import starWars from '../../assets/logo.png'

import {
  ButtonAdd,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
export const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} alt="" srcSet="" />
            <div>
              <h3>Nome do Jogo</h3>

              <span>R$ 150,00</span>
            </div>
            <button type="button"></button>
          </CartItem>
          <CartItem>
            <img src={starWars} alt="" srcSet="" />
            <div>
              <h3>Nome do Jogo</h3>

              <span>R$ 150,00</span>
            </div>
            <button type="button"></button>
          </CartItem>
        </ul>

        <Prices>
          <p>Valor total</p>
          <span>R$ 250,00</span>
        </Prices>
        <ButtonAdd>Continuar com a entrega</ButtonAdd>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
