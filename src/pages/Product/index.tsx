import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderCategory from '../../components/HeaderCategory'
import close from '../../assets/fechar.png'

import BannerCategory from '../../components/BannerCategory'
import { ItemList } from '../../components/ItemList'
import { useEffect, useState } from 'react'
import { Game } from '../Home'
import {
  Container,
  ContentInfo,
  List,
  Modal,
  ModalContent
} from '../../components/ItemList/styles'
import { Item } from '../../components/Item'
import { ProductsList } from '../../components/ProductList'

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
}

const Product = () => {
  const { id } = useParams()

  const [modal, setModal] = useState({
    isVisible: false,
    type: 'image',
    url: '',
    name: ''
  })
  const [modalEstaberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
      name: ''
    })
  }

  const [menu, setMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setMenu(data.cardapio))
      .catch((error) => console.log(error))
  }, [id])

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderCategory />
      <BannerCategory />
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
                    name: `${item.nome}`
                  })
                }}
              ></Item>
            ))}
          </List>
        </div>
      </Container>

      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4></h4>
            <img src={close} onClick={() => closeModal()} />
          </header>
          <ContentInfo>
            <img src={modal.url} alt="SpiderMan"></img>
            <div>
              <h4>{modal.name}</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              p
            </div>
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
