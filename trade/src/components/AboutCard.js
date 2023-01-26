import React from 'react'

const AboutCard = ({icon, text, heading}) => {
  return (
    <div>
      <div className='flex flex-col border text-left rounded-2xl py-12 px-8 h-[350px]'>
        <div>
            <div className='rbg-blue inline-flex p-2 rounded-full'>
                {icon}
            </div>
            <h3 className='text-xl font-bold py-4'>{heading}</h3>
            <p>
                {text}
            </p>
        </div>
    <p>Cards</p>
</div> </div>
  )
}

export default AboutCard