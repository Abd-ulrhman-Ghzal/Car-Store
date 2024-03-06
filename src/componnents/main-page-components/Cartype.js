import car1 from '../../images/Rectangle 14.png'
import car2 from '../../images/ferarri.png'
import car3 from '../../images/bmw 3.png'
import car4 from '../../images/audi 2.png'
import * as Ioicons from "react-icons/io";
import Imageslider from './Imageslider'

export default function Cartype() {
  return (
    <div className='container mx-auto mt-8 mb-8 Car-card'>
     <div className='flex flex-col items-center gap-32'>
      <h1 className='text-center main-text'>Find by Car Type</h1>
      <div className=' flex flex-wrap items-center gap-7 xl:gap-28 2xl:gap-7 justify-center relative img-slider '>
        <Imageslider src={car1} cartype='VOLVO'/>
        <Imageslider src={car2} cartype='FERRARI'/>
        <Imageslider src={car3} cartype='BMW'/>
        <Imageslider src={car4} cartype='AUDI'/>
        <Ioicons.IoMdArrowDropleft className=' -left-8 p-2  icon hidden 2xl:block'/>
        <Ioicons.IoMdArrowDropright className=' -right-8 p-2  icon hidden 2xl:block'/>
      </div>
     </div>
    </div>
  )
}