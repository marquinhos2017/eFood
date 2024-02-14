import logo from '../../assets/logo.png'
import { Logo } from '../Banner/styles'
import { Container, Icons } from './styles'

import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

export const Footer = () => (
  <Container>
    <div className="container">
      <div>
        <img src={logo} />
      </div>
      <Icons>
        <li>
          <img src={twitter} alt="" />
        </li>
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={instagram} alt="" />
        </li>
      </Icons>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)
