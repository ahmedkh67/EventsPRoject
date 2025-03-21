import React from 'react'
import Image from 'next/image'

type MoreboxParams = {
    title : string ,
    bio: string, 
    srcs: string ,
}

function MoreBox ({title , bio , srcs } : MoreboxParams) {
    return (
      <>
      <div className='flex flex-row-reverse w-full py-4 md:h-[118px]  px-4 overflow-hidden justify-center border-1 md:my-2 my-3 rounded-md border-black
       border-solid bg-white transition-[0.3s] hover:bg-blue-300 opacity-85 '>
          <Image src={srcs} alt={'morebox icon'} width={60} height={65} className='ml-5' />
          <div className="flex w-full flex-col justify-center pl-4">
            <h1 className="text-[27px] text-end md:text-[25px] text-black font-bold serif">
              {title}
            </h1>
            <h1 className="text-[13px] text-end md:text-[12px] text-gray-950">
              {bio}
          
            </h1>
          </div>
      </div>
  
      </>
    )
  }
export default MoreBox