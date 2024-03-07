import React,{useState} from 'react'
import logo from '../images/Logo.png'
import cart from '../images/cart.png'
import * as Faicons from "react-icons/fa";
import * as Ioicons from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {

  

   const [showsidebar,Setshowsidebar]=useState(false)
   const navigation=useNavigate()
   

  return (
    <div className='md:container mx-auto pt-8 pb-3'>

      <div className={showsidebar?' sidebar active md:hidden':' sidebar md:hidden '}>
    
      <div className='flex items-center justify-between pt-5'>
        <div>
       <img src={logo} alt='' className='scale-50 max-w-full'/>
       </div>
       <div>
       <Ioicons.IoCloseSharp className='size-8 mr-3 cursor-pointer max-w-full' onClick={()=>{Setshowsidebar(!showsidebar)}}/>
      </div>
      </div>
      <div>
        
      </div>
      <div>
      <ul className='flex flex-col gap-10'>
            <li ><Link to='/Car-Store'> Home</Link></li>
            <li ><Link to='/Catalogue'> Catalogue</Link></li>
            <li ><Link to='/Contact-Us'> Contact Us</Link></li>
            <li ><Link to='/Help'> Help</Link></li>
        </ul>
      </div>
    
    </div>    
      

        <div className='flex md:justify-between justify-around items-center'>
          <div>
          <img src={logo} alt='' className=' max-w-full hidden md:block cursor-pointer' />
          <div className='block md:hidden header'>
          <Faicons.FaBars className='scale-125 cursor-pointer' onClick={()=>{Setshowsidebar(!showsidebar)}}/>
          </div>
          </div>
          <div>
          <ul className=' md:flex items-center justify-center flex-1 gap-5 lg:gap-10 hidden nav-taps'>
            <li ><Link to='/Car-Store'> Home</Link></li>
            <li ><Link to='/Catalogue'> Catalogue</Link></li>
            <li ><Link to='/Contact-Us'> Contact Us</Link></li>
            <li ><Link to='/Help'> Help</Link></li>
          </ul>
          </div>
          <div className='flex justify-center items-center gap-4' style={{color:'#976E72'}}>
           <div>
           <img src={cart} alt='' className='max-w-full scale-75 cursor-pointer' onClick={()=>navigation('/Car-Store/Cart-Order')}/>
           </div>
           <div>       
            <button className='rounded-3xl border p-3 scale-90 register' >Register</button>
           </div>
          </div>
        </div>
        
    </div>
  )
}
