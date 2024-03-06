import React from 'react'
import logo from '../../images/Logo.png'
import * as FAicons from 'react-icons/fa6'

export default function Footer() {
    const menutaps=['Home','Car Catalogue','Services']
    const FItaps=['Terms & Conditions','Privicy Policy']
    const ContactUs=['647P+4G5,Seif Al-Doleh, Aleppo, Syria','+96323456','tagred@gmail.com']

  return (
    <div className='w-full bg-slate-200 px-10 py-14 '>
      <div className='flex justify-between items-center md:items-start flex-col md:flex-row lg:gap-44 gap-10'>
        <div className='flex flex-col items-center lg:items-start gap-6 scale-75 lg:scale-100'>
          <img src={logo} alt='' className='max-w-full'/>
          <p className='footer-p'>CAR COMPANY</p>
        </div>
        <div className='flex lg:justify-around flex-1 Footer-div-ol flex-wrap lg:flex-nowrap justify-between gap-10'>
           <ol className='flex flex-col gap-6 flex-1'>
            <li>
                Menu
            </li>
            <ul className='flex flex-col gap-4'>
                    {menutaps.map((e)=>{
                       return <li className='text-gray-600'>{e}</li>
                    })}
                </ul>
            </ol>
            <ol className='flex flex-col gap-6 flex-1'>
            <li>
                Further Information
            </li>
            <ul className='flex flex-col gap-4'>
                    {FItaps.map((e)=>{
                       return <li className='text-gray-600'>{e}</li>
                    })}
                </ul>
            </ol> 
            <ol className='flex flex-col gap-6 flex-1'>
            <li>
                Contact Us
            </li>
            <ul className='flex flex-col gap-4'>
                    {ContactUs.map((e)=>{
                       return <li className='text-gray-600'>{e}</li>
                    })}
                </ul>
            </ol>
            <ol className='flex flex-col gap-6 flex-1 '>
            <li>
                followUs
            </li>
            <ul className='flex gap-4 footer-icon'>
                    <li ><FAicons.FaFacebook/></li>
                    <li><FAicons.FaTwitter/></li>
                    <li><FAicons.FaInstagram/></li>
                </ul>
            </ol>
        </div>
      </div>
    </div>
  )
}
