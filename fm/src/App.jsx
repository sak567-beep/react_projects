import React from 'react'
import { motion } from "motion/react"

const App = () => {
  return (
    <div className='main'>
      <motion.div animate={{
        rotate:360,
        transition:{
          duration:3
        }
      }}
       className='square'>rotate</motion.div>
        <motion.div initial={{
scale:0
        }}
        animate={{
        scale:1,
        transition:{
duration:.5
        }
      }}
       className='circle'>scale</motion.div>
       <motion.div whileHover={{scale:1.1}} whileTap={{scale:.95}}
       className='square'>whilehover while tap</motion.div>
      < motion.div   initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(0, 0, 255)", opacity: 1 }}
      
      className='circle'></motion.div>
    </div>
  )
}

export default App
