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
import { useFormik } from 'formik'
import Button from '../Button'
import * as Yup from 'yup'
export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      numberCard: '',
      codeCard: '',
      monthExpired: '',
      yearExpired: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      address: Yup.string()
        .min(5, 'O endereco rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      cep: Yup.number()
        .min(5, 'O cep rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      number: Yup.number()
        .min(5, 'O nome rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      complement: Yup.string()
        .min(5, 'O nome rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      cardOwner: Yup.string()
        .min(5, 'O nome rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      numberCard: Yup.number()
        .min(5, 'O Numero rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      codeCard: Yup.number()
        .min(3, 'O codigo rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      monthExpired: Yup.number()
        .min(5, 'O Mes rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio'),
      yearExpired: Yup.number()
        .min(5, 'O Ano rprecisa ter pelo menos 5 caracteres')
        .required('O campo eh obrigatorio')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(form)
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

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const validar = () => {
    if ('fullName' in form.errors) {
      alert('Valide')
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
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
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="address">Endereco</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('address', form.errors.address)}
                  </small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup maxWidth="180px">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cep', form.errors.cep)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="number">Numero</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('number', form.errors.number)}</small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('complement', form.errors.complement)}
                  </small>
                </InputGroup>
              </Row>
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
              <Titulo>Pagamento - Valor a pagar R$ 190,00</Titulo>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome no Cartao</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardOwner', form.errors.cardOwner)}
                  </small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="numberCard">Numero do Cartao</label>
                  <input
                    type="text"
                    id="numberCard"
                    name="numberCard"
                    value={form.values.numberCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('numberCard', form.errors.numberCard)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="codeCard">CVV</label>
                  <input
                    type="text"
                    id="codeCard"
                    name="codeCard"
                    value={form.values.codeCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('codeCard', form.errors.codeCard)}
                  </small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="monthExpired">Mes de vencimento</label>
                  <input
                    type="text"
                    id="monthExpired"
                    name="monthExpired"
                    value={form.values.monthExpired}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('monthExpired', form.errors.monthExpired)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="yearExpired">Ano de vencimento</label>
                  <input
                    type="text"
                    id="yearExpired"
                    name="yearExpired"
                    value={form.values.yearExpired}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('yearExpired', form.errors.yearExpired)}
                  </small>
                </InputGroup>
              </Row>
              <br />
              {/* Opções de pagamento */}
              <Button title="Botao" type="submit" onClick={form.handleSubmit}>
                Finalizar
              </Button>
              <br />
              <ButtonAdd onClick={() => goToStep('delivery')}>
                Voltar para a edicao de endereco
              </ButtonAdd>{' '}
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
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
