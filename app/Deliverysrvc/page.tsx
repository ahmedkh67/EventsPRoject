"use client"

import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Moresec, Servicesec, Commentssec, Mapsec, Whatsicon, Herosec } from '@/components';
import { DeliverysrvcSlidesText, SlidesImages } from '@/Constants';

const page = () => {
  return (<>
    <Herosec slide1={SlidesImages.DeliverysrvcSlides.Slide1}
    slide2={SlidesImages.DeliverysrvcSlides.Slide2}
    slide3={SlidesImages.DeliverysrvcSlides.Slide3}
    bgcolor={'bg-black md:bg-white'} title={DeliverysrvcSlidesText.title}
    bio={DeliverysrvcSlidesText.bio} 
    slide5={SlidesImages.DeliverysrvcSlides.Slide4} 
    slide6={SlidesImages.DeliverysrvcSlides.Slide5} 
    slide4={SlidesImages.DeliverysrvcSlides.Slide6} 
    slide7={SlidesImages.DeliverysrvcSlides.Slide7} 
    slide8={SlidesImages.DeliverysrvcSlides.Slide8} 
    slide9={SlidesImages.DeliverysrvcSlides.Slide9} />


        <Moresec />
              <div className="flex w-full justify-center items-center bg-white pt-20 ">
                <h1 className="text-[50px] " >
                  خدمات أخرى
                </h1>
              </div>
              <Servicesec />
        <Commentssec />
        <Whatsicon />
        <Mapsec />
        </>
  )
}

export default page