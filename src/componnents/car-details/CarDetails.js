import React, { useContext, useState } from 'react';
import * as IOicons from 'react-icons/io';
import CarsSlider from './CarsSlider';
import * as MDicon from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import useEmblaCarousel from 'embla-carousel-react'


export default function CarDetails({ id, src, Cartype, Price, EnginCapactiy,ImageSlider }) {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem, Cars} = useContext(CartContext);
  const [activeColor, setActiveColor] = useState('Black');
  const [emblaRef] = useEmblaCarousel()


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

  const handleAddQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  

  const DetailAddCart = (id, color) => {
    
    const existingOrder = cartItem.find(item => item.id === id && item.SelectedColor===color);


    if (existingOrder) {
      // If the same car with the same color exists, update quantity
      setCartItem(oldData=>oldData.map(item=>{
        return item.id === id && item.SelectedColor===color ? { ...item, quantity: item.quantity + quantity,totalPrice:item.price * (item.quantity + quantity)} : item
       }))

    } else {
      // If the car with the same color doesn't exist, add a new order
      const data = Cars.find(car => car.id === id);
      const newOrder = {
        ...data,
        quantity: quantity,
        SelectedColor: color,
        totalPrice: totalPrice,
      };
      setCartItem(oldData => [newOrder, ...oldData]);
    }
    notify();
  };
  

  const totalPrice = Price * quantity;


  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  return (
    <>
    <ToastContainer/>
      <div className='CarDetailimg '>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-12 items-center lg:items-start mb-7 h-svh'>
          <div className='flex flex-col col-end-3 col-start-1 mx-5 h-full justify-between'>
            <div className='flex flex-col gap-4 mx-9 md:mx-0'>
              <div className='flex items-center gap-2'>
                <p className='opacity-35'>Type</p>
                <IOicons.IoIosArrowForward />
                <p className='opacity-35'>Car</p>
                <IOicons.IoIosArrowForward />
                <p className='opacity-70'>Details</p>
              </div>
              <h1 className='main-text'>{Cartype}</h1>
              <p className='EC text-3xl'>{EnginCapactiy} CC</p>
            </div>
            <div className='flex justify-center items-center '>
              
              <img src={src} alt='' className='max-w-full rounded-3xl' />
            </div>

            <div className=' gap-5 justify-center items-center md:self-start my-5 hidden lg:flex w-full'>
              <div className='flex gap-5 col-start-2 col-end-6'>
              <CarsSlider images={ImageSlider} />
              </div>
            </div>

            <div className="embla lg:hidden  flex rounded-xl mt-7 cursor-grab" ref={emblaRef}>
               <div className="embla__container gap-3">
               {ImageSlider.map((e,index)=>{
                return(
                    <img src={e} key={index} alt='' className='max-w-full aspect-video object-cover rounded-xl embla__slide' />
                )
               })}
               </div>
            </div>

          </div>
          <div className='flex flex-col gap-6 mx-5 h-full justify-around pb-10 pt-10'>
            <div>
              <h1 className='main-text'>Details</h1>
            </div>
            <div className='flex flex-col gap-20 '>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl'>Rating And Review</h1>
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-1 '>
                    <MDicon.MdStarOutline className='arrow text-3xl' />
                    <MDicon.MdStarOutline className='arrow text-3xl' />
                    <MDicon.MdStarOutline className='arrow text-3xl' />
                    <MDicon.MdStarOutline className='arrow text-3xl' />
                    <MDicon.MdStarOutline className='arrow text-3xl' />
                  </div>
                  <p className='opacity-70 text-2xl'>4.5</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='main-text'>Description</h1>
                <p className='opacity-50'>The culmination of comfort, luxury, and powerful living is embodied in the First-Ever BMWX7 - the biggest BMW ever built.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='main-text'>Colors</h1>

                <div className='flex justify-around lg:justify-start lg:gap-8'>
                  <div className={`c drop-shadow ${activeColor === 'Black' ? 'active-circle' : ''}`} onClick={() => { handleColorClick('Black') }} style={{ backgroundColor: 'black' }}></div>
                  <div className={`c drop-shadow ${activeColor === 'White' ? 'active-circle' : ''}`} onClick={() => { handleColorClick('White') }} style={{ backgroundColor: 'white' }} ></div>
                  <div className={`c drop-shadow ${activeColor === 'LightBlue' ? 'active-circle' : ''}`} onClick={() => { handleColorClick('LightBlue') }} style={{ backgroundColor: 'lightblue' }}></div>
                </div>

              </div>
              <div className='flex justify-center gap-10 items-center flex-wrap'>
                <div className='flex gap-3 items-center'>
                  <button className='min' onClick={handleMinusQuantity}>-</button>
                  <p>{quantity}</p>
                  <button className='max' onClick={handleAddQuantity}>+</button>
                </div>
                <div className='flex gap-3 items-center'>
                  <p className='text-2xl EC'>Price:</p>
                  <p className='text-2xl'>{totalPrice} $</p>
                </div>
              </div>
            </div>
            <div className='flex justify-around flex-wrap lg:flex-nowrap gap-6 xl:gap-20'>
              <button className='btn details-btn-sec flex justify-center items-center w-full' onClick={() => { DetailAddCart(id, activeColor) }}>Add To Cart</button>
              <Link to={`/Car-Store/Car-Detail/${Cartype}/Order-Confirmation`} className='btn details-btn-main flex justify-center items-center' >Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
