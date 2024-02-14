import { Conteudo, Imagem, Logo, Titulo } from './styles'
import bannerImg from '../../assets/banner.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const HeaderCategory = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Conteudo>
        <Titulo>Restaurantes</Titulo>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Titulo>0 produto(s) no carrinho</Titulo>
      </Conteudo>
    </div>
  </Imagem>
)

export default HeaderCategory

//banner finalizado
