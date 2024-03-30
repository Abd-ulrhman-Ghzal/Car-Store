import React, { useContext } from 'react'
import landingCar from '../../images/cars-thumbnail/5.png'
import * as Faicons from "react-icons/fa";
import * as Ioicons from "react-icons/io";
import * as Tbicons from 'react-icons/tb'
import * as AIicons from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {motion, spring} from 'framer-motion'
import Select from 'react-select'
import { CartContext } from '../../Context/Context';
import 'rsuite/Dropdown/styles/index.css';
import {  Input,Dropdown } from 'rsuite';



export default function Landing() {
  const {selectedCarName,setSelectedCarName,CarsNameOptions,CarsBrandOptions,setSelectedCarBrand,
    selectedCarBrand, setMinValue, setMaxValue,CarsFuelTypeOptions,selectedFuelType,setSelectedFuelType }=useContext(CartContext)
  
  
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
        <Link to='/Car-Store/Car-Detail/Nissan Altima' className='rounded-3xl border p-3 main-btn' >EXPLORE</Link>
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
      <div className='flex flex-wrap sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 px-10 py-5 mt-10  border drop-shadow rounded-3xl mb-5'>
      <div className=' flex flex-col gap-4 w-fit h-full'>
        <h3>Name</h3>
        <div className='flex items-center gap-5'>
         <Faicons.FaCar/>
         <div className='flex items-center gap-1 flex-grow'>
         <Select
         classNamePrefix={'w-full'}
         isClearable
         placeholder='Select Car Name'
         options={CarsNameOptions}
         onChange={(Select)=>{setSelectedCarName(Select)}}
         value={selectedCarName}
         />
         </div>
        </div>
      </div>
      <div className=' flex flex-col gap-4 w-fit h-full'>
        <h3>Price</h3>
        <div className='flex items-center justify-start gap-5 '>
         <Tbicons.TbMoneybag/>
           <Dropdown className='flex flex-col gap-4 w-fit' title='Select Price'>
              <div className='py-2 px-4'>
                <div className='flex gap-3 justify-between items-center'>
                <p>Min</p>
                <Input type='search' className='py-3 px-2 rounded-lg' placeholder='Enter Min Price' defaultValue={undefined} onChange={(input)=>input === undefined?setMinValue(undefined):setMinValue(input)}/>
                <p>$</p>
                </div>
                 
                <div className='flex gap-3 justify-between items-center'>
                <p>Max</p>
                <Input type='search' className='py-3 px-2 rounded-lg' placeholder='Enter Max Price' defaultValue={undefined} onChange={(input)=>input === undefined?setMaxValue(undefined):setMaxValue(input)}/>
                <p>$</p>
                </div>    
              </div>         
         </Dropdown>
        </div>
      </div>
      <div className=' flex flex-col gap-4 w-fit h-full'>
        <h3>FuelType</h3>
      <div className='flex items-center gap-5'>
         <AIicons.AiOutlineRise/>
       <div className='flex items-center gap-1'>
         <Select
         isClearable
         placeholder='Select FuelType'
         options={CarsFuelTypeOptions}
         onChange={(Select)=>setSelectedFuelType(Select)}
         value={selectedFuelType}
         />  
       </div>
      </div>
      </div>
      <div className=' flex flex-col gap-4 w-fit h-full'>
        <h3>Brand</h3>
        <div className='flex items-center gap-5'>
         <Tbicons.TbBrandFlutter/>
         <div className='flex items-center gap-1'>
         <Select
         isClearable
         isDisabled={selectedCarName?false:true}
         placeholder='Select Car Brand'
         options={CarsBrandOptions}
         onChange={(Select)=>setSelectedCarBrand(Select)}
         value={selectedCarBrand}
         />
         </div>
        </div>
      </div>
     </div>
    </div>
    
    </>
  )
}
