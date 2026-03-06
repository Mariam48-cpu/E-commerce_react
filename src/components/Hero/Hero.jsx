import React from 'react'
import hero_img from '../../assets/hero.png'
import './Hero.css'
import { FaShippingFast } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'
function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <h1>CLASSY FASHION</h1>
          <img src={hero_img} alt="hero-image" className='hero-img' />
        </div>

          <div className="hero_bottom">
          <div className="hero_content">
            <div className="info_icon"><FaShippingFast className='hero_cc-icon'/> </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Free shipping on order</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon"><BiSupport className='hero_cc-icon'/> </div>
            <div className="detail">
              <h3>24/7 Suuport</h3>
              <p>Full support on process</p>
            </div>
          </div>
          <div className="hero_content">
            <div className="info_icon"><MdPayment className='hero_cc-icon'/> </div>
            <div className="detail">
              <h3>Secure Payment</h3>
              <p>Your payment is secure</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Hero
