import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav= () => {
    setNav(!nav)
  }
  return (
    <div className='text-white flex justify-between items-center h-24 max-w[1240px] px-4 mx-auto'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden sm:flex'>
          <li className='cursor-pointer hover:bg-gray-400 transition-all duration-500 p-4'>Home</li>
          <li className='cursor-pointer hover:bg-gray-400 transition-all duration-500 p-4'>Company</li>
          <li className='cursor-pointer hover:bg-gray-400 transition-all duration-500 p-4'>Resources</li>
          <li className='cursor-pointer hover:bg-gray-400 transition-all duration-500 p-4'>About</li>
          <li className='cursor-pointer hover:bg-gray-400 transition-all duration-500 p-4'>Contact</li>
        </ul>
        <div className="sm:hidden cursor-pointer" onClick={handleNav}>
          {!nav?
          <AiOutlineMenu size={20}/>:
          <AiOutlineClose/>}
        </div>
        <div className={`side-bar ${!nav && "activated"}`}>
          <ul className='pt-24'>
            <li className='cursor-pointer hover:bg-gray-400 hover:translate-x-4 transition-all duration-500 p-4'>Home</li>
            <li className='cursor-pointer hover:bg-gray-400 hover:translate-x-4 transition-all duration-500 p-4'>Company</li>
            <li className='cursor-pointer hover:bg-gray-400 hover:translate-x-4 transition-all duration-500 p-4'>Resources</li>
            <li className='cursor-pointer hover:bg-gray-400 hover:translate-x-4 transition-all duration-500 p-4'>About</li>
            <li className='cursor-pointer hover:bg-gray-400 hover:translate-x-4 transition-all duration-500 p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar