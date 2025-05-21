import React from 'react'
import { motion } from 'framer-motion'


const Title = () => {
  return (
    <div>
        <motion.div className='text-3xl font-bold text-white text-center mb-2'
        animate={{scale: [1.2, 1, 1.2]}}
        transition={{duration: .8, ease:"easeInOut"}}>
            Task Manager
        </motion.div>
              <p className="text-md italic text-white-200 text-center mb-6">Create your personalised task</p>
    </div>
  )
}

export default Title