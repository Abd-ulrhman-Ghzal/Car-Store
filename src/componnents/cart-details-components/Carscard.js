import React from 'react'
import * as IOicon from 'react-icons/io'


export default function Carscard({src,cartype,color}) {
  return (
    <>
    <div className='col-start-1 col-end-4'>
      <div className='grid grid-cols-3 md:gap-7 gap-3 items-center'>
        <img src={src} alt='' className='max-w-full md:col-end-2'/>
        <div className='flex flex-col gap-7 col-start-2 col-end-4'>
          <h1>{cartype}</h1>
          <p className='flex flex-wrap'>Code: #{Math.floor(Math.random() * 100000) + 1}</p>
          <p>Engine Capactiy: {Math.floor(Math.random() * 6000) + 1}CC</p>
        </div>
      </div>
    </div>
    <div>
        <p>$ {Math.floor(Math.random() * (6000 - 4000 ) + 4000)}</p>
    </div>
    <div>
        <p>{color}</p>
    </div>
    <div>
    <IOicon.IoMdClose className='text-xl cursor-pointer'/>
    </div>
    </>
  )
}
