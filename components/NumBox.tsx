import React from 'react'
import Image from 'next/image'

type NumBoxesTypes = {
    Num: number | string , 
    Dis : string | any , 
    Src : string | any
}

function NumBox({Num , Dis , Src}: NumBoxesTypes){
  return (
    <div className="flex flex-col md:flex-row w-60 h-56 p-4 my-4 rounded-2xl bg-black justify-center items-center border-1 border-black border-solid">
      <div className="flex w-full h-full border-2 border-black bg-zinc-900 border-solid rounded-xl justify-center items-center flex-col">
        
        <div className="flex w-20 h-20 rounded-full  m-2 
         border-solid justify-center items-center ">
          <Image src={Src} alt={'idonr'} width={65} height={35} />
        </div>
        
        <h1 className='text-5xl font-bold text-white'>
        {Num}
        </h1>
        <h1 className='text-2xl text-end font-bold text-white'>
        {Dis}
        </h1>
      </div>
    </div>
  )
}

export default NumBox