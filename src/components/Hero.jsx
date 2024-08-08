import React from 'react'
import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/profile.png";
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        whileInView={{x:0, opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:0.5, delay:0}}
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-2xl'>
                        Jay Singhvi
                    </motion.h1>
                    <motion.span 
                        whileInView={{x:0, opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:0.5, delay:0.5}}
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent pb-2'>
                        Upcoming Data Scientist
                    </motion.span>
                    <motion.p
                        whileInView={{x:0, opacity:1}}
                        initial={{x:-100, opacity:0}}
                        transition={{duration:0.5, delay:1}}
                        className='my-2 max-w-xl py-6 text-2xl'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1, delay:1.2}} className='rounded-3xl shadow-2xl shadow-purple-950' src={profilePic} alt="profile_pic"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
