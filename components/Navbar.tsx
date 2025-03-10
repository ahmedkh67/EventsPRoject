import React from 'react'
import Link from 'next/link'
import { Navlist } from '@/Constants'

const Navbar = () => {
  return (
    <>
    <div className="NavBar z-10">
     <div className="LogoContainer">

     </div>

     <ul className='NavlistContainer'>
      {Navlist.map((item) => (
        <Link href={item.link}>
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

     <div className="flex w-10 h-10 bg-black md:hidden">

     </div>
    </div>

    </>
  )
}

export default Navbar