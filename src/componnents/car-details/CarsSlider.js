import {motion, spring} from 'framer-motion'

export default function CarsSlider({images}) {
 
  return(
    <>
      {images.map((e,index)=>{
        return(
          <motion.div key={index}
          initial={{scale:1}} 
          whileHover={{scale:1.080}}
          transition={spring}
          >
            <img  src={e} alt='' className='max-w-full rounded-2xl cursor-pointer'/>
          </motion.div>
        )
      })}
      </>
    )
}
