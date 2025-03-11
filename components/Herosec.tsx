"use client"

import React from 'react'
import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';


const Herosec = () => {
  return (
    
    <div className="flex flex-col md:flex-row md:pt-[90px] pt-[110px] justify-between items-center bg-white rounded-md ">
      <div className="flex w-[90%] md:w-1/3 h-[410px] border-black border-8 border-double absolute md:translate-x-64 translate-x-4 translate-y-8 md:translate-y-8 md:mr-0 mr-5">

      </div>
     <div className="flex justify-center items-center md:w-1/2 w-full bg-white md:m-10 h-[450px] md:mr-0 mr-5" >
        

                  
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
                   className='flex w-[90%] h-[90%]  justify-center items-center bg-slate-500 md:mr-0 mr-5' >
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
     <div className=" flex flex-col justify-center items-end w-[90%] bg-black md:m-10 md:pr-[5%] px-[5%] pb-10 rounded-ss-xl[120px] ">
       <h1 className='md:text-7xl text-5xl text-end font-bold my-10 text-white'>
        صدى النور
       </h1>

       <h1 className='md:text-4xl text-2xl text-end text-white '>
       نحن متخصصون في تأجير لوازم الحفلات والمناسبات بجودة عالية وبأسعار تنافسية. سواء كنت تخطط لحفل زفاف، أو عيد ميلاد، أو مناسبة خاصة، فإننا نقدم لك كل ما تحتاجه لجعل يومك مميزاً ومختلفاً
       </h1>
       <Link href={'#Servicessecid'} >
       <button className="flex bg-blue-400 h-14 justify-center items-center px-12 mt-12 rounded-md
        transition-[0.3s] hover:bg-blue-500 ">
          <h1 className='text-white font-bold text-lg'>
          تعرف على خدماتنا
            </h1>
        </button>
        </Link>
      </div> 
    </div>  )
}

export default Herosec