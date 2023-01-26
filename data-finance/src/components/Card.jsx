import React from 'react'

const Card = ({image, strings, header, money ,card}) => {
  return (
    <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={image} alt="/" />
        <h2 className='text-2xl font-bold text-center py-8'>{header}</h2>
        <p className='text-center text-4xl font-bold'>{money}</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{strings[0]}</p>
            <p className='py-2 border-b mx-8'>{strings[1]}</p>
            <p className='py-2 border-b mx-8'>{strings[2]}</p>
        </div>
        <button className={`${card || "bg-[#00df9a]"} w-[200px] rounded-md font-medium my-6 block mx-auto px-6 py-3`}>Start Trial</button>
    </div>
  )
}

export default Card