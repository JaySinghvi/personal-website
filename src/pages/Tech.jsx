import React from 'react';
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion';
import data from '../pg-imgs/tech/data.png';
import house from "../pg-imgs/tech/house.png"

const Technology = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Technology</motion.h2>
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
                <a href="https://github.com/JaySinghvi/Data-Roles-Salary-Analysis"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Trends in Data Roles Salaries</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Conducted data scraping from the Glassdoor website using Selenium, exporting the dataset to CSV for further analysis.</li>
                <li className='mb-2'>Executed data preprocessing to remove unnecessary features and refine the dataset to align with analytical objectives.</li>
                <li className='mb-2'>Leveraged Power BI to develop an in-depth report visualizing salary distributions for various data roles based on experience, company size, and year.</li>
                <li className='mb-2'>Analyzed and identified hiring trends, revealing that medium-sized companies are increasingly hiring for data-related roles requiring moderate experience.</li>
                <li className='mb-2'>Observed a significant decrease in the total sum of salaries in 2024 compared to 2023, providing insights into shifting industry compensation trends.</li>
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
                <a href="https://github.com/JaySinghvi/Predictive-Modeling-for-Housing-Prices-Using-Decision-Trees-and-Ensemble-Methods"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Predictive Modeling for Housing Prices</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Engineered predictive models using single decision tree and ensemble methods (Random Forest, Boosting) to forecast housing prices in Boston, MA.</li>
                <li className='mb-2'>Conducted comprehensive data preprocessing, categorization, and partitioning, creating robust training and testing datasets using caret library.</li>
                <li className='mb-2'>Developed and evaluated regression models with rpart, randomForest, and xgboost, achieving enhanced performance metrics with Random Forest (RMSE: 3.13, MAE: 2.14).</li>
                <li className='mb-2'>Analyzed variable importance to identify key predictors, employing advanced statistical techniques for model optimization and accuracy improvement.</li>
                <li className='mb-2'>Summarized and analyzed the comparative performance of single and ensemble tree models, demonstrating the superiority of Random Forests in reducing prediction error.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R Programming</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ensemble Methods</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Decision Tree</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Random Forest</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Model Evaluation</span>
              </div>            
            </motion.div>
          </div>
        </div>

    </div>
  );
};

export default Technology;