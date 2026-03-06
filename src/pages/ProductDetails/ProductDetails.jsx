import React, { useContext } from 'react'
import {ShopContext} from '../../components/ShopContext/ShopContext'
import { productsData } from '../../data'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
const ProductDetails = () => {
  const{addToCart}=useContext(ShopContext)

  const {id}= useParams()
  const product =productsData.find(product=>{
    return product.id ===parseInt(id) 
  })
  return (
    <div>
      <div className="product-detail">
        <div className="details-left">
          <img src={product.image} alt=""  className='p-img'/>
        </div>
        <div className="details-right">
          <h3>{product.title}</h3>
          <p className='p-price'>${product.price}</p>
          <p className='p-description'>{product.description}</p>
          <button onClick={()=> addToCart(product ,id )}>Add to cart </button>
        </div>
      </div>
    </div> 
  )
}

export default ProductDetails
