import React from 'react';
import { motion } from 'framer-motion';
import pow from "../pg-imgs/energy/power.png"
import oil from "../pg-imgs/energy/oil.png"

const Energy = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Energy</motion.h2>
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
                <a href="https://github.com/JaySinghvi/Energy-Consumption"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Forecasting U.S. Power Demand with XGBoost and Time Series Analysis</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Conducted time series forecasting on energy consumption in the United States using XGBoost for parallel tree boosting.</li>
                <li className='mb-2'>Utilized data from PJM Interconnection LLC, a regional transmission organization, available on Kaggle, consisting of hourly power consumption data in megawatts.</li>
                <li className='mb-2'>Preprocessed the data to remove outliers and ensure data quality.</li>
                <li className='mb-2'>Trained the model using XGB Regressor for accurate time series forecasting, incorporating cross-validation techniques.</li>
                <li className='mb-2'>Predicted future energy consumption patterns, demonstrating a high level of accuracy and consistency with historical data trends.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Time Series Forecasting</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Cross-Validation</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>XGBoost Regressor</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Preprocessing</span>
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
                <a href="https://github.com/JaySinghvi/Oil-Production-Forecasting"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Optimized Linear Regression for Oil Production Forecasting</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Preprocessed time-series data from the Volve field, addressing missing values and feature selection for model readiness.</li>
                <li className='mb-2'>Employed data visualization to identify multicollinearity, enhancing feature selection and model robustness.</li>
                <li className='mb-2'>Excluded highly correlated features to prevent data leakage and improve predictive accuracy.</li>
                <li className='mb-2'>Built a linear regression model for oil production forecasting, utilizing data scaling and train-test splits.</li>
                <li className='mb-2'>Evaluated model performance with relevant metrics to ensure reliability for real-world application.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Exploratory Data Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Time-Series Analysis</span>
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