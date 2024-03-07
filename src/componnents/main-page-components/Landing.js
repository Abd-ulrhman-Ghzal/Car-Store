import React from 'react'
import landingCar from '../../images/porcha.png'
import * as Faicons from "react-icons/fa";
import * as Ioicons from "react-icons/io";
import * as Tbicons from 'react-icons/tb'
import * as AIicons from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigation=useNavigate()
  
  return (
    <>
    <div className='backimg flex items-center md:h-svh-100'>
    <div className='container mx-auto pt-8 pb-10 mb-8 '>
     <div className='flex items-center justify-between flex-col-reverse md:flex-row px-5 gap-10'>
      <div className='flex flex-col items-center md:items-start gap-12'>
        <div className='flex flex-col gap-2 flex-1 items-center md:items-start'>
          <h5>Arriving Summer 2019</h5>
          <h1>MAKE EVERY DAY<br/>LEGENDARY</h1>
          <p className='landing-p'>The culmimination of comfort,luxury,and powerrul living is embodied <br/>in the First-Ever BMWX7 -the biggest BMW ever built.</p>
        </div>
        <div>
        <button className='rounded-3xl border p-3 main-btn' onClick={()=>navigation('Car-Store/Car-Detail')}>EXPLORE</button>
        </div>
      </div>
      
      <div className=' relative'>
       <img src={landingCar} alt='' className='max-w-full '/>
       </div>
     </div>
     
    </div>
    </div>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center px-10 py-5 mt-10  border drop-shadow rounded-3xl flex-wrap md:flex-nowrap gap-5 mb-5'>
      <div className=' flex flex-col gap-4'>
        <h3>Name</h3>
        <div className='flex items-center gap-3'>
         <Faicons.FaCar/>
         <div className='flex items-center gap-1'>
         <p>Choose name</p>
          <Ioicons.IoMdArrowDropdown/>  
         </div>
        </div>
      </div>
      <div className=' flex flex-col gap-4'>
        <h3>Price</h3>
        <div className='flex items-center gap-3'>
         <Tbicons.TbMoneybag/>
         <div className='flex items-center gap-1'>
         <p>Choose price</p>
          <Ioicons.IoMdArrowDropdown/>
         </div>
        </div>
      </div>
      <div className=' flex flex-col gap-4'>
        <h3>Engine Capicity</h3>
      <div className='flex items-center gap-3'>
         <AIicons.AiOutlineRise/>
       <div className='flex items-center gap-1'>
         <p>Choose capicity</p>
         <div className='flex flex-col items-center justify-center'>
          <Ioicons.IoMdArrowDropup/>
         <Ioicons.IoMdArrowDropdown/>
         </div>    
       </div>
      </div>
      </div>
      <div className=' flex flex-col gap-4'>
        <h3>Brand</h3>
        <div className='flex items-center gap-3'>
         <Tbicons.TbBrandFlutter/>
         <div className='flex items-center gap-1'>
         <p>Choose brand</p>
          <Ioicons.IoMdArrowDropdown/>
         </div>
        </div>
      </div>
     </div>
    </div>
    
    </>
  )
}
