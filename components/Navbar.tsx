"use client"

import React from 'react'
import Link from 'next/link'
import { Navlist } from '@/Constants'
import MenuIcon from '@/public/Menu 2 Icon.svg'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '@/public/Logo.jpg'
import CloseIcon from '@/public/Closeicon.svg'

const Navbar = () => {
  const [open , setopen] = useState(false) ;

  return (
    <>
    <div className="NavBar z-30">
     <div className="LogoContainer">

     </div>

     <ul className='NavlistContainer'>
      {Navlist.map((item) => (
        <Link href={item.link} key={item.title}>
          <h1 className='Navlist-li font-bold transition-[0.3] text-2xl' >
            {item.title}
          </h1>        
        </Link>
      ))}
     </ul>

     <button className=" md:flex hidden bg-blue-400 h-14 justify-center items-center px-12 rounded-md
     transition-[0.3s] hover:bg-blue-500 ">
        <h1 className='text-white font-bold text-xl'>
        طلب خدمة الأن
        </h1>
     </button>

     <Image src={MenuIcon} alt='Menu list icon ' width={50} height={50} className='md:hidden flex'
     onClick={() => {setopen(!open)}}
      />

    </div>
    <div className={`flex w-full bg-white h-full top-0 right-0 fixed z-40 
      px-6 flex-col justify-start  pt-6 ${open? 'Menuinactive' : 'Menuactive'} *:`}>
        <div className="flex w-full justify-between items-center ">
          <Image src={Logo} alt={"logo img"} width={140} height={50} />
          <Image src={CloseIcon} alt={"close icon"} width={25} height={25} onClick={() => {setopen(!open)}}  />
        </div>
        <div className="flex flex-col justify-start items-end">
          <Link href={'././'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-4 justify-end ">
              <h1 className='text-4xl text-end font-bold my-4' >
              الرئيسية
              </h1>
            </div>
          </Link>
          <Link href={'/Projectspage'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-4 justify-end ">
              <h1 className='text-4xl text-end font-bold my-4' >
              أبرز أعمالنا
              </h1>
            </div>
          </Link>
          <Link href={'/Contacts'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex justify-end w-full py-4">
              <h1 className='text-4xl text-end font-bold my-4' >
              تواصل معنا
              </h1>
            </div>
          </Link>
          
          
        </div>
    </div>

    </>
  )
}

export default Navbar