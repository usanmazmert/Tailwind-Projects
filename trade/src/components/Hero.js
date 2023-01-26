import axios from 'axios'
import React, { useCallback } from 'react'

import heroVid from "../assets/video.mp4"

const Hero = () => {
  
  const apiCall = useCallback(() => {
    axios.post("http://127.0.0.1", {
      
    })
  }) 

  return (
    <div className='responsive w-full h-[90vh]' >
        <video className="absolute object-cover w-full h-full -z-10" src={heroVid} autoPlay loop muted/>
        <div className='w-full h-[90%] flex flex-col text-white justify-center items-center px-4'>
          <h1>Decentalized</h1>
          <h1 className='py-2'><span className='root-blue '>Trading</span> Protocol</h1>  
          <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications.</p>
          <div>
            <button onClick={apiCall} className='m-2'>Use Defi</button>
            <button className='m-2'>FAQ</button>
          </div>        
        </div>  
        <div className='text-center text-white text-2xl font-bold'>
          <p>Total Volume Secured: $42,104,783,662.47</p>
        </div>  
    </div>
  )
}

export default Hero