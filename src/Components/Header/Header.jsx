import React, { useState } from 'react'
import "./Header.css"
import menuIcon from '../../ICONS/menu-icon.png'
import searchIcon from '../../ICONS/search.png'
import profile from '../../ICONS/user.png'
import Navbar from '../NavBar/Navbar'

const Header = () => {

  const [render,setRender] =useState(false)

  
  return (
    <>
      <div className='header'>
        
        <div onClick={()=>{setRender(!render)}} className='menu-icon'>
          <img src={menuIcon} alt="menuicon" />
        </div>

        <div className='input-container'>
          <div>
            <img src={searchIcon} alt="" />
          </div>
          <input type="text" />
        </div>

        <div className='profile'>
          <img src={profile} alt="" />
        </div>
        
      </div>
      <Navbar Render ={render}/>
    </>
    

  )
}

export default Header
