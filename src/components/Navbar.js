import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
           
    const [show,setShow]=useState(false)
    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            if(window.scrollY>400){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])

  return (
    <div className={`nav ${show && 'navblck'}`}>
        <img className='navimg'
        src="https://i.postimg.cc/wT3Rz6tm/5977590.png" alt="" />

    </div>
  )
}

export default Navbar