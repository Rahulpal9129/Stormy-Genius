import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
       <>
            
         <div className='img-box'>
            <Link id='btn' className='btn1' to="/Content">Private Sector</Link>
               <img src="/images/handShake-remove-bg.png" alt="" />

            <Link id='btn' className='btn2' to="/Content">GVT. Sector</Link>
            
         </div>
           
       
       </>
  )
}

export default Hero