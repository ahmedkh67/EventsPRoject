import React from 'react'
import ServiceCard from './ServiceCard'

const Servicesec = () => {
  return (
  <>
    <div className="flex md:flex-row flex-col w-full justify-evenly items-center overflow-hidden bg-white py-[50px] flex-wrap">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      
    </div>
    
    </>
    )
}

export default Servicesec