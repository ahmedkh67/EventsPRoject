import React from 'react'
import Link from 'next/link'


type ServiceCardTypes = {
    title : string , 
    bio : string , 
    link: string
}

function ServiceCard ({title , bio , link}: ServiceCardTypes ){
  return (
    <>
    <div className="ServiceCard_Container bg-zinc-900">

        <div className="ServiceCard_Content">
            <h1 className='text-center text-2xl font-bold text-white'>
                {title}
            </h1>
            <p className='text-center text-lg text-white opacity-80'>
                {bio}
            </p>

            <Link href={link}>
                <button className="flex mt-10 bg-black h-14 justify-center items-center px-20 rounded-md
                    transition-[0.3s] hover:bg-blue-500 border-0 border-white border-solid">
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