import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { styled } from 'styled-components'
import { TagContainer } from '../Tag/styles'
import fechar from '../../assets/iconFechar.png'

export const ButtonAdd = styled.a`
  color: ${cores.vermelho};
  background-color: ${cores.rodape};
  padding: 8px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  cursor: pointer;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;

  ul {
  }

  ${ButtonAdd} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.div`
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-bottom: 24px;
  margin-top: 16px;
  display: flex;
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branco};
  margin-top: 32px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.rodape};
  padding: 8px;
  margin-bottom: 16px;
  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 18px;
  }

  span {
    display: block;
    color: ${cores.vermelho};
    font-weight: bold;
    font-size: 14px;
    margin-top: 24px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    pointer: cursor;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`