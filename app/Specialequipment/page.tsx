"use client"

import React from 'react'
import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Moresec, Servicesec, Commentssec, Orderbutton, Mapsec, Whatsicon } from '@/components';

const page = () => {
  return (<>
    <div className="flex flex-col md:flex-row md:pt-[90px] pt-[110px] justify-between items-center bg-black md:bg-white rounded-md">
         <div className="flex justify-center items-center md:w-1/2 w-full  md:m-10 h-[450px] rounded-md">
            
    
                      
                      <Swiper
                      modules={[Autoplay, Pagination , Scrollbar, Navigation]}
                      pagination={true}
                      navigation={true}
                      slidesPerView={1}
                      scrollbar
                      loop={true}
                      autoplay={{delay: 2500 ,
                          disableOnInteraction: false
                      }}
                      spaceBetween={100}
                       className='flex w-[90%] h-[90%]  justify-center items-center bg-slate-500 rounded-lg ' >
                        <SwiperSlide className='flex justify-center items-center' >
                          <div className="flex w-full h-full Img1">
    
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center' >
                          <div className="flex w-full h-full Img2">
    
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-center' >
                          <div className="flex w-full h-full Img3">
    
                          </div>
                        </SwiperSlide>
                        
    
                       </Swiper>
    
            
          </div> 
         <div className=" flex flex-col justify-center items-end w-full bg-black md:m-10 md:pr-[5%] px-[5%] pb-10 rounded-ss-xl[120px] ">
           <h1 className='text-5xl text-end font-bold my-10 text-white'>
                تأجير الأثاث و المعدات الخاصة
           </h1>
    
           <h1 className='md:text-4xl text-2xl text-end text-white '>
           لدينا كل ما يضيف لمسة جمالية لمناسباتك             لدينا كل ما يضيف لمسة جمالية لمناسباتك
           لدينا كل ما يضيف لمسة جمالية لمناسباتك
           لدينا كل ما يضيف لمسة جمالية لمناسباتك

           </h1>

           <Orderbutton />

          </div> 
        </div>  

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