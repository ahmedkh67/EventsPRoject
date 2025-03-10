import { NumBoxes } from '@/Constants'
import React from 'react'
import NumBox from './NumBox'

const NumBoxessec = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center bg-black pt-10 ">
        <h1 className="text-[50px] text-white " >
            حققنا أكثر من
        </h1>
      </div>
    <div className="flex flex-col md:flex-row w-full md:h-77 
    Distance_Background11 bg-black justify-evenly items-center pb-12 ">
      {NumBoxes.map((item) => (
        <NumBox Num={item.Num} Dis={item.Dis} Src={item.Src}  />
      ))}     
    </div>
    </>
    )
}

export default NumBoxessec