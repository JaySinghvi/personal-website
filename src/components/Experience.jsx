import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Professional Journey</motion.h2>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>May 2024 - August 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://app.moonshotpirates.com/voting/climate-24?team=1715422576809x820019839363973100"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Machine Learning Engineer - <span className='text-2xl text-white'>Moonshot Pirates</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Developed an <b>AI-powered</b> disaster response system using <b>Django</b>, <b>Python</b>, and <b>SQL</b>, integrating <b>ML models</b> to predict high-risk areas and optimize resource allocation, reducing response time by <b>30%</b></li>
                            <li className='mb-2'>Implemented <b>predictive models</b> to forecast disaster impact and automate aid distribution, improving response efficiency and reducing misallocation by <b>25%</b></li>
                            <li className='mb-2'>Designed an interactive <b>JavaScript</b> dashboard, visualizing real-time risk assessments, increasing response coordination speed by <b>40%</b></li>
                            <li className='mb-2'>Processed and analyzed <b>1K+</b> disaster records, enhancing data-driven decision-making for emergency teams</li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Machine Learning</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Predictive Modeling</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Data Visualization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Disaster Management</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>November 2023 - January 2024</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://www.thepillar.app/"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Director of Growth - <span className='text-2xl text-white'>The Pillar App</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Led <b>AI-driven</b> growth strategy, <b>managing content-creation</b> and <b>marketing analytics teams</b>, using <b>machine learning</b> insights to optimize engagement and video content strategy</li>
                            <li className='mb-2'>Developed an AI-powered <b>sentiment analysis</b> pipeline using <b>Python</b>, <b>NLTK</b>, and <b>SQL</b>, analyzing user comments and reactions to optimize content decisions, increasing user engagement by <b>200%</b></li>
                            <li className='mb-2'>Built <b>automated</b> marketing analytics dashboards in <b>Tableau</b>, integrating <b>Google Analytics API</b> and <b>SQL pipelines</b> to track key engagement trends and optimize content distribution, leading to <b>500+</b> new user acquisitions</li>                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Artificial Intelligence</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Sentiment Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Marketing Analytics</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Content Optimization</span>
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
                            <a href="https://github.com/JaySinghvi/Data-Analyst-Internship-Excelerate"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Marketing Data Scientist - <span className='text-2xl text-white'>Excelerate</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Analyzed <b>CSV-based</b> campaign data across <b>7+</b> geographies to identify underperforming ads and reduce marketing costs</li>
                            <li className='mb-2'>Built <b>ML-driven forecasting models</b> and <b>Power BI</b> dashboards to compare campaign efficiency and reduce campaign costs</li>
                            <li className='mb-2'>Recommended discontinuing least effective campaigns based on predictive insights, driving a <b>33%</b> increase in user engagement and <b>$57K+</b> in quarterly savings, while boosting ROI and optimizing ad spend</li>
                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Marketing Data Analysis</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Forecasting Models</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Ad-Optimization</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Revenue Efficiency</span>
                        </div>            

                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-8 flex lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 justify-center items-center '>
                        <p className='mb-2 text-violet-200 text-2xl'>May 2021 - September 2021</p>
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className='w-full lg:pl-1/2 lg:w-3/4'>
                        <motion.button 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} 
                            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 1.5 }} 
                            className=" border-pink-500 bg-gradient-to-r from-pink-400 via-slate-200 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <a href="https://github.com/JaySinghvi/Full-Stack-Web-Development-Internship"><h2 className='mb-2 fon-semibold text-4xl pb-3'>Full Stack Web Developer - <span className='text-2xl text-white'>Edureka</span></h2></a>
                        </motion.button>
                        <ul className='mb-3 text-2xl list-disc pl-5 lg:justify-center '>
                            <li className='mb-2'>Developed an <b>interactive website</b> for Covid-19 impacted K-12 students, to help teachers upload courses and assignments, and enable students to access and download content, easing teacher-student communication</li>
                            <li className='mb-2'>Built accessible features with <b>React.js</b>, implemented server-side functionality using <b>Express.js</b> and <b>Node.js</b>, and managed user profile data with <b>MySQL</b>, ensuring platform accessibility with <b>WCAG</b> guidelines</li>
                            <li className='mb-2'>Deployed the platform with <b>2K+</b> active students, enhancing student engagement and learning flexibility</li>                        
                        </ul>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Full Stack Web Development</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>UI/UX Design</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>Deployment & Scalability</span>
                            <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-2xl font-medium text-purple-500'>EdTech Solutions</span>
                        </div>            

                    </motion.div>
                </div>
            </div>

        </div>
  )
}

export default Experience
