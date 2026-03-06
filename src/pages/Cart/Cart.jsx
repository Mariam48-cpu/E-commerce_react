import React, { useContext } from "react";
import { ShopContext } from "../../components/ShopContext/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import CartDetails from "./CartDetails";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, clearCart, quantity } = useContext(ShopContext);
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
   
    localStorage.removeItem("cart");

    clearCart();
    alert("Thank you for your order ");
    navigate("/");
  };

  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <h1>Items: ({quantity})</h1>
            <FiTrash2 onClick={clearCart} className="delete-cart" />
          </div>

          <div className="cart-header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>

          <div className="cart-detail">
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartDetails item={item} key={item.id} />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>

        <div className="cart-right">
          <h2>Cart Summary</h2>

          <div className="summery-item">
            <span>Items:</span>
            <span>{quantity}</span>
          </div>

          <div className="summery-item">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>

          <div className="summery-item">
            <span>Shipping fee</span>
            <span>Free</span>
          </div>

          <div className="summery-item total-cost">
            <span>Total cost</span>
            <span>${total}</span>
          </div>

          <button className="chekout" onClick={handleCheckout}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;