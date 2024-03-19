import React, { useContext } from 'react'
import seat from '../../images/seat.png'
import whell from '../../images/wheel.png'
import speedrpm from '../../images/speadRpm.png'
import * as Ioicons from "react-icons/io";
import audi from '../../images/audi.png'
import bmw from '../../images/bmw.png'
import volvo from '../../images/stition.png'
import bmw2 from '../../images/bmw 2.png'
import { CartContext } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Topcaticgory() {
  const {cartItem,setCartItem}=useContext(CartContext)
  const Cars=[
    {
    "_id":'1',
    "src":audi,
    "cartype":'AUDI',
    "price":599,
  },{
    "_id":'2',
    "src":bmw,
    "cartype":'BMW M5',
    "price":699,

  },{
    "_id":'3',
    "src":volvo,
    "cartype":'Volvo',
    "price":399,

  },{
    "_id":'4',
    "src":bmw2,
    "cartype":'BMW',
    "price":999
  }
]
const addcart=(id)=>{
  const existItem=cartItem.find(item=>item._id === id)
  if(existItem){
    setCartItem(oldData=>oldData.map(item=>{
     return item._id === id ? { ...item, quantity: item.quantity + 1,totalPrice:item.price * (item.quantity + 1) } : item
    }))
  }else{
    const data=Cars.find(car=>{
      return car._id === id
    })
    setCartItem(oldData => [{ ...data, quantity: 1 ,totalPrice: data.price}, ...oldData]);
  }
  
}
const notify = () => 
{
  toast.success('Item Added To Cart', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

const NotificationAndAddCart=(id)=>{
  notify();
  addcart(id)
}


  return (
    <div className='container mx-auto mt-32 mb-20 '>
      <ToastContainer/>
      <div className='flex flex-col'>
        <h1 className='text-center main-text'>Top Categorise</h1>
        <div className='flex mt-10 xl:justify-around items-center flex-wrap justify-center gap-16'>
          {
            Cars.map(el=>{
              return(
              <div className='flex flex-col gap-7 items-center Car-card' key={el._id}>
                <div>
                  <img src={el.src} alt='' className='max-w-full'/>
                </div>
                <h2 className='text-center main-text'>{el.cartype}</h2>
                <div className='flex lg:gap-16 gap-7'>
                  <div className='flex items-center justify-center gap-3 flex-wrap'>
                    <div>
                     <img src={seat} alt='' className='max-w-full'/>
                    </div>
                    <p>4 Seator</p>
                  </div>
                  <div className='flex items-center justify-center gap-3 flex-wrap'>
                    <div>
                     <img src={whell} alt='' className='max-w-full'/>
                    </div>
                    <p>Manual</p>
                  </div>
                  <div className='flex items-center justify-center gap-3 flex-wrap'>
                    <div>
                     <img src={speedrpm} alt='' className='max-w-full'/>
                    </div>
                    <p>5KM/1-lt</p>
                  </div>
                </div>
                <h3 className='text-center main-text'>Starting at {el.price}$/Day</h3>
                <div className='flex items-center justify-around w-full'>
                 <div className='flex items-center gap-2 sec-btn px-5 py-3'>
                   <button className=''>Details</button>
                   <Ioicons.IoMdArrowDropright/>
                 </div>
                 <div>
                 <button className='rounded-3xl border p-3 main-btn' onClick={()=>NotificationAndAddCart(el._id)}>Buy Now</button>
                 </div>
                </div>
             </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
