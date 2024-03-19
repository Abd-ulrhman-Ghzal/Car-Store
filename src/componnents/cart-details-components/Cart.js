import React, { useContext } from 'react'
import Carscard from './Carscard'
import { CartContext } from '../../Context/Context'

export default function Cart() {
  const {cartItem}=useContext(CartContext)

  return (
  <>
    <div className='CarPageimg'>
    </div>
    <div className='container mx-auto '>
      <div className='flex flex-col gap-6 mt-16 ml-5 mb-10'>
        <h1 className='main-text opacity-70 Cart-mainText relative '>My Cart</h1>
        {!cartItem.length && <div className='h-96 flex justify-center items-center'><h1 className='main-text opacity-65'>Your Cart Is Empty</h1></div>}
        {cartItem.length>0 &&
        <div className='grid grid-cols-1 gap-12  mt-20 '>
        <div className='grid grid-cols-5 md:grid-cols-7 gap-y-16 gap-x-4 justify-center items-center'>
          <h1 className='col-start-1 col-end-2 md:col-start-2 md:col-end-4'>Product</h1>
          <h1 className='col-start-2 md:col-start-4'>Price</h1>
          <h1 className='col-start-3 md:col-start-5'>Color</h1>
          <h1 className='col-start-4 md:col-start-6'>Quantity</h1>
          <h1 className=' col-start-5 md:col-start-7'>Delete</h1>
        </div>
        <div className='grid grid-cols-5 md:grid-cols-7 gap-y-16 gap-x-4 justify-center items-center'>
        {
         cartItem.map((e,index)=>{
          return(
            <Carscard src={e.src} cartype={e.cartype} price={e.totalPrice} id={e._id} Quan={e.quantity} key={index}/>
          )   
        })
        }
        </div>
       </div>
       }
      </div>
    </div>
  </>
  )
}