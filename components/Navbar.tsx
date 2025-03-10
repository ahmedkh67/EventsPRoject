import React from 'react'
import Link from 'next/link'
import { Navlist } from '@/Constants'
import MenuIcon from '@/public/Menu 2 Icon.svg'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <div className="NavBar z-10">
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

     <Image src={MenuIcon} alt='Menu list icon ' width={35} height={35} className='md:hidden flex' />
     
    </div>

    </>
  )
}

export default Navbar