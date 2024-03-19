import React, { useContext } from 'react'
import * as IOicon from 'react-icons/io'
import { CartContext } from '../../Context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Carscard({src,cartype,price,id}) {
  const {removeCart}=useContext(CartContext)


  return (
    <>
    <ToastContainer className={'container'}/>
    <div className='col-start-1 col-end-3 md:col-end-4 gap-y-16 gap-x-4'>
      <div className='grid grid-cols-3 gap-4  items-center'>
        <div>
        <img src={src} alt='' className='max-w-full md:col-end-2 hidden md:block'/>
        </div>
        <div className='flex flex-col gap-7 col-start-1 col-end-4  md:col-start-2'>
          <h1 className='main-text EC'>{cartype}</h1>
          <p className='flex flex-wrap'>Code: #{Math.floor(Math.random() * 100000) + 1}</p>
          <p>Engine Capactiy: {Math.floor(Math.random() * 6000) + 1}CC</p>
        </div>
      </div>
    </div>
    <div>
        <p className='flex flex-col sm:flex-row'>{price}$</p>
    </div>
    <div>
        <p>black</p>
    </div>
    <button onClick={()=>removeCart(id)}>
    <IOicon.IoMdClose className='text-xl cursor-pointer' />
    </button>
    </>
  )
}
