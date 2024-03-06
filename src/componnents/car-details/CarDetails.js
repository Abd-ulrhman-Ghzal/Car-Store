import React, { useState } from 'react'
import * as IOicons from 'react-icons/io'
import * as FAicons from 'react-icons/fa6'
import car from '../../images/porcha2.png'
import CarsSlider from './CarsSlider'
import * as MDicon from 'react-icons/md'
import {  useNavigate } from 'react-router-dom'


export default function CarDetails({src,Cartype}) {
  const navigation=useNavigate()
  const [carnum,setCarNum]=useState(1 )
  const [price,Setprise]=useState(250)
  async function handelmin(){
    if(carnum>1){
      setCarNum(carnum - 1)
      Setprise(price - 250)  
    }
    
  }

  function handelmax(){
    setCarNum(carnum + 1)
    Setprise(price + 250)
    
  }


  return (
    <>
      <div className='CarDetailimg'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-12 items-center lg:items-start'>
          <div className='flex flex-col col-end-3 col-start-1'>
          <div className='flex flex-col gap-4 mx-9 md:mx-0'>
              <div className='flex items-center gap-2'>
              <p className='opacity-35'>Type</p>
              <IOicons.IoIosArrowForward/>
              <p className='opacity-35'>Car</p>
              <IOicons.IoIosArrowForward/>
              <p className='opacity-70'>Details</p>
              </div>
              <h1 className='main-text'>Porcha 911 GT3</h1>
              <p className='EC text-3xl'>6000 cc</p>
            </div>
            <div>
              <img src={car} alt='' className='max-w-full'/>
            </div>
            <div className='flex gap-4 items-center e self-center md:self-start'>
              <FAicons.FaArrowLeftLong className='arrow text-2xl'/>
              <CarsSlider/>
              <FAicons.FaArrowRightLong className='arrow text-2xl'/>
            </div>
          </div>
          <div className='flex flex-col mt-3 gap-6 mx-9 md:mx-0'>
            <div>
              <h1 className='main-text'>Details</h1>
            </div>
            <div className='flex flex-col gap-20 '>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl'>Rating And Review</h1>
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-1 '>
                    <MDicon.MdStarOutline className='arrow text-3xl'/>
                    <MDicon.MdStarOutline className='arrow text-3xl'/>
                    <MDicon.MdStarOutline className='arrow text-3xl'/>
                    <MDicon.MdStarOutline className='arrow text-3xl'/>
                    <MDicon.MdStarOutline className='arrow text-3xl'/>
                  </div>
                  <p className='opacity-70 text-2xl'>4.5</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
               <h1 className='main-text'>Desciption</h1> 
               <p className='opacity-50'>The culmimination of comfort,luxury,and powerrul living is embodied in the First-Ever BMWX7 -the biggest BMW ever built.</p>        
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='main-text'>Colors</h1>
                <div className='flex justify-around lg:justify-start lg:gap-8'>
                  <div className='c1'></div>
                  <div className='c2'></div>
                  <div className='c3'></div>
                </div>
              </div>
              <div className='flex justify-center gap-10 items-center flex-wrap'>
               <div className='flex gap-3 items-center'>
                <p className='min' onClick={handelmin}>-</p>
                <p>{carnum}</p>
                <p className='max' onClick={handelmax}>+</p>
               </div>
               <div className='flex gap-3 items-center'>
                <p className='text-2xl EC'>Price:</p>
                <p className='text-2xl'>{price} $</p>
               </div>
              </div>
            </div>
            <div className='flex justify-around flex-wrap gap-6 xl:gap-20'>
              <button className='btn details-btn-sec' onClick={()=>navigation('/Cart-Order')}>Add Too Cart</button>
              <button className='btn details-btn-main' onClick={()=>navigation('/Order-Confirmation')} >Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
