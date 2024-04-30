import { useDispatch, useSelector } from 'react-redux'

import {
  ButtonAdd,
  CartContainer,
  CartItem,
  InputGroup,
  Overlay,
  Prices,
  Row,
  Sidebar,
  Titulo
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { SetStateAction, useState } from 'react'
export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [step, setStep] = useState('cart')
  const goToStep = (nextStep: SetStateAction<string>) => {
    setStep(nextStep)
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.nome}>
                  <img src={item.foto} alt="" srcSet="" />
                  <div>
                    <h3>{item.nome}</h3>

                    <span></span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id_cardapio)}
                    type="button"
                  ></button>
                </CartItem>
              ))}
            </ul>

            <Prices>
              <p>Valor total</p>
              <span>R$ {getTotalPrice().toFixed(2)}</span>
            </Prices>
            <ButtonAdd onClick={() => goToStep('delivery')}>
              Continuar com a entrega
            </ButtonAdd>
          </>
        )}

        {step === 'delivery' && (
          <>
            <Titulo>Delivery</Titulo>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Quem ira receber</label>
                <input type="text" id="fullName" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="address">Endereco</label>
                <input type="text" id="address" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Numero</label>
                <input type="text" id="number" />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="text" id="complement" />
            </InputGroup>
            <br />
            {/* Opções de pagamento */}
            <ButtonAdd onClick={() => goToStep('payment')}>
              Continuar para o pagamento
            </ButtonAdd>
            <br />
            <ButtonAdd onClick={() => goToStep('cart')}>
              Voltar para o carrinho
            </ButtonAdd>{' '}
            <br />
            {/* Botão para finalizar */}
          </>
        )}

        {step === 'payment' && (
          <>
            <h2>Payment</h2>
            {/* Opções de pagamento */}
            <button onClick={() => goToStep('done')}>
              Finalizar Pagamento
            </button>{' '}
            <br />
            <button onClick={() => goToStep('delivery')}>
              Voltar para Entrega
            </button>
            <br />
            {/* Botão para finalizar */}
          </>
        )}

        {step === 'done' && (
          <>
            <h2>Done</h2>
            {/* Opções de pagamento */}

            {/* Botão para finalizar */}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
