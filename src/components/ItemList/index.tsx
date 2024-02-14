import { Item } from '../Item'
import { Container, ContentInfo, List, Modal, ModalContent } from './styles'
import close from '../../assets/fechar.png'
export const ItemList = () => (
  <>
    <Container>
      <div className="container">
        <List>
          <Item
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            infos={['Destaque da semana', 'Japonesa']}
            image={
              'https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg'
            }
            id={1}
          />
          <Item
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            infos={['Destaque da semana', 'Japonesa']}
            image={
              'https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg'
            }
            id={2}
          />
          <Item
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            infos={['Destaque da semana', 'Japonesa']}
            image={
              'https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg'
            }
            id={3}
          />
          <Item
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            infos={['Destaque da semana', 'Japonesa']}
            image={
              'https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg'
            }
            id={4}
          />
          <Item
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            infos={['Destaque da semana', 'Japonesa']}
            image={
              'https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg'
            }
            id={5}
          />
          <Item
            title={'Pizza Marguerita'}
            description={
              'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
            }
            infos={['Destaque da semana', 'Japonesa']}
            image={
              'https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg'
            }
            id={6}
          />
        </List>
      </div>
    </Container>
    <Modal>
      <ModalContent className="container">
        <header>
          <h4></h4>
          <img src={close} />
        </header>
        <ContentInfo>
          <img
            src="https://img.grouponcdn.com/bynder/2nSnS4pXyy5Kx8uPtFYXFkrpW1PC/2n-2048x1229/v1/t600x362.jpg"
            alt="SpiderMan"
          ></img>
          <div>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            p
          </div>
        </ContentInfo>
      </ModalContent>
      <div className="overlay"></div>
    </Modal>
  </>
)
