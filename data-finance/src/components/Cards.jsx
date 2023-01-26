import React from 'react'
import Card from './Card'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
    const commonMoney = "$149"
    const commonHead = "Single User"
    const phr = ["500 GB Storage","1 Granted User", "Send up to 2 GB"]
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card image={Single} strings={phr} header={commonHead} money={commonMoney}/>
        <Card image={Double} strings={phr} header={commonHead} money={commonMoney} card={"middle-btn"}/>
        <Card image={Triple} strings={phr} header={commonHead} money={commonMoney}/>
    </div>
  </div>
  )
}

export default Cards