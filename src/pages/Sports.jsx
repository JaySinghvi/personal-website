import React from 'react';
import { motion } from 'framer-motion';
import cric from "../pg-imgs/sports/cric.png"
import mlb from "../pg-imgs/sports/mlb.png"

const Sports = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Sports</motion.h2>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={cric} alt="cricimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Cricket-Data-Analytics-Project"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Performance Analysis of T20 World Cup Players</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Utilized Beautiful Soup and Bright Data for comprehensive web scraping of T20 Men's World Cup player data from ESPNCricInfo.</li>
                <li className='mb-2'>Cleaned and transformed JSON data into structured CSV files, ensuring consistency and accuracy in match summaries and player statistics.</li>
                <li className='mb-2'>Enhanced dataset usability by creating new features such as "out/not_out" status for batsmen and cleaning player names with regular expressions.</li>
                <li className='mb-2'>Applied advanced statistical criteria to identify top batsmen and bowlers based on key performance metrics like strike rate, batting average, and wicket percentage.</li>
                <li className='mb-2'>Designed interactive Power BI dashboards to visualize player performances, providing stakeholders with actionable insights through intuitive reports.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Web Scraping (Beautiful Soup)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Power BI</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Regular Expressions</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Feature Engineering</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className=' pt-10 flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={mlb} alt="mlbimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72'/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Predicting-MLB-Salaries-Using-Decision-Trees"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Predicting MLB Salaries Using Decision Trees</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed and evaluated both regression and classification decision tree models to predict player salaries using R's rpart library.</li>
                <li className='mb-2'>Processed major league baseball player statistics, including handling missing values, converting categorical variables to factors, and splitting datasets into training and testing subsets.</li>
                <li className='mb-2'>Trained regression trees to predict salaries using player statistics, and utilized rpart.plot for visualizing decision trees, enabling easy interpretation of the tree structures and feature importance.</li>
                <li className='mb-2'>Evaluated model performance using Root Mean Squared Error (RMSE) and Mean Absolute Error (MAE), and implemented tree pruning to mitigate overfitting, comparing the performance of pruned and unpruned models.</li>
                <li className='mb-2'>Analyzed feature importance by identifying key predictors such as CRBI, CRuns, and Walks, and extracted decision rules from the tree models to provide insights into the most influential variables in predicting outcomes.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Decision Tree Modeling</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Feature Analysis</span>
              </div>            
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Sports;