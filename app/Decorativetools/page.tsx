"use client"

import React from 'react'
import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from 'motion/react';

import { Moresec, Servicesec, Commentssec, Orderbutton, Mapsec, Whatsicon, Herosec } from '@/components';
import { DecorativetoolsSlideText, SlidesImages } from '@/Constants';

const page = () => {
  return (<>
    <Herosec slide1={SlidesImages.DecorativetoolsSlides.Slide1}
     slide2={SlidesImages.DecorativetoolsSlides.Slide2}
     slide3={SlidesImages.DecorativetoolsSlides.Slide3}
     bgcolor={'bg-black md:bg-white'} title={DecorativetoolsSlideText.title}
      bio={DecorativetoolsSlideText.bio} />


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