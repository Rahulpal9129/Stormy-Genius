import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'



function Navbar() {

  const navigate=useNavigate();

  const handleScrollToFooter =(sectionId)=>{
    navigate("/");

    setTimeout(()=>{
      const section=document.getElementById(sectionId);
      if(section){
        section.scrollIntoView({behavior:"smooth"})
      }
    }, 100)
  }
  
  return (
        
    <>
       
       <div className='navbar'>
            <div className='logo'>

                <h1>Stormy Genius</h1>

            </div>
                   
            <div className='nav-items'>
                   <Link className='item' to="/">Home</Link>
                   <Link className='item' to="/About">About</Link>
                   <Link className='item' to="/Podcust">Podcast</Link>
                   {/* <Link className='item' to="/">Contact</Link> */}
                   <p className='item' onClick={()=>handleScrollToFooter("sectionId")}>Contact us</p>
                 
            </div>
       </div>
    
    
    </>
  )
}

export default Navbar;
