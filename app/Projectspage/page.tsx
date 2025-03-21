import { Commentssec, GalleryCell, Mapsec, Whatsicon } from '@/components'
import React from 'react'

const page = () => {
  return (<>
    <div className="flex w-full justify-center items-center bg-black pt-[140px]">
        <h1 className="md:text-[50px] text-[38px] text-white border-white border-2 border-solid px-6 rounded-xl " >
          أبرز أعمالنا
        </h1>
    </div>
    <div className="flex bg-black w-full flex-col md:flex-row px-[5%] justify-center items-center flex-wrap py-[60px] ">
        <GalleryCell src={'image1'} />
        <GalleryCell src={'image2'} />
        <GalleryCell src={'image3'} />
        <GalleryCell src={'image4'} />
        <GalleryCell src={'image5'} />
        <GalleryCell src={'image6'} />
        <GalleryCell src={'image8'} />
        <GalleryCell src={'image9'} />
        <GalleryCell src={'image10'} />
        <GalleryCell src={'image11'} />
        <GalleryCell src={'image12'} />
        
    </div>
    
    <Commentssec />
    <Whatsicon />
    <Mapsec />
    </>
  )
}

export default page