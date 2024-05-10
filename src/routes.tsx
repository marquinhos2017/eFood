import Home from './pages/Home'
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
