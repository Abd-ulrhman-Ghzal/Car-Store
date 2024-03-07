import React from 'react'
import seat from '../../images/seat.png'
import whell from '../../images/wheel.png'
import speedrpm from '../../images/speadRpm.png'
import * as Ioicons from "react-icons/io";
import { useNavigate } from 'react-router-dom'


export default function Carcard({src,cartype}) {
  const navigation=useNavigate()
  return (
    <div className='flex flex-col gap-7 items-center Car-card' >
         <div>
           <img src={src} alt='' className='max-w-full'/>
         </div>
         <h2 className='text-center main-text'>{cartype}</h2>
         <div className='flex lg:gap-16 gap-7'>
           <div className='flex items-center justify-center gap-3 flex-wrap'>
             <div>
              <img src={seat} alt='' className='max-w-full'/>
             </div>
             <p>4 Seator</p>
           </div>
           <div className='flex items-center justify-center gap-3 flex-wrap'>
             <div>
              <img src={whell} alt='' className='max-w-full'/>
             </div>
             <p>Manual</p>
           </div>
           <div className='flex items-center justify-center gap-3 flex-wrap'>
             <div>
              <img src={speedrpm} alt='' className='max-w-full'/>
             </div>
             <p>5KM/1-lt</p>
           </div>
         </div>
         <h3 className='text-center main-text'>Starting at 500$/Day</h3>
         <div className='flex items-center justify-around w-full'>
          <div className='flex items-center gap-2 sec-btn px-5 py-3'>
            <button className=''>Details</button>
            <Ioicons.IoMdArrowDropright/>
          </div>
          <button className='rounded-3xl border p-3 main-btn' onClick={()=>navigation('/Car-Store/Cart-Order')}>Buy Now</button>
         </div>
    </div>
  )
}
