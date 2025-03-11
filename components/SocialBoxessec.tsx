import { SocialBoxes } from '@/Constants'
import React from 'react'
import SocialBox from './SocialBox'
const SocialBoxessec = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center bg-black pt-10 ">
        <h1 className="text-[50px] text-white " >
            حساباتنا    
        </h1>
    </div>
    <div className="flex flex-col md:flex-row w-full md:h-77 
    Distance_Background11 bg-black justify-evenly items-center pb-6 ">
      {SocialBoxes.map((item) => (
        <SocialBox title={item.title} Src={item.Src} link={item.link} key={item.title}  />
      ))}     
    </div>
    <div className="flex w-full flex-col justify-center justify-start md:items-end bg-black pb-10 md:px-48 px-10">
        <h1 className="text-xl text-center md:text-3xl text-white my-2 opacity-50" >
            رقم التواصل 1 - 0590029919    
        </h1>
        <h1 className="text-xl md:text-3xl text-center text-white opacity-50" >
            رقم التواصل 2 - 0590029919    
        </h1>
    </div>
    </>
    )
}

export default SocialBoxessec