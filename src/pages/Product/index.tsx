import { useParams } from 'react-router-dom'

import HeaderCategory from '../../components/HeaderCategory'
import close from '../../assets/fechar.png'

import { useEffect, useState } from 'react'
import { Game, cardapio } from '../Home'
import {
  Container,
  ContentInfo,
  List,
  Modal,
  ModalContent
} from '../../components/ItemList/styles'
import { Item } from '../../components/Item'

import { Imagem, Infos } from '../../components/BannerCategory/styles'
import { ButtonAdd, ModalItemInformations } from './styles'
import { useGetRestaurantQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { isVisible } from '@testing-library/user-event/dist/utils'

export type Props = {
  games: Game[]
}

interface MenuItem {
  id: number
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string
  banner: string
}

const Product = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useGetRestaurantQuery(id!)

  const [modal, setModal] = useState({
    isVisible: false,
    type: 'image',
    url: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0,
    foto: ''
  })

  type item_cardapio = cardapio
  const item_cardapio = {
    isVisible: false,
    type: 'image',
    url: '',
    nome: modal.nome,
    descricao: modal.descricao,
    porcao: modal.porcao,
    preco: modal.preco,
    foto: modal.foto
  }

  const [cardapio, setCardapio] = useState({
    isVisible: false,
    type: 'image',
    url: '',
    nome: '',
    descricao: '',
    porcao: '',
    preco: 0,
    foto: ''
  })

  const [modalEstaberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
      nome: '',
      descricao: '',
      porcao: '',
      preco: 0,
      foto: ''
    })
  }

  const [menu, setMenu] = useState<MenuItem[]>([])
  const [game, setGame] = useState<Game>()

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(item_cardapio))
    dispatch(open())
  }

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setMenu(data.cardapio) // Definindo o estado do menu com o dado recebido da consulta
      setGame(data)
    }
  }, [data, isLoading, isError])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderCategory />
      <Imagem style={{ backgroundImage: `url(${data?.capa})` }}>
        <div className="container">
          <div>
            <p>{data?.titulo}</p>
          </div>
          <Infos>
            <h2>{data?.tipo}</h2>
          </Infos>
        </div>
      </Imagem>
      <Container>
        <div className="container">
          <List>
            {menu.map((item) => (
              <Item
                key={item.id}
                title={item.nome}
                description={item.descricao}
                infos={[]}
                image={item.foto}
                id={item.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    type: 'image',
                    url: `${item.foto}`,
                    nome: `${item.nome}`,
                    descricao: `${item.descricao}`,
                    porcao: `${item.porcao}`,
                    preco: item.preco,
                    foto: `${item.foto}`
                  })
                }}
              ></Item>
            ))}
          </List>
        </div>
      </Container>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <ContentInfo>
            <img src={modal.url} alt="SpiderMan"></img>
            <ModalItemInformations>
              <div>
                <h4>{modal.nome}</h4>
                <img src={close} onClick={() => closeModal()} />
              </div>
              <p>
                {modal.descricao}
                <br />
                <br />
                Serve: {modal.porcao}
              </p>
              <ButtonAdd onClick={addToCart}>Adicionar Carrinho</ButtonAdd>
            </ModalItemInformations>
          </ContentInfo>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Product
