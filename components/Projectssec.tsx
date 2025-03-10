"use client"

import React from 'react'
import GalleryCell from './GalleryCell'
import {Autoplay , Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projectssec = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center overflow-hidden bg-black py-[25px] px-[15%] md:px-[5%]">
                
        
                <Swiper
                modules={[Autoplay, Pagination , Scrollbar]}
                pagination={true}
                slidesPerView={1}
                breakpoints={
                    {
                      800: {
                        slidesPerView: 4
                      }
                    }
                  }
                  
                scrollbar
                loop={true}
                autoplay={{delay: 2500 ,
                    disableOnInteraction: false
                }}
                spaceBetween={100}
                 className='flex justify-center items-center ' >

                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>
                    <SwiperSlide><GalleryCell /></SwiperSlide>

                 </Swiper>
        
        
        
        
    </div>
    <div className="flex w-full justify-center items-center bg-black pb-[50px]">
        <button className="flex bg-blue-400 h-14 justify-center items-center px-12 rounded-md
        transition-[0.3s] hover:bg-blue-500 ">
            <h1 className='text-white font-bold text-xl'>
                جميع الأعمال  
            </h1>
        </button>
    </div>
    </>
  )
}

export default Projectssec