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
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  console.log(items)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.nome}>
              <img src={item.foto} alt="" srcSet="" />
              <div>
                <h3>{item.nome}</h3>

                <span></span>
              </div>
              <button type="button"></button>
            </CartItem>
          ))}
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
