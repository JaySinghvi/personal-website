import React from 'react';
import { motion } from 'framer-motion';
import pow from "../pg-imgs/energy/power.png"
import oil from "../pg-imgs/energy/oil.png"

const Energy = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={pow} alt="powimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Forecasting-Energy-Consumption-with-XGBoost"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Forecasting Energy Consumption with XGBoost</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Built an <b>XGBoost-powered</b> time series model to predict U.S. energy consumption with precision.</li>
                <li className='mb-2'>Processed hourly power consumption data from <b>PJM Interconnection LLC</b>, ensuring comprehensive coverage of regional energy trends.</li>
                <li className='mb-2'>Applied rigorous <b>data preprocessing</b> and <b>outlier removal</b>, followed by <b>cross-validation</b> to refine model accuracy.</li>
                <li className='mb-2'>Generated reliable forecasts consistent with historical data, aiding in <b>energy planning</b> and decision-making.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Time Series Forecasting</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Cross-Validation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>XGBoost Regressor</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Energy Data Analysis</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className=' pt-10 flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={oil} alt="oilimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Oil-Production-Forecasting-with-Linear-Regression"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Oil Production Forecasting with Linear Regression</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Refined <b>time-series</b> data from the Volve field by handling missing values and optimizing feature selection.</li>
                <li className='mb-2'>Visualized <b>correlations</b>, excluding highly correlated features to improve model stability and prevent data leakage.</li>
                <li className='mb-2'>Built a <b>linear regression</b> model for oil production forecasting, applying data scaling and <b>train-test</b> splits to ensure high accuracy and real-world applicability.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Time-Series Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Multicollinearity Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Linear Regression</span>
              </div>            
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Energy;