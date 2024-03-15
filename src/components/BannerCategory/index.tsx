import { Imagem, Infos, Titulo } from './styles'
import bannerImg from '../../assets/banner.png'
import logo from '../../assets/logo.png'
import Tag from '../Tag'
import Button from '../Button'

const BannerCategory = () => (
  <Imagem
    style={{
      backgroundImage: `url(https://cdn0.tudoreceitas.com/pt/posts/1/9/0/panelada_de_boi_3091_600.jpg)`
    }}
  >
    <div className="container">
      <div>
        <p>Italiana</p>
      </div>
      <Infos>
        <h2>La Dolce Vita Trattoria</h2>
      </Infos>
    </div>
  </Imagem>
)

export default BannerCategory

//banner finalizado
