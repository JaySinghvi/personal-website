import React, { useEffect } from 'react'
import fin from "../assets/projects/finance.png"
import enter from "../assets/projects/entertainment.png"
import avia from "../assets/projects/aviation.png"
import news from "../assets/projects/news.png"
import health from "../assets/projects/healthcare.png"
import tech from "../assets/projects/tech.png"
import energy from "../assets/projects/energy.png"
import sports from "../assets/projects/sports.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Projects = () => {

  return (    
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>A Multisector Approach: Data Science Across All Sectors</motion.h2>
        <div className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/finance'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={fin} alt="finimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/entertainment'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={enter} alt="enterimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/tech'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={tech} alt="texhimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/healthcare'>
                    <   motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={health} alt="healthimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/aviation'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={avia} alt="aviaimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/news'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={news} alt="newsimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/energy'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={energy} alt="energyimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <Link to='/sports'>
                        <motion.button whileHover={{ scale: 1.1}} ><img className='h-80 rounded-2xl shadow-2xl shadow-purple-950' src={sports} alt="sportsimg" /></motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Projects