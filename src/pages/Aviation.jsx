import React from 'react';
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';
import space from "../pg-imgs/aviation/space.png"
import fly from "../pg-imgs/aviation/flight.png"

const Finance = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
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
                <a href="https://github.com/JaySinghvi/Simulating-Spaceflight-Dynamics-with-Python"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Simulating Spaceflight Dynamics with Python</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed four spacecraft simulations in <b>Python</b>, inspired by <b>Kerbal Space Program</b>, to model realistic spaceflight dynamics.</li>
                <li className='mb-2'>Compared <b>projectile motion</b> on a flat Earth surface versus <b>Newtonian gravity</b>, highlighting key differences in trajectory and behavior.</li>
                <li className='mb-2'>Simulated a two-stage rocket orbiting Kerbin (Earth-equivalent) while analyzing aerodynamic effects on altitude and velocity.</li>
                <li className='mb-2'>Utilized advanced Python libraries for <b>numerical computations</b> and <b>data visualization</b>, ensuring accurate and insightful simulations.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Simulation Development</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Mathematical Modeling </span>
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
                <a href="https://github.com/JaySinghvi/Flight-Price-Prediction"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Flight Price Prediction Using Machine Learning</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Engineered a predictive model for flight price estimation, leveraging the <b>Random Forest Regressor</b> to enhance forecasting accuracy.</li>
                <li className='mb-2'>Conducted extensive <b>data preprocessing</b>, ensuring a clean and structured dataset for robust model training and testing.</li>
                <li className='mb-2'>Performed automated <b>hyperparameter tuning</b> using randomized search with <b>cross-validation</b> to enhance model efficiency.</li>
                <li className='mb-2'>Analyzed actual vs. predicted price distributions, demonstrating <b>minimal variance</b> and strong predictive capability while identifying areas for further optimization.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Predictive Modeling</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Hyperparameter Tuning & Cross-Validation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Model Evaluation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>EDA</span>
              </div>            
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Finance;