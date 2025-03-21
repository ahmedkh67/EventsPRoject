"use client"

import React from 'react'
import ServiceCard from './ServiceCard'
import { ServicesCards } from '@/Constants'
import { motion } from 'motion/react'

const Servicesec = () => {
  return (
  <>
    <div className="flex md:flex-row flex-col w-full justify-evenly items-center overflow-hidden bg-white py-[50px] flex-wrap">

    {ServicesCards.map((item) => (
          <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity:1 , scale: 1}} key={item.title}>

      <ServiceCard title={item.title} bio={item.bio} link={item.link} key={item.title} src={item.src} />
      </motion.div>
    ))}
      
    </div>
    
    </>
    )
}

export default Servicesec