import React from 'react'
import {CONTACT} from "../constants"
import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-10 text-center text-2xl'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.a whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} href="mailto:jay.singhvi04@gmail.com" className='border-b text-2xl'>{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact
