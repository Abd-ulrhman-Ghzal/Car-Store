import React, { useState } from 'react'

export default function Imageslider({src,cartype}) {
    const [isHovered, setIsHovered] = useState(false);
  return (
            <div className='relative inline-block' >
               <img src={src} alt='' onMouseEnter={()=>setIsHovered(true)}  onMouseLeave={()=>setIsHovered(false)}/>
               {isHovered && (
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-white z-10 text-2xl'>
                  {cartype}
                </div>
               )}
            </div>
  )
}
