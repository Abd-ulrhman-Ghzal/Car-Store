import React, { useContext, useRef, useState } from 'react';
import seat from '../../images/seat.png';
import whell from '../../images/wheel.png';
import speedrpm from '../../images/speadRpm.png';
import * as Ioicons from 'react-icons/io';
import { CartContext } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { motion, spring, useInView } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export default function Topcaticgory() {
  const { cartItem, setCartItem, Cars,filterdCarName,current,setCurrent} = useContext(CartContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const items=6;
  const NbPage=Math.ceil(filterdCarName.length / items)

  const startIndex=(current-1) * items
  const endIndex=startIndex + items

  const DataPerPage=filterdCarName.slice(startIndex,endIndex)

  const addcart = async (id) => {
    const existItem = cartItem.find((item) => item.id === id);
    if (existItem) {
      const updatedCartItems = cartItem.map((item) =>
        item.id === id
          ? {
              ...item,
              color:{
                         "Black":'#000000',
                         "White":'#ffffff',
                        'LightBlue':'#6799D5'
              },
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
              SelectedColor: 'Black',
            }
          : item
      );
      setCartItem(updatedCartItems);
    } else {
      const data = Cars.find((car) => car.id === id);
      const updatedCartItems = [{ ...data, quantity: 1, totalPrice: data.price, SelectedColor: 'Black' }, ...cartItem];
      setCartItem(updatedCartItems);

    }
    notify();
  };


  const notify = () => {
    toast.success('Item Added To Cart', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  

  return (
    <motion.div
      ref={ref}
      className="container mx-auto mt-32 mb-20 "
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <ToastContainer />
      <div className="flex flex-col gap-16 ">
        <h1 className="text-center main-text">Top Categorise</h1>
        <div className="md:grid flex flex-col items-center md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32 ">
          {DataPerPage.map((el,index) => {
            return (
              <div className="flex flex-col justify-between gap-5 items-center Car-card duration-300" key={el.id}>
                <motion.div 
                className='flex-grow flex justify-center items-center rounded-3xl cursor-pointer' 
                style={{backgroundColor:`rgba(0, 0, 0, 0.100)`}}
                initial={{scale:1}}
                whileHover={{scale:1.050}}
                transition={spring}
                >
                  <img src={el.image} alt="" className="h-full w-full rounded-3xl aspect-auto object-contain" />
                </motion.div>
                <h2 className="text-center main-text">
                  {el.make} <br /> {el.model}
                </h2>
                <div className="flex lg:gap-16 gap-7">
                  <div className="flex items-center justify-center gap-3 flex-col">
                    <div>
                      <img src={seat} alt="" className="max-w-full" />
                    </div>
                    <p className='text-center'>{el.owners} Seator</p>
                  </div>
                  <div className="flex items-center justify-center gap-3 flex-col">
                    <div>
                      <img src={whell} alt="" className="max-w-full" />
                    </div>
                    <p className='text-center'>{el.transmission}</p>
                  </div>
                  <div className="flex items-center justify-center gap-3 flex-col">
                    <div>
                      <img src={speedrpm} alt="" className="max-w-full" />
                    </div>
                    <p className='text-center'>{el.horsepower} KM/H</p>
                  </div>
                </div>
                <h3 className="text-center main-text">Starting at {el.price}$/Day</h3>
                <div className="flex items-center justify-around w-full">
                  <div className="flex items-center gap-2 sec-btn px-5 py-3">
                    <Link to={`/Car-Store/Car-Detail/${el.make} ${el.model}`}>Details</Link>
                    <Ioicons.IoMdArrowDropright />
                  </div>
                  <div>
                    <button className="rounded-3xl border p-3 main-btn" onClick={() => addcart(el.id)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!filterdCarName.length  &&
          <h1 className='flex justify-center items-center text-3xl EC w-full text-center' >
            No Items Found
          </h1>
          }
          <div className='flex gap-12 items-center justify-center'>
            <FaArrowLeft className='cursor-pointer ' onClick={()=>current === 1 ? null:setCurrent(current=>current - 1)}/>
            {
              <h1 className='px-4 py-2 rounded-md border'>{current}</h1>
            }
            <FaArrowRight className='cursor-pointer' onClick={()=>current=== NbPage?null:setCurrent(current=>current + 1)}/>
          </div>
      </div>
    </motion.div>
  );
}
