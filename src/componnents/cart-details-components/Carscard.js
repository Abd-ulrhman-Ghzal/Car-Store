import { useContext } from 'react'
import * as IOicon from 'react-icons/io'
import { CartContext } from '../../Context/Context'



export default function Carscard({src,cartype,price,id,Quan,color,EC}) {

  const {DetailRemoveCart}=useContext(CartContext)
  
  
  return (
    <>

    <div className='col-start-1 col-end-2  md:col-end-4 gap-y-16 gap-x-4'>
      <div className='grid grid-cols-3 gap-4  items-center'>
        <div>
        <img src={src} alt='' className='max-w-full md:col-end-2 hidden md:block'/>
        </div>
        <div className='flex flex-col gap-7 col-start-1 col-end-4  md:col-start-2'>
          <h1 className='main-text EC'>{cartype}</h1>
          <p className='flex flex-wrap'>Code: #{Math.floor(Math.random() * 100000) + 1}</p>
          <p>Engine Capactiy: {EC} CC</p>
        </div>
      </div>
    </div>
    <div className='md:col-start-4 col-start-2'>
        <p className='flex flex-col sm:flex-row'>{price}$</p>
    </div>
    <div className='md:col-start-5 col-start-3'>
        <p>{color}</p>
    </div>
    <div className='md:col-start-6 col-start-4'>
      <p>{Quan}</p>
    </div>
    <button className='md:col-start-7 col-start-5'>
    <IOicon.IoMdClose className='text-xl cursor-pointer' onClick={() => DetailRemoveCart(id, color)}/>
    </button>
    </>
  )
}
