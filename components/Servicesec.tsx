import React from 'react'
import ServiceCard from './ServiceCard'
import { ServicesCards } from '@/Constants'

const Servicesec = () => {
  return (
  <>
    <div className="flex md:flex-row flex-col w-full justify-evenly items-center overflow-hidden bg-white py-[50px] flex-wrap">
      
    {ServicesCards.map((item) => (
      <ServiceCard title={item.title} bio={item.bio} link={item.link} key={item.title} />
    ))}
      
    </div>
    
    </>
    )
}

export default Servicesec