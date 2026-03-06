import React from 'react'
import { BsInstagram,  BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import './Footer.css'
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  useEffect(() => {
  const handleScroll = () => {
     if (window.scrollY > 1000) {
       setShowScroll(true);
      } else {
       setShowScroll(false);
      }
         };
     window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
         }, []);


  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-name">
            <h2>CIARA COLLECTION</h2>
          </div>
          <div className="footer-socials">
            <FaFacebook className='footer-icon'/>
            <BsInstagram className='footer-icon'/>
            <BsTwitterX className='footer-icon'/>
          
          </div>
        </div>
                      
           {showScroll && (
            <div className="scroll-top" onClick={scrollToTop}>
             <FaArrowUp />
            </div>      
                   )}

        <div className="copy">
          <p>Copyright © CIARA COLLECTION 2026. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
