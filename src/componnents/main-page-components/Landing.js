import React from 'react'
import landingCar from '../../images/porcha.png'
import * as Faicons from "react-icons/fa";
import * as Ioicons from "react-icons/io";
import * as Tbicons from 'react-icons/tb'
import * as AIicons from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {motion, spring} from 'framer-motion'

export default function Landing() {

  
  return (
    <>
    <div className='backimg flex items-center min-h-svh'>
    <div className='container mx-auto pt-8 pb-10 mb-8 '>
     <div className='flex items-center justify-between flex-col-reverse md:flex-row px-5 gap-10'>
      <div className='flex flex-col items-center md:items-start gap-12'>
        <div className='flex flex-col gap-2 flex-1 items-center md:items-start'>
          <h5>Arriving Summer 2019</h5>
          <h1>MAKE EVERY DAY<br/>LEGENDARY</h1>
          <p className='landing-p'>The culmimination of comfort,luxury,and powerrul living is embodied <br/>in the First-Ever BMWX7 -the biggest BMW ever built.</p>
        </div>
        <div>
        <Link to='/Car-Store/Car-Detail/Porcha 911 GT3' className='rounded-3xl border p-3 main-btn' >EXPLORE</Link>
        </div>
      </div>
      
      <motion.div className=' relative'
      whileHover={{scale:1.050}}
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}}
      transition={spring}
      >
       <img src={landingCar} alt='' className='max-w-full '/>
      </motion.div>
     </div>
     
    </div>
    </div>
    <div className='container mx-auto'>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-10 px-10 py-5 mt-10  border drop-shadow rounded-3xl mb-5'>
      <div className=' flex flex-col gap-4 w-fit'>
        <h3>Name</h3>
        <div className='flex items-center gap-3'>
         <Faicons.FaCar/>
         <div className='flex items-center gap-1'>
         <p>Choose name</p>
          <Ioicons.IoMdArrowDropdown/>  
         </div>
        </div>
      </div>
      <div className=' flex flex-col gap-4 w-fit'>
        <h3>Price</h3>
        <div className='flex items-center gap-3'>
         <Tbicons.TbMoneybag/>
         <div className='flex items-center gap-1'>
         <p>Choose price</p>
          <Ioicons.IoMdArrowDropdown/>
         </div>
        </div>
      </div>
      <div className=' flex flex-col gap-4 w-fit'>
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
      <div className=' flex flex-col gap-4 w-fit'>
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
