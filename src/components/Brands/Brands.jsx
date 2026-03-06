import React from 'react'
import { GrStarOutline } from "react-icons/gr";
import './Brands.css'
const Brands = () => {
  return (
    <div className='brand-container'>
      <div className='strip-top'>
        <ul>
          <li><GrStarOutline /> hot fashion</li>
          <li> <GrStarOutline />unique design</li>
          <li><GrStarOutline />hot fashion</li>
          <li> <GrStarOutline />unique design</li>
          <li> <GrStarOutline />hot fashion</li>
           <li> <GrStarOutline />unique design</li>
        </ul>
      </div>
      <div className='strip-bottom'>
        <ul>
          <li><GrStarOutline /> hot fashion</li>
          <li> <GrStarOutline />unique design</li>
          <li><GrStarOutline />hot fashion</li>
          <li> <GrStarOutline />unique design</li>
          <li> <GrStarOutline />hot fashion</li>
           <li> <GrStarOutline />unique design</li>
           
        </ul>
      </div>
      
    </div>
  )
}

export default Brands
