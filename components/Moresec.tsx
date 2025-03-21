"use client"

import React from 'react'
import Morebox from './MoreBox';
import { Moreboxes } from '@/Constants';
import { motion } from 'motion/react';




const Moresec = () => {
  return (
    <div id='moresec' className="flex w-full flex-col md:flex-row bg-white md:justify-around items-start justify-around md:py-0 py-3 px-2">
      
      {Moreboxes.map((item) => (
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: 0.7}}}
        key={item.MoreBoxtitle}>
        
          <Morebox title={item.MoreBoxtitle} 
          bio={item.MoreBoxbio} srcs={item.MoreBoxsrc} key={item.MoreBoxtitle} />
       </motion.div>
      ))}
    
    </div>  
    )
}

export default Moresec ;
