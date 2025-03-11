"use client"

import React from 'react'
import { useState } from 'react'

const Mapsec = () => {

  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14524.673703101556!2d39.6103803!3d24.4796205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf2a3f8fe8a3%3A0xe0cb8d99e746cfca!2sZAHA%20TAIBA%20HOTEL!5e0!3m2!1sar!2ssa!4v1737365957570!5m2!1sar!2ssa") ;
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { setAddress(e.target.value) }

  return (
    <>
    <div className="flex w-full justify-center flex-col items-center pb-12 bg-white">
      
      <h1 className='md:text-4xl text-4xl text-center font-bold mt-12 bg-white'>
        تشرفنا زيارتكم
      </h1>
      
    </div>
    <div className="flex w-full justify-between md:justify-start flex-row-reverse items-center py-6 md:px-0 px-3 bg-white ">
      <h1 className='md:text-3xl text-3xl text-end font-bold md:mr-[10%] md:ml-8'>
        فروعنا في المدينة
      </h1>
      <select value={Address} onChange={handleChange} name='Nameeinput' id='Nameeinput' className='flex bg-black text-white pointer transition-[0.3s] hover:scale-[104%]  h-10 border-1 border-black border-solid px-3 rounded-lg' > 
            <option value={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14524.673703101556!2d39.6103803!3d24.4796205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf2a3f8fe8a3%3A0xe0cb8d99e746cfca!2sZAHA%20TAIBA%20HOTEL!5e0!3m2!1sar!2ssa!4v1737365957570!5m2!1sar!2ssa"}
             > فرع باقدو </option>
            <option value={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7244.186877962948!2d46.629244859713644!3d24.79225377653852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2ssa!4v1741005258320!5m2!1sar!2ssa"}
             > فرع شوران </option>
            
            
                
      </select>
    </div>
    
    <div className="flex-col w-full h-64 bg-white justify-center items-end ">
      

    <iframe src={Address}
        width="100%" height="100%" >
        
    </iframe>
    </div>   
    </>
  )
}

export default Mapsec ;