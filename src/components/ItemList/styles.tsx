import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  padding: 50px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    column-gap: 36px;
    row-gap: 24px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    row-gap: 48px;
    grid-template-columns: 1fr;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-items: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  padding: 32px;
  position: relative;
  z-index: 1;
  max-width: 960px;
  background-color: ${cores.vermelho};

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export const ContentInfo = styled.div`
  display: flex;

  img {
    height: 200px;
    width: 200px;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  p {
    color: ${cores.fundo};
    font-size: 14px;
  }

  h4 {
    font-size: 16px;
    color: ${cores.fundo};
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
