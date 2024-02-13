import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#e66767',
  branco: 'white',
  fundo: '#fff8f1',
  rodape: '#ffead9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;


  }

  body{
    background-color: ${cores.fundo};
  }
`
