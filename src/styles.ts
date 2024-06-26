import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#e66767',
  branco: 'white',
  fundo: '#fff8f1',
  rodape: '#ffead9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style-type: none;


  }

  body{
    background-color: ${cores.fundo};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 100%;
    }
  }
`
