import React from 'react'
import logo from './logo.svg'
import './App.css'
import { GlobalCss } from './styles'
import Banner from './components/Banner'
import { Product } from './components/Product'
import { ProductsList } from './components/ProductList'
import { Footer } from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />

        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
