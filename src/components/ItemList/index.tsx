import { Item } from '../Item'
import { Container, ContentInfo, List, Modal, ModalContent } from './styles'
import close from '../../assets/fechar.png'
import { useState } from 'react'

export const ItemList = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            <Item
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: 'image',
                  url: 'https://media.cnn.com/api/v1/images/stellar/prod/230919174808-ultraprocessed-foods-depression-wellness-restricted.jpg?c=original'
                })
              }}
              title={'Pizza Marguerita'}
              description={
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
              }
              infos={['Destaque da semana', 'Japonesa']}
              image={
                'https://media.cnn.com/api/v1/images/stellar/prod/230919174808-ultraprocessed-foods-depression-wellness-restricted.jpg?c=original'
              }
              id={1}
            />
            <Item
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: 'image',
                  url: 'https://assets3.thrillist.com/v1/image/3130793/792x594/scale;webp=auto;jpeg_quality=60;progressive.jpg'
                })
              }}
              title={'Pizza Marguerita'}
              description={
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
              }
              infos={['Destaque da semana', 'Japonesa']}
              image={
                'https://assets3.thrillist.com/v1/image/3130793/792x594/scale;webp=auto;jpeg_quality=60;progressive.jpg'
              }
              id={2}
            />
            <Item
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: 'image',
                  url: 'https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1334,w_2000,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/0/c/0c7effac6e526014b4552fc47b53b4815d45dac5/cannoli.jpg'
                })
              }}
              title={'Pizza Marguerita'}
              description={
                'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
              }
              infos={['Destaque da semana', 'Japonesa']}
              image={
                'https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1334,w_2000,x_0,y_0/c_scale,f_auto,q_auto,w_700/v1/m/0/c/0c7effac6e526014b4552fc47b53b4815d45dac5/cannoli.jpg'
              }
              id={3}
            />
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
              <h4>Pizza Marguerita</h4>
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
