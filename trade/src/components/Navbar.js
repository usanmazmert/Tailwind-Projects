import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
    
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='w-full h-[90px] bg-black'>
        <div className='flex max-w-[1240px] mx-auto px-4 justify-between items-center h-full'>
            <div>
                <h1 className='root-blue'>INDI BINDU</h1>
            </div>
            <div className="hidden md:flex">
                <ul className='flex text-white items-center'>
                    <li>Platform</li>
                    <li>Developer</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-4 whitespace-nowrap'>Use Defi</button>
                </ul>
            </div>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {nav? <AiOutlineMenu size={30} className="text-white"/> : <AiOutlineClose size={30} className="text-white"/>}
            </div>
        </div>
        <div className={nav ? "side-bar activated" : "side-bar"}>
                <ul>
                    <li className="text-2xl">Platform</li>
                    <li className="text-2xl">Developer</li>
                    <li className="text-2xl">Community</li>
                    <li className="text-2xl">About</li>
                    <button className='m-8 whitespace-nowrap'>Use Defi</button>
                </ul>
            </div>
    </div>
  )
}

export default Navbar