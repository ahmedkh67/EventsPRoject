import React from 'react'
import Image from 'next/image'
import whatsappIcon from '@/public/Whatsapp Icon.svg'
import Link from 'next/link'

const Whatsicon = () => {
  return (
    <>
    <Link href={'https://wa.me/+966590029919'}>
    <div className="flex z-80 w-24 h-24 rounded-full p-2 bg-green-500 justify-center items-center fixed bottom-11 left-11">
        <Image src={whatsappIcon} alt={'whatsapp icon'} width={100} height={60} />
    </div>
    </Link>
    </>
  )
}

export default Whatsicon