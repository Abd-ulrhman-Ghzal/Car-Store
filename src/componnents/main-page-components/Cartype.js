import Volvo from '../../images/Rectangle 14.png'
import ferarri from '../../images/ferarri.png'
import Bmw from '../../images/bmw 3.png'
import Audi from '../../images/audi 2.png'
import * as Ioicons from "react-icons/io";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Imageslider from './Imageslider';

export default function Cartype() {

  const images=[
    Volvo,ferarri,Bmw,Audi
  ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };


  return (
    <div className='container mx-auto mt-32 pt-16 mb-8 Car-card'>
     <div className='flex flex-col items-center gap-16 md:hidden mb-32'>
      <h1 className='text-center main-text'>Find by Car Type</h1>
      <div className=' flex flex-wrap items-center gap-7 xl:gap-28 2xl:gap-7 justify-center relative img-slider '>
      <motion.img

        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
        <Ioicons.IoMdArrowDropleft className=' -left-8 p-2  icon  2xl:block' onClick={prevImage}/>
        <Ioicons.IoMdArrowDropright className=' -right-8 p-2  icon  2xl:block' onClick={nextImage}/>
      </div>
     </div>
     <div className=' flex-col items-center hidden md:flex gap-32'>
      <h1 className='text-center main-text'>Find by Car Type</h1>
      <div className=' flex flex-wrap items-center gap-7 xl:gap-28 2xl:gap-7 justify-center relative img-slider '>
      <Imageslider src={Volvo} cartype={'Volvo'}/>
      <Imageslider src={ferarri} cartype={'ferarri'}/>
      <Imageslider src={Bmw} cartype={'Bmw'}/>
      <Imageslider src={Audi} cartype={'Audi'}/>
      
        <Ioicons.IoMdArrowDropleft className=' -left-8 p-2 hidden icon  2xl:block' onClick={prevImage}/>
        <Ioicons.IoMdArrowDropright className=' -right-8 p-2 hidden icon  2xl:block' onClick={nextImage}/>
      </div>
     </div>
    </div>
  )
}
