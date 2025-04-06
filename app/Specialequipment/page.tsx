"use client"

import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Moresec, Servicesec, Commentssec, Mapsec, Whatsicon, Herosec } from '@/components';
import { SlidesImages, SpecialequipmentSlideText } from '@/Constants';

const page = () => {
  return (<>
    <Herosec slide1={SlidesImages.SpecialeqipmentSlides.Slide1}
    slide2={SlidesImages.SpecialeqipmentSlides.Slide2}
    slide3={SlidesImages.SpecialeqipmentSlides.Slide3}
    bgcolor={'bg-black md:bg-white'}
    title={SpecialequipmentSlideText.title}
    bio={SpecialequipmentSlideText.bio} 
    slide4={SlidesImages.SpecialeqipmentSlides.Slide4}
     slide5={SlidesImages.SpecialeqipmentSlides.Slide5} 
     slide6={SlidesImages.SpecialeqipmentSlides.Slide6} 
     slide7={SlidesImages.SpecialeqipmentSlides.Slide7} 
     slide8={SlidesImages.SpecialeqipmentSlides.Slide8} 
     slide9={SlidesImages.SpecialeqipmentSlides.Slide9} />

    
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