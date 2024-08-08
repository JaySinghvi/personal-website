import React from 'react';
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';
import space from "../pg-imgs/aviation/space.png"
import fly from "../pg-imgs/aviation/flight.png"

const Finance = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Aviation</motion.h2>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={space} alt="spaceimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72'/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Spacecraft-Simulations-Using-Python"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Advanced Spacecraft and Rocket Simulation in Python</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed four different spacecraft simulations using Python, inspired by the Kerbal Space Program game.</li>
                <li className='mb-2'>Demonstrated the difference between projectile motion on a flat Earth surface and in Newtonian gravity through detailed simulations.</li>
                <li className='mb-2'>Simulated a two-stage rocket around a planet called Kerbin, representing Earth in the game.</li>
                <li className='mb-2'>Showcased the effects of aerodynamics on the projectile of the two-stage rocket, illustrating significant changes in altitude and speed.</li>
                <li className='mb-2'>Utilized advanced Python libraries for numerical computations and data visualization to enhance the accuracy and presentation of the simulations.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Simulation Development</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Mathematical Modeling </span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Rocket Dynamics</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Aerodymanic Analysis</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className=' pt-10 flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={fly} alt="flyimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72'/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Flight-Price-Prediction"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Predictive Modeling for Flight Prices Using Machine Learning</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a flight price prediction model using machine learning with a clean dataset from Kaggle.</li>
                <li className='mb-2'>Analyzed and preprocessed the data, then trained and tested the model using Random Forest Regressor.</li>
                <li className='mb-2'>Plotted actual vs. predicted prices, observing minimal variance, indicating a promising model performance.</li>
                <li className='mb-2'>Performed automated hyperparameter tuning using randomized search with cross-validation to enhance model efficiency.</li>
                <li className='mb-2'>Noted that further comprehensive randomized search was required as plotting actual vs. predicted prices showed minimal improvement.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Random Forest Regressor</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Cross-Validation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Randomized Search</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Hyperparameter Tuning</span>
              </div>            
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Finance;