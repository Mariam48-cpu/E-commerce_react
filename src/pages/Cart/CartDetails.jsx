import React, { useContext } from 'react'
import { ShopContext } from '../../components/ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const CartDetails = ({item}) => {
    const {removeFromCart,increaseQuantity, decreaseQuantity} = useContext(ShopContext)
    const {id,image,title,price,amount}= item
  return (
    <div>
      <div className="cart-item">
        <div className='cart-product-detail'>
            <img src={image} alt={image} />
            <div className="product-info">
                <h3>{title}</h3>
                <FiTrash2 onClick={()=> removeFromCart(id)}/>
            </div>
        </div>
        <div className='quantity'>
            <button onClick={()=>decreaseQuantity(id)}>
                <IoMdRemove/>
            </button>
            <span>{amount}</span>
            <button onClick={()=> increaseQuantity(id)}>
                <IoMdAdd/>
            </button>
        </div>
        <div className='price'>${price}</div>
        <div className='total' >${price * amount}</div>
      </div>
    </div>
  )
}

export default CartDetails
