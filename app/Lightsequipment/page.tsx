"use client"

import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Moresec, Servicesec, Commentssec, Mapsec, Whatsicon, Herosec } from '@/components';
import { LightsequipmentSlideText, SlidesImages } from '@/Constants';

const page = () => {
  return (<>
    <Herosec slide1={SlidesImages.LightsequipmentSlides.Slide1}
    slide2={SlidesImages.LightsequipmentSlides.Slide2}
    slide3={SlidesImages.LightsequipmentSlides.Slide3}
    bgcolor={'bg-black md:bg-white'} title={LightsequipmentSlideText.title}
    bio={LightsequipmentSlideText.bio} 
    slide4={SlidesImages.LightsequipmentSlides.Slide4} 
    slide5={SlidesImages.LightsequipmentSlides.Slide5} 
    slide6={SlidesImages.LightsequipmentSlides.Slide6} 
    slide7={SlidesImages.LightsequipmentSlides.Slide7} 
    slide8={SlidesImages.LightsequipmentSlides.Slide8} 
    slide9={SlidesImages.LightsequipmentSlides.Slide9} />

      
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