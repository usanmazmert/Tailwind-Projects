import React, { useEffect, useRef, useState } from "react"
import {MenuIcon, XIcon} from "@heroicons/react/outline"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
    const [linksHeight, setHeight] = useState(0)
    const linksRef = useRef(null);
    const linkContainerRef = useRef(null)
    const [nav, setNav] = useState(false)

    useEffect(() => {
        
        if(nav){
            linkContainerRef.current.style.height = linksRef.current.getBoundingClientRect().height + "px"
        }else
            linkContainerRef.current.style.height = 0
    }, [nav])
    return (
        <div id="navbar" className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
                <ul className="hidden md:flex">
                    <li><Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="support" spy={true} smooth={true} offset={-100} duration={500}>Supports</Link></li>
                    <li><Link to="platforms" spy={true} smooth={true} offset={-50} duration={500}>Platforms</Link></li>
                    <li><Link to="pricing" spy={true} smooth={true} offset={-100} duration={500}>Pricing</Link></li>
                </ul>
            </div>
          
            <div className="hidden md:flex pr-4">
                <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                <button className="px-8 py-3 ">Sign Up</button>
            </div>
            <div onClick={() => setNav(!nav)} className="md:hidden mr-4">
                {!nav ? <MenuIcon className="w-5"/> : <XIcon className="w-5" />} 
            </div>
          </div>
          <div ref={linkContainerRef} className={`transition-all duration-500 w-full h-0 overflow-hidden fixed bg-zinc-200 md:hidden`}>
            <ul ref={linksRef} className="w-full py-4 px-8">
                    <li className="border-b-2 border-zinc-300 w-full"><Link to="home" spy={true} smooth={true} offset={10} duration={500}>Home</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link to="support" spy={true} smooth={true} offset={50} duration={500}>Supports</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link to="platforms" spy={true} smooth={true} offset={50} duration={500}>Platforms</Link></li>
                    <li className="border-b-2 border-zinc-300 w-full"><Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>Pricing</Link></li>
                    <div className="flex flex-col my-4">
                        <button className="bg-transparent mb-4 text-indigo-600">Sign In</button>
                        <button className="px-8 py-3 ">Sign Up</button>
                    </div>
            </ul>
          </div>
        </div>
    )
}
export default Navbar