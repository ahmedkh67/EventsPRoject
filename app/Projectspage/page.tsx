import { Commentssec, GalleryCell, Mapsec, Servicesec } from '@/components'
import React from 'react'

const page = () => {
  return (<>
    <div className="flex w-full justify-center items-center bg-black pt-[140px]">
        <h1 className="md:text-[50px] text-[38px] text-white border-white border-2 border-solid px-6 rounded-xl " >
          أبرز أعمالنا
        </h1>
    </div>
    <div className="flex bg-black w-full flex-col md:flex-row px-[5%] justify-center items-center flex-wrap py-[60px] ">
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
        <GalleryCell />
    </div>
    
    <Commentssec />
    <Mapsec />
    </>
  )
}

export default page