import React from 'react'
import img1 from '../../images/Rectangle 46.png'
import img2 from '../../images/Rectangle 47.png'
import img3 from '../../images/Rectangle 48.png'
import img4 from '../../images/Rectangle 49.png'
export default function CarsSlider() {
  const imges=[img1,img2,img3,img4]  
  
  return(
    <>
      {imges.map(e=>{
        return(
          <div>
            <img src={e} alt='' className='max-w-full'/>
          </div>
        )
      })}
      </>
    )
}
