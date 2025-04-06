"use client"

import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Moresec, Servicesec, Commentssec, Mapsec, Whatsicon, Herosec } from '@/components';
import { LuxurywaresSlidesText, SlidesImages } from '@/Constants';

const page = () => {
  return (<>
    <Herosec slide1={SlidesImages.LuxurywaresSlides.Slide1}
    slide2={SlidesImages.LuxurywaresSlides.Slide2}
    slide3={SlidesImages.LuxurywaresSlides.Slide3}
    bgcolor={'bg-black md:bg-white'}
    title={LuxurywaresSlidesText.title}
    bio={LuxurywaresSlidesText.bio} 
    slide4={SlidesImages.LuxurywaresSlides.Slide4} 
    slide5={SlidesImages.LuxurywaresSlides.Slide5} 
    slide6={SlidesImages.LuxurywaresSlides.Slide6} 
    slide7={SlidesImages.LuxurywaresSlides.Slide7} 
    slide8={SlidesImages.LuxurywaresSlides.Slide8} 
    slide9={SlidesImages.LuxurywaresSlides.Slide9} />
     
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