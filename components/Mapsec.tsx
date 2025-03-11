"use client"

import React from 'react'
import { useState } from 'react'

const Mapsec = () => {

  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.7952546027304!2d39.68722047281492!3d24.47918408271607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95d1eb150c83%3A0x27675fb84d025a88!2z2LXYr9mJINin2YTZhtmI2LEg2YTYqtij2KzZitixINmE2YjYp9iy2YUg2KfZhNij2YHYsdin2K0g2YjYp9mE2YXZhtin2LPYqNin2Ko!5e0!3m2!1sar!2ssa!4v1741713980659!5m2!1sar!2ssa") ;
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { setAddress(e.target.value) }

  return (
    <>
    <div className="flex w-full justify-center flex-col items-center pb-12 bg-white">
      
      <h1 className='md:text-4xl text-4xl text-center font-bold mt-12 bg-white'>
        تشرفنا زيارتكم
      </h1>
      
    </div>
    <div className="flex w-full justify-between md:justify-start flex-row-reverse items-center py-6 md:px-0 px-3 bg-white ">
      <h1 className='md:text-3xl text-2xl text-end font-bold md:mr-[10%] md:ml-8'>
        فروعنا في المدينة
      </h1>
      <select value={Address} onChange={handleChange} name='Nameeinput' id='Nameeinput' className='flex bg-black text-white pointer transition-[0.3s] hover:scale-[104%]  h-10 border-1 border-black border-solid px-3 rounded-lg' > 
            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.7952546027304!2d39.68722047281492!3d24.47918408271607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95d1eb150c83%3A0x27675fb84d025a88!2z2LXYr9mJINin2YTZhtmI2LEg2YTYqtij2KzZitixINmE2YjYp9iy2YUg2KfZhNij2YHYsdin2K0g2YjYp9mE2YXZhtin2LPYqNin2Ko!5e0!3m2!1sar!2ssa!4v1741713980659!5m2!1sar!2ssa"}
             > فرع باقدو </option>
            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9683.27374686831!2d39.61545654190413!3d24.399234513144897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdc0f8b7a92d5b%3A0x4c96cc785e49839!2z2KfZhNmG2YjYsSDZhNiq2KPYrNmK2LEg2YTZiNin2LLZhSDYp9mE2KfZgdix2KfYrSDZiNin2YTZhdmG2KfYs9io2KfYqg!5e0!3m2!1sar!2ssa!4v1741714259570!5m2!1sar!2ssa"}
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