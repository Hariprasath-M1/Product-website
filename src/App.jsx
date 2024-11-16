import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Cart from './components/Cart'
import Login from './components/Login'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
      </>
  )
}

export default App