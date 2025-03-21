"use client"

import React from 'react'
import Link from 'next/link'


type ServiceCardTypes = {
    title : string , 
    bio : string , 
    link: string,
    src: string
}

function ServiceCard ({title , bio , link, src}: ServiceCardTypes ){
  return (
    <>
    
    <div className="ServiceCard_Container bg-zinc-900 my-20 ml-12">
        
        <div className={`-translate-x-12 -translate-y-36 ${src} *: `}>

        </div>
        <div className="ServiceCard_Content">
            <h1 className='text-center text-2xl font-bold text-white z-10'>
                {title}
            </h1>
            <p className='text-center text-lg text-white opacity-80 z-10'>
                {bio}
            </p>

            <Link href={link} className='z-10' >
                <button className="flex mt-2 bg-black h-14 justify-center items-center px-20 rounded-md
                    transition-[0.3s] hover:bg-blue-500 border-0 border-white border-solid z-10">
                        <h1 className='text-white font-bold text-xl'>
                            معرفة المزيد                    
                        </h1>
                </button>           
            </Link>

        </div>
    </div>
    
    </>
  )
}

export default ServiceCard