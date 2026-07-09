import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Professional Journey 👨‍💼</motion.h2>
              <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>May 2025 - August 2025</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://www.thepillar.app/"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Artificial Intelligence Intern - <span className='text-2xl text-white'>Boulevard Legacy LLC</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Built an end-to-end LLM personalization pipeline for a consumer lifestyle app, designing context assembly and prompt orchestration to generate personalized daily plans from user goals, habit history, and role-model personas </li>
                            <li className='mb-2'>Implemented a feedback loop capturing user reactions (completed, skipped, rated) that fed into future generations, laying the groundwork for a personalization engine that improves over time with real user signal </li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>LLMs</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Open AI API</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Prompt Engineering</span>
                        </div>            
                    </motion.div>
                </div>
          </div>
          
          <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>Jun 2024 - Sept 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://app.moonshotpirates.com/voting/climate-24?team=1715422576809x820019839363973100"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Machine Learning Engineer Intern - <span className='text-2xl text-white'>Moonshot Pirates</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Developed 3 XGBoost risk-forecasting models (wildfire, flood, drought), trained on large-scale historical and geospatial data with time-based validation to predict disaster risk before events occur across operational regions</li>
                            <li className='mb-2'>Tested 96 model configurations to identify the most robust predictive signals and added SHAP-based explainability so non-technical response coordinators could act on the outputs, projecting a 30% reduction in response delays</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Forecasting Models</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Disaster Management</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Geospatial Data</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>June 2022 - August 2022</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://github.com/JaySinghvi/Data-Analyst-Internship-Excelerate"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Data Science Intern- <span className='text-2xl text-white'>Globalshala</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Analyzed 11 Facebook ad campaigns across 12 countries using Python, comparing engagement (CTR, clicks), reach (impressions), and financial metrics (CPC, CPR) to identify underperforming campaigns</li>
                            <li className='mb-2'>Delivered demographic and geographic insights identifying the 18-24 student segment and multi-country campaigns as top performers, and recommended discontinuing the weakest campaign, contributing to a 50% reduction in ad spend</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Python</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Statistical Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ad Optimization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization & Reporting</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
        </div>
  )
}

export default Experience
