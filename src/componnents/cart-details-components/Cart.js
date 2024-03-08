import React from 'react'
import Carscard from './Carscard'
import audi from '../../images/audi.png'
import bmw from '../../images/bmw.png'
import volvo from '../../images/stition.png'
import bmw2 from '../../images/bmw 2.png'

export default function Cart() {
  const color=['Red',"black","yellow","Blue"]
  const random=Math.floor(Math.random() * color.length)

  return (
  <>
    <div className='CarPageimg'>
    </div>
    <div className='container mx-auto '>
      <div className='flex flex-col gap-6 mt-16 ml-5 mb-10'>
        <h1 className='main-text opacity-70 Cart-mainText relative '>My Cart</h1>
        <div className='grid grid-cols-1 gap-12  mt-20'>
         <div className='grid grid-cols-5 md:grid-cols-6 gap-y-16 gap-x-4'>
           <h1 className='col-start-1 col-end-3 md:col-start-2 md:col-end-4'>Product</h1>
           <h1 className='col-start-3 md:col-start-4'>Price</h1>
           <h1 className='col-start-4 md:col-start-5'>Color</h1>
           <h1 className=' col-start-5 md:col-start-6'>Delete</h1>
         </div>
         <div className='grid grid-cols-5 md:grid-cols-6 gap-y-16 gap-x-4 justify-center items-center'>
           <Carscard src={audi} cartype={'AUDI'} color={color[random]}/>
           <Carscard src={bmw} cartype={'BMW M5'} color={color[random]}/>
           <Carscard src={volvo} cartype={'VOLVO'} color={color[random]}/>
           <Carscard src={bmw2} cartype={'BMW'} color={color[random]}/>
         </div>
        </div>
      </div>
    </div>
  </>
  )
}
