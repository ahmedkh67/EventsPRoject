import { SocialBoxes } from '@/Constants'
import React from 'react'
import SocialBox from './SocialBox'
const SocialBoxessec = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center bg-black pt-10 ">
        <h1 className="text-[50px] text-white " >
            حققنا أكثر من
        </h1>
      </div>
    <div className="flex flex-col md:flex-row w-full md:h-77 
    Distance_Background11 bg-black justify-evenly items-center pb-12 ">
      {SocialBoxes.map((item) => (
        <SocialBox title={item.title} Src={item.Src} key={item.title}  />
      ))}     
    </div>
    </>
    )
}

export default SocialBoxessec