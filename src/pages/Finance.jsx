import React from 'react';
import cr from "../pg-imgs/finance/credit-risk.png";
import ind from "../pg-imgs/finance/indices.png";
import st from "../pg-imgs/finance/stock.png"
import { motion } from 'framer-motion';

const Finance = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Data Science in Finance</motion.h2>
        <div className='flex justify-center'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={cr} alt="crimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72'/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Analyzing-Credit-Risk-Using-Regression-Models"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Analyzing Credit Risk Using Regression Models</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Collaborated with a peer to analyze the Kaggle Credit Risk Dataset using R, evaluating key predictors of loan defaults.</li>
                <li className='mb-2'>Developed logistic regression and random forest models to forecast loan applicants likelihood of default and identify significant predictors</li>
                <li className='mb-2'>Conducted a comprehensive analysis of debtors financial data and loan statuses to determine critical factors for creditor decision-making.</li>
                <li className='mb-2'>Identified home ownership, reason for taking the loan, loan amount, interest rate, loan percent income, and credit history length as the most significant predictors of loan defaults.</li>
                <li className='mb-2'>Discovered that having a prior default in ones credit history is a very weak predictor, with a p-value exceeding 0.8</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Logistic Regression</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Modeling</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Modeling</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Risk Management</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className='flex justify-center pt-10'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={ind} alt="indimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Financial-Analytics"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Exploring Correlations in Major Financial Indices</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Utilized a comprehensive dataset from Kaggle, encompassing prices and volumes of BTC, NASDAQ, LSE, and NYSE from 2018 to 2023.</li>
                <li className='mb-2'>Conducted data preprocessing to eliminate extraneous data and scaled the dataset to facilitate more effective decision-making, subsequently exporting the refined data as a CSV file.</li>
                <li className='mb-2'>Employed auto-EDA tools like Sweetviz to generate detailed, high-density visualizations, producing an HTML file that thoroughly analyzed each variable.</li>
                <li className='mb-2'>Applied heatmap analysis to examine variable correlations, uncovering a surprising high correlation between BTC and NASDAQ with a score of 0.9, and a significant correlation between LSE and NASDAQ.</li>
                <li className='mb-2'>Delivered insightful financial analytics, aiding in the understanding of market dynamics and correlations across major financial indices.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>  
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Auto-EDA (Sweetviz Report)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Correlation Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Analytics</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
              </div>            
            </motion.div>
          </div>
        </div>
        <div className='flex justify-center pt-10'>
          <div className='mb-8 flex lg:justify-center'>
            <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:1}} className='w-full lg:w-1/4 flex justify-center items-center'>
              <img src={st} alt="stimg" className='mb-8 rounded-2xl shadow-2xl shadow-purple-950 mr-20 w-full h-72 '/>
            </motion.div>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-4 lg:w-3/4'>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }} 
                transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <a href="https://github.com/JaySinghvi/Stock-Market-Prediction"><h6 className='mb-2 fon-semibold text-3xl pb-3'>Stock Market Prediction</h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Executed data preprocessing techniques to address missing values and assembled a refined data frame with pertinent features for stock market prediction.</li>
                <li className='mb-2'>Leveraged Sweetviz, an advanced auto-EDA tool, to generate a comprehensive HTML report detailing exploratory data analysis (EDA) insights.</li>
                <li className='mb-2'>Engineered additional features based on EDA findings, including a predictive variable for next-day stock prices and a boolean target field to indicate whether the market opened higher than the previous day.</li>
                <li className='mb-2'>Employed a Random Forest Classifier to discern complex, non-linear patterns in the stock market data, achieving a high degree of precision and accuracy in predictive modeling.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>  
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Auto-EDA (Sweetviz Report)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Predictive Modeling</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Feature Engineering</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Random Forest</span>
              </div>            
            </motion.div>
          </div>
        </div>



    </div>
  );
};

export default Finance;