import React, { useContext, useRef } from 'react'
import seat from '../../images/seat.png'
import whell from '../../images/wheel.png'
import speedrpm from '../../images/speadRpm.png'
import * as Ioicons from "react-icons/io";
import { CartContext } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import {motion, useInView} from 'framer-motion'

export default function Topcaticgory() {
  const {cartItem,setCartItem,Cars}=useContext(CartContext)
  const ref = useRef(null)
  const isInView = useInView(ref , {once:true})

  const addcart = async (id) => {
    const existItem = cartItem.find((item) => item._id === id);
  if (existItem) {
      const updatedCartItems = cartItem.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
              SelectedColor: 'Black',
            }
          : item
      );
       setCartItem(updatedCartItems);
    } else {
      const data = Cars.find((car) => car._id === id);
      const updatedCartItems = [{ ...data, quantity: 1, totalPrice: data.price, SelectedColor: 'Black' }, ...cartItem];
       setCartItem(updatedCartItems);
    }
    notify();
    
  };
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



  return (
    <motion.div ref={ref} className='container mx-auto mt-32 mb-20 ' 
    style={{
      transform: isInView ? "none" : "translateX(-200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
      <ToastContainer/>
      <div className='flex flex-col gap-16'>
        <h1 className='text-center main-text'>Top Categorise</h1>
        <div className='flex mt-10 xl:justify-around items-center flex-wrap justify-center gap-16'>
          {
            Cars.map(el=>{
             return el._id !== '1'  && 
                <div  
                className='flex flex-col gap-7 items-center Car-card' 
                key={el._id}
                
                >
                  <div className='rounded-full'>
                    <img src={el.src} alt='' className='max-w-full'/>
                  </div>
                  <h2 className='text-center main-text'>{el.cartype}</h2>
                  <div className='flex lg:gap-16 gap-7'>
                    <div className='flex items-center justify-center gap-3 flex-wrap'>
                      <div>
                       <img src={seat} alt='' className='max-w-full'/>
                      </div>
                      <p>{el.Seator} Seator</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 flex-wrap'>
                      <div>
                       <img src={whell} alt='' className='max-w-full'/>
                      </div>
                      <p>{el.gear}</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 flex-wrap'>
                      <div>
                       <img src={speedrpm} alt='' className='max-w-full'/>
                      </div>
                      <p>{el['M-Spead']}</p>
                    </div>
                  </div>
                  <h3 className='text-center main-text'>Starting at {el.price}$/Day</h3>
                  <div className='flex items-center justify-around w-full'>
                   <div className='flex items-center gap-2 sec-btn px-5 py-3'>
                     <Link to={`/Car-Store/Car-Detail/${el.cartype}`}>Details</Link>
                     <Ioicons.IoMdArrowDropright/>
                   </div>
                   <div>
                   <button className='rounded-3xl border p-3 main-btn' onClick={()=>{addcart(el._id)}}>Add To Cart</button>
                   </div>
                  </div>
               </div>
            }
            )
          }
        </div>
      </div>
    </motion.div>
  )
}
