import React from 'react'
import Carcard from './Carcard'
import audi from '../../images/audi.png'
import bmw from '../../images/bmw.png'
import volvo from '../../images/stition.png'
import bmw2 from '../../images/bmw 2.png'


export default function Topcaticgory() {
  

  return (
    <div className='container mx-auto mt-32 mb-20 '>
      <div className='flex flex-col'>
        <h1 className='text-center main-text'>Top Categorise</h1>
        <div className='flex mt-10 xl:justify-around items-center flex-wrap justify-center gap-16'>
          <Carcard src={audi} cartype={'AUDI'} />
          <Carcard src={bmw} cartype={'BMW M5'}/>
          <Carcard src={volvo} cartype={'VOLVO'}/>
          <Carcard src={bmw2} cartype={'BMW'}/>
        </div>
      </div>
    </div>
  )
}
