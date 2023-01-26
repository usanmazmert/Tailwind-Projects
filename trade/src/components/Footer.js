import React from 'react'
import FooterPart from './FooterPart'

const Footer = () => {
  return (
    <div className='text-white bg-black text-center'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5'>
            <FooterPart/>
            <FooterPart/>
            <FooterPart/>
            <FooterPart/>
            <FooterPart/>
        </div>
    </div>
  )
}

export default Footer