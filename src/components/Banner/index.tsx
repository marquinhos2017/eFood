import { Imagem, Logo, Titulo } from './styles'
import bannerImg from '../../assets/banner.png'
import logo from '../../assets/efood.png'
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Titulo>Viva esperiencas gastronomicas no conforto da sua casa</Titulo>
    <Logo src={logo} />
  </Imagem>
)

export default Banner

//banner finalizado
