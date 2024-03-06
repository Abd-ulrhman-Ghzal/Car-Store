import React from 'react'
import Carscard from './Carscard'
import audi from '../../images/audi.png'
import bmw from '../../images/bmw.png'
import volvo from '../../images/stition.png'
import bmw2 from '../../images/bmw 2.png'

export default function Cart() {

  return (
  <>
    <div className='CarPageimg'>
    </div>
    <div className='container mx-auto '>
      <div className='flex flex-col gap-6 mt-16 ml-5 mb-10'>
        <h1 className='main-text opacity-70 Cart-mainText relative '>My Cart</h1>
        <div className='grid grid-cols-1 gap-12  mt-20'>
         <div className='grid grid-cols-6 md:gap-12 gap-3'>
           <h1 className='col-start-2 col-end-4'>Product</h1>
           <h1 className='col-start-4'>Price</h1>
           <h1 className='col-start-5'>Color</h1>
           <h1 className='col-start-6'>Delete</h1>
         </div>
         <div className='grid grid-cols-6 md:gap-12 gap-3 justify-center items-center'>
           <Carscard src={audi} cartype={'AUDI'} color={'Black'}/>
           <Carscard src={bmw} cartype={'BMW M5'} color={'Black'}/>
           <Carscard src={volvo} cartype={'VOLVO'} color={'Black'}/>
           <Carscard src={bmw2} cartype={'BMW'} color={'Black'}/>
         </div>
        </div>
      </div>
    </div>
  </>
  )
}
