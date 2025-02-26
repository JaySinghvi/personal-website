import React from 'react';
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';
import data from '../pg-imgs/tech/data.png';
import house from "../pg-imgs/tech/house.png"

const Technology = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={data} alt="dataimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Salary-and-Hiring-Trends-Analysis"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Salary & Hiring Trends Analysis</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed an automated <b>data pipeline</b> by scraping Glassdoor job listings with <b>Selenium</b>, extracting salary and hiring trend data for data-driven roles.</li>
                <li className='mb-2'>Preprocessed and refined the dataset, eliminating irrelevant features to enhance analytical clarity and accuracy.</li>
                <li className='mb-2'>Leveraged <b>Power BI</b> to visualize salary distributions for various data roles based on experience, company size, and year, providing a clear overview of compensation structures.</li>
                <li className='mb-2'>Identified key hiring trends, revealing increased demand for mid-experience data professionals in medium-sized companies and a notable decline in total salaries in 2024 compared to 2023.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Web Scraping (Selenium)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Preprocessing</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Power BI</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Trend Analysis</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className=' pt-10 flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={house} alt="houseimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Enhancing-Housing-Price-Predictions-with-Ensemble-Learning"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Enhancing Housing Price Predictions with Ensemble Learning</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Built predictive models using <b>Decision Trees</b>, <b>Random Forest</b>, and <b>XGBoosting</b> to forecast housing prices in Boston, with extensive data preprocessing, categorization, and partitioning to ensure model reliability.</li>
                <li className='mb-2'>Developed and optimized regression models, achieving a low <b>RMSE of 3.13</b> and <b>MAE of 2.14</b> with Random Forest.</li>
                <li className='mb-2'>Identified key predictors through feature importance analysis, applying advanced statistical techniques to refine model accuracy.</li>
                <li className='mb-2'>Compared <b>single vs. ensemble models</b>, demonstrating that Random Forest outperformed traditional Decision Trees, minimizing prediction error and improving accuracy.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ensemble Methods</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Predictive Modeling</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Feature Engineering</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Model Evaluation</span>
              </div>            
            </motion.div>
          </div>
        </div>

    </div>
  );
};

export default Technology;