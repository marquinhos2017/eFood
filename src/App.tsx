import React from 'react'
import logo from './logo.svg'
import './App.css'
import { GlobalCss } from './styles'
import Banner from './components/Banner'
import { Product } from './components/Product'
import { ProductsList } from './components/ProductList'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Banner />
      <ProductsList />
      <Footer />
    </>
  )
}

export default App
