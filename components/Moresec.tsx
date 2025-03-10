"use client"

import React from 'react'
import Morebox from './MoreBox';
import { Moreboxes } from '@/Constants';




const Moresec = () => {
  return (
    <div id='moresec' className="flex w-full flex-col md:flex-row bg-white md:justify-around items-start justify-around md:py-0 py-3">
      
      {Moreboxes.map((item) => (
        
        <Morebox title={item.MoreBoxtitle} 
        bio={item.MoreBoxbio} srcs={item.MoreBoxsrc} key={item.MoreBoxtitle} />
       
      ))}
    
    </div>  
    )
}

export default Moresec ;
