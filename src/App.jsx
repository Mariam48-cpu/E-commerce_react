import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Auth from './pages/Auth/Auth'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Homepage />}/>
         <Route path='/Auth' element={<Auth/>}/>
         <Route path='/cart' element={<Cart />}/>
         <Route path='/product/:id' element={<ProductDetails />} />
            
      </Routes>
       <Footer/> 
    </div>
  )
}

export default App
