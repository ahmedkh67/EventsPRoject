import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type SocialBoxesTypes = {
    title: string , 
    Src : string,
    link: string ,
}

function SocialBox({title , Src, link}: SocialBoxesTypes){
  return (
    <div className="flex flex-col md:flex-row w-40 h-36 p-4 my-4 rounded-2xl bg-black justify-center items-center border-1 border-black border-solid">
      <Link href={link} >
        <div className="flex w-full h-full border-2 border-black bg-zinc-900 border-solid rounded-xl justify-center items-center flex-col">
          
          <div className="flex w-16 h-16 rounded-full pt-2 my-1 
          border-solid justify-center items-center ">
            <Image src={Src} alt={'idonr'} width={150} height={35} />
          </div>
          
          <h1 className='text-2xl font-bold text-white opacity-50'>
          {title}
          </h1>
          <h1 className='text-2xl text-end font-bold text-white pb-1'>

          </h1>
        </div>
      </Link>
    </div>
  )
}

export default SocialBox