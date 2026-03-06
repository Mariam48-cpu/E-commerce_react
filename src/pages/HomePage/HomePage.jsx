import React from 'react'
import Hero from '../../components/Hero/Hero'
import Brands from '../../components/Brands/Brands'
import ProductList from '../../components/ProductList/ProductList'

const Homepage = () => {
  return (
    <div>
      <Hero />
       <Brands/>
       <ProductList/>
    </div>
  )
}

export default Homepage