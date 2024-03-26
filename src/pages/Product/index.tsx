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
import { Imagem, Infos } from '../../components/BannerCategory/styles'
import { ModalItemInformations } from './styles'

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

  const [modal, setModal] = useState({
    isVisible: false,
    type: 'image',
    url: '',
    name: '',
    description: '',
    porcao: ''
  })
  const [modalEstaberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: '',
      name: '',
      description: '',
      porcao: ''
    })
  }

  const [menu, setMenu] = useState<MenuItem[]>([])
  const [banner, setBanner] = useState([null])
  const [nome, setNome] = useState([null])
  const [tipo, setTipo] = useState([null])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setMenu(data.cardapio))
      .catch((error) => console.log(error))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setBanner(res.capa))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setNome(res.titulo))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setTipo(res.tipo))
  }, [id])

  if (!menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderCategory />
      <Imagem style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div>
            <p>{nome}</p>
          </div>
          <Infos>
            <h2>{tipo}</h2>
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
                    name: `${item.nome}`,
                    description: `${item.descricao}`,
                    porcao: `${item.porcao}`
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
                <h4>{modal.name}</h4>
                <img src={close} onClick={() => closeModal()} />
              </div>
              <p>
                {modal.description}
                <br />
                <br />
                Serve: {modal.porcao}
              </p>
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
