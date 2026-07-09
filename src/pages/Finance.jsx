import React from 'react';
import cr from "../pg-imgs/finance/credit-risk.png";
import ind from "../pg-imgs/finance/indices.png";
import st from "../pg-imgs/finance/stock.png"
import { motion } from 'framer-motion';

const Finance = () => {
  return (
    < div className='border-b border-neutral-900 pb-4'>
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
                <a href="https://jsinghvi.shinyapps.io/lendguard/"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Lendguard AI</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Developed a credit-default risk model on 25,000+ loans using XGBoost with cost-based threshold tuning and class-imbalance handling, achieving 0.905 AUC and 82% recall (defaulter detection) while holding accuracy above 80%.</li>
                <li className='mb-2'>Deployed an end-to-end Shiny app pairing the model with a Claude API layer that turns per-applicant SHAP values into plain-English, compliance-aligned decision notices, owning the full pipeline from data cleaning to a live, hosted tool.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>R</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>XGBoost</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>LLM Integration (Claude API)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Model Deployment</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Data Analysis</span>
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
                <a href="https://github.com/JaySinghvi/Market-Correlation-Analysis-of-Global-Indices-Crypto"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Market Correlation Analysis of Global Indices & Crypto</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Analyzed a multi-market financial dataset (2018–2023), utilizing BTC, NASDAQ, LSE, and NYSE price and volume data to uncover key market trends.</li>
                <li className='mb-2'>Preprocessed and scaled data, <b>eliminating noise</b> for enhanced decision-making, and exported the refined dataset as a structured CSV file.</li>
                <li className='mb-2'>Automated <b>exploratory data analysis (EDA)</b> with <b>Sweetviz</b>, generating high-density visualizations in an <b>HTML report</b> for in-depth variable analysis.</li>
                <li className='mb-2'>Applied <b>heatmap analysis</b>, revealing a <b>0.9</b> correlation between BTC and NASDAQ and a strong link between LSE and NASDAQ, offering data-driven insights into market dynamics.</li>
              </ul>
              <div className='flex flex-wrap justify-center'>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>  
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Auto-EDA (Sweetviz)</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Heatmap Analysis</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Financial Analytics</span>
                <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Preprocessing</span>
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
                <a href="https://github.com/JaySinghvi/Stock-Market-Prediction"><h6 className='mb-2 fon-semibold text-3xl pb-3'><b>Stock Market Prediction</b></h6></a>
              </motion.button>
              <ul className='list-disc pl-5 lg:justify-center text-2xl'>
                <li className='mb-2'>Preprocessed stock market data, handling missing values, eliminating noise, and refining key features to enhance <b>prediction accuracy</b> and <b>model performance</b>.</li>
                <li className='mb-2'>Automated EDA with Sweetviz, generating a comprehensive HTML report with detailed statistical insights, enabling data-driven <b>feature engineering</b>.</li>
                <li className='mb-2'>Engineered predictive features, including a next-day stock price estimator and a boolean target for market trends, improving model interpretability and decision-making.</li>
                <li className='mb-2'>Implemented a high-precision <b>Random Forest Classifier</b>, leveraging <b>feature importance analysis</b> to capture complex non-linear patterns and enhance stock trend predictions.</li>
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
