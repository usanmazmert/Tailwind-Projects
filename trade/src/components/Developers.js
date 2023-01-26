import React from 'react'
import terminal from "../assets/terminal.png"

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-[1240px] mx-auto px-4 py-16'>
            <h1>Superpowers for DEFI developers.</h1>
            <p>
                Checkout the <span className= "root-blue cursor-pointer">documentation</span>, the <span className="root-blue cursor-pointer">quick start</span>  or a guide below to
                integrate your project with thousands of tokens and billions of
                liquidity.
            </p>
        </div>
        <div className='w-full py-10'>
            <img className='max-w-[250px] mx-auto shadow-lg shadow-cyan-500/50' src={terminal}/>
        </div>
    </div>
  )
}

export default Developers