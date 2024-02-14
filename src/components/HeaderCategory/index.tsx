import { Conteudo, Imagem, Logo, Titulo } from './styles'
import bannerImg from '../../assets/banner.png'
import logo from '../../assets/efood.png'
const HeaderCategory = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Conteudo>
        <Titulo>Restaurantes</Titulo>
        <Logo src={logo} />
        <Titulo>0 produto(s) no carrinho</Titulo>
      </Conteudo>
    </div>
  </Imagem>
)

export default HeaderCategory

//banner finalizado
